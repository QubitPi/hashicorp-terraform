(()=>{var e={};e.id=2327,e.ids=[2327,2888],e.modules={4960:e=>{e.exports={heroBackground:"landing-hero_heroBackground__mErGz",heroImage:"landing-hero_heroImage__Gl_05"}},44542:e=>{e.exports={splitSection:"certification-program-summary-card_splitSection__2b3Ed",heading:"certification-program-summary-card_heading__zQPpa hds-typography-display-500",description:"certification-program-summary-card_description__W6F2R hds-typography-body-300",buttonGroup:"certification-program-summary-card_buttonGroup__U2MG0",examCards:"certification-program-summary-card_examCards__chmcO"}},92642:e=>{e.exports={root:"exam-badge-and-title_root__w5_1W",text:"exam-badge-and-title_text__3tEB7",eyebrow:"exam-badge-and-title_eyebrow__8HhNc hds-typography-body-100",title:"exam-badge-and-title_title__S9d0B hds-typography-display-300"}},10097:e=>{e.exports={cardBase:"exam-card_cardBase__hiwdi",examCard:"exam-card_examCard__ZGCJy exam-card_cardBase__hiwdi",contents:"exam-card_contents__NaSyk",comingSoonCard:"exam-card_comingSoonCard__q7qOS exam-card_cardBase__hiwdi"}},6362:e=>{e.exports={root:"landing_root__wuU1t",programsSection:"landing_programsSection__1XUR9",faqSignupSection:"landing_faqSignupSection__XF67m",faqHeading:"landing_faqHeading__Hcst0 hds-typography-display-400",signupForm:"landing_signupForm__Z__gd"}},84566:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{config:()=>g,default:()=>l,getServerSideProps:()=>x,getStaticPaths:()=>m,getStaticProps:()=>p,reportWebVitals:()=>h,routeModule:()=>j,unstable_getServerProps:()=>S,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>f,unstable_getStaticPaths:()=>y,unstable_getStaticProps:()=>_});var i=t(87093),a=t(35244),c=t(1323),o=t(90029),n=t(65143),u=t(96606),d=e([n,u]);[n,u]=d.then?(await d)():d;let l=(0,c.l)(u,"default"),p=(0,c.l)(u,"getStaticProps"),m=(0,c.l)(u,"getStaticPaths"),x=(0,c.l)(u,"getServerSideProps"),g=(0,c.l)(u,"config"),h=(0,c.l)(u,"reportWebVitals"),_=(0,c.l)(u,"unstable_getStaticProps"),y=(0,c.l)(u,"unstable_getStaticPaths"),f=(0,c.l)(u,"unstable_getStaticParams"),S=(0,c.l)(u,"unstable_getServerProps"),q=(0,c.l)(u,"unstable_getServerSideProps"),j=new i.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/certifications",pathname:"/certifications",bundlePath:"",filename:""},components:{App:n.default,Document:o.default},userland:u});s()}catch(e){s(e)}})},24551:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});var s=t(20997),i=t(25675),a=t.n(i),c=t(81744),o=t.n(c),n=t(4960),u=t.n(n),d=t(26680);let l=function({heading:e,description:r,isHvd:t=!1,className:i}){return s.jsx(d.V,{backgroundClassName:u().heroBackground,className:i,startSlot:s.jsx(d.l,{className:i,heading:e,description:r??"",foreground:"light"}),endSlot:t?null:s.jsx("div",{className:u().heroImage,children:s.jsx(a(),{alt:"",src:o(),width:447,height:515})})})}},70964:(e,r,t)=>{"use strict";function s(e){return JSON.parse(JSON.stringify(e))}t.d(r,{c:()=>s})},96606:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{default:()=>o,getStaticProps:()=>a.b});var i=t(25107),a=t(1590),c=e([i,a]);[i,a]=c.then?(await c)():c;let o=i.Z;s()}catch(e){s(e)}})},63380:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.d(r,{D:()=>o});var i=t(9926),a=e([i]);let c=(i=(a.then?(await a)():a)[0]).z.enum(["infrastructure-automation","networking-automation","security-automation"]),o=i.z.object({hero:i.z.object({heading:i.z.string(),description:i.z.string()}),faqHeading:i.z.string(),programSummaryOrder:i.z.array(c)});s()}catch(e){s(e)}})},64937:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.d(r,{r:()=>l});var i=t(20997),a=t(8495),c=t(89716),o=t(85957),n=t(44542),u=t.n(n),d=e([c,o]);function l({slug:e,heading:r,description:t,exams:s}){return(0,i.jsxs)(c.KN,{theme:e,children:[i.jsx(c.wu,{className:u().splitSection,startContent:i.jsx("h3",{className:u().heading,dangerouslySetInnerHTML:{__html:r}}),endContent:(0,i.jsxs)(i.Fragment,{children:[i.jsx("div",{className:u().description,children:t}),i.jsx(c.Sz,{className:u().buttonGroup,children:i.jsx(a.Z,{text:"Overview",href:`/certifications/${e}`})})]})}),i.jsx("div",{className:u().examCards,children:s.map(({title:e,prepareUrl:r,registerUrl:t,examCode:s,examTier:a,productSlug:c})=>{let n=e+(s?` (${s})`:"");return r?i.jsx(o.Sl,{title:n,url:r,examTier:a,productSlug:c,showComingSoon:"string"!=typeof t},n):i.jsx(o.YE,{title:n,examTier:a,productSlug:c},n)})})]})}[c,o]=d.then?(await d)():d,s()}catch(e){s(e)}})},52204:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.d(r,{L:()=>u});var i=t(20997),a=t(89716),c=t(92642),o=t.n(c),n=e([a]);function u({title:e,eyebrow:r,productSlug:t,examTier:s}){return(0,i.jsxs)("div",{className:o().root,children:[i.jsx(a.hj,{productSlug:t,examTier:s}),(0,i.jsxs)("div",{className:o().text,children:[i.jsx("div",{className:o().eyebrow,children:r}),i.jsx("div",{className:o().title,children:e})]})]})}a=(n.then?(await n)():n)[0],s()}catch(e){s(e)}})},8872:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.d(r,{S:()=>h,Y:()=>g});var i=t(20997),a=t(89716),c=t(85957),o=t(6373),n=t(10097),u=t.n(n),d=t(53172),l=t(4700),p=e([a,c]);function m({children:e}){return i.jsx("div",{className:u().contents,children:e})}function x(){return i.jsx(l.Z,{text:"Coming Soon",color:"highlight",type:"outlined"})}function g({title:e,productSlug:r,examTier:t}){return i.jsx(d.Z,{className:u().comingSoonCard,children:(0,i.jsxs)(m,{children:[i.jsx(c.LG,{title:e,eyebrow:"HashiCorp Certified:",productSlug:r,examTier:t}),i.jsx(x,{})]})})}function h({title:e,productSlug:r,url:t,showComingSoon:s,examTier:n}){return i.jsx(o.Z,{className:u().examCard,href:t,ariaLabel:e,children:(0,i.jsxs)(m,{children:[i.jsx(c.LG,{title:e,eyebrow:"HashiCorp Certified:",productSlug:r,examTier:n}),(0,i.jsxs)(a.Sz,{children:[s?i.jsx(x,{}):null,i.jsx(a.Ct,{text:"Prepare for the exam"})]})]})})}[a,c]=p.then?(await p)():p,s()}catch(e){s(e)}})},85957:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.d(r,{LG:()=>a.L,Sl:()=>c.S,YE:()=>c.Y,r4:()=>i.r});var i=t(64937),a=t(52204),c=t(8872),o=e([i,a,c]);[i,a,c]=o.then?(await o)():o,s()}catch(e){s(e)}})},25107:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.d(r,{Z:()=>m});var i=t(20997),a=t(99522),c=t(11822),o=t(89716),n=t(85957),u=t(6362),d=t.n(u),l=t(24551),p=e([a,c,o,n]);[a,c,o,n]=p.then?(await p)():p;let m=function({pageContent:e,programSummaries:r,faqItems:t}){let{hero:s}=e;return i.jsx(a.Z,{mobileMenuSlot:i.jsx(c.Z,{}),children:(0,i.jsxs)("div",{className:d().root,children:[i.jsx(l.Z,{heading:s.heading,description:s.description}),i.jsx("div",{className:d().programsSection,children:r.map(e=>{let{slug:r,heading:t,description:s,exams:a}=e;return i.jsx(o.u0,{children:i.jsx(n.r4,{slug:r,heading:t,description:s,exams:a})},r)})}),i.jsx("div",{className:d().faqSignupSection,children:(0,i.jsxs)(o.u0,{children:[i.jsx("h2",{className:d().faqHeading,children:e.faqHeading}),i.jsx(o.bx,{items:t}),i.jsx("div",{className:d().signupForm,children:i.jsx(o.yv,{})})]})})]})})};s()}catch(e){s(e)}})},1590:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.d(r,{b:()=>l});var i=t(71017),a=t.n(i),c=t(48334),o=t(91328),n=t(63380),u=t(9346),d=e([o,n]);[o,n]=d.then?(await d)():d;let p="src/content/certifications";async function l(){let e=(0,c.a)(a().join(p,"landing.json")),r=n.D.parse(JSON.parse(e)),t=(0,o.o9)(),s=(0,u.z)(t,r.programSummaryOrder),i=(0,c.a)(a().join(p,"landing-faq.mdx")),d=await (0,o.m1)(i);return{props:{pageContent:r,programSummaries:s,faqItems:d,metadata:{title:"Certifications",localOgImage:"certifications.jpg"}}}}s()}catch(e){s(e)}})},9346:(e,r,t)=>{"use strict";t.d(r,{z:()=>i});var s=t(70964);function i(e,r){return r.map(r=>{let t=e.find(e=>e.slug===r);if(!t)throw Error(`formatProgramSummaries: could not find Certification program with slug "${r}". Please ensure all slugs in "" reference existing Certification programs in "src/content/certifications/programs".`);return{slug:t.slug,heading:t.pageContent.summary.heading,description:t.pageContent.summary.description,exams:t.pageContent.exams.map(e=>(0,s.c)({title:e.title,examCode:e.examCode,examTier:e.examTier,productSlug:e.productSlug,prepareUrl:e.links?.prepare,registerUrl:e.links?.register}))}})}},81744:e=>{e.exports="/_next/static/images/certification-hero-image-5c0a533b1772ec492d2da1aa4d769295.svg"},94970:e=>{"use strict";e.exports=require("@happykit/flags/client")},67922:e=>{"use strict";e.exports=require("@happykit/flags/context")},95780:e=>{"use strict";e.exports=require("@mapbox/rehype-prism")},22170:e=>{"use strict";e.exports=require("@mdx-js/mdx")},57425:e=>{"use strict";e.exports=require("@mdx-js/react")},48827:e=>{"use strict";e.exports=require("@radix-ui/react-visually-hidden")},7372:e=>{"use strict";e.exports=require("@reach/dialog")},9677:e=>{"use strict";e.exports=require("@reach/portal")},80395:e=>{"use strict";e.exports=require("@reach/tooltip")},78896:e=>{"use strict";e.exports=require("@react-aria/ssr")},76278:e=>{"use strict";e.exports=require("@react-aria/utils")},18910:e=>{"use strict";e.exports=require("@tanstack/react-query")},46310:e=>{"use strict";e.exports=require("@tanstack/react-query-devtools")},33666:e=>{"use strict";e.exports=require("@vercel/fetch")},38970:e=>{"use strict";e.exports=require("algoliasearch")},59003:e=>{"use strict";e.exports=require("classnames")},68103:e=>{"use strict";e.exports=require("clsx")},19659:e=>{"use strict";e.exports=require("esbuild")},71239:e=>{"use strict";e.exports=require("events")},79316:e=>{"use strict";e.exports=require("fathom-client")},56734:e=>{"use strict";e.exports=require("js-cookie")},87645:e=>{"use strict";e.exports=require("mdast-util-to-string")},23231:e=>{"use strict";e.exports=require("ms")},41649:e=>{"use strict";e.exports=require("next-auth/react")},74091:e=>{"use strict";e.exports=require("next-query-params")},51162:e=>{"use strict";e.exports=require("next-themes")},62785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{"use strict";e.exports=require("next/head")},70561:e=>{"use strict";e.exports=require("pkg-dir")},79103:e=>{"use strict";e.exports=require("query-string")},16689:e=>{"use strict";e.exports=require("react")},66405:e=>{"use strict";e.exports=require("react-dom")},65184:e=>{"use strict";e.exports=require("react-error-boundary")},48922:e=>{"use strict";e.exports=require("react-hot-toast")},19785:e=>{"use strict";e.exports=require("react-intersection-observer")},20997:e=>{"use strict";e.exports=require("react/jsx-runtime")},91283:e=>{"use strict";e.exports=require("remark")},50934:e=>{"use strict";e.exports=require("shellwords")},73673:e=>{"use strict";e.exports=require("slugify")},32711:e=>{"use strict";e.exports=require("unist-util-remove")},43057:e=>{"use strict";e.exports=require("unist-util-visit-children")},48858:e=>{"use strict";e.exports=require("use-query-params")},17451:e=>{"use strict";e.exports=import("@vercel/speed-insights/next")},66197:e=>{"use strict";e.exports=import("framer-motion")},45641:e=>{"use strict";e.exports=import("react-hook-form")},64675:e=>{"use strict";e.exports=import("react-instantsearch")},23135:e=>{"use strict";e.exports=import("react-markdown")},66809:e=>{"use strict";e.exports=import("remark-gfm")},9926:e=>{"use strict";e.exports=import("zod")},57147:e=>{"use strict";e.exports=require("fs")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},59796:e=>{"use strict";e.exports=require("zlib")}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[7746,2872,6859,1576,1061,8495,1916,5143,3314,826,471],()=>t(84566));module.exports=s})();