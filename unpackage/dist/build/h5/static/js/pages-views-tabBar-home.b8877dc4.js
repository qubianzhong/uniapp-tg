(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-views-tabBar-home"],{"0864":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-badge",props:{type:{type:String,default:"error"},size:{type:String,default:"default"},isDot:{type:Boolean,default:!1},count:{type:[Number,String]},overflowCount:{type:Number,default:99},showZero:{type:Boolean,default:!1},offset:{type:Array,default:function(){return[20,20]}},absolute:{type:Boolean,default:!0},fontSize:{type:[String,Number],default:"24"},color:{type:String,default:"#ffffff"},bgColor:{type:String,default:""},isCenter:{type:Boolean,default:!1}},computed:{boxStyle:function(){var t={};return this.isCenter?(t.top=0,t.right=0,t.transform="translateY(-50%) translateX(50%)"):(t.top=this.offset[0]+"rpx",t.right=this.offset[1]+"rpx",t.transform="translateY(0) translateX(0)"),"mini"==this.size&&(t.transform=t.transform+" scale(0.8)"),t},showText:function(){return this.isDot?"":this.count>this.overflowCount?"".concat(this.overflowCount,"+"):this.count},show:function(){return 0!=this.count||0!=this.showZero}}};e.default=n},1542:function(t,e,i){"use strict";var n=i("4ea4");i("d81d"),i("a9e3"),i("d3b7"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("1da1")),o=n(i("66b4")),r=o.default,s=uni.getSystemInfoSync(),c=s.windowWidth,l="UEl_",u={name:"u-tabs-swiper",props:{isScroll:{type:Boolean,default:!0},list:{type:Array,default:function(){return[]}},current:{type:[Number,String],default:0},height:{type:[Number,String],default:80},fontSize:{type:[Number,String],default:30},swiperWidth:{type:[String,Number],default:750},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#303133"},barWidth:{type:[Number,String],default:40},barHeight:{type:[Number,String],default:6},gutter:{type:[Number,String],default:40},zIndex:{type:[Number,String],default:1},bgColor:{type:String,default:"#ffffff"},autoCenterMode:{type:String,default:"window"},name:{type:String,default:"name"},count:{type:String,default:"count"},offset:{type:Array,default:function(){return[5,20]}},bold:{type:Boolean,default:!0},activeItemStyle:{type:Object,default:function(){return{}}},showBar:{type:Boolean,default:!0},barStyle:{type:Object,default:function(){return{}}}},data:function(){return{scrollLeft:0,tabQueryInfo:[],windowWidth:0,animationFinishCurrent:this.current,componentsWidth:0,line3AddDx:0,line3Dx:0,preId:l,sW:0,tabsInfo:[],colorGradientArr:[],colorStep:100}},computed:{getCurrent:function(){var t=Number(this.current);return t>this.getTabs.length-1?this.getTabs.length-1:t<0?0:t},getTabs:function(){return this.list},scrollBarLeft:function(){return Number(this.line3Dx)+Number(this.line3AddDx)},barWidthPx:function(){return uni.upx2px(this.barWidth)},tabItemStyle:function(){var t=this;return function(e){var i={height:t.height+"rpx",lineHeight:t.height+"rpx",padding:"0 ".concat(t.gutter/2,"rpx"),color:t.tabsInfo.length>0?t.tabsInfo[e]?t.tabsInfo[e].color:t.activeColor:t.inactiveColor,fontSize:t.fontSize+"rpx",zIndex:t.zIndex+2,fontWeight:e==t.getCurrent&&t.bold?"bold":"normal"};return e==t.getCurrent&&(i=Object.assign(i,t.activeItemStyle)),i}},tabBarStyle:function(){var t={width:this.barWidthPx+"px",height:this.barHeight+"rpx",borderRadius:"100px",backgroundColor:this.activeColor,left:this.scrollBarLeft+"px"};return Object.assign(t,this.barStyle)}},watch:{current:function(t,e){this.change(t),this.setFinishCurrent(t)},list:function(){var t=this;this.$nextTick((function(){t.init()}))}},mounted:function(){this.init()},methods:{init:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.countPx(),e.next=3,t.getTabsInfo();case 3:t.countLine3Dx(),t.getQuery((function(){t.setScrollViewToCenter()})),t.colorGradientArr=r.colorGradient(t.inactiveColor,t.activeColor,t.colorStep);case 6:case"end":return e.stop()}}),e)})))()},getTabsInfo:function(){var t=this;return new Promise((function(e,i){for(var n=uni.createSelectorQuery().in(t),a=0;a<t.list.length;a++)n.select("."+l+a).boundingClientRect();n.exec((function(i){for(var n=[],a=0;a<i.length;a++)i[a].color=t.inactiveColor,a==t.getCurrent&&(i[a].color=t.activeColor),n.push(i[a]);t.tabsInfo=n,e()}))}))},countLine3Dx:function(){var t=this.tabsInfo[this.animationFinishCurrent];t&&(this.line3Dx=t.left+t.width/2-this.barWidthPx/2-this.tabsInfo[0].left)},countPx:function(){this.sW=uni.upx2px(Number(this.swiperWidth))},emit:function(t){this.$emit("change",t)},change:function(){this.setScrollViewToCenter()},getQuery:function(t){var e=this;try{var i=uni.createSelectorQuery().in(this).select(".u-tabs");i.fields({size:!0},(function(i){i?(e.componentsWidth=i.width,t&&"function"===typeof t&&t(i)):e.getQuery(t)})).exec()}catch(n){this.componentsWidth=c}},setScrollViewToCenter:function(){var t;if(t=this.tabsInfo[this.animationFinishCurrent],t){var e,i=t.left+t.width/2;e="window"===this.autoCenterMode?c:this.componentsWidth,this.scrollLeft=i-e/2}},setDx:function(t){var e=t>0?this.animationFinishCurrent+1:this.animationFinishCurrent-1;e=e<=0?0:e,e=e>=this.list.length?this.list.length-1:e;this.tabsInfo[e];var i=this.tabsInfo[this.animationFinishCurrent],n=i.left+i.width/2,a=this.tabsInfo[e],o=a.left+a.width/2,r=Math.abs(o-n);this.line3AddDx=t/this.sW*r,this.setTabColor(this.animationFinishCurrent,e,t)},setTabColor:function(t,e,i){var n=Math.abs(Math.ceil(i/this.sW*100)),a=this.colorGradientArr.length;n=n>=a?a-1:n<=0?0:n,this.tabsInfo[e].color=this.colorGradientArr[n],this.tabsInfo[t].color=this.colorGradientArr[a-1-n]},setFinishCurrent:function(t){var e=this;this.tabsInfo.map((function(i,n){return i.color=t==n?e.activeColor:e.inactiveColor,i})),this.line3AddDx=0,this.animationFinishCurrent=t,this.countLine3Dx()}}};e.default=u},1925:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".u-search[data-v-13f672b9]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-content[data-v-13f672b9]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?18?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-clear-icon[data-v-13f672b9]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-input[data-v-13f672b9]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;line-height:1;margin:0 %?10?%;color:#909399}.u-close-wrap[data-v-13f672b9]{width:%?40?%;height:100%;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:50%}.u-placeholder-class[data-v-13f672b9]{color:#909399}.u-action[data-v-13f672b9]{font-size:%?28?%;color:#303133;width:0;overflow:hidden;-webkit-transition:all .3s;transition:all .3s;white-space:nowrap;text-align:center}.u-action-active[data-v-13f672b9]{width:%?80?%;margin-left:%?10?%}",""]),t.exports=e},"1eab":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-search",props:{shape:{type:String,default:"round"},bgColor:{type:String,default:"#f2f2f2"},placeholder:{type:String,default:"请输入关键字"},clearabled:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},showAction:{type:Boolean,default:!0},actionStyle:{type:Object,default:function(){return{}}},actionText:{type:String,default:"搜索"},inputAlign:{type:String,default:"left"},disabled:{type:Boolean,default:!1},animation:{type:Boolean,default:!1},borderColor:{type:String,default:"none"},value:{type:String,default:""},height:{type:[Number,String],default:64},inputStyle:{type:Object,default:function(){return{}}},maxlength:{type:[Number,String],default:"-1"},searchIconColor:{type:String,default:""},color:{type:String,default:"#606266"},placeholderColor:{type:String,default:"#909399"},margin:{type:String,default:"0"},searchIcon:{type:String,default:"search"}},data:function(){return{keyword:"",showClear:!1,show:!1,focused:this.focus}},watch:{keyword:function(t){this.$emit("input",t),this.$emit("change",t)},value:{immediate:!0,handler:function(t){this.keyword=t}}},computed:{showActionBtn:function(){return!(this.animation||!this.showAction)},borderStyle:function(){return this.borderColor?"1px solid ".concat(this.borderColor):"none"}},methods:{inputChange:function(t){this.keyword=t.detail.value},clear:function(){var t=this;this.keyword="",this.$nextTick((function(){t.$emit("clear")}))},search:function(t){this.$emit("search",t.detail.value);try{uni.hideKeyboard()}catch(t){}},custom:function(){this.$emit("custom",this.keyword);try{uni.hideKeyboard()}catch(t){}},getFocus:function(){this.focused=!0,this.animation&&this.showAction&&(this.show=!0),this.$emit("focus",this.keyword)},blur:function(){var t=this;setTimeout((function(){t.focused=!1}),100),this.show=!1,this.$emit("blur",this.keyword)},clickHandler:function(){this.disabled&&this.$emit("click")}}};e.default=n},"316c":function(t,e,i){var n=i("55d2");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("429d4be1",n,!0,{sourceMap:!1,shadowMode:!1})},4590:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uBadge:i("d1fb").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-tabs",style:{zIndex:t.zIndex,background:t.bgColor}},[i("v-uni-scroll-view",{staticClass:"u-scroll-view",style:{zIndex:t.zIndex+1},attrs:{"scroll-x":!0,"scroll-left":t.scrollLeft,"scroll-with-animation":!0}},[i("v-uni-view",{staticClass:"u-tabs-scroll-box",class:{"u-tabs-scorll-flex":!t.isScroll}},[t._l(t.getTabs,(function(e,n){return i("v-uni-view",{key:n,staticClass:"u-tabs-item",class:[t.preId+n],style:[t.tabItemStyle(n)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.emit(n)}}},[i("u-badge",{attrs:{count:e[t.count]||e["count"]||0,offset:t.offset,size:"mini"}}),t._v(t._s(e[t.name]||e["name"]))],1)})),t.showBar?i("v-uni-view",{staticClass:"u-scroll-bar",style:[t.tabBarStyle]}):t._e()],2)],1)],1)},o=[]},"53bd":function(t,e,i){"use strict";t.exports={BASE_STATICP_URL:"https://cloud1-5giwac10c58ce5d6-1306455490.tcloudbaseapp.com/unionapp-tg"}},"55d2":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-view[data-v-22451ccc],\nuni-scroll-view[data-v-22451ccc]{box-sizing:border-box}.u-tabs[data-v-22451ccc]{width:100%;-webkit-transition-property:background-color,color;transition-property:background-color,color}[data-v-22451ccc]::-webkit-scrollbar,[data-v-22451ccc]::-webkit-scrollbar,[data-v-22451ccc]::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}uni-scroll-view[data-v-22451ccc]  ::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}.u-scroll-view[data-v-22451ccc]{width:100%;white-space:nowrap;position:relative}.u-tabs-scroll-box[data-v-22451ccc]{position:relative}.u-tabs-scorll-flex[data-v-22451ccc]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.u-tabs-scorll-flex .u-tabs-item[data-v-22451ccc]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-tabs-item[data-v-22451ccc]{position:relative;display:inline-block;text-align:center;-webkit-transition-property:background-color,color,font-weight;transition-property:background-color,color,font-weight}.content[data-v-22451ccc]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.boxStyle[data-v-22451ccc]{pointer-events:none;position:absolute;-webkit-transition-property:all;transition-property:all}.boxStyle2[data-v-22451ccc]{pointer-events:none;position:absolute;bottom:0;-webkit-transition-property:all;transition-property:all;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.itemBackgroundBox[data-v-22451ccc]{pointer-events:none;position:absolute;top:0;-webkit-transition-property:left,background-color;transition-property:left,background-color;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\nflex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.itemBackground[data-v-22451ccc]{height:100%;width:100%;-webkit-transition-property:all;transition-property:all}.u-scroll-bar[data-v-22451ccc]{position:absolute;bottom:%?4?%}",""]),t.exports=e},"55ef":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"u-badge",class:[t.isDot?"u-badge-dot":"","mini"==t.size?"u-badge-mini":"",t.type?"u-badge--bg--"+t.type:""],style:[{top:t.offset[0]+"rpx",right:t.offset[1]+"rpx",fontSize:t.fontSize+"rpx",position:t.absolute?"absolute":"static",color:t.color,backgroundColor:t.bgColor},t.boxStyle]},[t._v(t._s(t.showText))]):t._e()},o=[]},"57a9":function(t,e,i){"use strict";var n=i("bd9e"),a=i.n(n);a.a},"6c77":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.articles=e.recomments=e.tags=void 0;var n=i("53bd"),a=n.BASE_STATICP_URL,o={err_no:0,err_msg:"success",data:[{id:2546527,tag_id:"6809640408797167623",tag_name:"模型",color:"#C679FF",icon:"https://lc-gold-cdn.xitu.io/d83da9d012ddb7ae85f4.png",back_ground:"",show_navi:1,ctime:1435971556,mtime:1620962698,id_type:9,tag_alias:"",post_article_count:44008,concern_user_count:409486},{id:2546553,tag_id:"6809640445233070094",tag_name:"方法",color:"#DD2C2A",icon:"https://lc-gold-cdn.xitu.io/f8ee3cd45f949a546263.png",back_ground:"",show_navi:0,ctime:1436156295,mtime:1620962624,id_type:9,tag_alias:"",post_article_count:65143,concern_user_count:283698},{id:2546494,tag_id:"6809640364677267469",tag_name:"其他",color:"#64D7E3",icon:"https://lc-gold-cdn.xitu.io/1aae38ab22d12b654cfa.png",back_ground:"",show_navi:0,ctime:1432234497,mtime:1620952912,id_type:9,tag_alias:"",post_article_count:8253,concern_user_count:81923}]};e.tags=o;var r={err_no:0,err_msg:"success",data:[{item_type:2,item_info:{article_id:"6961724298243342344",article_info:{article_id:"6961724298243342344",user_id:"1820446985555544",category_id:"6809637767543259144",tag_ids:[0x5e80b3fb3f800000],visible_level:0,link_url:"",cover_image:a+"/mind/grow.png",is_gfw:0,title:"GROW模型",brief_content:"GROW模型是教练和团队领导用来加强成员能力的工具。教练使用GROW模型辅导被指导者完成自己的目标，团队领导使用GROW模型促进员工成长。",is_english:0,is_original:1,user_index:9.22604465399947,original_type:0,original_author:"",content:"",ctime:"1620902773",mtime:"1620960288",rtime:"1620960288",draft_id:"6961668285800824839",view_count:167,collect_count:7,digg_count:8,comment_count:0,hot_index:14,is_hot:0,rank_index:8.05796324,status:2,verify_status:1,audit_status:2,mark_content:""},author_user_info:{user_id:"1820446985555544",user_name:"TG助手",company:"字节跳动",job_title:"",avatar_large:"https://sf6-ttcdn-tos.pstatp.com/img/user-avatar/21fdaffc8b348ebf9083bbcde714d435~300x300.image",level:3,description:"喜欢写点有深度的技术文章，关注公号不失联：tecvan",followee_count:38,follower_count:168,post_article_count:31,digg_article_count:104,got_digg_count:863,got_view_count:41188,post_shortmsg_count:2,digg_shortmsg_count:1,isfollowed:!1,favorable_author:0,power:1273,study_point:0,university:{university_id:"0",name:"",logo:""},major:{major_id:"0",parent_id:"0",name:""},student_status:0,select_event_count:0,select_online_course_count:0,identity:0,is_select_annual:!1,select_annual_rank:0,annual_list_type:0,extraMap:{}},category:{category_id:"6809637767543259144",category_name:"思维模型",category_url:"frontend",rank:2,ctime:1457483942,mtime:1432503190,show_type:3},tags:[{id:2546614,tag_id:"6809640528267706382",tag_name:"模型",color:"#6F94DB",icon:"https://lc-gold-cdn.xitu.io/73e856b07f83b4231c1e.png",back_ground:"",show_navi:0,ctime:1440920866,mtime:1620963981,id_type:9,tag_alias:"",post_article_count:5966,concern_user_count:199274}],user_interact:{id:0x609d035d4d000000,omitempty:2,user_id:0,is_digg:!1,is_follow:!1,is_collect:!1},org:{org_info:null,org_user:null,is_followed:!1}}}],cursor:"eyJ2IjoiNjk2MTc5MDQ5NDUxNDg3MjMzMyIsImkiOjEwfQ==",count:168238,has_more:!0};e.recomments=r;var s={err_no:0,err_msg:"success",data:[{article_id:"6961323610631831560",article_info:{article_id:"6961323610631831560",user_id:"4459274891961112",category_id:"6809637769959178254",tag_ids:[0x5e80b3df6e804000],visible_level:0,link_url:"",cover_image:a+"/mind/bingshan.png",is_gfw:0,title:"冰山模型",brief_content:"冰山模型分为两部分，一部分是露在表面能够看到 “冰山之上”的部分，基本上体现出“人”的外在特征，不需要深入接触，通过简单观察分析就能识别，例如“人”的知识水平、从业经验、技能水平等；另一部分是深藏起来看不到的“冰山之下”的部分，必须深入接触，通过系统分析才能识别，例如“人”的态度、价值观、自我形象、特质、动机等，“人”的能力素质是指整个冰山，冰山模型决定了“人”的最终行为结果",is_english:0,is_original:1,user_index:5.9139374137187,original_type:0,original_author:"",content:"",ctime:"1620809489",mtime:"1620958587",rtime:"1620958587",draft_id:"6961323403173167111",view_count:416,collect_count:2,digg_count:4,comment_count:0,hot_index:24,is_hot:0,rank_index:7.23937405,status:2,verify_status:1,audit_status:2,mark_content:""},author_user_info:{user_id:"4459274891961112",user_name:"TG助手",company:"公众号: ",job_title:"C/C++工程师",avatar_large:"https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/4fe2a07bff0a20f5ef8571fc3ab65ccd~300x300.image",level:1,description:"擅长C/C++、PostgreSQL数据库、编译原理、数据结构&算法、、TCP/IP",followee_count:0,follower_count:9,post_article_count:6,digg_article_count:5,got_digg_count:18,got_view_count:3670,post_shortmsg_count:0,digg_shortmsg_count:0,isfollowed:!1,favorable_author:0,power:54,study_point:0,university:{university_id:"0",name:"",logo:""},major:{major_id:"0",parent_id:"0",name:""},student_status:0,select_event_count:0,select_online_course_count:0,identity:0,is_select_annual:!1,select_annual_rank:0,annual_list_type:0,extraMap:{}},category:{category_id:"6809637769959178254",category_name:"思维模型",category_url:"backend",rank:1,ctime:1457483880,mtime:1432503193,show_type:3},tags:[{id:2546527,tag_id:"6809640408797167623",tag_name:"模型",color:"#C679FF",icon:"https://lc-gold-cdn.xitu.io/d83da9d012ddb7ae85f4.png",back_ground:"",show_navi:1,ctime:1435971556,mtime:1620964211,id_type:9,tag_alias:"",post_article_count:44009,concern_user_count:409489}],user_interact:{id:0x609b96f0f2400000,omitempty:2,user_id:0,is_digg:!1,is_follow:!1,is_collect:!1},org:{org_info:null,org_user:null,is_followed:!1}},{article_id:"6961978484298088456",article_info:{article_id:"6961978484298088456",user_id:"958429870690413",category_id:"6809637769959178254",tag_ids:[0x5e80b3df6e804000,0x5e80b3d7c4800000],visible_level:0,link_url:"",cover_image:a+"/mind/swot.png",is_gfw:0,title:"SWOT分析模型",brief_content:"先分为内外部两大因素，接着内容从S-优势 (strengths)、W0威胁(weaknesses)进行分析，外部从 O-机会(opportunities)、T-威胁(threats)进行分析",is_english:0,is_original:1,user_index:9.723979226757681,original_type:0,original_author:"",content:"",ctime:"1620961984",mtime:"1620962343",rtime:"1620962343",draft_id:"6961974836239269919",view_count:129,collect_count:2,digg_count:1,comment_count:0,hot_index:6,is_hot:0,rank_index:8.29567866,status:2,verify_status:1,audit_status:2,mark_content:""},author_user_info:{user_id:"958429870690413",user_name:"TG助手",company:"二",job_title:"微信搜",avatar_large:"https://sf6-ttcdn-tos.pstatp.com/img/user-avatar/46a16721efab0a0f50a4347c690a875a~300x300.image",level:5,description:"一枚有趣的程序员",followee_count:37,follower_count:16087,post_article_count:262,digg_article_count:234,got_digg_count:7259,got_view_count:615589,post_shortmsg_count:2,digg_shortmsg_count:90,isfollowed:!1,favorable_author:1,power:13459,study_point:0,university:{university_id:"0",name:"",logo:""},major:{major_id:"0",parent_id:"0",name:""},student_status:0,select_event_count:0,select_online_course_count:0,identity:0,is_select_annual:!1,select_annual_rank:0,annual_list_type:0,extraMap:{}},category:{category_id:"6809637769959178254",category_name:"模型",category_url:"backend",rank:1,ctime:1457483880,mtime:1432503193,show_type:3},tags:[{id:2546527,tag_id:"6809640408797167623",tag_name:"模型",color:"#C679FF",icon:"https://lc-gold-cdn.xitu.io/d83da9d012ddb7ae85f4.png",back_ground:"",show_navi:1,ctime:1435971556,mtime:1620964211,id_type:9,tag_alias:"",post_article_count:44009,concern_user_count:409489},{id:2546502,tag_id:"6809640375880253447",tag_name:"GitHub",color:"#616161",icon:"https://lc-gold-cdn.xitu.io/0d614af263aa63aa6a77.png",back_ground:"",show_navi:0,ctime:1432234558,mtime:1620964308,id_type:9,tag_alias:"",post_article_count:9503,concern_user_count:376313}],user_interact:{id:0x609dea8b9a800000,omitempty:2,user_id:0,is_digg:!1,is_follow:!1,is_collect:!1},org:{org_info:null,org_user:null,is_followed:!1}},{article_id:"6961970769408720909",article_info:{article_id:"6961970769408720909",user_id:"1688479379255687",category_id:"6809637769959178254",tag_ids:[0x5e80b3df6e804000],visible_level:0,link_url:"",cover_image:a+"/mind/jzt.png",is_gfw:0,title:"金字塔原理",brief_content:"逻辑思维的架构就像一个金字塔，最上面的是最重要的东西，一般指的是结果、结论和目标,通过金字塔结构描述搭建思考力架构对解决问题能力的提升非常有益。",is_english:0,is_original:1,user_index:3.627566761566029,original_type:0,original_author:"",content:"",ctime:"1620960251",mtime:"1620961039",rtime:"1620961039",draft_id:"6961970058637803533",view_count:86,collect_count:0,digg_count:2,comment_count:0,hot_index:6,is_hot:0,rank_index:3.69395584,status:2,verify_status:1,audit_status:2,mark_content:""},author_user_info:{user_id:"1688479379255687",user_name:"TG助手",company:"码农架构",job_title:"阿里 / 公众号",avatar_large:"https://sf6-ttcdn-tos.pstatp.com/img/user-avatar/8323548c0f8f375e04ae7ff8e1b866f7~300x300.image",level:2,description:"[公众号：码农架构] 专注于系统架构、高可用、高性能、高并发类技术分享",followee_count:0,follower_count:72,post_article_count:52,digg_article_count:56,got_digg_count:133,got_view_count:9219,post_shortmsg_count:1,digg_shortmsg_count:3,isfollowed:!1,favorable_author:0,power:225,study_point:0,university:{university_id:"0",name:"",logo:""},major:{major_id:"0",parent_id:"0",name:""},student_status:0,select_event_count:0,select_online_course_count:0,identity:0,is_select_annual:!1,select_annual_rank:0,annual_list_type:0,extraMap:{}},category:{category_id:"6809637769959178254",category_name:"模型",category_url:"backend",rank:1,ctime:1457483880,mtime:1432503193,show_type:3},tags:[{id:2546527,tag_id:"6809640408797167623",tag_name:"模型",color:"#C679FF",icon:"https://lc-gold-cdn.xitu.io/d83da9d012ddb7ae85f4.png",back_ground:"",show_navi:1,ctime:1435971556,mtime:1620964211,id_type:9,tag_alias:"",post_article_count:44009,concern_user_count:409489}],user_interact:{id:0x609de38757428000,omitempty:2,user_id:0,is_digg:!1,is_follow:!1,is_collect:!1},org:{org_info:null,org_user:null,is_followed:!1}}],cursor:"eyJ2IjoiNjk2MTMyMzYxMDYzMTgzMTU2MCIsImkiOjEwfQ==",count:53721,has_more:!0};e.articles=s;var c={tags:o,recomments:r,articles:s};e.default=c},"7a77":function(t,e,i){"use strict";var n=i("7d01"),a=i.n(n);a.a},"7d01":function(t,e,i){var n=i("1925");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("bbb453a2",n,!0,{sourceMap:!1,shadowMode:!1})},"8cbd":function(t,e,i){"use strict";i.r(e);var n=i("a716"),a=i("eb44");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("7a77");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"13f672b9",null,!1,n["a"],r);e["default"]=c.exports},"906c":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-29abeb18]{width:100%;height:100%}.wrap[data-v-29abeb18]{position:fixed;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:100%;width:100%}.swiper-box[data-v-29abeb18]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.swiper-item[data-v-29abeb18]{height:100%;background:#f3f3f3}.tags[data-v-29abeb18]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?100?%;width:100%}.tags .tag[data-v-29abeb18]{padding:%?10?% %?20?%;margin-right:%?20?%;background-color:#f3f3f3;border-radius:%?30?%;font-size:%?24?%;white-space:nowrap}.tags .active[data-v-29abeb18]{background-color:#0081ff;color:#fff}.order[data-v-29abeb18]{width:%?710?%;background-color:#fff;margin:%?20?% auto;border-radius:%?20?%;box-sizing:border-box;padding:%?20?%;font-size:%?28?%}.order .top[data-v-29abeb18]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.order .top .left[data-v-29abeb18]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.order .top .left .store[data-v-29abeb18]{margin:0 %?10?%;font-size:%?32?%;font-weight:700}.order .top .right[data-v-29abeb18]{color:#f29100;font-size:%?32?%}.order .item[data-v-29abeb18]{display:-webkit-box;display:-webkit-flex;display:flex;margin:%?20?% 0 0}.order .item .left[data-v-29abeb18]{margin-right:%?20?%}.order .item .left uni-image[data-v-29abeb18]{width:%?200?%;height:%?200?%;border-radius:%?10?%}.order .item .content .title[data-v-29abeb18]{font-size:%?28?%;line-height:%?50?%}.order .item .content .type[data-v-29abeb18]{margin:%?10?% 0;font-size:%?24?%;color:#909399}.order .item .content .delivery-time[data-v-29abeb18]{color:#e5d001;font-size:%?24?%}.order .item .right[data-v-29abeb18]{margin-left:%?10?%;padding-top:%?20?%;text-align:right}.order .item .right .decimal[data-v-29abeb18]{font-size:%?24?%;margin-top:%?4?%}.order .item .right .number[data-v-29abeb18]{color:#909399;font-size:%?24?%}.order .total[data-v-29abeb18]{margin-top:%?20?%;text-align:right;font-size:%?24?%}.order .total .total-price[data-v-29abeb18]{font-size:%?32?%}.order .bottom[data-v-29abeb18]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?40?%;padding:0 %?10?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.order .bottom .btn[data-v-29abeb18]{line-height:%?52?%;width:%?160?%;border-radius:%?26?%;border:%?2?% solid #e4e7ed;font-size:%?26?%;text-align:center;color:#82848a}.order .bottom .evaluate[data-v-29abeb18]{color:#f29100;border-color:#f29100}.centre[data-v-29abeb18]{text-align:center;margin:%?200?% auto;font-size:%?32?%}.centre uni-image[data-v-29abeb18]{width:%?164?%;height:%?164?%;border-radius:50%;margin-bottom:%?20?%}.centre .tips[data-v-29abeb18]{font-size:%?24?%;color:#999;margin-top:%?20?%}.centre .btn[data-v-29abeb18]{margin:%?80?% auto;width:%?200?%;border-radius:%?32?%;line-height:%?64?%;color:#fff;font-size:%?26?%;background:-webkit-linear-gradient(right,#f9745a,#ff9e01);background:linear-gradient(270deg,#f9745a,#ff9e01)}",""]),t.exports=e},"9a97":function(t,e,i){"use strict";var n=i("316c"),a=i.n(n);a.a},a716:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uIcon:i("c602").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-search",style:{margin:t.margin},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-content",style:{backgroundColor:t.bgColor,borderRadius:"round"==t.shape?"100rpx":"10rpx",border:t.borderStyle,height:t.height+"rpx"}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{staticClass:"u-clear-icon",attrs:{size:30,name:t.searchIcon,color:t.searchIconColor?t.searchIconColor:t.color}})],1),i("v-uni-input",{staticClass:"u-input",style:[{textAlign:t.inputAlign,color:t.color,backgroundColor:t.bgColor},t.inputStyle],attrs:{"confirm-type":"search",value:t.value,disabled:t.disabled,focus:t.focus,maxlength:t.maxlength,"placeholder-class":"u-placeholder-class",placeholder:t.placeholder,"placeholder-style":"color: "+t.placeholderColor,type:"text"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.blur.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputChange.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.getFocus.apply(void 0,arguments)}}}),t.keyword&&t.clearabled&&t.focused?i("v-uni-view",{staticClass:"u-close-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[i("u-icon",{staticClass:"u-clear-icon",attrs:{name:"close-circle-fill",size:"34",color:"#c0c4cc"}})],1):t._e()],1),i("v-uni-view",{staticClass:"u-action",class:[t.showActionBtn||t.show?"u-action-active":""],style:[t.actionStyle],on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.custom.apply(void 0,arguments)}}},[t._v(t._s(t.actionText))])],1)},o=[]},b35c:function(t,e,i){"use strict";i.r(e);var n=i("c374"),a=i("dd98");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("d8ec");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"29abeb18",null,!1,n["a"],r);e["default"]=c.exports},b736:function(t,e,i){"use strict";i.r(e);var n=i("4590"),a=i("f98b");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("9a97");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"22451ccc",null,!1,n["a"],r);e["default"]=c.exports},bd9e:function(t,e,i){var n=i("efb3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("223a798c",n,!0,{sourceMap:!1,shadowMode:!1})},c374:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uSearch:i("8cbd").default,uTabsSwiper:i("b736").default,uLoadmore:i("8c9e").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"wrap"},[i("v-uni-view",{staticClass:"u-tabs-box",staticStyle:{padding:"0 20upx"}},[i("u-search",{attrs:{placeholder:"搜干货",disabled:!0,shape:"square","show-action":!1,animation:!0,clearabled:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goSearch.apply(void 0,arguments)}}}),i("u-tabs-swiper",{ref:"tabs",attrs:{activeColor:"#0081ff",list:t.list,current:t.current,"is-scroll":!0,swiperWidth:"750"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}}),i("v-uni-scroll-view",{directives:[{name:"show",rawName:"v-show",value:0!=t.current,expression:"current != 0"}],staticStyle:{height:"100upx",width:"100%"},attrs:{"scroll-x":!0}},[i("v-uni-view",{staticClass:"tags"},t._l(t.list[t.current].tags,(function(e,n){return i("v-uni-view",{staticClass:"tag",class:{active:t.list[t.current].current==n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTag(n)}}},[t._v(t._s(e.tag_name))])})),1)],1)],1),i("v-uni-swiper",{staticClass:"swiper-box",attrs:{current:t.swiperCurrent}},t._l(t.list,(function(e,n){return i("v-uni-swiper-item",{staticClass:"swiper-item"},[i("v-uni-scroll-view",{staticStyle:{height:"100%",width:"100%"},attrs:{"scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.reachBottom.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"page-box"},t._l(t.list[t.current].list,(function(e,n){return 2==e.item_type?i("v-uni-view",{key:n,staticClass:"order",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.detail(e.item_info.article_info.article_id)}}},[i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-view",{staticClass:"store"},[t._v(t._s(e.item_info.author_user_info.user_name))])],1),i("v-uni-view",{staticClass:"right"},[t._v(t._s(e.item_info.category.category_name)+"·"+t._s(e.item_info.tags[0].tag_name))])],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"title u-line-2",staticStyle:{"font-weight":"bold","font-size":"30upx"}},[t._v(t._s(e.item_info.article_info.title))]),i("v-uni-view",{staticClass:"title u-line-3"},[t._v(t._s(e.item_info.article_info.brief_content))])],1),i("v-uni-view",{staticClass:"left"},[""!=e.item_info.article_info.cover_image?i("v-uni-image",{attrs:{src:e.item_info.article_info.cover_image,mode:"aspectFill"}}):t._e()],1)],1)],1):t._e()})),1),i("u-loadmore",{attrs:{status:t.list[t.current].loadStatus,bgColor:"#f2f2f2"}})],1)],1)})),1)],1)},o=[]},c4bf:function(t,e,i){"use strict";i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("6c77"),a={data:function(){return{list:[{name:"推荐",cate_id:"1",tags:[],list:[],current:0,isInitTag:!1,loadStatus:"loadmore",cursor:"0"},{name:"思维模型",cate_id:"6809637769959178254",list:[],tags:[],current:0,isInitTag:!1,loadStatus:"loadmore",cursor:"0"},{name:"项目管理",cate_id:"6809637767543259144",list:[],tags:[],current:0,isInitTag:!1,loadStatus:"loadmore",cursor:"0"},{name:"成长路线",cate_id:"6809635626879549454",list:[],tags:[],current:0,isInitTag:!1,loadStatus:"loadmore",cursor:"0"},{name:"其他",cate_id:"6809635626661445640",tags:[],list:[],current:0,isInitTag:!1,loadStatus:"loadmore",cursor:"0"}],current:0,swiperCurrent:0,tabsHeight:0,dx:0,loadStatus:["loadmore","loadmore","loadmore","loadmore"]}},onLoad:function(){this.getList()},onShareAppMessage:function(){return{title:"办公效能助手TG",path:"/pages/views/tabBar/home"}},methods:{goSearch:function(t){uni.navigateTo({url:"/pages/views/home/search?keyword="+t})},detail:function(t){uni.navigateTo({url:"/pages/views/tabBar/detail?id="+t})},getCate:function(t){var e=this,i=e.list[t].cate_id;if(1!=i&&!e.list[t].isInitTag){var a=[{tag_id:"0",tag_name:"全部"}];console.log("tags:",n.tags.data),e.list[t].tags=a.concat(n.tags.data),e.list[t].isInitTag=!0}},reachBottom:function(){this.getList()},getList:function(){0==this.current?this.getAllFeed():this.getCateList()},getCateList:function(){var t=this;if("nomore"!=t.list[this.current].loadStatus){var e=t.list[this.current].current;0!=e&&(params.tag_id=t.list[this.current].tags[e].tag_id),t.list[t.current].loadStatus="loading",setTimeout((function(){t.list[t.current].loadStatus=n.articles.has_more?"loadmore":"nomore",t.list[t.current].cursor=n.articles.cursor;for(var e=[],i=0;i<n.articles.data.length;i++)e.push({item_type:2,item_info:n.articles.data[i]});t.list[t.current].list=t.list[t.current].list.concat(e)}),1e3)}},getAllFeed:function(){var t=this;"nomore"!=t.list[0].loadStatus&&(t.list[0].loadStatus="loading",setTimeout((function(){t.list[0].loadStatus=n.recomments.has_more?"loadmore":"nomore",t.list[0].cursor=n.recomments.cursor,t.list[0].list=t.list[0].list.concat(n.recomments.data)}),1e3))},change:function(t){var e=this;this.swiperCurrent=t,this.$refs.tabs.setFinishCurrent(t),this.current=t,this.getCate(t),setTimeout((function(){e.list[t].list.length<=0&&e.getList()}),1200)},changeTag:function(t){this.list[this.current].current=t,this.list[this.current].list=[],this.list[this.current].loadStatus="loadmore",this.getList()},transition:function(t){var e=t.detail.dx;this.$refs.tabs.setDx(e)},animationfinish:function(t){t.detail.current}}};e.default=a},d1fb:function(t,e,i){"use strict";i.r(e);var n=i("55ef"),a=i("e194");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("57a9");var r,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"4d072e0b",null,!1,n["a"],r);e["default"]=c.exports},d8ec:function(t,e,i){"use strict";var n=i("ff18"),a=i.n(n);a.a},dd98:function(t,e,i){"use strict";i.r(e);var n=i("c4bf"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},e194:function(t,e,i){"use strict";i.r(e);var n=i("0864"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},eb44:function(t,e,i){"use strict";i.r(e);var n=i("1eab"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},efb3:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".u-badge[data-v-4d072e0b]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:%?24?%;padding:%?4?% %?8?%;border-radius:%?100?%;z-index:9}.u-badge--bg--primary[data-v-4d072e0b]{background-color:#2979ff}.u-badge--bg--error[data-v-4d072e0b]{background-color:#fa3534}.u-badge--bg--success[data-v-4d072e0b]{background-color:#19be6b}.u-badge--bg--info[data-v-4d072e0b]{background-color:#909399}.u-badge--bg--warning[data-v-4d072e0b]{background-color:#f90}.u-badge-dot[data-v-4d072e0b]{height:%?16?%;width:%?16?%;border-radius:%?100?%;line-height:1}.u-badge-mini[data-v-4d072e0b]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}.u-info[data-v-4d072e0b]{background-color:#909399;color:#fff}",""]),t.exports=e},f98b:function(t,e,i){"use strict";i.r(e);var n=i("1542"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},ff18:function(t,e,i){var n=i("906c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("3c1705cc",n,!0,{sourceMap:!1,shadowMode:!1})}}]);