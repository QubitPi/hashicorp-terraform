(()=>{var e={};e.id=2648,e.ids=[2648,2888],e.modules={31665:e=>{e.exports={root:"dev-dot-content_root__UJDct hds-typography-body-300"}},85055:e=>{e.exports={figure:"image-config_figure__ryaEI",caption:"image-config_caption__kRe62 hds-typography-body-200"}},58556:e=>{e.exports={root:"image_root__Kkwm7",noMargin:"image_noMargin__4ittr",noBorder:"image_noBorder__e_8et",inline:"image_inline__EKAR7"}},26908:e=>{e.exports={root:"style_root__HaTGj",meta:"style_meta__1Pcia",title:"style_title__wEZfO",titleBadge:"style_titleBadge__e7i4f",endpoint:"style_endpoint__7WuPd",endpointInlineCode:"style_endpointInlineCode__scxW2",path:"style_path__QDFqJ",divider:"style_divider__3wwjs",spacer:"style_spacer__CbSuT",columnSectionHeading:"style_columnSectionHeading__Bfxqw hds-typography-display-200",summary:"style_summary__eP6im hds-typography-body-200"}},34733:e=>{e.exports={root:"style_root__aDpqF",divider:"style_divider__dOlXG",typeString:"style_typeString__T4aP8 hds-typography-code-100",nestedProperties:"style_nestedProperties__9TAby",descriptiveText:"style_descriptiveText__fNjF6 hds-typography-body-200"}},57106:e=>{e.exports={root:"page-alert_root__8NqzT",icon:"page-alert_icon__ZgLc1",contentContainer:"page-alert_contentContainer__Hxlnn",title:"page-alert_title__DHJ2p",description:"page-alert_description__ZwKbE",neutral:"page-alert_neutral__iIHfs",highlight:"page-alert_highlight__RAjtn",success:"page-alert_success__lHGQg",warning:"page-alert_warning__8HR_P",critical:"page-alert_critical__FMKlD"}},34467:e=>{e.exports={root:"version-switcher_root__5pTE6"}},86418:e=>{e.exports={serviceData:"api-docs-view_serviceData__MoVUW",serviceHeading:"api-docs-view_serviceHeading__JGVaK hds-typography-display-400",sidebarPrompt:"api-docs-view_sidebarPrompt__BO3UV hds-typography-body-300"}},33601:e=>{e.exports={root:"api-docs-version-alert_root___inaN",versionAlertLink:"api-docs-version-alert_versionAlertLink__5CWzg"}},35687:e=>{e.exports={root:"heading-with-badge_root__HM0hl hds-typography-display-500",badgeContainer:"heading-with-badge_badgeContainer__5oCEd"}},75199:e=>{e.exports={root:"docs-page-heading_root__QuBg_",pageHeadingWrapper:"docs-page-heading_pageHeadingWrapper__LEMQ7",versionSwitcherWrapper:"docs-page-heading_versionSwitcherWrapper__bdlWl"}},3783:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>g,default:()=>p,getServerSideProps:()=>m,getStaticPaths:()=>h,getStaticProps:()=>d,reportWebVitals:()=>x,routeModule:()=>w,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>b,unstable_getStaticParams:()=>_,unstable_getStaticPaths:()=>y,unstable_getStaticProps:()=>f});var i=r(87093),a=r(35244),n=r(1323),o=r(11070),l=r(33893),c=r(24175),u=e([l,c]);[l,c]=u.then?(await u)():u;let p=(0,n.l)(c,"default"),d=(0,n.l)(c,"getStaticProps"),h=(0,n.l)(c,"getStaticPaths"),m=(0,n.l)(c,"getServerSideProps"),g=(0,n.l)(c,"config"),x=(0,n.l)(c,"reportWebVitals"),f=(0,n.l)(c,"unstable_getStaticProps"),y=(0,n.l)(c,"unstable_getStaticPaths"),_=(0,n.l)(c,"unstable_getStaticParams"),v=(0,n.l)(c,"unstable_getServerProps"),b=(0,n.l)(c,"unstable_getServerSideProps"),w=new i.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/boundary/api-docs/[[...page]]",pathname:"/boundary/api-docs/[[...page]]",bundlePath:"",filename:""},components:{App:l.default,Document:o.default},userland:c});s()}catch(e){s(e)}})},80291:(e,t,r)=>{"use strict";r.d(t,{k:()=>a});var s=r(20997),i=r(16689);let a=(0,i.forwardRef)(({color:e="currentColor",title:t,...r},a)=>{let n=(0,i.useMemo)(()=>t?"title-"+Math.random().toString(36).substr(2,9):void 0,[t]);return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16","aria-hidden":!t,ref:a,"aria-labelledby":n,...r,children:[t?(0,s.jsx)("title",{id:n,children:t}):null,(0,s.jsxs)("g",{fill:e,children:[(0,s.jsx)("path",{d:"M8 7a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 7zM8 4a1 1 0 000 2h.007a1 1 0 000-2H8z"}),(0,s.jsx)("path",{fillRule:"evenodd",d:"M0 8a8 8 0 1116 0A8 8 0 010 8zm8-6.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13z",clipRule:"evenodd"})]})]})})},94914:e=>{"use strict";e.exports=function(e,t=[]){let r=e.toLowerCase().trim().replace(/<\/?[^>]*>/g,"").replace(/\(\(#.*?\)\)/g,"").replace(/\W+/g,"-").replace(/-+/g,"-").replace(/^\-/g,"").replace(/\-$/g,""),s=t.reduce((e,t)=>(r===t&&e++,e),0);return t.push(r),s>0&&(r=`${r}-${s}`),r},e.exports.generateAriaLabel=function(e){return e.toLowerCase().replace(/<\/?[^>]*>/g,"").replace(/\(\(#.*?\)\)/g,"").replace(/^\-/g,"").replace(/\-$/g,"").replace(/\W+/g," ").trim()}},18602:(e,t,r)=>{"use strict";r.d(t,{Z:()=>x});var s=r(20997),i=r(59003),a=r.n(i),n=r(6812),o=r(16689);let l=function(e){let t=o.Children.count(e),r=o.Children.toArray(e);if(1!==t||1!==r.length)throw Error(`In ImageConfig, found ${t} total children and ${r.length} valid children. Please ensure that ImageConfig has exactly one child element, and ensure it is a valid image element.`);let s=r[0];if(!(0,o.isValidElement)(s))throw Error("In ImageConfig, found child that does not seem to be a valid React element. Please ensure that ImageConfig contains a valid image element.");let i=s.props.mdxType||s.type;if("img"===i)return s;if("p"===i)return function(e){let t=o.Children.toArray(e.props.children);t.length>1&&console.warn("Warning: <ImageConfig /> was passed multiple children. We'll filter these children to find the image element being configured. All other children will be ignored. Please ensure that ImageConfig contains only a single image element.");let r=t.filter(e=>!!(0,o.isValidElement)(e)&&"img"==(e.props.mdxType||e.type));if(0==r.length||!(0,o.isValidElement)(r[0]))throw Error(`In ImageConfig, could not find a valid image element. Please ensure that ImageConfig contains a valid image element. Child element details: ${JSON.stringify(e,null,2)}`);return r[0]}(s);throw Error(`In ImageConfig, found child with unexpected type: "${i}". Please ensure that ImageConfig contains a single <img /> element. Child element details: ${JSON.stringify(s,null,2)}`)};var c=r(29163),u=r(85055),p=r.n(u),d=r(78110),h=r(31665),m=r.n(h);let g={a:d.nu,blockquote:d.N2,h1:d.NM,h2:d.e2,h3:d.Uw,h4:d.RC,h5:d.xh,h6:d.Je,inlineCode:d.yf,li:d.l2,ol:d.P8,p:d.im,pre:d.cb,table:d.pf,ul:d.u$,CodeBlockConfig:d.No,CodeTabs:d.kw,Highlight:d.FZ,ImageConfig:function({children:e,caption:t,hideBorder:r=!1,width:i,height:a,inline:n}){let{src:o,alt:u,title:d}=l(e).props;if("string"!=typeof o||""==o)throw Error(`Images in MDX must have an source defined. Use the format ![some alt text](path/to/img.jpg). Image details: ${JSON.stringify({src:o,alt:u,title:d})} `);return t?(0,s.jsxs)("figure",{className:p().figure,children:[s.jsx(c.Z,{src:o,alt:u,title:d,noMargin:!0,noBorder:r,width:i,height:a,inline:n}),s.jsx("figcaption",{className:p().caption,children:t})]}):s.jsx(c.Z,{src:o,alt:u,title:d,noBorder:r,width:i,height:a,inline:n})},Note:d.z9,Tab:d.mn,Tabs:d.Nk,Tip:d.au,TryHcpCallout:d.BO,Warning:d.am},x=({className:e,children:t,mdxRemoteProps:r})=>{let i;return i=t||s.jsx(n.R,{...r,components:{...g,...r?.components}}),s.jsx("div",{className:a()(m().root,e),children:i})}},29163:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var s=r(20997),i=r(25675),a=r.n(i),n=r(59003),o=r.n(n),l=r(58556),c=r.n(l);let u=function({src:e,alt:t,title:r,noMargin:i,noBorder:n,height:l,width:u,inline:p=!1}){"string"!=typeof t&&console.warn(`Warning: Found MDX image with undefined alternate text. Even if an image is decorative, it's important for alt to be set to an empty string. Please define alt text the syntax "![Some alt text.](/some-image.jpg)". Image details: ${JSON.stringify({src:e,alt:t,title:r})}`);let d=function(e,t){let r={};return e&&(r.width=`${e}px`),t&&(r.height=`${t}px`),r}(u,l),h=u&&l?{width:u,height:l}:null;h||(h=function(e){if(!e.startsWith("https://content.hashicorp.com"))return null;let t=new URL(e).searchParams,r=t.get("width"),s=t.get("height");return r&&s?{width:parseInt(r),height:parseInt(s)}:null}(e));let m=function(e){let t;let r=new URL(e,"https://developer.hashicorp.com"),s=new RegExp(/#(dark|light)-theme-only/);return s.test(r.hash)?t=r.hash.match(s)[1]:r.hash&&console.warn("[Image]: A hash (#) was detected in src url but it does not match the theme pattern: #{dark|light}-theme-only"),t}(e);return s.jsx("span",{className:o()(c().root,{[c().noMargin]:i,[c().noBorder]:n,[c().inline]:p}),"data-show-on-theme":m||null,children:h?s.jsx(a(),{src:e,alt:t,title:r,width:h.width,height:h.height,style:d}):s.jsx("img",{src:e,alt:t,title:r,style:d})})}},44119:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(20997),i=r(40968),a=r.n(i);let n=function({isVersioned:e}){return e?s.jsx(a(),{children:s.jsx("meta",{name:"robots",content:"noindex, nofollow"},"robots")}):null}},6987:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var s=r(20997),i=r(14945),a=r(38248),n=r(34733),o=r.n(n),l=r(78110),c=r(16231);let u=function e({name:t,data:r,isFirstItem:i,isLastItem:n,arrayDepth:u=0}){if("array"===r.type&&r.items)return s.jsx(e,{name:t,data:r.items,arrayDepth:u+1,isFirstItem:i,isLastItem:n});let p="object"===r.type&&!!r.properties,d=u>0?(function(e,t=null){let r=[];for(let s=0;s<e;s++)r.push(t);return r})(u,"[]").join(""):"",h=`${r.type}${d}`,m=(0,s.jsxs)(s.Fragment,{children:[s.jsx(l.yf,{className:o().name,size:100,children:t})," ",s.jsx("code",{className:`${o().typeString} g-type-code`,children:h})," ",r.required&&s.jsx(c.Z,{text:"Required",color:"highlight"}),r["x-beta-feature"]?s.jsx(c.Z,{text:"Beta",color:"neutral"}):null,r.title&&s.jsx("div",{className:o().descriptiveText,dangerouslySetInnerHTML:{__html:r.title}})]}),g=s.jsx(s.Fragment,{children:r.description&&s.jsx("div",{className:o().descriptiveText,dangerouslySetInnerHTML:{__html:r.description}})});return p?s.jsx("div",{className:o().root,children:s.jsx(a.Z,{title:m,description:g,children:(0,s.jsxs)("div",{className:o().nestedProperties,children:[s.jsx("hr",{className:o().divider}),Object.keys(r.properties).map((t,i)=>s.jsx(e,{name:t,data:r.properties[t],isFirstItem:0===i,isLastItem:i===Object.keys(r.properties).length-1},t))]})})}):(0,s.jsxs)("div",{className:o().root,children:[m,g]})},p=function({data:e}){return e&&e.schema&&e.schema.properties?s.jsx("div",{children:Object.keys(e.schema.properties).map((t,r)=>s.jsx(u,{name:t,data:e.schema.properties[t],isFirstItem:0===r,isLastItem:r===Object.keys(e.schema.properties).length-1},t))}):s.jsx("div",{children:"No content."})};var d=r(86110);let h=function(e){if(!e.schema||!e.schema.properties)return[];let t=e.schema.properties;return Object.keys(t).reduce((e,r)=>{let s=Object.assign({},t[r]);return s.name=r,s.readOnly||e.push(s),e},[])};var m=r(59003),g=r.n(m),x=r(26908),f=r.n(x),y=r(46509),_=r(60348);function v({title:e,params:t}){return(0,s.jsxs)(s.Fragment,{children:[s.jsx("p",{className:f().columnSectionHeading,children:e}),t.map((e,r)=>s.jsx(u,{name:e.name,data:e,isFirstItem:0===r,isLastItem:r===t.length-1},e.name))]})}let b=function({data:e,path:t,type:r,renderOperationIntro:n}){let{operationId:o,parameters:u=[],responses:m={},summary:x}=e,b=m["200"],w=(0,d.capitalCase)(o.split("_").pop()),j=u.filter(e=>"path"===e.in),q=u.filter(e=>"query"===e.in),S=u.filter(e=>"body"===e.in)[0],I=S?h(S):[];return s.jsx("div",{className:g()(f().root),children:(0,s.jsxs)(a.Z,{title:(0,s.jsxs)(s.Fragment,{children:[s.jsx(_.Z,{className:f().title,asElement:"span",weight:"semibold",children:w}),e["x-beta-feature"]?s.jsx(c.Z,{className:f().titleBadge,text:"Beta",color:"neutral"}):null]}),description:s.jsx("span",{className:f().meta,children:(0,s.jsxs)("span",{className:f().endpoint,onClick:e=>e.stopPropagation(),children:[s.jsx(l.yf,{className:f().endpointInlineCode,children:r.toUpperCase()}),s.jsx(l.yf,{className:g()(f().endpointInlineCode,f().path),children:t})]})}),children:[s.jsx("hr",{className:f().divider}),(0,s.jsxs)("div",{children:[n?n({data:e}):null,s.jsx("div",{className:f().summary,dangerouslySetInnerHTML:{__html:x??""}}),(0,s.jsxs)(i.Z,{showAnchorLine:!1,children:[(0,s.jsxs)(i.O,{heading:"Request",children:[s.jsx("span",{className:f().spacer}),(0,s.jsxs)(y.Z,{elevation:"base",children:[j.length>0?s.jsx(v,{title:"Path Parameters",params:j}):null,q.length>0?s.jsx(v,{title:"Query Parameters",params:q}):null,I.length>0?s.jsx(v,{title:"Body Parameters",params:I}):null]})]}),(0,s.jsxs)(i.O,{heading:"Response",children:[s.jsx("span",{className:f().spacer}),s.jsx(y.Z,{elevation:"base",children:b?(0,s.jsxs)(s.Fragment,{children:[s.jsx("p",{className:f().columnSectionHeading,children:"Successful Response"}),s.jsx(p,{data:b})]}):s.jsx("p",{children:"No response has been defined."})})]})]})]})]})})}},78019:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{dY:()=>h,mT:()=>m});var i=r(57147),a=r.n(i),n=r(47625),o=r.n(n),l=r(18740),c=r(21717),u=e([c]);async function p(e){let t=["description","summary","title"];return await (0,l.ZP)(e,async(e,r)=>-1==t.indexOf(e)||"string"!=typeof r?r:await (0,c.Z)(r))}async function d(e){let t={...e,paths:await p(e.paths),definitions:await p(e.definitions)};return await o().dereference(t)}async function h(e){return await d(JSON.parse(e))}async function m(e){return await h(a().readFileSync(e))}c=(u.then?(await u)():u)[0],s()}catch(e){s(e)}})},30541:(e,t,r)=>{"use strict";r.d(t,{AB:()=>l,Dd:()=>u,Kf:()=>o,QA:()=>c});var s=r(86110),i=r(94914),a=r.n(i),n=r(29062);function o(e){return a()((0,s.capitalCase)(e))}function l(e){let{tags:t}=e;if(!t||0==t.length||"string"!=typeof t[0])throw Error(`Error in .swagger.json file: all operation objects must have at least one valid 'tag' string, to be used to group operations by service. Operation with 'operationId' '${e.operationId}' appears to have empty tags.`);let r=t[0].split(".");return r[r.length-1]}function c(e){var t;return(t=e.map(e=>l(e)).sort()).filter((e,r)=>t.indexOf(e)===r)}function u(e){return Object.keys(e.paths).reduce((t,r)=>(t.push({__path:r,...e.paths[r]}),t),[]).reduce((e,t)=>{let r=["get","put","post","delete","options","head","patch"].reduce((e,r)=>(t[r]&&e.push({__type:r,__path:t.__path,...(0,n.c)(t[r])}),e),[]);return e.concat(r)},[])}},18740:(e,t,r)=>{"use strict";async function s(e,t){let r={},s=Object.keys(e);for(var a=0;a<s.length;a++){let n=s[a];r[n]=await i(n,e[n],t)}return r}async function i(e,t,r){let a=await r(e,t);return t&&"object"==typeof t&&t.constructor===Object?await s(a,r):Array.isArray(a)?await Promise.all(a.map(t=>i(e,t,r))):a}r.d(t,{ZP:()=>a});let a=async function(e,t=(e,t)=>t){return await i(!1,e,t)}},86850:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var s=r(20997),i=r(59003),a=r.n(i),n=r(60348),o=r(57106),l=r.n(o);let c=({className:e,type:t="neutral",description:r,icon:i,title:o})=>{let c;let u=a()(l().root,l()[t],e);return o&&(c=s.jsx(n.Z,{asElement:"p",className:l().title,size:200,weight:"semibold",children:o})),(0,s.jsxs)("div",{className:u,children:[s.jsx("div",{className:l().icon,children:i}),(0,s.jsxs)("div",{className:l().contentContainer,children:[c,s.jsx(n.Z,{asElement:"p",className:l().description,size:200,weight:"regular",children:r})]})]})}},96411:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(20997),i=r(72898),a=r(34467),n=r.n(a);let o=function({options:e,label:t}){if(!e||0===e.length)return null;let r=e.find(e=>e.isSelected);return s.jsx("nav",{children:(0,s.jsxs)(i.ZP,{"aria-label":r.ariaLabel,className:n().root,text:r.label,color:"secondary",listPosition:"right",children:[s.jsx(i.lF,{children:t}),e.filter(e=>!e.isSelected).map(e=>s.jsx(i.VD,{href:e.href,rel:e.isLatest?void 0:"nofollow",children:e.label},e.href))]})})}},46558:(e,t,r)=>{"use strict";r.d(t,{Y:()=>c});var s=r(71017),i=r.n(s);let a=new(r(16142)).Octokit({auth:process.env.GITHUB_TOKEN});async function n(e,t={}){let r=`${e.ref}:${e.path}`,s=function(e){let t=new URLSearchParams;for(let[r,s]of Object.entries(e)){if(null==s)continue;let e=String(s);t.append(r,e)}return Array.from(t).length>0?`?${t.toString()}`:""}(t),i=await a.request(`GET /repos/{owner}/{repo}/git/trees/{tree_sha}${s}`,{owner:e.owner,repo:e.repo,tree_sha:r,headers:{"X-GitHub-Api-Version":"2022-11-28"}});if(200!==i.status)throw Error(`Failed to fetch directory tree from GitHub: ${JSON.stringify(e)}. Response status code: ${i.status}.`);if(!Array.isArray(i.data.tree))throw Error(`Unexpected directory tree data from GitHub: ${JSON.stringify(e)}. Expected data.tree to be an array, but found something else. Stringified tree: ${JSON.stringify(i.data.tree)}`);return i.data.tree}async function o(e){return(await n(e,{recursive:!0})).filter(e=>"blob"===e.type&&".json"===i().extname(e.path))}var l=r(90873);async function c(e){let t=(await o(e)).map(t=>{let r=`${e.path}/${t.path}`;return{versionId:i().basename(i().dirname(r)),releaseStage:i().basename(i().dirname(i().dirname(r))),sourceFile:{owner:e.owner,repo:e.repo,path:r,ref:e.ref}}});if(!t||0===t.length)throw Error(`Unexpected error fetching HCP OpenAPI spec data from "${e.path}" in the "${e.owner}${e.repo}" repo, at ref "${e.ref}". The configured "githubDir" did not seem to return any OpenAPI "*.json" specs in the expected location or folder structure. Please ensure the "githubDir" points to the correct owner, repo, path, and ref. Under the target path, specs should be found in folders structured like "<releaseStage>/<versionId>/*.json".`);return(0,l.W)(t)}},66906:(e,t,r)=>{"use strict";r.d(t,{bX:()=>i}),r(46558);var s=r(90873);function i(e){return 1===e.length?e[0]:(0,s.W)(e).find(e=>"stable"===e.releaseStage)}},90873:(e,t,r)=>{"use strict";function s(e){return e.sort((e,t)=>{let r=e.versionId>t.versionId,s=t.versionId>e.versionId;return r?-1:s?1:0})}r.d(t,{W:()=>s})},8670:e=>{"use strict";function t(e){return!e||"terraform"===e}e.exports={isPreview:function(){return!1},isDeployPreview:t,isVersionedDocsEnabled:function(e){return!t(e)}}},29419:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});let s=new(r(16142)).Octokit({auth:process.env.GITHUB_TOKEN}),i=async function({owner:e,repo:t,path:r,ref:i}){let a=await s.request("GET /repos/{owner}/{repo}/contents/{path}",{owner:e,repo:t,path:r,ref:i});if(200!==a.status)throw Error(`Failed to fetch file from GitHub: ${JSON.stringify({owner:e,repo:t,path:r,ref:i})}. Response status code: ${a.status}.`);let n=a.data;return Buffer.from(n.content,"base64").toString("utf-8")}},49315:(e,t,r)=>{"use strict";r.d(t,{i:()=>l});var s=r(57147),i=r.n(s),a=r(71017),n=r.n(a),o=r(52591);let l=r.n(o)()(function(e){try{return JSON.parse(i().readFileSync(n().join(process.cwd(),`src/data/${e}.json`),"utf-8"))}catch(t){throw console.error(`[Error]: unable to fetch product data for ${e} — ${t.message}`),t}})},29062:(e,t,r)=>{"use strict";function s(e){return JSON.parse(JSON.stringify(e))}r.d(t,{c:()=>s})},24175:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>d,getStaticPaths:()=>u,getStaticProps:()=>p});var i=r(8670),a=r(60705),n=r(73334),o=e([a,n]);[a,n]=o.then?(await o)():o;let c="boundary";function l(){let e=(0,i.isDeployPreview)(c)?"../../internal/gen/controller.swagger.json":{owner:"hashicorp",repo:"boundary",path:"internal/gen/controller.swagger.json",ref:"stable-website"};return[{versionId:"latest",sourceFile:e}]}let u=async()=>{let e=await l();return await (0,n.X)({productSlug:c,versionData:e})},p=async({params:e})=>{let t=await l();return await (0,n.q)({productSlug:c,baseUrl:"/boundary/api-docs",pathParts:e.page,versionData:t})},d=a.Z;s()}catch(e){s(e)}})},53866:(e,t,r)=>{"use strict";r.d(t,{_D:()=>c,NL:()=>m});var s=r(20997),i=r(80291),a=r(17267),n=r(86850),o=r(33601),l=r.n(o);function c({isVersionedUrl:e,currentVersion:t,latestStableVersion:r}){let i;return e&&r.versionId!==t.versionId?(i="preview"===t.releaseStage?`You are viewing documentation for the preview version ${t.versionId}.`:`You are viewing documentation for version ${t.versionId}.`,s.jsx(u,{message:i,latestLinkUrl:"/hcp/api-docs/packer",latestLinkText:"View latest version"})):null}function u({message:e,latestLinkUrl:t,latestLinkText:r}){return s.jsx(n.Z,{className:l().root,description:(0,s.jsxs)(s.Fragment,{children:[e," ",s.jsx(a.Z,{className:l().versionAlertLink,href:t,textSize:200,textWeight:"medium",children:r}),"."]}),icon:s.jsx(i.k,{}),type:"highlight"})}var p=r(16231),d=r(35687),h=r.n(d);function m({text:e,badgeText:t,elem:r}){return(0,s.jsxs)(r,{className:h().root,children:[e,t?s.jsx("span",{className:h().badgeContainer,children:s.jsx(p.Z,{text:t,type:"outlined"})}):null]})}r(18602),r(75973)},60705:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>m});var i=r(20997),a=r(19698),n=r(96411),o=r(44119),l=r(6987),c=r(58008),u=r(53866),p=r(86418),d=r.n(p),h=e([a]);a=(h.then?(await h)():h)[0];let m=function({alertSlot:e,pageHeading:t,layoutProps:r,serviceData:s,massagePathFn:p=e=>e,renderOperationIntro:h,isVersionedUrl:m,versionAlert:g,versionSwitcherData:x}){let f=s?.name?"p":"h1",y=x?.options?.length>1;return(0,i.jsxs)(a.Z,{breadcrumbLinks:r.breadcrumbLinks,sidebarNavDataLevels:r.sidebarNavDataLevels,alertBannerSlot:i.jsx(u._D,{...g}),children:[i.jsx(o.Z,{isVersioned:m}),e||null,i.jsx(c.Z,{headingSlot:i.jsx(u.NL,{elem:f,text:t.text,badgeText:t.badgeText}),versionSelectorSlot:y?i.jsx(n.Z,{label:x.label,options:x.options}):null}),s?(0,i.jsxs)("div",{className:d().serviceData,children:[s.name?i.jsx("h1",{className:d().serviceHeading,children:s.name}):null,s.operations.map(e=>i.jsx(l.Z,{type:e.__type,data:e,path:p(e.__path),renderOperationIntro:h},e.__type+e.__path))]}):i.jsx("p",{className:d().sidebarPrompt,children:"Select a service from the sidebar."})]})};s()}catch(e){s(e)}})},16615:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{h:()=>l});var i=r(29419),a=r(30541),n=r(78019),o=e([n]);async function l({sourceFile:e,versionId:t}){let r;if("string"==typeof e)r=await (0,n.mT)(e);else{let t=await (0,i.Z)(e);r=await (0,n.dY)(t)}let s=(0,a.Dd)(r),o=(0,a.QA)(s).map(a.Kf),l=1===o.length?[[]]:[[],...o.map(e=>[e])],c="string"==typeof t?[t]:[];return l.map(e=>[...c,...e])}n=(o.then?(await o)():o)[0],s()}catch(e){s(e)}})},51341:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{X:()=>l});var i=r(8670),a=r(66906),n=r(16615),o=e([n]);async function l({productSlug:e,versionData:t}){if((0,i.isDeployPreview)()&&!(0,i.isDeployPreview)(e))return{paths:[],fallback:"blocking"};let r=(0,a.bX)(t);return r?{paths:(await (0,n.h)({sourceFile:r.sourceFile})).map(e=>({params:{page:e}})),fallback:"blocking"}:{paths:[],fallback:"blocking"}}n=(o.then?(await o)():o)[0],s()}catch(e){s(e)}})},75952:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{q:()=>c});var i=r(86110),a=r(66906),n=r(25769),o=r(49315),l=e([n]);async function c({productSlug:e,baseUrl:t,pathParts:r,versionData:s,buildCustomBreadcrumbs:l}){let c;let{versionId:u,serviceId:p}=(0,n.qX)(r),d=void 0!==u,h=(0,a.bX)(s);if(!(c=d?s.find(e=>e.versionId===u):h))return{notFound:!0};let m=await (0,n.bo)({sourceFile:c.sourceFile,serviceId:p});if("notFound"in m)return{notFound:!0};let{schema:g,serviceData:x,serviceIds:f}=m,y=(0,o.i)(e),_=l?l({productData:y,serviceData:x,versionId:u}):(0,n.Kf)({productData:y,apiDocs:{name:"API",url:t},serviceData:x,versionId:u}),v=(0,n.Ee)({productData:y,serviceIds:f,versionId:u,baseUrl:t}),b={text:g.info.title,badgeText:c.releaseStage?(0,i.sentenceCase)(c.releaseStage):null},w=(0,n.mM)({baseUrl:t,apiName:b.text,versionData:s,currentVersionId:c.versionId});return{props:{metadata:{title:g.info.title},product:y,pageHeading:b,layoutProps:{breadcrumbLinks:_,sidebarNavDataLevels:v},serviceData:x,isVersionedUrl:d,versionSwitcherData:w,versionAlert:{isVersionedUrl:d,currentVersion:c,latestStableVersion:h}}}}n=(l.then?(await l)():l)[0],s()}catch(e){s(e)}})},11601:(e,t,r)=>{"use strict";function s({productData:e,apiDocs:t,serviceData:r,versionId:s}){let i=[];if(i.push({title:"Developer",url:"/"}),i.push({title:e.name,url:`/${e.slug}`}),i.push({title:t.name,url:t.url}),s&&i.push({title:s,url:`${t.url}/${s}`}),r){let e=s?`${t.url}/${s}/${r.slug}`:`${t.url}/${r.slug}`;i.push({title:r.name,url:e})}return i[i.length-1].isCurrentPage=!0,i}r.d(t,{K:()=>s})},19577:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{b:()=>c});var i=r(86110),a=r(29419),n=r(78019),o=r(30541),l=e([n]);async function c({sourceFile:e,serviceId:t}){let r;if("string"==typeof e)r=await (0,n.mT)(e);else{let t=await (0,a.Z)(e);r=await (0,n.dY)(t)}let s=(0,o.Dd)(r),l=(0,o.QA)(s),c=1===l.length?(0,o.Kf)(l[0]):t,u=l.filter(e=>(0,o.Kf)(e)===c).map(e=>({name:(0,i.capitalCase)(e),slug:(0,o.Kf)(e),operations:s.filter(t=>(0,o.AB)(t)===e)})),p=u.length?u[0]:null;return t&&p?.slug!==t?{notFound:!0}:{schema:r,serviceData:p,operationObjects:s,serviceIds:l}}n=(l.then?(await l)():l)[0],s()}catch(e){s(e)}})},86430:(e,t,r)=>{"use strict";r.d(t,{E:()=>n});var s=r(86110),i=r(30541),a=r(35625);function n({serviceIds:e,versionId:t,productData:r,baseUrl:n}){let o=1==e.length,l=e.map(e=>{let r=t?`${n}/${t}`:n,a=o?"":(0,i.Kf)(e);return{title:(0,s.capitalCase)(e),indexData:!0,path:a,fullPath:`${r}/${a}`}}),c={backToLinkProps:{text:`${r.name} Home`,href:`/${r.slug}`},title:"API",levelButtonProps:{levelUpButtonText:`${r.name} Home`},menuItems:[]};return o?c.menuItems=l:(c.menuItems=[{title:"API",fullPath:n,theme:r.slug},{divider:!0},...l],c.visuallyHideTitle=!0),[(0,a.Vz)(r.name),(0,a._G)(r),c]}},16557:(e,t,r)=>{"use strict";r.d(t,{m:()=>i});var s=r(66906);function i({versionData:e,currentVersionId:t,baseUrl:r,apiName:i}){let a=(0,s.bX)(e),n=e.map(e=>{let s=e.versionId===a?.versionId,n=`${e.versionId} (${e.releaseStage})`,o=`Choose a version of the ${i}. Currently viewing ${n}.`;return{label:n,ariaLabel:o,isLatest:s,isSelected:e.versionId===t,href:s?r:`${r}/${e.versionId}`}});return{label:i,options:n}}},25769:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{Ee:()=>n.E,Kf:()=>i.K,bo:()=>a.b,mM:()=>o.m,qX:()=>l.q});var i=r(11601),a=r(19577),n=r(86430),o=r(16557),l=r(32673),c=e([a]);a=(c.then?(await c)():c)[0],s()}catch(e){s(e)}})},32673:(e,t,r)=>{"use strict";function s(e){var t;return!e||e.length<1?{}:(t=e[0],/^\d\d\d\d-\d\d-\d\d$/.test(t))?{versionId:e[0],serviceId:e[1]}:{serviceId:e[0]}}r.d(t,{q:()=>s})},73334:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{X:()=>i.X,q:()=>a.q});var i=r(51341),a=r(75952),n=e([i,a]);[i,a]=n.then?(await n)():n,s()}catch(e){s(e)}})},58008:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var s=r(20997),i=r(59003),a=r.n(i),n=r(75199),o=r.n(n);let l=function({className:e,versionSelectorSlot:t,headingSlot:r}){return(0,s.jsxs)("div",{className:a()(o().root,e),children:[t?s.jsx("div",{className:o().versionSwitcherWrapper,children:t}):null,s.jsx("div",{className:o().pageHeadingWrapper,children:r})]})}},47625:e=>{"use strict";e.exports=require("@apidevtools/json-schema-ref-parser")},94970:e=>{"use strict";e.exports=require("@happykit/flags/client")},67922:e=>{"use strict";e.exports=require("@happykit/flags/context")},95780:e=>{"use strict";e.exports=require("@mapbox/rehype-prism")},57425:e=>{"use strict";e.exports=require("@mdx-js/react")},16142:e=>{"use strict";e.exports=require("@octokit/core")},48827:e=>{"use strict";e.exports=require("@radix-ui/react-visually-hidden")},7372:e=>{"use strict";e.exports=require("@reach/dialog")},9677:e=>{"use strict";e.exports=require("@reach/portal")},80395:e=>{"use strict";e.exports=require("@reach/tooltip")},78896:e=>{"use strict";e.exports=require("@react-aria/ssr")},76278:e=>{"use strict";e.exports=require("@react-aria/utils")},18910:e=>{"use strict";e.exports=require("@tanstack/react-query")},46310:e=>{"use strict";e.exports=require("@tanstack/react-query-devtools")},33666:e=>{"use strict";e.exports=require("@vercel/fetch")},38970:e=>{"use strict";e.exports=require("algoliasearch")},86110:e=>{"use strict";e.exports=require("change-case")},59003:e=>{"use strict";e.exports=require("classnames")},71239:e=>{"use strict";e.exports=require("events")},10950:e=>{"use strict";e.exports=require("extend")},79316:e=>{"use strict";e.exports=require("fathom-client")},22493:e=>{"use strict";e.exports=require("hast-util-to-string")},93715:e=>{"use strict";e.exports=require("is-buffer")},56734:e=>{"use strict";e.exports=require("js-cookie")},52591:e=>{"use strict";e.exports=require("moize")},23231:e=>{"use strict";e.exports=require("ms")},41649:e=>{"use strict";e.exports=require("next-auth/react")},74091:e=>{"use strict";e.exports=require("next-query-params")},51162:e=>{"use strict";e.exports=require("next-themes")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},62785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{"use strict";e.exports=require("next/head")},39369:e=>{"use strict";e.exports=require("process")},79103:e=>{"use strict";e.exports=require("query-string")},16689:e=>{"use strict";e.exports=require("react")},66405:e=>{"use strict";e.exports=require("react-dom")},65184:e=>{"use strict";e.exports=require("react-error-boundary")},48922:e=>{"use strict";e.exports=require("react-hot-toast")},19785:e=>{"use strict";e.exports=require("react-intersection-observer")},20997:e=>{"use strict";e.exports=require("react/jsx-runtime")},62555:e=>{"use strict";e.exports=require("refractor")},64545:e=>{"use strict";e.exports=require("rehype-stringify")},50934:e=>{"use strict";e.exports=require("shellwords")},73673:e=>{"use strict";e.exports=require("slugify")},84269:e=>{"use strict";e.exports=require("url")},48858:e=>{"use strict";e.exports=require("use-query-params")},17451:e=>{"use strict";e.exports=import("@vercel/speed-insights/next")},87586:e=>{"use strict";e.exports=import("decode-named-character-reference")},66197:e=>{"use strict";e.exports=import("framer-motion")},90684:e=>{"use strict";e.exports=import("mdast-util-mdx")},19282:e=>{"use strict";e.exports=import("mdast-util-phrasing")},23985:e=>{"use strict";e.exports=import("micromark-core-commonmark")},95723:e=>{"use strict";e.exports=import("micromark-extension-mdxjs")},84678:e=>{"use strict";e.exports=import("micromark-factory-space")},60718:e=>{"use strict";e.exports=import("micromark-util-character")},43471:e=>{"use strict";e.exports=import("micromark-util-chunked")},36243:e=>{"use strict";e.exports=import("micromark-util-combine-extensions")},62687:e=>{"use strict";e.exports=import("micromark-util-decode-numeric-character-reference")},22732:e=>{"use strict";e.exports=import("micromark-util-decode-string")},96997:e=>{"use strict";e.exports=import("micromark-util-normalize-identifier")},45566:e=>{"use strict";e.exports=import("micromark-util-resolve-all")},94980:e=>{"use strict";e.exports=import("micromark-util-subtokenize")},64675:e=>{"use strict";e.exports=import("react-instantsearch")},23135:e=>{"use strict";e.exports=import("react-markdown")},89521:e=>{"use strict";e.exports=import("rehype-katex")},66809:e=>{"use strict";e.exports=import("remark-gfm")},19832:e=>{"use strict";e.exports=import("remark-math")},2509:e=>{"use strict";e.exports=import("remark-rehype")},9926:e=>{"use strict";e.exports=import("zod")},57147:e=>{"use strict";e.exports=require("fs")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},59796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1107,1840,6859,519,141,5973,1306,5888,3329,5397,3893,849,9325,9698,1825,1930],()=>r(3783));module.exports=s})();