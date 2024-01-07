(window.webpackJsonp=window.webpackJsonp||[]).push([[837],{1137:function(t,r,e){"use strict";e.r(r);var a=e(7),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第36章-领域事件通用缓存模型设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第36章-领域事件通用缓存模型设计"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第36章：领域事件通用缓存模型设计")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("课程视频："),r("a",{attrs:{href:"https://t.zsxq.com/13DfRMKNd",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/13DfRMKNd"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★★☆☆")]),t._v(" "),r("li",[t._v("本章重点：实现DDD架构设计的领域事件通用模型设计，掌握DDD架构设计的精髓，并能够熟练运用到自己的项目中。")]),t._v(" "),r("li",[t._v("课程视频："),r("a",{attrs:{href:"https://t.zsxq.com/13DfRMKNd",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/13DfRMKNd"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("在前面的文章中，对秒杀系统的缓存进行了设计，并将秒杀活动业务和秒杀商品业务整合进缓存，那这里就存在一个问题了，如果在运营管理端发布了活动和商品，或者对活动或者商品的状态进行变更，那如何及时同步到缓存中呢？")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("对活动和商品数据整合缓存后，就面临一个比较棘手的问题，那就是数据一致性的问题，最直接的就是缓存数据与数据库数据一致性的问题。将活动和商品数据整合缓存后，当运营端发布了活动或者商品，或者对活动或者商品的状态进行了变更，如果缓存中的数据未发生变化，那么客户端获取活动或者商品数据时，就会获取到脏数据。")]),t._v(" "),r("p",[t._v("很多小伙伴会想到的一种方案就是：在运营管理端发布活动或者商品，或者变更活动或者商品的状态时，同步缓存数据。但是这种方案会增加数据操作失败的风险。还有一种方案就是在运营管理端对活动和商品进行管理时，同步清除缓存中的数据，这种方案在流量比较小的系统中是可行的，如果放到类似秒杀系统这种高并发、大流量的场景中，直接清除缓存中的数据，如果对流量控制不佳，很有可能使大量的流量瞬间打入数据库而导致数据库宕机崩溃。")]),t._v(" "),r("p",[t._v("所以，在运营管理端对活动和商品进行管理时，无论是同步更新缓存数据，还是同步清除缓存的数据，都是不太可行的，那我们要如何解决这些问题呢？")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("当活动和商品数据整合缓存后，在运营管理端对活动和商品进行管理时，可以对外发布一个事件，发布事件后即可不再关注处理事件的细节，类似于生产者-消费者模式，生产者生产消息，将消息发布到对应的消息队列或者消息中间件，而不必关注消费者是如何从消息队列或者消息中间件中获取数据并消费。")]),t._v(" "),r("p",[t._v("当在运营管理端对活动和商品进行管理时，执行完操作数据库的业务逻辑后，对外发布一个事件，方法即可结束。而在系统的其他领域层，会监听对应的事件，当接收到对应的事件后，更新缓存中的数据。")]),t._v(" "),r("p",[t._v("这种方式解耦了代码的业务逻辑，提高了程序的性能和可维护性。但是这种变更数据发布事件的模式，首先需要对发布事件的模型进行设计。本章，就针对秒杀系统中缓存数据的变更进行领域事件通用缓存模型设计。")]),t._v(" "),r("h2",{attrs:{id:"三、模型设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、模型设计"}},[t._v("#")]),t._v(" 三、模型设计")]),t._v(" "),r("p",[t._v("在设计领域事件时，使用到了阿里巴巴开源的Cola框架，关于Cola相关的知识，可以参见GitHub："),r("a",{attrs:{href:"https://github.com/alibaba/COLA",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/alibaba/COLA"),r("OutboundLink")],1),t._v("，在我们初步实现的秒杀系统中，会基于Cola框架来发布事件。")]),t._v(" "),r("h3",{attrs:{id:"_3-1-流程设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-流程设计"}},[t._v("#")]),t._v(" 3.1 流程设计")]),t._v(" "),r("p",[t._v("在秒杀系统中，针对秒杀系统中缓存数据的变更，领域事件发布的流程如图36-1所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-06-14-001.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=s.exports}}]);