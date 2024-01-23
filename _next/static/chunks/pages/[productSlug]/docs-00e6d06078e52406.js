(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5732],{20271:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[productSlug]/docs",function(){return r(97609)}])},7400:function(e,t,r){"use strict";var n=r(85893),o=r(94184),a=r.n(o),i=r(55013),l=r(87836),c=r(4931),d=r(81725),s=r(41028),u=r(84187),p=r(6407),_=r(99173),h=r.n(_);t.Z=function(e){let{heading:t,headingSlug:r,body:o,ctas:_,iconCardLinks:x,fixedColumns:g}=e,m=a()(h().fixedColumnsMode,h()["columns".concat(g)]);return null!=_&&null!=x&&(0,s.GN)({color:s.PQ.critical,title:"Error in CalloutCard",description:"Both `ctas` and `iconCardLinks` were passed to CalloutCard. Only provide one."}),(0,n.jsxs)(d.Z,{className:h().card,elevation:"base",children:[(0,n.jsx)("h2",{id:r,className:h().heading,children:t}),(0,n.jsx)("p",{className:h().body,children:o}),_&&_.length?(0,n.jsx)("div",{className:a()(h().ctas,g&&m),children:_.map((e,t)=>0==t?(0,n.jsx)(c.Z,{href:e.url,text:e.text},t):(0,n.jsx)(p.Z,{href:e.url,text:e.text,icon:(0,n.jsx)(i.k,{}),iconPosition:"trailing"},t))}):null,x&&x.length?(0,n.jsx)("ul",{className:a()(h().iconCardLinks,g&&m),children:x.map(e=>{let{icon:t,text:r,url:o}=e;return(0,n.jsx)("li",{children:(0,n.jsx)(u.Z,{icon:l.e[t],text:r,url:o})},o)})}):null]})}},97609:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return Y},default:function(){return V}});var n=r(85893),o=r(94184),a=r.n(o),i=r(7261),l=r(91844),c=r(41204),d=r(88561),s=r(98634),u=r(12559),p=r(39049),_=r(57175),h=r.n(_),x=e=>{let{pageHeading:t,pageSubtitle:r,iconCardGridItems:o,versions:a}=e,i=(0,d.j2)();return(0,n.jsxs)("header",{children:[(0,n.jsx)(s.Z,{versionSelectorSlot:a?(0,n.jsx)(p.Z,{options:a}):null,headingSlot:(0,n.jsx)(u.Z,{pageHeading:t,pageSubtitle:r})}),"terraform"!==i.slug?(0,n.jsx)("div",{className:h().iconCardGridLink,children:(0,n.jsx)(C,{iconCardGridItems:o})}):null]})},g=r(87836),m=r(84187),j=r(15926),k=r.n(j),C=e=>{let{iconCardGridItems:t}=e,r=(0,d.j2)(),o=t||r.rootDocsPaths;return(0,n.jsx)("ul",{className:k().root,children:o.map(e=>{let{iconName:t,path:o,name:a}=e;return r.currentRootDocsPath.path===o?null:(0,n.jsx)("li",{children:(0,n.jsx)(m.Z,{icon:g.e[t],productSlug:r.slug,text:a,url:"/".concat(r.slug,"/").concat(o)})},o)})})},f=r(67294),b=r(31304),v=r.n(b),N=r(31633),y=r(44658),S=r.n(y);let Z=e=>{let{className:t,id:r,level:o,text:i}=e,l=a()(S().root,S()["h".concat(o)],t);return(0,n.jsx)(N.Z,{className:l,id:r,level:o,size:{2:400,3:300}[o],weight:"bold",children:i})};var G=r(7400),L=r(52445),w=r(47352),B=r(75524),W=r(39174),I=r(44784),P=r.n(I),E=r(76925),z=r(28093),D=r(4355),M=r(39123),T=r.n(M),X=Object.assign(()=>null,{AutosizedHeadingBlock:Z,CalloutCardBlock:e=>{let{body:t,ctas:r,heading:o,headingSlug:a}=e;return(0,n.jsx)(G.Z,{body:t,ctas:r,heading:o,headingSlug:a})},CardGridBlock:e=>{let{cards:t,description:r,title:o,headingId:a,headingLevel:i}=e;return(0,n.jsxs)("div",{className:P().root,children:[!!o&&(0,n.jsx)(Z,{level:i,id:a,text:o}),!!r&&(0,n.jsx)(W.Z,{className:P().description,size:300,weight:"regular",children:r}),(0,n.jsx)(B.Z,{children:t.map(e=>{let{description:t,title:r,url:o}=e;return(0,n.jsxs)(w.Z,{ariaLabel:r,className:P().cardsGridListCardLink,href:o,children:[(0,n.jsx)(L.ll,{text:r}),(0,n.jsx)(L.SZ,{text:t})]},o)})})]})},IconCardGridBlock:e=>{let{cards:t,productSlug:r}=e;return(0,n.jsx)(E.Z,{cards:t.map(e=>{let{iconName:t,text:r,url:n}=e;return{icon:g.e[t],text:r,url:n}}),productSlug:r})},ParagraphBlock:e=>{let{mdxSource:t}=e;return(0,n.jsx)(z.R,{...t,components:{a:D.nu,p:D.im}})},SectionHeadingBlock:e=>{let{level:t,id:r,text:o}=e;return(0,n.jsx)(Z,{className:T().root,id:r,level:t,text:o})}}),H=r(48457),J=r.n(H);let R="Getting Started",O=v()(R);var q=e=>{let{blocks:t}=e,r=(0,d.j2)();return(0,n.jsx)("div",{className:J().root,children:t.map((e,t)=>"paragraph"===e.type?(0,f.createElement)(X.ParagraphBlock,{...e,key:t}):"section-heading"===e.type?(0,n.jsx)(X.SectionHeadingBlock,{id:e.headingId,level:e.headingLevel,text:e.title},t):"icon-card-grid"===e.type?(0,n.jsx)(X.IconCardGridBlock,{cards:e.cards,productSlug:r.slug},t):"card-grid"===e.type?(0,n.jsx)(X.CardGridBlock,{cards:e.cards,description:e.description,headingLevel:e.headingLevel,headingId:e.headingId,title:e.title},t):"getting-started-card"===e.type?(0,n.jsx)(X.CalloutCardBlock,{body:e.description,ctas:[e.callToAction],heading:R,headingSlug:O},t):void 0)})},A=r(39454),F=r.n(A),Q=r(34146),U=r.n(Q),Y=!0,V=e=>{let t,{mdxSource:r,pageContent:o,pageHeading:d,product:s,versions:u,layoutProps:p,outlineItems:_}=e,{pageSubtitle:h,marketingContentBlocks:g}=o;if(r){let e=(0,l.Z)(s.slug),o=a()(U()["".concat(s.slug,"MDXWrapper")],U().mdxSlotWrapper,F().mdxContent);t=(0,n.jsx)("div",{className:o,children:(0,n.jsx)(c.Z,{mdxRemoteProps:{...r,components:{...e}}})})}return(0,n.jsx)(i.Z,{...p,outlineItems:_,children:(0,n.jsxs)("div",{className:u?U().docsLandingWithVersions:null,children:[(0,n.jsx)(x,{pageHeading:d,pageSubtitle:h,iconCardGridItems:o.iconCardGridItems,versions:u}),(0,n.jsx)(q,{blocks:g}),t]})})}},99173:function(e){e.exports={card:"callout-card_card__J1Gst",heading:"callout-card_heading__Jp1mS g-offset-scroll-margin-top hds-typography-display-300",body:"callout-card_body__dWT7J hds-typography-body-200",ctas:"callout-card_ctas__C0CYT",iconCardLinks:"callout-card_iconCardLinks__WNnCq",fixedColumnsMode:"callout-card_fixedColumnsMode__bqv49",columns2:"callout-card_columns2__RTk4v",columns3:"callout-card_columns3__cUaGW"}},44658:function(e){e.exports={root:"autosized-heading-block_root__4yPdg g-offset-scroll-margin-top",h2:"autosized-heading-block_h2__xjxpZ",h3:"autosized-heading-block_h3__9MWlq"}},44784:function(e){e.exports={root:"card-grid-block_root__yDdm_",description:"card-grid-block_description__Xzxr8",cardsGridListCardLink:"card-grid-block_cardsGridListCardLink__dWIIF"}},39123:function(e){e.exports={root:"section-heading-block_root__RSPyk"}},57175:function(e){e.exports={iconCardGridLink:"hero_iconCardGridLink__w8FJ_"}},15926:function(e){e.exports={root:"icon-card-link-grid_root__blrCJ"}},48457:function(e){e.exports={root:"marketing-content_root__DE3hU"}},34146:function(e){e.exports={mdxSlotWrapper:"product-root-docs-path-landing_mdxSlotWrapper__sQEt2",waypointMDXWrapper:"product-root-docs-path-landing_waypointMDXWrapper__oYhN5"}}},function(e){e.O(0,[5666,9547,1525,1709,9873,5665,622,6517,1151,5044,9067,5765,4764,9774,2888,179],function(){return e(e.s=20271)}),_N_E=e.O()}]);