(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return b}));var a,r=n(3),i=n(8),o=(n(0),n(323)),c=n(329),l=n(324),s={id:"client-only-data",title:"Client-Only Data",slug:"/guided-tour/updating-data/client-only-data/",description:"Relay guide to client-only data",keywords:["client-only"]},u={unversionedId:"guided-tour/updating-data/client-only-data",id:"guided-tour/updating-data/client-only-data",isDocsHomePage:!1,title:"Client-Only Data",description:"Relay guide to client-only data",source:"@site/docs/guided-tour/updating-data/client-only-data.md",slug:"/guided-tour/updating-data/client-only-data/",permalink:"/docs/next/guided-tour/updating-data/client-only-data/",editUrl:"https://github.com/facebook/relay/edit/master/website/docs/guided-tour/updating-data/client-only-data.md",version:"current",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1617999378,sidebar:"docs",previous:{title:"Local Data Updates",permalink:"/docs/next/guided-tour/updating-data/local-data-updates/"},next:{title:"Retaining Queries",permalink:"/docs/next/guided-tour/accessing-data-without-react/retaining-queries/"}},d=[{value:"Client-Only Data (Client Schema Extensions)",id:"client-only-data-client-schema-extensions",children:[{value:"Extending Existing Types",id:"extending-existing-types",children:[]},{value:"Adding New Types",id:"adding-new-types",children:[]},{value:"Reading Client-Only Data",id:"reading-client-only-data",children:[]},{value:"Updating Client-Only Data",id:"updating-client-only-data",children:[]}]}],p=(a="FbClientOnlyDataDir",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),f={toc:d};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"client-only-data-client-schema-extensions"},"Client-Only Data (Client Schema Extensions)"),Object(o.b)("p",null,"Relay provides the ability to extend the GraphQL schema ",Object(o.b)("em",{parentName:"p"},"on the client")," (i.e. in the browser), via client schema extensions, in order to model data that only needs to be created, read and updated on the client. This can be useful to add small pieces of information to data that is fetched from the server, or to entirely model client-specific state to be stored and managed by Relay."),Object(o.b)("p",null,"Client schema extensions allows you to modify existing types on the schema (e.g. by adding new fields to a type), or to create entirely new types that only exist in the client."),Object(o.b)("h3",{id:"extending-existing-types"},"Extending Existing Types"),Object(o.b)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(o.b)("p",null,"In order to extend an existing type, add a ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," file to the appropriate schema extension directory (depending on the repo):")),Object(o.b)(l.OssOnly,{mdxType:"OssOnly"},Object(o.b)("p",null,"In order to extend an existing type, add a ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," file to your appropriate source (",Object(o.b)("inlineCode",{parentName:"p"},"--src"),") directory:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"\nextend type Comment {\n  is_new_comment: Boolean\n}\n")),Object(o.b)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(o.b)(p,{mdxType:"FbClientOnlyDataDir"})),Object(o.b)(l.OssOnly,{mdxType:"OssOnly"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In this example, we're using the ",Object(o.b)("inlineCode",{parentName:"li"},"extend")," keyword to extend an existing type, and we're adding a new field, ",Object(o.b)("inlineCode",{parentName:"li"},"is_new_comment")," to the existing ",Object(o.b)("inlineCode",{parentName:"li"},"Comment")," type, which we will be able to ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#reading-client-only-data"}),"read")," in our components, and ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#updating-client-only-data"}),"update")," when necessary using normal Relay APIs; you might imagine that we might use this field to render a different visual treatment for a comment if it's new, and we might set it when creating a new comment."))),Object(o.b)("h3",{id:"adding-new-types"},"Adding New Types"),Object(o.b)("p",null,"You can define types using the same regular GraphQL syntax, by defining it inside a ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," file in  ",Object(o.b)("inlineCode",{parentName:"p"},"html/js/relay/schema/"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"\n# You can define more than one type in a single file\nenum FetchStatus {\n  FETCHED\n  PENDING\n  ERRORED\n}\n\n\ntype FetchState {\n  # You can reuse client types to define other types\n  status: FetchStatus\n\n  # You can also reference regular server types\n  started_by: User!\n}\n\nextend type Item {\n  # You can extend server types with client-only types\n  fetch_state: FetchState\n}\n\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In this contrived example, we're defining 2 new client-only types, and ",Object(o.b)("inlineCode",{parentName:"li"},"enum")," and a regular ",Object(o.b)("inlineCode",{parentName:"li"},"type"),". Note that they can reference themselves as normal, and reference regular server defined types. Also note that we can extend server types and add fields that are of our client-only types."),Object(o.b)("li",{parentName:"ul"},"As mentioned previously, we will be able to ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#reading-client-only-data"}),"read")," and ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#updating-client-only-data"}),"update")," this data normally via Relay APIs.")),Object(o.b)("h3",{id:"reading-client-only-data"},"Reading Client-Only Data"),Object(o.b)("p",null,"We can read client-only data be selecting it inside ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../rendering/fragments/"}),"fragments")," or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../rendering/queries/"}),"queries")," as normal:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const data = *useFragment*(\n  graphql`\n    fragment CommentComponent_comment on Comment {\n\n      # We can select client-only fields as we would any other field\n      is_new_comment\n\n      body {\n        text\n      }\n    }\n  `,\n  props.user,\n);\n")),Object(o.b)("h3",{id:"updating-client-only-data"},"Updating Client-Only Data"),Object(o.b)("p",null,"In order to update client-only data, you can do so regularly inside ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../graphql-mutations/"}),"mutation")," or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../graphql-subscriptions/"}),"subscription")," updaters, or by using our primitives for doing ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../local-data-updates/"}),"local updates")," to the store."),Object(o.b)(c.a,{mdxType:"DocsRating"}))}b.isMDXComponent=!0},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,b=d["".concat(o,".").concat(f)]||d[f]||p[f]||i;return n?r.a.createElement(b,c(c({ref:t},s),{},{components:n})):r.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},324:function(e,t,n){"use strict";(function(e){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.bloks=void 0,t.bloks=i(n(327));const o=["internal","external"];let c;try{c=n(325).usePluginData}catch(p){c=null}function l(e){return u(e),d()?"internal"in e?s(e.internal):[]:"external"in e?s(e.external):[]}function s(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const t=Object.keys(e).filter((e=>!o.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${o}`)}function d(){return e.env.FB_INTERNAL||c&&c("internaldocs-fb").FB_INTERNAL}t.fbContent=l,t.fbInternalOnly=function(e){return l({internal:e})},t.validateFbContentArgs=u,t.isInternal=d,t.FbInternalOnly=function(e){return d()?e.children:null},t.OssOnly=function(e){return d()?null:e.children}}).call(this,n(326))},325:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r})),n.d(t,"useAllPluginInstancesData",(function(){return i})),n.d(t,"usePluginData",(function(){return o}));var a=n(22);function r(){var e=Object(a.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var t=r()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function o(e,t){void 0===t&&(t="default");var n=i(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},326:function(e,t){var n,a,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{a="function"==typeof clearTimeout?clearTimeout:o}catch(e){a=o}}();var l,s=[],u=!1,d=-1;function p(){u&&l&&(u=!1,l.length?s=l.concat(s):d=-1,s.length&&f())}function f(){if(!u){var e=c(p);u=!0;for(var t=s.length;t;){for(l=s,s=[];++d<t;)l&&l[d].run();d=-1,t=s.length}l=null,u=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===o||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function b(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new b(e,t)),1!==s.length||u||c(f)},b.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},327:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{l(a.next(e))}catch(t){i(t)}}function c(e){try{l(a.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const r=n(328);t.getSpecInfo=function(e){return a(this,void 0,void 0,(function*(){return yield r.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},328:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{l(a.next(e))}catch(t){i(t)}}function c(e){try{l(a.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let r=!1,i=0;const o={};t.call=function(e){return a(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in o||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?o[t].resolve(e.data.response):o[t].reject(new Error(e.data.error)),delete o[t]})));const t=i++,n=new Promise(((e,n)=>{o[t]={resolve:e,reject:n}})),a={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},c="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(a,c),n}))}},329:function(e,t,n){"use strict";n(61);var a=n(324),r=n(0);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var t=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),t)}var c=function(){var e=r.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},l=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},s=function(){return r.createElement(o,null,r.createElement(l,null),r.createElement(c,null))},u=function(){return r.createElement(o,null,r.createElement(c,null))};t.a=function(){return Object(a.fbContent)({internal:r.createElement(s,null),external:r.createElement(u,null)})}}}]);