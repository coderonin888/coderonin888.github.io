(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{429:function(t,r,e){"use strict";e.r(r);var a=e(7),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《并发设计模式》第60章-半同步半异步模式-如何处理消息堆积问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《并发设计模式》第60章-半同步半异步模式-如何处理消息堆积问题"}},[t._v("#")]),t._v(" 《并发设计模式》第60章-半同步半异步模式-如何处理消息堆积问题")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★☆☆☆")]),t._v(" "),r("li",[t._v("本章重点：了解半同步半异步模式的核心原理与使用场景，初步掌握半同步半异步模式的应用场景，掌握半同步半异步模式消息堆积问题的处理方案，能够初步结合自身项目实际场景思考如何将半同步半异步模式灵活应用到自身实际项目中。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("半同步半异步模式本质上也使用了消息队列来解耦逻辑，涉及到消息队列的话，我们不得不考虑的一个问题就是：消息堆积问题。产生这种问题的根本原因就是向消息队列中存入数据的速度大于从消息队列中获取数据的速度，造成消息堆积，久而久而，就可能堆满消息队列。")]),t._v(" "),r("h2",{attrs:{id:"一、故事背景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、故事背景"}},[t._v("#")]),t._v(" 一、故事背景")]),t._v(" "),r("p",[t._v("截止到目前，小菜在老王的指导下，不仅分析出了支付系统的性能瓶颈，了解了到底什么是半同步半异步模式，并且基于半同步半异步模式优化了支付系统的逻辑，那现在还有一个问题需要解决：既然半同步半异步模式使用到了消息队列，此时就需要考虑如何处理消息堆积的问题，防止消息队列被填满导致系统性能急剧下降，甚至崩溃宕机。")]),t._v(" "),r("h2",{attrs:{id:"二、问题分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、问题分析"}},[t._v("#")]),t._v(" 二、问题分析")]),t._v(" "),r("p",[t._v("产生消息堆积问题的根本原因就是向消息队列中存入数据的速度大于从消息队列中获取数据的速度，造成消息堆积，久而久而，就可能堆满消息队列，如图60-1所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/assets/images/core/concurrent/2023-11-16-001.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("当异步任务层向消息队列层存入数据的速度，大于同步任务任务层从消息队列层获取数据的速度，就会造成消息的堆积，久而久之，就可能堆满消息队列，严重的话，可能会导致系统性能急剧下降甚至引起系统崩溃宕机。")]),t._v(" "),r("h2",{attrs:{id:"三、解决方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、解决方案"}},[t._v("#")]),t._v(" 三、解决方案")]),t._v(" "),r("p",[t._v("对于内存队列来说，我们可以对发送短信的系统接口做好压测，评估出一个短信系统发送短信的性能阈值，以此来调整内存队列的大小。在投放使用时，如果感知到内存队列即将堆满消息时，这里，也可以设置一个阈值，内存队列中堆积的消息数量达到阈值时，就延缓异步任务层向消息队列层存入数据的速度。极端情况下，我们也可以丢弃一部分消息，因为像支付成功给用户发送短信，告知其扣费情况和当前余额，只是给用户一个提醒，并不是核心业务。")]),t._v(" "),r("p",[t._v("其他的方案，大家也可以参考《"),r("a",{attrs:{href:"https://articles.zsxq.com/id_axtimwf09xex.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("第28章-生产者消费者模式-消息堆积问题解决方案"),r("OutboundLink")],1),t._v("》的内容，这里不再赘述。")]),t._v(" "),r("h2",{attrs:{id:"查看全文"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看全文"}},[t._v("#")]),t._v(" 查看全文")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=s.exports}}]);