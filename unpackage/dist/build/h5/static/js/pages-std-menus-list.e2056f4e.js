(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-std-menus-list"],{9783:function(t,n,e){"use strict";e.r(n);var a=e("a7d9"),i=e("a5e6");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);var u,r=e("f0c5"),l=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"5eb70006",null,!1,a["a"],u);n["default"]=l.exports},a5e6:function(t,n,e){"use strict";e.r(n);var a=e("ce83"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},a7d9:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var a={unicloudDb:e("960d").default,uniList:e("1095").default,uniListItem:e("5c38").default,uniLoadMore:e("b2a2").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"container"},[e("unicloud-db",{ref:"udb",attrs:{collection:"std-menus",field:""},scopedSlots:t._u([{key:"default",fn:function(n){var a=n.data,i=(n.pagination,n.loading),o=n.hasMore,u=n.error;return[u?e("v-uni-view",[t._v(t._s(u.message))]):a?e("v-uni-view",[e("uni-list",t._l(a,(function(n,a){return e("uni-list-item",{key:a,attrs:{showArrow:!0,clickable:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleItemClick(n._id)}}},[e("v-uni-view",{attrs:{slot:"body"},slot:"body"},[t._v(t._s(n._id))])],1)})),1)],1):t._e(),e("uni-load-more",{attrs:{status:i?"loading":o?"more":"noMore"}})]}}])}),e("uni-fab",{ref:"fab",attrs:{horizontal:"right",vertical:"bottom","pop-menu":!1},on:{fabClick:function(n){arguments[0]=n=t.$handleEvent(n),t.fabClick.apply(void 0,arguments)}}})],1)},o=[]},ce83:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{loadMore:{contentdown:"",contentrefresh:"",contentnomore:""}}},onPullDownRefresh:function(){this.$refs.udb.loadData({clear:!0},(function(){uni.stopPullDownRefresh()}))},onReachBottom:function(){this.$refs.udb.loadMore()},methods:{handleItemClick:function(t){uni.navigateTo({url:"./detail?id="+t})},fabClick:function(){var t=this;uni.navigateTo({url:"./add",events:{refreshData:function(){t.$refs.udb.loadData({clear:!0})}}})}}};n.default=a}}]);