(function(t){function e(e){for(var r,o,n=e[0],u=e[1],c=e[2],d=0,h=[];d<n.length;d++)o=n[d],a[o]&&h.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(h.length)h.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],r=!0,n=1;n<s.length;n++){var u=s[n];0!==a[u]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=r,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(s,r,function(e){return t[e]}.bind(null,r));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],u=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var l=u;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"03cb":function(t,e,s){},1336:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var r=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],o=s("2877"),n={},u=Object(o["a"])(n,a,i,!1,null,null,null),c=u.exports,l=s("8c4f"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"catalogue-wrapper"},[s("div",{staticClass:"catalogue-type"},[s("h2",[t._v("TYPE")]),s("NavLinks")],1),t.products?s("div",{staticClass:"catalogue-display"},[s("h1",[t._v("Home")]),s("div",{staticClass:"catalogue-total"},[t._v(t._s(t.products.length)+" Products")]),s("div",{staticClass:"catalogue"},t._l(t.products,function(e,r){return s("div",{key:r,staticClass:"product"},[s("router-link",{attrs:{to:{name:"productPage",params:{id:e.id}}}},[s("img",{attrs:{src:e.imgURL,loading:"lazy"}}),s("div",{staticClass:"product-price"},[t._v(t._s(e.mrp))]),s("h3",{staticClass:"product-name"},[t._v(t._s(e.name))])])],1)}),0)]):t._e()])},h=[],m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ul",[s("li",[s("router-link",{attrs:{to:{name:"categories",params:{slug:"knit-boxy"}}}},[t._v(" Knit Boxy")])],1),s("li",[s("router-link",{attrs:{to:{name:"categories",params:{slug:"knit-form-fitting"}}}},[t._v("Knit Form Fitting")])],1),s("li",[s("router-link",{attrs:{to:{name:"categories",params:{slug:"knit-regular"}}}},[t._v("Knit Regular")])],1),s("li",[s("router-link",{attrs:{to:{name:"categories",params:{slug:"knit-relaxed"}}}},[t._v("Knit Relaxed")])],1),s("li",[s("router-link",{attrs:{to:{name:"categories",params:{slug:"shirt-boxy"}}}},[t._v("Shirt Boxy")])],1),s("li",[s("router-link",{attrs:{to:{name:"categories",params:{slug:"shirt-regular"}}}},[t._v("Shirt Regular")])],1),s("li",[s("router-link",{attrs:{to:{name:"categories",params:{slug:"woven-regular"}}}},[t._v("Woven Regular")])],1),s("li",[s("router-link",{attrs:{to:{name:"categories",params:{slug:"woven-relaxed"}}}},[t._v("Woven Relaxed")])],1),s("li",[s("router-link",{attrs:{to:{name:"categories",params:{slug:"woven-slim"}}}},[t._v("Woven Slim")])],1)])])},p=[],v={name:"nav_links"},g=v,f=Object(o["a"])(g,m,p,!1,null,null,null),S=f.exports,b=s("2f62"),_={name:"home",components:{NavLinks:S},mounted:function(){this.$store.dispatch("getData")},computed:Object(b["b"])(["products"])},w=_,z=Object(o["a"])(w,d,h,!1,null,null,null),y=z.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"catalogue-wrapper"},[s("div",{staticClass:"catalogue-type"},[s("h2",[t._v("TYPE")]),s("NavLinks")],1),t.products?s("div",{staticClass:"catalogue-display"},[s("h1",[t._v(t._s(t.getCategory))]),s("div",{staticClass:"catalogue-total"},[t._v(t._s(t.products.length)+" Products")]),s("div",{staticClass:"catalogue"},t._l(t.products,function(e,r){return s("div",{key:r,staticClass:"product"},[s("router-link",{attrs:{to:{name:"productPage",params:{id:e.id}}}},[s("img",{attrs:{src:e.imgURL,loading:"lazy"}}),s("div",{staticClass:"product-price"},[t._v(t._s(e.mrp))]),s("h3",{staticClass:"product-name"},[t._v(t._s(e.name))])])],1)}),0)]):t._e()])},k=[],C=(s("a481"),{name:"categories",components:{NavLinks:S},mounted:function(){this.$store.dispatch("getData")},computed:{products:function(){return this.$store.getters.getProductsByKnit(this.$route.params.slug)},getCategory:function(){var t="";return this.products.length>0&&(t=this.products[0].knit.replace("-"," ").toUpperCase()),t}}}),O=C,P=Object(o["a"])(O,x,k,!1,null,null,null),M=P.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.product?s("div",[s("main",{staticClass:"catalog"},[s("div",{staticClass:"catalog_image"},[s("img",{attrs:{src:t.product.imgURL}})]),s("div",{staticClass:"catalog_purchase"},[s("h1",[t._v(t._s(t.product.name))]),s("div",{staticClass:"price"},[t._v(t._s(t.product.mrp))]),s("div",{staticClass:"select-buttons"},[s("button",{staticClass:"recommendation",class:{active:"xSmall"==t.recommendedSize}},[t._v("XS")]),s("button",{staticClass:"recommendation",class:{active:"small"==t.recommendedSize}},[t._v("S")]),s("button",{staticClass:"recommendation",class:{active:"medium"==t.recommendedSize}},[t._v("M")]),s("button",{staticClass:"recommendation",class:{active:"large"==t.recommendedSize}},[t._v("L")]),s("button",{staticClass:"recommendation",class:{active:"xLarge"==t.recommendedSize}},[t._v("XL")])]),s("button",{staticClass:"add-to-cart"},[t._v("ADD TO CART")]),s("button",{staticClass:"add-to-cart",on:{click:function(e){return t.addSizeModal()}}},[t._v("ADD SIZE")])])]),t.showModal?s("div",{staticClass:"pop-up-wrapper"},[s("div",{staticClass:"pop-up"},[s("div",{staticClass:"pop-up-close",on:{click:function(e){return t.closeSizeModal()}}},[t._v("X")]),s("h2",[t._v("Enter your measurments to find the perfect fit")]),s("div",{staticClass:"size-calculator"},[s("label",{staticStyle:{"--gridArea":"shoulderL"},attrs:{for:"shoulder"}},[t._v("Shoulder")]),s("label",{staticStyle:{"--gridArea":"chestL"},attrs:{for:"bust"}},[t._v("Bust")]),s("label",{staticStyle:{"--gridArea":"waistL"},attrs:{for:"bust"}},[t._v("Waist")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.userSize.shoulder,expression:"userSize.shoulder"}],staticStyle:{"--gridArea":"shoulderI"},attrs:{type:"range",min:"12",max:"20",id:"shoulder"},domProps:{value:t.userSize.shoulder},on:{__r:function(e){return t.$set(t.userSize,"shoulder",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.userSize.shoulder,expression:"userSize.shoulder"}],staticStyle:{"--gridArea":"shoulderN"},attrs:{type:"number"},domProps:{value:t.userSize.shoulder},on:{input:function(e){e.target.composing||t.$set(t.userSize,"shoulder",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.userSize.chest,expression:"userSize.chest"}],staticStyle:{"--gridArea":"chestI"},attrs:{type:"range",min:"25",max:"45",id:"bust"},domProps:{value:t.userSize.chest},on:{__r:function(e){return t.$set(t.userSize,"chest",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.userSize.chest,expression:"userSize.chest"}],staticStyle:{"--gridArea":"chestN"},attrs:{type:"number"},domProps:{value:t.userSize.chest},on:{input:function(e){e.target.composing||t.$set(t.userSize,"chest",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.userSize.waist,expression:"userSize.waist"}],staticStyle:{"--gridArea":"waistI"},attrs:{type:"range",min:"25",max:"48",id:"range"},domProps:{value:t.userSize.waist},on:{__r:function(e){return t.$set(t.userSize,"waist",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.userSize.waist,expression:"userSize.waist"}],staticStyle:{"--gridArea":"waistN"},attrs:{type:"number"},domProps:{value:t.userSize.waist},on:{input:function(e){e.target.composing||t.$set(t.userSize,"waist",e.target.value)}}})]),s("button",{staticStyle:{"--gridArea":"save"},on:{click:function(e){return t.saveSize()}}},[t._v("Save my size")])])]):t._e()]):t._e()},j=[],N=s("db0c"),F=s.n(N),L=s("75fc"),A=(s("c5f6"),s("a4bb")),D=s.n(A),E=s("f499"),R=s.n(E),T={data:function(){return{userSize:{shoulder:0,chest:0,waist:0},recommendedSize:"",showModal:!1}},name:"productPage",mounted:function(){this.$store.dispatch("getData"),this.getStoredData()},computed:{product:function(){return this.$store.getters.getProduct(this.$route.params.id)}},watch:{product:{handler:function(t){this.userSize.shoulder>0&this.userSize.chest>0&this.userSize.shoulder>0&&this.getSizeFromEstimate()},deep:!0}},methods:{getStoredData:function(){var t=JSON.parse(localStorage.getItem("userSize"));t&&(this.userSize.shoulder=t.shoulder,this.userSize.chest=t.chest,this.userSize.waist=t.waist)},addSizeModal:function(){return this.showModal=!0},closeSizeModal:function(){return this.showModal=!1},saveSize:function(){return localStorage.setItem("userSize",R()(this.userSize)),this.getSizeFromEstimate(),this.showModal=!1},getSizeFromEstimate:function(){var t=this.$store.state.brandMeasurement[this.product.knit],e=.85*this.userSize.shoulder,s=.85*this.userSize.chest,r=.85*this.userSize.waist,a={shoulder:{a:e,b:.965*t.shoulder[0],c:t.shoulder[0]},chest:{a:s,b:.965*t.chest[0],c:t.chest[0]},waist:{a:r,b:.965*t.waist[0],c:t.waist[0]}},i={shoulder:{a:e,b:.965*t.shoulder[1],c:t.shoulder[1]},chest:{a:s,b:.965*t.chest[1],c:t.chest[1]},waist:{a:r,b:.965*t.waist[1],c:t.waist[1]}},o={shoulder:{a:e,b:.965*t.shoulder[2],c:t.shoulder[2]},chest:{a:s,b:.965*t.chest[2],c:t.chest[2]},waist:{a:r,b:.965*t.waist[2],c:t.waist[2]}},n={shoulder:{a:e,b:.965*t.shoulder[3],c:t.shoulder[3]},chest:{a:s,b:.965*t.chest[3],c:t.chest[3]},waist:{a:r,b:.965*t.waist[3],c:t.waist[3]}},u={shoulder:{a:e,b:.965*t.shoulder[4],c:t.shoulder[4]},chest:{a:s,b:.965*t.chest[4],c:t.chest[4]},waist:{a:r,b:.965*t.waist[4],c:t.waist[4]}},c={xSmall:this.degreeOfFitness(a),small:this.degreeOfFitness(i),medium:this.degreeOfFitness(o),large:this.degreeOfFitness(n),xLarge:this.degreeOfFitness(u)};this.recommendedSize=D()(c).reduce(function(t,e){return c[t]>c[e]?t:e})},getMemberShipValue:function(t,e,s,r){return e<t&&t<=s?(Number(((t-e)/(s-e)).toFixed(3)),Number(((t-e)/(s-e)).toFixed(3))):s<t&&t<=r?(Number(((r-t)/(r-s)).toFixed(3)),Number(((r-t)/(r-s)).toFixed(3))):0},degreeOfFitness:function(t){var e=[];for(var s in t){this.getMemberShipValue.apply(this,[this.userSize[s]].concat(Object(L["a"])(F()(t[s]))));e.push(this.getMemberShipValue.apply(this,[this.userSize[s]].concat(Object(L["a"])(F()(t[s])))))}return Math.min.apply(Math,e)}}},B=T,I=Object(o["a"])(B,$,j,!1,null,null,null),K=I.exports;r["a"].use(l["a"]);var U=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:y},{path:"/category/:slug",name:"categories",component:M},{path:"/product/:id",name:"productPage",component:K}],scrollBehavior:function(){return{x:0,y:0}}});s("7514");r["a"].use(b["a"]);var W=new b["a"].Store({state:{products:[],brandMeasurement:{"knit-boxy":{shoulder:[15.6,16.7,17.8,18.7,19.7],chest:[39.9,40.9,42,43,44],waist:[41.4,42.4,43.5,44.5,45.5]},"knit-form-fitting":{shoulder:[12.1,13.1,14.1,15.1,16.1],chest:[27.4,28.6,29.5,30.5,31.6],waist:[25.5,26.6,27.6,28.6,29.6]},"knit-regular":{shoulder:[13.2,14.3,15.3,16.3,17.3],chest:[31.5,32.7,33.7,34.7,35.7],waist:[30.8,31.9,32.9,33.9,34.9]},"knit-relaxed":{shoulder:[14.4,15.5,16.5,17.5,18.5],chest:[35.7,36.8,37.8,38.9,39.9],waist:[36.1,37.2,38.2,39.2,40.2]},"shirt-boxy":{shoulder:[16,17.1,18.2,19.2,20.2],chest:[39,40.2,41.2,42.1,43.2],waist:[39.1,40.2,41.2,42.1,43.2]},"shirt-regular":{shoulder:[13.9,15.1,16.1,17.1,18],chest:[37.7,39.1,39.9,41,42],waist:[35.9,37.1,38.1,39.1,40]},"woven-regular":{shoulder:[14.2,15.4,16.4,17.2,18.4],chest:[36.6,37.8,38.7,39.7,40.8],waist:[35.6,36.6,37.6,38.7,39.6]},"woven-relaxed":{shoulder:[14.7,15.9,16.9,17.7,18.9],chest:[38.7,39.8,40.8,41.8,42.9],waist:[39.7,40.8,41.8,42.9,43.8]},"woven-slim":{shoulder:[13.7,14.8,15.9,16.8,17.8],chest:[34.5,35.7,36.6,37.7,38.7],waist:[31.4,32.4,33.4,34.5,35.5]}}},mutations:{setData:function(t,e){t.products=e}},actions:{getData:function(t){var e=t.commit;fetch("https://shahrukh.dev/fuzzy-logic/data.json").then(function(t){return t.json()}).then(function(t){return e("setData",t)})}},getters:{getProduct:function(t){return function(e){return t.products.find(function(t){return t.id==e})}},getProductsByKnit:function(t){return function(e){return t.products.filter(function(t){return t.knit===e})}}}});s("1336"),s("03cb"),s("7dcc");r["a"].config.productionTip=!1,new r["a"]({router:U,store:W,render:function(t){return t(c)}}).$mount("#app")},"7dcc":function(t,e,s){}});
//# sourceMappingURL=app.4f24afc5.js.map