(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/std-menus/list"],{3171:function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return u}));var u={unicloudDb:function(){return Promise.all([e.e("common/vendor"),e.e("node-modules/@dcloudio/uni-cli-shared/components/unicloud-db")]).then(e.bind(null,"960d"))},uniList:function(){return e.e("uni_modules/uni-list/components/uni-list/uni-list").then(e.bind(null,"1095"))},uniListItem:function(){return e.e("uni_modules/uni-list/components/uni-list-item/uni-list-item").then(e.bind(null,"5c38"))},uniLoadMore:function(){return e.e("uni_modules/uni-load-more/components/uni-load-more/uni-load-more").then(e.bind(null,"b2a2"))}},o=function(){var n=this,t=n.$createElement;n._self._c},i=[]},3889:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{loadMore:{contentdown:"",contentrefresh:"",contentnomore:""}}},onPullDownRefresh:function(){this.$refs.udb.loadData({clear:!0},(function(){n.stopPullDownRefresh()}))},onReachBottom:function(){this.$refs.udb.loadMore()},methods:{handleItemClick:function(t){n.navigateTo({url:"./detail?id="+t})},fabClick:function(){var t=this;n.navigateTo({url:"./add",events:{refreshData:function(){t.$refs.udb.loadData({clear:!0})}}})}}};t.default=e}).call(this,e("543d")["default"])},9783:function(n,t,e){"use strict";e.r(t);var u=e("3171"),o=e("a5e6");for(var i in o)"default"!==i&&function(n){e.d(t,n,(function(){return o[n]}))}(i);var l,r=e("f0c5"),a=Object(r["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],l);t["default"]=a.exports},a5e6:function(n,t,e){"use strict";e.r(t);var u=e("3889"),o=e.n(u);for(var i in u)"default"!==i&&function(n){e.d(t,n,(function(){return u[n]}))}(i);t["default"]=o.a},d4e5:function(n,t,e){"use strict";(function(n){e("11a7");u(e("66fd"));var t=u(e("9783"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])}},[["d4e5","common/runtime","common/vendor"]]]);