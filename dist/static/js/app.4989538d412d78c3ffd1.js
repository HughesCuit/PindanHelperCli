webpackJsonp([1],{107:function(e,t){},108:function(e,t){},109:function(e,t){},110:function(e,t){},111:function(e,t){},112:function(e,t){},114:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-cell vux-cell-form-preview",class:{"vux-cell-no-border-intent":!e.borderIntent}},[i("div",{staticClass:"weui-form-preview__bd"},e._l(e.list,function(t){return i("div",{staticClass:"weui-form-preview__item"},[i("label",{staticClass:"weui-form-preview__label",domProps:{innerHTML:e._s(t.label)}}),e._v(" "),i("span",{staticClass:"weui-form-preview__value",domProps:{innerHTML:e._s(t.value)}})])}))])},staticRenderFns:[]}},115:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]}},116:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._m(0),e._v(" "),i("div",{staticClass:"appending-area"},[i("label",[e._v("名字")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"focus",rawName:"v-focus",value:e.focusStatus,expression:"focusStatus"}],attrs:{type:"text",placeholder:"名字"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),i("label",[e._v("价格")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"price"}],attrs:{type:"text",placeholder:"价格"},domProps:{value:e.price},on:{input:function(t){t.target.composing||(e.price=t.target.value)}}}),e._v(" "),i("button",{attrs:{type:"submit"},on:{click:function(t){e.append(e.name,e.price)}}},[e._v("添加")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.total_price,expression:"total_price"}],attrs:{type:"text",placeholder:"总价"},domProps:{value:e.total_price},on:{input:function(t){t.target.composing||(e.total_price=t.target.value)}}}),e._v(" "),i("button",{attrs:{type:"submit"},on:{click:function(t){e.submit(e.total_price)}}},[e._v("提交")])]),e._v(" "),i("group",{attrs:{title:"拼单"}},[i("cell-form-preview",{attrs:{list:e.list,"is-link":""}})],1),e._v(" "),i("div",{staticClass:"submit-area"}),e._v(" "),i("group",{attrs:{title:"结算"}},[i("cell-form-preview",{attrs:{list:e.prices,"is-link":""}})],1)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vux-demo"},[i("h1",[e._v(" 拼单助手 ")])])}]}},117:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.title?i("div",{staticClass:"weui-cells__title",style:{color:e.titleColor},domProps:{innerHTML:e._s(e.title)}}):e._e(),e._v(" "),e._t("title"),e._v(" "),i("div",{staticClass:"weui-cells",class:{"vux-no-group-title":!e.title},style:{marginTop:"number"==typeof e.gutter?e.gutter+"px":e.gutter}},[e._t("after-title"),e._v(" "),e._t("default")],2)],2)},staticRenderFns:[]}},118:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"vux-label-desc"},[e._t("default")],2)},staticRenderFns:[]}},119:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-cell",class:{"vux-tap-active":e.isLink||!!e.link,"weui-cell_access":e.isLink||!!e.link,"vux-cell-no-border-intent":!e.borderIntent,"vux-cell-disabled":e.disabled},style:e.style,on:{click:e.onClick}},[i("div",{staticClass:"weui-cell__hd"},[e._t("icon")],2),e._v(" "),i("div",{staticClass:"vux-cell-bd",class:{"vux-cell-primary":"title"===e.primary&&"left"!==e.valueAlign}},[i("p",[e.title||e.hasTitleSlot?i("label",{staticClass:"vux-label",class:e.labelClass,style:e.getLabelStyles()},[e._t("title",[e._v(e._s(e.title))])],2):e._e(),e._v(" "),e._t("after-title")],2),e._v(" "),i("inline-desc",[e._t("inline-desc",[e._v(e._s(e.inlineDesc))])],2)],1),e._v(" "),i("div",{staticClass:"weui-cell__ft",class:e.valueClass},[e._t("value"),e._v(" "),e._t("default",[e._v(e._s(e.value))]),e._v(" "),e.isLoading?i("i",{staticClass:"weui-loading"}):e._e()],2),e._v(" "),e._t("child")],2)},staticRenderFns:[]}},121:function(e,t,i){i(107);var n=i(8)(i(68),i(114),null,null);e.exports=n.exports},122:function(e,t,i){i(112);var n=i(8)(i(69),i(119),null,null);e.exports=n.exports},123:function(e,t,i){i(110);var n=i(8)(i(70),i(117),null,null);e.exports=n.exports},124:function(e,t,i){i(111);var n=i(8)(i(71),i(118),null,null);e.exports=n.exports},47:function(e,t,i){i(108);var n=i(8)(i(72),i(115),null,null);e.exports=n.exports},48:function(e,t,i){i(109);var n=i(8)(i(73),i(116),null,null);e.exports=n.exports},67:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(46),l=i(44),a=i.n(l),r=i(45),s=i(47),o=i.n(s),u=i(48),c=i.n(u);n.a.use(r.a);var p=[{path:"/",component:c.a}],v=new r.a({routes:p});a.a.attach(document.body),n.a.config.productionTip=!1,new n.a({data:{list:[{label:"陈二狗",value:18},{label:"李狗蛋",value:32},{label:"张全蛋",value:18}],prices:[{name:"陈二狗",price:12.857142857142858},{name:"李狗蛋",price:22.857142857142858},{name:"张全蛋",price:14.285714285714286}]},router:v,render:function(e){return e(o.a)}}).$mount("#app-box")},68:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"cell-form-preview",props:{list:Array,borderIntent:{type:Boolean,default:!0}}}},69:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(124),l=i.n(n),a=i(75),r=i(74);t.default={name:"cell",components:{InlineDesc:l.a},props:i.i(r.a)(),beforeMount:function(){this.hasTitleSlot=!!this.$slots.title},computed:{valueClass:function(){return{"vux-cell-primary":"content"===this.primary||"left"===this.valueAlign,"vux-cell-align-left":"left"===this.valueAlign,"vux-cell-arrow-transition":!!this.arrowDirection,"vux-cell-arrow-up":"up"===this.arrowDirection,"vux-cell-arrow-down":"down"===this.arrowDirection}},labelClass:function(){return{"vux-cell-justify":"justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign}},style:function(){if(this.alignItems)return{alignItems:this.alignItems}}},methods:{getLabelStyles:function(){return{width:this.$parent.labelWidth||this.$parent.$parent.labelWidth,textAlign:this.$parent.labelAlign||this.$parent.$parent.labelAlign,marginRight:this.$parent.labelMarginRight||this.$parent.$parent.labelMarginRight}},onClick:function(){!this.disabled&&i.i(a.a)(this.link,this.$router)}},data:function(){return{hasTitleSlot:!1}}}},70:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"group",props:{title:String,titleColor:String,labelWidth:String,labelAlign:String,labelMarginRight:String,gutter:[String,Number]}}},71:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"inline-desc"}},72:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},73:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(123),l=i.n(n),a=i(122),r=i.n(a),s=i(121),o=i.n(s),u=i(49),c=i.n(u);t.default={components:{Group:l.a,Cell:r.a,CellFormPreview:o.a,axios:c.a},data:function(){return{list:[],prices:[]}},directives:{focus:{inserted:function(e,t){t.value&&e.focus()},update:function(e,t){t.value&&e.focus()}}},methods:{append:function(e,t){this.list.push({label:e,value:t}),this.focusStatus=!0},submit:function(e){var t=this,i={actual_price:parseFloat(e),prices:this.list.map(function(e){return{name:e.label,price:parseFloat(e.value)}})};console.log(i);var n=c.a.request({url:"/api/pindan",method:"POST",baseURL:"http://localhost:3000",headers:{"Content-Type":"application/json"},data:i}).then(function(e){console.log(e),t.prices=e.data.map(function(e){return{label:e.name,value:e.price}})}).catch(function(e){alert(e)});this.prices=n.map(function(e){return{label:e.name,value:e.price}})}}}}},[67]);
//# sourceMappingURL=app.4989538d412d78c3ffd1.js.map