(window.webpackJsonp=window.webpackJsonp||[]).push([[826],{1127:function(t,r,e){"use strict";e.r(r);var a=e(7),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第25章-重现刷单流量问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第25章-重现刷单流量问题"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第25章：重现刷单流量问题")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("课程视频："),r("a",{attrs:{href:"https://t.zsxq.com/11VArLeHS",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/11VArLeHS"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★☆☆☆")]),t._v(" "),r("li",[t._v("本章重点：使用JMeter模拟刷单流量阻塞正常用户访问系统的问题，让大家直观的感受下，如果秒杀系统不做任何防护措施，大量的刷单流量进入系统，不仅会阻塞正常用户访问系统，还会大量占用服务器的资源。")]),t._v(" "),r("li",[t._v("课程视频："),r("a",{attrs:{href:"https://t.zsxq.com/11VArLeHS",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/11VArLeHS"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("经过前面章节的开发，秒杀系统的业务开发基本成型了，但此时也只是完成了最基本的业务开发，此时的秒杀系统还不足以抗下太大的并发，如果遇到一些黄牛和刷子流量，很容易阻塞正常用户的访问。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("秒杀系统仅仅完成业务开发是远远不够的，业务开发只是完成了秒杀系统最基础的功能，还要不断提高整个秒杀系统的并发和性能，同时，对于一些黄牛和刷子流量都要做一定的处理，最大化减少这些无效流量对系统资源的占用和对正常用户访问系统的阻塞。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("黄牛和刷单流量不仅会大量占用服务器带宽和系统资源，也会阻塞正常用户访问系统的通道，所以，在秒杀系统中，要能够识别出刷单流量，对这些流量进行限流和风控等措施。本章，就模拟刷单流量对正常用户访问系统的影响。")]),t._v(" "),r("h2",{attrs:{id:"三、模拟刷单流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、模拟刷单流程"}},[t._v("#")]),t._v(" 三、模拟刷单流程")]),t._v(" "),r("p",[t._v("模拟刷单流量阻塞正常用户访问系统的流程如图25-1所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-05-29-001.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("可以看到，黄牛党通过不断刷单的方式来抢购商品，不仅仅会占用大量的服务器带宽和系统资源，还会阻塞正常用户抢购商品的通道，用户的直观感受就是系统非常卡顿，极大的影响了用户抢购秒杀商品的体验。")]),t._v(" "),r("h2",{attrs:{id:"四、模拟刷单实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、模拟刷单实现"}},[t._v("#")]),t._v(" 四、模拟刷单实现")]),t._v(" "),r("p",[t._v("对于正常用户来说，就是登录系统正常访问。黄牛党会使用工具或者其他手段大量刷单，占用大量的服务器带宽和系统资源。")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=s.exports}}]);