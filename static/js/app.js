(function(e){function t(t){for(var a,u,o=t[0],n=t[1],l=t[2],d=0,h=[];d<o.length;d++)u=o[d],i[u]&&h.push(i[u][0]),i[u]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);c&&c(t);while(h.length)h.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,o=1;o<s.length;o++){var n=s[o];0!==i[n]&&(a=!1)}a&&(r.splice(t--,1),e=u(u.s=s[0]))}return e}var a={},i={app:0},r=[];function u(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,u),s.l=!0,s.exports}u.m=e,u.c=a,u.d=function(e,t,s){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(u.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(s,a,function(t){return e[t]}.bind(null,a));return s},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],n=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=n;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"03cb":function(e,t,s){},1336:function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],u=s("2877"),o={},n=Object(u["a"])(o,i,r,!1,null,null,null),l=n.exports,c=s("8c4f"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"catalogue-wrapper"},[s("div",{staticClass:"catalogue-type"}),e.products?s("div",{staticClass:"catalogue-display"},[s("h1",[e._v("Home")]),s("div",{staticClass:"catalogue-total"},[e._v(e._s(e.products.length)+" Products")]),s("div",{staticClass:"catalogue"},e._l(e.products,function(t,a){return s("div",{key:a,staticClass:"product"},[s("router-link",{attrs:{to:{name:"productPage",params:{id:t.id}}}},[s("img",{attrs:{src:t.imgURL,loading:"lazy"}}),s("div",{staticClass:"product-price"},[e._v(e._s(t.mrp))]),s("h3",{staticClass:"product-name"},[e._v(e._s(t.name))])])],1)}),0)]):e._e()])},h=[],v=s("2f62"),f={name:"home",mounted:function(){this.$store.dispatch("getData")},computed:Object(v["b"])(["products"])},m=f,p=Object(u["a"])(m,d,h,!1,null,null,null),g=p.exports,z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"catalogue-wrapper"},[s("div",{staticClass:"catalogue-type"},[s("h2",[e._v("TYPE")]),s("NavLinks")],1),e.products?s("div",{staticClass:"catalogue-display"},[s("h1",[e._v(e._s(e.getCategory))]),s("div",{staticClass:"catalogue-total"},[e._v(e._s(e.products.length)+" Products")]),s("div",{staticClass:"catalogue"},e._l(e.products,function(t,a){return s("div",{key:a,staticClass:"product"},[s("router-link",{attrs:{to:{name:"productPage",params:{id:t.id}}}},[s("img",{attrs:{src:t.imgURL,loading:"lazy"}}),s("div",{staticClass:"product-price"},[e._v(e._s(t.mrp))]),s("h3",{staticClass:"product-name"},[e._v(e._s(t.name))])])],1)}),0)]):e._e()])},_=[],M=(s("a481"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("ul",[s("li",[s("router-link",{attrs:{to:{name:"categories",params:{slug:"woven-closefit"}}}},[e._v(" woven-closefit")])],1),s("li",[s("router-link",{attrs:{to:{name:"categories",params:{slug:"woven-casual"}}}},[e._v("woven-casual")])],1),s("li",[s("router-link",{attrs:{to:{name:"categories",params:{slug:"woven-comfort"}}}},[e._v("woven-comfort")])],1),s("li",[s("router-link",{attrs:{to:{name:"categories",params:{slug:"shirt-casual"}}}},[e._v("shirt-casual")])],1),s("li",[s("router-link",{attrs:{to:{name:"categories",params:{slug:"shirt-comfort"}}}},[e._v("shirt-comfort")])],1),s("li",[s("router-link",{attrs:{to:{name:"categories",params:{slug:"knit-cotton-formfitting"}}}},[e._v("knit-cotton-formfitting")])],1),s("li",[s("router-link",{attrs:{to:{name:"categories",params:{slug:"knit-cotton-standard"}}}},[e._v("knit-cotton-standard")])],1),s("li",[s("router-link",{attrs:{to:{name:"categories",params:{slug:"knit-cotton-casual"}}}},[e._v("knit-cotton-casual")])],1),s("li",[s("router-link",{attrs:{to:{name:"categories",params:{slug:"knit-cotton-comfort"}}}},[e._v("knit-cotton-comfort")])],1),s("li",[s("router-link",{attrs:{to:{name:"categories",params:{slug:"knit-ran-formfitting"}}}},[e._v("knit-ran-formfitting")])],1),s("li",[s("router-link",{attrs:{to:{name:"categories",params:{slug:"knit-ran-standard"}}}},[e._v("knit-ran-standard")])],1),s("li",[s("router-link",{attrs:{to:{name:"categories",params:{slug:"knit-ran-casual"}}}},[e._v("knit-ran-casual")])],1),s("li",[s("router-link",{attrs:{to:{name:"categories",params:{slug:"knit-ran-comfort"}}}},[e._v("knit-ran-comfort")])],1),s("li",[s("router-link",{attrs:{to:{name:"categories",params:{slug:"knit-poly-formfitting"}}}},[e._v("knit-poly-formfitting")])],1),s("li",[s("router-link",{attrs:{to:{name:"categories",params:{slug:"knit-poly-standard"}}}},[e._v("knit-poly-standard")])],1),s("li",[s("router-link",{attrs:{to:{name:"categories",params:{slug:"knit-poly-casual"}}}},[e._v("knit-poly-casual")])],1),s("li",[s("router-link",{attrs:{to:{name:"categories",params:{slug:"knit-poly-comfort"}}}},[e._v("knit-poly-comfort")])],1)])])}),w=[],S={name:"nav_links"},b=S,k=Object(u["a"])(b,M,w,!1,null,null,null),y=k.exports,C={name:"categories",components:{NavLinks:y},mounted:function(){this.$store.dispatch("getData")},computed:{products:function(){return this.$store.getters.getProductsByKnit(this.$route.params.slug)},getCategory:function(){var e="";return this.products.length>0&&(e=this.products[0].knit.replace("-"," ").toUpperCase()),e}}},x=C,L=Object(u["a"])(x,z,_,!1,null,null,null),P=L.exports,O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.product?s("div",[s("main",{staticClass:"catalog"},[s("div",{staticClass:"catalog_image"},[s("img",{attrs:{src:e.product.imgURL}})]),s("div",{staticClass:"catalog_purchase"},[s("h1",[e._v(e._s(e.product.name))]),s("div",{staticClass:"price"},[e._v(e._s(e.product.mrp))]),e._m(0),s("div",{staticClass:"select-buttons"},[s("button",{staticClass:"recommendation",class:{active:"xSmall"==e.recommendedSize}},[e._v("XS")]),s("button",{staticClass:"recommendation",class:{active:"small"==e.recommendedSize}},[e._v("S")]),s("button",{staticClass:"recommendation",class:{active:"medium"==e.recommendedSize}},[e._v("M")]),s("button",{staticClass:"recommendation",class:{active:"large"==e.recommendedSize}},[e._v("L")]),s("button",{staticClass:"recommendation",class:{active:"xLarge"==e.recommendedSize}},[e._v("XL")])]),s("button",{staticClass:"add-to-cart",on:{click:function(t){return e.addSizeModal()}}},[e._v("What's My Size?")]),s("button",{staticClass:"add-to-cart"},[e._v("ADD TO CART")])])]),e.showModal?s("div",{staticClass:"pop-up-wrapper"},[s("div",{staticClass:"pop-up"},[s("div",{staticClass:"pop-up-close",on:{click:function(t){return e.closeSizeModal()}}},[e._v("X")]),s("h2",[e._v("Enter your measurments to find the perfect fit")]),s("div",{staticClass:"calculator-guide-wrapper"},[s("div",{staticClass:"size-calculator"},[s("label",{staticStyle:{"--gridArea":"shoulderL"},attrs:{for:"shoulder"}},[e._v("Shoulder")]),s("label",{staticStyle:{"--gridArea":"chestL"},attrs:{for:"bust"}},[e._v("Bust")]),s("label",{staticStyle:{"--gridArea":"waistL"},attrs:{for:"bust"}},[e._v("Waist")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userSize.shoulder,expression:"userSize.shoulder"}],staticStyle:{"--gridArea":"shoulderI"},attrs:{type:"range",min:"12",max:"20",id:"shoulder"},domProps:{value:e.userSize.shoulder},on:{__r:function(t){return e.$set(e.userSize,"shoulder",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userSize.shoulder,expression:"userSize.shoulder"}],staticStyle:{"--gridArea":"shoulderN"},attrs:{type:"number"},domProps:{value:e.userSize.shoulder},on:{input:function(t){t.target.composing||e.$set(e.userSize,"shoulder",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userSize.chest,expression:"userSize.chest"}],staticStyle:{"--gridArea":"chestI"},attrs:{type:"range",min:"25",max:"45",id:"bust"},domProps:{value:e.userSize.chest},on:{__r:function(t){return e.$set(e.userSize,"chest",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userSize.chest,expression:"userSize.chest"}],staticStyle:{"--gridArea":"chestN"},attrs:{type:"number"},domProps:{value:e.userSize.chest},on:{input:function(t){t.target.composing||e.$set(e.userSize,"chest",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userSize.waist,expression:"userSize.waist"}],staticStyle:{"--gridArea":"waistI"},attrs:{type:"range",min:"25",max:"48",id:"range"},domProps:{value:e.userSize.waist},on:{__r:function(t){return e.$set(e.userSize,"waist",t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userSize.waist,expression:"userSize.waist"}],staticStyle:{"--gridArea":"waistN"},attrs:{type:"number"},domProps:{value:e.userSize.waist},on:{input:function(t){t.target.composing||e.$set(e.userSize,"waist",t.target.value)}}})]),e._m(1)]),s("button",{staticStyle:{"--gridArea":"save"},on:{click:function(t){return e.saveSize()}}},[e._v("Save my size")])])]):e._e()]):e._e()},$=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"size-text"},[s("div",[e._v("Sizes")]),s("div",{staticClass:"recommendation-highlight"},[e._v("Recommended")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"guide"},[s("img",{attrs:{src:"static/img/size.jpg"}}),s("div",[s("article",[s("h3",[e._v("Shoulder (Range: 10-18)")]),s("p",[e._v("Measure at the back, from edge of right to edge of left shoulder with arms relaxed.")])]),s("article",[s("h3",[e._v("Bust (Range: 30-42)")]),s("p",[e._v('Measure around the fullest part of your bust appox. 1" below the armpit.')])]),s("article",[s("h3",[e._v("Waist (Range: 32-40)")]),s("p",[e._v("Bend on one side to find the natural crease of your waist; measure across at this point.")])])])])}],j=s("db0c"),N=s.n(j),F=s("75fc"),A=(s("c5f6"),s("a4bb")),E=s.n(A),D=s("f499"),R=s.n(D),X={data:function(){return{userSize:{shoulder:0,chest:0,waist:0},recommendedSize:"",showModal:!1}},name:"productPage",mounted:function(){this.$store.dispatch("getData"),this.getStoredData()},computed:{product:function(){return this.$store.getters.getProduct(this.$route.params.id)}},watch:{product:{handler:function(e){this.userSize.shoulder>0&this.userSize.chest>0&this.userSize.shoulder>0&&(this.tableLogs(),this.getSizeFromEstimate())},deep:!0}},methods:{getStoredData:function(){var e=JSON.parse(localStorage.getItem("userSize"));e&&(this.userSize.shoulder=e.shoulder,this.userSize.chest=e.chest,this.userSize.waist=e.waist)},addSizeModal:function(){return this.showModal=!0},closeSizeModal:function(){return this.showModal=!1},saveSize:function(){return localStorage.setItem("userSize",R()(this.userSize)),this.getSizeFromEstimate(),this.showModal=!1},getSizeFromEstimate:function(){var e=this.$store.state.brandMeasurement[this.product.knit],t=.85*this.userSize.shoulder,s=.85*this.userSize.chest,a=.85*this.userSize.waist,i={shoulder:{a:t,b:e.shoulder.sizeMeasure[0]*e.shoulder.values_fit,c:e.shoulder.sizeMeasure[0]},chest:{a:s,b:e.chest.sizeMeasure[0]*e.chest.values_fit,c:e.chest.sizeMeasure[0]},waist:{a:a,b:e.waist.sizeMeasure[0]*e.waist.values_fit,c:e.waist.sizeMeasure[0]}},r={shoulder:{a:t,b:e.shoulder.sizeMeasure[1]*e.shoulder.values_fit,c:e.shoulder.sizeMeasure[1]},chest:{a:s,b:e.chest.sizeMeasure[1]*e.chest.values_fit,c:e.chest.sizeMeasure[1]},waist:{a:a,b:e.waist.sizeMeasure[1]*e.waist.values_fit,c:e.waist.sizeMeasure[1]}},u={shoulder:{a:t,b:e.shoulder.sizeMeasure[2]*e.shoulder.values_fit,c:e.shoulder.sizeMeasure[2]},chest:{a:s,b:e.chest.sizeMeasure[2]*e.chest.values_fit,c:e.chest.sizeMeasure[2]},waist:{a:a,b:e.waist.sizeMeasure[2]*e.waist.values_fit,c:e.waist.sizeMeasure[2]}},o={shoulder:{a:t,b:e.shoulder.sizeMeasure[3]*e.shoulder.values_fit,c:e.shoulder.sizeMeasure[3]},chest:{a:s,b:e.chest.sizeMeasure[3]*e.chest.values_fit,c:e.chest.sizeMeasure[3]},waist:{a:a,b:e.waist.sizeMeasure[3]*e.waist.values_fit,c:e.waist.sizeMeasure[3]}},n={shoulder:{a:t,b:e.shoulder.sizeMeasure[4]*e.shoulder.values_fit,c:e.shoulder.sizeMeasure[4]},chest:{a:s,b:e.chest.sizeMeasure[4]*e.chest.values_fit,c:e.chest.sizeMeasure[4]},waist:{a:a,b:e.waist.sizeMeasure[4]*e.waist.values_fit,c:e.waist.sizeMeasure[4]}},l={xSmall:this.degreeOfFitness(i,"xs"),small:this.degreeOfFitness(r,"s"),medium:this.degreeOfFitness(u,"m"),large:this.degreeOfFitness(o,"l"),xLarge:this.degreeOfFitness(n,"xl")};this.recommendedSize=E()(l).reduce(function(e,t){return l[e]>l[t]?e:t}),console.log("--------------------------------------------"),console.log("--------------------------------------------"),console.log("Final Mu Values"),console.table(l),console.log("Recommended Size is max of mu : ".concat(this.recommendedSize))},getMemberShipValue:function(e,t,s,a){return t<e&&e<=s?(Number(((e-t)/(s-t)).toFixed(3)),Number(((e-t)/(s-t)).toFixed(3))):s<e&&e<=a?(Number(((a-e)/(a-s)).toFixed(3)),Number(((a-e)/(a-s)).toFixed(3))):0},degreeOfFitness:function(e,t){var s=[];for(var a in e){this.getMemberShipValue.apply(this,[this.userSize[a]].concat(Object(F["a"])(N()(e[a]))));s.push(this.getMemberShipValue.apply(this,[this.userSize[a]].concat(Object(F["a"])(N()(e[a])))))}return console.log("--------------------------------------------"),console.log("Membership values  for measurement ".concat(t," :  ").concat(s)),Math.min.apply(Math,s)},tableLogs:function(){var e=this.$store.state.brandMeasurement[this.product.knit];console.log("Knit Type:",this.product.knit),console.log("--------------------------------------------");var t=.85*this.userSize.shoulder,s=.85*this.userSize.chest,a=.85*this.userSize.waist;console.log("Userinput: shoulder ".concat(this.userSize.shoulder," and the Lower Limit: shoulder * .85 = ").concat(t)),console.log("Userinput: chest ".concat(this.userSize.chest," and the Lower Limit: shoulder * .85 = ").concat(s)),console.log("Userinput: waist ".concat(this.userSize.waist," and the Lower Limit: shoulder * .85 = ").concat(a)),console.log("--------------------------------------------");var i={XS:{a:t,b:e.shoulder.sizeMeasure[0]*e.shoulder.values_fit,c:e.shoulder.sizeMeasure[0]},S:{a:t,b:e.shoulder.sizeMeasure[1]*e.shoulder.values_fit,c:e.shoulder.sizeMeasure[1]},M:{a:t,b:e.shoulder.sizeMeasure[2]*e.shoulder.values_fit,c:e.shoulder.sizeMeasure[2]},L:{a:t,b:e.shoulder.sizeMeasure[3]*e.shoulder.values_fit,c:e.shoulder.sizeMeasure[3]},XL:{a:t,b:e.shoulder.sizeMeasure[4]*e.shoulder.values_fit,c:e.shoulder.sizeMeasure[4]}};console.log("--------------------------------------------"),console.log("Parameter Shoulder"),console.table(i);var r={XS:{a:s,b:e.chest.sizeMeasure[0]*e.chest.values_fit,c:e.chest.sizeMeasure[0]},S:{a:s,b:e.chest.sizeMeasure[1]*e.chest.values_fit,c:e.chest.sizeMeasure[1]},M:{a:s,b:e.chest.sizeMeasure[2]*e.chest.values_fit,c:e.chest.sizeMeasure[2]},L:{a:s,b:e.chest.sizeMeasure[3]*e.chest.values_fit,c:e.chest.sizeMeasure[3]},XL:{a:s,b:e.chest.sizeMeasure[4]*e.chest.values_fit,c:e.chest.sizeMeasure[4]}};console.log("--------------------------------------------"),console.log("Parameter Chest"),console.table(r);var u={XS:{a:a,b:e.waist.sizeMeasure[0]*e.waist.values_fit,c:e.waist.sizeMeasure[0]},S:{a:a,b:e.waist.sizeMeasure[1]*e.waist.values_fit,c:e.waist.sizeMeasure[1]},M:{a:a,b:e.waist.sizeMeasure[2]*e.waist.values_fit,c:e.waist.sizeMeasure[2]},L:{a:a,b:e.waist.sizeMeasure[3]*e.waist.values_fit,c:e.waist.sizeMeasure[3]},XL:{a:a,b:e.waist.sizeMeasure[4]*e.waist.values_fit,c:e.waist.sizeMeasure[4]}};console.log("--------------------------------------------"),console.log("Parameter Waist"),console.table(u)}}},T=X,U=Object(u["a"])(T,O,$,!1,null,null,null),B=U.exports;a["a"].use(c["a"]);var I=new c["a"]({base:"/",routes:[{path:"/",name:"home",component:g},{path:"/category/:slug",name:"categories",component:P},{path:"/product/:id",name:"productPage",component:B}],scrollBehavior:function(){return{x:0,y:0}}});s("7514");a["a"].use(v["a"]);var V=new v["a"].Store({state:{products:[],brandMeasurement:{"woven-closefit":{shoulder:{sizeMeasure:[13.9,14.9,15.9,16.9,17.9],values_fit:.9},chest:{sizeMeasure:[34.1,36.1,38.1,40.1,42.1],values_fit:.9},waist:{sizeMeasure:[26.3,28,29.8,31.5,33.3],values_fit:.9}},"woven-casual":{shoulder:{sizeMeasure:[14.6,15.6,16.6,17.6,18.6],values_fit:.9},chest:{sizeMeasure:[37.8,39.8,41.8,43.8,45.8],values_fit:.85},waist:{sizeMeasure:[31.7,33.5,35.2,37,38.7],values_fit:.8}},"woven-comfort":{shoulder:{sizeMeasure:[15.2,16.2,17.2,18.2,19.2],values_fit:.9},chest:{sizeMeasure:[39.7,41.7,43.7,45.7,47.7],values_fit:.8},waist:{sizeMeasure:[39.9,41.7,43.4,45.2,46.9],values_fit:.75}},"shirt-casual":{shoulder:{sizeMeasure:[12.5,13.5,14.5,15.5,16.5],values_fit:.9},chest:{sizeMeasure:[38.1,39.6,41.1,42.6,44.1],values_fit:.85},waist:{sizeMeasure:[35.1,36.6,38.1,39.6,41.1],values_fit:.8}},"shirt-comfort":{shoulder:{sizeMeasure:[14.9,15.9,16.9,17.9,18.9],values_fit:.9},chest:{sizeMeasure:[39.7,41.2,42.7,44.2,45.7],alues_fit:.8},waist:{sizeMeasure:[40.3,41.8,43.3,44.8,46.3],values_fit:.75}},"knit-cotton-formfitting":{shoulder:{sizeMeasure:[13,14,15,16,17],values_fit:.918},chest:{sizeMeasure:[28,31,34,36.9,39.9],values_fit:.968},waist:{sizeMeasure:[26,28,30,32,34],values_fit:.918}},"knit-cotton-standard":{shoulder:{sizeMeasure:[14.1,15.1,16.1,17.1,18.1],values_fit:.918},chest:{sizeMeasure:[34.2,36.7,39.2,41.7,44.2],values_fit:.918},waist:{sizeMeasure:[29.5,35.1,37.1,39.1,41.1],values_fit:.918}},"knit-cotton-casual":{shoulder:{sizeMeasure:[15.2,16.2,17.2,18.2,19.2],values_fit:.918},chest:{sizeMeasure:[40.4,42.4,44.4,46.4,48.5],values_fit:.868},waist:{sizeMeasure:[40.2,42.2,44.2,46.2,48.2],values_fit:.818}},"knit-cotton-comfort":{shoulder:{sizeMeasure:[16.3,17.3,18.3,19.3,20.3],values_fit:.918},chest:{sizeMeasure:[42,43.9,45.7,47.6,49.5],values_fit:.818},waist:{sizeMeasure:[42,44,46,48,50],values_fit:.768}},"knit-ran-formfitting":{shoulder:{sizeMeasure:[13,14,15,16,17],values_fit:.924},chest:{sizeMeasure:[28,31,34,36.9,39.9],values_fit:.974},waist:{sizeMeasure:[26,28,30,32,34],values_fit:.924}},"knit-ran-standard":{shoulder:{sizeMeasure:[14.1,15.1,16.1,17.1,18.1],values_fit:.924},chest:{sizeMeasure:[34.2,36.7,39.2,41.7,44.2],values_fit:.924},waist:{sizeMeasure:[29.5,35.1,37.1,39.1,41.1],values_fit:.924}},"knit-ran-casual":{shoulder:{sizeMeasure:[15.2,16.2,17.2,18.2,19.2],values_fit:.924},chest:{sizeMeasure:[40.4,42.4,44.4,46.4,48.5],values_fit:.874},waist:{sizeMeasure:[40.2,42.2,44.2,46.2,48.2],values_fit:.824}},"knit-ran-comfort":{shoulder:{sizeMeasure:[16.3,17.3,18.3,19.3,20.3],values_fit:.924},chest:{sizeMeasure:[42,43.9,45.7,47.6,49.5],values_fit:.824},waist:{sizeMeasure:[42,44,46,48,50],values_fit:.774}},"knit-poly-formfitting":{shoulder:{sizeMeasure:[13,14,15,16,17],values_fit:.908},chest:{sizeMeasure:[28,31,34,36.9,39.9],values_fit:.958},waist:{sizeMeasure:[26,28,30,32,34],values_fit:.908}},"knit-poly-standard":{shoulder:{sizeMeasure:[14.1,15.1,16.1,17.1,18.1],values_fit:.908},chest:{sizeMeasure:[34.2,36.7,39.2,41.7,44.2],values_fit:.908},waist:{sizeMeasure:[29.5,35.1,37.1,39.1,41.1],values_fit:.908}},"knit-poly-casual":{shoulder:{sizeMeasure:[15.2,16.2,17.2,18.2,19.2],values_fit:.908},chest:{sizeMeasure:[40.4,42.4,44.4,46.4,48.5],values_fit:.852},waist:{sizeMeasure:[40.2,42.2,44.2,46.2,48.2],values_fit:.808}},"knit-poly-comfort":{shoulder:{sizeMeasure:[16.3,17.3,18.3,19.3,20.3],values_fit:.908},chest:{sizeMeasure:[42,43.9,45.7,47.6,49.5],values_fit:.808},waist:{sizeMeasure:[42,44,46,48,50],values_fit:.758}}}},mutations:{setData:function(e,t){e.products=t}},actions:{getData:function(e){var t=e.commit;fetch("https://shahrukh.dev/fuzzy-logic-representation/data.json").then(function(e){return e.json()}).then(function(e){return t("setData",e)})}},getters:{getProduct:function(e){return function(t){return e.products.find(function(e){return e.id==t})}},getProductsByKnit:function(e){return function(t){return e.products.filter(function(e){return e.knit===t})}}}});s("1336"),s("03cb"),s("7dcc");a["a"].config.productionTip=!1,new a["a"]({router:I,store:V,render:function(e){return e(l)}}).$mount("#app")},"7dcc":function(e,t,s){}});
//# sourceMappingURL=app.js.map