(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{290:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Articles"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"articles"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"category"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:125}};n.loc.source={body:"query Articles {  \n  articles {\n    id\n    title\n    content\n    image {\n      url\n    }\n    category{\n      name\n    }\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};var r={};function c(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;!function e(t,n){if("FragmentSpread"===t.kind)n.add(t.name.value);else if("VariableDefinition"===t.kind){var r=t.type;"NamedType"===r.kind&&n.add(r.name.value)}t.selectionSet&&t.selectionSet.selections.forEach((function(t){e(t,n)})),t.variableDefinitions&&t.variableDefinitions.forEach((function(t){e(t,n)})),t.definitions&&t.definitions.forEach((function(t){e(t,n)}))}(e,t),r[e.name.value]=t}})),e.exports=n,e.exports.Articles=function(e,t){var n={kind:e.kind,definitions:[c(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var l=r[t]||new Set,d=new Set,o=new Set;for(l.forEach((function(e){o.add(e)}));o.size>0;){var v=o;o=new Set,v.forEach((function(e){d.has(e)||(d.add(e),(r[e]||new Set).forEach((function(e){o.add(e)})))}))}return d.forEach((function(t){var r=c(e,t);r&&n.definitions.push(r)})),n}(n,"Articles")},291:function(e,t,n){"use strict";n(290);var r={data:function(){return{api_url:"http://localhost:1337"}},props:{articles:Array},computed:{leftArticlesCount:function(){return Math.ceil(this.articles.length/5)},leftArticles:function(){return this.articles.slice(0,this.leftArticlesCount)},rightArticles:function(){return this.articles.slice(this.leftArticlesCount,this.articles.length)}}},c=n(30),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"uk-child-width-1-2",attrs:{"uk-grid":""}},[n("div",e._l(e.leftArticles,(function(article){return n("router-link",{key:article.id,staticClass:"uk-link-reset",attrs:{to:{name:"articles-id",params:{id:article.id}}}},[n("div",{staticClass:"uk-card uk-card-muted"},[article.image?n("div",{staticClass:"uk-card-media-top"},[n("img",{attrs:{src:e.api_url+article.image.url,alt:"",height:"100"}})]):e._e(),e._v(" "),n("div",{staticClass:"uk-card-body"},[article.category?n("p",{staticClass:"uk-text-uppercase",attrs:{id:"category"}},[e._v(e._s(article.category.name))]):e._e(),e._v(" "),n("p",{staticClass:"uk-text-large",attrs:{id:"title"}},[e._v(e._s(article.title))])])])])})),1),e._v(" "),n("div",[n("div",{staticClass:"uk-child-width-1-2@m uk-grid-match",attrs:{"uk-grid":""}},e._l(e.rightArticles,(function(article){return n("router-link",{key:article.id,staticClass:"uk-link-reset",attrs:{to:{name:"articles-id",params:{id:article.id}}}},[n("div",{staticClass:"uk-card uk-card-muted"},[article.image?n("div",{staticClass:"uk-card-media-top"},[n("img",{attrs:{src:e.api_url+article.image.url,alt:"",height:"100"}})]):e._e(),e._v(" "),n("div",{staticClass:"uk-card-body"},[article.category?n("p",{staticClass:"uk-text-uppercase",attrs:{id:"category"}},[e._v(e._s(article.category.name))]):e._e(),e._v(" "),n("p",{staticClass:"uk-text-large",attrs:{id:"title"}},[e._v(e._s(article.title))])])])])})),1)])])])}),[],!1,null,null,null);t.a=component.exports},424:function(e,t,n){"use strict";n.r(t);var r=n(290),c=n.n(r),l={data:function(){return{articles:[]}},components:{Articles:n(291).a},apollo:{articles:{prefetch:!0,query:c.a,variables:function(){return{id:parseInt(this.$route.params.id)}}}}},d=n(30),component=Object(d.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"uk-section"},[t("div",{staticClass:"uk-container uk-container-large"},[t("h1",[this._v("Vue Graphql CMS")]),this._v(" "),t("Articles",{attrs:{articles:this.articles}})],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);