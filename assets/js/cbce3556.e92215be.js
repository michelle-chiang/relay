"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[55055],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>v,useMDXComponents:()=>u,withMDXComponents:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),m=function(e){return function(n){var t=u(n.components);return a.createElement(e,o({},n,{components:t}))}},u=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(t),c=i,g=m["".concat(r,".").concat(c)]||m[c]||p[c]||o;return t?a.createElement(g,l(l({ref:n},d),{},{components:t})):a.createElement(g,l({ref:n},d))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},43051:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=t(83117),i=t(80102),o=(t(67294),t(3905)),r=["components"],l={id:"converting-mutations",title:"Converting Mutations",original_id:"converting-mutations"},s=void 0,d={unversionedId:"converting-mutations",id:"version-v1.6.1/converting-mutations",title:"Converting Mutations",description:"We made some changes to how mutations work in the new version of Relay in order to makes them more straight forward to use and more customizable. Mutations are currently not covered by an automatic conversion and require a manual upgrade. However, limited number of changes is needed to make your existing mutations work with both the old and new environment.",source:"@site/versioned_docs/version-v1.6.1/Modern-ConvertingMutations.md",sourceDirName:".",slug:"/converting-mutations",permalink:"/docs/v1.6.1/converting-mutations",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v1.6.1/Modern-ConvertingMutations.md",tags:[],version:"v1.6.1",lastUpdatedBy:"Bhuwan Khattar",lastUpdatedAt:1658348902,formattedLastUpdatedAt:"7/20/2022",frontMatter:{id:"converting-mutations",title:"Converting Mutations",original_id:"converting-mutations"},sidebar:"version-v1.6.1/docs",previous:{title:"Upgrading setVariables",permalink:"/docs/v1.6.1/upgrading-setvariables"},next:{title:"Compatibility Cheatsheet",permalink:"/docs/v1.6.1/compatibility-cheatsheet"}},m={},u=[{value:"Simplifying FatQueries to Standard GraphQL Queries",id:"simplifying-fatqueries-to-standard-graphql-queries",level:2},{value:"Migrating Configs",id:"migrating-configs",level:2},{value:"FIELDS_CHANGE",id:"fields_change",level:3},{value:"RANGE_ADD",id:"range_add",level:3},{value:"RANGE_DELETE",id:"range_delete",level:3},{value:"NODE_DELETE",id:"node_delete",level:3},{value:"Converting a Simple Mutation",id:"converting-a-simple-mutation",level:2},{value:"Converting <code>getMutation()</code> and <code>getFatQuery()</code>",id:"converting-getmutation-and-getfatquery",level:3},{value:"Converting <code>getConfigs()</code>",id:"converting-getconfigs",level:3},{value:"Converting <code>getVariables()</code>",id:"converting-getvariables",level:3},{value:"Final Result",id:"final-result",level:3}],c={toc:u};function p(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.mdx)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"We made some changes to how mutations work in the new version of Relay in order to makes them more straight forward to use and more customizable. Mutations are currently not covered by an automatic conversion and require a manual upgrade. However, limited number of changes is needed to make your existing mutations work with both the old and new environment."),(0,o.mdx)("h2",{id:"simplifying-fatqueries-to-standard-graphql-queries"},"Simplifying FatQueries to Standard GraphQL Queries"),(0,o.mdx)("p",null,"FatQueries in Relay Classic mutations was a concept that was confusing for a number of people. It required Relay to keep track of a significant amount of metadata regarding each record and automatically figure out the query to send to the server for the mutation. The logic to deduce the queries to send to the server was both complicated to maintain and slow to run. On top of that, we often had questions about why a particular field is included or skipped. We decided to allow people to have more control by allowing them write out exactly what data they want to update as the result of a mutation. Both individual fields and fragments can be included in these queries. Similar to container fragments, this is subjected to masking. That means only fields listed out directly will be accessible in the callbacks and the updater functions. The data fetched by in referenced fragments will still be updated in the store."),(0,o.mdx)("p",null,"Example of existing fat query:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"  RelayClassic.QL`\n    fragment on MarkReadNotificationResponsePayload @relay(pattern: true) {\n      notification\n    }\n  `;\n")),(0,o.mdx)("p",null,"Example of converted mutation query:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"graphql`\n  mutation MarkReadNotificationMutation(\n    $input: MarkReadNotificationData!\n  ) {\n    markReadNotification(data: $input) {\n      notification {\n        seenState # include fields to be updated\n        ... MyNotificationComponent_notification # reuse fragments from components to be updated\n      }\n    }\n  }\n`;\n")),(0,o.mdx)("h2",{id:"migrating-configs"},"Migrating Configs"),(0,o.mdx)("h3",{id:"fields_change"},"FIELDS_CHANGE"),(0,o.mdx)("p",null,"This is no longer needed in Compatibility Mode for neither environments. Relay will normalized the data using the mutation query and id to update the store automatically. You can remove it completely."),(0,o.mdx)("h3",{id:"range_add"},"RANGE_ADD"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"RANGE_ADD")," needs one additional property in the config named ",(0,o.mdx)("inlineCode",{parentName:"p"},"connectionInfo")," to work with the new environment. Learn more about ",(0,o.mdx)("inlineCode",{parentName:"p"},"connectionInfo")," ",(0,o.mdx)("a",{parentName:"p",href:"/docs/v1.6.1/mutations#range-add"},"Mutation/RANGE_ADD")),(0,o.mdx)("h3",{id:"range_delete"},"RANGE_DELETE"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"RANGE_DELETE")," needs one additional property in the config named ",(0,o.mdx)("inlineCode",{parentName:"p"},"connectionKeys")," to work with the new environment. Learn more about ",(0,o.mdx)("inlineCode",{parentName:"p"},"connectionKeys")," ",(0,o.mdx)("a",{parentName:"p",href:"/docs/v1.6.1/mutations#range-delete"},"Mutation/RANGE_DELETE")),(0,o.mdx)("h3",{id:"node_delete"},"NODE_DELETE"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"NODE_DELETE")," config will work as-is with the new environment. No change is needed."),(0,o.mdx)("h2",{id:"converting-a-simple-mutation"},"Converting a Simple Mutation"),(0,o.mdx)("p",null,"Take this example of a simple mutation in Relay Classic:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"class LikeStoryMutation extends RelayClassic.Mutation {\n  getMutation() {\n    return RelayClassic.QL`mutation {likeStory}`;\n  }\n\n  getVariables() {\n    return {storyID: this.props.story.id};\n  }\n\n  getFatQuery() {\n    return RelayClassic.QL`\n      fragment on LikeStoryPayload @relay(pattern: true) {\n        story {\n          likers,\n          likeSentence,\n          viewerDoesLike,\n        },\n      }\n    `;\n  }\n\n  getConfigs() {\n    return [{\n      type: 'FIELDS_CHANGE',\n      fieldIDs: {\n        story: this.props.story.id,\n      },\n    }];\n  }\n\n  static fragments = {\n    story: () => Relay.QL`\n      fragment on Story {\n        id\n      }\n    `,\n  };\n}\n")),(0,o.mdx)("h3",{id:"converting-getmutation-and-getfatquery"},"Converting ",(0,o.mdx)("inlineCode",{parentName:"h3"},"getMutation()")," and ",(0,o.mdx)("inlineCode",{parentName:"h3"},"getFatQuery()")),(0,o.mdx)("p",null,"We combine these two into a regular GraphQL mutation, which list out specific fields that needs to be updated."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const mutation = graphql`\n  mutation LikeStoryMutation($input: LikeStoryData!) {\n    story(data: $input) {\n      likers {\n        count\n      }\n      likeSentence\n      viewerDoesLike\n    }\n  }\n`;\n")),(0,o.mdx)("h3",{id:"converting-getconfigs"},"Converting ",(0,o.mdx)("inlineCode",{parentName:"h3"},"getConfigs()")),(0,o.mdx)("p",null,"As specified above, ",(0,o.mdx)("inlineCode",{parentName:"p"},"FIELDS_CHANGE")," configs can be omitted."),(0,o.mdx)("h3",{id:"converting-getvariables"},"Converting ",(0,o.mdx)("inlineCode",{parentName:"h3"},"getVariables()")),(0,o.mdx)("p",null,"To convert ",(0,o.mdx)("inlineCode",{parentName:"p"},"getVariables()"),", we take the return value from the original function and wrap it in an object that contains a property that matches the variable name for the mutation. In this case, the mutation has a ",(0,o.mdx)("inlineCode",{parentName:"p"},"input")," variable that is of type ",(0,o.mdx)("inlineCode",{parentName:"p"},"LikeStoryData"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const variables = {\n  input: {\n    storyID: args.storyID\n  }\n}\n")),(0,o.mdx)("h3",{id:"final-result"},"Final Result"),(0,o.mdx)("p",null,"As you can see, our resulting mutation is a lot simpler and more like regular GraphQL than the Relay Classic version we started out with."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const mutation = graphql`\n  mutation LikeStoryMutation($input: LikeStoryData!) {\n    story {\n      likers {\n        count\n      },\n      likeSentence,\n      viewerDoesLike\n    }\n  }\n`;\n\n// environment should be passed in from your component as this.props.relay.environment\nfunction commit(environment: CompatEnvironment, args) {\n  const variables = {\n    input: {\n      storyID: args.storyID\n    }\n  };\n\n  return commitMutation(environment, {\n    mutation,\n    variables,\n  });\n}\n")),(0,o.mdx)("p",null,"See ",(0,o.mdx)("a",{parentName:"p",href:"/docs/v1.6.1/mutations"},"Mutation")," for additional options on ",(0,o.mdx)("inlineCode",{parentName:"p"},"commitMutation")," for more complex mutations."))}p.isMDXComponent=!0}}]);