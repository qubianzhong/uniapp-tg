(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-views-tabBar-user"],{"016b":function(t,e,a){"use strict";var i=a("6763"),n=a.n(i);n.a},"0c8f":function(t,e,a){"use strict";a.r(e);var i=a("2216"),n=a("c85e");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("1d53");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"d4a15934",null,!1,i["a"],r);e["default"]=c.exports},"0fe2":function(t,e,a){"use strict";a.r(e);var i=a("8ab6"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"0ff2":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("da77"),o=i(a("0c8f")),r=i(a("4195")),s=getApp(),c={data:function(){return{colors:"",startY:0,moving:!1,coverTransform:"translateY(0px)",coverTransition:"0s",logList:[{name:"真巧 巧克力涂层甜甜圈 早餐蛋糕手撕面包休闲小零食办公室小吃零嘴下午茶点心 500g甜甜圈（拉花款）",img:"/static/images/goods/one.jpg"},{name:"巧妈妈 鸡蛋布甸 下午茶休闲零食儿童果冻布丁125g双层果酱味smzdm 4杯鸡蛋布甸（双层）",img:"/static/images/goods/four.jpg"}],serverList:[{name:"分享",icon:"icon-fenxiang1",url:"/pages/views/user/extension",id:7,elseUrl:""},{name:"联系我们",icon:"icon-kefu1",url:"",id:8,elseUrl:""},{name:"设置",icon:"icon-shezhi2",url:"../setting/index",id:9,elseUrl:""}],oldcolor:"",userdata:{}}},components:{listCell:o.default,myServer:r.default},props:{},onLoad:function(t){},onReady:function(){},onShow:function(){var t=s.globalData.newColor,e=this.colors,a=(0,n.getUserInfo)()||{};if(this.setData({colors:t,userdata:a}),uni.setNavigationBarColor({backgroundColor:s.globalData.newColor,frontColor:"#ffffff"}),e!==t){var i=(0,n.getConfig)(),o=i.tabList;if(uni.setTabBarStyle({selectedColor:t}),o)for(var r=0;r<o.length;r++){var c=o[r];uni.setTabBarItem({index:r,selectedIconPath:c})}}},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{onLogin:function(){(0,n.getToken)();(0,n.getToken)()||uni.navigateTo({url:"../../login/login"})},coverTouchStart:function(t){this.setData({startY:t.touches[0].clientY,coverTransition:"transform .2s linear"})},moveHandle:function(){},coverTouchMove:function(t){var e=t.touches[0].clientY,a=this.startY,i=e-a;i<0?this.setData({moving:!1}):(this.setData({moving:!0}),i>=60&&(i=60),i>0&&i<=60&&this.setData({coverTransform:"translateY(".concat(i,"px)")}))},coverTouchEnd:function(t){0!=this.moving&&this.setData({coverTransform:"translateY(0px)",moving:!1,coverTransition:"transform 0.3s cubic-bezier(.21,1.93,.53,.64)"})}}};e.default=c},"1cd2":function(t,e,a){"use strict";var i=a("333c"),n=a.n(i);n.a},"1d53":function(t,e,a){"use strict";var i=a("af4c"),n=a.n(i);n.a},2216:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"top_nav",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jumpNext.apply(void 0,arguments)}}},[a("v-uni-text",{class:"iconfont "+t.icons+" icon",style:"color:"+t.colors}),a("v-uni-text",{staticClass:"name"},[t._t("default")],2),1==t.rightshow?a("v-uni-image",{staticClass:"right_icon",attrs:{src:"/static/images/home/right.png"}}):t._e()],1)},o=[]},"333c":function(t,e,a){var i=a("6b0c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("5b22dad7",i,!0,{sourceMap:!1,shadowMode:!1})},4195:function(t,e,a){"use strict";a.r(e);var i=a("b279"),n=a("0fe2");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("1cd2");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"ba0ee5f2",null,!1,i["a"],r);e["default"]=c.exports},"4b81":function(t,e,a){"use strict";a.r(e);var i=a("c435"),n=a("f013");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("016b");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"fa27a236",null,!1,i["a"],r);e["default"]=c.exports},6763:function(t,e,a){var i=a("ceac");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("2f2aae3c",i,!0,{sourceMap:!1,shadowMode:!1})},"6b0c":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 我的服务 */.my_server[data-v-ba0ee5f2]{background-color:#fff;margin-bottom:%?20?%}.server_box[data-v-ba0ee5f2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding-bottom:%?30?%}.server_box[data-v-ba0ee5f2]::after{width:25%;content:"";border:1px solid transparent}.server_list[data-v-ba0ee5f2]{max-width:25%;min-width:25%;text-align:center;margin-top:%?30?%;position:relative}.server_list[data-v-ba0ee5f2]:active{opacity:.8}.server_list uni-text[data-v-ba0ee5f2]{font-size:%?56?%;line-height:%?60?%;display:inline-block}.server_text[data-v-ba0ee5f2]{font-size:%?24?%;color:#3c3c3c;margin-top:%?15?%}.contact-btn[data-v-ba0ee5f2]{top:0;left:0;display:inline-block;position:absolute;width:100%;background:salmon;opacity:0}',""]),t.exports=e},"8ab6":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("0c8f")),o={data:function(){return{}},components:{listCell:n.default},props:{serverList:{type:Array},colors:{type:String},titles:{type:String,default:"我的服务"},icons:{type:String,default:"icon-fuwu"}},methods:{jumpLink:function(t){""!=t.url&&uni.navigateTo({url:t.url})}}};e.default=o},"8b90":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},components:{},props:{icons:{type:String},linkUrl:{type:String},colors:{type:String},rightshow:{type:Boolean,default:!0}},methods:{jumpNext:function(){console.log(this.linkUrl),this.linkUrl&&""!==this.linkUrl&&uni.navigateTo({url:this.linkUrl})}}};e.default=i},9042:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.top_nav[data-v-d4a15934]{line-height:%?60?%;padding:%?20?% %?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;position:relative}.top_nav[data-v-d4a15934]::after{position:absolute;left:%?30?%;right:0;height:0;content:"";bottom:0;-webkit-transform:scaleY(.5);transform:scaleY(.5);border-bottom:1px solid #e4e7ed}.top_nav[data-v-d4a15934]:active{background-color:#fafafa}.top_nav .icon[data-v-d4a15934]{-webkit-align-self:center;align-self:center;width:%?56?%;max-height:%?60?%;font-size:%?38?%}.top_nav .name[data-v-d4a15934]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#303133}.top_nav .right_icon[data-v-d4a15934]{float:right;width:%?40?%;height:%?40?%;-webkit-align-self:center;align-self:center}',""]),t.exports=e},af4c:function(t,e,a){var i=a("9042");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("8a1e3a88",i,!0,{sourceMap:!1,shadowMode:!1})},b279:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"my_server"},[a("list-cell",{attrs:{icons:"iconfont "+t.icons,colors:t.colors,rightshow:!1}},[t._v(t._s(t.titles))]),a("v-uni-view",{staticClass:"server_box"},t._l(t.serverList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"server_list",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.jumpLink(e)}}},[a("v-uni-view",[a("v-uni-text",{class:"iconfont "+e.icon,style:"color:"+t.colors})],1),a("v-uni-view",{staticClass:"server_text"},[t._v(t._s(e.name))]),8==e.id?a("v-uni-button",{staticClass:"contact-btn",attrs:{"open-type":"contact"}},[t._v("A")]):t._e()],1)})),1)],1)},o=[]},c435:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"userbox"},[i("v-uni-view",{staticClass:"userHeader",style:{background:t.colors}},[i("v-uni-image",{staticClass:"user_bg",attrs:{src:"/static/images/user/user-bg.png"}}),i("v-uni-view",{staticClass:"nav"},[i("v-uni-view",{staticClass:"user",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onLogin.apply(void 0,arguments)}}},[t.userdata.avatarUrl?i("v-uni-image",{attrs:{src:t.userdata.avatarUrl}}):i("v-uni-image",{attrs:{src:a("dc0a")}}),i("v-uni-text",[t._v(t._s(t.userdata.nickName||"登录"))])],1)],1),i("v-uni-view",{staticClass:"vip"},[i("v-uni-image",{staticClass:"vip_bg",attrs:{src:"/static/images/user/vip-card.png"}}),i("v-uni-view",{staticClass:"vipname"},[i("v-uni-text",{staticClass:"iconfont icon-zuanshi zuanshi"}),i("v-uni-text",{staticClass:"names"},[t._v("尊享会员")]),i("v-uni-text",{staticClass:"vip_level"},[t._v("钻石会员")])],1)],1)],1),i("v-uni-view",{staticClass:"userMenu",style:"transform:"+t.coverTransform+";transition:"+t.coverTransition,on:{touchmove:[function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.moveHandle.apply(void 0,arguments)},function(e){arguments[0]=e=t.$handleEvent(e),t.coverTouchMove.apply(void 0,arguments)}],touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.coverTouchStart.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.coverTouchEnd.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"arc",attrs:{src:"/static/images/user/arc.png"}})],1),i("v-uni-view",{staticClass:"place"},[i("my-server",{attrs:{serverList:t.serverList,colors:t.colors}})],1)],1)},o=[]},c85e:function(t,e,a){"use strict";a.r(e);var i=a("8b90"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},ceac:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";.userHeader[data-v-fa27a236]{height:%?520?%;width:100vw;position:relative;padding:%?50?% 4%}.userHeader .user_bg[data-v-fa27a236]{height:100%;width:100%;display:block;position:absolute;top:0;left:0}.userHeader .nav[data-v-fa27a236]{height:%?180?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.user[data-v-fa27a236]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;z-index:200}.user uni-image[data-v-fa27a236]{width:%?130?%;height:%?130?%;border:%?5?% solid #fff;border-radius:50%}.user uni-text[data-v-fa27a236]{font-size:%?38?%;color:#fff;margin-left:%?20?%}.vip[data-v-fa27a236]{height:%?240?%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?% %?24?%;border-radius:%?16?% %?16?% 0 0;width:100%;overflow:hidden}.banquan[data-v-fa27a236]{position:absolute;color:#f6e5a3;top:%?100?%;left:%?24?%;font-size:%?24?%}.vip .vip_bg[data-v-fa27a236]{width:100%;height:100%;position:absolute;top:0;left:0}.vipname[data-v-fa27a236]{z-index:5;display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:%?60?%;position:relative;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.vipname .zuanshi[data-v-fa27a236]{color:#f6e5a3;font-size:%?42?%;line-height:%?60?%}.vipname .names[data-v-fa27a236]{color:#f6e5a3;line-height:%?20?%;font-size:%?24?%;margin-left:%?20?%}.vip_level[data-v-fa27a236]{width:%?115?%;height:%?35?%;text-align:center;line-height:%?35?%;font-size:%?20?%;color:#333;background:-webkit-linear-gradient(right,#f9e6af,#ffd465);background:linear-gradient(270deg,#f9e6af,#ffd465);border-radius:%?20?%;position:absolute;top:%?12?%;right:%?10?%}\n/* 中间菜单栏 */.userMenu[data-v-fa27a236]{margin-top:%?-178?%;padding:0 4%;position:relative;background-color:#f8f8f8;padding-bottom:%?10?%}.userMenu .arc[data-v-fa27a236]{width:100%;height:%?36?%;position:absolute;top:%?-34?%;left:0}.place[data-v-fa27a236]{padding:0 4%;position:relative;background-color:#f8f8f8;padding-bottom:%?40?%}',""]),t.exports=e},dc0a:function(t,e,a){t.exports=a.p+"static/img/face.f823a5f4.jpg"},f013:function(t,e,a){"use strict";a.r(e);var i=a("0ff2"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a}}]);