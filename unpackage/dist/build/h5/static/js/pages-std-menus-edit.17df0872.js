(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-std-menus-edit"],{"09f0":function(e,t,n){"use strict";function a(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(a=(o=u.next()).done);a=!0)if(n.push(o.value),t&&n.length===t)break}catch(d){r=!0,i=d}finally{try{a||null==u["return"]||u["return"]()}finally{if(r)throw i}}return n}}n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},"0d21":function(e,t,n){"use strict";function a(e){if(Array.isArray(e))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},"363f":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".uni-container[data-v-e58decf6]{padding:15px}.uni-input-border[data-v-e58decf6],\n.uni-textarea-border[data-v-e58decf6]{width:100%;font-size:14px;color:#666;border:1px #e5e5e5 solid;border-radius:5px;box-sizing:border-box}.uni-input-border[data-v-e58decf6]{padding:0 10px;height:35px}.uni-textarea-border[data-v-e58decf6]{padding:10px;height:80px}.uni-button-group[data-v-e58decf6]{margin-top:50px;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-button[data-v-e58decf6]{width:184px;padding:12px 20px;font-size:14px;border-radius:4px;line-height:1;margin:0}",""]),e.exports=t},3835:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var a=u(n("0d21")),r=u(n("09f0")),i=u(n("06c5")),o=u(n("3d8c"));function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){return(0,a.default)(e)||(0,r.default)(e,t)||(0,i.default)(e,t)||(0,o.default)()}},"3d8c":function(e,t,n){"use strict";function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},"839b":function(e,t,n){"use strict";n.r(t);var a=n("c3fd"),r=n("b276");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("880c2");var o,u=n("f0c5"),d=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"e58decf6",null,!1,a["a"],o);t["default"]=d.exports},"880c2":function(e,t,n){"use strict";var a=n("8a94"),r=n.n(a);r.a},"8a94":function(e,t,n){var a=n("363f");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("4f06").default;r("7b3b8b0c",a,!0,{sourceMap:!1,shadowMode:!1})},"986a":function(e,t,n){"use strict";var a=n("4ea4");n("4d63"),n("ac1f"),n("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.filterToWhere=d,t.enumConverter=t.validator=void 0;var r=a(n("3835")),i=a(n("b85c")),o={};t.validator=o;var u={};function d(e,t){var n={};for(var a in e){var o=e[a],u=o.type,d=o.value;switch(u){case"search":"string"===typeof d&&d.length&&(n[a]=new RegExp(d));break;case"select":if(d.length){var c,f=[],s=(0,i.default)(d);try{for(s.s();!(c=s.n()).done;){var l=c.value;f.push(t.eq(l))}}catch(_){s.e(_)}finally{s.f()}n[a]=t.or(f)}break;case"range":if(d.length){var v=d[0],b=d[1];n[a]=t.and([t.gte(v),t.lte(b)])}break;case"date":if(d.length){var p=(0,r.default)(d,2),h=p[0],m=p[1],g=new Date(h),y=new Date(m);n[a]=t.and([t.gte(g),t.lte(y)])}break;case"timestamp":if(d.length){var w=(0,r.default)(d,2),x=w[0],k=w[1];n[a]=t.and([t.gte(x),t.lte(k)])}break}}return n}t.enumConverter=u},b276:function(e,t,n){"use strict";n.r(t);var a=n("ec13"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},c3fd:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-container"},[n("uni-forms",{ref:"form",attrs:{value:e.formData,"validate-trigger":"submit","err-show-type":"toast"}},[n("v-uni-view",{staticClass:"uni-button-group"},[n("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)},i=[]},ec13:function(e,t,n){"use strict";(function(e){var a=n("4ea4");n("c975"),n("b64b"),n("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("5530")),i=n("986a"),o=e.database(),u="std-menus";function d(e){var t={};for(var n in i.validator)e.indexOf(n)>-1&&(t[n]=i.validator[n]);return t}var c={data:function(){var e={};return{formData:e,formOptions:{},rules:(0,r.default)({},d(Object.keys(e)))}},onLoad:function(e){if(e.id){var t=e.id;this.formDataId=t,this.getDetail(t)}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var e=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(t){e.submitForm(t)})).catch((function(){uni.hideLoading()}))},submitForm:function(e){var t=this;o.collection(u).doc(this.formDataId).update(e).then((function(e){uni.showToast({icon:"none",title:"修改成功"}),t.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(e){uni.showModal({content:e.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))},getDetail:function(e){var t=this;uni.showLoading({mask:!0}),o.collection(u).doc(e).field("").get().then((function(e){var n=e.result.data[0];n&&(t.formData=n)})).catch((function(e){uni.showModal({content:e.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};t.default=c}).call(this,n("a9ff")["default"])}}]);