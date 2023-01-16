"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[62176],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){return function(t){var n=m(t.components);return a.createElement(e,o({},t,{components:n}))}},m=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,h=d["".concat(i,".").concat(u)]||d[u]||p[u]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},68629:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(39960),r=n(86341),o=n(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var t=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),t)}var s=function(){var e=o.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},d=function(){return o.createElement("p",null,"Help us make the site even better by"," ",o.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},m=function(){return o.createElement(l,null,o.createElement(c,null),o.createElement(s,null),o.createElement(d,null))},u=function(){return o.createElement(l,null,o.createElement(s,null),o.createElement(d,null))};const p=function(){return(0,r.fbContent)({internal:o.createElement(m,null),external:o.createElement(u,null)})}},25652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=n(68629),l=["components"],s={id:"client-schema-extensions",title:"Client Schema Extensions",slug:"/guides/client-schema-extensions/",description:"Relay guide to client schema extensions",keywords:["client","schema","extension","commitLocalUpdate"]},c=void 0,d={unversionedId:"guides/client-schema-extensions",id:"guides/client-schema-extensions",title:"Client Schema Extensions",description:"Relay guide to client schema extensions",source:"@site/docs/guides/client-schema-extensions.md",sourceDirName:"guides",slug:"/guides/client-schema-extensions/",permalink:"/docs/next/guides/client-schema-extensions/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/guides/client-schema-extensions.md",tags:[],version:"current",lastUpdatedBy:"John Knox",lastUpdatedAt:1673887605,formattedLastUpdatedAt:"Jan 16, 2023",frontMatter:{id:"client-schema-extensions",title:"Client Schema Extensions",slug:"/guides/client-schema-extensions/",description:"Relay guide to client schema extensions",keywords:["client","schema","extension","commitLocalUpdate"]},sidebar:"docs",previous:{title:"Network Layer",permalink:"/docs/next/guides/network-layer/"},next:{title:"Testing Relay Components",permalink:"/docs/next/guides/testing-relay-components/"}},m={},u=[{value:"Table of Contents:",id:"table-of-contents",level:2},{value:"Extending the server schema",id:"extending-the-server-schema",level:2},{value:"Querying local state",id:"querying-local-state",level:2},{value:"Mutating local state",id:"mutating-local-state",level:2},{value:"Create",id:"create",level:3},{value:"Update",id:"update",level:3},{value:"Delete",id:"delete",level:3},{value:"Initial local state",id:"initial-local-state",level:2}],p={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.mdx)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("admonition",{type:"note"},(0,o.mdx)("p",{parentName:"admonition"},"See also ",(0,o.mdx)("a",{parentName:"p",href:"../../guided-tour/updating-data/local-data-updates/"},"the local data updates")," and ",(0,o.mdx)("a",{parentName:"p",href:"../../guided-tour/updating-data/client-only-data/"},"client-only data")," sections of the guided tour.")),(0,o.mdx)("p",null,"Relay can be used to read and write local data, and act as a single source of truth for ",(0,o.mdx)("em",{parentName:"p"},"all")," data in your client application."),(0,o.mdx)("p",null,"The Relay Compiler fully supports client-side extensions of the schema, which allows you to define local fields and types."),(0,o.mdx)("h2",{id:"table-of-contents"},"Table of Contents:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#extending-the-server-schema"},"Extending the server schema")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#querying-local-state"},"Querying local state")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#mutating-local-state"},"Mutating local state")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#initial-local-state"},"Initial local state"))),(0,o.mdx)("h2",{id:"extending-the-server-schema"},"Extending the server schema"),(0,o.mdx)("p",null,"To extend the server schema, create a new ",(0,o.mdx)("inlineCode",{parentName:"p"},".graphql")," file inside your ",(0,o.mdx)("inlineCode",{parentName:"p"},"--src")," directory.\nLet's call it ",(0,o.mdx)("inlineCode",{parentName:"p"},"./src/clientSchema.graphql"),".\nThis file needs to be in a folder referenced in the ",(0,o.mdx)("inlineCode",{parentName:"p"},'"schemaExtensions"')," of your relay config.  "),(0,o.mdx)("p",null,"This schema describes what local data can be queried on the client.\nIt can even be used to extend an existing server schema."),(0,o.mdx)("p",null,"For example, we can create a new type called ",(0,o.mdx)("inlineCode",{parentName:"p"},"Note"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"type Note {\n  id: ID!\n  title: String\n  body: String\n}\n")),(0,o.mdx)("p",null,"And then extend the server schema type ",(0,o.mdx)("inlineCode",{parentName:"p"},"User"),", with a list of ",(0,o.mdx)("inlineCode",{parentName:"p"},"Note"),", called ",(0,o.mdx)("inlineCode",{parentName:"p"},"notes"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"extend type User {\n  notes: [Note]\n}\n")),(0,o.mdx)("h2",{id:"querying-local-state"},"Querying local state"),(0,o.mdx)("p",null,"Accessing local data is no different from querying your GraphQL server, although you are required to include at least one server field in the query.\nThe field can be from the server schema, or it can be schema agnostic, like an introspection field (e.g. ",(0,o.mdx)("inlineCode",{parentName:"p"},"__typename"),")."),(0,o.mdx)("p",null,"Here, we use ",(0,o.mdx)("a",{parentName:"p",href:"../../api-reference/use-lazy-load-query"},"useLazyLoadQuery")," to get the current ",(0,o.mdx)("inlineCode",{parentName:"p"},"User")," via the ",(0,o.mdx)("inlineCode",{parentName:"p"},"viewer")," field, along with their id, name and the local list of notes."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Example.js\nimport * as React from 'react';\nimport { useLazyLoadQuery, graphql } from 'react-relay';\n\nconst Example = (props) => {\n  const data = useLazyLoadQuery(graphql`\n    query ExampleQuery {\n      viewer {\n        id\n        name\n        notes {\n          id\n          title\n          body\n        }\n      }\n    }\n  `, {});\n  // ...\n}\n")),(0,o.mdx)("h2",{id:"mutating-local-state"},"Mutating local state"),(0,o.mdx)("p",null,"All local data lives in the ",(0,o.mdx)("a",{parentName:"p",href:"../../api-reference/store/"},"Relay Store"),"."),(0,o.mdx)("p",null,"Updating local state can be done with any ",(0,o.mdx)("inlineCode",{parentName:"p"},"updater")," function."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"commitLocalUpdate")," function is especially ideal for this, because writes to local state are usually executed outside of a mutation."),(0,o.mdx)("p",null,"To build upon the previous example, let's try creating, updating and deleting a ",(0,o.mdx)("inlineCode",{parentName:"p"},"Note")," from the list of ",(0,o.mdx)("inlineCode",{parentName:"p"},"notes")," on ",(0,o.mdx)("inlineCode",{parentName:"p"},"User"),"."),(0,o.mdx)("h3",{id:"create"},"Create"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {commitLocalUpdate} from 'react-relay';\n\nlet tempID = 0;\n\nfunction createUserNote(environment) {\n  commitLocalUpdate(environment, store => {\n    const user = store.getRoot().getLinkedRecord('viewer');\n    const userNoteRecords = user.getLinkedRecords('notes') || [];\n\n    // Create a unique ID.\n    const dataID = `client:Note:${tempID++}`;\n\n    //Create a new note record.\n    const newNoteRecord = store.create(dataID, 'Note');\n\n    // Add the record to the user's list of notes.\n    user.setLinkedRecords([...userNoteRecords, newNoteRecord], 'notes');\n  });\n}\n")),(0,o.mdx)("p",null,"Note that since this record will be rendered by the ",(0,o.mdx)("inlineCode",{parentName:"p"},"ExampleQuery")," via ",(0,o.mdx)("inlineCode",{parentName:"p"},"useLazyLoadQuery"),", the query data will automatically be retained and won't be garbage collected."),(0,o.mdx)("p",null,"If no component is rendering the local data and you want to manually retain it, you can do so by calling ",(0,o.mdx)("inlineCode",{parentName:"p"},"environment.retain()"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {createOperationDescriptor, getRequest} from 'relay-runtime';\n\n// Create a query that references that record\nconst localDataQuery = graphql`\n  query LocalDataQuery {\n    viewer {\n      notes {\n        __typename\n      }\n    }\n  }\n`;\n\n// Create an operation descriptor for the query\nconst request = getRequest(localDataQuery);\nconst operation = createOperationDescriptor(request, {} /* variables */);\n\n\n// Tell Relay to retain this operation so any data referenced by it isn't garbage collected\n// In this case, all the notes linked to the `viewer` will be retained\nconst disposable = environment.retain(operation);\n\n\n// Whenever you don't need that data anymore and it's okay for Relay to garbage collect it,\n// you can dispose of the retain\ndisposable.dispose();\n")),(0,o.mdx)("h3",{id:"update"},"Update"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {commitLocalUpdate} from 'react-relay';\n\nfunction updateUserNote(environment, dataID, body, title) {\n  commitLocalUpdate(environment, store => {\n    const note = store.get(dataID);\n\n    note.setValue(body, 'body');\n    note.setValue(title, 'title')\n  });\n}\n")),(0,o.mdx)("h3",{id:"delete"},"Delete"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {commitLocalUpdate} from 'react-relay';\n\nfunction deleteUserNote(environment, dataID) {\n  commitLocalUpdate(environment, store => {\n    const user = store.getRoot().getLinkedRecord('viewer');\n    const userNoteRecords = user.getLinkedRecords('notes');\n\n    // Remove the note from the list of user notes.\n    const newUserNoteRecords = userNoteRecords.filter(x => x.getDataID() !== dataID);\n\n    // Delete the note from the store.\n    store.delete(dataID);\n\n    // Set the new list of notes.\n    user.setLinkedRecords(newUserNoteRecords, 'notes');\n  });\n}\n")),(0,o.mdx)("h2",{id:"initial-local-state"},"Initial local state"),(0,o.mdx)("p",null,"All new client-side schema fields default to ",(0,o.mdx)("inlineCode",{parentName:"p"},"undefined")," value. Often however, you will want to set the initial state before querying local data.\nYou can use an updater function via ",(0,o.mdx)("inlineCode",{parentName:"p"},"commitLocalUpdate")," to prime local state."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {commitLocalUpdate} from 'react-relay';\n\ncommitLocalUpdate(environment, store => {\n  const user = store.getRoot().getLinkedRecord('viewer');\n\n  // initialize user notes to an empty array.\n  user.setLinkedRecords([], 'notes');\n});\n")),(0,o.mdx)(i.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0}}]);