(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2102],{44765:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var i=t(85893),s=t(26914),n=t.n(s);function a(e){let{children:r}=e;return(0,i.jsx)("ul",{className:n().navList,children:r})}},49122:function(e,r,t){"use strict";t.d(r,{Z:function(){return L}});var i=t(85893),s=t(67294),n=t(94184),a=t.n(n),o=t(36663),l=t(88237),c=t(2527),d=t(34997),u=t(47681),_=t(36407),m=t(45335),p=t(44765),x=t(15448),b=t(41936),h=t(93333),v=t(44308),f=t(27991),j=t.n(f);let N=e=>{let{className:r,icon:t,iconPosition:s,onClick:n,text:a}=e;return(0,i.jsx)(v.Z,{className:r,color:"tertiary",icon:t,iconPosition:s,onClick:n,text:a})},g=e=>{let{onClick:r,text:t}=e;return(0,i.jsx)(N,{className:j().levelUpButton,icon:(0,i.jsx)(b.a,{}),iconPosition:"leading",onClick:r,text:t})},C=e=>{let{onClick:r,text:t}=e;return(0,i.jsx)(N,{className:j().levelDownButton,icon:(0,i.jsx)(h.r,{}),iconPosition:"trailing",onClick:r,text:t})};var k=e=>{let r,t,{levelUpButtonText:s,levelDownButtonText:n}=e,{hasManyLevels:o,isFirstLevel:l,isLastLevel:c,setCurrentLevel:d}=(0,u.c)();o&&!l&&(r=(0,i.jsx)(g,{text:s,onClick:()=>d(e=>e-1)})),o&&!c&&(t=(0,i.jsx)(C,{text:n,onClick:()=>d(e=>e+1)}));let _=!r&&!!t;return(0,i.jsxs)("div",{className:a()(j().root,{[j().rightAlign]:_}),children:[r,t]})},S=t(26914),W=t.n(S),w=t(46990),L=e=>{let r,t,n,b,{backToLinkProps:h,children:v,levelButtonProps:f,menuItems:j,overviewItemHref:N,showFilterInput:g=!0,title:C,visuallyHideTitle:S=!1,isInstallPage:L,showResourcesList:y=!0}=e,Z=(0,c.j2)(),{shouldRenderMobileControls:T}=(0,u.c)(),I=(0,l.Z)({excludeHash:!0,excludeSearch:!0}),[A,B]=(0,s.useState)(""),{itemsWithMetadata:D}=(0,s.useMemo)(()=>(0,m.PO)(I,j),[I,j]);if(T&&f)r=(0,i.jsx)(k,{levelUpButtonText:f.levelUpButtonText,levelDownButtonText:f.levelDownButtonText});else if(h){let{text:e,href:t}=h;r=(0,i.jsx)("div",{className:W().backToLinkWrapper,children:(0,i.jsx)(x.Z,{text:e,href:t})})}g&&(t=(0,i.jsx)("div",{className:a()(W().filterInputWrapper,{[W()["filterInputWrapper--mobile"]]:T}),children:(0,i.jsx)(d.Z,{value:A,onChange:B,placeholder:"Filter sidebar"})})),N&&!A&&(n=(0,i.jsx)(_.sd,{item:{href:N,title:"Overview",isActive:N===I}}));let E=(0,m.ok)(D,A),F=(0,m.ti)(null==Z?void 0:Z.slug),P=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_.ny,{}),(0,i.jsx)(p.Z,{children:F.map((e,r)=>(0,i.jsx)(_.Rd,{item:e},r))})]});return b=v?(0,i.jsxs)(i.Fragment,{children:[v,y&&P]}):L?(0,i.jsx)(w.Z,{navItems:E,navResourceItems:F.splice(1),showFilterInput:!1}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(p.Z,{children:E.map((e,r)=>{let t="".concat(e.id,"-").concat(r);return(0,i.jsx)(_.Rd,{item:e},t)})}),y&&P]}),(0,i.jsxs)("div",{className:W().sidebar,children:[r,t,(0,i.jsxs)("nav",{"aria-labelledby":o._s,className:W().nav,id:o.W7,children:[(0,i.jsx)("div",{className:S?"g-screen-reader-only":void 0,children:(0,i.jsx)(_.HS,{text:C,id:o._s})}),n,b]})]})}},36663:function(e,r,t){"use strict";t.d(r,{W7:function(){return n},_s:function(){return s},c_:function(){return i}});let i="main",s="sidebar-label",n="sidebar-nav"},47681:function(e,r,t){"use strict";t.d(r,{c:function(){return l},n:function(){return o}});var i=t(85893),s=t(67294),n=t(2527);let a=(0,s.createContext)(void 0);a.displayName="SidebarNavDataContext";let o=e=>{let{children:r,navDataLevels:t}=e,{mobileMenuIsOpen:o,setMobileMenuIsOpen:l,isMobileMenuRendered:c}=(0,n.Sn)(),d=t.length,[u,_]=(0,s.useState)(d-1);(0,s.useEffect)(()=>{o||_(d-1)},[o,t,d]);let m=d>1;return(0,i.jsx)(a.Provider,{value:{currentLevel:u,hasManyLevels:m,isFirstLevel:0===u,isLastLevel:u===d-1,mobileMenuIsOpen:o,setCurrentLevel:_,setMobileMenuIsOpen:l,shouldRenderMobileControls:m&&c},children:r})},l=()=>{let e=(0,s.useContext)(a);if(void 0===e)throw Error("useSidebarNavData must be used within a SidebarNavDataProvider");return e}},92102:function(e,r,t){"use strict";t.d(r,{Z:function(){return B}});var i=t(85893),s=t(67294),n=t(94184),a=t.n(n),o=t(36663),l=t(88584),c=t(87785),d=t(7164),u=t(2527),_=t(88740),m=t(23819),p=t(13652),x=t(62801),b=t.n(x),h=function(e){let{url:r,label:t="Edit this page",className:s}=e;return(0,i.jsxs)("a",{href:r,target:"_blank",className:a()(b().editLink,s),rel:"noreferrer",children:[(0,i.jsx)(p.P,{className:b().editLinkIcon}),t]})},v=t(10776),f=t(49122),j=t(47681),N=t(89019),g=t(71197),C=t.n(g);function k(e){let{progress:r}=e,[t,n]=(0,s.useState)(!1);return(0,s.useEffect)(()=>r.onChange(e=>{let r=1e3===Math.round(1e3*e);t!==r&&n(r)}),[t,r]),(0,i.jsx)("div",{className:a()(C().root,{[C().isComplete]:t}),children:(0,i.jsx)(N.m.div,{className:C().progress,style:{scaleX:r}})})}var S=t(39332),W=t(942);function w(e){let{scrollTop:r,scrollHeight:t,clientHeight:i}=e,s=t-i,n=s>0,a=Math.round(100*r/s);return Number.isNaN(a)?{isScrollable:n}:{isScrollable:n,isAtStart:n&&0===a,isAtEnd:n&&100===a}}var L=t(74041),y=t.n(L);function Z(e){let{children:r}=e,t=(0,S.usePathname)(),n=(0,W.Z)(),o=(0,s.useRef)(),[{isScrollable:l,isAtStart:c,isAtEnd:d},u]=(0,s.useState)({isScrollable:!1});return(0,s.useEffect)(()=>{u(w(o.current))},[n]),(0,s.useEffect)(()=>{u(w(o.current))},[t]),(0,i.jsx)("div",{className:a()(y().root,{[y().showTopScrim]:l&&!c,[y().showBottomScrim]:l&&!d}),children:(0,i.jsx)("div",{ref:o,className:y().scrollContainer,onScroll:function(e){u(w(e.target))},children:r})})}var T=t(19382),I=t.n(T);let A=e=>{let{breadcrumbLinks:r,children:t,githubFileUrl:n,AlternateSidebar:_,showScrollProgress:p,sidecarSlot:x,sidecarTopSlot:b,sidebarNavDataLevels:N,mainWidth:g="wide",alertBannerSlot:C}=e,{isMobileMenuRendered:S,mobileMenuIsOpen:W,setMobileMenuIsOpen:w}=(0,u.Sn)(),{currentLevel:L}=(0,j.c)(),y=(0,s.useRef)(),T=N[L],A=(0,s.useRef)(null),{setShowSkipLink:B}=(0,s.useContext)(u.R5),D=(0,l.Z)(),{scrollYProgress:E}=(0,d.v)({target:A,offset:["".concat(-1*D,"px start"),"end end"]});(0,s.useEffect)(()=>(B(!0),()=>{B(!1)}),[]),(0,c.Z)([y],()=>w(!1),S&&(!S||W));let F=null;return F=!_||(null==T?void 0:T.menuItems)?(0,i.jsx)(f.Z,{...T}):(0,i.jsx)(_,{...T}),(0,i.jsxs)("div",{className:a()(I().root,I()["mainWidth-".concat(g)]),children:[(0,i.jsx)(v.Z,{className:I().sidebarContainer,ref:y,children:(0,i.jsxs)("div",{className:I().sidebarContentWrapper,children:[(0,i.jsx)(v.v,{}),F]})}),(0,i.jsxs)("div",{className:I().contentWrapper,ref:A,children:[C,(0,i.jsxs)("div",{className:I().paddedAreaWrapper,children:[(0,i.jsx)("div",{className:I().breadcrumbContainer,children:(0,i.jsx)("div",{className:I().breadcrumbMaxWidth,children:r?(0,i.jsx)(m.Z,{links:r}):null})}),(0,i.jsxs)("div",{className:I().mainAndSidecar,children:[(0,i.jsxs)("main",{id:o.c_,className:I().main,children:[t,n?(0,i.jsx)(h,{className:I().editOnGithubLink,url:n,label:"Edit this page on GitHub"}):null]}),(0,i.jsxs)("div",{className:I().sidecarPosition,children:[(0,i.jsx)("div",{className:I().sidecarTopSlot,children:b}),(0,i.jsx)(Z,{children:x})]})]})]}),p?(0,i.jsx)(k,{progress:E}):null]})]})};var B=e=>{let r=e.sidebarNavDataLevels;return(0,i.jsx)(_.Z,{showFooterTopBorder:!0,children:(0,i.jsx)(j.n,{navDataLevels:r,children:(0,i.jsx)(A,{...e})})})}},62801:function(e){e.exports={editLink:"edit-on-github-link_editLink__AsG8Z",editLinkIcon:"edit-on-github-link_editLinkIcon__wMtY9"}},27991:function(e){e.exports={root:"sidebar-mobile-controls_root__fIQ0N",rightAlign:"sidebar-mobile-controls_rightAlign__lqx5K",levelUpButton:"sidebar-mobile-controls_levelUpButton__GTffr",levelDownButton:"sidebar-mobile-controls_levelDownButton__QtODn"}},26914:function(e){e.exports={sidebar:"sidebar_sidebar___fTlC",nav:"sidebar_nav__IworY",navList:"sidebar_navList__4Rg4g",backToLinkWrapper:"sidebar_backToLinkWrapper__F6iLs",filterInputWrapper:"sidebar_filterInputWrapper__0_l_Y","filterInputWrapper--mobile":"sidebar_filterInputWrapper--mobile__s0XRX"}},71197:function(e){e.exports={root:"scroll-progress-bar_root__Hl1G6",isComplete:"scroll-progress-bar_isComplete__rA_rF",progress:"scroll-progress-bar_progress__AuxjL"}},74041:function(e){e.exports={root:"sidecar-scroll-container_root__a8nIj",showTopScrim:"sidecar-scroll-container_showTopScrim__Cvl7n",showBottomScrim:"sidecar-scroll-container_showBottomScrim__yucsk",scrollContainer:"sidecar-scroll-container_scrollContainer__Dw9id"}},19382:function(e){e.exports={root:"sidebar-sidecar-layout_root__h5rD8","mainWidth-wide":"sidebar-sidecar-layout_mainWidth-wide__TwGq8","mainWidth-narrow":"sidebar-sidecar-layout_mainWidth-narrow__FhCbs",sidebarContainer:"sidebar-sidecar-layout_sidebarContainer__4fcF8",sidebarContentWrapper:"sidebar-sidecar-layout_sidebarContentWrapper__ftn5q",contentWrapper:"sidebar-sidecar-layout_contentWrapper__Z5BK4",paddedAreaWrapper:"sidebar-sidecar-layout_paddedAreaWrapper___S_Ff",breadcrumbContainer:"sidebar-sidecar-layout_breadcrumbContainer__3uz7P",breadcrumbMaxWidth:"sidebar-sidecar-layout_breadcrumbMaxWidth__coOcu",mainAndSidecar:"sidebar-sidecar-layout_mainAndSidecar__UDm3Z",main:"sidebar-sidecar-layout_main__0SN51",sidecarPosition:"sidebar-sidecar-layout_sidecarPosition__WtTq0",sidecarTopSlot:"sidebar-sidecar-layout_sidecarTopSlot__qRAEI",editOnGithubLink:"sidebar-sidecar-layout_editOnGithubLink__SDraB"}}}]);