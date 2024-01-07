(window.webpackJsonp=window.webpackJsonp||[]).push([[882],{1185:function(t,e,n){"use strict";n.r(e);var r=n(7),s=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"《seckill秒杀系统》第81章-秒杀系统整合sentinel实现流控"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第81章-秒杀系统整合sentinel实现流控"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第81章：秒杀系统整合Sentinel实现流控")]),t._v(" "),e("p",[t._v("作者：冰河\n"),e("br"),t._v("星球："),e("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),e("OutboundLink")],1),t._v(" "),e("br"),t._v("博客："),e("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),e("OutboundLink")],1),t._v(" "),e("br"),t._v("文章汇总："),e("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),e("OutboundLink")],1),t._v(" "),e("br"),t._v("源码获取地址："),e("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),e("ul",[e("li",[t._v("本章难度：★★☆☆☆")]),t._v(" "),e("li",[t._v("本章重点：掌握在秒杀系统中基于Nacos整合Sentinel的方法，重点理解Sentinel实现流控的核心原理，并能够将Sentinel灵活应用到自身实际项目中。")])]),t._v(" "),e("p",[e("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),e("p",[t._v("虽然秒杀系统是专门为应对瞬时高并发、大流量场景而涉及的系统，但是秒杀系统承载的流量也不是无限的，也会存在上限，所以，需要对进入秒杀系统的流量进行管控，不能让所有流量不加刷选和鉴别的流入秒杀系统。否则，可能会给秒杀系统带来灾难性的后果。")]),t._v(" "),e("h2",{attrs:{id:"一、前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),e("p",[t._v("Sentinel 承接了阿里巴巴近 10 年的双十一大促流量的核心场景，例如秒杀（即突发流量控制在系统容量可以承受的范围）、消息削峰填谷、集群流量控制、实时熔断下游不可用应用等。Sentinel成功经受住了互联网大厂高并发场景的考验，所以，我们研发的秒杀系统中，采用了Sentinel进行流控。")]),t._v(" "),e("h2",{attrs:{id:"二、本章诉求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),e("p",[t._v("整合Nacos与Sentinel，使秒杀系统启动时能够自动读取Nacos中的配置，在秒杀系统中引入Sentinel相关的依赖，并且整合Sentinel后，实现对接口流量的管控。")]),t._v(" "),e("h2",{attrs:{id:"三、配置nacos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、配置nacos"}},[t._v("#")]),t._v(" 三、配置Nacos")]),t._v(" "),e("p",[t._v("本章，旨在通过Sentinel读取Nacos中的配置来实现流控规则，在秒杀系统中整合Sentinel之前，先在Nacos中添加一些Sentinel的配置。")]),t._v(" "),e("h3",{attrs:{id:"_3-1-添加命名空间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-添加命名空间"}},[t._v("#")]),t._v(" 3.1 添加命名空间")]),t._v(" "),e("p",[t._v("在Nacos中，添加命名空间的步骤如下所示。")]),t._v(" "),e("p",[t._v("（1）在浏览器打开Nacos界面，登录后，在找到命名空间，如图81-1所示。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/seckill-2023-08-22-001.png?raw=true",width:"80%"}}),t._v(" "),e("br")]),t._v(" "),e("p",[t._v("（2）按照图81-2所示添加命名空间后，点击确定按钮即可。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/seckill-2023-08-22-002.png?raw=true",width:"80%"}}),t._v(" "),e("br")]),t._v(" "),e("h3",{attrs:{id:"_3-2-添加sentinel配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-添加sentinel配置"}},[t._v("#")]),t._v(" 3.2 添加Sentinel配置")]),t._v(" "),e("p",[t._v("在Nacos中添加Sentinel的步骤如下所示。")]),t._v(" "),e("p",[t._v("（1）在Nacos中打开配置列表页面，如图81-3所示。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/seckill-2023-08-22-003.png?raw=true",width:"80%"}}),t._v(" "),e("br")]),t._v(" "),e("p",[t._v("这里注意的是，在配置列表中要切换到sentinel-config命名空间。点击右上角的 "),e("strong",[t._v("+")]),t._v(" 添加Sentinel配置。")]),t._v(" "),e("p",[t._v("（2）按照图81-4所示添加Sentinel流控配置。")]),t._v(" "),e("h2",{attrs:{id:"查看完整文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),e("p",[t._v("加入"),e("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),e("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);e.default=s.exports}}]);