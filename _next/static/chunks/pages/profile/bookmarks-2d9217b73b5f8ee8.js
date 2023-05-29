(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6497],{24836:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/bookmarks",function(){return r(81156)}])},46149:function(e,t,r){"use strict";r.d(t,{Jr:function(){return o},vD:function(){return a}});var n=r(38502);function o(e){let{id:t,slug:r,name:n,short_name:o,description:a,icon:l,theme:s,ordered:u,level:c,category:d,tutorials:h}=e;return{id:t,slug:r,name:n,shortName:o,description:a,icon:l,theme:s,ordered:u,level:c,category:d||void 0,tutorials:h.map(i)}}function i(e){let{id:t,name:r,slug:o,description:i,read_time:l,edition:s,products_used:u,default_collection:c}=e.tutorial,d=u.map(a),h=(0,n.Oz)(e.tutorial),m=(0,n.Lf)(e.tutorial);return{id:t,name:r,slug:o,description:i,readTime:l,edition:s,productsUsed:d,video:h,handsOnLab:m,defaultContext:(0,n.je)(c)}}function a(e){let{product:t,tutorial_id:r,is_primary:n,is_beta:o,min_version:i,max_version:a}=e,{id:l,slug:s,name:u,docs_url:c,description:d}=t;return{product:{id:l,slug:s,name:u,docsUrl:c,description:d},tutorial:r,isPrimary:n,isBeta:o,minVersion:i||void 0,maxVersion:a||void 0}}},38502:function(e,t,r){"use strict";r.d(t,{Lf:function(){return l},Oz:function(){return a},je:function(){return i},ri:function(){return o}});var n=r(46149);function o(e){let{id:t,slug:r,name:o,description:s,content:u,default_collection_id:c,featured_collections:d,read_time:h,edition:m,products_used:x,variants:k}=e,b=x.map(n.vD),f=a(e),v=l(e),g=function(e,t){let r;let o=e.find(e=>{let{id:r}=e;return r===t});r="tutorials"in e[0]?e.map(n.Jr):e.map(i);let a={default:i(o),featuredIn:r};return a}(d,c),j=(null==k?void 0:k.length)>0?function(e){let{options:t,...r}=e;return{...r,options:t.map(e=>{let{display_order:t,...r}=e;return{displayOrder:t,...r}})}}(k[0]):void 0;return{id:t,slug:r,name:o,description:s,content:u,collectionCtx:g,productsUsed:b,readTime:h,video:f,handsOnLab:v,edition:m,variant:j}}function i(e){let{id:t,name:r,slug:n,short_name:o,level:i,theme:a}=e;return{id:t,name:r,slug:n,shortName:o,level:i,theme:a}}function a(e){let t,{video_id:r,video_host:n,video_inline:o}=e;return r&&(t={id:r,videoHost:n,videoInline:o}),t}function l(e){let t,{hands_on_lab_id:r,hands_on_lab_provider:n}=e;return r&&(t={id:r,provider:n}),t}},81156:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return M}});var n=r(85893),o=r(67294),i=r(29591),a=r(38502),l=r(40732),s=r(66245);let u=e=>{let{children:t}=e,{isAuthenticated:r}=(0,s.Z)({isRequired:!0});return r?(0,n.jsx)(n.Fragment,{children:t}):null};var c=r(14528),d=r(79440),h=r(33356),m=r(14617),x=r(16557),k=r(63795),b=r(16950),f=r(78783),v=r(6276),g=r(39778),j=r(85220),_=r(78675),w=r(84345),p=r(76228),C=r.n(p);function Z(e){let{tutorial:t}=e,[r,a]=(0,o.useState)(!1),l=()=>a(!0),s=()=>a(!1),{removeBookmark:u}=(0,i.AK)(),c=(0,o.useCallback)(()=>u(t.id,{onSuccess:()=>(0,j.Z)("remove",t.name)}),[t.id,t.name,u]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g.sg,{isBookmarked:!0,handleOnClick:l}),(0,n.jsx)(_.Z,{onDismiss:s,isOpen:r,label:"Confirm remove bookmark",children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:C().header,children:[(0,n.jsx)(m.Z,{level:1,size:300,weight:"semibold",className:C().heading,children:"Are you sure you want to remove this bookmark?"}),(0,n.jsx)("button",{onClick:s,"aria-label":"Cancel",type:"button",className:C().exitIcon,children:(0,n.jsx)(v.H,{})})]}),(0,n.jsx)(h.Z,{className:C().subheading,children:"Once the bookmark for  ".concat(t.name," is removed you will have to\n						manually re-add it.")}),(0,n.jsxs)("div",{className:C().buttonGroup,children:[(0,n.jsx)(w.Z,{text:"Remove",color:"critical",onClick:c}),(0,n.jsx)(w.Z,{text:"Cancel",color:"secondary",onClick:s})]})]})})]})}var y=r(81062),N=r(57506),O=r(75114);let B=(0,o.forwardRef)((e,t)=>{let{color:r="currentColor",title:i,...a}=e,l=(0,o.useMemo)(()=>i?"title-"+Math.random().toString(36).substr(2,9):void 0,[i]);return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16","aria-hidden":!i,ref:t,"aria-labelledby":l,...a,children:[i?(0,n.jsx)("title",{id:l,children:i}):null,(0,n.jsxs)("g",{fill:r,children:[(0,n.jsx)("path",{d:"M6.5 1.75A.75.75 0 005.75 1h-2.5A2.25 2.25 0 001 3.25v9.5A2.25 2.25 0 003.25 15h2.5a.75.75 0 000-1.5h-2.5a.75.75 0 01-.75-.75v-9.5a.75.75 0 01.75-.75h2.5a.75.75 0 00.75-.75z"}),(0,n.jsx)("path",{d:"M9.97 3.72a.75.75 0 011.06 0l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 11-1.06-1.06l2.22-2.22H6A.75.75 0 016 7h6.19L9.97 4.78a.75.75 0 010-1.06z"})]})]})});var A=r(3901),T=r(9481),D=r(30694),L=r(27702);function S(){let{signOut:e}=(0,s.Z)(),{isDesktop:t}=(0,D.BV)();return(0,n.jsx)(O.Z,{title:t?"Profile":"Main Menu",showFilterInput:!1,children:(0,n.jsx)(L.Z,{children:t?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(N.Rd,{item:{title:"Bookmarks",fullPath:"/profile/bookmarks",isActive:!0,trailingIcon:(0,n.jsx)(A.U,{})}}),(0,n.jsx)(N.Rd,{item:{title:"Account Settings",href:"https://portal.cloud.hashicorp.com/account-settings"}}),(0,n.jsx)("li",{children:(0,n.jsx)(T.wK,{item:{title:"Sign Out",onClick:()=>e(),icon:(0,n.jsx)(B,{})}})})]}):(0,y.A)().map((e,t)=>(0,n.jsx)(N.Rd,{item:e},t))})})}let z={newest:{text:"Newest",sort:(e,t)=>new Date(t.created_at).getTime()-new Date(e.created_at).getTime()},oldest:{text:"Oldest",sort:(e,t)=>new Date(e.created_at).getTime()-new Date(t.created_at).getTime()}};var P=r(83021),I=r.n(P);let E=()=>(0,n.jsx)(u,{children:(0,n.jsx)(l.Z,{breadcrumbLinks:[{title:"Developer",url:"/"},{title:"Bookmarks",url:"/profile/bookmarks",isCurrentPage:!0}],AlternateSidebar:S,sidebarNavDataLevels:[],children:(0,n.jsx)(F,{})})}),F=()=>{let{bookmarks:e,isLoading:t}=(0,i.b3)({enabled:!0}),[r,l]=(0,o.useState)(z.newest);return t?null:(0,n.jsxs)("div",{children:[(0,n.jsx)(m.Z,{level:1,weight:"bold",size:500,children:"Bookmarks"}),(0,n.jsx)(h.Z,{className:I().subheading,children:"View and manage your personal bookmarks. Select the bookmark icon in each card below to remove the bookmark."}),(null==e?void 0:e.length)>0?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("span",{className:I().cardListHeading,children:[(0,n.jsx)(m.Z,{level:2,weight:"semibold",size:300,children:"Your Bookmarks"}),(0,n.jsxs)(x.ZP,{color:"secondary",text:r.text,"aria-label":"Sort by ".concat(r.text),listPosition:"right",children:[(0,n.jsx)(x.gB,{onClick:()=>l(z.newest),children:z.newest.text}),(0,n.jsx)(x.gB,{onClick:()=>l(z.oldest),children:z.oldest.text})]})]}),(0,n.jsx)(c.b,{fixedColumns:2,tutorials:e.sort(r.sort).map(e=>{let t=(0,a.ri)(e.tutorial),r=t.collectionCtx.default,n={...t,defaultContext:r},o=(0,d.OW)(n);return{...o,BookmarkButtonComponent:Z}})})]}):(0,n.jsx)(f.Z,{icon:(0,n.jsx)(k.d,{}),heading:"You have no saved bookmarks.",subheading:"You can select the bookmark icon on any tutorial card to save it for future reference.",callToAction:(0,n.jsx)(b.Z,{href:"/tutorials/library",text:"Tutorial library",color:"secondary",size:"small"})})]})},H=()=>(0,n.jsx)(E,{});var M=H},83021:function(e){e.exports={subheading:"bookmarks-view_subheading__oE_9b",cardListHeading:"bookmarks-view_cardListHeading__fkIaO"}},76228:function(e){e.exports={header:"bookmark-button-with-remove-dialog_header__uJr26",buttonGroup:"bookmark-button-with-remove-dialog_buttonGroup__b6Q0J",heading:"bookmark-button-with-remove-dialog_heading__sa3rO",subheading:"bookmark-button-with-remove-dialog_subheading__kL_ov",exitIcon:"bookmark-button-with-remove-dialog_exitIcon__0_WtZ"}}},function(e){e.O(0,[9523,844,5799,5054,9774,2888,179],function(){return e(e.s=24836)}),_N_E=e.O()}]);