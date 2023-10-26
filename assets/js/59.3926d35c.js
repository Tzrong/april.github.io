(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{464:function(e,o,t){"use strict";t.r(o);var r=t(2),i=Object(r.a)({},(function(){var e=this,o=e._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"背景"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[e._v("#")]),e._v(" 背景")]),e._v(" "),o("p",[e._v("在前后端联调的时候，后端需要在入参中传入 cookie。于是想通过 document.cookie 来获取，但是发现浏览器有 cookie 但是无法获取到。")]),e._v(" "),o("h2",{attrs:{id:"场景复现"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#场景复现"}},[e._v("#")]),e._v(" 场景复现")]),e._v(" "),o("ol",[o("li",[e._v("打开谷歌调试工具，可以看到浏览器中是有记录 cookie 的；")]),e._v(" "),o("li",[e._v("在控制台执行 documen.cookie 发现获取不到\n"),o("img",{attrs:{src:"https://raw.githubusercontent.com/AprilTong/image/master/img/20210728181424.png",alt:"如图所示"}})])]),e._v(" "),o("h2",{attrs:{id:"cookie-了解"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cookie-了解"}},[e._v("#")]),e._v(" cookie 了解")]),e._v(" "),o("p",[e._v("cookie 是服务器发送但用户浏览器并保存到本地的一小块数据，它会在浏览器下次向同一服务器发起请求时被携带并发送到服务器上。cookie 的过期时间、域、路径、有效期、适用站点都可以根据需要来指定。")]),e._v(" "),o("h2",{attrs:{id:"限制访问-cookie"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#限制访问-cookie"}},[e._v("#")]),e._v(" 限制访问 cookie")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Secure 属性\n设置为 Secure 的 cookie 只能通过被 HTTPS 协议加密过的请求发送过服务端。可以预防中间人攻击。")])]),e._v(" "),o("li",[o("p",[e._v("HttpOnly 属性\ndocument.cookie API 无法访问带有 HttpOnly 属性的 cookie；此类 Cookie 仅作用于服务器。可以缓解 XSS(跨站点脚本)攻击。")])])]),e._v(" "),o("h2",{attrs:{id:"cookie-的作用域"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cookie-的作用域"}},[e._v("#")]),e._v(" cookie 的作用域")]),e._v(" "),o("ul",[o("li",[e._v("Domain\n指定哪些主机可以接受 Cookie，如果不指定，默认为 origin，"),o("strong",[e._v("不包含子域名")]),e._v("。如果指定了 Domain，则包含子域名。")]),e._v(" "),o("li",[e._v("Path\n指定主机下的哪些路径可以接受 cookie。（该 url 路径必须存在于请求 url 中）")])]),e._v(" "),o("h2",{attrs:{id:"samesite"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#samesite"}},[e._v("#")]),e._v(" SameSite")]),e._v(" "),o("p",[e._v("允许服务器要求某个 cookie 在跨站请求时不会被发送。也可以阻止跨站请求伪造。\n可选的值:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("None")]),e._v(",不设置默认就是 None。浏览器会在同站请求、跨站请求下继续发送 cookie，不区分大小写。")]),e._v(" "),o("li",[o("strong",[e._v("Strict")]),e._v(" 浏览器只在访问相同站点时发送 cookie")]),e._v(" "),o("li",[o("strong",[e._v("Lax")]),e._v(" 与 Strict 类型，但用户从外部站点导航至 URL 时除外。")])]),e._v(" "),o("h2",{attrs:{id:"cookie-优先级-priority-属性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cookie-优先级-priority-属性"}},[e._v("#")]),e._v(" cookie 优先级 Priority 属性")]),e._v(" "),o("p",[e._v("可选值：")]),e._v(" "),o("ul",[o("li",[e._v("Low")]),e._v(" "),o("li",[e._v("Medium(默认为该值)")]),e._v(" "),o("li",[e._v("High\n当一个域名超过限定数量的 cookie 时候，进行删除的顺序")])]),e._v(" "),o("ol",[o("li",[e._v("优先级为 Low 的非 secure Cookie")]),e._v(" "),o("li",[e._v("优先级为 Low 的 secure Cookie")]),e._v(" "),o("li",[e._v("优先级为 Medium 的非 secure Cookie")]),e._v(" "),o("li",[e._v("优先级为 Medium 的 secure Cookie")]),e._v(" "),o("li",[e._v("优先级为 High 的非 secure Cookie")]),e._v(" "),o("li",[e._v("优先级为 High 的 secure Cookie")])]),e._v(" "),o("h2",{attrs:{id:"sameparty"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sameparty"}},[e._v("#")]),e._v(" SameParty")]),e._v(" "),o("p",[e._v("SameParty 属性是一个新的布尔属性，用于指示在对相同第一方集的起源的请求中是否包含 cookie。")]),e._v(" "),o("h2",{attrs:{id:"参考文章"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[e._v("#")]),e._v(" 参考文章")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies",target:"_blank",rel:"noopener noreferrer"}},[e._v("mdn 上 cookie 的解释"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/50541175",target:"_blank",rel:"noopener noreferrer"}},[e._v("cookie 优先级"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/microsoft-edge/devtools-guide-chromium/whats-new/2021/02/devtools",target:"_blank",rel:"noopener noreferrer"}},[e._v("新增的 SameParty 属性"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);o.default=i.exports}}]);