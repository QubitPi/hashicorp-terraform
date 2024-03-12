(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5732],{20271:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[productSlug]/docs",function(){return n(97609)}])},7400:function(e,t,n){"use strict";var r=n(85893),i=n(94184),o=n.n(i),l=n(55013),s=n(87836),a=n(4931),c=n(81725),d=n(41028),u=n(84187),p=n(6407),h=n(99173),_=n.n(h);t.Z=function(e){let{heading:t,headingSlug:n,body:i,ctas:h,iconCardLinks:g,fixedColumns:x}=e,f=o()(_().fixedColumnsMode,_()["columns".concat(x)]);return null!=h&&null!=g&&(0,d.GN)({color:d.PQ.critical,title:"Error in CalloutCard",description:"Both `ctas` and `iconCardLinks` were passed to CalloutCard. Only provide one."}),(0,r.jsxs)(c.Z,{className:_().card,elevation:"base",children:[(0,r.jsx)("h2",{id:n,className:_().heading,children:t}),(0,r.jsx)("p",{className:_().body,children:i}),h&&h.length?(0,r.jsx)("div",{className:o()(_().ctas,x&&f),children:h.map((e,t)=>0==t?(0,r.jsx)(a.Z,{href:e.url,text:e.text},t):(0,r.jsx)(p.Z,{href:e.url,text:e.text,icon:(0,r.jsx)(l.k,{}),iconPosition:"trailing"},t))}):null,g&&g.length?(0,r.jsx)("ul",{className:o()(_().iconCardLinks,x&&f),children:g.map(e=>{let{icon:t,text:n,url:i}=e;return(0,r.jsx)("li",{children:(0,r.jsx)(u.Z,{icon:s.e[t],text:n,url:i})},i)})}):null]})}},12559:function(e,t,n){"use strict";var r=n(85893),i=n(94184),o=n.n(i),l=n(31633),s=n(59216),a=n(39174),c=n(26107),d=n(54073),u=n.n(d);t.Z=e=>{let{pageHeading:t,pageSubtitle:n}=e,i=(0,c.j2)(),d=!!n;return(0,r.jsxs)("div",{className:o()(u().root,{[u().hasSubtitle]:d}),children:[(0,r.jsx)(s.Z,{productSlug:"sentinel"===i.slug?"hcp":i.slug,className:u().icon}),(0,r.jsxs)("div",{children:[(0,r.jsx)(l.Z,{className:u().pageTitle,id:t.id,level:1,size:600,weight:"bold",children:t.title}),d?(0,r.jsx)(a.Z,{className:u().pageSubtitle,children:n}):null]})]})}},39049:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(85893),i=n(43248);let o=/^\/+|\/+$/g;var l=n(99320),s=n(90094),a=n(26107),c=n(40335),d=n(53165),u=e=>{let t,{options:n,projectName:u}=e,p=(0,a.j2)(),h=(0,c.Z)({excludeHash:!0,excludeSearch:!0}),_=p.currentRootDocsPath;if(!_)return null;let g=(0,l.B)(h);t=g?n.find(e=>e.version===g):n.find(e=>!0===e.isLatest);let x=function(e,t,n){let r;if(e)r=e;else{var i;let e=null!==(i=t.shortName)&&void 0!==i?i:t.name;r=e.includes(n.name)?e:"".concat(n.name," ").concat(e)}return r}(u,_,p),f=n.map(e=>{let{label:n,isLatest:r}=e,l=e.version===t.version,a=e.isLatest?(0,s.R)(h):function(e){let{basePath:t,asPath:n,version:r}=e,l=n.replace(/^https?:\/\/[a-z-:0-9.]+/i,"").replace(/^\//i,"").split("/"),s=n.replace(t,"").replace(o,"");return 3>=l.findIndex(e=>i.V.test(e)||i.H.test(e))&&(s=s.replace(i.V,"").replace(i.H,"").replace(o,"")),"/"+t+"/"+r+(s?"/".concat(s):"")}({basePath:"".concat(p.slug,"/").concat(_.path),asPath:h,version:e.version}),c="Choose a ".concat(x," version. Currently viewing ").concat(n,".");return{label:n,href:a,isSelected:l,isLatest:r,ariaLabel:c}});return(0,r.jsx)(d.Z,{label:null!=u?u:p.name,options:f})}},53165:function(e,t,n){"use strict";var r=n(85893),i=n(95878),o=n(16641),l=n.n(o);t.Z=function(e){let{options:t,label:n}=e;if(!t||0===t.length)return null;let o=t.find(e=>e.isSelected);return(0,r.jsx)("nav",{children:(0,r.jsxs)(i.ZP,{"aria-label":o.ariaLabel,className:l().root,text:o.label,color:"secondary",listPosition:"right",children:[(0,r.jsx)(i.lF,{children:n}),t.filter(e=>!e.isSelected).map(e=>(0,r.jsx)(i.VD,{href:e.href,rel:e.isLatest?void 0:"nofollow",children:e.label},e.href))]})})}},43248:function(e,t,n){"use strict";n.d(t,{H:function(){return r},V:function(){return i}});let r=/v\d+\.\d+\.(\d+|\w+)/i,i=/v[0-9]{6}-\d+/i},7261:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(85893),i=n(96636),o=n(1151),l=n(99320),s=n(90094),a=n(40335),c=n(89893);function d(e){let{versions:t}=e,n=(0,a.Z)({excludeHash:!0,excludeSearch:!0}),i=(0,l.B)(n);if(!i||!t||(null==t?void 0:t.length)===0)return null;let{releaseStage:o,label:d}=t.find(e=>e.version===i);return(0,r.jsx)(c.Z,{releaseStage:o,currentVersion:d,latestVersionUrl:(0,s.R)(n)})}var u=e=>{let{outlineItems:t,versions:n,...l}=e;return(0,r.jsx)(o.Z,{...l,sidecarSlot:(0,r.jsx)(i.Nc,{items:t.slice(0)}),alertBannerSlot:(0,r.jsx)(d,{versions:n})})}},99320:function(e,t,n){"use strict";n.d(t,{B:function(){return i}});var r=n(43248);function i(e){return e.replace(/^https?:\/\/[a-z-:0-9.]+/i,"").replace(/^\//i,"").split("/").find((e,t)=>!!(2===t&&r.V.test(e)||(2===t||3===t||4===t)&&r.H.test(e)))}},90094:function(e,t,n){"use strict";n.d(t,{R:function(){return i}});var r=n(43248);function i(e){let t=e.split("/"),n=t.findIndex(e=>r.H.test(e)||r.V.test(e));return n>-1?[...t.slice(0,n),...t.slice(n+1)].join("/"):e}},97609:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return U},default:function(){return A}});var r=n(85893),i=n(94184),o=n.n(i),l=n(7261),s=n(91844),a=n(41204),c=n(26107),d=n(98634),u=n(12559),p=n(39049),h=n(57175),_=n.n(h),g=e=>{let{pageHeading:t,pageSubtitle:n,iconCardGridItems:i,versions:o}=e,l=(0,c.j2)();return(0,r.jsxs)("header",{children:[(0,r.jsx)(d.Z,{versionSelectorSlot:o?(0,r.jsx)(p.Z,{options:o}):null,headingSlot:(0,r.jsx)(u.Z,{pageHeading:t,pageSubtitle:n})}),"terraform"!==l.slug?(0,r.jsx)("div",{className:_().iconCardGridLink,children:(0,r.jsx)(v,{iconCardGridItems:i})}):null]})},x=n(87836),f=n(84187),j=n(15926),m=n.n(j),v=e=>{let{iconCardGridItems:t}=e,n=(0,c.j2)(),i=t||n.rootDocsPaths;return(0,r.jsx)("ul",{className:m().root,children:i.map(e=>{let{iconName:t,path:i,name:o}=e;return n.currentRootDocsPath.path===i?null:(0,r.jsx)("li",{children:(0,r.jsx)(f.Z,{icon:x.e[t],productSlug:n.slug,text:o,url:"/".concat(n.slug,"/").concat(i)})},i)})})},k=n(67294),C=n(31304),S=n.n(C),b=n(31633),Z=n(44658),N=n.n(Z);let y=e=>{let{className:t,id:n,level:i,text:l}=e,s=o()(N().root,N()["h".concat(i)],t);return(0,r.jsx)(b.Z,{className:s,id:n,level:i,size:{2:400,3:300}[i],weight:"bold",children:l})};var L=n(7400),w=n(52445),W=n(47352),G=n(75524),H=n(39174),P=n(44784),B=n.n(P),I=n(76925),E=n(28093),T=n(4355),z=n(39123),D=n.n(z),M=Object.assign(()=>null,{AutosizedHeadingBlock:y,CalloutCardBlock:e=>{let{body:t,ctas:n,heading:i,headingSlug:o}=e;return(0,r.jsx)(L.Z,{body:t,ctas:n,heading:i,headingSlug:o})},CardGridBlock:e=>{let{cards:t,description:n,title:i,headingId:o,headingLevel:l}=e;return(0,r.jsxs)("div",{className:B().root,children:[!!i&&(0,r.jsx)(y,{level:l,id:o,text:i}),!!n&&(0,r.jsx)(H.Z,{className:B().description,size:300,weight:"regular",children:n}),(0,r.jsx)(G.Z,{children:t.map(e=>{let{description:t,title:n,url:i}=e;return(0,r.jsxs)(W.Z,{ariaLabel:n,className:B().cardsGridListCardLink,href:i,children:[(0,r.jsx)(w.ll,{text:n}),(0,r.jsx)(w.SZ,{text:t})]},i)})})]})},IconCardGridBlock:e=>{let{cards:t,productSlug:n}=e;return(0,r.jsx)(I.Z,{cards:t.map(e=>{let{iconName:t,text:n,url:r}=e;return{icon:x.e[t],text:n,url:r}}),productSlug:n})},ParagraphBlock:e=>{let{mdxSource:t}=e;return(0,r.jsx)(E.R,{...t,components:{a:T.nu,p:T.im}})},SectionHeadingBlock:e=>{let{level:t,id:n,text:i}=e;return(0,r.jsx)(y,{className:D().root,id:n,level:t,text:i})}}),R=n(48457),V=n.n(R);let X="Getting Started",J=S()(X);var Y=e=>{let{blocks:t}=e,n=(0,c.j2)();return(0,r.jsx)("div",{className:V().root,children:t.map((e,t)=>"paragraph"===e.type?(0,k.createElement)(M.ParagraphBlock,{...e,key:t}):"section-heading"===e.type?(0,r.jsx)(M.SectionHeadingBlock,{id:e.headingId,level:e.headingLevel,text:e.title},t):"icon-card-grid"===e.type?(0,r.jsx)(M.IconCardGridBlock,{cards:e.cards,productSlug:n.slug},t):"card-grid"===e.type?(0,r.jsx)(M.CardGridBlock,{cards:e.cards,description:e.description,headingLevel:e.headingLevel,headingId:e.headingId,title:e.title},t):"getting-started-card"===e.type?(0,r.jsx)(M.CalloutCardBlock,{body:e.description,ctas:[e.callToAction],heading:X,headingSlug:J},t):void 0)})},F=n(39454),O=n.n(F),Q=n(34146),q=n.n(Q),U=!0,A=e=>{let t,{mdxSource:n,pageContent:i,pageHeading:c,product:d,versions:u,layoutProps:p,outlineItems:h}=e,{pageSubtitle:_,marketingContentBlocks:x}=i;if(n){let e=(0,s.Z)(d.slug),i=o()(q()["".concat(d.slug,"MDXWrapper")],q().mdxSlotWrapper,O().mdxContent);t=(0,r.jsx)("div",{className:i,children:(0,r.jsx)(a.Z,{mdxRemoteProps:{...n,components:{...e}}})})}return(0,r.jsx)(l.Z,{...p,outlineItems:h,children:(0,r.jsxs)("div",{className:u?q().docsLandingWithVersions:null,children:[(0,r.jsx)(g,{pageHeading:c,pageSubtitle:_,iconCardGridItems:i.iconCardGridItems,versions:u}),(0,r.jsx)(Y,{blocks:x}),t]})})}},98634:function(e,t,n){"use strict";var r=n(85893),i=n(94184),o=n.n(i),l=n(17103),s=n.n(l);t.Z=function(e){let{className:t,versionSelectorSlot:n,headingSlot:i}=e;return(0,r.jsxs)("div",{className:o()(s().root,t),children:[n?(0,r.jsx)("div",{className:s().versionSwitcherWrapper,children:n}):null,(0,r.jsx)("div",{className:s().pageHeadingWrapper,children:i})]})}},99173:function(e){e.exports={card:"callout-card_card__J1Gst",heading:"callout-card_heading__Jp1mS g-offset-scroll-margin-top hds-typography-display-300",body:"callout-card_body__dWT7J hds-typography-body-200",ctas:"callout-card_ctas__C0CYT",iconCardLinks:"callout-card_iconCardLinks__WNnCq",fixedColumnsMode:"callout-card_fixedColumnsMode__bqv49",columns2:"callout-card_columns2__RTk4v",columns3:"callout-card_columns3__cUaGW"}},54073:function(e){e.exports={root:"docs-landing-hero_root__F2hg6",hasSubtitle:"docs-landing-hero_hasSubtitle__CfTS8",icon:"docs-landing-hero_icon__4GYZD",pageTitle:"docs-landing-hero_pageTitle__CbfYj g-offset-scroll-margin-top",pageSubtitle:"docs-landing-hero_pageSubtitle__7Wrei"}},44658:function(e){e.exports={root:"autosized-heading-block_root__4yPdg g-offset-scroll-margin-top",h2:"autosized-heading-block_h2__xjxpZ",h3:"autosized-heading-block_h3__9MWlq"}},44784:function(e){e.exports={root:"card-grid-block_root__yDdm_",description:"card-grid-block_description__Xzxr8",cardsGridListCardLink:"card-grid-block_cardsGridListCardLink__dWIIF"}},39123:function(e){e.exports={root:"section-heading-block_root__RSPyk"}},16641:function(e){e.exports={root:"version-switcher_root__5pTE6"}},17103:function(e){e.exports={root:"docs-page-heading_root__QuBg_",pageHeadingWrapper:"docs-page-heading_pageHeadingWrapper__LEMQ7",versionSwitcherWrapper:"docs-page-heading_versionSwitcherWrapper__bdlWl"}},39454:function(e){e.exports={mdxContent:"docs-view_mdxContent___uMnx",docsPageHeading:"docs-view_docsPageHeading___xkrK",hasLandingHero:"docs-view_hasLandingHero__kcYld"}},57175:function(e){e.exports={iconCardGridLink:"hero_iconCardGridLink__w8FJ_"}},15926:function(e){e.exports={root:"icon-card-link-grid_root__blrCJ"}},48457:function(e){e.exports={root:"marketing-content_root__DE3hU"}},34146:function(e){e.exports={mdxSlotWrapper:"product-root-docs-path-landing_mdxSlotWrapper__sQEt2",waypointMDXWrapper:"product-root-docs-path-landing_waypointMDXWrapper__oYhN5"}}},function(e){e.O(0,[3262,9547,1525,1709,9873,5665,62,6517,1151,5044,9067,5765,1844,9774,2888,179],function(){return e(e.s=20271)}),_N_E=e.O()}]);