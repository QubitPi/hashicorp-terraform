(()=>{var e={};e.id=9408,e.ids=[9408,2888],e.modules={93566:e=>{e.exports={root:"docs-plain-page-heading_root__HzRuX g-offset-scroll-margin-top"}},76650:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>q,default:()=>l,getServerSideProps:()=>m,getStaticPaths:()=>d,getStaticProps:()=>x,reportWebVitals:()=>g,routeModule:()=>b,unstable_getServerProps:()=>y,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>v,unstable_getStaticPaths:()=>f,unstable_getStaticProps:()=>h});var i=r(87093),a=r(35244),u=r(1323),o=r(90029),c=r(65143),n=r(34380),p=e([c,n]);[c,n]=p.then?(await p)():p;let l=(0,u.l)(n,"default"),x=(0,u.l)(n,"getStaticProps"),d=(0,u.l)(n,"getStaticPaths"),m=(0,u.l)(n,"getServerSideProps"),q=(0,u.l)(n,"config"),g=(0,u.l)(n,"reportWebVitals"),h=(0,u.l)(n,"unstable_getStaticProps"),f=(0,u.l)(n,"unstable_getStaticPaths"),v=(0,u.l)(n,"unstable_getStaticParams"),y=(0,u.l)(n,"unstable_getServerProps"),S=(0,u.l)(n,"unstable_getServerSideProps"),b=new i.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/terraform/plugin/framework/[[...page]]",pathname:"/terraform/plugin/framework/[[...page]]",bundlePath:"",filename:""},components:{App:c.default,Document:o.default},userland:n});s()}catch(e){s(e)}})},34527:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var s=r(20997),i=r(40968),a=r.n(i);let u=function({isVersioned:e}){return e?s.jsx(a(),{children:s.jsx("meta",{name:"robots",content:"noindex, nofollow"},"robots")}):null}},5925:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(38965);let i=process.env.PLAYGROUND_API_URL,a=()=>e=>{(0,s.Vn)(e,"code",e=>{let t,r;if("sentinel"===e.lang){if(!e.meta||!e.meta.includes("playground"))return;t={policy:e.value}}"json"===e.lang&&e.meta&&e.meta.includes("sentinel")&&(t=JSON.parse(e.value)),i&&(r=`api={"${i}"}`),t&&(e.type="jsx",e.value=`<SentinelEmbedded exampleData={${JSON.stringify(t)}} ${r} />`)})}},66800:(e,t,r)=>{"use strict";function s(e){return e.filter(e=>{let t=!1;return"string"==typeof e?t=""==e:"object"==typeof e&&(t=0==e.params.page.length||""==e.params.page[0]),!t})}r.d(t,{b:()=>s})},34380:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>n,getStaticPaths:()=>o,getStaticProps:()=>c});var i=r(55878),a=r(74625),u=e([i,a]);[i,a]=u.then?(await u)():u;let{getStaticPaths:o,getStaticProps:c}=(0,a.w)("terraform","plugin/framework",{projectName:"Plugin Framework"}),n=i.Z;s()}catch(e){s(e)}})},46578:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(20997),i=r(36737),a=r(93566),u=r.n(a);let o=function({id:e,title:t}){return s.jsx(i.Z,{className:u().root,id:e,level:1,size:600,weight:"bold",children:t})}},55878:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>S});var i=r(20997),a=r(39332),u=r(2527),o=r(59003),c=r.n(o),n=r(98702),p=r(89267),l=r(13471),x=r(34527),d=r(38482),m=r(74512),q=r(43814),g=r.n(q),h=r(99877),f=r(46578),v=r(47675),y=e([p]);p=(y.then?(await y)():y)[0];let S=({metadata:e,mdxSource:t,versions:r,projectName:s,layoutProps:o,outlineItems:q,pageHeading:y})=>{var S;let b;let P=(0,a.usePathname)(),j=(0,u.j2)(),{compiledSource:w,scope:k}=t,_=(0,m.Z)(j.slug),Z=y?.id&&y?.title,N=(S=e.layout,S?.name==="docs-root-landing");return N?b=i.jsx(h.Z,{pageHeading:y,pageSubtitle:e?.layout?.subtitle}):Z&&(b=i.jsx(f.Z,{id:y.id,title:y.title})),(0,i.jsxs)(p.Z,{...o,outlineItems:q,versions:r,children:[Z?i.jsx(d.Z,{className:c()(g().docsPageHeading,{[g().hasLandingHero]:N}),versionSelectorSlot:r&&r.length>0?i.jsx(v.Z,{options:r,projectName:s}):null,headingSlot:b}):null,i.jsx(x.Z,{isVersioned:!!(0,n.B)(P)}),i.jsx(l.Z,{mdxRemoteProps:{compiledSource:w,scope:k,components:{..._,wrapper:e=>i.jsx("div",{className:g().mdxContent,...e})}}})]})};s()}catch(e){s(e)}})},17063:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{i:()=>o});var i=r(79445),a=r(17715),u=e([i]);i=(u.then?(await u)():u)[0];let c=(0,a.y)(fetch,{retries:3,delay:1e3});async function o(){return await c("https://releases.hashicorp.com/vagrant-vmware-utility/index.json",{headers:{"Cache-Control":"no-cache"}}).then(e=>e.json()).then(e=>(0,i.S9)(Object.values(e.versions)))}s()}catch(e){s(e)}})},74625:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{w:()=>p});var i=r(32322),a=r(71084),u=r(66800),o=r(5925),c=r(17063),n=e([c]);function p(e,t,r){let s=(0,a.i)(e),n=s.rootDocsPaths.find(e=>e.path==t),p={baseName:n.shortName||n.name,basePath:n.path,navDataPrefix:n.navDataPrefix,product:s,productSlugForLoader:n.productSlugForLoader,basePathForLoader:n.basePathForLoader,mainBranch:n.mainBranch,additionalRemarkPlugins:"sentinel"==s.slug&&"docs"==n.path?[o.Z]:[],getScope:"vagrant"==s.slug&&"docs"==n.path?async()=>({VMWARE_UTILITY_VERSION:await (0,c.i)()}):void 0,options:r};return{getStaticPaths:async e=>{let{getStaticPaths:t}=(0,i.O)(p),{paths:r,...s}=await t(e);return{paths:"docs"==n.path?(0,u.b)(r):r,...s}},getStaticProps:async e=>{let{getStaticProps:t}=(0,i.O)(p);return await t(e)}}}c=(n.then?(await n)():n)[0],s()}catch(e){s(e)}})},94970:e=>{"use strict";e.exports=require("@happykit/flags/client")},67922:e=>{"use strict";e.exports=require("@happykit/flags/context")},95780:e=>{"use strict";e.exports=require("@mapbox/rehype-prism")},22170:e=>{"use strict";e.exports=require("@mdx-js/mdx")},57425:e=>{"use strict";e.exports=require("@mdx-js/react")},76791:e=>{"use strict";e.exports=require("@mdx-js/util")},74691:e=>{"use strict";e.exports=require("@opentelemetry/api")},48827:e=>{"use strict";e.exports=require("@radix-ui/react-visually-hidden")},7372:e=>{"use strict";e.exports=require("@reach/dialog")},9677:e=>{"use strict";e.exports=require("@reach/portal")},80395:e=>{"use strict";e.exports=require("@reach/tooltip")},78896:e=>{"use strict";e.exports=require("@react-aria/ssr")},76278:e=>{"use strict";e.exports=require("@react-aria/utils")},9991:e=>{"use strict";e.exports=require("@swc/core")},18910:e=>{"use strict";e.exports=require("@tanstack/react-query")},46310:e=>{"use strict";e.exports=require("@tanstack/react-query-devtools")},33666:e=>{"use strict";e.exports=require("@vercel/fetch")},38970:e=>{"use strict";e.exports=require("algoliasearch")},51356:e=>{"use strict";e.exports=require("bail")},41421:e=>{"use strict";e.exports=require("ccount")},59003:e=>{"use strict";e.exports=require("classnames")},57499:e=>{"use strict";e.exports=require("collapse-white-space")},71239:e=>{"use strict";e.exports=require("events")},10950:e=>{"use strict";e.exports=require("extend")},79316:e=>{"use strict";e.exports=require("fathom-client")},98076:e=>{"use strict";e.exports=require("gray-matter")},76675:e=>{"use strict";e.exports=require("is-alphabetical")},61455:e=>{"use strict";e.exports=require("is-alphanumeric")},93715:e=>{"use strict";e.exports=require("is-buffer")},69893:e=>{"use strict";e.exports=require("is-decimal")},20298:e=>{"use strict";e.exports=require("is-whitespace-character")},80791:e=>{"use strict";e.exports=require("is-word-character")},56734:e=>{"use strict";e.exports=require("js-cookie")},54689:e=>{"use strict";e.exports=require("longest-streak")},41197:e=>{"use strict";e.exports=require("markdown-escapes")},73584:e=>{"use strict";e.exports=require("markdown-table")},53625:e=>{"use strict";e.exports=require("mdast-util-compact")},52591:e=>{"use strict";e.exports=require("moize")},23231:e=>{"use strict";e.exports=require("ms")},41649:e=>{"use strict";e.exports=require("next-auth/react")},74091:e=>{"use strict";e.exports=require("next-query-params")},51162:e=>{"use strict";e.exports=require("next-themes")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},62785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{"use strict";e.exports=require("next/head")},82174:e=>{"use strict";e.exports=require("parse-entities")},79103:e=>{"use strict";e.exports=require("query-string")},16689:e=>{"use strict";e.exports=require("react")},66405:e=>{"use strict";e.exports=require("react-dom")},65184:e=>{"use strict";e.exports=require("react-error-boundary")},48922:e=>{"use strict";e.exports=require("react-hot-toast")},19785:e=>{"use strict";e.exports=require("react-intersection-observer")},20997:e=>{"use strict";e.exports=require("react/jsx-runtime")},3515:e=>{"use strict";e.exports=require("remark-mdx")},13729:e=>{"use strict";e.exports=require("repeat-string")},10912:e=>{"use strict";e.exports=require("semver")},56563:e=>{"use strict";e.exports=require("semver/functions/parse")},95370:e=>{"use strict";e.exports=require("semver/functions/prerelease")},97326:e=>{"use strict";e.exports=require("semver/functions/rsort")},61865:e=>{"use strict";e.exports=require("semver/functions/valid")},50934:e=>{"use strict";e.exports=require("shellwords")},73673:e=>{"use strict";e.exports=require("slugify")},67545:e=>{"use strict";e.exports=require("state-toggle")},42214:e=>{"use strict";e.exports=require("stringify-entities")},25325:e=>{"use strict";e.exports=require("to-vfile")},32385:e=>{"use strict";e.exports=require("trim")},41358:e=>{"use strict";e.exports=require("trim-trailing-lines")},40969:e=>{"use strict";e.exports=require("trough")},96784:e=>{"use strict";e.exports=require("unherit")},68603:e=>{"use strict";e.exports=require("unist-util-flatmap")},41925:e=>{"use strict";e.exports=require("unist-util-map")},32711:e=>{"use strict";e.exports=require("unist-util-remove")},75295:e=>{"use strict";e.exports=require("unist-util-remove-position")},48858:e=>{"use strict";e.exports=require("use-query-params")},33084:e=>{"use strict";e.exports=require("vfile")},3465:e=>{"use strict";e.exports=require("vfile-location")},5170:e=>{"use strict";e.exports=require("xtend")},17451:e=>{"use strict";e.exports=import("@vercel/speed-insights/next")},66197:e=>{"use strict";e.exports=import("framer-motion")},64675:e=>{"use strict";e.exports=import("react-instantsearch")},23135:e=>{"use strict";e.exports=import("react-markdown")},66809:e=>{"use strict";e.exports=import("remark-gfm")},9926:e=>{"use strict";e.exports=import("zod")},57147:e=>{"use strict";e.exports=require("fs")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},59796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[7746,2872,6859,1576,5731,1267,8495,2906,8064,490,5143,3314,8460,3413,670,826,7873,9267,7944,5929,7129],()=>r(76650));module.exports=s})();