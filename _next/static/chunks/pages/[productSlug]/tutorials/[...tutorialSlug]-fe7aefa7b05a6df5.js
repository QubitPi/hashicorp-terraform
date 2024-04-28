(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1597],{18911:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[productSlug]/tutorials/[...tutorialSlug]",function(){return n(42503)}])},13394:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/interactive-callout-visual.1f527299.svg",height:100,width:133,blurWidth:0,blurHeight:0}},77630:function(e,t,n){"use strict";n.d(t,{EZ:function(){return p},Y$:function(){return m},ZP:function(){return f}});var r=n(85893),i=n(45962),a=n(10177),o=n(63919),s=n(16231),l=n(9911),c=n(17590),u=n.n(c);let d={[o.ZN.openSource]:"Open Source",[o.ZN.enterprise]:"Enterprise",[o.ZN.hcp]:"HCP",[o.ZN.tfcFree]:"HCP Terraform",[o.ZN.tfcStandard]:"Standard",[o.ZN.tfcPlus]:"Plus"};function p(e){return e.some(e=>{let{isBeta:t}=e;return t})}function h(e){return(0,r.jsx)(s.Z,{...e,type:"base",className:u().badge,size:"small"})}let m=e=>{let{edition:t,hasVideo:n,isBeta:o,isInteractive:s,products:c}=e,u=[];return o&&u.push((0,r.jsx)(h,{color:"highlight",text:"Beta"})),"open_source"!==t&&u.push((0,r.jsx)(h,{text:d[t]})),Array.isArray(c)&&c.length>0&&c.forEach(e=>{u.push((0,r.jsx)(h,{icon:(0,r.jsx)(l.Z,{productSlug:e.slug}),text:e.name},e.slug))}),n&&u.push((0,r.jsx)(h,{icon:(0,r.jsx)(i.C,{}),text:"Video"})),s&&u.push((0,r.jsx)(h,{icon:(0,r.jsx)(a.j,{}),text:"Interactive"})),u};function f(e){let t=Math.floor(e/60),n=e%60;return t&&n>0?"".concat(t,"hr ").concat(n,"min"):t?"".concat(t,"hr"):"".concat(e,"min")}},57777:function(e,t,n){"use strict";n.d(t,{Zp:function(){return g},Xn:function(){return b},Xk:function(){return f},ZP:function(){return N}});var r=n(85893),i=n(67294),a=n(11163),o=n(9682),s=n(43821),l=n(30233),c=n(64749),u=n(14597),d=n(57001),p=n.n(d);function h(e){let{collection:t}=e,{id:n,slug:a,tutorials:o}=t,{data:s}=(0,l.N2)({collectionId:n}),{completedTutorialCount:u,tutorialCount:d,isInProgress:h}=(0,i.useMemo)(()=>(0,c.s)(s,o.length,{id:n,slug:a}),[s,o,n,a]);return(0,r.jsx)("div",{className:p().collectionProgressContainer,children:(0,r.jsx)(c.Nq,{completedTutorialCount:u,tutorialCount:d,isInProgress:h})})}function m(e){let{href:t,isActive:n,text:i,tutorialId:a,collectionId:s}=e,{tutorialProgressStatus:c}=(0,l.Xm)({tutorialId:a,collectionId:s}),d=(0,r.jsx)(u.Z,{status:c,isActive:n});return(0,r.jsx)(o.Rd,{item:{isActive:n,title:i,href:t,trailingIcon:d}})}var f=function(e){let{collection:t,items:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,{collection:t}),(0,r.jsx)(b,{children:n.map(e=>(0,r.jsx)(m,{text:e.text,href:e.href,isActive:e.isActive,tutorialId:e.tutorialId,collectionId:e.collectionId},"".concat(e.collectionId).concat(e.tutorialId)))})]})},x=n(20248),v=n.n(x);function g(e){let{sections:t,productSlug:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_,{productSlug:n}),null==t?void 0:t.map(e=>{let{title:t,items:n}=e;return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(w,{}),t?(0,r.jsx)(y,{text:t}):null,(0,r.jsx)(b,{children:n.map(e=>{let{text:t,href:n,isActive:i,badge:a}=e;return(0,r.jsx)(j,{text:t,href:n,isActive:i,badge:a},"".concat(t).concat(n))})})]},t)})]})}function _(e){let{productSlug:t}=e,n=(0,a.useRouter)(),i="/".concat(t,"/tutorials");return(0,r.jsx)(o.TM,{text:"Tutorials",href:i,theme:t,isActive:n.asPath===i})}function b(e){let{children:t}=e;return(0,r.jsx)("ul",{className:v().listRoot,children:t})}function j(e){let{href:t,isActive:n,text:i,badge:a}=e;return(0,r.jsx)(o.Rd,{item:{isActive:n,title:i,href:t,badge:a}})}function y(e){let{text:t}=e;return(0,r.jsx)(o.Y,{text:t})}function w(){return(0,r.jsx)(o.ny,{})}var N=function(e){let{backToLinkProps:t,children:n,levelButtonProps:i,overviewItemHref:a,title:o,visuallyHideTitle:l}=e;return(0,r.jsx)(s.Z,{backToLinkProps:t,levelButtonProps:i,overviewItemHref:a,showFilterInput:!1,title:o,visuallyHideTitle:l,children:n})}},90651:function(e,t,n){"use strict";n.d(t,{Jr:function(){return i},vD:function(){return o}});var r=n(38938);function i(e){let{id:t,slug:n,name:i,short_name:o,description:s,icon:l,theme:c,ordered:u,level:d,category:p,tutorials:h,next_collection:m}=e;return{id:t,slug:n,name:i,shortName:o,description:s,icon:l,theme:c,ordered:u,level:d,category:p||void 0,tutorials:h.map(a),nextCollection:m?(0,r.je)(m):void 0}}function a(e){var t;let{id:n,name:i,short_name:a,slug:s,description:l,read_time:c,edition:u,products_used:d,default_collection:p}=e.tutorial,h=d.map(o),m=(0,r.Oz)(e.tutorial),f=(0,r.Lf)(e.tutorial),x=(null===(t=e.tutorial.variants)||void 0===t?void 0:t.length)>0?(0,r.yf)(e.tutorial.variants[0]):void 0;return{id:n,name:i,shortName:a||i,slug:s,description:l,readTime:c,edition:u,productsUsed:h,video:m,handsOnLab:f,defaultContext:(0,r.je)(p),variant:x}}function o(e){let{product:t,tutorial_id:n,is_primary:r,is_beta:i,min_version:a,max_version:o}=e,{id:s,slug:l,name:c,docs_url:u,description:d}=t;return{product:{id:s,slug:l,name:c,docsUrl:u,description:d},tutorial:n,isPrimary:r,isBeta:i,minVersion:a||void 0,maxVersion:o||void 0}}},57302:function(e,t,n){"use strict";n.d(t,{Lg:function(){return u},Jz:function(){return d}}),n(1864);var r=n(65398),i=n(63919),a=n(87158);let o=e=>"/products/".concat(e,"/collections");async function s(e){let t=o(e.slug),n=t;if(e.sidebarSort){let r=new URLSearchParams([["topLevelCategorySort","true"],["theme",e.slug]]);n=t+"?".concat(r.toString())}let r=await (0,a.U2)(n);if(r.ok)return(await r.json()).result;throw(0,a.KC)(r)}var l=n(90651);let c="/collections";async function u(e){let t=[];if((null==e?void 0:e.product)&&(0,i.ig)(e.product.slug))t=[...await s(e.product)];else{var n;let i=null==e?void 0:null===(n=e.limit)||void 0===n?void 0:n.toString();t=[...await (0,r.Qd)({baseUrl:c,recurse:!i,limit:i})]}return t.map(l.Jr)}async function d(e){let t=await (0,a.U2)(c+"?section=".concat(e));if(t.ok){let n=await t.json();return 0===n.result.length&&console.warn("No collections found for section query: ".concat(e)),n.result.map(l.Jr)}throw(0,a.KC)(t)}},38938:function(e,t,n){"use strict";n.d(t,{Lf:function(){return s},Oz:function(){return o},je:function(){return a},ri:function(){return i},yf:function(){return l}});var r=n(90651);function i(e){let{id:t,slug:n,name:i,short_name:c,description:u,content:d,default_collection_id:p,featured_collections:h,read_time:m,edition:f,products_used:x,variants:v}=e,g=x.map(r.vD),_=o(e),b=s(e);return{id:t,slug:n,name:i,shortName:c||i,description:u,content:d,collectionCtx:function(e,t){let n;let i=e.find(e=>{let{id:n}=e;return n===t});return n="tutorials"in e[0]?e.map(r.Jr):e.map(a),{default:a(i),featuredIn:n}}(h,p),productsUsed:g,readTime:m,video:_,handsOnLab:b,edition:f,variant:(null==v?void 0:v.length)>0?l(v[0]):void 0}}function a(e){let{id:t,name:n,slug:r,short_name:i,level:a,theme:o}=e;return{id:t,name:n,slug:r,shortName:i,level:a,theme:o}}function o(e){let t,{video_id:n,video_host:r,video_inline:i}=e;return n&&(t={id:n,videoHost:r,videoInline:i}),t}function s(e){let t,{hands_on_lab_id:n,hands_on_lab_provider:r}=e;return n&&(t={id:n,provider:r}),t}function l(e){let{options:t,...n}=e;return{...n,options:t.map(e=>{let{display_order:t,...n}=e;return{displayOrder:t,...n}})}}},65398:function(e,t,n){"use strict";n.d(t,{Qd:function(){return o}});var r=n(1864),i=n.n(r),a=n(87158);async function o(e){let{baseUrl:t,recurse:n=!0,limit:r="100",fullContent:i=!1,after:a,fetchedTutorials:l}=e;void 0===l&&(l=[]);let c=await s(t,r,a,i);if(c.ok){let e=await c.json(),a=[...l,...e.result];return!n||e.result.length<Number("100")?a:o({baseUrl:t,recurse:!0,limit:r,after:e.result[e.result.length-1].id,fetchedTutorials:a,fullContent:i})}}async function s(e,t,n,r){let o=new URLSearchParams({limit:t});n&&o.append("after",n),r&&o.append("full","1");let s="?".concat(o.toString()),l=i().join(e,s),c=await (0,a.U2)(l);if(c.ok)return c;throw await (0,a.KC)(c)}},42503:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return tf},default:function(){return tx}});var r,i,a=n(85893),o=n(67294),s=n(9008),l=n.n(s),c=n(98986),u=n(30233),d=n(23934),p=n(72249),h=n(93967),m=n.n(h),f=n(80141),x=n.n(f);function v(){let e=(0,o.useRef)();(0,o.useEffect)(()=>{e.current&&e.current.focus()},[]);let{active:t,labId:n}=I();return(0,a.jsx)("iframe",{ref:e,title:"Instruqt",width:"100%",height:"100%",sandbox:"allow-same-origin allow-scripts allow-popups allow-forms allow-modals",src:"https://play.instruqt.com/embed/".concat(n),style:{height:"inherit",minHeight:"640px"},className:m()(x().baseEmbedElement,{[x().hide]:!t})})}var g=n(99600),_=n(86570),b=n(87078),j=n.n(b);function y(e){let{onMouseDown:t,onMouseUp:n,onClosePanel:r,style:i={}}=e;return(0,a.jsxs)("div",{className:j().resizeWrapper,style:i,children:[(0,a.jsx)("div",{className:j().resizer,onMouseDown:t,onMouseUp:n,children:(0,a.jsx)(_.Z,{className:j().resizeBar,src:'<svg xmlns="http://www.w3.org/2000/svg" width="120" height="14" fill="none"><rect width="120" height="4" fill="var(--token-color-palette-neutral-300), #c2c5cb" rx="2"/><rect width="120" height="4" y="10" fill="var(--token-color-palette-neutral-300), #c2c5cb" rx="2"/></svg>'})}),(0,a.jsx)("button",{className:j().closeIcon,onClick:r,children:(0,a.jsx)(g.v,{})})]})}var w=n(47065),N=n.n(w);function k(e){let{panelActive:t,setPanelActive:n,children:r,style:i,initialHeight:s=400}=e,[l,c]=(0,o.useState)(0),[u,d]=(0,o.useState)(0),[p,h]=(0,o.useState)(s),[f,x]=(0,o.useState)(s),[v,g]=(0,o.useState)(!1),_=(0,o.useRef)();function b(e){x(p),d(e.screenY)}function j(){g(!1),window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",j)}return(0,o.useEffect)(()=>{if(_.current){let e=f-(u-l);910>e&&e>300&&h(e)}},[u,l,f]),(0,a.jsxs)("div",{className:m()(N().resizable,{[N().resizing]:v},{[N().hide]:!t}),ref:_,style:{height:"".concat(p,"px")},"data-resizing":String(v),children:[(0,a.jsx)(y,{onClosePanel:()=>n(!t),onMouseDown:function(e){e.preventDefault(),c(e.screenY),g(!0),window.addEventListener("mousemove",b),window.addEventListener("mouseup",j)},style:i}),r]})}let S={"track.started":"Instruqt Track Started","track.completed":"Instruqt Track Completed","track.challenge_started":"Instruqt Challenge Started","track.challenge_completed":"Instruqt Challenge Completed"},C=(0,o.createContext)({});C.displayName="InstruqtContext";let I=()=>(0,o.useContext)(C);function P(e){let{labId:t,children:n}=e,[r,i]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=e=>(function(e,t){let n=e.data;if(e.origin&&e.origin.indexOf("instruqt.com")>=0){var r;let e=S[n.event]||"Instruqt Track Progressed",i={id:t.labId,track_slug:n.params.track_slug,event:n.event};null===(r=window.analytics)||void 0===r||r.track(e,i)}})(e,{labId:t});return r&&window.addEventListener("message",e,!0),()=>{window.removeEventListener("message",e)}},[r,t]),(0,a.jsxs)(C.Provider,{value:{labId:t,active:r,setActive:i},children:[n,r&&(0,a.jsx)("div",{id:"instruqt-panel-target",children:(0,a.jsx)(k,{initialHeight:640,panelActive:r,setPanelActive:i,style:{top:"-28px"},children:(0,a.jsx)(v,{})})})]})}var T=n(52291),E=n(81082),Z=n(67373),z=n(12726),L=n.n(z),W=n(57302),q=n(32729);n(16658);let A=L()(W.Lg,{isPromise:!0,maxSize:1/0,isDeepEqual:!0});async function B(e,t){let n;if("hcp"==e){let e=await (0,W.Jz)("cloud");n=(0,E.Fi)(e,t.slug)}else{let r=(await A({product:{slug:e,sidebarSort:!0}})).filter(t=>t.theme===e&&!t.slug.includes("onboarding"));n=(0,E.Jd)(r,t.slug)}return n}var F=n(18602),V=n(31354),R=n(35625),O=n(57777),H=n(48305),D=n(89168),G=n(17267),M=n(60348),U=n(69193),J=n(77630),Q=n(17590),X=n.n(Q);function Y(e){let{options:t}=e,{readTime:n,products:r,edition:i,isBeta:o,hasVideo:s,isInteractive:l}=t,c=(0,J.Y$)({edition:i,hasVideo:s,isBeta:o,isInteractive:l,products:r});return(0,a.jsxs)("ul",{className:X().list,children:[(0,a.jsx)("li",{className:X().listItem,children:(0,J.ZP)(n)}),c.length>0?(0,a.jsx)("li",{className:m()(X().listItem,X().seperator),children:"|"}):null,c.map((e,t)=>(0,a.jsx)("li",{className:X().listItem,children:e},t))]})}var K=n(98585),$=n(23691),ee=n.n($),et=n(77587);function en(e){let{className:t,collections:n}=e;return 0===n.length?null:(0,a.jsxs)("div",{className:t,children:[(0,a.jsx)("h2",{className:ee().heading,children:"This tutorial also appears in:"}),(0,a.jsx)("div",{className:ee().cards,children:(0,a.jsx)(et.Z,{fixedColumns:1==n.length?2:null,children:n.map(e=>(0,a.jsx)(K.FG,{...e},e.id))})})]})}var er=n(44504),ei=n(62263),ea=n.n(ei);function eo(e){let{tutorial:t,collection:n,finalLink:r}=e;return(0,a.jsxs)("div",{className:ea().linkBoxWrapper,children:[t.previous?(0,a.jsx)(er.Z,{label:"Previous",name:t.previous.name,href:t.previous.path,direction:"previous",ariaLabel:"Go to previous tutorial: ".concat(t.previous.name)}):(0,a.jsx)(er.Z,{href:n.current.path,label:"Collection Overview",name:n.current.name,direction:"previous",ariaLabel:"Go back to collection overview: ".concat(n.current.name)}),t.next&&!t.isLast?(0,a.jsx)(er.Z,{label:"Next",name:t.next.name,href:t.next.path,direction:"next",ariaLabel:"Go to next tutorial: ".concat(t.next.name)}):n.isLast?(0,a.jsx)(er.Z,{href:r,label:"Next",name:"Explore tutorial library",direction:"final",ariaLabel:"Browse Tutorials"}):(0,a.jsx)(er.Z,{href:n.next.path,label:"Next Collection",name:n.next.name,direction:"next",ariaLabel:"Go to next collection: ".concat(n.next.name)})]})}var es=n(68159),el=n(3032),ec=n(14670),eu=n.n(ec);(r=i||(i={}))[r.inProgress=0]="inProgress",r[r.finished=1]="finished";var ed=n(75942),ep=n(27552),eh=n(14336),em=n.n(eh);let ef=e=>{let t,{question:n,animate:r}=e,{id:i,type:s,label:l,labelSecondary:c,labelIcon:u}=n,[d,p]=(0,o.useState)(""),h=(0,o.useContext)(ev);if(h.activeQuestion!==i)return null;switch(s){case"choice":{let{answers:e}=n;t=(0,a.jsx)("div",{className:em().buttonWrapper,children:e.map(e=>{let{icon:t,display:n,value:r,nextQuestion:o}=e;return(0,a.jsx)(ep.Z,{type:o?"button":"submit","data-testid":o?null:"submit-button",disabled:h.isTransitioning,"aria-label":n,text:n,color:"secondary",onClick:e=>h.submitQuestion(e,{id:i,value:r,nextQuestion:o}),icon:t,"data-heap-track":"feedback-form-button-".concat(i,"-").concat(r)},n)})});break}case"text":{let{optional:e,buttonText:r,nextQuestion:o,placeholder:s="Your feedback..."}=n,l=!e&&(""===d||h.isTransitioning),c=d.length;t=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:em().textAreaContainer,children:[(0,a.jsx)("textarea",{id:i,value:d,onChange:e=>p(e.currentTarget.value),className:m()(em().textArea,c?em().visited:null),placeholder:s}),e&&!c?(0,a.jsx)("span",{className:em().optionalText,children:"(optional)"}):null]}),(0,a.jsx)(ep.Z,{className:em().submitButton,type:o?"button":"submit","data-testid":o?null:"submit-button","aria-label":r,text:r,disabled:l,onClick:e=>h.submitQuestion(e,{id:i,value:d})})]})}}return(0,a.jsxs)("div",{className:m()(em().question,em()[s],r&&em().animate),children:[(0,a.jsxs)("label",{htmlFor:i,className:em().labelWrapper,children:[u&&(0,a.jsx)("div",{className:em().labelIcon,children:u}),(0,a.jsxs)("span",{className:em().label,children:[(0,a.jsx)("strong",{children:l}),c?" ".concat(c):""]})]}),t]})},ex=e=>new Promise(t=>setTimeout(t,e)),ev=(0,o.createContext)({});function eg(e){let{questions:t,finishedText:n,onQuestionSubmit:r=()=>void 0}=e,[s,l]=(0,o.useState)(i.inProgress),[c,u]=(0,o.useState)(!1),[d,p]=(0,o.useState)([]),[h,m]=(0,o.useState)(t[0].id),f=(0,o.useRef)(),x=()=>(f.current||(f.current=eu().generate()),f.current),v=(0,o.useMemo)(()=>({isTransitioning:c,activeQuestion:h,submitQuestion(e,t){e.preventDefault();let n=[...d,{id:t.id,value:t.value}];p(n),u(!0),Promise.race([r(n,x()),ex(200)]).finally(()=>{u(!1),t.nextQuestion?m(t.nextQuestion):l(i.finished)})}}),[h,d]);return(0,a.jsxs)(ev.Provider,{value:v,children:[(0,a.jsx)("form",{id:"feedback-panel",children:s===i.inProgress?t.map((e,t)=>(0,a.jsx)(ef,{question:e,animate:0!==t},e.id)):null}),s===i.finished?(0,a.jsx)(ed.q,{text:n}):null]})}ev.displayName="FeedbackFormContext";var e_=n(81661),eb=n.n(e_);async function ej(e,t){let n={responses:e.reduce((e,t)=>{let{id:n,value:r}=t;return Object.assign(e,{[n]:r})},{}),sessionId:t,timestamp:new Date};try{let e={...n,page:document.location.pathname},t=async()=>{await fetch("/api/tutorial-feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};await t()}catch(e){console.warn(e)}}let ey=[{id:"helpful",type:"choice",label:"Was this tutorial helpful?",answers:[{icon:(0,a.jsx)(el.k,{color:"var(--token-color-foreground-faint)"}),value:"yes",display:"Yes",nextQuestion:"reasonForVisit"},{icon:(0,a.jsx)(es.Z,{color:"var(--token-color-foreground-faint)"}),value:"no",display:"No",nextQuestion:"suggestedImprovements"}]},{id:"reasonForVisit",type:"text",labelIcon:(0,a.jsx)(el.k,{color:"var(--token-color-foreground-faint)"}),label:"We want to hear from you.",labelSecondary:"Why did you visit this tutorial?",buttonText:"Submit",optional:!0},{id:"suggestedImprovements",type:"text",labelIcon:(0,a.jsx)(es.Z,{color:"var(--token-color-foreground-faint)"}),label:"We want to hear from you.",labelSecondary:"How could this tutorial be more helpful?",buttonText:"Submit",optional:!0}];function ew(){return(0,a.jsx)("div",{className:eb().root,children:(0,a.jsx)(eg,{questions:ey,onQuestionSubmit:ej,finishedText:(0,a.jsx)(a.Fragment,{children:"Thank you! Your feedback will help us improve our websites."})})})}var eN=n(83952),ek=n(11163),eS=n(52406),eC=n(72898),eI=n(36808),eP=n.n(eI);function eT(e,t){let n=new URL(e,"https://developer.hashicorp.com");return t&&n.searchParams.get("variants")!==t?(n.searchParams.set("variants",t),n.pathname.toString()+n.search.toString()):e}function eE(e,t){return"".concat(e,":").concat(t)}function eZ(e,t){return e.displayOrder-t.displayOrder}function ez(e,t){let n="variants",r={};try{let e=eP().get(n);e&&(r=JSON.parse(e))}catch(e){console.error("[handleVariantCookie]: Error parsing variants cookie ",e)}r[e]&&r[e]===t||(r[e]=t,eP().set(n,JSON.stringify(r)))}var eL=n(51493),eW=n.n(eL);function eq(e){let{variant:t,isFullWidth:n}=e,r=(0,eN.Me)(),{asPath:i}=(0,ek.useRouter)();return(0,a.jsxs)("div",{className:eW().root,children:[(0,a.jsx)(M.Z,{weight:"semibold",size:100,className:eW().label,id:r,children:t.name}),(0,a.jsx)(eC.ZP,{"aria-describedby":r,color:"secondary",text:t.activeOption.name,isFullWidth:n,children:t.options.sort(eZ).map(e=>e.slug===t.activeOption.slug?null:(0,a.jsx)(eC.zQ,{href:eT(i,eE(t.slug,e.slug)),onClick:()=>{ez(t.slug,e.slug),(0,eS.iH)("Variant Selected",{variant:t.slug,option:e.slug,path:i})},children:e.name},e.slug))})]})}function eA(){return(0,o.useContext)(eB)}let eB=(0,o.createContext)({currentVariant:null});function eF(e){let{children:t,variant:n}=e,[r,i]=(0,o.useState)(n),s=(0,o.useMemo)(()=>({currentVariant:r,setCurrentVariant:i}),[r]);return(0,o.useEffect)(()=>{n&&n.activeOption.id!==(null==r?void 0:r.activeOption.id)&&i(n)},[n,r]),(0,a.jsx)(eB.Provider,{value:s,children:t})}eB.displayName="VariantContext";var eV=n(2150),eR=n(20395),eO=n.n(eR);function eH(e){let{variant:t}=e,n="variant-list-label",{asPath:r}=(0,ek.useRouter)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("label",{id:n,className:eO().label,children:t.name}),(0,a.jsx)("nav",{children:(0,a.jsx)("ul",{"aria-labelledby":n,className:eO().list,children:t.options.sort(eZ).map(e=>{let n=eE(t.slug,e.slug),i=t.activeOption.slug===e.slug;return(0,a.jsx)("li",{children:(0,a.jsx)(eV.Z,{className:m()(eO().link),href:eT(r,n),"aria-current":i?"page":void 0,onClick:()=>{ez(t.slug,e.slug),(0,eS.iH)("Variant Selected",{variant:t.slug,option:e.slug,path:r})},children:e.name})},e.slug)})})})]})}var eD=n(3911),eG=n.n(eD);function eM(){let{currentVariant:e}=eA();return e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:eG().desktopVariantList,"data-heap-track":"variant-list",children:(0,a.jsx)(eH,{variant:e})}),(0,a.jsx)("div",{className:eG().mobileVariantDropdownDisclosure,children:(0,a.jsx)(eq,{isFullWidth:!0,variant:e})})]}):null}var eU=n(10177);function eJ(){let e=I();if(!e.labId)return null;let t="".concat(e.active?"Hide":"Show"," Terminal");return(0,a.jsx)(ep.Z,{text:t,onClick:()=>e.setActive(!e.active),icon:(0,a.jsx)(eU.j,{}),"data-heap-track":"interactive-lab-button",color:"secondary",size:"small"})}var eQ=n(88079),eX=n.n(eQ);function eY(e){let{heading:t,meta:n,tutorialId:r}=e,{isInteractive:i,hasVideo:o,edition:s,productsUsed:l,readTime:c}=n,{isAuthenticated:u,isLoading:d}=(0,H.Z)();return(0,a.jsxs)("header",{className:eX().header,children:[(0,a.jsx)(D.Z,{level:1,size:600,weight:"bold",id:t.slug,className:eX().heading,children:t.text}),(0,a.jsxs)("div",{className:eX().meta,children:[(0,a.jsx)(Y,{options:{readTime:c,isBeta:(0,J.EZ)(l),products:l.map(e=>({name:e.product.name,slug:e.product.slug})),edition:s,hasVideo:o,isInteractive:i}}),(0,a.jsxs)("span",{className:eX().buttonGroup,children:[(0,a.jsx)(eJ,{}),(0,a.jsx)(U.Xt,{tutorial:{id:r,name:t.text}})]})]}),d||u?null:(0,a.jsxs)(M.Z,{className:eX().createAccountCta,size:100,children:["Reference this often?"," ",(0,a.jsx)(G.Z,{href:"/sign-up",textSize:100,children:"Create an account"})," ","to bookmark tutorials."]}),(0,a.jsx)(eM,{})]})}var eK=n(56310),e$=n(58750),e0=n.n(e$);let e1="64px";function e2(e){let{imageUrl:t}=e,n={display:"flex",alignItems:"center",justifyContent:"center"},r={preview:{position:"absolute",top:"0",width:"100%",height:"100%",...t&&{backgroundImage:"url(".concat(t,")")},backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer",...n},shadow:{background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:e1,width:e1,height:e1,position:void 0,...n},playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},i=(0,a.jsx)("div",{style:r.shadow,className:"react-player__shadow",children:(0,a.jsx)("div",{style:r.playIcon,className:"react-player__play-icon"})});return(0,a.jsx)("div",{style:r.preview,className:"react-player__preview",children:i})}function e3(e){var t;let{className:n,percentPlayedCallback:r=()=>null,percentPlayedMilestones:i,start:s,url:l,...c}=e,[u,{setEnded:d,setDuration:p,setPosition:h,setPlaying:f,setStopped:x}]=function(){let[e,t]=(0,o.useState)({position:0,isPlaying:!1});return[e,{setEnded:function(){t(e=>({...e,position:e.duration,isPlaying:!1}))},setDuration:function(e){t(t=>({...t,duration:e}))},setPosition:function(e){t(t=>({...t,position:e}))},setPlaying:function(){t(e=>({...e,isPlaying:!0}))},setStopped:function(){t(e=>({...e,isPlaying:!1}))}}]}(),v=(t=function(e,t,n){let[r,i]=(0,o.useState)([]),a=(0,o.useCallback)(e=>{i(t=>(function(e,t,n,r){let i=Math.round(100*e)/100,a=Math.max(0,i-2.1);if(0==t.length)return[{start:a,end:i}];let o=!1,s=t.map(e=>(o||(i>=e.start&&i<=e.end?o=!0:e.end<i&&e.end+2.1>=i&&(e.end=i,o=!0)),e));return o||s.push({start:a,end:i}),s.sort((e,t)=>e[0]-t[0]).reduce((e,t)=>{if(0==e.length)return e.push(t),e;let n=e[e.length-1];if(t.start<=n.end){let r={start:n.start,end:Math.max(n.end,t.end)};e[e.length-1]=r}else e.push(t);return e},[])})(e,t,0,0))},[2,1e3]);(0,o.useEffect)(()=>{let t=e.isPlaying,n=e.position==e.duration;(t||n)&&a(e.position)},[e,a]);let s=r.reduce((e,t)=>e+(t.end-t.start),0);return{list:r,percent:e.duration?Math.round(s/e.duration*1e3)/10:0}}(u,0,0).percent,(0,o.useMemo)(()=>i.reduce((e,n)=>t>=n?n:e,null),[t,i]));(0,o.useEffect)(()=>{null!==v&&r(v)},[v,r]);let[g,_]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{g||_(!0)},[g]),(0,a.jsx)("div",{className:m()(e0().playerWrapper,n),children:g?(0,a.jsx)(eK.Z,{...c,config:s?{youtube:{playerVars:{start:s}},wistia:{options:{time:s}}}:{},url:l,onDuration:p,progressInterval:1e3,onProgress:e=>{let{playedSeconds:t}=e;h(t)},onEnded:d,onPlay:f,onPause:x,className:e0().reactPlayer,width:"100%",height:"100%",controls:!0}):(0,a.jsx)(e2,{imageUrl:c.light})})}let e5=[1,25,50,75,90];var e7=function(e){let{url:t,...n}=e;if("string"!=typeof t)throw Error('VideoEmbed URL must be a string. Found type "'.concat(typeof t,'". While other formats for this prop may be supported by react-player, they are not supported by our VideoEmbed component. Please ensure the "url" prop is a string.'));return(0,a.jsx)(e3,{...n,url:t,percentPlayedMilestones:e5,percentPlayedCallback:e=>{!function(e){let{video_url:t,video_progress:n}=e;(0,eS.iH)("Video Played",{video_url:t,video_progress:n})}({video_url:t,video_progress:e})}})},e8=n(49423),e9=n(29163),e6=n(89755),e4=n.n(e6),te=n(46509),tt=n(22273),tn=n.n(tt);let tr={Accordion:e8.EZ,InteractiveLabCallout:function(){let e=I();return e.labId?(0,a.jsxs)(te.Z,{className:tn().interactiveCallout,elevation:"base",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:tn().title,children:"Launch Terminal"}),(0,a.jsx)("p",{className:tn().description,children:"This tutorial includes a free interactive command-line lab that lets you follow along on actual cloud infrastructure."}),(0,a.jsx)("div",{className:tn().ctaButton,children:(0,a.jsx)(ep.Z,{"data-heap-track":"interactive-lab-callout",color:"secondary",text:"Start interactive lab",onClick:()=>e.setActive(!0),size:"small"})})]}),(0,a.jsx)("div",{className:tn().image,children:(0,a.jsx)(e4(),{src:n(13394),width:133,height:100,alt:"",layout:"responsive"})})]}):null},img:e9.Z,Variant:function(e){let{slug:t,option:n,children:r}=e,{currentVariant:i}=eA();if(!i)return null;let a=i.slug===t&&i.activeOption.slug===n;if(!i.options.find(e=>e.slug===n))throw Error("[mdx-variant]: Option not valid for variant: '".concat(t,"'. Please pass one of the available options — ").concat(i.options.map(e=>e.slug).join(", ")));return a?r:null},VideoEmbed:e7};var ti=n(63919);let ta={[ti.Bw.youtube]:"https://www.youtube.com/watch?v=",[ti.Bw.wistia]:"https://hashicorp.wistia.com/medias/"};var to=n(64092),ts=n(25153),tl=n(20247),tc=n(92150),tu=n(16354),td=n.n(tu),tp=n(70553),th=n.n(tp);let tm=e=>{let{children:t,collectionCtx:n,product:r,setCollectionViewSidebarSections:i}=e,{mobileMenuIsOpen:s}=(0,p.Sn)(),l=(0,o.useRef)(!1);return(0,o.useEffect)(()=>{!1===l.current&&s&&B(r.slug,n.current).then(e=>{l.current=!0,i(e)})},[n,s,r,i]),(0,a.jsx)(a.Fragment,{children:t})};var tf=!0,tx=function(e){var t;let{layoutProps:n,product:r,tutorial:i,outlineItems:s,pageHeading:p,metadata:h}=e,m=(0,d.Z)({excludeHash:!0,excludeSearch:!0}),[f,x]=(0,o.useState)(null),{id:v,slug:g,content:_,readTime:b,productsUsed:j,edition:y,handsOnLab:w,video:N,collectionCtx:k}=i,S=null===(t=k.featuredIn)||void 0===t?void 0:t.filter(e=>e.id!==k.current.id),C=!!N,I=!!w,z=I?P:o.Fragment,L=function(e){let t,n,r,{currentTutorialSlug:i,currentCollection:a,nextCollectionInSidebar:o,formatting:s}=e,l=a.tutorials.findIndex(e=>e.slug===i),c=l===a.tutorials.length-1;if(0!==l){let{slug:e,shortName:n}=a.tutorials[l-1];t={path:s.getTutorialSlug(e,a.slug),name:n}}if(!c){let{slug:e,shortName:t}=a.tutorials[l+1];n={path:s.getTutorialSlug(e,a.slug),name:t}}o&&(r={path:s.getCollectionSlug(o.slug),name:o.shortName});let u=function(e){let t="/tutorials/library",n=new URLSearchParams;return"hashicorp"===e?t:("cloud"===e?n.set("edition","hcp"):n.set("product",e),"".concat(t,"?").concat(n.toString()))}(a.theme),d=a.slug.split("/")[0];return"well-architected-framework"===d?u="/well-architected-framework":"onboarding"===d&&(u="/tutorials/library"),{tutorial:{previous:t,next:n,isLast:c},collection:{current:{path:s.getCollectionSlug(a.slug),name:a.shortName},next:r,isLast:c&&!r},finalLink:u}}({currentCollection:k.current,currentTutorialSlug:g,nextCollectionInSidebar:i.nextCollectionInSidebar,formatting:{getTutorialSlug:E.Jc,getCollectionSlug:E.I_}}),W=i.collectionCtx.default.slug,A=(0,q.M4)(W,g),B=[(0,R.Vz)(r.name),(0,R._G)(r),(0,Z.E)(r,n.sidebarSections),{levelButtonProps:{levelUpButtonText:k.current.shortName},backToLinkProps:{text:k.current.shortName,href:(0,E.I_)(k.current.slug)},visuallyHideTitle:!0,children:(0,a.jsx)(O.Xk,{collection:k.current,items:k.current.tutorials.map(e=>(0,q.Bz)(e,k.current,m))})}],H=k.current.id,D=k.current.tutorials.map(e=>e.id);(0,c._)({tutorials:D.map(e=>({tutorialId:e,collectionId:H})),collections:[H]});let G="".concat(v,"_").concat(k.current.id),M=(0,u.Q0)({tutorialId:v,collectionId:H});return!function(e){let{tutorialId:t,collectionId:n,collectionTutorialIds:r}=e,{tutorialProgressStatus:i}=(0,u.Xm)({tutorialId:t,collectionId:n}),s=function(e){let t=(0,o.useRef)();return(0,o.useEffect)(()=>{t.current=e},[e]),t.current}(i),{data:l}=(0,u.N2)({collectionId:n});(0,o.useEffect)(()=>{var e;if(void 0===s||void 0===l||!("complete"!==s&&"complete"===i))return;let n=r.filter(e=>e!==t),o=l.filter(e=>"100"==e.complete_percent).map(e=>e.tutorial_id);e=n.filter(e=>!o.includes(e)).length,(0,tc.Am)({...0==e?{title:"Collection complete!",description:"Great job, keep up the momentum!",icon:(0,a.jsx)(tl.t,{className:td().collectionCompleteIcon}),color:to.P.success}:{title:"Tutorial complete!",description:"You have ".concat(e," tutorial").concat(1==e?"":"s"," left in this collection."),icon:(0,a.jsx)(ts.C,{className:td().tutorialCompleteIcon})},autoDismiss:5e3})},[l,s,r,t,i])}({tutorialId:v,collectionId:H,collectionTutorialIds:D}),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l(),{children:[(0,a.jsx)("link",{rel:"canonical",href:A.toString()},"canonical"),A.pathname!==m?(0,a.jsx)("meta",{name:"robots",content:"noindex, nofollow"},"robots"):null]}),(0,a.jsx)(z,{...I&&{labId:w.id},children:(0,a.jsx)(eF,{variant:h.variant,children:(0,a.jsx)(T.Z,{breadcrumbLinks:n.breadcrumbLinks,sidebarNavDataLevels:B,showScrollProgress:!0,AlternateSidebar:O.ZP,sidecarTopSlot:h.variant?(0,a.jsx)(eq,{variant:h.variant,isFullWidth:!0}):null,sidecarSlot:(0,a.jsx)(V.Nc,{items:s}),mainWidth:n.mainWidth,children:(0,a.jsxs)(tm,{collectionCtx:k,product:r,setCollectionViewSidebarSections:x,children:[(0,a.jsx)(eY,{heading:p,meta:{readTime:b,edition:y,productsUsed:j,isInteractive:I,hasVideo:C},tutorialId:v}),(0,a.jsx)("span",{"data-ref-id":G,ref:M.startRef}),C&&N.id&&!N.videoInline&&(0,a.jsx)(e7,{url:function(e){let{videoHost:t,videoId:n}=e;return"".concat(ta[t]).concat(n)}({videoId:N.id,videoHost:N.videoHost})}),(0,a.jsx)(F.Z,{mdxRemoteProps:{..._,components:tr}}),(0,a.jsx)("span",{"data-ref-id":G,ref:M.endRef}),(0,a.jsx)(ew,{}),(0,a.jsx)(eo,{...L}),(0,a.jsx)(en,{className:th().featuredInCollections,collections:S})]})})})},g)]})}},67373:function(e,t,n){"use strict";n.d(t,{E:function(){return a}});var r=n(85893),i=n(57777);function a(e,t){return{levelButtonProps:{levelUpButtonText:"".concat(e.name," Home"),levelDownButtonText:"Previous"},backToLinkProps:{text:"".concat(e.name," Home"),href:"/".concat(e.slug)},title:"Tutorials",visuallyHideTitle:!0,children:(0,r.jsx)(i.Zp,{productSlug:e.slug,sections:t})}}},14336:function(e){e.exports={buttonWrapper:"question_buttonWrapper__54iZw",submitButton:"question_submitButton__S9SW7",question:"question_question__LTMCk",choice:"question_choice__12_p_",text:"question_text__FXrjB",textAreaContainer:"question_textAreaContainer__kcZ__",optionalText:"question_optionalText__XdWAm hds-typography-body-100",textArea:"question_textArea__1W_8u hds-typography-body-200",visited:"question_visited__kuvJN",labelWrapper:"question_labelWrapper__nIKDI",labelIcon:"question_labelIcon__cEUBo",label:"question_label___dtyM",animate:"question_animate__wwAwh",nextFrame:"question_nextFrame__rlWPX"}},22273:function(e){e.exports={interactiveCallout:"interactive-lab-callout_interactiveCallout__VxFv8",title:"interactive-lab-callout_title__qRwWP hds-typography-body-200",description:"interactive-lab-callout_description__z49tH hds-typography-body-100",ctaButton:"interactive-lab-callout_ctaButton__e85vm",image:"interactive-lab-callout_image__5E8W0"}},80141:function(e){e.exports={baseEmbedElement:"embed-element_baseEmbedElement__TtXCG",hide:"embed-element_hide__v8_tl"}},87078:function(e){e.exports={resizeWrapper:"resizer_resizeWrapper__uHZnH",resizer:"resizer_resizer__LU1Oz",resizeBar:"resizer_resizeBar__zK5I_",closeIcon:"resizer_closeIcon__JKSGI"}},47065:function(e){e.exports={resizable:"resizable_resizable__ha6BC",hide:"resizable_hide__m_1mB",resizing:"resizable_resizing__8pZE_"}},17590:function(e){e.exports={list:"badges_list__SRNdD",listItem:"badges_listItem__U5Grt hds-font-weight-medium hds-typography-display-100",seperator:"badges_seperator__83Ve8",badge:"badges_badge__md5Sb"}},20395:function(e){e.exports={label:"desktop-variant-list_label__C7Y5U hds-typography-body-200 hds-font-weight-semibold",list:"desktop-variant-list_list__cY7FA",link:"desktop-variant-list_link__xnBXr hds-typography-body-100 hds-font-weight-medium g-focus-ring-from-box-shadow"}},3911:function(e){e.exports={desktopVariantList:"variant-list_desktopVariantList__WAm3_ g-hide-on-mobile",mobileVariantDropdownDisclosure:"variant-list_mobileVariantDropdownDisclosure__n4_9_ g-hide-on-tablet-up"}},88079:function(e){e.exports={header:"tutorial-meta_header__95LnY",heading:"tutorial-meta_heading__GwRAk g-offset-scroll-margin-top",meta:"tutorial-meta_meta__32nDc",createAccountCta:"tutorial-meta_createAccountCta__hYEZP",buttonGroup:"tutorial-meta_buttonGroup__WYzA4"}},57001:function(e){e.exports={collectionProgressContainer:"tutorial-view-sidebar-content_collectionProgressContainer__QgsA7"}},20248:function(e){e.exports={hr:"tutorials-sidebar_hr__dOQnd",listRoot:"tutorials-sidebar_listRoot__1yGVg"}},58750:function(e){e.exports={playerWrapper:"video-embed_playerWrapper__oEmV0",reactPlayer:"video-embed_reactPlayer__cZlJ_",playedTimes:"video-embed_playedTimes__OUGX5"}},23691:function(e){e.exports={heading:"featured-in-collections_heading__lxFWF hds-typography-display-200",cards:"featured-in-collections_cards__8Ojuh"}},81661:function(e){e.exports={root:"feedback-panel_root__2VVEJ"}},62263:function(e){e.exports={linkBoxWrapper:"next-previous_linkBoxWrapper__cDPPR"}},51493:function(e){e.exports={root:"variant-dropdown-disclosure_root__RoscI",label:"variant-dropdown-disclosure_label__thcjj"}},70553:function(e){e.exports={featuredInCollections:"tutorial-view_featuredInCollections__wm6Hf"}},16354:function(e){e.exports={progressToastIcon:"progress-toast_progressToastIcon__uo2Gb",collectionCompleteIcon:"progress-toast_collectionCompleteIcon__rMnGw progress-toast_progressToastIcon__uo2Gb",tutorialCompleteIcon:"progress-toast_tutorialCompleteIcon__OmSE3 progress-toast_progressToastIcon__uo2Gb"}}},function(e){e.O(0,[832,1122,5973,1306,5888,8331,2763,7963,9325,2291,1825,7775,8585,5977,2888,9774,179],function(){return e(e.s=18911)}),_N_E=e.O()}]);