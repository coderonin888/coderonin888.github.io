(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{396:function(t,r,e){"use strict";e.r(r);var a=e(7),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《并发设计模式》第27章-生产者消费者模式-消息堆积问题场景分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《并发设计模式》第27章-生产者消费者模式-消息堆积问题场景分析"}},[t._v("#")]),t._v(" 《并发设计模式》第27章-生产者消费者模式-消息堆积问题场景分析")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★☆☆☆")]),t._v(" "),r("li",[t._v("本章重点：了解生产者消费者模式的使用场景，重点掌握生产者消费者模式消息堆积问题的场景，并能够结合自身项目实际场景思考如何将生产者消费者模式灵活应用到自身实际项目中。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("在基于生产者消费者模式开发实际项目时，当单位时间内，如果生产者生产数据的速度大于消费者消费数据的速度，就有可能产生消息堆积问题。如果这种情况持续一段时间，达到一定程度后，可能会对系统造成很大的影响，甚至这种影响是致命的。")]),t._v(" "),r("h2",{attrs:{id:"一、故事背景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、故事背景"}},[t._v("#")]),t._v(" 一、故事背景")]),t._v(" "),r("p",[t._v("在前面的文章中，小菜想基于生产者消费者模式来优化个人文库系统，奈何自己功力不够，无法落实优化工作。不过在老王耐心的指导下，手把手给小菜分析问题，从源码层面给出解决方案，这使得小菜后来得以再次基于生产者消费者模式优化个人文库系统。")]),t._v(" "),r("p",[t._v("但是，使用了生产者消费者模式，从技术结合业务的角度来说，我们要考虑这样一个问题，当单位时间内，生产者生产数据的速度大于消费者消费数据的速度时，就会产生消息堆积的问题，如果这种情况持续一段时间，达到一定程度，可能就会对系统造成很大的影响，甚至会造成系统崩溃宕机。")]),t._v(" "),r("p",[t._v("在实际业务场景下，消息堆积问题往往可以细分成不同的业务场景，本章，就对消息堆积问题细分的业务场景进行简单的介绍。")]),t._v(" "),r("h2",{attrs:{id:"二、消息堆积的场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、消息堆积的场景"}},[t._v("#")]),t._v(" 二、消息堆积的场景")]),t._v(" "),r("p",[t._v("从实际业务场景出发，可以将消息对接的场景细分为：生产过快-阻塞队列已满，生产一般-消费过慢和阻塞队列过小三种场景。")]),t._v(" "),r("h3",{attrs:{id:"_2-1-生产过快-消息队列阻塞"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-生产过快-消息队列阻塞"}},[t._v("#")]),t._v(" 2.1 生产过快-消息队列阻塞")]),t._v(" "),r("p",[t._v("生产过快-阻塞队列已满的场景，说的是生产者生产数据的速度非常快，消费者消费数据的速度根本跟不上生产者生产数据的速度，最终导致阻塞队列中堆满了待处理的任务，如图27-1所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/assets/images/core/concurrent/2023-10-14-001.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("可以看到，当阻塞队列的大小为2000时，如果生产者每分钟生产550条数据，而消费者每分钟只能消费50条数据时，4分钟后，阻塞队列中就会堆满待处理的任务。")]),t._v(" "),r("h3",{attrs:{id:"_2-2-生产一般-消费过慢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-生产一般-消费过慢"}},[t._v("#")]),t._v(" 2.2 生产一般-消费过慢")]),t._v(" "),r("p",[t._v("生产一般-消费过慢的场景，说的是生产者生产数据的速度一般，消费者消费数据的速度过慢，远远跟不上生产者生产数据的速度，导致了消息堆积，如图27-2所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/assets/images/core/concurrent/2023-10-14-002.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("可以看到，当阻塞队列的大小为2000时，如果生产者每分钟生产280条数据，而消费者每分钟只能消费30条数据时，8分钟后，阻塞队列中就会堆满待处理的任务。")]),t._v(" "),r("h3",{attrs:{id:"_2-3-阻塞队列过小"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-阻塞队列过小"}},[t._v("#")]),t._v(" 2.3 阻塞队列过小")]),t._v(" "),r("p",[t._v("阻塞队列过小的场景，说的是生产者和消费者的速度一般，消费者的速度还是会比生产者慢，但是阻塞队列过小，很容易造成阻塞队列被堆满待处理的任务，如图27-3所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/assets/images/core/concurrent/2023-10-14-003.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("可以看到，当阻塞队列的大小为100，如果生产者每分钟生产30条数据，而消费者每分钟只能消费20条数据，10分钟后，阻塞队列中就会堆满待处理的任务。")]),t._v(" "),r("h2",{attrs:{id:"三、消息堆积的影响"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、消息堆积的影响"}},[t._v("#")]),t._v(" 三、消息堆积的影响")]),t._v(" "),r("h2",{attrs:{id:"查看全文"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看全文"}},[t._v("#")]),t._v(" 查看全文")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=s.exports}}]);