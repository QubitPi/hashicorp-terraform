(()=>{var e={};e.id=4820,e.ids=[4820,2888],e.modules={92882:e=>{e.exports={mobileMenuContainer:"mobile-menu-levels-generic_mobileMenuContainer__yvFk4",mobileMenuNavList:"mobile-menu-levels-generic_mobileMenuNavList__ZySxX"}},19167:(e,t,a)=>{"use strict";a.a(e,async(e,o)=>{try{a.r(t),a.d(t,{config:()=>h,default:()=>d,getServerSideProps:()=>g,getStaticPaths:()=>m,getStaticProps:()=>p,reportWebVitals:()=>f,routeModule:()=>_,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>x,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>y});var i=a(87093),r=a(35244),s=a(1323),n=a(90029),c=a(65143),u=a(45273),l=e([c,u]);[c,u]=l.then?(await l)():l;let d=(0,s.l)(u,"default"),p=(0,s.l)(u,"getStaticProps"),m=(0,s.l)(u,"getStaticPaths"),g=(0,s.l)(u,"getServerSideProps"),h=(0,s.l)(u,"config"),f=(0,s.l)(u,"reportWebVitals"),y=(0,s.l)(u,"unstable_getStaticProps"),b=(0,s.l)(u,"unstable_getStaticPaths"),x=(0,s.l)(u,"unstable_getStaticParams"),v=(0,s.l)(u,"unstable_getServerProps"),w=(0,s.l)(u,"unstable_getServerSideProps"),_=new i.PagesRouteModule({definition:{kind:r.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:c.default,Document:n.default},userland:u});o()}catch(e){o(e)}})},11822:(e,t,a)=>{"use strict";a.a(e,async(e,o)=>{try{a.d(t,{Z:()=>d});var i=a(20997),r=a(58590),s=a(31542),n=a(36407),c=a(92882),u=a.n(c),l=e([s]);s=(l.then?(await l)():l)[0];let d=function(){return(0,i.jsxs)(s.Z,{className:u().mobileMenuContainer,children:[i.jsx(s.v,{}),(0,i.jsxs)("ul",{className:u().mobileMenuNavList,children:[i.jsx(n.Rd,{item:{heading:"Main Menu"}}),(0,r.A)().map((e,t)=>i.jsx(n.Rd,{item:e},t))]})]})};o()}catch(e){o(e)}})},10321:(e,t,a)=>{"use strict";a.d(t,{f:()=>o});let o=[a(40731),a(6468),a(67355),a(33837),a(55423),a(20110),a(17533),a(97551)].reduce((e,t)=>(e[t.slug]=t,e),{})},45273:(e,t,a)=>{"use strict";a.a(e,async(e,o)=>{try{a.r(t),a.d(t,{default:()=>p,getServerSideProps:()=>d});var i=a(20997),r=a(99522),s=a(11822),n=a(53308),c=a(10321),u=a(86599),l=e([r,s,n]);async function d(e){let{req:t,res:a,err:o}=e,i=new URL(t.url,`http://${t.headers.host}`),r=a?a.statusCode:o?o.statusCode:404;404===r&&a.setHeader("Cache-Control","s-maxage=86400");let s=i.pathname.split("/"),n=s.length>1&&s[1],l=(0,u.lF)(n)?n:null;return{props:{product:c.f[l]||null,statusCode:r,hostname:i.hostname}}}[r,s,n]=l.then?(await l)():l;let p=function({statusCode:e}){return i.jsx(e=>i.jsx(r.Z,{...e,mobileMenuSlot:i.jsx(s.Z,{})}),{children:i.jsx(n.Z,{statusCode:e})})};o()}catch(e){o(e)}})},53308:(e,t,a)=>{"use strict";a.a(e,async(e,o)=>{try{a.d(t,{Z:()=>d});var i=a(20997),r=a(16689),s=a(11163),n=a(87245),c=e([n]);n=(c.then?(await c)():c)[0];let u=/\/(?<version>v\d+([.]|_)\d+([.]|_)(\d+|x))/,l=/\/(?<version>v[0-9]{6}-\d+)/,d=function({statusCode:e}){let{asPath:t}=(0,s.useRouter)(),[a,o]=(0,r.useState)(!1);(0,r.useEffect)(()=>{o(!0)},[]);let c=u.exec(t)||l.exec(t),d=c?.groups?.version,p=t.replace(u,""),m=t.substring(0,t.indexOf(d)),g=404==e;switch(d&&g?"dev-dot-versioned-404":g?"dev-dot-standard-404":"dev-dot-fallback"){case"dev-dot-versioned-404":return i.jsx(n.ll,{pathBeforeVersion:m,pathWithoutVersion:p,version:d},String(a));case"dev-dot-standard-404":return i.jsx(n.B_,{});case"dev-dot-fallback":return i.jsx(n.uJ,{statusCode:e})}};o()}catch(e){o(e)}})},94970:e=>{"use strict";e.exports=require("@happykit/flags/client")},67922:e=>{"use strict";e.exports=require("@happykit/flags/context")},95780:e=>{"use strict";e.exports=require("@mapbox/rehype-prism")},48827:e=>{"use strict";e.exports=require("@radix-ui/react-visually-hidden")},7372:e=>{"use strict";e.exports=require("@reach/dialog")},9677:e=>{"use strict";e.exports=require("@reach/portal")},80395:e=>{"use strict";e.exports=require("@reach/tooltip")},78896:e=>{"use strict";e.exports=require("@react-aria/ssr")},76278:e=>{"use strict";e.exports=require("@react-aria/utils")},18910:e=>{"use strict";e.exports=require("@tanstack/react-query")},46310:e=>{"use strict";e.exports=require("@tanstack/react-query-devtools")},33666:e=>{"use strict";e.exports=require("@vercel/fetch")},38970:e=>{"use strict";e.exports=require("algoliasearch")},59003:e=>{"use strict";e.exports=require("classnames")},71239:e=>{"use strict";e.exports=require("events")},79316:e=>{"use strict";e.exports=require("fathom-client")},56734:e=>{"use strict";e.exports=require("js-cookie")},23231:e=>{"use strict";e.exports=require("ms")},41649:e=>{"use strict";e.exports=require("next-auth/react")},74091:e=>{"use strict";e.exports=require("next-query-params")},51162:e=>{"use strict";e.exports=require("next-themes")},62785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{"use strict";e.exports=require("next/head")},79103:e=>{"use strict";e.exports=require("query-string")},16689:e=>{"use strict";e.exports=require("react")},66405:e=>{"use strict";e.exports=require("react-dom")},65184:e=>{"use strict";e.exports=require("react-error-boundary")},48922:e=>{"use strict";e.exports=require("react-hot-toast")},19785:e=>{"use strict";e.exports=require("react-intersection-observer")},20997:e=>{"use strict";e.exports=require("react/jsx-runtime")},50934:e=>{"use strict";e.exports=require("shellwords")},73673:e=>{"use strict";e.exports=require("slugify")},48858:e=>{"use strict";e.exports=require("use-query-params")},17451:e=>{"use strict";e.exports=import("@vercel/speed-insights/next")},66197:e=>{"use strict";e.exports=import("framer-motion")},64675:e=>{"use strict";e.exports=import("react-instantsearch")},23135:e=>{"use strict";e.exports=import("react-markdown")},66809:e=>{"use strict";e.exports=import("remark-gfm")},9926:e=>{"use strict";e.exports=import("zod")},57147:e=>{"use strict";e.exports=require("fs")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},59796:e=>{"use strict";e.exports=require("zlib")},40731:e=>{"use strict";e.exports=JSON.parse('{"name":"Boundary","slug":"boundary","algoliaConfig":{"indexName":"product_BOUNDARY","searchOnlyApiKey":"8308498decdf72e11590fc6356e5fdde"},"analyticsConfig":{"includedDomains":"boundaryproject.io www.boundaryproject.io","segmentWriteKey":"JkNZiSgwVRAAFrkqqdHLxf0xfcZuhYYc"},"datoToken":"88b4984480dad56295a8aadae6caad","metadata":{"title":"Boundary by HashiCorp","description":"Boundary automates secure identity-based user access to hosts and services across environments.","image":"https://www.boundaryproject.io/boundary-public/img/og-image.png","icon":[{"href":"/boundary-public/_favicon.ico"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiConf","url":"https://hashiconf.com/2023?utm_source=direct&utm_medium=banner&utm_campaign=23Q3_HASHICONFGLOBAL_EVENT&utm_content=&utm_offer=event","text":"Our community conference is taking place in San Francisco and online October 10-12.","linkText":"Register now","expirationDate":""},"subnavItems":[{"text":"Overview","url":"/","type":"inbound"},"divider",{"text":"Tutorials","url":"https://developer.hashicorp.com/boundary/tutorials","type":"inbound"},{"text":"Docs","url":"/docs","type":"inbound"},{"text":"API","url":"/api-docs","type":"inbound"},{"text":"Community","url":"/community","type":"inbound"}],"basePaths":["docs","api-docs","downloads"],"rootDocsPaths":[{"iconName":"docs","name":"Documentation","path":"docs","shortName":"Docs"},{"iconName":"api","name":"API","path":"api-docs"}]}')},6468:e=>{"use strict";e.exports=JSON.parse('{"name":"Consul","slug":"consul","algoliaConfig":{"indexName":"product_CONSUL","searchOnlyApiKey":"fbd5dc1f0078d41509fcc560386fd534"},"analyticsConfig":{"includedDomains":"consul.io www.consul.io","segmentWriteKey":"IyzLrqXkox5KJ8XL4fo8vTYNGfiKlTCm"},"datoToken":"88b4984480dad56295a8aadae6caad","metadata":{"title":"Consul by HashiCorp","description":"Consul is a service networking solution to automate network configurations, discover services, and enable secure connectivity across any cloud or runtime.","image":"https://www.consulproject.io/consul-public/img/og-image.png","icon":[{"href":"/consul-public/_favicon.ico"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiConf","url":"https://hashiconf.com/2023?utm_source=direct&utm_medium=banner&utm_campaign=23Q3_HASHICONFGLOBAL_EVENT&utm_content=&utm_offer=event","text":"Our community conference is taking place in San Francisco and online October 10-12.","linkText":"Register now","expirationDate":""},"version":"1.11.3","subnavItems":[],"basePaths":["docs","api-docs","commands","downloads"],"rootDocsPaths":[{"iconName":"docs","name":"Documentation","path":"docs"},{"iconName":"api","name":"API","path":"api-docs"},{"iconName":"terminal-screen","name":"CLI","path":"commands"}]}')},67355:e=>{"use strict";e.exports=JSON.parse('{"name":"Nomad","slug":"nomad","algoliaConfig":{"indexName":"product_NOMAD","searchOnlyApiKey":"9bfec34ea54e56a11bd50d6bfedc5e71"},"analyticsConfig":{"includedDomains":"nomadproject.io www.nomadproject.io","segmentWriteKey":"qW11yxgipKMsKFKQUCpTVgQUYftYsJj0"},"datoToken":"88b4984480dad56295a8aadae6caad","metadata":{"title":"Nomad by HashiCorp","description":"Nomad is a highly available, distributed, data-center aware cluster and application scheduler designed to support the modern datacenter with support for long-running services, batch jobs, and much more.","image":"https://www.nomadproject.io/nomad-public/img/og-image.png","icon":[{"href":"/nomad-public/_favicon.ico"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiConf","url":"https://hashiconf.com/2023?utm_source=direct&utm_medium=banner&utm_campaign=23Q3_HASHICONFGLOBAL_EVENT&utm_content=&utm_offer=event","text":"Our community conference is taking place in San Francisco and online October 10-12.","linkText":"Register now","expirationDate":""},"version":"1.2.5","subnavItems":[{"text":"Overview","url":"/","type":"inbound"},{"text":"Enterprise","url":"https://www.hashicorp.com/products/nomad/","type":"outbound"},"divider",{"text":"Tutorials","url":"https://developer.hashicorp.com/nomad/tutorials","type":"outbound"},{"text":"Docs","url":"/docs","type":"inbound"},{"text":"API","url":"/api-docs","type":"inbound"},{"text":"Plugins","url":"/plugins","type":"inbound"},{"text":"Tools","url":"/tools","type":"inbound"},{"text":"Community","url":"/community","type":"inbound"}],"basePaths":["docs","api-docs","plugins","tools","intro","downloads"],"rootDocsPaths":[{"iconName":"docs","name":"Documentation","path":"docs"},{"iconName":"entry-point","name":"Intro","path":"intro"},{"iconName":"api","name":"API","path":"api-docs"},{"iconName":"terminal-screen","name":"Tools","path":"tools"},{"iconName":"plug","name":"Plugins","path":"plugins"}],"integrationsConfig":{"description":"A curated collection of official, partner, and community Nomad Integrations."}}')},33837:e=>{"use strict";e.exports=JSON.parse('{"name":"Packer","slug":"packer","algoliaConfig":{"indexName":"product_PACKER","searchOnlyApiKey":"4e1ea7f4bf4335ac43d9f28463e42148"},"analyticsConfig":{"includedDomains":"packer.io www.packer.io","segmentWriteKey":"AjXdfmTTk1I9q9dfyePuDFHBrz1tCO3l"},"datoToken":"88b4984480dad56295a8aadae6caad","metadata":{"title":"Packer by HashiCorp","description":"Packer helps you create golden images for multiple platforms from a single source configuration.","image":"https://www.packer.io/packer-public/img/og-image.png","icon":[{"href":"/packer-public/_favicon.ico"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiConf","url":"https://hashiconf.com/2023?utm_source=direct&utm_medium=banner&utm_campaign=23Q3_HASHICONFGLOBAL_EVENT&utm_content=&utm_offer=event","text":"Our community conference is taking place in San Francisco and online October 10-12.","linkText":"Register now","expirationDate":""},"version":"1.7.10","basePaths":["docs","guides","intro","downloads"],"rootDocsPaths":[{"iconName":"docs","name":"Documentation","path":"docs"},{"iconName":"guide","name":"Guides","path":"guides"}],"integrationsConfig":{"description":"A curated collection of official, partner, and community Packer Integrations."}}')},55423:e=>{"use strict";e.exports=JSON.parse('{"name":"Sentinel","slug":"sentinel","algoliaConfig":{"indexName":"product_SENTINEL","searchOnlyApiKey":"55606ae6b6c797d30a84aa0b509711ef"},"analyticsConfig":{"includedDomains":"docs.hashicorp.com","segmentWriteKey":"X4VJ1pUW2yM3NLldLbHF6337lbDLTQ5h"},"metadata":{"title":"Sentinel by HashiCorp","description":"Sentinel is a language and framework for policy built to be embedded in existing software to enable fine-grained, logic-based policy decisions.","image":"https://docs.hashicorp.com/sentinel-public/img/og-image.png","icon":[{"href":"/sentinel-public/favicon.svg","sizes":"16x16"},{"href":"/sentinel-public/favicon.svg","sizes":"32x32"},{"href":"/sentinel-public/favicon.svg","sizes":"96x96"},{"href":"/sentinel-public/favicon.svg","sizes":"192x192"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiConf","url":"https://hashiconf.com/2023?utm_source=direct&utm_medium=banner&utm_campaign=23Q3_HASHICONFGLOBAL_EVENT&utm_content=&utm_offer=event","text":"Our community conference is taking place in San Francisco and online October 10-12.","linkText":"Register now","expirationDate":""},"version":"0.18.6","subnavItems":[{"url":"/sentinel/intro","text":"Intro","type":"inbound"},{"url":"/sentinel","text":"Docs","type":"inbound"}],"basePaths":["docs","intro","downloads"],"rootDocsPaths":[{"basePathForLoader":"sentinel","iconName":"docs","name":"Docs","path":"docs"},{"basePathForLoader":"sentinel/intro","iconName":"docs","name":"Intro","path":"intro"}]}')},20110:e=>{"use strict";e.exports=JSON.parse('{"name":"Vagrant","slug":"vagrant","algoliaConfig":{"indexName":"product_VAGRANT","searchOnlyApiKey":"c4c3e690f46940fa3ba9624da4d7fc0c"},"analyticsConfig":{"includedDomains":"vagrantup.com www.vagrantup.com","segmentWriteKey":"wFMyBE4PJCZttWfu0pNhYdWr7ygW0io4"},"datoToken":"88b4984480dad56295a8aadae6caad","metadata":{"title":"Vagrant by HashiCorp","description":"Vagrant enables users to create and configure lightweight, reproducible, and portable development environments.","image":"https://www.vagrantup.com/vagrant/img/og-image.png","icon":[{"href":"/vagrant-public/favicon.ico"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiConf","url":"https://hashiconf.com/2023?utm_source=direct&utm_medium=banner&utm_campaign=23Q3_HASHICONFGLOBAL_EVENT&utm_content=&utm_offer=event","text":"Our community conference is taking place in San Francisco and online October 10-12.","linkText":"Register now","expirationDate":""},"version":"2.2.19","vmwareUtilityVersion":"1.0.21","subnavItems":[{"text":"Intro","url":"https://developer.hashicorp.com/vagrant/intro","type":"inbound"},{"text":"Docs","url":"https://developer.hashicorp.com/vagrant/docs","type":"inbound"},{"text":"Community","url":"/community","type":"inbound"}],"basePaths":["docs","intro","vagrant-cloud","vmware","downloads"],"rootDocsPaths":[{"iconName":"docs","name":"Documentation","path":"docs"},{"iconName":"entry-point","name":"Intro","path":"intro","addOverviewItem":false},{"iconName":"cloud","name":"Vagrant Cloud","path":"vagrant-cloud"}]}')},17533:e=>{"use strict";e.exports=JSON.parse('{"name":"Vault","slug":"vault","version":"1.9.3","changelogUrl":null,"algoliaConfig":{"indexName":"product_VAULT","searchOnlyApiKey":"9c555e8fa951c1c53e726c0ce2eb3b73"},"analyticsConfig":{"includedDomains":"vaultproject.io www.vaultproject.io","segmentWriteKey":"OdSFDq9PfujQpmkZf03dFpcUlywme4sC"},"datoToken":"88b4984480dad56295a8aadae6caad","metadata":{"title":"Vault by HashiCorp","description":"Vault secures, stores, and tightly controls access to tokens, passwords, certificates, API keys, and other secrets in modern computing. Vault handles leasing, key revocation, key rolling, auditing, and provides secrets as a service through a unified API.","image":"https://www.vaultproject.io/vault-public/img/og-image.png","icon":[{"href":"https://www.datocms-assets.com/2885/1676497447-vault-favicon-color.png?h=16&w=16","type":"image/png","sizes":"16x16"},{"href":"https://www.datocms-assets.com/2885/1676497447-vault-favicon-color.png?h=32&w=32","type":"image/png","sizes":"32x32"},{"href":"https://www.datocms-assets.com/2885/1676497447-vault-favicon-color.png?h=96&w=96","type":"image/png","sizes":"96x96"},{"href":"https://www.datocms-assets.com/2885/1676497447-vault-favicon-color.png?h=192&w=192","type":"image/png","sizes":"192x192"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiConf","url":"https://hashiconf.com/2023?utm_source=direct&utm_medium=banner&utm_campaign=23Q3_HASHICONFGLOBAL_EVENT&utm_content=&utm_offer=event","text":"Our community conference is taking place in San Francisco and online October 10-12.","linkText":"Register now","expirationDate":""},"subnavItems":[{"text":"Overview","url":"/"},{"text":"Use Cases","submenu":[{"text":"Secrets Management","url":"/use-cases/secrets-management"},{"text":"Data Encryption","url":"/use-cases/data-encryption"},{"text":"Identity-based Access","url":"/use-cases/identity-based-access"}]},{"text":"Enterprise","url":"https://www.hashicorp.com/products/vault/enterprise"},"divider",{"text":"Tutorials","url":"https://developer.hashicorp.com/vault/tutorials"},{"text":"Docs","url":"/docs"},{"text":"API","url":"/api-docs"},{"text":"Community","url":"/community"}],"packageManagers":[{"label":"Homebrew","commands":["brew tap hashicorp/tap","brew install hashicorp/tap/vault"],"os":"darwin"},{"label":"Ubuntu/Debian","commands":["wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg","echo \\"deb [arch=amd64 signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main\\" | sudo tee /etc/apt/sources.list.d/hashicorp.list","sudo apt-get update && sudo apt-get install vault"],"os":"linux"},{"label":"CentOS/RHEL","commands":["sudo yum install -y yum-utils","sudo yum-config-manager --add-repo https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo","sudo yum -y install vault"],"os":"linux"},{"label":"Fedora","commands":["sudo dnf install -y dnf-plugins-core","sudo dnf config-manager --add-repo https://rpm.releases.hashicorp.com/fedora/hashicorp.repo","sudo dnf -y install vault"],"os":"linux"},{"label":"Amazon Linux","commands":["sudo yum install -y yum-utils","sudo yum-config-manager --add-repo https://rpm.releases.hashicorp.com/AmazonLinux/hashicorp.repo","sudo yum -y install vault"],"os":"linux"},{"label":"Homebrew","commands":["brew tap hashicorp/tap","brew install hashicorp/tap/vault"],"os":"linux"}],"basePaths":["docs","api-docs","intro","tutorials","downloads"],"rootDocsPaths":[{"iconName":"docs","name":"Documentation","path":"docs"},{"iconName":"api","name":"API","path":"api-docs"}],"integrationsConfig":{"description":"A curated collection of official, partner, and community Vault Integrations.","sidebarLinks":[{"title":"Plugin System Overview","href":"/vault/docs/plugins"},{"title":"Plugin Development","href":"/vault/docs/plugins/plugin-development"},{"title":"Custom Secrets Engine Tutorial","href":"/vault/tutorials/custom-secrets-engine"}]}}')},97551:e=>{"use strict";e.exports=JSON.parse('{"name":"Waypoint","slug":"waypoint","algoliaConfig":{"indexName":"product_WAYPOINT","searchOnlyApiKey":"5e4adfd8094367056501547d6fedb6c5"},"analyticsConfig":{"includedDomains":"waypointproject.io www.waypointproject.io","segmentWriteKey":"9mlIVayJbNtJW2EOdAFKHNKcdLAgEDlV"},"metadata":{"title":"Waypoint by HashiCorp","description":"Waypoint provides a modern workflow for build, deploy, and release across platforms.","image":"https://www.waypointproject.io/waypoint-public/img/og-image.png","icon":[{"href":"/waypoint-public/_favicon.ico"}]},"alertBannerActive":true,"alertBanner":{"tag":"HashiConf","url":"https://hashiconf.com/2023?utm_source=direct&utm_medium=banner&utm_campaign=23Q3_HASHICONFGLOBAL_EVENT&utm_content=&utm_offer=event","text":"Our community conference is taking place in San Francisco and online October 10-12.","linkText":"Register now","expirationDate":""},"subnavItems":[{"text":"Overview","url":"/","type":"inbound"},{"text":"Tutorials","url":"https://developer.hashicorp.com/waypoint/tutorials","type":"inbound"},{"text":"Docs","url":"https://developer.hashicorp.com/waypoint/docs","type":"inbound"},{"text":"Community","url":"/community","type":"inbound"}],"basePaths":["docs","tutorials"],"rootDocsPaths":[{"iconName":"docs","name":"Documentation","path":"docs","includeMDXSource":true}],"integrationsConfig":{"description":"A curated collection of official, partner, and community Waypoint Integrations."}}')}};var t=require("../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),o=t.X(0,[7746,2872,6859,1576,5143,3314],()=>a(19167));module.exports=o})();