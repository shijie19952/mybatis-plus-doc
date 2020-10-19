(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{415:function(t,n,a){"use strict";a.r(n);var s=a(43),e=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"多租户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多租户"}},[t._v("#")]),t._v(" 多租户")]),t._v(" "),a("h2",{attrs:{id:"tenantlineinnerinterceptor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tenantlineinnerinterceptor"}},[t._v("#")]),t._v(" TenantLineInnerInterceptor")]),t._v(" "),a("h3",{attrs:{id:"属性介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性介绍"}},[t._v("#")]),t._v(" 属性介绍")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("属性名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("tenantLineHandler")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("TenantLineHandler")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("租户处理器（ TenantId 行级 ）")])])])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TenantLineHandler")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 获取租户 ID 值表达式，只支持单个 ID 值\n     * <p>\n     *\n     * @return 租户 ID 值表达式\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Expression")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTenantId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 获取租户字段名\n     * <p>\n     * 默认字段名叫: tenant_id\n     *\n     * @return 租户字段名\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTenantIdColumn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tenant_id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 根据表名判断是否忽略拼接多租户条件\n     * <p>\n     * 默认都要进行解析并拼接多租户条件\n     *\n     * @param tableName 表名\n     * @return 是否忽略, true:表示忽略，false:需要解析并拼接多租户条件\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ignoreTable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" tableName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("说明:")]),t._v(" "),a("p",[t._v("多租户 != 权限过滤,不要乱用,租户之间是完全隔离的!!!"),a("br"),t._v("\n启用多租户后所有执行的method的sql都会进行处理."),a("br"),t._v("\n自写的sql请按规范书写(sql涉及到多个表的每个表都要给别名,特别是 inner join 的要写标准的 inner join)")])])])}),[],!1,null,null,null);n.default=e.exports}}]);