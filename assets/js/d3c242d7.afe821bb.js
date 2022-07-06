(self.webpackChunk=self.webpackChunk||[]).push([[39728],{3905:(e,n,t)=>{"use strict";t.r(n),t.d(n,{MDXContext:()=>s,MDXProvider:()=>c,mdx:()=>h,useMDXComponents:()=>u,withMDXComponents:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),m=function(e){return function(n){var t=u(n.components);return a.createElement(e,o({},n,{components:t}))}},u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=u(t),c=i,g=m["".concat(r,".").concat(c)]||m[c]||p[c]||o;return t?a.createElement(g,l(l({ref:n},s),{},{components:t})):a.createElement(g,l({ref:n},s))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=g;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},95635:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>d,metadata:()=>s,toc:()=>m,default:()=>c});var a=t(74034),i=t(79973),o=(t(67294),t(3905)),r=["components"],l={id:"converting-mutations",title:"Converting Mutations",original_id:"converting-mutations"},d=void 0,s={unversionedId:"converting-mutations",id:"version-v4.0.0/converting-mutations",isDocsHomePage:!1,title:"Converting Mutations",description:"We made some changes to how mutations work in the new version of Relay in order to makes them more straight forward to use and more customizable. Mutations are currently not covered by an automatic conversion and require a manual upgrade. However, limited number of changes is needed to make your existing mutations work with both the old and new environment.",source:"@site/versioned_docs/version-v4.0.0/Modern-ConvertingMutations.md",sourceDirName:".",slug:"/converting-mutations",permalink:"/docs/v4.0.0/converting-mutations",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v4.0.0/Modern-ConvertingMutations.md",tags:[],version:"v4.0.0",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1657134753,formattedLastUpdatedAt:"7/6/2022",frontMatter:{id:"converting-mutations",title:"Converting Mutations",original_id:"converting-mutations"}},m=[{value:"Simplifying FatQueries to Standard GraphQL Queries",id:"simplifying-fatqueries-to-standard-graphql-queries",children:[],level:2},{value:"Migrating Configs",id:"migrating-configs",children:[{value:"FIELDS_CHANGE",id:"fields_change",children:[],level:3},{value:"REQUIRED_CHILDREN",id:"required_children",children:[],level:3},{value:"RANGE_ADD",id:"range_add",children:[],level:3},{value:"RANGE_DELETE",id:"range_delete",children:[],level:3},{value:"NODE_DELETE",id:"node_delete",children:[],level:3}],level:2},{value:"Converting a Simple Mutation",id:"converting-a-simple-mutation",children:[{value:"Converting <code>getMutation()</code> and <code>getFatQuery()</code>",id:"converting-getmutation-and-getfatquery",children:[],level:3},{value:"Converting <code>getConfigs()</code>",id:"converting-getconfigs",children:[],level:3},{value:"Converting <code>getVariables()</code>",id:"converting-getvariables",children:[],level:3},{value:"Final Result",id:"final-result",children:[],level:3}],level:2}],u={toc:m};function c(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.mdx)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"We made some changes to how mutations work in the new version of Relay in order to makes them more straight forward to use and more customizable. Mutations are currently not covered by an automatic conversion and require a manual upgrade. However, limited number of changes is needed to make your existing mutations work with both the old and new environment."),(0,o.mdx)("h2",{id:"simplifying-fatqueries-to-standard-graphql-queries"},"Simplifying FatQueries to Standard GraphQL Queries"),(0,o.mdx)("p",null,"FatQueries in Relay Classic mutations was a concept that was confusing for a number of people. It required Relay to keep track of a significant amount of metadata regarding each record and automatically figure out the query to send to the server for the mutation. The logic to deduce the queries to send to the server was both complicated to maintain and slow to run. On top of that, we often had questions about why a particular field is included or skipped. We decided to allow people to have more control by allowing them write out exactly what data they want to update as the result of a mutation. Both individual fields and fragments can be included in these queries. Similar to container fragments, this is subjected to masking. That means only fields listed out directly will be accessible in the callbacks and the updater functions. The data fetched by in referenced fragments will still be updated in the store."),(0,o.mdx)("p",null,"Example of existing fat query:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"  RelayClassic.QL`\n    fragment on MarkReadNotificationResponsePayload @relay(pattern: true) {\n      notification\n    }\n  `;\n")),(0,o.mdx)("p",null,"Example of converted mutation query:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"graphql`\n  mutation MarkReadNotificationMutation(\n    $input: MarkReadNotificationData!\n  ) {\n    markReadNotification(data: $input) {\n      notification {\n        seenState # include fields to be updated\n        ... MyNotificationComponent_notification # reuse fragments from components to be updated\n      }\n    }\n  }\n`;\n")),(0,o.mdx)("h2",{id:"migrating-configs"},"Migrating Configs"),(0,o.mdx)("h3",{id:"fields_change"},"FIELDS_CHANGE"),(0,o.mdx)("p",null,"This is no longer needed in Compatibility Mode for neither environments. Relay will normalized the data using the mutation query and id to update the store automatically. You can remove it completely."),(0,o.mdx)("h3",{id:"required_children"},"REQUIRED_CHILDREN"),(0,o.mdx)("p",null,"This is no longer needed in Compatibility Mode for neither environments. Simply include any fields that you need as part of the mutation query without specifying the config."),(0,o.mdx)("h3",{id:"range_add"},"RANGE_ADD"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"RANGE_ADD")," needs one additional property in the config named ",(0,o.mdx)("inlineCode",{parentName:"p"},"connectionInfo")," to work with the new environment. Learn more about ",(0,o.mdx)("inlineCode",{parentName:"p"},"connectionInfo")," ",(0,o.mdx)("a",{parentName:"p",href:"/docs/v4.0.0/mutations#range-add"},"Mutation/RANGE_ADD")),(0,o.mdx)("h3",{id:"range_delete"},"RANGE_DELETE"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"RANGE_DELETE")," needs one additional property in the config named ",(0,o.mdx)("inlineCode",{parentName:"p"},"connectionKeys")," to work with the new environment. Learn more about ",(0,o.mdx)("inlineCode",{parentName:"p"},"connectionKeys")," ",(0,o.mdx)("a",{parentName:"p",href:"/docs/v4.0.0/mutations#range-delete"},"Mutation/RANGE_DELETE")),(0,o.mdx)("h3",{id:"node_delete"},"NODE_DELETE"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"NODE_DELETE")," config will work as-is with the new environment. No change is needed."),(0,o.mdx)("h2",{id:"converting-a-simple-mutation"},"Converting a Simple Mutation"),(0,o.mdx)("p",null,"Take this example of a simple mutation in Relay Classic:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"class LikeStoryMutation extends RelayClassic.Mutation {\n  getMutation() {\n    return RelayClassic.QL`mutation {likeStory}`;\n  }\n\n  getVariables() {\n    return {storyID: this.props.story.id};\n  }\n\n  getFatQuery() {\n    return RelayClassic.QL`\n      fragment on LikeStoryPayload @relay(pattern: true) {\n        story {\n          likers,\n          likeSentence,\n          viewerDoesLike,\n        },\n      }\n    `;\n  }\n\n  getConfigs() {\n    return [{\n      type: 'FIELDS_CHANGE',\n      fieldIDs: {\n        story: this.props.story.id,\n      },\n    }];\n  }\n\n  static fragments = {\n    story: () => Relay.QL`\n      fragment on Story {\n        id\n      }\n    `,\n  };\n}\n")),(0,o.mdx)("h3",{id:"converting-getmutation-and-getfatquery"},"Converting ",(0,o.mdx)("inlineCode",{parentName:"h3"},"getMutation()")," and ",(0,o.mdx)("inlineCode",{parentName:"h3"},"getFatQuery()")),(0,o.mdx)("p",null,"We combine these two into a regular GraphQL mutation, which list out specific fields that needs to be updated."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const mutation = graphql`\n  mutation LikeStoryMutation($input: LikeStoryData!) {\n    story(data: $input) {\n      likers {\n        count\n      }\n      likeSentence\n      viewerDoesLike\n    }\n  }\n`;\n")),(0,o.mdx)("h3",{id:"converting-getconfigs"},"Converting ",(0,o.mdx)("inlineCode",{parentName:"h3"},"getConfigs()")),(0,o.mdx)("p",null,"As specified above, ",(0,o.mdx)("inlineCode",{parentName:"p"},"FIELDS_CHANGE")," configs can be omitted."),(0,o.mdx)("h3",{id:"converting-getvariables"},"Converting ",(0,o.mdx)("inlineCode",{parentName:"h3"},"getVariables()")),(0,o.mdx)("p",null,"To convert ",(0,o.mdx)("inlineCode",{parentName:"p"},"getVariables()"),", we take the return value from the original function and wrap it in an object that contains a property that matches the variable name for the mutation. In this case, the mutation has a ",(0,o.mdx)("inlineCode",{parentName:"p"},"input")," variable that is of type ",(0,o.mdx)("inlineCode",{parentName:"p"},"LikeStoryData"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const variables = {\n  input: {\n    storyID: args.storyID\n  }\n}\n")),(0,o.mdx)("h3",{id:"final-result"},"Final Result"),(0,o.mdx)("p",null,"As you can see, our resulting mutation is a lot simpler and more like regular GraphQL than the Relay Classic version we started out with."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const mutation = graphql`\n  mutation LikeStoryMutation($input: LikeStoryData!) {\n    story {\n      likers {\n        count\n      },\n      likeSentence,\n      viewerDoesLike\n    }\n  }\n`;\n\n// environment should be passed in from your component as this.props.relay.environment\nfunction commit(environment: CompatEnvironment, args) {\n  const variables = {\n    input: {\n      storyID: args.storyID\n    }\n  };\n\n  return commitMutation(environment, {\n    mutation,\n    variables,\n  });\n}\n")),(0,o.mdx)("p",null,"See ",(0,o.mdx)("a",{parentName:"p",href:"/docs/v4.0.0/mutations"},"Mutation")," for additional options on ",(0,o.mdx)("inlineCode",{parentName:"p"},"commitMutation")," for more complex mutations."))}c.isMDXComponent=!0}}]);