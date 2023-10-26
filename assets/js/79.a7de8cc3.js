(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{482:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),s("p",[t._v("工作中使用 vue 开发项目，部署测试环境就是把构建好的 dist 包放到服务器的指定目录。如果想要自己倒腾一个小网站呢，又不想买服务器费钱费力，那免费的 Github Page 很值得推荐。")]),t._v(" "),s("h2",{attrs:{id:"实现步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现步骤"}},[t._v("#")]),t._v(" 实现步骤")]),t._v(" "),s("ol",[s("li",[t._v("假定已经有一个 vue 项目，并且提交到了 github 仓库。")]),t._v(" "),s("li",[t._v("设置和部署，打开项目中的"),s("strong",[t._v("vite.config.ts")]),t._v("，找到下面代码块，更改为对应的 github 仓库名称")])]),t._v(" "),s("div",{staticClass:"language-ts line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    base"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/sycamore-cottage/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// github仓库名称")]),t._v("\n    plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("创建 gh-pages 分支，并将打包的 dist 文件夹下的所有东西上传到"),s("strong",[t._v("gh-pages")]),t._v('分支\n注意 ⚠️：一般情况下"/dist "文件夹会被写进本地 '),s("strong",[t._v('.gitignore"')]),t._v("(规定哪些文件会被 git 忽略不进行版本控制),所以如果 gitignore 文件有有 dist，要先暂时移除掉。执行以下命令进行提交。")])]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" subtree push "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--prefix")]),t._v(" dist origin gh-pages\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("ol",{attrs:{start:"4"}},[s("li",[s("p",[t._v("更改 github page 设置\n打开 github 仓库的 setting 配置，选择 Pages 配置项，Source 项选择 Deploy from a branch，Branch 项选择 gh_pages 分支下的/(root)文件夹。\n"),s("img",{attrs:{src:"https://raw.githubusercontent.com/AprilTong/image/master/20231009162017.png",alt:"如图所示"}})])]),t._v(" "),s("li",[s("p",[t._v("验证是否部署成功。\n访问https://user.github.io/repo，user为github用户名，repo为github仓库名，例如本例的地址为https://AprilTong.github.io/sycamore-cottage/")])])]),t._v(" "),s("h2",{attrs:{id:"方法二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法二"}},[t._v("#")]),t._v(" 方法二")]),t._v(" "),s("p",[t._v("在方法一部署好之后，感觉每次要更新，都需要手动将 dist 目录上传到 gh-pages 分支，比较麻烦。联想到公司项目是通过 gitlab-runner 配置提交到指定分支然后自动构建。然后进行搜索，果然有!")]),t._v(" "),s("ol",[s("li",[t._v("和上述一样，需要更改的"),s("strong",[t._v("vite.config.ts")])]),t._v(" "),s("li",[t._v("进入仓库 settings 页面的 GitHub Pages 配置，选择部署来源为“GitHub Actions”\n"),s("img",{attrs:{src:"https://raw.githubusercontent.com/AprilTong/image/master/20231009190059.png",alt:""}})]),t._v(" "),s("li",[t._v("选择创建一个 workflow , 文件命名为 main.yml,"),s("a",{attrs:{href:"https://github.com/AprilTong/sycamore-cottage/blob/master/.github/workflows/main.yml",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看我的项目配置"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送到指定分支时运行")]),t._v("\n push:\n    branches: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'master'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("修改代码提交到你配置的分支试试吧。在 actions 中就可以看到构建流程了。点击可查看报错等细节。\n"),s("img",{attrs:{src:"https://raw.githubusercontent.com/AprilTong/image/master/20231009190549.png",alt:""}})])]),t._v(" "),s("h2",{attrs:{id:"参考文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.jianshu.com/p/1dabc3f7d6d0",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文章 1"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.cn/post/7241473344469778489?from=search-suggest",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文章 2"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);