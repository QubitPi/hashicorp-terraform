(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5349,2053],{543:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var i=n(85893),r=n(94184),s=n.n(r),a=n(28093),o=n(67294),l=function(e){let t=o.Children.count(e),n=o.Children.toArray(e);if(1!==t||1!==n.length)throw Error("In ImageConfig, found ".concat(t," total children and ").concat(n.length," valid children. Please ensure that ImageConfig has exactly one child element, and ensure it is a valid image element."));let i=n[0];if(!(0,o.isValidElement)(i))throw Error("In ImageConfig, found child that does not seem to be a valid React element. Please ensure that ImageConfig contains a valid image element.");let r=i.props.mdxType||i.type;if("img"===r)return i;if("p"===r)return function(e){let t=o.Children.toArray(e.props.children);t.length>1&&console.warn("Warning: <ImageConfig /> was passed multiple children. We'll filter these children to find the image element being configured. All other children will be ignored. Please ensure that ImageConfig contains only a single image element.");let n=t.filter(e=>!!(0,o.isValidElement)(e)&&"img"==(e.props.mdxType||e.type));if(0==n.length||!(0,o.isValidElement)(n[0]))throw Error("In ImageConfig, could not find a valid image element. Please ensure that ImageConfig contains a valid image element. Child element details: ".concat(JSON.stringify(e,null,2)));return n[0]}(i);throw Error('In ImageConfig, found child with unexpected type: "'.concat(r,'". Please ensure that ImageConfig contains a single <img /> element. Child element details: ').concat(JSON.stringify(i,null,2)))},c=n(44225),d=n(82629),h=n.n(d),p=n(52539),u=n(15427),g=n.n(u);let m={a:p.nu,blockquote:p.N2,h1:p.NM,h2:p.e2,h3:p.Uw,h4:p.RC,h5:p.xh,h6:p.Je,inlineCode:p.yf,li:p.l2,ol:p.P8,p:p.im,pre:p.cb,table:p.pf,ul:p.u$,CodeBlockConfig:p.No,CodeTabs:p.kw,Highlight:p.FZ,ImageConfig:function(e){let{children:t,caption:n,hideBorder:r=!1,width:s,height:a,inline:o}=e,d=l(t),{src:p,alt:u,title:g}=d.props;if("string"!=typeof p||""==p)throw Error("Images in MDX must have an source defined. Use the format ![some alt text](path/to/img.jpg). Image details: ".concat(JSON.stringify({src:p,alt:u,title:g})," "));return n?(0,i.jsxs)("figure",{className:h().figure,children:[(0,i.jsx)(c.Z,{src:p,alt:u,title:g,noMargin:!0,noBorder:r,width:s,height:a,inline:o}),(0,i.jsx)("figcaption",{className:h().caption,children:n})]}):(0,i.jsx)(c.Z,{src:p,alt:u,title:g,noBorder:r,width:s,height:a,inline:o})},Note:p.z9,Tab:p.mn,Tabs:p.Nk,Tip:p.au,TryHcpCallout:p.BO,Warning:p.am},_=e=>{let t,{className:n,children:r,mdxRemoteProps:o}=e,l=Boolean(r);return t=l?r:(0,i.jsx)(a.R,{...o,components:{...m,...null==o?void 0:o.components}}),(0,i.jsx)("div",{className:s()(g().root,n),children:t})};var x=_},44225:function(e,t,n){"use strict";var i=n(85893),r=n(25675),s=n.n(r),a=n(94184),o=n.n(a),l=n(61296),c=n.n(l);t.Z=function(e){let{src:t,alt:n,title:r,noMargin:a,noBorder:l,height:d,width:h,inline:p=!1}=e;"string"!=typeof n&&console.warn('Warning: Found MDX image with undefined alternate text. Even if an image is decorative, it\'s important for alt to be set to an empty string. Please define alt text the syntax "![Some alt text.](/some-image.jpg)". Image details: '.concat(JSON.stringify({src:t,alt:n,title:r})));let u=function(e,t){let n={};return e&&(n.width="".concat(e,"px")),t&&(n.height="".concat(t,"px")),n}(h,d),g=h&&d?{width:h,height:d}:null;g||(g=function(e){if(!e.startsWith("https://content.hashicorp.com"))return null;let t=new URL(e).searchParams,n=t.get("width"),i=t.get("height");return n&&i?{width:parseInt(n),height:parseInt(i)}:null}(t));let m=function(e){let t;let n=new URL(e,"https://developer.hashicorp.com"),i=RegExp(/#(dark|light)-theme-only/);if(i.test(n.hash)){let r=n.hash.match(i);t=r[1]}else n.hash&&console.warn("[Image]: A hash (#) was detected in src url but it does not match the theme pattern: #{dark|light}-theme-only");return t}(t);return(0,i.jsx)("span",{className:o()(c().root,{[c().noMargin]:a,[c().noBorder]:l,[c().inline]:p}),"data-show-on-theme":m||null,children:g?(0,i.jsx)(s(),{src:t,alt:n,title:r,width:g.width,height:g.height,style:u}):(0,i.jsx)("img",{src:t,alt:n,title:r,style:u})})}},87570:function(e,t,n){"use strict";var i=n(85893),r=n(9008),s=n.n(r);t.Z=function(e){let{isVersioned:t}=e;return t?(0,i.jsx)(s(),{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"},"robots")}):null}},92480:function(e,t,n){"use strict";var i=n(85893),r=n(94184),s=n.n(r),a=n(33356),o=n(95045),l=n.n(o);let c=e=>{let t,{className:n,type:r="neutral",description:o,icon:c,title:d}=e,h=s()(l().root,l()[r],n);return d&&(t=(0,i.jsx)(a.Z,{asElement:"p",className:l().title,size:200,weight:"semibold",children:d})),(0,i.jsxs)("div",{className:h,children:[(0,i.jsx)("div",{className:l().icon,children:c}),(0,i.jsxs)("div",{className:l().contentContainer,children:[t,(0,i.jsx)(a.Z,{asElement:"p",className:l().description,size:200,weight:"regular",children:o})]})]})};t.Z=c},35808:function(e,t,n){"use strict";var i=n(85893),r=n(16557),s=n(16818),a=n.n(s);t.Z=function(e){let{options:t,label:n}=e;if(!t||0===t.length)return null;let s=t.find(e=>e.isSelected);return(0,i.jsx)("nav",{children:(0,i.jsxs)(r.ZP,{"aria-label":s.ariaLabel,className:a().root,text:s.label,color:"secondary",listPosition:"right",children:[(0,i.jsx)(r.lF,{children:n}),t.filter(e=>!e.isSelected).map(e=>(0,i.jsx)(r.VD,{href:e.href,rel:e.isLatest?void 0:"nofollow",children:e.label},e.href))]})})}},40978:function(e,t,n){"use strict";n.d(t,{_D:function(){return c},NL:function(){return g},sH:function(){return f},F4:function(){return x}});var i=n(85893),r=n(53063),s=n(83628),a=n(92480),o=n(20236),l=n.n(o);function c(e){let t,{isVersionedUrl:n,currentVersion:r,latestStableVersion:s}=e;return n&&s.versionId!==r.versionId?(t="preview"===r.releaseStage?"You are viewing documentation for the preview version ".concat(r.versionId,"."):"You are viewing documentation for version ".concat(r.versionId,"."),(0,i.jsx)(d,{message:t,latestLinkUrl:"/hcp/api-docs/packer",latestLinkText:"View latest version"})):null}function d(e){let{message:t,latestLinkUrl:n,latestLinkText:o}=e;return(0,i.jsx)(a.Z,{className:l().root,description:(0,i.jsxs)(i.Fragment,{children:[t," ",(0,i.jsx)(s.Z,{className:l().versionAlertLink,href:n,textSize:200,textWeight:"medium",children:o}),"."]}),icon:(0,i.jsx)(r.k,{}),type:"highlight"})}var h=n(42892),p=n(72092),u=n.n(p);function g(e){let{text:t,badgeText:n,elem:r}=e;return(0,i.jsxs)(r,{className:u().root,children:[t,n?(0,i.jsx)("span",{className:u().badgeContainer,children:(0,i.jsx)(h.Z,{text:n,type:"outlined"})}):null]})}var m=n(543),_=n(24623);function x(e){return e.replace(/\/packer\/\d\d\d\d-\d\d-\d\d\/organizations\/\{location.organization_id\}\/projects\/\{location\.project_id\}/,"")}function f(e){let{path:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.Z,{children:(0,i.jsxs)("div",{className:"alert alert-info",children:[(0,i.jsx)("strong",{children:"Note:"})," Operation paths have been truncated for clarity. The full path to this operation is below:"]})}),(0,i.jsx)(_.Z,{code:t,theme:"dark",options:{showClipboard:!0}})]})}},3962:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var i=n(85893),r=n(40161),s=n(35808),a=n(87570),o=n(74539),l=n(12549),c=n(21360),d=n.n(c),h=n(52539),p=n(42892),u=function e(t){let{name:n,data:r,isFirstItem:s,isLastItem:a,arrayDepth:o=0}=t;if("array"===r.type&&r.items)return(0,i.jsx)(e,{name:n,data:r.items,arrayDepth:o+1,isFirstItem:s,isLastItem:a});let c="object"===r.type&&Boolean(r.properties),u=o>0?(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=[];for(let i=0;i<e;i++)n.push(t);return n})(o,"[]").join(""):"",g="".concat(r.type).concat(u),m=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.yf,{className:d().name,size:100,children:n})," ",(0,i.jsx)("code",{className:"".concat(d().typeString," g-type-code"),children:g})," ",r.required&&(0,i.jsx)(p.Z,{text:"Required",color:"highlight"}),r["x-beta-feature"]?(0,i.jsx)(p.Z,{text:"Beta",color:"neutral"}):null,r.title&&(0,i.jsx)("div",{className:d().descriptiveText,dangerouslySetInnerHTML:{__html:r.title}})]}),_=(0,i.jsx)(i.Fragment,{children:r.description&&(0,i.jsx)("div",{className:d().descriptiveText,dangerouslySetInnerHTML:{__html:r.description}})});return c?(0,i.jsx)("div",{className:d().root,children:(0,i.jsx)(l.Z,{title:m,description:_,children:(0,i.jsxs)("div",{className:d().nestedProperties,children:[(0,i.jsx)("hr",{className:d().divider}),Object.keys(r.properties).map((t,n)=>(0,i.jsx)(e,{name:t,data:r.properties[t],isFirstItem:0===n,isLastItem:n===Object.keys(r.properties).length-1},t))]})})}):(0,i.jsxs)("div",{className:d().root,children:[m,_]})},g=function(e){let{data:t}=e;return t&&t.schema&&t.schema.properties?(0,i.jsx)("div",{children:Object.keys(t.schema.properties).map((e,n)=>(0,i.jsx)(u,{name:e,data:t.schema.properties[e],isFirstItem:0===n,isLastItem:n===Object.keys(t.schema.properties).length-1},e))}):(0,i.jsx)("div",{children:"No content."})},m=function(){return(m=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},_=n(1902);function x(e){var t;return(t=e.toLowerCase()).charAt(0).toUpperCase()+t.substr(1)}var f=function(e){if(!e.schema||!e.schema.properties)return[];let t=e.schema.properties,n=Object.keys(t).reduce((e,n)=>{let i=Object.assign({},t[n]);return i.name=n,i.readOnly||e.push(i),e},[]);return n},v=n(94184),j=n.n(v),y=n(78897),b=n.n(y),N=n(88918),w=n(33356);function I(e){let{title:t,params:n}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{className:b().columnSectionHeading,children:t}),n.map((e,t)=>(0,i.jsx)(u,{name:e.name,data:e,isFirstItem:0===t,isLastItem:t===n.length-1},e.name))]})}var C=function(e){var t,n;let{data:r,path:s,type:a,renderOperationIntro:c}=e,{operationId:d,parameters:u=[],responses:v={},summary:y}=r,C=v["200"],Z=(t=d.split("_").pop(),void 0===n&&(n={}),(0,_.B)(t,m({delimiter:" ",transform:x},n))),L=u.filter(e=>"path"===e.in),S=u.filter(e=>"query"===e.in),P=u.filter(e=>"body"===e.in)[0],k=P?f(P):[];return(0,i.jsx)("div",{className:j()(b().root),children:(0,i.jsxs)(l.Z,{title:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(w.Z,{className:b().title,asElement:"span",weight:"semibold",children:Z}),r["x-beta-feature"]?(0,i.jsx)(p.Z,{className:b().titleBadge,text:"Beta",color:"neutral"}):null]}),description:(0,i.jsx)("span",{className:b().meta,children:(0,i.jsxs)("span",{className:b().endpoint,children:[(0,i.jsx)(h.yf,{className:b().endpointInlineCode,children:a.toUpperCase()}),(0,i.jsx)(h.yf,{className:b().endpointInlineCode,children:s})]})}),children:[(0,i.jsx)("hr",{className:b().divider}),(0,i.jsxs)("div",{children:[c?c({data:r}):null,(0,i.jsx)("div",{className:b().summary,dangerouslySetInnerHTML:{__html:null!=y?y:""}}),(0,i.jsxs)(o.Z,{showAnchorLine:!1,children:[(0,i.jsxs)(o.O,{heading:"Request",children:[(0,i.jsx)("span",{className:b().spacer}),(0,i.jsxs)(N.Z,{elevation:"base",children:[L.length>0?(0,i.jsx)(I,{title:"Path Parameters",params:L}):null,S.length>0?(0,i.jsx)(I,{title:"Query Parameters",params:S}):null,k.length>0?(0,i.jsx)(I,{title:"Body Parameters",params:k}):null]})]}),(0,i.jsxs)(o.O,{heading:"Response",children:[(0,i.jsx)("span",{className:b().spacer}),(0,i.jsx)(N.Z,{elevation:"base",children:C?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{className:b().columnSectionHeading,children:"Successful Response"}),(0,i.jsx)(g,{data:C})]}):(0,i.jsx)("p",{children:"No response has been defined."})})]})]})]})]})})},Z=n(19284),L=n(40978),S=n(60516),P=n.n(S),k=function(e){var t;let{pageHeading:n,layoutProps:o,serviceData:l,massagePathFn:c=e=>e,renderOperationIntro:d,isVersionedUrl:h,versionAlert:p,versionSwitcherData:u}=e,g=(null==l?void 0:l.name)?"p":"h1",m=(null==u?void 0:null===(t=u.options)||void 0===t?void 0:t.length)>1;return(0,i.jsxs)(r.Z,{breadcrumbLinks:o.breadcrumbLinks,sidebarNavDataLevels:o.sidebarNavDataLevels,alertBannerSlot:(0,i.jsx)(L._D,{...p}),children:[(0,i.jsx)(a.Z,{isVersioned:h}),(0,i.jsx)(Z.Z,{headingSlot:(0,i.jsx)(L.NL,{elem:g,text:n.text,badgeText:n.badgeText}),versionSelectorSlot:m?(0,i.jsx)(s.Z,{label:u.label,options:u.options}):null}),l?(0,i.jsxs)("div",{className:P().serviceData,children:[l.name?(0,i.jsx)("h1",{className:P().serviceHeading,children:l.name}):null,l.operations.map(e=>(0,i.jsx)(C,{type:e.__type,data:e,path:c(e.__path),renderOperationIntro:d},e.__type+e.__path))]}):(0,i.jsx)("p",{className:P().sidebarPrompt,children:"Select a service from the sidebar."})]})}},19284:function(e,t,n){"use strict";var i=n(85893),r=n(94184),s=n.n(r),a=n(1740),o=n.n(a);t.Z=function(e){let{className:t,versionSelectorSlot:n,headingSlot:r}=e;return(0,i.jsxs)("div",{className:s()(o().root,t),children:[n?(0,i.jsx)("div",{className:o().versionSwitcherWrapper,children:n}):null,(0,i.jsx)("div",{className:o().pageHeadingWrapper,children:r})]})}},15427:function(e){e.exports={root:"dev-dot-content_root__PM7Rc hds-typography-body-300"}},82629:function(e){e.exports={figure:"image-config_figure__P_Yj3",caption:"image-config_caption__WJZcJ hds-typography-body-200"}},61296:function(e){e.exports={root:"image_root__MMhvi",noMargin:"image_noMargin__5Ktmo",noBorder:"image_noBorder__ztYXH",inline:"image_inline__iubZ8"}},78897:function(e){e.exports={root:"style_root__0NBZN",meta:"style_meta__wni_s",title:"style_title__nfAoz",titleBadge:"style_titleBadge__eSKhL",endpoint:"style_endpoint__P2W4V",endpointInlineCode:"style_endpointInlineCode__HpXTv",divider:"style_divider__lq8xL",spacer:"style_spacer__zeqAO",columnSectionHeading:"style_columnSectionHeading__dpKLd hds-typography-display-200",summary:"style_summary__PtgKd hds-typography-body-200"}},21360:function(e){e.exports={root:"style_root__w_xY1",divider:"style_divider__1JUNA",typeString:"style_typeString__C9diA hds-typography-code-100",nestedProperties:"style_nestedProperties__7l38i",descriptiveText:"style_descriptiveText__Bm63W hds-typography-body-200"}},95045:function(e){e.exports={root:"page-alert_root__xP2Vw",icon:"page-alert_icon__RPKvK",contentContainer:"page-alert_contentContainer__iClXE",title:"page-alert_title__YWqUw",description:"page-alert_description__Xnjjm",neutral:"page-alert_neutral__H_l3n",highlight:"page-alert_highlight__ApLx9",success:"page-alert_success__9ZIpj",warning:"page-alert_warning__o_ueG",critical:"page-alert_critical__exbgt"}},16818:function(e){e.exports={root:"version-switcher_root__UUizS"}},60516:function(e){e.exports={serviceData:"api-docs-view_serviceData__Jo1b8",serviceHeading:"api-docs-view_serviceHeading__tOPgY hds-typography-display-400",sidebarPrompt:"api-docs-view_sidebarPrompt__Lntp7 hds-typography-body-300"}},20236:function(e){e.exports={root:"api-docs-version-alert_root__Veg_F",versionAlertLink:"api-docs-version-alert_versionAlertLink__Lp6Py"}},72092:function(e){e.exports={root:"heading-with-badge_root__AL1Mt hds-typography-display-500",badgeContainer:"heading-with-badge_badgeContainer__tdBQu"}},1740:function(e){e.exports={root:"docs-page-heading_root__KF7HQ",pageHeadingWrapper:"docs-page-heading_pageHeadingWrapper__9WAOg",versionSwitcherWrapper:"docs-page-heading_versionSwitcherWrapper__USjA_"}},1902:function(e,t,n){"use strict";function i(e){return e.toLowerCase()}n.d(t,{B:function(){return a}});var r=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],s=/[^A-Z0-9]+/gi;function a(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,a=t.stripRegexp,l=t.transform,c=t.delimiter,d=o(o(e,void 0===n?r:n,"$1\0$2"),void 0===a?s:a,"\0"),h=0,p=d.length;"\0"===d.charAt(h);)h++;for(;"\0"===d.charAt(p-1);)p--;return d.slice(h,p).split("\0").map(void 0===l?i:l).join(void 0===c?" ":c)}function o(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce(function(e,t){return e.replace(t,n)},e)}}}]);