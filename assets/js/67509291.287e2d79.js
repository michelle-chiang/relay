(self.webpackChunk=self.webpackChunk||[]).push([[38428],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||h[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37651:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>s,toc:()=>p,default:()=>d});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o=["components"],l={id:"refetch-container",title:"Refetch Container",original_id:"refetch-container"},c=void 0,s={unversionedId:"refetch-container",id:"version-v1.6.1/refetch-container",isDocsHomePage:!1,title:"Refetch Container",description:"A Refetch Container is also a higher-order component that works like a regular Fragment Container, but provides the additional ability to fetch a new GraphQL query with different variables and re-render the component the new result.",source:"@site/versioned_docs/version-v1.6.1/Modern-RefetchContainer.md",sourceDirName:".",slug:"/refetch-container",permalink:"/docs/v1.6.1/refetch-container",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v1.6.1/Modern-RefetchContainer.md",version:"v1.6.1",lastUpdatedBy:"Tianyu Yao",lastUpdatedAt:1636564987,formattedLastUpdatedAt:"11/10/2021",frontMatter:{id:"refetch-container",title:"Refetch Container",original_id:"refetch-container"},sidebar:"version-v1.6.1/docs",previous:{title:"Fragment Container",permalink:"/docs/v1.6.1/fragment-container"},next:{title:"Pagination Container",permalink:"/docs/v1.6.1/pagination-container"}},p=[{value:"<code>createRefetchContainer</code>",id:"createrefetchcontainer",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Available Props",id:"available-props",children:[]}]},{value:"<code>refetch</code>",id:"refetch",children:[{value:"Arguments",id:"arguments-1",children:[]},{value:"Return Value",id:"return-value",children:[]}]},{value:"Examples",id:"examples",children:[{value:"Refetching latest data",id:"refetching-latest-data",children:[]},{value:"Loading more data",id:"loading-more-data",children:[]}]}],h={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A Refetch Container is also a ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/higher-order-components.html"},"higher-order component")," that works like a regular ",(0,i.kt)("a",{parentName:"p",href:"./fragment-container"},"Fragment Container"),", but provides the additional ability to fetch a new GraphQL query with different variables and re-render the component the new result."),(0,i.kt)("p",null,"Table of Contents:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#createrefetchcontainer"},(0,i.kt)("inlineCode",{parentName:"a"},"createRefetchContainer"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#refetch"},(0,i.kt)("inlineCode",{parentName:"a"},"refetch"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#examples"},"Examples"))),(0,i.kt)("h2",{id:"createrefetchcontainer"},(0,i.kt)("inlineCode",{parentName:"h2"},"createRefetchContainer")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"createRefetchContainer")," has the following signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"createRefetchContainer(\n  component: ReactComponentClass,\n  fragmentSpec: GraphQLTaggedNode | {[string]: GraphQLTaggedNode},\n  refetchQuery: GraphQLTaggedNode,\n): ReactComponentClass;\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"component"),": The React Component ",(0,i.kt)("em",{parentName:"li"},"class")," of the component requiring the fragment data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fragmentSpec"),": Specifies the data requirements for the Component via a GraphQL fragment. The required data will be available on the component as props that match the shape of the provided fragment. ",(0,i.kt)("inlineCode",{parentName:"li"},"fragmentSpec")," can be one of 2 things:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"graphql")," tagged fragment. If the fragment uses the name convention ",(0,i.kt)("inlineCode",{parentName:"li"},"<FileName><...>_<propName>"),", the fragment's data will be available to the Component as a prop with the given ",(0,i.kt)("inlineCode",{parentName:"li"},"<propName>"),".\nIf the fragment name doesn't specify a prop name, the data will be available as a ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," prop."),(0,i.kt)("li",{parentName:"ul"},"An object whose keys are prop names and values are ",(0,i.kt)("inlineCode",{parentName:"li"},"graphql")," tagged fragments. Each key specified in this object will correspond to a prop available to the resulting Component."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Note:")," To enable ",(0,i.kt)("a",{parentName:"li",href:"./relay-compat"},"compatibility mode"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"relay-compiler")," enforces fragments to be named as ",(0,i.kt)("inlineCode",{parentName:"li"},"<FileName>_<propName>"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"refetchQuery"),": A ",(0,i.kt)("inlineCode",{parentName:"li"},"graphql")," tagged query to be fetched upon calling ",(0,i.kt)("a",{parentName:"li",href:"#refetch"},(0,i.kt)("inlineCode",{parentName:"a"},"props.relay.refetch")),". As with any query, upon fetching this query, its result will be normalized into the store, any relevant subscriptions associated with the changed records will be fired, and subscribed components will re-render.")),(0,i.kt)("h3",{id:"available-props"},"Available Props"),(0,i.kt)("p",null,"The Component resulting from ",(0,i.kt)("inlineCode",{parentName:"p"},"createRefetchContainer")," will receive the following ",(0,i.kt)("inlineCode",{parentName:"p"},"props"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"type Props = {\n  relay: {\n    environment: Environment,\n    refetch(), // See #refetch section\n  },\n  // Additional props as specified by the fragmentSpec\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"relay"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"environment"),": The current ",(0,i.kt)("a",{parentName:"li",href:"./relay-environment"},"Relay Environment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"refetch"),": See ",(0,i.kt)("inlineCode",{parentName:"li"},"refetch")," ",(0,i.kt)("a",{parentName:"li",href:"#refetch"},"docs"))))),(0,i.kt)("h2",{id:"refetch"},(0,i.kt)("inlineCode",{parentName:"h2"},"refetch")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"refetch")," is a function available on the ",(0,i.kt)("inlineCode",{parentName:"p"},"relay")," ",(0,i.kt)("a",{parentName:"p",href:"#available-props"},"prop")," which can be used to execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"refetchQuery")," and potentially re-render the component with the newly fetched data. Specifically, upon fetching the ",(0,i.kt)("inlineCode",{parentName:"p"},"refetchQuery"),", its result will be normalized into the store, and any relevant subscriptions associated with the changed records will be fired, causing relevant components to re-render."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"refetch")," is meant to be used for changing variables in the component's fragment. Specifically, in order for ",(0,i.kt)("em",{parentName:"p"},"this")," component to re-render, it must be subscribed to changes in the records affected by this query. If the fragment for the component doesn't use variables, the component won't be subscribed to changes to new records that might be fetched by this query. A common example of this is using ",(0,i.kt)("inlineCode",{parentName:"p"},"refetch")," to fetch a new node and re-render the component with the data for the new node; in this case the fragment needs to use a variable for the node's id, otherwise the component won't pick up the changes for the new node."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"refetch")," has the following signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"type RefetchOptions = {\n  force?: boolean,\n};\n\ntype Disposable = {\n  dispose(): void,\n};\n\nrefetch(\n  refetchVariables: Object | (fragmentVariables: Object) => Object,\n  renderVariables: ?Object,\n  callback: ?(error: ?Error) => void,\n  options?: RefetchOptions,\n): Disposable,\n\n")),(0,i.kt)("h3",{id:"arguments-1"},"Arguments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"refetchVariables"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A bag of variables to pass to the ",(0,i.kt)("inlineCode",{parentName:"li"},"refetchQuery")," when fetching it from the server."),(0,i.kt)("li",{parentName:"ul"},"Or, a function that receives the previous set of variables used to query the data, and returns a new set of variables to pass to the ",(0,i.kt)("inlineCode",{parentName:"li"},"refetchQuery")," when fetching it from the server."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"renderVariables"),": Optional bag of variables that indicate which variables to use for reading out the data from the store when re-rendering the component. Specifically, this indicates which variables to use when querying the data from the\nlocal data store ",(0,i.kt)("em",{parentName:"li"},"after")," the new query has been fetched. If not specified, the ",(0,i.kt)("inlineCode",{parentName:"li"},"refetchVariables")," will be used. This is useful when the data you need to render in your component doesn't necessarily match the data you queried the server for. For example, to implement pagination, you would fetch a page with variables like ",(0,i.kt)("inlineCode",{parentName:"li"},"{first: 5, after: '<cursor>'}"),", but you might want to render the full collection with ",(0,i.kt)("inlineCode",{parentName:"li"},"{first: 10}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"callback"),": Function to be called after the refetch has completed. If an error occurred during refetch, this function will receive that error as an argument."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options"),": Optional object containing set of options.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"force"),": If the ",(0,i.kt)("a",{parentName:"li",href:"./network-layer"},"Network Layer")," has been configured with a cache, this option forces a refetch even if the data for this query and variables is already available in the cache.")))),(0,i.kt)("h3",{id:"return-value"},"Return Value"),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"Disposable")," on which you could call ",(0,i.kt)("inlineCode",{parentName:"p"},"dispose()")," to cancel the refetch."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"refetching-latest-data"},"Refetching latest data"),(0,i.kt)("p",null,"In this simple example, let's assume we want to fetch the latest data for a ",(0,i.kt)("inlineCode",{parentName:"p"},"TodoItem")," from the server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// TodoItem.js\nimport {createRefetchContainer, graphql} from 'react-relay';\n\nclass TodoItem extends React.Component {\n  render() {\n    const item = this.props.item;\n    return (\n      <View>\n        <Checkbox checked={item.isComplete} />\n        <Text>{item.text}</Text>\n        <button onPress={this._refetch} title=\"Refresh\" />\n      </View>\n    );\n  }\n\n  _refetch = () => {\n    this.props.relay.refetch(\n      {itemID: this.props.item.id},  // Our refetchQuery needs to know the `itemID`\n      null,  // We can use the refetchVariables as renderVariables\n      () => { console.log('Refetch done') },\n      {force: true},  // Assuming we've configured a network layer cache, we want to ensure we fetch the latest data.\n    );\n  }\n}\n\nexport default createRefetchContainer(\n  TodoItem,\n  graphql`\n    fragment TodoItem_item on Todo {\n      text\n      isComplete\n    }\n  `,\n  graphql`\n    # Refetch query to be fetched upon calling `refetch`.\n    # Notice that we re-use our fragment and the shape of this query matches our fragment spec.\n    query TodoItemRefetchQuery($itemID: ID!) {\n      item: node(id: $itemID) {\n        ...TodoItem_item\n      }\n    }\n  `\n);\n")),(0,i.kt)("h3",{id:"loading-more-data"},"Loading more data"),(0,i.kt)("p",null,"In this example we are using a Refetch Container to fetch more stories in a story feed component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'import {createRefetchContainer, graphql} from \'react-relay\';\n\nclass FeedStories extends React.Component {\n  render() {\n    return (\n      <div>\n        {this.props.feed.stories.edges.map(\n          edge => <Story story={edge.node} key={edge.node.id} />\n        )}\n        <button\n          onPress={this._loadMore}\n          title="Load More"\n        />\n      </div>\n    );\n  }\n\n  _loadMore() {\n    // Increments the number of stories being rendered by 10.\n    const refetchVariables = fragmentVariables => ({\n      count: fragmentVariables.count + 10,\n    });\n    this.props.relay.refetch(refetchVariables);\n  }\n}\n\nexport default createRefetchContainer(\n  FeedStories,\n  {\n    feed: graphql`\n      fragment FeedStories_feed on Feed\n      @argumentDefinitions(\n        count: {type: "Int", defaultValue: 10}\n      ) {\n        stories(first: $count) {\n          edges {\n            node {\n              id\n              ...Story_story\n            }\n          }\n        }\n      }\n    `\n  },\n  graphql`\n    # Refetch query to be fetched upon calling `refetch`.\n    # Notice that we re-use our fragment and the shape of this query matches our fragment spec.\n    query FeedStoriesRefetchQuery($count: Int) {\n      feed {\n        ...FeedStories_feed @arguments(count: $count)\n      }\n    }\n  `,\n);\n')))}d.isMDXComponent=!0}}]);