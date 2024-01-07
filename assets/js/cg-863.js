(window.webpackJsonp=window.webpackJsonp||[]).push([[863],{1164:function(t,r,e){"use strict";e.r(r);var a=e(7),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第62章-订单分库分表设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第62章-订单分库分表设计"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第62章：订单分库分表设计")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★★☆☆")]),t._v(" "),r("li",[t._v("本章重点：重点理解并掌握秒杀系统订单数据的分库分表设计，重点掌握订单数据的分库分表设计与流程，并能够做到举一反三将分库分表设计的核心思想与落地方案灵活运用到自身实际项目中。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("在前面的文章中，我们已经实现了对秒杀商品库存的分库分表和分桶设计和实现，对数据进行分库分表和分桶设计后，能够极大的提升数据库数据的读写性能。其实，在秒杀系统中，除了商品库存会产生大量的并发读写操作外，对于用户在秒杀系统中抢购下单产生的订单数据，也会产生大量的并发读写操作。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("经过对秒杀系统的微服务化改造，以及对商品库存数据的分库分表和分桶设计，目前秒杀系统的性能比之前有了质的提升。用户通过秒杀系统抢购商品下单的过程中，除了高并发读操作外，有两处核心业务会存在并发读写的场景。一个是读写商品库存，一个是读写秒杀订单。尤其是在异步下单模式下，会有大量的下单请求涌入系统，并且也会有大量的请求来读取下单状态。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("对秒杀系统中的订单数据进行分库分表设计，将单个数据库和单张数据表的读写压力，按照一定的规则分摊到多个数据库下的多张数据表中。以此来进一步提升秒杀系统读写订单数据的性能。")]),t._v(" "),r("h2",{attrs:{id:"三、订单优化目标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、订单优化目标"}},[t._v("#")]),t._v(" 三、订单优化目标")]),t._v(" "),r("p",[t._v("对秒杀系统中的订单数据库进行分库分表设计，在分库分表设计上，会存在多种策略，比较常见的策略：比如按照时间进行库存分表，以某个字段为分片键进行分库分表等。")]),t._v(" "),r("p",[t._v("对于像秒杀这种瞬时高并发、大流量的系统来说，按照时间进行分库分表显然是不太合适的，所以，我们会以订单表中的某个字段为分片键设计分库分库。")]),t._v(" "),r("h2",{attrs:{id:"四、分库分表设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、分库分表设计"}},[t._v("#")]),t._v(" 四、分库分表设计")]),t._v(" "),r("p",[t._v("在分库分表的设计上，我们会从两个维度进行分库分表，一个是用户维度，一个是商品维度。用户维度的分库分表主要是为了满足用户角度的高并发读写操作，而商品维度的分库分表主要是为了满足商户或者平台角度从商品维度查看订单的需求。")]),t._v(" "),r("h3",{attrs:{id:"_4-1-用户维度分库分表设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-用户维度分库分表设计"}},[t._v("#")]),t._v(" 4.1 用户维度分库分表设计")]),t._v(" "),r("p",[t._v("用户维度的分库分表，顾名思义，会使用用户的id作为分片键对订单数据库进行分库分表，将同一个用户的订单数据路由到相同数据库的相同数据表中，避免跨库和跨表操作带来的性能损失。")]),t._v(" "),r("p",[t._v("这里我们依然使用了三个库来实现（实际场景可以根据具体需要灵活配置分库和分表的数量），也就是将原来的一个订单数据库从用户维度分成三个库，并且每个数据库中有三张数据表。其中，每个数据库和数据表都会分摊一部分数据的读写压力。")]),t._v(" "),r("p",[r("strong",[t._v("这里需要注意的是：在我们实现的秒杀系统中，使用了三个数据库和三张数据表来对用户维度的订单数据进行分库分表设计，在实际场景下，大家可以根据实际的业务需要，灵活配置分库分表的数量。")])]),t._v(" "),r("p",[t._v("对于用户维度的分库分表如图62-1所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-07-31-001.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("可以看到，从用户角度，会将订单数据库分成三个数据库，并且每个数据库会分为三张数据表，整体上以用户id作为分片键，保证同一个用户的订单数据会被路由到同一个数据库中的同一张数据表中。")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=s.exports}}]);