"use strict";
(() => {
var exports = {};
exports.id = 4820;
exports.ids = [4820];
exports.modules = {

/***/ 41046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 
const productLayoutDict = {
    sentinel: next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>Promise.all(/* import() */[__webpack_require__.e(7708), __webpack_require__.e(2851), __webpack_require__.e(9486), __webpack_require__.e(607), __webpack_require__.e(2164)]).then(__webpack_require__.bind(__webpack_require__, 2164)), {
        loadableGenerated: {
            modules: [
                "../layouts/_proxied-dot-io/dict.js -> " + "layouts/_proxied-dot-io/sentinel"
            ]
        }
    })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productLayoutDict);


/***/ }),

/***/ 71732:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var layouts_base_new__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89670);
/* harmony import */ var layouts_proxied_dot_io_dict__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41046);
/* harmony import */ var lib_env_checks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62676);
/* harmony import */ var lib_env_checks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lib_env_checks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var views_error_view_switcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73861);
/* harmony import */ var lib_proxied_dot_io_fetch_layout_props__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70792);
/* harmony import */ var lib_cms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55033);
/* harmony import */ var lib_products__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14684);
/* harmony import */ var constants_hostname_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52431);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([layouts_base_new__WEBPACK_IMPORTED_MODULE_1__, views_error_view_switcher__WEBPACK_IMPORTED_MODULE_4__]);
([layouts_base_new__WEBPACK_IMPORTED_MODULE_1__, views_error_view_switcher__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 





// product data, needed to render top navigation



// resolve a default export
function resolve(obj) {
    return obj && obj.__esModule ? obj.default : obj;
}
function Error({ statusCode , proxiedProductSlug , layoutProps  }) {
    // Unlike other pages, we can't use redirects and rewrites
    // to display proxied .io domain 404 pages on specific hosts.
    // Instead, we must use getServerSideProps to determine which
    // layout to show at request time.
    // ---
    // This isn't as efficient as it could be.
    // A possible alternative may be to set specific branches
    // on each proxied domain via Vercel's domain configuration.
    // These branches would be completely identical to `main`...
    // which seems inconvenient, having so many identical branches...
    // BUT this setup would allow us to determine AT BUILD TIME
    // whether we need to show a proxied product layout. We would
    // know from Vercel's GIT_COMMIT_REF System Environment Variable
    // (https://vercel.com/docs/concepts/projects/environment-variables#system-environment-variables)
    // which unlike `host` or `hostname` is accessible at build-time
    // and does not require getServerSideProps to determine.
    // (we could use getStaticProps instead, and we could therefore
    // have a separate, static 404 page, which had to be replaced with
    // a server-generated 404 in order to enable per-product layouts).
    // ---
    // If we were to take the above approach, with separate branches
    // per proxied domain, our workflows could still be the same:
    // everything production would be on main, and we'd do all work
    // on main.
    // To achieve this workflow parity, we would need to:
    // - implement a GitHub action workflow, that, on commits to `main`,
    //   would automatically sync all "proxied product branches" to hard-reset
    //   them to `main`. (One way sync: `main` >> `proxied-{product}`)
    // - add branch protection on all `proxied-{product}` branches. Since
    //   we'd be syncing them one way, constantly overwriting them with
    //   the latest work in `main`, we would want to ensure folks don't
    //   accidentally push work that they intend to deploy to these branches.
    // In addition, if we went this direction, we could also consider
    // using the same GIT_COMMIT_REF strategy for redirects. Rather than
    // having a host-specific `has` condition on redirects and rewrites,
    // we would instead generate specific sets of redirects based on the
    // whether the current branch is a specific `proxied-{product}` branch.
    const ProxiedLayout = layouts_proxied_dot_io_dict__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z[proxiedProductSlug];
    const isProxiedDotIo = Boolean(ProxiedLayout);
    const Layout = isProxiedDotIo ? ProxiedLayout : layouts_base_new__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Layout, {
        data: {
            ...layoutProps
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_error_view_switcher__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            statusCode: statusCode,
            isProxiedDotIo: isProxiedDotIo
        })
    });
}
async function getServerSideProps(ctx) {
    const { req , res , err  } = ctx;
    console.error("[pages/_error]", err);
    // Determine which layout to use, may be dev-portal's base layout,
    // or may be a proxied product layout, depending on the URL host
    const urlObj = new URL(req.url, `http://${req.headers.host}`);
    // In preview environments, we can force the app into a certain .io mode with the hc_dd_proxied_site cookie
    const ioPreviewProduct =  false ? 0 : null;
    const proxiedProductSlug = ioPreviewProduct ?? (0,lib_env_checks__WEBPACK_IMPORTED_MODULE_3__.getProxiedProductSlug)(urlObj.hostname);
    // Determine which statusCode to show
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    if (statusCode === 404) {
        // cache 404 for one day
        res.setHeader("Cache-Control", "s-maxage=86400");
    }
    /**
	 * Resolve the next/dynamic component so we can access the layout component itself,
	 * and subsequently the static .rivetParams via fetchLayoutProps
	 */ let layoutProps = {};
    try {
        if (proxiedProductSlug) {
            const layout = resolve(await layouts_proxied_dot_io_dict__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z[proxiedProductSlug].render.preload());
            layoutProps = await (0,lib_proxied_dot_io_fetch_layout_props__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(layout, proxiedProductSlug);
        }
    } catch  {
    /**
		 * Do nothing, continue on with no layoutProps. Ensure that we don't potentially get into an
		 * infinite error scenario if the fetching fails when attempting to render the error page
		 */ }
    /**
	 * Determine the product context, in order to render the correct
	 * navigation header on the dev-dot 404 page.
	 */ let productSlug;
    if (proxiedProductSlug) {
        productSlug = proxiedProductSlug;
    } else {
        const pathParts = urlObj.pathname.split("/");
        const maybeProductSlug = pathParts.length > 1 && pathParts[1];
        productSlug = (0,lib_products__WEBPACK_IMPORTED_MODULE_6__/* .isProductSlug */ .lF)(maybeProductSlug) ? maybeProductSlug : null;
    }
    // We need the whole product data (eg for top nav), not just the slug
    const product = lib_cms__WEBPACK_IMPORTED_MODULE_5__.productConfig[productSlug] || null;
    return {
        props: {
            product,
            statusCode,
            proxiedProductSlug,
            hostname: urlObj.hostname,
            layoutProps
        }
    };
}
Error.layout = ({ children  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hashicorp_react_error_view_use_error_page_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34218);
/* harmony import */ var _hashicorp_react_error_view_style_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29887);
/* harmony import */ var _hashicorp_react_error_view_style_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hashicorp_react_error_view_style_module_css__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 




/*
 * Versioned 404 error view content for use in dot-io sites.
 * Links back to the "most recent version" (pathWithoutVersion),
 * as well as the documentation root (pathBeforeVersion).
 */ function VersionedError({ version , pathWithoutVersion , pathBeforeVersion  }) {
    (0,_hashicorp_react_error_view_use_error_page_analytics__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(404);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_hashicorp_react_error_view_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().root),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                className: (_hashicorp_react_error_view_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().heading),
                children: [
                    "This page does not exist for version ",
                    version,
                    "."
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "Please select either the",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: pathWithoutVersion,
                        children: "most recent version"
                    }),
                    " or a valid version that includes the page you are looking for."
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: pathBeforeVersion,
                    children: "← Go back to Documentation"
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VersionedError);


/***/ }),

/***/ 73861:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hashicorp_react_error_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48734);
/* harmony import */ var _error_views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(743);
/* harmony import */ var _proxied_dot_io_versioned_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92434);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_error_views__WEBPACK_IMPORTED_MODULE_4__]);
_error_views__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */ 





const VERSION_PATTERN = /\/(?<version>v\d+[.]\d+[.](\d+|x))/;
/**
 * A display component that switches between:
 * - Dot-io error views, if `isProxiedDotIo` prop is `true`
 * - Dev-dot error views otherwise
 *
 * This switching isn't ideal; but feels somewhat logical since we are
 * limited to having a single pages/_error.jsx page file in the project.
 *
 * This component also handles auto-selecting versioned 404 views,
 * by matching VERSION_PATTERN in the page URL.
 */ function ErrorView({ statusCode , isProxiedDotIo  }) {
    /**
	 * Note: DotIoFallbackError calls useErrorPageAnalytics internally.
	 * If it didn't, we could call useErrorPageAnalytics once here, or in
	 * pages/_error.tsx, rather than in every error view component.
	 * useErrorPageAnalytics(statusCode).
	 *
	 * One solution might be localize `@hashicorp/react-error-view`
	 * in the dev-portal project. However, we may not be ready to do that,
	 * as the package may be used elsewhere?
	 */ const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    /**
	 * Note from Bryce on this useEffect:
	 *
	 * Due to how we are rewriting routes on the io sites, the URLs rendered in
	 * this component are incorrect during SSR, and for some reason are NOT
	 * getting reconciled on the client even though all of the props and state
	 * values internal to Link are correct.
	 *
	 * I think it's because of some hydration mismatch, so I'm using the
	 * isMounted state value as a key here to force the error view to completely
	 * re-mount. I'm sorry, I tried everything else I could think of. :')
	 */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setIsMounted(true);
    }, []);
    /**
	 * Determine if this is a 404 or versioned 404 view.
	 * For versioned views, determine the  path without version (aka latest)
	 */ const versionMatches = VERSION_PATTERN.exec(asPath);
    const versionInPath = versionMatches?.groups?.version;
    const pathWithoutVersion = asPath.replace(VERSION_PATTERN, "");
    const pathBeforeVersion = asPath.substring(0, asPath.indexOf(versionInPath));
    const is404 = statusCode == 404;
    const isVersioned404 = versionInPath && is404;
    /**
	 * Determine the error page type
	 */ let type;
    if (isProxiedDotIo) {
        if (isVersioned404) {
            type = "dot-io-versioned-404";
        } else {
            type = "dot-io-fallback";
        }
    } else {
        if (isVersioned404) {
            type = "dev-dot-versioned-404";
        } else if (is404) {
            type = "dev-dot-standard-404";
        } else {
            type = "dev-dot-fallback";
        }
    }
    /**
	 * Switch between proxied dot-io and dev-dot error views
	 */ switch(type){
        /* Dev-dot */ case "dev-dot-versioned-404":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_error_views__WEBPACK_IMPORTED_MODULE_4__/* .DevDotVersioned404 */ .ll, {
                pathBeforeVersion: pathBeforeVersion,
                pathWithoutVersion: pathWithoutVersion,
                version: versionInPath
            }, String(isMounted));
        case "dev-dot-standard-404":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_error_views__WEBPACK_IMPORTED_MODULE_4__/* .DevDot404 */ .B_, {});
        case "dev-dot-fallback":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_error_views__WEBPACK_IMPORTED_MODULE_4__/* .DevDotFallback */ .uJ, {
                statusCode: statusCode
            });
        /* Dot-io */ case "dot-io-versioned-404":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_proxied_dot_io_versioned_error__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                pathBeforeVersion: pathBeforeVersion,
                pathWithoutVersion: pathWithoutVersion,
                version: versionInPath
            }, String(isMounted));
        case "dot-io-fallback":
        default:
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hashicorp_react_error_view__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
                statusCode: statusCode
            });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48827:
/***/ ((module) => {

module.exports = require("@radix-ui/react-visually-hidden");

/***/ }),

/***/ 7372:
/***/ ((module) => {

module.exports = require("@reach/dialog");

/***/ }),

/***/ 9677:
/***/ ((module) => {

module.exports = require("@reach/portal");

/***/ }),

/***/ 80395:
/***/ ((module) => {

module.exports = require("@reach/tooltip");

/***/ }),

/***/ 76278:
/***/ ((module) => {

module.exports = require("@react-aria/utils");

/***/ }),

/***/ 18910:
/***/ ((module) => {

module.exports = require("@tanstack/react-query");

/***/ }),

/***/ 33666:
/***/ ((module) => {

module.exports = require("@vercel/fetch");

/***/ }),

/***/ 38970:
/***/ ((module) => {

module.exports = require("algoliasearch");

/***/ }),

/***/ 11189:
/***/ ((module) => {

module.exports = require("camel-case");

/***/ }),

/***/ 59003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 71239:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 79316:
/***/ ((module) => {

module.exports = require("fathom-client");

/***/ }),

/***/ 47881:
/***/ ((module) => {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 56734:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 41649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 51162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 94957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 79103:
/***/ ((module) => {

module.exports = require("query-string");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 48922:
/***/ ((module) => {

module.exports = require("react-hot-toast");

/***/ }),

/***/ 19785:
/***/ ((module) => {

module.exports = require("react-intersection-observer");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 20828:
/***/ ((module) => {

module.exports = require("rivet-graphql");

/***/ }),

/***/ 73673:
/***/ ((module) => {

module.exports = require("slugify");

/***/ }),

/***/ 66197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 46269:
/***/ ((module) => {

module.exports = import("react-instantsearch-hooks-web");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1441,3272,7791,7184,9146,3643,2067,7152,5152,8734,5703,1505,5623,9670,8418,6415,5306,2676,9682,5033,2431], () => (__webpack_exec__(71732)));
module.exports = __webpack_exports__;

})();