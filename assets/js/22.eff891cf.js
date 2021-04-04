(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{383:function(e,t,l){"use strict";l.r(t);var s=l(25),v=Object(s.a)({},(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("ul",[l("li",[l("p",[e._v("什么时候用Vuex")]),e._v(" "),l("ul",[l("li",[e._v("问题一: 多个视图依赖于同一状态。")]),e._v(" "),l("li",[e._v("问题二: 来自不同视图的行为需要变更同一状态。")])]),e._v(" "),l("p",[e._v("对于问题一: 目前常用的就是props传参的方式.当组件嵌套多层时,比较恶心.以及无法解决兄弟组件之间的传参")]),e._v(" "),l("p",[e._v("对于问题二: 目前修改父组件状态的方式是通过$emit,还是会涉及到多层嵌套,一层一层的$emit的问题.")]),e._v(" "),l("p",[e._v("当应用足够负责之后你会发现,以上两种方式都会很难维护")])]),e._v(" "),l("li",[l("p",[e._v("Vuex的核心思想")]),e._v(" "),l("ul",[l("li",[e._v("每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的"),l("strong",[e._v("状态 (state)")]),e._v("。Vuex 和单纯的全局对象有以下两点不同:\n"),l("ul",[l("li",[e._v("Vuex存储的状态是响应式的,当store中的数据变化时,对应的组件也会更新")]),e._v(" "),l("li",[e._v("你不能直接更新store,必需通过提交("),l("code",[e._v("commit")]),e._v(")mutation去修改store中的值,这样是为了方便跟踪每一个状态的变化.")])])])])]),e._v(" "),l("li",[l("p",[e._v("分析一下Vuex原理")]),e._v(" "),l("ul",[l("li",[l("p",[e._v("先从 "),l("code",[e._v("export default new Vuex.Store()")]),e._v("入口开始分析")]),e._v(" "),l("div",{staticClass:"language- line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("\n")])]),e._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[e._v("1")]),l("br")])])])])])])])}),[],!1,null,null,null);t.default=v.exports}}]);