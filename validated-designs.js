(()=>{var e={};e.id=3936,e.ids=[3936,2888],e.modules={65755:e=>{e.exports={root:"hero_root__zVlK_",backgroundBase:"hero_backgroundBase__1T_jA",rootContainer:"hero_rootContainer__k8aW_",rootLayout:"hero_rootLayout__34Vg_",startSlot:"hero_startSlot__OYVDs",hvdHero:"hero_hvdHero__E5IH9",endSlot:"hero_endSlot__twDWz",textRoot:"hero_textRoot__gLBX8","foreground-dark":"hero_foreground-dark__r_WTY","foreground-light":"hero_foreground-light__htnhC",textHeading:"hero_textHeading__NuR_8 hds-typography-display-500",textDescription:"hero_textDescription__InQl1 hds-typography-display-300"}},4960:e=>{e.exports={heroBackground:"landing-hero_heroBackground__mErGz",heroImage:"landing-hero_heroImage__Gl_05"}},92882:e=>{e.exports={mobileMenuContainer:"mobile-menu-levels-generic_mobileMenuContainer__yvFk4",mobileMenuNavList:"mobile-menu-levels-generic_mobileMenuNavList__ZySxX"}},79314:e=>{e.exports={root:"style_root__ZMHOA",hvdHero:"style_hvdHero__Vn2cL",categoryGroupsContainer:"style_categoryGroupsContainer__FAJgz",categoryGroupContainer:"style_categoryGroupContainer__xSMhR",categoryGuidesContainer:"style_categoryGuidesContainer__cXCg0",mobileOnly:"style_mobileOnly__46PjE",tabletUp:"style_tabletUp__QuFJ3",categoryGroupDescription:"style_categoryGroupDescription__Anz8B",categoryGroupHeader:"style_categoryGroupHeader__7C9OY",categoryGroupHeading:"style_categoryGroupHeading__YOKmv",smallHeading:"style_smallHeading__1F257",guideCard:"style_guideCard__eJa9K",guideHeading:"style_guideHeading__lngbt",standaloneLinkContents:"style_standaloneLinkContents__Jqnbi"}},66975:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>g,default:()=>d,getServerSideProps:()=>x,getStaticPaths:()=>h,getStaticProps:()=>p,reportWebVitals:()=>m,routeModule:()=>j,unstable_getServerProps:()=>b,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>f,unstable_getStaticPaths:()=>y,unstable_getStaticProps:()=>_});var i=r(87093),o=r(35244),a=r(1323),n=r(4684),l=r(43900),u=r(1294),c=e([l,u]);[l,u]=c.then?(await c)():c;let d=(0,a.l)(u,"default"),p=(0,a.l)(u,"getStaticProps"),h=(0,a.l)(u,"getStaticPaths"),x=(0,a.l)(u,"getServerSideProps"),g=(0,a.l)(u,"config"),m=(0,a.l)(u,"reportWebVitals"),_=(0,a.l)(u,"unstable_getStaticProps"),y=(0,a.l)(u,"unstable_getStaticPaths"),f=(0,a.l)(u,"unstable_getStaticParams"),b=(0,a.l)(u,"unstable_getServerProps"),v=(0,a.l)(u,"unstable_getServerSideProps"),j=new i.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/validated-designs",pathname:"/validated-designs",bundlePath:"",filename:""},components:{App:l.default,Document:n.default},userland:u});s()}catch(e){s(e)}})},10048:(e,t,r)=>{"use strict";r.d(t,{o:()=>o});var s=r(20997),i=r(16689);let o=(0,i.forwardRef)(({color:e="currentColor",title:t,...r},o)=>{let a=(0,i.useMemo)(()=>t?"title-"+Math.random().toString(36).substr(2,9):void 0,[t]);return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-hidden":!t,ref:o,"aria-labelledby":a,...r,children:[t?(0,s.jsx)("title",{id:a,children:t}):null,(0,s.jsx)("path",{fill:e,d:"M12.229 5.04a.75.75 0 011.042-1.08l7.5 7.25a.75.75 0 010 1.08l-7.5 7.25a.75.75 0 11-1.042-1.08l6.166-5.96H3.75a.75.75 0 010-1.5h14.645l-6.166-5.96z"})]})})},10237:(e,t,r)=>{"use strict";function s(e,t=12){let r=e.split(" "),s=[];for(let e=r.length-1;e>=0&&!([r[e]].concat(s).join(" ").length>t);e--)s.unshift(r[e]);return[r.slice(0,r.length-s.length).join(" "),s.join("&nbsp;")].filter(e=>""!==e).join(" ")}r.d(t,{Z:()=>s})},59216:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(20997),i=r(93258),o=r(40290);let a=function({productSlug:e,className:t,size:r="extra-large"}){return s.jsx(i.Z,{size:r,brandColor:"hcp"==e?"neutral-dark":e,className:t,children:s.jsx(o.Z,{productSlug:e})})}},35178:(e,t,r)=>{"use strict";r.d(t,{V:()=>u,l:()=>c});var s=r(20997),i=r(59003),o=r.n(i),a=r(10237),n=r(65755),l=r.n(n);function u({backgroundClassName:e,startSlot:t,endSlot:r,className:i}){return(0,s.jsxs)("div",{className:l().root,children:[s.jsx("div",{className:o()(l().backgroundBase,e)}),s.jsx("div",{className:o()(l().rootContainer,i),children:(0,s.jsxs)("div",{className:l().rootLayout,children:[s.jsx("div",{className:o()(l().startSlot,i),children:t}),r?s.jsx("div",{className:l().endSlot,children:r}):null]})})]})}function c({heading:e,description:t,foreground:r,className:i}){return(0,s.jsxs)("div",{className:o()(l().textRoot,l()[`foreground-${r}`]),children:[s.jsx("h1",{className:o()(l().textHeading,i),dangerouslySetInnerHTML:{__html:e}}),t?.length?s.jsx("p",{className:l().textDescription,dangerouslySetInnerHTML:{__html:(0,a.Z)(t,18)}}):null]})}},20707:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var s=r(20997),i=r(25675),o=r.n(i),a=r(81744),n=r.n(a),l=r(4960),u=r.n(l),c=r(35178);let d=function({heading:e,description:t,isHvd:r=!1,className:i}){return s.jsx(c.V,{backgroundClassName:u().heroBackground,className:i,startSlot:s.jsx(c.l,{className:i,heading:e,description:t??"",foreground:"light"}),endSlot:r?null:s.jsx("div",{className:u().heroImage,children:s.jsx(o(),{alt:"",src:n(),width:447,height:515})})})}},62166:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>d});var i=r(20997),o=r(58866),a=r(34916),n=r(73494),l=r(92882),u=r.n(l),c=e([a]);a=(c.then?(await c)():c)[0];let d=function(){return(0,i.jsxs)(a.Z,{className:u().mobileMenuContainer,children:[i.jsx(a.v,{}),(0,i.jsxs)("ul",{className:u().mobileMenuNavList,children:[i.jsx(n.Rd,{item:{heading:"Main Menu"}}),(0,o.A)().map((e,t)=>i.jsx(n.Rd,{item:e},t))]})]})};s()}catch(e){s(e)}})},1294:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>n,getStaticProps:()=>a}),r(40343);var i=r(67166),o=e([i]);async function a(){return{notFound:!0}}let n=(i=(o.then?(await o)():o)[0]).Z;s()}catch(e){s(e)}})},67166:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>v});var i=r(20997),o=r(40968),a=r.n(o),n=r(8157),l=r(62166),u=r(20707),c=r(81725),d=r(47352),p=r(55013),h=r(10048),x=r(6407),g=r(79314),m=r.n(g),_=r(31633),y=r(39174),f=r(59216),b=e([n,l]);function v({categoryGroups:e}){return(0,i.jsxs)(n.Z,{mobileMenuSlot:i.jsx(l.Z,{}),className:m().root,children:[(0,i.jsxs)(a(),{children:[i.jsx("meta",{name:"robots",content:"noindex, nofollow"}),i.jsx("title",{children:"HashiCorp Validated Design"}),i.jsx("meta",{name:"description",content:"HashiCorp Validated Design"})]}),i.jsx(u.Z,{heading:"HashiCorp Validated Design",isHvd:!0,className:m().hvdHero}),i.jsx("div",{className:m().categoryGroupsContainer,children:e.map(e=>(0,i.jsxs)(c.Z,{elevation:"base",className:m().categoryGroupContainer,children:[(0,i.jsxs)("section",{className:m().categoryGroupHeader,children:[i.jsx(f.Z,{size:"large",productSlug:e.product}),i.jsx(_.Z,{level:2,size:400,weight:"bold",className:m().categoryGroupHeading,children:e.title})]}),i.jsx(y.Z,{asElement:"p",weight:"medium",size:200,className:m().categoryGroupDescription,children:e.description}),i.jsx("ul",{className:m().categoryGuidesContainer,children:e.guides.map(e=>i.jsx("li",{children:(0,i.jsxs)(d.Z,{href:e.href,ariaLabel:e.title,className:m().guideCard,children:[i.jsx(_.Z,{level:3,size:200,weight:"semibold",className:m().smallHeading,children:e.title}),i.jsx(x.C,{className:m().standaloneLinkContents,icon:(0,i.jsxs)(i.Fragment,{children:[i.jsx(h.o,{className:m().mobileOnly}),i.jsx(p.k,{className:m().tabletUp})]}),iconPosition:"trailing",inheritColor:!0,size:"medium",text:"View",textClassName:m().tabletUp})]})},e.slug))})]},e.slug))})]})}[n,l]=b.then?(await b)():b,s()}catch(e){s(e)}})},81744:e=>{e.exports="/_next/static/images/certification-hero-image-5c0a533b1772ec492d2da1aa4d769295.svg"},94970:e=>{"use strict";e.exports=require("@happykit/flags/client")},67922:e=>{"use strict";e.exports=require("@happykit/flags/context")},95780:e=>{"use strict";e.exports=require("@mapbox/rehype-prism")},16142:e=>{"use strict";e.exports=require("@octokit/core")},48827:e=>{"use strict";e.exports=require("@radix-ui/react-visually-hidden")},7372:e=>{"use strict";e.exports=require("@reach/dialog")},30161:e=>{"use strict";e.exports=require("@reach/popover")},9677:e=>{"use strict";e.exports=require("@reach/portal")},80395:e=>{"use strict";e.exports=require("@reach/tooltip")},78896:e=>{"use strict";e.exports=require("@react-aria/ssr")},76278:e=>{"use strict";e.exports=require("@react-aria/utils")},18910:e=>{"use strict";e.exports=require("@tanstack/react-query")},46310:e=>{"use strict";e.exports=require("@tanstack/react-query-devtools")},33666:e=>{"use strict";e.exports=require("@vercel/fetch")},63844:e=>{"use strict";e.exports=require("adm-zip")},38970:e=>{"use strict";e.exports=require("algoliasearch")},59003:e=>{"use strict";e.exports=require("classnames")},71239:e=>{"use strict";e.exports=require("events")},79316:e=>{"use strict";e.exports=require("fathom-client")},98076:e=>{"use strict";e.exports=require("gray-matter")},56734:e=>{"use strict";e.exports=require("js-cookie")},19793:e=>{"use strict";e.exports=require("js-yaml")},87645:e=>{"use strict";e.exports=require("mdast-util-to-string")},23231:e=>{"use strict";e.exports=require("ms")},41649:e=>{"use strict";e.exports=require("next-auth/react")},57112:e=>{"use strict";e.exports=require("next-mdx-remote/serialize")},74091:e=>{"use strict";e.exports=require("next-query-params")},51162:e=>{"use strict";e.exports=require("next-themes")},62785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},78423:e=>{"use strict";e.exports=require("next/dist/shared/lib/utils")},40968:e=>{"use strict";e.exports=require("next/head")},79103:e=>{"use strict";e.exports=require("query-string")},16689:e=>{"use strict";e.exports=require("react")},66405:e=>{"use strict";e.exports=require("react-dom")},65184:e=>{"use strict";e.exports=require("react-error-boundary")},48922:e=>{"use strict";e.exports=require("react-hot-toast")},19785:e=>{"use strict";e.exports=require("react-intersection-observer")},20997:e=>{"use strict";e.exports=require("react/jsx-runtime")},50934:e=>{"use strict";e.exports=require("shellwords")},73673:e=>{"use strict";e.exports=require("slugify")},48858:e=>{"use strict";e.exports=require("use-query-params")},66197:e=>{"use strict";e.exports=import("framer-motion")},46269:e=>{"use strict";e.exports=import("react-instantsearch-hooks-web")},23135:e=>{"use strict";e.exports=import("react-markdown")},66809:e=>{"use strict";e.exports=import("remark-gfm")},9926:e=>{"use strict";e.exports=import("zod")},57147:e=>{"use strict";e.exports=require("fs")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},59796:e=>{"use strict";e.exports=require("zlib")},75203:(e,t,r)=>{"use strict";r.d(t,{O:()=>i,is:()=>s});let s=function e(t,r,s,o,a){let n=i(r);if(null!=s&&("number"!=typeof s||s<0||s===Number.POSITIVE_INFINITY))throw Error("Expected positive finite index");if(null!=o&&(!e(o)||!o.children))throw Error("Expected parent node");if(null==o!=(null==s))throw Error("Expected both parent and index");return!!t&&!!t.type&&"string"==typeof t.type&&!!n.call(a,t,s,o)},i=function(e){if(null==e)return a;if("string"==typeof e)return o(function(t){return t&&t.type===e});if("object"==typeof e)return Array.isArray(e)?function(e){let t=[],r=-1;for(;++r<e.length;)t[r]=i(e[r]);return o(function(...e){let r=-1;for(;++r<t.length;)if(t[r].call(this,...e))return!0;return!1})}(e):o(function(t){let r;for(r in e)if(t[r]!==e[r])return!1;return!0});if("function"==typeof e)return o(e);throw Error("Expected function, string, or object as test")};function o(e){return function(...t){return!!e.call(this,...t)}}function a(){return!0}}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[5089,3674,6859,3679,9873,3900,4572,343],()=>r(66975));module.exports=s})();