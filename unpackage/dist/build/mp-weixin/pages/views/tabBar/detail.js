(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/views/tabBar/detail"],{"098f":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("6bcf"),o=a(e("5b8d"));function a(t){return t&&t.__esModule?t:{default:t}}getApp();var u={data:function(){return{info:{},id:"",content:""}},components:{},props:{},onLoad:function(t){this.id=t.id,this.getDetail()},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:this.info.article_info.title,imageUrl:this.info.article_info.cover_image?this.info.article_info.cover_image:"",path:"/pages/views/tabBar/detail?id="+this.info.article_info.article_id}},methods:{getDetail:function(){var n=this;setTimeout((function(){n.info=i.details.data,n.content=(0,o.default)(n.info.article_info.mark_content),t.setNavigationBarTitle({title:n.info.article_info.title})}),1e3)}}};n.default=u}).call(this,e("543d")["default"])},1619:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var i={uParse:function(){return Promise.all([e.e("common/vendor"),e.e("uview-ui/components/u-parse/u-parse")]).then(e.bind(null,"1c44"))}},o=function(){var t=this,n=t.$createElement;t._self._c},a=[]},"209f":function(t,n,e){"use strict";e.r(n);var i=e("098f"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},"6a6f":function(t,n,e){"use strict";(function(t){e("11a7");i(e("66fd"));var n=i(e("99ec"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"99ec":function(t,n,e){"use strict";e.r(n);var i=e("1619"),o=e("209f");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("b7ca");var u,c=e("f0c5"),f=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"eda0802c",null,!1,i["a"],u);n["default"]=f.exports},b7ca:function(t,n,e){"use strict";var i=e("d7f5"),o=e.n(i);o.a},d7f5:function(t,n,e){}},[["6a6f","common/runtime","common/vendor"]]]);