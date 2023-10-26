(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{507:function(s,e,n){"use strict";n.r(e);var t=n(2),a=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"vue-转换-es7-为-es5-语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-转换-es7-为-es5-语法"}},[s._v("#")]),s._v(" vue 转换 es7 为 es5 语法")]),s._v(" "),e("p",[e("strong",[s._v("问题描述")]),s._v("：vue 项目下报错：ReferenceError: regeneratorRuntime is not defined\n"),e("strong",[s._v("原因")]),s._v("：项目中请求使用了异步函数，并用 async、await 关键字修饰，async、await 是 es7 的语法，项目运行在浏览器中如果不支持 es7 的情况下，就会报如上所示的错误\n"),e("strong",[s._v("解决")]),s._v("：安装插件实现转换语法，将 es7 转换为 es5")]),s._v(" "),e("ul",[e("li",[s._v("步骤一：安装插件 babel-plugin-transform-runtime")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("npm install babel-plugin-transform-runtime\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("步骤二：在.babelrc 文件中增加“transform-runtime”")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{\n    "presets": [["es2015", { "modules": false }]],\n    "plugins": ["syntax-dynamic-import", "transform-object-rest-spread", "transform-vue-jsx", "transform-runtime"]\n}\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])])}),[],!1,null,null,null);e.default=a.exports}}]);