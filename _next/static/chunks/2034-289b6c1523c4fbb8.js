(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2034],{44119:function(e,t,s){"use strict";var n=s(85893),o=s(9008),r=s.n(o);t.Z=function(e){let{isVersioned:t}=e;return t?(0,n.jsx)(r(),{children:(0,n.jsx)("meta",{name:"robots",content:"noindex, nofollow"},"robots")}):null}},96411:function(e,t,s){"use strict";var n=s(85893),o=s(72898),r=s(94137),i=s.n(r);t.Z=function(e){let{options:t,label:s}=e;if(!t||0===t.length)return null;let r=t.find(e=>e.isSelected);return(0,n.jsx)("nav",{children:(0,n.jsxs)(o.ZP,{"aria-label":r.ariaLabel,className:i().root,text:r.label,color:"secondary",listPosition:"right",children:[(0,n.jsx)(o.lF,{children:s}),t.filter(e=>!e.isSelected).map(e=>(0,n.jsx)(o.VD,{href:e.href,rel:e.isLatest?void 0:"nofollow",children:e.label},e.href))]})})}},55693:function(e,t,s){"use strict";var n=s(85893),o=s(94636),r=s(32868),i=s.n(r);t.Z=function(e){let{children:t,sidebarSlot:s,mobileMenuSlot:r}=e;return(0,n.jsx)(o.Z,{mobileMenuSlot:r,showFooterTopBorder:!0,children:(0,n.jsxs)("div",{className:i().root,children:[(0,n.jsx)("div",{className:i().sidebarArea,children:s}),(0,n.jsx)("div",{className:i().mainArea,children:t})]})})}},77817:function(e,t,s){"use strict";s.d(t,{W:function(){return p}});var n=s(85893),o=s(41664),r=s.n(o),i=s(11672),a=s(67493),l=s.n(a),d=s(93967),c=s.n(d);function p(e){let{id:t,ariaLabel:s,children:o,className:a}=e;return(0,n.jsxs)("div",{className:c()(l().root,a),children:[o,(0,n.jsx)(r(),{className:l().permalink,"aria-label":s,href:"#".concat(t),children:(0,n.jsx)(i.j,{className:l().permalinkIcon})})]})}},96342:function(e,t,s){"use strict";s.d(t,{Z:function(){return eS}});var n=s(85893),o=s(55693),r=s(60641),i=s(44119),a=s(2568),l=s(96411),d=s(26640),c=s(93967),p=s.n(c);s(87335);var h=s(67294),u=s(60776),_=s(98009),x=s(27552),m=s(7289),g=s(69220),j=s.n(g),v=function(e){let{levels:t}=e,[s,o]=(0,h.useState)(t.length-1);return(0,n.jsxs)(m.Z,{className:j().mobileMenuContainer,children:[(0,n.jsx)(m.v,{}),(0,n.jsxs)("div",{className:j().levelButtons,children:[s>0?(0,n.jsx)(x.Z,{className:j().levelUpButton,color:"tertiary",icon:(0,n.jsx)(u.a,{}),iconPosition:"leading",onClick:()=>o(s-1),text:t[s-1].levelButtonText}):null,s<t.length-1?(0,n.jsx)(x.Z,{className:j().levelDownButton,color:"tertiary",icon:(0,n.jsx)(_.r,{}),iconPosition:"trailing",onClick:()=>o(s+1),text:t[s+1].levelButtonText}):null]}),t[s].content]})},y=s(9682),f=s(33878),N=s(80480),w=s(35625),b=s(29318),S=s.n(b);function I(e){let{slug:t}=e,s=(0,w.ti)(t);return(0,n.jsx)("ul",{className:S().listResetStyles,children:s.map((e,t)=>(0,n.jsx)(y.Rd,{item:e},t))})}function M(e){let{productData:t,navItems:s,navResourceItems:o}=e;return(0,n.jsx)(v,{levels:[function(){let e=(0,f.A)();return{levelButtonText:"Main Menu",content:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h3",{className:S().heading,children:"Main Menu"}),(0,n.jsx)("ul",{className:S().listResetStyles,children:e.map((e,t)=>(0,n.jsx)(y.Rd,{item:e},t))})]})}}(),function(e){let t=[{title:e.name,fullPath:"/".concat(e.slug),theme:e.slug},...(0,N.X)(e)];return{levelButtonText:"".concat(e.name," Home"),content:(0,n.jsxs)("ul",{className:S().listResetStyles,children:[t.map((e,t)=>(0,n.jsx)(y.Rd,{item:e},t)),(0,n.jsx)(y.ny,{}),(0,n.jsx)(I,{slug:e.slug})]})}}(t),{levelButtonText:"Previous",content:(0,n.jsxs)("div",{children:[(0,n.jsx)(d.Z,{navItems:s,navResourceItems:o}),(0,n.jsx)(y.ny,{}),(0,n.jsx)(I,{slug:t.slug})]})}]})}var C=s(24113),R=s.n(C);function A(e){let{operationGroups:t}=e;return(0,n.jsx)("div",{className:R().root,children:t.map(e=>e.items).flat().map(e=>(0,n.jsx)("div",{children:(0,n.jsx)(eg,{headerSlot:(0,n.jsx)(e_,{className:R().header,slug:e.slug,headingText:e.summary,method:e.type,path:e.path.truncated}),examplesSlot:(0,n.jsx)(ep,{heading:e.summary,code:e.urlPathForCodeBlock}),detailsSlot:(0,n.jsx)(el,{requestData:e.requestData,responseData:e.responseData})})},e.operationId))})}var k=s(16231),P=s(20516),B=s(9911),Z=s(28222),D=s(66488),T=s(96818),L=s(59198),H=s(73699),O=s(62112),G=s(75368);let J={operational:{text:"Operational",color:"success",icon:(0,n.jsx)(D.z,{})},degraded_performance:{text:"Degraded",color:"warning",icon:(0,n.jsx)(H.A,{})},partial_outage:{text:"Partial Outage",color:"warning",icon:(0,n.jsx)(H.A,{})},major_outage:{text:"Major Outage",color:"critical",icon:(0,n.jsx)(O.H,{})},under_maintenance:{text:"Maintenance",color:"highlight",icon:(0,n.jsx)(G.I,{})},loading:{text:"Loading…",color:"neutral",icon:(0,n.jsx)(T.b,{})},unknown:{text:"Unknown",color:"neutral",icon:(0,n.jsx)(L.v,{})}};var U=function(e){var t;let{status:s}=e,o=null!==(t=J[s])&&void 0!==t?t:J.unknown;return(0,n.jsx)(k.Z,{text:o.text,type:"outlined",color:o.color,size:"small",icon:o.icon})},q=s(42950);async function z(e){let t;try{var s;let n=await E(e);if(t=null===(s=n.component)||void 0===s?void 0:s.status,"string"!=typeof t)throw Error('In the "useServiceStatus" hook, the status data did not match expected shape. Please ensure GET requests to the endpoint '.concat(e,' yield data with a string at "responseData.component.status".'))}catch(s){console.error("Failed to parse valid status page data from ".concat(e,".")),console.error(s),t="unknown"}return t}async function E(e){let t=await fetch(e);if(!t.ok)throw Error("HTTP error when fetching from ".concat(e,". Status: ").concat(t.status));return await t.json()}var V=s(31702),W=s.n(V);function F(e){let{endpointUrl:t,pageUrl:s}=e,o=function(e){let[t,s]=(0,h.useState)("loading");return(0,h.useEffect)(()=>{(async()=>{s(await z(e))})()},[e]),t}(t);return(0,n.jsxs)("div",{className:W().wrapper,children:[(0,n.jsx)(U,{status:o}),(0,n.jsx)(q.Z,{text:"Status",icon:(0,n.jsx)(Z.g,{}),iconPosition:"trailing",color:"secondary",href:s,size:"small",opensInNewTab:!0})]})}var Q=s(95216),K=s.n(Q);function X(e){let{heading:t,badgeText:s,serviceProductSlug:o,statusIndicatorConfig:r,contentSlot:i,versionSwitcherSlot:a}=e;return(0,n.jsxs)("div",{className:K().overviewWrapper,children:[(0,n.jsxs)("div",{className:K().headerAndVersionSwitcher,children:[(0,n.jsxs)("header",{className:K().header,children:[(0,n.jsx)(P.Z,{size:"medium",className:K().icon,children:(0,n.jsx)(B.Z,{productSlug:o})}),(0,n.jsxs)("span",{children:[(0,n.jsx)("h1",{id:t.id,className:K().heading,children:t.text}),r?(0,n.jsx)(F,{endpointUrl:r.endpointUrl,pageUrl:r.pageUrl}):null]}),(0,n.jsx)(k.Z,{className:K().releaseStageBadge,text:s,type:"outlined",size:"small"})]}),a?(0,n.jsx)("div",{className:K().versionSwitcherSlot,children:a}):null]}),i?(0,n.jsx)("section",{children:i}):null]})}var Y=s(77817),$=s(49423),ee=s(35006),et=s.n(ee);function es(e){let{name:t,slug:s,type:o,isRequired:r,description:i,nestedProperties:a,depth:l=0}=e,d=(null==a?void 0:a.length)>0;return(0,n.jsxs)("div",{id:s,className:et().baseRoot,children:[(0,n.jsx)("div",{className:et().baseMetaAndDescription,children:(0,n.jsx)(Y.W,{id:s,ariaLabel:t,children:(0,n.jsxs)("div",{className:et().baseMeta,children:[(0,n.jsx)($.yf,{children:t}),(0,n.jsx)("span",{className:et().baseType,children:o}),r?(0,n.jsx)(k.Z,{text:"Required",color:"highlight"}):null]})})}),i||d?(0,n.jsxs)("div",{children:[i?(0,n.jsx)(er,{listItemStyle:d?null:"last",hideIndicator:!d,children:(0,n.jsx)("div",{className:p()(et().baseDescription,{[et().hasNestedProperties]:d}),dangerouslySetInnerHTML:{__html:i}})}):null,d?(0,n.jsx)(en,{nestedProperties:a,depth:l}):null]}):null]})}function en(e){let{nestedProperties:t,depth:s}=e;return(0,n.jsx)("ul",{className:et().listNestedProperties,children:t.map((e,o)=>{let r=o===t.length-1;return(0,n.jsx)("li",{children:(0,n.jsx)(eo,{...e,depth:s+1,isLastItem:r})},"".concat(e.name,"_").concat(s))})})}function eo(e){let{name:t,slug:s,type:o,isRequired:r,description:i,nestedProperties:a,depth:l=0,isLastItem:d}=e,c=(null==a?void 0:a.length)>0;return(0,n.jsxs)("div",{id:s,className:et().nestedRoot,children:[(0,n.jsx)(er,{listItemStyle:d?"last":"middle",children:(0,n.jsx)(Y.W,{id:s,ariaLabel:t,children:(0,n.jsxs)("div",{className:et().nestedMeta,children:[(0,n.jsxs)("div",{className:et().nestedNameAndType,children:[(0,n.jsx)("code",{className:et().nestedName,children:t}),(0,n.jsx)("span",{className:et().nestedType,children:o})]}),r?(0,n.jsx)(k.Z,{text:"Required",color:"highlight",size:"small"}):null]})})}),i||c?(0,n.jsxs)(er,{hideBorder:d,children:[i?(0,n.jsx)(er,{listItemStyle:c?null:"last",hideIndicator:!c,children:(0,n.jsx)("div",{className:et().nestedDescription,dangerouslySetInnerHTML:{__html:i}})}):null,c?(0,n.jsx)(en,{nestedProperties:a,depth:l}):null]}):null]})}function er(e){let{children:t,listItemStyle:s,hideBorder:o,hideIndicator:r}=e;return(0,n.jsxs)("div",{className:p()(et().treeContent,{[et().hideIndicator]:r}),children:[r?null:(0,n.jsx)("div",{className:et().treeIndicatorContainer,children:(0,n.jsx)("div",{className:p()(et().treeIndicator,{[et().isLastItem]:"last"===s,[et().isMiddleItem]:"middle"===s,[et().hideBorder]:o})})}),(0,n.jsx)("div",{children:t})]})}var ei=s(68708),ea=s.n(ei);function el(e){let{requestData:t,responseData:s}=e;return(0,n.jsxs)("div",{className:ea().root,children:[(0,n.jsx)(ed,{heading:t.heading,groups:t.groups,noGroupsMessage:t.noGroupsMessage}),(0,n.jsx)(ed,{heading:s.heading,groups:s.groups,noGroupsMessage:s.noGroupsMessage})]})}function ed(e){let{heading:t,groups:s,noGroupsMessage:o}=e;return(0,n.jsxs)("div",{className:ea().section,children:[(0,n.jsx)(Y.W,{id:t.slug,ariaLabel:t.text,children:(0,n.jsx)("h4",{id:t.slug,className:ea().sectionHeading,children:t.text})}),s.length>0?(0,n.jsx)("div",{className:ea().sectionGroups,children:s.map(e=>(0,n.jsxs)("div",{className:ea().group,children:[(0,n.jsx)(Y.W,{id:e.heading.slug,ariaLabel:e.heading.text,children:(0,n.jsx)("h5",{id:e.heading.slug,className:ea().groupHeading,children:e.heading.theme?(0,n.jsx)(k.Z,{type:"outlined",text:e.heading.text,color:e.heading.theme}):e.heading.text})}),(0,n.jsx)("div",{className:ea().groupProperties,children:e.propertyDetails.map(e=>(0,n.jsx)(es,{...e},e.name))})]},e.heading.slug))}):(0,n.jsx)("div",{className:ea().noGroupsMessage,children:o})]})}var ec=s(75973);function ep(e){let{heading:t,code:s}=e;return(0,n.jsx)(ec.Z,{options:{heading:t,showClipboard:!0,wrapCode:!0},code:s})}var eh=s(25505),eu=s.n(eh);function e_(e){let{slug:t,headingText:s,method:o,path:r,className:i}=e;return(0,n.jsxs)("div",{className:p()(i,eu().wrapper),children:[(0,n.jsx)(Y.W,{id:t,ariaLabel:s,children:(0,n.jsx)("h3",{id:t,className:eu().heading,children:s})}),(0,n.jsxs)("div",{className:eu().methodAndPath,children:[(0,n.jsx)(k.Z,{className:eu().method,type:"outlined",text:o}),(0,n.jsx)("p",{className:eu().path,children:r})]})]})}var ex=s(24263),em=s.n(ex);function eg(e){let{headerSlot:t,examplesSlot:s,detailsSlot:o}=e;return(0,n.jsx)("div",{className:em().root,children:(0,n.jsxs)("div",{className:em().gridLayout,children:[(0,n.jsx)("div",{className:em().headerSlot,children:t}),(0,n.jsx)("div",{className:em().examplesStickyContainer,children:(0,n.jsx)("div",{className:em().examplesSlot,children:s})}),(0,n.jsx)("div",{className:em().detailsSlot,children:o})]})})}var ej=s(48828),ev=s.n(ej),ey=s(6812),ef=s(94995),eN=s.n(ef);let ew={a:$.nu,blockquote:$.N2,h1:$.NM,h2:$.e2,h3:$.Uw,h4:$.RC,h5:$.xh,h6:$.Je,inlineCode:$.yf,li:$.l2,ol:$.P8,p:$.im,pre:$.cb,table:$.pf,ul:$.u$};function eb(e){let{mdxRemoteProps:t}=e;return(0,n.jsx)("div",{className:eN().root,children:(0,n.jsx)(ey.R,{...t,components:ew})})}var eS=function(e){let{productData:t,topOfPageHeading:s,releaseStage:c,descriptionMdx:p,operationGroups:h,navItems:u,navResourceItems:_,breadcrumbLinks:x,statusIndicatorConfig:m,serviceProductSlug:g,versionSwitcherProps:j,isVersionedUrl:v}=e;return(0,n.jsx)(o.Z,{sidebarSlot:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{text:"HashiCorp Cloud Platform",href:"/hcp"}),(0,n.jsx)(d.Z,{navItems:u,navResourceItems:_,showFilterInput:!0})]}),mobileMenuSlot:(0,n.jsx)(M,{productData:t,navItems:u,navResourceItems:_}),children:(0,n.jsxs)("div",{className:ev().paddedContainer,children:[(0,n.jsxs)("div",{className:ev().spaceBreadcrumbsOverview,children:[(0,n.jsx)(r.Z,{links:x}),(0,n.jsx)(i.Z,{isVersioned:v}),(0,n.jsx)(X,{heading:s,badgeText:c,serviceProductSlug:g,statusIndicatorConfig:m,versionSwitcherSlot:j?(0,n.jsx)(l.Z,{label:j.label,options:j.options}):null,contentSlot:p?(0,n.jsx)(eb,{mdxRemoteProps:p}):null})]}),(0,n.jsxs)("div",{className:ev().operationsSection,children:[(0,n.jsx)("h2",{className:ev().operationsHeading,children:"Operations"}),(0,n.jsx)(A,{operationGroups:h})]})]})})}},29318:function(e){e.exports={listResetStyles:"level-components_listResetStyles__nKf0S",heading:"level-components_heading__XPWl_"}},69220:function(e){e.exports={mobileMenuContainer:"mobile-menu-levels_mobileMenuContainer__O8IQd",levelButtons:"mobile-menu-levels_levelButtons__i1e_V",levelUpButton:"mobile-menu-levels_levelUpButton__CxJa1",levelDownButton:"mobile-menu-levels_levelDownButton__tjLD4"}},94137:function(e){e.exports={root:"version-switcher_root__5pTE6"}},32868:function(e){e.exports={root:"sidebar-layout_root__5Orqw",sidebarArea:"sidebar-layout_sidebarArea__CVWqK",mainArea:"sidebar-layout_mainArea__3pW6J"}},67493:function(e){e.exports={root:"content-with-permalink_root__hBEnj",permalink:"content-with-permalink_permalink__aE8L7 g-focus-ring-from-box-shadow",permalinkIcon:"content-with-permalink_permalinkIcon__hQs6l"}},87335:function(e){e.exports={pre:"dev-code-block_pre__jUQ1y hds-typography-code-100",wrap:"dev-code-block_wrap__Cs_TV"}},24113:function(e){e.exports={root:"open-api-operations_root___JQ3K"}},94995:function(e){e.exports={root:"description-mdx_root__FQqEu hds-typography-body-300"}},31702:function(e){e.exports={wrapper:"status_wrapper__kVjuY"}},95216:function(e){e.exports={overviewWrapper:"open-api-overview_overviewWrapper__hX_jK",headerAndVersionSwitcher:"open-api-overview_headerAndVersionSwitcher__Lw_M3",header:"open-api-overview_header__gdiOe",heading:"open-api-overview_heading__dPUOb hds-typography-display-600",icon:"open-api-overview_icon__z_RXJ",releaseStageBadge:"open-api-overview_releaseStageBadge__qJ_g8",versionSwitcherSlot:"open-api-overview_versionSwitcherSlot__17DAu"}},68708:function(e){e.exports={root:"operation-details_root__hDr4R",section:"operation-details_section__QAIfK",sectionHeading:"operation-details_sectionHeading__X5pb0 g-offset-scroll-margin-top hds-typography-display-300",sectionGroups:"operation-details_sectionGroups__ocQz_",group:"operation-details_group___cbw4",groupHeading:"operation-details_groupHeading__xhssJ g-offset-scroll-margin-top hds-typography-display-200",groupProperties:"operation-details_groupProperties__NQzOS",noGroupsMessage:"operation-details_noGroupsMessage__tOFUY hds-typography-body-200"}},25505:function(e){e.exports={wrapper:"operation-header_wrapper__QhO06",heading:"operation-header_heading__cq3An g-offset-scroll-margin-top hds-typography-display-400",methodAndPath:"operation-header_methodAndPath__4Wjfh",method:"operation-header_method__FLmHB",path:"operation-header_path__O63fG hds-typography-code-300"}},24263:function(e){e.exports={root:"operation-sections_root__j_kRK",gridLayout:"operation-sections_gridLayout__bEUwy",headerSlot:"operation-sections_headerSlot__qxzIe",detailsSlot:"operation-sections_detailsSlot__vYAUU",examplesStickyContainer:"operation-sections_examplesStickyContainer__qQH__",examplesSlot:"operation-sections_examplesSlot__6gizO"}},35006:function(e){e.exports={listResetStyles:"property-details_listResetStyles__p2ZsD",description:"property-details_description__2mCJ5",baseRoot:"property-details_baseRoot__J2AK8 g-offset-scroll-margin-top",baseMetaAndDescription:"property-details_baseMetaAndDescription__dT2Mb",baseMeta:"property-details_baseMeta__49LYT",baseType:"property-details_baseType__fwfFB hds-typography-code-200",baseDescription:"property-details_baseDescription__lJG7m hds-typography-body-200 property-details_description__2mCJ5",hasNestedProperties:"property-details_hasNestedProperties__fvHpg",listNestedProperties:"property-details_listNestedProperties__Snta5 property-details_listResetStyles__p2ZsD",nestedRoot:"property-details_nestedRoot__9ARbt g-offset-scroll-margin-top",nestedMetaAndDescription:"property-details_nestedMetaAndDescription__REyz_",nestedMeta:"property-details_nestedMeta__Rc05F",nestedNameAndType:"property-details_nestedNameAndType___z5_m",nestedName:"property-details_nestedName__EvuJf hds-typography-code-100",nestedType:"property-details_nestedType__JwynV hds-typography-code-100",nestedDescription:"property-details_nestedDescription__8gych hds-typography-body-100 property-details_description__2mCJ5",treeContent:"property-details_treeContent__sx8tf",hideIndicator:"property-details_hideIndicator__VQRQ0",treeIndicatorContainer:"property-details_treeIndicatorContainer__ffodw",treeIndicator:"property-details_treeIndicator__TuEui",hideBorder:"property-details_hideBorder__Rw1DV",isMiddleItem:"property-details_isMiddleItem__iS5aB",isLastItem:"property-details_isLastItem__gLAz0"}},48828:function(e){e.exports={paddedContainer:"open-api-docs-view_paddedContainer__5OVAG",spaceBreadcrumbsOverview:"open-api-docs-view_spaceBreadcrumbsOverview__cqjZ_",operationsSection:"open-api-docs-view_operationsSection__GNZLI",operationsHeading:"open-api-docs-view_operationsHeading__r_uJA hds-typography-display-500"}}}]);