(window.webpackJsonp=window.webpackJsonp||[]).push([[874],{1175:function(t,r,e){"use strict";e.r(r);var a=e(7),_=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第73章-预约系统分库分表设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第73章-预约系统分库分表设计"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第73章：预约系统分库分表设计")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★☆☆☆")]),t._v(" "),r("li",[t._v("本章重点：对预约系统中的商品预约配置信息，用户预约商品的记录信息进行分库分表设计，重点理解分库分表的设计思想，并能够将其灵活应用到实际项目中。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("在前面的文章中，我们已经梳理了预约系统的业务流程，设计了最简化的接口交互逻辑，也实现了运营端和用户端的业务逻辑，并且下单流程也完成了对预约系统的整合。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("对于互联网项目来说，无论是秒杀系统还是其他项目，从一定程度上来说，流量大小最终还是取决于使用系统的人数，使用系统的人数多，流量就大，使用系统的人数少，流量就少。为了从根本上限制进入秒杀系统的流量，我们设计了预约系统。")]),t._v(" "),r("p",[t._v("如果秒杀商品在预约系统中配置了预约信息，也就是秒杀商品开通了预约通道，此时用户只有成功预约了开通预约通道的商品后，才能抢购当前商品。这就在一定程度上限制了参与抢购秒杀商品的用户人数，从而在一定程度上限制了进入秒杀商品的流量。")]),t._v(" "),r("p",[t._v("对于预约系统来说，如果同一时间有大量用户预约商品，则预约系统可能会出现类似秒杀的场景，具备了秒杀系统的某些特点。所以，需要对预约系统进行对应的优化。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("对预约系统中的商品预约品牌数据和用户预约秒杀商品的数据进行分库分表设计，将单个数据库和单张数据表的读写压力，按照一定的规则分摊到多个数据库下的多张数据表中。以此来进一步提升预约系统中数据的读写性能。")]),t._v(" "),r("h2",{attrs:{id:"三、预约系统优化目标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、预约系统优化目标"}},[t._v("#")]),t._v(" 三、预约系统优化目标")]),t._v(" "),r("p",[t._v("对预约系统中的数据进行分库分表设计，在分库分表设计上，会存在多种策略，比较常见的策略：比如按照时间进行库存分表，以某个字段为分片键进行分库分表等。")]),t._v(" "),r("p",[t._v("预约系统作为整个秒杀交易链路中的一环，如果秒杀商品开通了预约通道，则用户需要提前成功预约商品后，才能正常抢购下单，如果某个时刻，有大量用户预约秒杀商品，则预约系统可能会出现类似秒杀的场景，具备秒杀系统的某些特点。所以，对于预约系统来说，按照时间进行分库分表同样是不太合适的。所以，我们在预约系统中采用的分库分表策略，是以数据表中某个字段为分片键进行分库分表。")]),t._v(" "),r("h2",{attrs:{id:"四、分库分表设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、分库分表设计"}},[t._v("#")]),t._v(" 四、分库分表设计")]),t._v(" "),r("p",[t._v("对于预约系统来说，会对商品的预约配置信息、用户预约秒杀商品的记录数据进行分库分表。由于预约系统需要同时支持基于用户和基于商品来查询预约记录信息，所以，对用户预约秒杀商品的记录数据来说，需要基于用户和商品进行分库分表。")]),t._v(" "),r("h3",{attrs:{id:"_4-1-预约配置分库分表设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-预约配置分库分表设计"}},[t._v("#")]),t._v(" 4.1 预约配置分库分表设计")]),t._v(" "),r("p",[t._v("对于预约系统中商品的预约配置信息来说，一条商品数据可以对应着一条商品的预约配置信息。此时，可以使用商品的id作为分片键进行分库分表。")]),t._v(" "),r("p",[t._v("这里，我们依然使用了三个库来实现（实际场景可以根据具体需要灵活配置分库和分表的数量），也就是将原来的一个预约数据库从商品维度分成三个库，并且每个数据库中有三张数据表。其中，每个数据库和数据表都会分摊一部分数据的读写压力。")]),t._v(" "),r("p",[r("strong",[t._v("这里需要注意的是：在我们实现的预约系统中，使用了三个数据库和三张数据表来对秒杀商品的预约配置数据进行分库分表设计，在实际场景下，大家可以根据实际的业务需要，灵活配置分库分表的数量。")])]),t._v(" "),r("p",[t._v("对于秒杀商品预约配置的分库分表如图73-1所示。")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=_.exports}}]);