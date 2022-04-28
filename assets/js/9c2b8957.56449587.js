(self.webpackChunk=self.webpackChunk||[]).push([[2354],{3905:(e,r,t)=>{"use strict";t.r(r),t.d(r,{MDXContext:()=>u,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(){return l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l.apply(this,arguments)}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),d=function(e){return function(r){var t=c(r.components);return n.createElement(e,l({},r,{components:t}))}},c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,h=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return t?n.createElement(h,i(i({ref:r},u),{},{components:t})):n.createElement(h,i({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=h;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},36742:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>p});var n=t(79973),a=t(67294),l=t(73727),o=t(52263),i=t(13919),s=t(10412),u=(0,a.createContext)({collectLink:function(){}}),d=t(44996),c=t(18780),m=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const p=function(e){var r,t,p=e.isNavLink,h=e.to,f=e.href,v=e.activeClassName,y=e.isActive,g=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,w=void 0===b||b,x=(0,n.Z)(e,m),R=(0,o.default)().siteConfig,k=R.trailingSlash,N=R.baseUrl,C=(0,d.useBaseUrlUtils)().withBaseUrl,O=(0,a.useContext)(u),E=h||f,T=(0,i.Z)(E),j=null==E?void 0:E.replace("pathname://",""),U=void 0!==j?(t=j,w&&function(e){return e.startsWith("/")}(t)?C(t):t):void 0;U&&T&&(U=(0,c.applyTrailingSlash)(U,{trailingSlash:k,baseUrl:N}));var q=(0,a.useRef)(!1),L=p?l.OL:l.rU,I=s.default.canUseIntersectionObserver,P=(0,a.useRef)();(0,a.useEffect)((function(){return!I&&T&&null!=U&&window.docusaurus.prefetch(U),function(){I&&P.current&&P.current.disconnect()}}),[P,U,I,T]);var _=null!==(r=null==U?void 0:U.startsWith("#"))&&void 0!==r&&r,S=!U||!T||_;return U&&T&&!_&&!g&&O.collectLink(U),S?a.createElement("a",Object.assign({href:U},E&&!T&&{target:"_blank",rel:"noopener noreferrer"},x)):a.createElement(L,Object.assign({},x,{onMouseEnter:function(){q.current||null==U||(window.docusaurus.preload(U),q.current=!0)},innerRef:function(e){var r,t;I&&e&&T&&(r=e,t=function(){null!=U&&window.docusaurus.prefetch(U)},P.current=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(P.current.unobserve(r),P.current.disconnect(),t())}))})),P.current.observe(r))},to:U||""},p&&{isActive:y,activeClassName:v}))}},13919:(e,r,t)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}t.d(r,{b:()=>n,Z:()=>a})},44996:(e,r,t)=>{"use strict";t.r(r),t.d(r,{useBaseUrlUtils:()=>l,default:()=>o});var n=t(52263),a=t(13919);function l(){var e=(0,n.default)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,t=void 0===r?"/":r,l=e.url;return{withBaseUrl:function(e,r){return function(e,r,t,n){var l=void 0===n?{}:n,o=l.forcePrependBaseUrl,i=void 0!==o&&o,s=l.absolute,u=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if((0,a.b)(t))return t;if(i)return r+t;var d=t.startsWith(r)?t:r+t.replace(/^\//,"");return u?e+d:d}(l,t,e,r)}}}function o(e,r){return void 0===r&&(r={}),(0,l().withBaseUrl)(e,r)}},8802:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){var t=r.trailingSlash,n=r.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var a,l=e.split(/[#?]/)[0],o="/"===l||l===n?l:(a=l,t?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(l,o)}},18780:function(e,r,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.uniq=r.applyTrailingSlash=void 0;var a=t(8802);Object.defineProperty(r,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var l=t(29964);Object.defineProperty(r,"uniq",{enumerable:!0,get:function(){return n(l).default}})},29964:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return Array.from(new Set(e))}},68629:(e,r,t)=>{"use strict";t.d(r,{Z:()=>p});var n=t(36742),a=t(44256),l=t(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function i(e){var r=e.children;return l.createElement("div",{className:"docsRating",id:"docsRating"},l.createElement("hr",null),r)}var s=function(){var e=l.useState(!1),r=e[0],t=e[1],n=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return r?"Thank you for letting us know!":l.createElement(l.Fragment,null,"Is this page useful?",l.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},l.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),l.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},l.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},u=function(){return l.createElement("p",null,"Let us know how these docs can be improved by",l.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},d=function(){return l.createElement("p",null,"Help us make the site even better by"," ",l.createElement(n.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},c=function(){return l.createElement(i,null,l.createElement(u,null),l.createElement(s,null),l.createElement(d,null))},m=function(){return l.createElement(i,null,l.createElement(s,null),l.createElement(d,null))};const p=function(){return(0,a.fbContent)({internal:l.createElement(c,null),external:l.createElement(m,null)})}},56107:(e,r,t)=>{"use strict";t.r(r),t.d(r,{frontMatter:()=>s,contentTitle:()=>u,metadata:()=>d,toc:()=>c,default:()=>p});var n=t(74034),a=t(79973),l=(t(67294),t(3905)),o=(t(68629),t(44256)),i=["components"],s={id:"relay-resolvers",title:"Relay Resolvers",slug:"/guides/relay-resolvers/",description:"Relay guide to Relay Resolvers",keywords:["resolvers","derived","selectors","reactive"]},u=void 0,d={unversionedId:"guides/relay-resolvers",id:"guides/relay-resolvers",isDocsHomePage:!1,title:"Relay Resolvers",description:"Relay guide to Relay Resolvers",source:"@site/docs/guides/relay-resolvers.md",sourceDirName:"guides",slug:"/guides/relay-resolvers/",permalink:"/docs/next/guides/relay-resolvers/",editUrl:"https://github.com/facebook/relay/tree/main/website/docs/guides/relay-resolvers.md",tags:[],version:"current",lastUpdatedBy:"Tracy Lum",lastUpdatedAt:1651159723,formattedLastUpdatedAt:"4/28/2022",frontMatter:{id:"relay-resolvers",title:"Relay Resolvers",slug:"/guides/relay-resolvers/",description:"Relay guide to Relay Resolvers",keywords:["resolvers","derived","selectors","reactive"]},sidebar:"docs",previous:{title:"@required Directive",permalink:"/docs/next/guides/required-directive/"},next:{title:"Upgrading to Relay Hooks",permalink:"/docs/next/migration-and-compatibility/"}},c=[{value:"Doblock Fields",id:"doblock-fields",children:[],level:2},{value:"Relay Resolver Signature",id:"relay-resolver-signature",children:[],level:2},{value:"How They Work",id:"how-they-work",children:[],level:2},{value:"Error Handling",id:"error-handling",children:[],level:2},{value:"Current Limitations",id:"current-limitations",children:[],level:2}],m={toc:c};function p(e){var r=e.components,t=(0,a.Z)(e,i);return(0,l.mdx)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Relay Resolvers is an experimental Relay feature which enables modeling derived state as client-only fields in Relay\u2019s GraphQL graph. Similar to server ",(0,l.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/execution/"},"resolvers"),", a Relay Resolver is a function which defines how to compute the value of a GraphQL field. However, unlike server resolvers, Relay Resolvers are evaluated reactively on the client. A Relay Resolver reads fields off of its parent object and returns a derived result. If any of those fields change, Relay will automatically reevaluate the resolver."),(0,l.mdx)("p",null,"Relay Resolvers are particularly valuable in apps which store client state in Relay via ",(0,l.mdx)("a",{parentName:"p",href:"https://relay.dev/docs/guides/client-schema-extensions/"},"client schema extensions"),", since they allow you to compose together client data, server data \u2014 and even other Relay Resolver fields \u2014 into fields which update reactively as the underlying data changes."),(0,l.mdx)("p",null,"Relay Resolvers were originally conceived of as an alternative to Flux-style ",(0,l.mdx)("a",{parentName:"p",href:"https://redux.js.org/usage/deriving-data-selectors"},"selectors")," and can be thought of as providing similar capabilities."),(0,l.mdx)("p",null,"Concretely, Relay Resolvers are defined as functions annotated with a special docblock syntax. The Relay compiler will automatically recognize these docblocks in any JavaScript file and use them to extend the schema that is available within your project."),(0,l.mdx)("p",null,"Let\u2019s look at an example Relay Resolver:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import type {UserGreetingResolver$key} from 'UserGreetingResolver.graphql';\nimport {graphql} from 'relay-runtime';\nimport {readFragment} from 'relay-runtime/store/ResolverFragments';\n\n/**\n * @RelayResolver\n *\n * @onType User\n * @fieldName greeting\n * @rootFragment UserGreetingResolver\n *\n * A greeting for the user which includes their name and title.\n */\nexport default function userGreetingResolver(userKey: UserGreetingResolver$key): string {\n  const user = readFragment(graphql`\n    fragment UserGreetingResolver on User {\n      honorific\n      last_name\n    }`, userKey);\n\n  return `Hello ${user.honorific} ${user.last_name}!`;\n}\n")),(0,l.mdx)("p",null,"This resolver adds a new field ",(0,l.mdx)("inlineCode",{parentName:"p"},"greeting")," to the ",(0,l.mdx)("inlineCode",{parentName:"p"},"User")," object type. It reads the ",(0,l.mdx)("inlineCode",{parentName:"p"},"honorific")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"last_name")," fields off of the parent ",(0,l.mdx)("inlineCode",{parentName:"p"},"User")," and derives a greeting string. The new ",(0,l.mdx)("inlineCode",{parentName:"p"},"greeting")," field may now be used by any Relay component throughout your project which has access to a ",(0,l.mdx)("inlineCode",{parentName:"p"},"User"),"."),(0,l.mdx)("p",null,"Consuming this new field looks identical to consuming a field defined in the server schema:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"function MyGreeting({userKey}) {\n  const user = useFragment(`\n    fragment MyGreeting on User {\n      greeting\n    }`, userKey);\n  return<h1>{user.greeting}<h1>;\n}\n")),(0,l.mdx)("h2",{id:"doblock-fields"},"Doblock Fields"),(0,l.mdx)("p",null,"The Relay compiler looks for the following fields in any docblocks that includes ",(0,l.mdx)("inlineCode",{parentName:"p"},"@RelayResolver"),":"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"@RelayResolver")," (required)"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"@onType")," or ",(0,l.mdx)("inlineCode",{parentName:"li"},"@onInterface")," (required) The GraphQL type/interface on which the new field should be exposed"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"@fieldName")," (required) The name of the new field"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"@rootFragment")," (required) The name of the fragment read by ",(0,l.mdx)("inlineCode",{parentName:"li"},"readFragment")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"@deprecated")," (optional) Indicates that the field is ",(0,l.mdx)("a",{parentName:"li",href:"https://spec.graphql.org/June2018/#sec--deprecated"},"deprecated"),". May be optionally followed text giving the reason that the field is deprecated.")),(0,l.mdx)("p",null,"The docblock may also contain free text. This free text will be used as the field\u2019s human-readable description, which will be surfaced in Relay\u2019s editor support on hover and in autocomplete results."),(0,l.mdx)("h2",{id:"relay-resolver-signature"},"Relay Resolver Signature"),(0,l.mdx)("p",null,"In order for Relay to be able to call a Relay Resolver, it must conform to a set of conventions:"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"The resolver function must accept a single argument, which is the key for its root fragment."),(0,l.mdx)("li",{parentName:"ol"},"The resolver function must be the default export of its module (only one resolver per module)"),(0,l.mdx)("li",{parentName:"ol"},"The resolver must read its fragment using the special ",(0,l.mdx)("inlineCode",{parentName:"li"},"readFragment")," function."),(0,l.mdx)("li",{parentName:"ol"},"The resolver function must be pure"),(0,l.mdx)("li",{parentName:"ol"},"The resolver\u2019s return value must be immutable")),(0,l.mdx)("p",null,"Unlike server resolvers, Relay Resolvers may return any JavaScript value. This includes classes, functions and arrays. However, we generally encourage having Relay Resolvers return scalar values and only returning more complex JavaScript values (like functions) as an escape hatch."),(0,l.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},"## Lint Rule",(0,l.mdx)("p",null,"In many cases, the contents of the docblock can be derived from the javascript implementation. In those cases, the ",(0,l.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/eslint/relay-resolvers"},(0,l.mdx)("inlineCode",{parentName:"a"},"relay-resolvers"))," ESLint rule rule will offer auto-fixes to derive the docblock from the implementation and ensure that the two remain in sync. The lint rule also enforces a naming convention for resolver function and modules names.")),(0,l.mdx)("h2",{id:"how-they-work"},"How They Work"),(0,l.mdx)("p",null,"When parsing your project, the Relay compiler looks for ",(0,l.mdx)("inlineCode",{parentName:"p"},"@RelayResolver")," docblocks and uses them to add special fields to the GraphQL schema. If a query or fragment references one of these fields, Relay\u2019s generated artifact for that query or fragment will automatically include an ",(0,l.mdx)("inlineCode",{parentName:"p"},"import")," of the resolver function. ",(0,l.mdx)("em",{parentName:"p"},"Note that this can happen recursively if the Relay Resolver field you are reading itself reads one or more Relay Resolver fields.")),(0,l.mdx)("p",null,"When the field is first read by a component, Relay will evaluate the Relay Resolver function and cache the result. Other components that read the same field will read the same cached value. If at any point any of the fields that the resolver reads (via its root fragment) change, Relay will reevaluate the resolver. If the return value changes (determined by ",(0,l.mdx)("inlineCode",{parentName:"p"},"===")," equality) Relay will propagate that change to all components (and other Relay Resolvers) that are currently reading the field."),(0,l.mdx)("h2",{id:"error-handling"},"Error Handling"),(0,l.mdx)("p",null,"In order to make product code as robust as possible, Relay Resolvers follow the GraphQL spec\u2019s documented ",(0,l.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/best-practices/#nullability"},"best practice")," of returning null when a field resolver errors. Instead of throwing, errors thrown by Relay Resolvers will be logged to your environment's configured ",(0,l.mdx)("inlineCode",{parentName:"p"},"requiredFieldLogger")," with an event of kind ",(0,l.mdx)("inlineCode",{parentName:"p"},'"relay_resolver.error"'),". If you make use of Relay Resolves you should be sure to configure your environment with a ",(0,l.mdx)("inlineCode",{parentName:"p"},"requiredFieldLogger")," which reports those events to whatever system you use for tracking runtime errors."),(0,l.mdx)("p",null,"If your component requires a non-null value in order to render, and can\u2019t provide a reasonable fallback experience, you can annotate the field access with ",(0,l.mdx)("inlineCode",{parentName:"p"},"@required"),"."),(0,l.mdx)("h2",{id:"current-limitations"},"Current Limitations"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Relay Resolvers are still considered experimental. To use them you must ensure that the ",(0,l.mdx)("inlineCode",{parentName:"li"},"ENABLE_RELAY_RESOLVERS")," runtime feature flag is enabled, and that the ",(0,l.mdx)("inlineCode",{parentName:"li"},"enable_relay_resolver_transform")," feature flag is enabled in your project\u2019s Relay config file."),(0,l.mdx)("li",{parentName:"ul"},"Relay Resolvers don\u2019t yet have access to query variables. If this is functionality that would be useful to you, please get in touch."),(0,l.mdx)("li",{parentName:"ul"},"Currently Relay Resolvers only work with Haste module resolution, where modules are imported using their globally unique name, rather than by path.")))}p.isMDXComponent=!0}}]);