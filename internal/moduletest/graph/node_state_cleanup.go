// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: BUSL-1.1

package graph

import (
	"fmt"
	"log"
	"time"

	"github.com/hashicorp/terraform/internal/addrs"
	"github.com/hashicorp/terraform/internal/moduletest"
	"github.com/hashicorp/terraform/internal/moduletest/mocking"
	"github.com/hashicorp/terraform/internal/plans"
	"github.com/hashicorp/terraform/internal/states"
	"github.com/hashicorp/terraform/internal/terraform"
	"github.com/hashicorp/terraform/internal/tfdiags"
)

var (
	_ GraphNodeExecutable = (*NodeStateCleanup)(nil)
)

type NodeStateCleanup struct {
	stateKey string
	opts     *graphOptions
}

func (n *NodeStateCleanup) Name() string {
	return fmt.Sprintf("cleanup.%s", n.stateKey)
}

// Execute destroys the resources created in the state file.
// This function should never return non-fatal error diagnostics, as that would
// prevent further cleanup from happening. Instead, the diagnostics
// will be rendered directly.
func (n *NodeStateCleanup) Execute(evalCtx *EvalContext) {
	file := n.opts.File
	state := evalCtx.GetFileState(n.stateKey)
	log.Printf("[TRACE] TestStateManager: cleaning up state for %s", file.Name)

	if evalCtx.Cancelled() {
		// Don't try and clean anything up if the execution has been cancelled.
		log.Printf("[DEBUG] TestStateManager: skipping state cleanup for %s due to cancellation", file.Name)
		return
	}

	empty := true
	if !state.State.Empty() {
		for _, module := range state.State.Modules {
			for _, resource := range module.Resources {
				if resource.Addr.Resource.Mode == addrs.ManagedResourceMode {
					empty = false
					break
				}
			}
		}
	}

	if empty {
		// The state can be empty for a run block that just executed a plan
		// command, or a run block that only read data sources. We'll just
		// skip empty run blocks.
		return
	}

	if state.Run == nil {
		log.Printf("[ERROR] TestFileRunner: found inconsistent run block and state file in %s for module %s", file.Name, n.stateKey)

		// The state can have a nil run block if it only executed a plan
		// command. In which case, we shouldn't have reached here as the
		// state should also have been empty and this will have been skipped
		// above. If we do reach here, then something has gone badly wrong
		// and we can't really recover from it.

		diags := tfdiags.Diagnostics{tfdiags.Sourceless(tfdiags.Error, "Inconsistent state", fmt.Sprintf("Found inconsistent state while cleaning up %s. This is a bug in Terraform - please report it", file.Name))}
		file.UpdateStatus(moduletest.Error)
		evalCtx.Renderer().DestroySummary(diags, nil, file, state.State)

		// intentionally return nil to allow further cleanup
		return
	}

	runNode := &NodeTestRun{run: state.Run, opts: n.opts}
	updated := state.State
	startTime := time.Now().UTC()
	waiter := NewOperationWaiter(nil, evalCtx, runNode, moduletest.Running, startTime.UnixMilli())
	var destroyDiags tfdiags.Diagnostics
	cancelled := waiter.Run(func() {
		updated, destroyDiags = n.destroy(evalCtx, runNode, waiter)
	})
	if cancelled {
		destroyDiags = destroyDiags.Append(tfdiags.Sourceless(tfdiags.Error, "Test interrupted", "The test operation could not be completed due to an interrupt signal. Please read the remaining diagnostics carefully for any sign of failed state cleanup or dangling resources."))
	}

	if !updated.Empty() {
		// Then we failed to adequately clean up the state, so mark success
		// as false.
		file.UpdateStatus(moduletest.Error)
	}
	evalCtx.Renderer().DestroySummary(destroyDiags, state.Run, file, updated)
}

func (n *NodeStateCleanup) destroy(ctx *EvalContext, runNode *NodeTestRun, waiter *operationWaiter) (*states.State, tfdiags.Diagnostics) {
	file := n.opts.File
	fileState := ctx.GetFileState(n.stateKey)
	state := fileState.State
	run := runNode.run
	log.Printf("[TRACE] TestFileRunner: called destroy for %s/%s", file.Name, run.Name)

	if state.Empty() {
		// Nothing to do!
		return state, nil
	}

	variables, diags := runNode.GetVariables(ctx, false)
	if diags.HasErrors() {
		return state, diags
	}

	// we ignore the diagnostics from here, because we will have reported them
	// during the initial execution of the run block and we would not have
	// executed the run block if there were any errors.
	providers, mocks, _ := runNode.getProviders(ctx)

	// During the destroy operation, we don't add warnings from this operation.
	// Anything that would have been reported here was already reported during
	// the original plan, and a successful destroy operation is the only thing
	// we care about.
	setVariables, _, _ := runNode.FilterVariablesToModule(variables)

	planOpts := &terraform.PlanOpts{
		Mode:                   plans.DestroyMode,
		SetVariables:           setVariables,
		Overrides:              mocking.PackageOverrides(run.Config, file.Config, mocks),
		ExternalProviders:      providers,
		SkipRefresh:            true,
		OverridePreventDestroy: true,
		DeferralAllowed:        ctx.deferralAllowed,
	}

	tfCtx, _ := terraform.NewContext(n.opts.ContextOpts)
	ctx.Renderer().Run(run, file, moduletest.TearDown, 0)

	waiter.update(tfCtx, moduletest.TearDown, nil)
	plan, planDiags := tfCtx.Plan(run.ModuleConfig, state, planOpts)
	diags = diags.Append(planDiags)
	if diags.HasErrors() || plan.Errored {
		return state, diags
	}

	if !plan.Complete {
		diags = diags.Append(tfdiags.Sourceless(
			tfdiags.Warning,
			"Incomplete destroy plan",
			fmt.Sprintf("The destroy plan for %s/%s was reported as incomplete."+
				" This means some of the cleanup operations were deferred due to unknown values, please check the rest of the output to see which resources could not be destroyed.", file.Name, run.Name)))
	}

	_, updated, applyDiags := runNode.apply(tfCtx, plan, moduletest.TearDown, variables, providers, waiter)
	diags = diags.Append(applyDiags)
	return updated, diags
}
