(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/views/home/tags"],{"18ca":function(t,e,n){"use strict";(function(t){n("11a7");a(n("66fd"));var e=a(n("351a"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"20d0":function(t,e,n){"use strict";var a=n("a22e"),i=n.n(a);i.a},"351a":function(t,e,n){"use strict";n.r(e);var a=n("ddec"),i=n("a476");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("20d0");var s,o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"67023fb6",null,!1,a["a"],s);e["default"]=u.exports},a22e:function(t,e,n){},a476:function(t,e,n){"use strict";n.r(e);var a=n("b34e"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},b34e:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("f77b"),i={data:function(){return{list:[{name:"搜索",cate_id:"1",tags:[],list:[],current:0,isInitTag:!1,loadStatus:"loadmore",cursor:"0"}],current:0,swiperCurrent:0,tabsHeight:0,dx:0,show:!0,tagId:"",loadStatus:["loadmore","loadmore","loadmore","loadmore"]}},onLoad:function(e){this.tagId=e.tagId,this.getList(),t.setNavigationBarTitle({title:e.tagName})},methods:{detail:function(e){t.navigateTo({url:"/pages/views/tabBar/detail?id="+e})},reachBottom:function(){this.getList()},getList:function(t){this.show=!0,0==this.current&&this.getAllFeed(t)},getAllFeed:function(t){var e=this;"nomore"!=e.list[0].loadStatus&&(e.list[0].loadStatus="loading",setTimeout((function(){e.list[0].loadStatus=a.tag.has_more?"loadmore":"nomore",e.list[0].cursor=a.tag.cursor;for(var t=[],n=0;n<a.tag.data.length;n++)t.push({result_type:2,result_model:a.tag.data[n]});e.list[e.current].list=e.list[e.current].list.concat(t)})))},change:function(t){var e=this;this.swiperCurrent=t,setTimeout((function(){e.getCate(t),e.list[t].list.length<=0&&e.getList()}),1200)},changeTag:function(t){this.list[this.current].current=t,this.list[this.current].list=[],this.list[this.current].loadStatus="loadmore",this.getList()},transition:function(t){var e=t.detail.dx;this.$refs.tabs.setDx(e)},animationfinish:function(t){var e=t.detail.current;this.$refs.tabs.setFinishCurrent(e),this.swiperCurrent=e,this.current=e}}};e.default=i}).call(this,n("543d")["default"])},ddec:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uLoadmore:function(){return n.e("uview-ui/components/u-loadmore/u-loadmore").then(n.bind(null,"8c9e"))}},i=function(){var t=this,e=t.$createElement;t._self._c},r=[]}},[["18ca","common/runtime","common/vendor"]]]);