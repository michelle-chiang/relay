"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70623],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>c,MDXProvider:()=>f,mdx:()=>p,useMDXComponents:()=>u,withMDXComponents:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),d=function(e){return function(n){var t=u(n.components);return r.createElement(e,a({},n,{components:t}))}},u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},f=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),f=i,h=d["".concat(o,".").concat(f)]||d[f]||m[f]||a;return t?r.createElement(h,l(l({ref:n},c),{},{components:t})):r.createElement(h,l({ref:n},c))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},68629:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(39960),i=t(44256),a=t(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var n=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),n)}var s=function(){var e=a.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},d=function(){return a.createElement("p",null,"Help us make the site even better by"," ",a.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return a.createElement(l,null,a.createElement(c,null),a.createElement(s,null),a.createElement(d,null))},f=function(){return a.createElement(l,null,a.createElement(s,null),a.createElement(d,null))};const m=function(){return(0,i.fbContent)({internal:a.createElement(u,null),external:a.createElement(f,null)})}},1209:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var r,i=t(83117),a=t(80102),o=(t(67294),t(3905)),l=t(68629),s=(t(44256),["components"]),c={id:"filling-in-missing-data",title:"Filling in Missing Data (Missing Field Handlers)",slug:"/guided-tour/reusing-cached-data/filling-in-missing-data/",description:"Relay guide to filling in missing data",keywords:["missing field handler","missing data"]},d=void 0,u={unversionedId:"guided-tour/reusing-cached-data/filling-in-missing-data",id:"version-v13.0.0/guided-tour/reusing-cached-data/filling-in-missing-data",title:"Filling in Missing Data (Missing Field Handlers)",description:"Relay guide to filling in missing data",source:"@site/versioned_docs/version-v13.0.0/guided-tour/reusing-cached-data/filling-in-missing-data.md",sourceDirName:"guided-tour/reusing-cached-data",slug:"/guided-tour/reusing-cached-data/filling-in-missing-data/",permalink:"/docs/v13.0.0/guided-tour/reusing-cached-data/filling-in-missing-data/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/guided-tour/reusing-cached-data/filling-in-missing-data.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Kee Hinckley",lastUpdatedAt:1657754161,formattedLastUpdatedAt:"7/13/2022",frontMatter:{id:"filling-in-missing-data",title:"Filling in Missing Data (Missing Field Handlers)",slug:"/guided-tour/reusing-cached-data/filling-in-missing-data/",description:"Relay guide to filling in missing data",keywords:["missing field handler","missing data"]},sidebar:"version-v13.0.0/docs",previous:{title:"Rendering Partially Cached Data",permalink:"/docs/v13.0.0/guided-tour/reusing-cached-data/rendering-partially-cached-data/"},next:{title:"Introduction",permalink:"/docs/v13.0.0/guided-tour/refetching/"}},f={},m=[],h=(r="FbMissingFieldHandlers",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),p={toc:m};function g(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.mdx)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"In the previous section we covered how to reuse data that is fully or partially cached, however there are cases in which Relay can't automatically tell that it can reuse some of the data it already has from other queries in order to fulfill a specific query. Specifically, Relay knows how to reuse data that is cached for a query that has been fetched before; that is, if you fetch the exact same query twice, Relay will know that it has the data cached for that query the second time it tries to evaluate it."),(0,o.mdx)("p",null,"However, when using different queries, there might still be cases where different queries point to the same data, which we'd want to be able to reuse. For example, imagine the following two queries:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"// Query 1\n\nquery UserQuery {\n  user(id: 4) {\n    name\n  }\n}\n")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"// Query 2\n\nquery NodeQuery {\n  node(id: 4) {\n    ... on User {\n      name\n    }\n  }\n}\n")),(0,o.mdx)("p",null,"These two queries are different, but reference the exact same data. Ideally, if one of the queries was already cached in the store, we should be able to reuse that data when rendering the other query. However, Relay doesn't have this knowledge by default, so we need to configure it to encode the knowledge that a ",(0,o.mdx)("inlineCode",{parentName:"p"},"node(id: 4)")," ",(0,o.mdx)("em",{parentName:"p"},'"is the same as"')," ",(0,o.mdx)("inlineCode",{parentName:"p"},"user(id: 4)"),"."),(0,o.mdx)("p",null,"To do so, we can provide ",(0,o.mdx)("inlineCode",{parentName:"p"},"missingFieldHandlers")," to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"RelayEnvironment")," which specifies this knowledge."),(0,o.mdx)(h,{mdxType:"FbMissingFieldHandlers"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const {ROOT_TYPE, Environment} = require('relay-runtime');\n\nconst missingFieldHandlers = [\n  {\n    handle(field, record, argValues): ?string {\n      if (\n        record != null &&\n        record.__typename === ROOT_TYPE &&\n        field.name === 'user' &&\n        argValues.hasOwnProperty('id')\n      ) {\n        // If field is user(id: $id), look up the record by the value of $id\n        return argValues.id;\n      }\n      if (\n        record != null &&\n        record.__typename === ROOT_TYPE &&\n        field.name === 'story' &&\n        argValues.hasOwnProperty('story_id')\n      ) {\n        // If field is story(story_id: $story_id), look up the record by the\n        // value of $story_id.\n        return argValues.story_id;\n      }\n      return undefined;\n    },\n    kind: 'linked',\n  },\n];\n\nconst environment = new Environment({/*...*/, missingFieldHandlers});\n")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"missingFieldHandlers")," is an array of ",(0,o.mdx)("em",{parentName:"li"},"handlers"),". Each handler must specify a ",(0,o.mdx)("inlineCode",{parentName:"li"},"handle")," function, and the kind of missing fields it knows how to handle. The 2 main types of fields that you'd want to handle are:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("em",{parentName:"li"},"'scalar'"),": This represents a field that contains a scalar value, for example a number or a string."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("em",{parentName:"li"},"'linked'"),": This represents a field that references another object, i.e. not a scalar."))),(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("inlineCode",{parentName:"li"},"handle")," function takes the field that is missing, the record that field belongs to, and any arguments that were passed to the field in the current execution of the query.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"When handling a ",(0,o.mdx)("em",{parentName:"li"},"'scalar'")," field, the handle function should return a scalar value, in order to use as the value for a missing field"),(0,o.mdx)("li",{parentName:"ul"},"When handling a ",(0,o.mdx)("em",{parentName:"li"},"'linked'")," field",(0,o.mdx)("em",{parentName:"li"},",")," the handle function should return an ",(0,o.mdx)("em",{parentName:"li"},"ID"),", referencing another object in the store that should be use in place of the missing field. **"))),(0,o.mdx)("li",{parentName:"ul"},"As Relay attempts to fulfill a query from the local cache, whenever it detects any missing data, it will run any of the provided missing field handlers that match the field type before definitively declaring that the data is missing.")),(0,o.mdx)(l.Z,{mdxType:"DocsRating"}))}g.isMDXComponent=!0},47596:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(n){a(n)}}function l(e){try{s(r.throw(e))}catch(n){a(n)}}function s(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const i=t(11737);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield i.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,n){var t=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(n){a(n)}}function l(e){try{s(r.throw(e))}catch(n){a(n)}}function s(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let r=!1,i=0;const a={};n.call=function(e){return t(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in a||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?a[n].resolve(e.data.response):a[n].reject(new Error(e.data.error)),delete a[n]})));const n=i++,t=new Promise(((e,t)=>{a[n]={resolve:e,reject:t}})),o={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(o,l),t}))}},24855:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(n){a(n)}}function l(e){try{s(r.throw(e))}catch(n){a(n)}}function s(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.reportFeatureUsage=n.reportContentCopied=void 0;const i=t(11737);n.reportContentCopied=function(e){return r(this,void 0,void 0,(function*(){const{textContent:n}=e;try{yield i.call({module:"feedback",api:"reportContentCopied",args:{textContent:n}})}catch(t){}}))},n.reportFeatureUsage=function(e){return r(this,void 0,void 0,(function*(){const{featureName:n,id:t}=e;console.log("used feature");try{yield i.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:n,id:t}})}catch(r){}}))}},44256:function(e,n,t){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),i=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return i(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.getEphemeralDiffNumber=n.hasEphemeralDiffNumber=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.inpageeditor=n.feedback=n.uidocs=n.bloks=void 0,n.bloks=a(t(47596)),n.uidocs=a(t(17483)),n.feedback=a(t(24855)),n.inpageeditor=a(t(27312));const o=["internal","external"];function l(e){return c(e),d()?"internal"in e?s(e.internal):[]:"external"in e?s(e.external):[]}function s(e){return"function"==typeof e?e():e}function c(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const n=Object.keys(e).filter((e=>!o.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${o}`)}function d(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function u(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}n.fbContent=l,n.fbInternalOnly=function(e){return l({internal:e})},n.validateFbContentArgs=c,n.isInternal=d,n.hasEphemeralDiffNumber=function(){return Boolean(u())},n.getEphemeralDiffNumber=u,n.FbInternalOnly=function(e){return d()?e.children:null},n.OssOnly=function(e){return d()?null:e.children}},27312:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(n){a(n)}}function l(e){try{s(r.throw(e))}catch(n){a(n)}}function s(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.submitDiff=void 0;const i=t(11737);n.submitDiff=function(e){return r(this,void 0,void 0,(function*(){const{file_path:n,new_content:t,project_name:r,diff_number:a}=e;try{return yield i.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:n,new_content:t,project_name:r,diff_number:a}})}catch(o){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${o}`)}}))}},17483:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(n){a(n)}}function l(e){try{s(r.throw(e))}catch(n){a(n)}}function s(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}s((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getApi=n.docsets=void 0;const i=t(11737);n.docsets={BLOKS_CORE:"887372105406659"},n.getApi=function(e){return r(this,void 0,void 0,(function*(){const{name:n,framework:t,docset:r}=e;return yield i.call({module:"uidocs",api:"getApi",args:{name:n,framework:t,docset:r}})}))}}}]);