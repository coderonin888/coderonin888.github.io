(window.webpackJsonp=window.webpackJsonp||[]).push([[910],{1211:function(s,t,a){"use strict";a.r(t);var e=a(7),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"《seckill秒杀系统》第109章-实现基于条件限流机制防刷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第109章-实现基于条件限流机制防刷"}},[s._v("#")]),s._v(" 《Seckill秒杀系统》第109章：实现基于条件限流机制防刷")]),s._v(" "),t("p",[s._v("作者：冰河\n"),t("br"),s._v("星球："),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://m6z.cn/6aeFbs"),t("OutboundLink")],1),s._v(" "),t("br"),s._v("博客："),t("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://binghe.gitcode.host"),t("OutboundLink")],1),s._v(" "),t("br"),s._v("文章汇总："),t("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://binghe.gitcode.host/md/all/all.html"),t("OutboundLink")],1),s._v(" "),t("br"),s._v("源码获取地址："),t("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://t.zsxq.com/0dhvFs5oR"),t("OutboundLink")],1)]),s._v(" "),t("blockquote",[t("p",[s._v("沉淀，成长，突破，帮助他人，成就自我。")])]),s._v(" "),t("ul",[t("li",[s._v("本章难度：★★☆☆☆")]),s._v(" "),t("li",[s._v("本章重点：实现秒杀系统基于Nginx条件限流的防刷方案，掌握秒杀系统基于条件限流防刷的原理，并能够将基于条件限流防刷的落地方案和实现方式灵活应用到自身实际项目中。")])]),s._v(" "),t("p",[t("strong",[s._v("大家好，我是冰河~~")])]),s._v(" "),t("p",[s._v("秒杀系统的流程之所以非常高，是因为参与秒杀活动的商品一般都是非常稀缺的商品，这些商品本身的价值又比较高，这无形当中就会吸引很多黄牛党和刷单用户来参与秒杀活动。")]),s._v(" "),t("h2",{attrs:{id:"一、前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[s._v("#")]),s._v(" 一、前言")]),s._v(" "),t("p",[s._v("刷单用户和黄牛党会利用非正常手段来向秒杀系统发起大量的请求，这些请求对正常用户来说是非常不公平的，不仅会挤占正常用户抢购秒杀商品的通道，还会大量占用服务器的带宽，消耗大量服务器的资源，如果对这类请求不做限制，可能会引起秒杀系统崩溃宕机，进而引发一系列严重的事故。")]),s._v(" "),t("h2",{attrs:{id:"二、本章诉求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[s._v("#")]),s._v(" 二、本章诉求")]),s._v(" "),t("p",[s._v("实现接口防刷有多种方案，本章，我们就一起实现接口防刷的第一种方案：基于条件限流防刷。主要基于条件来实现接口的访问频率，以此来达到接口防刷的目的，重点掌握基于条件防刷的实现原理与落地实现方案，并能够将其灵活应用到自身实际项目中。")]),s._v(" "),t("h2",{attrs:{id:"三、实现基于条件限流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、实现基于条件限流"}},[s._v("#")]),s._v(" 三、实现基于条件限流")]),s._v(" "),t("p",[s._v("这里，我们主要是基于流量网关实现条件限流，尽量将限流方案前置化，将大部分刷单流量挡在整个秒杀系统的入口之外，提升秒杀系统的稳定性和可靠性。")]),s._v(" "),t("p",[t("strong",[s._v("注意：这里我们以获取秒杀活动详情为例，来实现基于用户条件限流的防刷功能。小伙伴们如果想实现基于其他接口的条件限流防刷功能，另外，在之前的演示的基于用户实现限流时，我们是在Lua脚本中写死了用户的标识，这里，我们通过Lua脚本从请求的Header中获取用户Token作为用户的标识，这样就可以在真实环境中实现基于用户的限流。")])]),s._v(" "),t("p",[s._v("秒杀系统基于条件限流防刷的具体步骤如下所示。")]),s._v(" "),t("p",[t("strong",[s._v("（1）set_common_var.lua文件")])]),s._v(" "),t("p",[s._v("set_common_var.lua文件是一个Lua脚本文件，表示设置一些通用的变量。")]),s._v(" "),t("p",[s._v("源码详见：seckill-nginx工程下的lua/set_common_var.lua。")]),s._v(" "),t("div",{staticClass:"language-lua line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-lua"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--获取请求头里的参数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" headers "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ngx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("req"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get_headers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--获取access_token")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v(" user_access_token "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" headers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"access-token"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" user_access_token "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    user_access_token "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" user_access_token\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("可以看到，set_common_var.lua脚本中的主要逻辑就是获取请求头信息，从请求头信息中获取到用户的access-token并返回。")]),s._v(" "),t("p",[t("strong",[s._v("（2）修改domain.com文件")])]),s._v(" "),t("p",[s._v("在domain.com文件中引入set_common_var.lua脚本文件，并将返回的user_access_token赋值给$user_access_token变量，如下所示。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用户token,可作为标识用户的唯一id")]),s._v("\nset_by_lua_file "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$user_access_token")]),s._v(" D:/Workspaces/myself/seckill/myself/seckill/seckill/seckill-nginx/lua/set_common_var.lua"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("（3）修改common.conf文件")])]),s._v(" "),t("h2",{attrs:{id:"查看完整文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[s._v("#")]),s._v(" 查看完整文章")]),s._v(" "),t("p",[s._v("加入"),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[s._v("冰河技术"),t("OutboundLink")],1),s._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);t.default=n.exports}}]);