(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1061],{57317:function(e){var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"codeBlockFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"SbcCodeBlockRecord"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"code"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"chrome"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"language"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"position"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:120}};t.loc.source={body:"fragment codeBlockFields on SbcCodeBlockRecord {\n  id\n  code\n  chrome\n  language {\n    slug\n    position\n    name\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var n={};function a(e,t){for(var n=0;n<e.definitions.length;n++){var a=e.definitions[n];if(a.name&&a.name.value==t)return a}}t.definitions.forEach(function(e){if(e.name){var t=new Set;(function e(t,n){if("FragmentSpread"===t.kind)n.add(t.name.value);else if("VariableDefinition"===t.kind){var a=t.type;"NamedType"===a.kind&&n.add(a.name.value)}t.selectionSet&&t.selectionSet.selections.forEach(function(t){e(t,n)}),t.variableDefinitions&&t.variableDefinitions.forEach(function(t){e(t,n)}),t.definitions&&t.definitions.forEach(function(t){e(t,n)})})(e,t),n[e.name.value]=t}}),e.exports=t,e.exports.codeBlockFields=function(e,t){var i={kind:e.kind,definitions:[a(e,t)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var r=n[t]||new Set,l=new Set,o=new Set;for(r.forEach(function(e){o.add(e)});o.size>0;){var s=o;o=new Set,s.forEach(function(e){l.has(e)||(l.add(e),(n[e]||new Set).forEach(function(e){o.add(e)}))})}return l.forEach(function(t){var n=a(e,t);n&&i.definitions.push(n)}),i}(t,"codeBlockFields")},52517:function(e,t,n){"use strict";n.d(t,{O:function(){return a}});let a={root:"code-block",copy:"code-block-clipboard-icon"};function i(){return window&&window.analytics&&"function"==typeof window.analytics.track}t.Z={trackCodeClick:function(){i()&&window.analytics.track("Click",{category:"CodeBlock"})},trackCopy:function(){i()&&window.analytics.track("Copy",{category:"CodeBlock"})},trackTabSelect:function(e){i()&&window.analytics.track("Select CodeTab",{category:"CodeBlock",tabGroup:e})}}},71267:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});var a=n(85893),i=n(67294),r=n(94184),l=n.n(r),o=n(77162),s=n.n(o);let c=(0,i.forwardRef)((e,t)=>{let{color:n="currentColor",title:r,...l}=e,o=(0,i.useMemo)(()=>r?"title-"+Math.random().toString(36).substr(2,9):void 0,[r]);return(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16","aria-hidden":!r,ref:t,"aria-labelledby":o,...l,children:[r?(0,a.jsx)("title",{id:o,children:r}):null,(0,a.jsxs)("g",{fill:n,children:[(0,a.jsx)("path",{d:"M11.78 5.22a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-2-2a.75.75 0 011.06-1.06l1.47 1.47 3.97-3.97a.75.75 0 011.06 0z"}),(0,a.jsx)("path",{fillRule:"evenodd",d:"M1 3.25A2.25 2.25 0 013.25 1h9.5A2.25 2.25 0 0115 3.25v9.5A2.25 2.25 0 0112.75 15h-9.5A2.25 2.25 0 011 12.75v-9.5zm2.25-.75a.75.75 0 00-.75.75v9.5c0 .414.336.75.75.75h9.5a.75.75 0 00.75-.75v-9.5a.75.75 0 00-.75-.75h-9.5z",clipRule:"evenodd"})]})]})}),d=(0,i.forwardRef)((e,t)=>{let{color:n="currentColor",title:r,...l}=e,o=(0,i.useMemo)(()=>r?"title-"+Math.random().toString(36).substr(2,9):void 0,[r]);return(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16","aria-hidden":!r,ref:t,"aria-labelledby":o,...l,children:[r?(0,a.jsx)("title",{id:o,children:r}):null,(0,a.jsxs)("g",{fill:n,children:[(0,a.jsx)("path",{d:"M2.25 0A2.25 2.25 0 000 2.25v7.5A2.25 2.25 0 002.25 12h.25a.75.75 0 000-1.5h-.25a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75v.25a.75.75 0 001.5 0v-.25A2.25 2.25 0 009.75 0h-7.5z"}),(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.25 4A2.25 2.25 0 004 6.25v7.5A2.25 2.25 0 006.25 16h7.5A2.25 2.25 0 0016 13.75v-7.5A2.25 2.25 0 0013.75 4h-7.5zM5.5 6.25a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75v-7.5z",clipRule:"evenodd"})]})]})}),p=(0,i.forwardRef)((e,t)=>{let{color:n="currentColor",title:r,...l}=e,o=(0,i.useMemo)(()=>r?"title-"+Math.random().toString(36).substr(2,9):void 0,[r]);return(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16","aria-hidden":!r,ref:t,"aria-labelledby":o,...l,children:[r?(0,a.jsx)("title",{id:o,children:r}):null,(0,a.jsx)("path",{fill:n,fillRule:"evenodd",d:"M3.139 2.5a.639.639 0 00-.639.639v9.722c0 .353.286.639.639.639h9.722a.639.639 0 00.639-.639V3.14a.639.639 0 00-.639-.639H3.14zM1 3.139C1 1.958 1.958 1 3.139 1h9.722C14.042 1 15 1.958 15 3.139v9.722A2.139 2.139 0 0112.861 15H3.14A2.139 2.139 0 011 12.861V3.14zm3.72 1.58a.75.75 0 011.06 0L8 6.94l2.22-2.22a.75.75 0 111.06 1.061L9.06 8l2.22 2.22a.75.75 0 11-1.06 1.06L8 9.06l-2.22 2.22a.75.75 0 01-1.06-1.06L6.94 8 4.72 5.78a.75.75 0 010-1.06z",clipRule:"evenodd"})]})});var u=n(52517),h=n(9763),m=n.n(h),f=function(e){let{className:t,getText:n,onCopyCallback:r}=e,[o,s]=(0,i.useState)(null),[h,f]=(0,i.useState)(),g=(0,i.useRef)(null);async function b(){let[e,t]=await n();if(e)return v(e);let a=!1;try{await navigator.clipboard.writeText(t),a=!0}catch(e){}return a?void(u.Z.trackCopy(),y(!0)):v("ClipboardButton failed. Text: ".concat(t,"."))}function v(e){console.error(e),y(!1)}function y(e){var t;s(e),null==g||null===(t=g.current)||void 0===t||t.focus(),"function"==typeof r&&r(e)}(0,i.useEffect)(()=>(window.clearTimeout(h),null!=o&&f(window.setTimeout(()=>s(null),!1==o?4e3:1750)),()=>clearTimeout(h)),[o]);let x="Copy",w=(0,a.jsx)(d,{className:m().svg});return!0===o?(x="Copied",w=(0,a.jsx)(c,{className:m().svg})):!1===o&&(x="Failed",w=(0,a.jsx)(p,{className:m().svg})),(0,a.jsxs)("button",{className:l()(m().button,t,{[m().isCopied]:!0==o}),"data-heap-track":u.O.copy,onClick:b,ref:g,type:"button",children:[x,w]})},g=n(34658),b=n.n(g);function v(){return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:25,viewBox:"0 0 24 25",fill:"none",children:(0,a.jsx)("path",{fill:"#000",fillRule:"evenodd",d:"M6 2.08a2.75 2.75 0 0 0-2.75 2.75v16A2.75 2.75 0 0 0 6 23.58h12a2.75 2.75 0 0 0 2.75-2.75v-11a.748.748 0 0 0-.22-.53l-7-7a.751.751 0 0 0-.53-.22m-.75 1.5H6c-.69 0-1.25.56-1.25 1.25v16c0 .691.56 1.25 1.25 1.25h12c.69 0 1.25-.559 1.25-1.25V10.58H13a.75.75 0 0 1-.75-.75V3.58Zm5.94 5.5-4.44-4.439v4.44h4.44Z",clipRule:"evenodd"})})}var y=function(e){let{showChrome:t,filename:n,getText:i,heading:r,showClipboard:l}=e;if(l&&!i)throw Error("SnippetBar was passed showClipboard without a getText function. To use the clipboard button, please also pass a getText() function, which should return [err, text], where text will be copied to the clipboard if err is falsy.");return(0,a.jsxs)("div",{className:b().root,children:[(0,a.jsxs)("div",{className:b().leftSide,children:[t?(0,a.jsxs)("div",{className:b().chrome,children:[(0,a.jsx)("div",{className:b().chromeDot}),(0,a.jsx)("div",{className:b().chromeDot}),(0,a.jsx)("div",{className:b().chromeDot})]}):null,n?(0,a.jsxs)("div",{className:b().filename,children:[(0,a.jsx)(v,{}),n]}):null,r?(0,a.jsx)("div",{className:b().heading,children:r}):null]}),(0,a.jsx)("div",{className:b().rightSide,children:l?(0,a.jsx)("div",{className:b().copyBtnContainer,children:(0,a.jsx)(f,{getText:i})}):null})]})},x=n(69938),w=n.n(x),_=n(6913),k=n.n(_),j=(0,i.forwardRef)(function(e,t){let{code:n}=e,[r,l]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{l(!0)},[]),r)?(0,a.jsx)("pre",{ref:t,style:{display:"none"},children:"string"==typeof n?(0,a.jsx)("span",{dangerouslySetInnerHTML:{__html:n}}):n}):null}),S=function(e){if(void 0===e||!1==e)return[];if("string"!=typeof e)throw Error('The highlight prop must be a string. Received a value of type "'.concat(typeof e,'" instead.'));if(!/^[-,0-9\s]+$/.test(e))throw Error('The highlight prop must be a comma-separated list of single integers or ranges with a single dash between two integers. Found invalid characters: "'.concat(e,'".'));return e.split(",").reduce((e,t)=>e.concat(function(e){let t=e.split("-");if(t.length>2)throw Error('Each comma-separated value in the highlight prop must be either a single integer, or a range with a single dash between two integers. Found a value with multiple dashes: "'.concat(e,'".'));if(1==t.length){let t=parseInt(e);if(t!=t)throw Error('Each comma-separated value in the highlight prop must be either a single integer, or a range with a single dash between two integers. Found a value that parsed to NaN: "'.concat(""===e?"<empty string>":e,'".'));return[t]}let[n,a]=t.map(e=>parseInt(e));if(n!=n||a!=a)throw Error('Each comma-separated value in the highlight prop must be either a single integer, or a range with a single dash between two integers. Found a range that produced a NaN: "'.concat(e,'".'));return[...Array(a-n+1).keys()].map(e=>e+n)}(t)),[])},C=function(e){let t=i.Children.toArray(e);return t.reduce((e,n,a)=>{let i=a===t.length-1,r="\n"===n,l="\n"!==n;r&&e.consecutiveNewlines++;let o=e.consecutiveNewlines>0;if((l||r&&i)&&o){e.lines.push(e.currentLine);for(let t=1;t<e.consecutiveNewlines;t++)e.lines.push("");e.currentLine=[],e.consecutiveNewlines=0}return l&&(e.currentLine.push(n),i&&e.lines.push(e.currentLine)),e},{lines:[],currentLine:[],consecutiveNewlines:0}).lines},N=function(e){let t=e.split("\n");return t.map((e,n)=>n==t.length-1&&""==e?null:(0,a.jsx)("span",{dangerouslySetInnerHTML:{__html:""==e?"&nbsp;":e}},n))},L=n(14822),A=n.n(L);function B(e){let{children:t,language:n}=e;return(0,a.jsx)("pre",{className:l()(A().pre,"language-".concat(n)),children:(0,a.jsx)("code",{className:l()(A().code,"language-".concat(n)),children:t})})}function T(e){let{number:t,padRight:n}=e;return(0,a.jsxs)("div",{className:A().wrappedLinesSpacer,children:[t?(0,a.jsx)(E,{number:t,wrap:!0}):null,(0,a.jsx)(M,{padRight:n,children:"\n"})]})}function E(e){let{number:t,highlight:n,dim:i,wrap:r}=e;return(0,a.jsx)("span",{className:l()(A().LineNumber,{[A().highlight]:n,[A().dim]:i,[A().wrap]:r}),children:t})}function M(e){let{children:t,highlight:n,dim:i,padRight:r,wrap:o}=e;return(0,a.jsx)("span",{className:l()(A().LineOfCode,{[A().highlight]:n,[A().dim]:i,[A().padRight]:r,[A().wrap]:o}),children:t})}var P=function(e){let{code:t,language:n,lineNumbers:r,highlight:o,hasFloatingCopyButton:s,wrapCode:c}=e,d=S(o),p=(0,i.useMemo)(()=>{let e="string"==typeof t?N(t):C(t),n=Math.max(e.length.toString().length,1);return e.map((e,t)=>{let a=t+1,i=a.toString().padEnd(n),r=-1!==d.indexOf(a),l=d.length>0&&!r;return{children:e,number:i,highlight:r,dim:l}})},[t,d]),u=null;if(r){let e=Math.max(p.length.toString().length,1);u="".padEnd(e)}let h=!!s;return c?(0,a.jsx)(B,{language:n,children:(0,a.jsxs)("div",{className:A().wrappedLinesContainer,children:[(0,a.jsx)(T,{number:u,padRight:h}),p.map((e,t)=>{let{number:n,children:i,highlight:l,dim:o}=e;return(0,a.jsxs)("div",{className:A().wrappedLine,children:[r?(0,a.jsx)(E,{number:n,highlight:l,dim:o,wrap:!0}):null,(0,a.jsxs)(M,{highlight:l,dim:o,padRight:h,wrap:!0,children:[i,"\n"]})]},t)}),(0,a.jsx)(T,{number:u,padRight:h})]})}):(0,a.jsxs)(B,{language:n,children:[r?(0,a.jsx)("span",{className:A().numbersColumn,children:p.map((e,t)=>{let{number:n,highlight:i,dim:r}=e;return(0,a.jsx)(E,{number:n,highlight:i,dim:r},t)})}):null,(0,a.jsx)("span",{className:l()(A().linesColumn,A().styledScrollbars),children:(0,a.jsx)("span",{className:A().linesScrollableContent,children:p.map((e,t)=>{let{children:n,highlight:i,dim:r}=e;return(0,a.jsxs)(M,{highlight:i,dim:r,padRight:h,children:[n,"\n"]},t)})})})]})},R=n(57317),q=n.n(R),F=n(99441),O=n.n(F);function H(e){let{className:t,code:n,language:r,theme:o="dark",hasBarAbove:c=!1,onCopyCallBack:d,options:p={showChrome:!1,lineNumbers:!1,showClipboard:!1,showWindowBar:!1,wrapCode:!1}}=e,h=(0,i.useRef)();async function m(){try{var e,t;let n=(t=null===(e=h.current)||void 0===e?void 0:e.textContent).split("\n")[0].startsWith("$ ")?function(e){let t=e.split("\n"),n=t[0];if(n.endsWith("\\")||n.endsWith("EOF")){let t=s().escape(e).replace("\\$\\","");return s().split(t).join(" ")}let a=/^\$ /;return t.filter(e=>e.match(a)).map(e=>e.replace(a,"")).join("\n")}(t):t;return[null,n]}catch(e){return[e,null]}}let{showChrome:g,filename:b,heading:v,highlight:x,lineNumbers:_,showClipboard:S,showWindowBar:C,wrapCode:N}=p;C&&console.warn("The options.showWindowBar prop has been renamed, and will be deprecated in a future version. Please use options.showChrome instead.");let L=C||g,A=L||b||v,B=!A&&S,T="dark"==o?w().base:k().base,E="dark"==o?w().syntax:k().syntax;return(0,a.jsxs)("div",{className:l()("g-code-block",O().root,t,T,E,{[O().hasBarAbove]:c}),"data-heap-track":u.O.root,onClick:u.Z.trackCodeClick,children:[(0,a.jsx)(j,{ref:h,code:n}),A?(0,a.jsx)(y,{showChrome:L,filename:b,heading:v,getText:m,showClipboard:S}):null,(0,a.jsxs)("div",{className:O().linesContainer,children:[(0,a.jsx)(P,{code:n,language:r,highlight:x,lineNumbers:_,hasFloatingCopyButton:B,wrapCode:N}),B?(0,a.jsx)("div",{className:O().copyButtonContainer,children:(0,a.jsx)(f,{getText:m,onCopyCallback:d})}):null]})]})}H.fragmentSpec={fragment:q()};var I=H},45407:function(e,t,n){"use strict";var a=n(85893),i=n(67294),r=n(71267),l=n(97116);t.Z=function(e){let{className:t,children:n,filename:o,heading:s,hideClipboard:c,highlight:d,lineNumbers:p,hasBarAbove:u,theme:h}=e,m=i.Children.toArray(n),f=i.Children.count(n);if(1!==f||1!==m.length)throw Error("In CodeBlockConfig, found ".concat(f," total children and ").concat(m.length," valid children. Please ensure that CodeBlockConfig has exactly one child element, and ensure it is a valid element."));let g=m[0],b=g.props.mdxType||("string"==typeof g.type?g.type:g.type.name);if("pre"!==b&&"themedPre"!==b)throw Error('In CodeBlockConfig, found a child with type "'.concat(b,'". Please ensure a fenced code block, which corresponds to the MDX type "pre", is passed to CodeBlockConfig instead. In JSX, please use CodeBlock directly rather than CodeBlockConfig.'));let v=g.props.className,y=v?v.replace("language-",""):void 0,x=g.props.children.props.children,w=(0,l.Z)(x);return(0,a.jsx)(r.Z,{className:t,code:w,language:y,theme:h,hasBarAbove:u,options:{filename:o,highlight:d,heading:s,lineNumbers:p,showClipboard:!c}})}},81061:function(e,t,n){"use strict";n.d(t,{Z:function(){return A}});var a=n(85893),i=n(67294),r=n(94184),l=n.n(r),o=n(55422);function s(e){let{mdxType:t,...n}=e.props,a=("pre"===t?n.className:"CodeBlockConfig"==t?n.children.props.className:"language-".concat(n.language)).split("-")[1],i=(0,o.getCanonicalSlug)(a)||a;return{group:i,label:(0,o.getLanguageName)(i)||i.charAt(0).toUpperCase()+i.substr(1).toLowerCase()}}var c=n(60092),d=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=(t=e.length-1,n!=n?n:n<=0?0:n>=t?t:n),[r,l]=(0,i.useState)(a),{activeTabGroup:o,setActiveTabGroup:s,preferredTabGroups:d}=(0,c.m$)()||{};return(0,i.useEffect)(()=>{e.filter(Boolean).length},[]),(0,i.useEffect)(()=>{if(void 0===o)return;let t=e[r];if(null==o){let t=e.reduce((e,t,n)=>{let a=d.indexOf(t);return -1==a?e:null==e.preferenceIdx||a<e.preferenceIdx?{preferenceIdx:a,tabIdx:n}:e},{preferenceIdx:null,tabIdx:null}).tabIdx;if(null!==t)return l(t)}else if(t!==o){let t=e.findIndex(e=>e==o);if(-1!==t)return l(t)}},[o,d]),[r,function(t){l(t);let n=e[t];n&&s&&s(n)},o,s]},p=n(67953),u=n.n(p),h=function(e){let{tabLabels:t,setActiveTabIdx:n,hasHeading:i}=e;return(0,a.jsx)("div",{className:l()(u().tabsAsDropdown,{[u().hasHeading]:i}),children:(0,a.jsx)("select",{className:u().listboxButton,onChange:e=>n(parseInt(e.target.value,10)),children:t.map((e,t)=>(0,a.jsx)("option",{value:t,children:e},e))})})},m=n(32755),f=n.n(m),g=function(e){let{tabLabels:t,activeTabIdx:n,setActiveTabIdx:i,hasHeading:r}=e;return(0,a.jsx)("div",{className:l()(f().tabsAsTabs,{[f().hasHeading]:r}),children:t.map((e,t)=>{let o=t==n;return(0,a.jsx)("button",{className:l()(f().tabControl,{[f().isActive]:o},{[f().hasHeading]:r}),onClick:()=>i(t),children:e},t)})})},b=n(71267),v=n(45407);let y=window.MutationObserver||null,x={attributes:!0,childList:!0,subtree:!0};var w=function(e){let{render:t}=e,[n,r]=function(){let[[e,t],n]=(0,i.useState)([!1,0]),a=(0,i.useCallback)(a=>{let i,r,l;if(a){if((i=a.ownerDocument.defaultView).addEventListener("resize",o),y){(l=new y(o)).observe(a,x);let e=a.closest('[role="tabpanel"]');e&&l.observe(e,x)}return o(),c}function o(){r||(r=requestAnimationFrame(s))}function s(){r=null;let i=a.scrollWidth,l=(t||i)>a.offsetWidth;e!==l&&(c(),n([l,i]))}function c(){cancelAnimationFrame(r),i.removeEventListener("resize",o),y&&l.disconnect()}},[e,t]);return[e,a]}();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{style:{height:"0px",overflow:"hidden",visibility:"hidden"},role:"presentation","aria-hidden":!0,children:t({hasOverflow:!1},r)}),t({hasOverflow:n})]})},_=n(69938),k=n.n(_),j=n(6913),S=n.n(j),C=n(4301),N=n.n(C),L=n(52517),A=function(e){let{children:t,heading:n,className:r,tabs:o,theme:c="dark"}=e,p=i.Children.toArray(t);if(void 0!==o&&o.length!==p.length)throw Error("In CodeTabs, the tabs array length must match the number of children. Found mismatched tabs length ".concat(o.length," and children length ").concat(p.length,". Please adjust the tabs prop or the number of children to resolve this issue."));let u=p.map(e=>{var t;let n;if("string"==typeof e.type||"number"==typeof e.type)n=e.type;else if("function"==typeof e.type){let t=[{component:b.Z,name:"CodeBlock"},{component:v.Z,name:"CodeBlockConfig"}],a=t.map(e=>e.component).indexOf(e.type);n=a>=0?t[a].name:"Unrecognized component"}return"string"==typeof(null===(t=e.props)||void 0===t?void 0:t.mdxType)&&(n=e.props.mdxType),n}),m=["CodeBlock","CodeBlockConfig","pre","themedCodeBlockConfig","themedPre"];if(u.filter(e=>-1===m.indexOf(e)).length)throw Error('CodeTabs only accepts "CodeBlock", "CodeBlockConfig", or "pre" children. Found children with types: '.concat(JSON.stringify(u)));let f=p.map(s).map((e,t)=>{if(!(void 0!==o))return e;let n="string"==typeof o[t]?{label:o[t]}:"object"==typeof o[t]?o[t]:{};return{...e,...n}}),y=f.map(e=>e.group),[x,_]=d(y);function j(e){L.Z.trackTabSelect(y[e]),_(e)}let C=f.map(e=>e.label),A=!!n;return(0,a.jsxs)("div",{className:l()(r,N().root,"dark"==c?k().base:S().base),children:[(0,a.jsx)(w,{render:(e,t)=>{let{hasOverflow:i}=e;return(0,a.jsxs)("div",{ref:t,className:l()(N().topBar),children:[A?(0,a.jsx)("div",{className:l()(N().heading,{[N().hasOverflow]:i}),children:n}):null,i?(0,a.jsx)(h,{tabLabels:C,setActiveTabIdx:j,hasHeading:A}):(0,a.jsx)(g,{tabLabels:C,activeTabIdx:x,setActiveTabIdx:j,hasHeading:A})]})}}),(0,a.jsx)("div",{children:p.map((e,t)=>{let n=t==x,r=i.cloneElement(e,{hasBarAbove:!0,theme:c});return(0,a.jsx)("div",{style:{display:n?"block":"none"},children:r},t)})})]})}},97116:function(e,t){"use strict";t.Z=function(e){return"string"!=typeof e?e:e.replace(/\n$/,"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}},55422:function(e,t,n){"use strict";let a=n(18220),i=n(83099);function r(e){return Object.keys(a).reduce((t,n)=>t||(n==e||-1!==a[n].indexOf(e)?n:t),null)}e.exports={syntaxes:a,prettyNames:i,getCanonicalSlug:r,getLanguageName:function(e){let t=i[e];return t?t:i[r(e)]||null}}},9763:function(e){e.exports={button:"style_button__8j_Rk",svg:"style_svg__gtvGZ"}},14822:function(e){e.exports={pre:"code-lines_pre__t8gY5",code:"code-lines_code__luWmT",LineNumber:"code-lines_LineNumber__H__E8 g-type-code",wrap:"code-lines_wrap__2pru5",highlight:"code-lines_highlight__w4Nrs",dim:"code-lines_dim__hNQb8",LineOfCode:"code-lines_LineOfCode__6Kf_L g-type-code",padRight:"code-lines_padRight__5afwQ",numbersColumn:"code-lines_numbersColumn__scIAe",linesColumn:"code-lines_linesColumn__M9Wn1",styledScrollbars:"code-lines_styledScrollbars__37_Kl",linesScrollableContent:"code-lines_linesScrollableContent__UNs3H",wrappedLinesContainer:"code-lines_wrappedLinesContainer__LJuRy",wrappedLine:"code-lines_wrappedLine___Q_sS",wrappedLinesSpacer:"code-lines_wrappedLinesSpacer__suK9m"}},67953:function(e){e.exports={tabsAsDropdown:"style_tabsAsDropdown__4G2wQ",hasHeading:"style_hasHeading__wtKlL",listboxInput:"style_listboxInput__KZ1Ea",listboxButton:"style_listboxButton__c03jx g-type-body-small-strong",dropdownIcon:"style_dropdownIcon__AZHpm",listboxPopover:"style_listboxPopover__O_Mo5",listboxList:"style_listboxList__my2jw",listboxOption:"style_listboxOption__MjHdE g-type-body-small-strong"}},32755:function(e){e.exports={tabsAsTabs:"style_tabsAsTabs__lZ0ce",hasHeading:"style_hasHeading__tsJPr",tabControl:"style_tabControl__A5k2n g-type-body-small-strong",isActive:"style_isActive__AmKFP"}},4301:function(e){e.exports={root:"style_root__Ib9Qn",topBar:"style_topBar__0pZ_b",hasHeading:"style_hasHeading__aC7lF",heading:"style_heading__2_7Zj g-type-body-small-strong",hasOverflow:"style_hasOverflow__hWeXc"}},34658:function(e){e.exports={root:"style_root___hL1f",leftSide:"style_leftSide__uPoap",rightSide:"style_rightSide__tzFHY",chrome:"style_chrome__b7UK3",chromeDot:"style_chromeDot__4yGL8",filename:"style_filename__lKNyi g-type-code",heading:"style_heading__1_nVl g-type-body-small-strong",copyBtnContainer:"style_copyBtnContainer__1HWoT"}},99441:function(e){e.exports={root:"style_root__i1k0c",hasBarAbove:"style_hasBarAbove__gZA5T",linesContainer:"style_linesContainer__4N_nq",copyButtonContainer:"style_copyButtonContainer__yxcuf"}},69938:function(e){e.exports={base:"theme-dark_base__RNsat",syntax:"theme-dark_syntax__QCDzs"}},6913:function(e){e.exports={base:"theme-light_base__OJoSj",syntax:"theme-light_syntax__5RM0I"}},77162:function(e,t){(function(){var e;e=function(e,t,n){var a,i;for(i="";e.length>0;)(a=e.match(t))?(i+=e.slice(0,a.index)+n(a),e=e.slice(a.index+a[0].length)):(i+=e,e="");return i},t.split=function(t){var n,a;return null==t&&(t=""),a=[],n="",e(t,/\s*(?:([^\s\\\'\"]+)|'((?:[^\'\\]|\\.)*)'|"((?:[^\"\\]|\\.)*)"|(\\.?)|(\S))(\s|$)?/,function(e){var t,i,r,l,o,s;if(e[0],s=e[1],o=e[2],t=e[3],i=e[4],r=e[5],l=e[6],null!=r)throw Error("Unmatched quote");if(n+=s||(o||t||i).replace(/\\(?=.)/,""),null!=l)return a.push(n),n=""}),n&&a.push(n),a},t.escape=function(e){return(null==e&&(e=""),null==e)?"''":e.replace(/([^A-Za-z0-9_\-.,:\/@\n])/g,"\\$1").replace(/\n/g,"'\n'")}}).call(this)},83099:function(e){"use strict";e.exports=JSON.parse('{"abap":"ABAP","abnf":"ABNF","actionscript":"ActionScript","ada":"Ada","agda":"Agda","al":"AL","antlr4":"ANTLR4","apacheconf":"ApacheConf","apex":"Apex","apl":"APL","applescript":"AppleScript","aql":"AQL","arduino":"Arduino","arff":"ARFF","asciidoc":"AsciiDoc","asm6502":"ASM6502","aspnet":"ASP.NET","autohotkey":"AutoHotkey","autoit":"AutoIt","shell":"Shell","bash":"Bash","basic":"Basic","batch":"Batch","shortcode":"Shortcode","bbcode":"BBCode","birb":"Birb","bison":"Bison","rbnf":"RBNF","bnf":"BNF","brainfuck":"Brainfuck","brightscript":"Brightscript","bro":"Bro","oscript":"Oscript","bsl":"BSL","c":"C","cil":"CIL","clike":"C-like","clojure":"Clojure","cmake":"CMake","coffeescript":"CoffeeScript","concurnas":"Concurnas","cpp":"C++","crystal":"Crystal","dotnet":".NET","csharp":"C#","csp":"CSP","css":"CSS","cypher":"Cypher","d":"D","dart":"Dart","dataweave":"DataWeave","dax":"DAX","dhall":"Dhall","diff":"Diff","jinja2":"Jinja2","django":"Django","dns-zone-file":"DNS Zone","docker":"Docker","ebnf":"EBNF","editorconfig":"EditorConfig","eiffel":"Eiffel","eta":"Eta","ejs":"EJS","elixir":"Elixir","elm":"Elm","erb":"ERB","erlang":"Erlang","etlua":"Lua","excel-formula":"Excel","factor":"Factor","firestore-security-rules":"Firestore Security Rules","flow":"Flow","fortran":"Fortran","fsharp":"F#","ftl":"FTL","gcode":"gcode","gdscript":"GDscript","gedcom":"GEDCOM","gherkin":"Gherkin","git":"Git","glsl":"GLSL","gml":"GameMaker","go":"Go","graphql":"GraphQL","groovy":"Groovy","haml":"Haml","handlebars":"Handlebars","haskell":"Haskell","haxe":"Haxe","hcl":"HCL","hlsl":"HLSL","hpkp":"HPKP","hsts":"HSTS","http":"HTTP","ichigojam":"IchigoJam","icon":"Icon","iecst":"IEC Structured Text","gitignore":".gitignore","hgignore":".hgignore","npmignore":".npmignore","ignore":".ignore","inform7":"Inform 7","ini":"INI","io":"Io","j":"J","java":"Java","javadoc":"Javadoc","javadoclike":"Javadoc-like","javascript":"JavaScript","javastacktrace":"Java Stack Trace","jolie":"Jolie","jq":"jq","jsdoc":"JSDoc","webmanifest":"Web Manifest","json":"JSON","json5":"JSON5","jsonp":"JSONP","jsstacktrace":"JavaScript Stack Trace","jsx":"JSX","julia":"Julia","keyman":"Keyman","kotlin":"Kotlin","context":"ConTeXt","tex":"Tex","latex":"LaTeX","latte":"Latte","less":"LESS","lilypond":"LilyPond","liquid":"Liquid","elisp":"Emacs Lisp","emacs":"Emacs","emacs-lisp":"Emacs Lisp","lisp":"Lisp","livescript":"LiveScript","llvm":"LLVM","lolcode":"LOLCODE","lua":"Lua","makefile":"Makefile","markdown":"Markdown","atom":"Atom","html":"HTML","mathml":"MathML","rss":"RSS","ssml":"SSML","svg":"SVG","xml":"XML","markup":"XML","markup-templating":"Markup Templating","matlab":"MATLAB","mel":"MEL","mizar":"Mizar","mongodb":"MongoDB","monkey":"Monkey","moonscript":"MoonScript","n1ql":"N1QL","n4js":"N4JS","nand2tetris-hdl":"Nand2Tetris HDL","naniscript":"NaniScript","nasm":"NASM","neon":"Neon","nginx":"nginx","nim":"Nim","nix":"Nix","nsis":"NSIS","objectivec":"Objective-C","ocaml":"OCaml","opencl":"OpenCL","oz":"Oz","parigp":"PARI/GP","parser":"Parser","objectpascal":"Object Pascal","pascal":"Pascal","pascaligo":"Pascaligo","px":"px","pcaxis":"PC-Axis","peoplecode":"PeopleCode","perl":"Perl","php":"PHP","phpdoc":"PHPDoc","plsql":"PL/SQL","powerquery":"Power Query M","powershell":"PowerShell","processing":"Processing","prolog":"Prolog","promql":"PromQL","properties":"Properties","protobuf":"Protobuf","pug":"Pug","puppet":"Puppet","pure":"Pure","purebasic":"Pure Basic","purescript":"PureScript","python":"Python","q":"Q","qml":"QML","qore":"Qore","r":"R","racket":"Racket","reason":"Reason","regex":"Regex","renpy":"Ren\'Py","rest":"REST","rip":"Rip","roboconf":"Roboconf","robotframework":"Robot Framework","ruby":"Ruby","rust":"Rust","sas":"SAS","sass":"SASS","scala":"Scala","scheme":"Scheme","scss":"SCSS","sentinel":"Sentinel","shell-session":"Shell","smali":"Smali","smalltalk":"Smalltalk","smarty":"Smarty","sml":"Standard ML","solidity":"Solidity","solution-file":"Solution File","soy":"Soy","sparql":"SPARQL","splunk-spl":"Splunk SPL","sqf":"SQF","sql":"SQL","stan":"Stan","stylus":"Stylus","swift":"Swift","t4-cs":"T4","t4-templating":"T4 Templating","t4-vb":"T4 Visual Basic","tap":"TAP","tcl":"Tcl","textile":"Textile","toml":"TOML","tsx":"TSX","tt2":"TT2","trig":"TriG","turtle":"Turtle","twig":"Twig","typescript":"TypeScript","tsconfig":"TSConfig","typoscript":"TypoScript","unrealscript":"UnrealScript","vala":"Vala","vbnet":"VB.NET","velocity":"Velocity","verilog":"Verilog","vhdl":"VHDL","vim":"Vim","visual-basic":"Visual Basic","warpscript":"WarpScript","wasm":"WebAssembly","wiki":"Wiki","xeoracube":"XeoraCube","xeora":"Xeora","xojo":"Xojo","xquery":"XQuery","yaml":"YAML","yang":"YANG","zig":"zig"}')},18220:function(e){"use strict";e.exports=JSON.parse('{"abap":[],"abnf":[],"actionscript":[],"ada":[],"agda":[],"al":[],"antlr4":["g4"],"apacheconf":[],"apex":[],"apl":[],"applescript":[],"aql":[],"arduino":[],"arff":[],"asciidoc":["adoc"],"asm6502":[],"aspnet":[],"autohotkey":[],"autoit":[],"bash":["shell"],"basic":[],"batch":[],"bbcode":["shortcode"],"birb":[],"bison":[],"bnf":["rbnf"],"brainfuck":[],"brightscript":[],"bro":[],"bsl":["oscript"],"c":[],"cfscript":["cfc"],"chaiscript":[],"cil":[],"clike":[],"clojure":[],"cmake":[],"cobol":[],"coffeescript":["coffee"],"concurnas":["conc"],"coq":[],"cpp":[],"crystal":[],"csharp":["cs","dotnet"],"csp":[],"css":[],"csv":[],"cypher":[],"d":[],"dart":[],"dataweave":[],"dax":[],"dhall":[],"diff":[],"django":["jinja2"],"dns-zone-file":["dns-zone"],"docker":["dockerfile"],"dot":["gv"],"ebnf":[],"editorconfig":[],"eiffel":[],"ejs":["eta"],"elixir":[],"elm":[],"erb":[],"erlang":[],"etlua":[],"excel-formula":["xls","xlsx"],"factor":[],"false":[],"firestore-security-rules":[],"flow":[],"fortran":[],"fsharp":[],"ftl":[],"gcode":[],"gdscript":[],"gedcom":[],"gherkin":[],"git":[],"glsl":[],"gml":["gamemakerlanguage"],"go":[],"graphql":[],"groovy":[],"haml":[],"handlebars":["hbs"],"haskell":["hs"],"haxe":[],"hcl":[],"hlsl":[],"hpkp":[],"hsts":[],"http":[],"ichigojam":[],"icon":[],"icu-message-format":[],"idris":["idr"],"iecst":[],"ignore":["gitignore","hgignore","npmignore"],"inform7":[],"ini":[],"io":[],"j":[],"java":[],"javadoc":[],"javadoclike":[],"javascript":["js"],"javastacktrace":[],"jexl":[],"jolie":[],"jq":[],"jsdoc":[],"json":["webmanifest"],"json5":[],"jsonp":[],"jsstacktrace":[],"jsx":[],"julia":[],"keyman":[],"kotlin":["kt","kts"],"kumir":["kum"],"latex":["context","tex"],"latte":[],"less":[],"lilypond":["ly"],"liquid":[],"lisp":["elisp","emacs","emacs-lisp"],"livescript":[],"llvm":[],"log":[],"lolcode":[],"lua":[],"makefile":[],"markdown":["md"],"markup":["atom","html","mathml","rss","ssml","svg","xml"],"markup-templating":[],"matlab":[],"mel":[],"mizar":[],"mongodb":[],"monkey":[],"moonscript":["moon"],"n1ql":[],"n4js":["n4jsd"],"nand2tetris-hdl":[],"naniscript":["nani"],"nasm":[],"neon":[],"nevod":[],"nginx":[],"nim":[],"nix":[],"nsis":[],"objectivec":["objc"],"ocaml":[],"opencl":[],"openqasm":["qasm"],"oz":[],"parigp":[],"parser":[],"pascal":["objectpascal"],"pascaligo":[],"pcaxis":["px"],"peoplecode":["pcode"],"perl":[],"php":[],"phpdoc":[],"plsql":[],"powerquery":["mscript","pq"],"powershell":[],"processing":[],"prolog":[],"promql":[],"properties":[],"protobuf":[],"psl":[],"pug":[],"puppet":[],"pure":[],"purebasic":["pbfasm"],"purescript":["purs"],"python":["py"],"q":[],"qml":[],"qore":[],"qsharp":["qs"],"r":[],"racket":["rkt"],"reason":[],"regex":[],"rego":[],"renpy":["rpy"],"rest":[],"rip":[],"roboconf":[],"robotframework":["robot"],"ruby":["rb"],"rust":[],"sas":[],"sass":[],"scala":[],"scheme":[],"scss":[],"shell-session":["sh-session","shellsession"],"smali":[],"smalltalk":[],"smarty":[],"sml":["smlnj"],"solidity":["sol"],"solution-file":["sln"],"soy":[],"sparql":["rq"],"splunk-spl":[],"sqf":[],"sql":[],"squirrel":[],"stan":[],"stylus":[],"swift":[],"t4-cs":["t4"],"t4-templating":[],"t4-vb":[],"tap":[],"tcl":[],"textile":[],"toml":[],"tsx":[],"tt2":[],"turtle":["trig"],"twig":[],"typescript":["ts"],"typoscript":["tsconfig"],"unrealscript":["uc","uscript"],"uri":["url"],"v":[],"vala":[],"vbnet":[],"velocity":[],"verilog":[],"vhdl":[],"vim":[],"visual-basic":["vb","vba"],"warpscript":[],"wasm":[],"wiki":[],"wolfram":["mathematica","nb","wl"],"xeora":["xeoracube"],"xojo":[],"xquery":[],"yaml":["yml"],"yang":[],"zig":[]}')}}]);