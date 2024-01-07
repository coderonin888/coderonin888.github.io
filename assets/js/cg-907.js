(window.webpackJsonp=window.webpackJsonp||[]).push([[907],{1207:function(t,r,a){"use strict";a.r(r);var e=a(7),s=Object(e.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第106章-日志治理概述、原则与架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第106章-日志治理概述、原则与架构"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第106章：日志治理概述、原则与架构")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★☆☆☆")]),t._v(" "),r("li",[t._v("本章重点：掌握日志可视化的基本概念与落地原则，从理论层面了解日志治理的重要性，并能够灵活将实现方案应用到自身实际项目中。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("日志对于系统的建设是非常重要的，我们可以通过日志分析出系统的执行流程、性能瓶颈，并且能够快速定位出系统的故障所在。如果我们只是能够从命令行查看日志的话，也是非常不方便的，此时，我们需要对系统的日志进行治理。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("每个系统都会或多或少的记录一些日志信息，这些日志不仅能够记录了系统运行过程中的执行流程，更是在系统出现故障时，我们能够快速定位问题和排查故障的依据，通过日志，我们还能够快速了解到整个系统的性能瓶颈，从而更加高效和有针对性的优化系统，并提升系统的性能。可以这么说，如果我们能够非常方便的观测到日志，那么对于我们后期维护系统是非常方便的。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("了解日志治理的三大组成与日志原则，在此基础上进一步掌握日志治理的架构，结合这些基本知识掌握秒杀系统中的日志治理，并结合自身实际情况将其灵活应用到自身实际项目中。")]),t._v(" "),r("h2",{attrs:{id:"三、日志治理三大组成"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、日志治理三大组成"}},[t._v("#")]),t._v(" 三、日志治理三大组成")]),t._v(" "),r("p",[t._v("其实，对于日志治理来说，有三大组成部分，分别是："),r("strong",[t._v("指标（Metrics）")]),t._v("、"),r("strong",[t._v("日志（Logging）")]),t._v(" 和"),r("strong",[t._v("跟踪（Tracing）")]),t._v("，如图106-1所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/seckill-2023-09-16-001.png?raw=true",width:"60%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("彻底理解和掌握日志的三大组成部分，有助于我们更好的实现日志治理。")]),t._v(" "),r("h3",{attrs:{id:"_3-1-指标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-指标"}},[t._v("#")]),t._v(" 3.1 指标")]),t._v(" "),r("p",[t._v("指标可以用作监控的基础，比如当前系统的QPS、TPS、TTL等指标，内存、CPU、磁盘的占用率等等，可以都称之为指标数据。总之，指标就是在某段时间内统计出来的结果数值或者度量系统运行情况的度量值。")]),t._v(" "),r("h3",{attrs:{id:"_3-2-日志"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-日志"}},[t._v("#")]),t._v(" 3.2 日志")]),t._v(" "),r("p",[t._v("系统输出的日志信息，可以分为系统日志和业务日志，日志治理的基础就来源于输出的日志信息。如果系统在立项时，在系统架构层面就约束好日志的输出格式，那后续就非常便于日志处理系统的自动索引和查询。这里，建议大家试用结构化的方式读取日志，例如JSON格式等等。")]),t._v(" "),r("h3",{attrs:{id:"_3-3-跟踪"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-跟踪"}},[t._v("#")]),t._v(" 3.3 跟踪")]),t._v(" "),r("p",[t._v("如果我们部署的只是单体应用系统，那我们查看日志可以直接通过命令行，或者可视化界面就行了。但是一旦升级为分布式或微服务应用，系统中使用了各种中间件时，我们需要对日志进行跨服务的跟踪，深入了解请求与响应的信息，并能够快速观测到系统出现的异常和错误信息，并定位到系统的性能瓶颈。")]),t._v(" "),r("h2",{attrs:{id:"四、日志治理基本原则"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、日志治理基本原则"}},[t._v("#")]),t._v(" 四、日志治理基本原则")]),t._v(" "),r("p",[t._v("如果是单体应用，日志治理就非常简单。如果是分布式或者微服务应用，可能会部署成数十台、数百台的服务实例，如果在这些服务中通过排查日志定位到指定的错误日志或者关联各个服务的日志进行查询，那就非常困难了。所以，在日志治理上，我们要遵循一定的原则，如图106-2所示。")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=s.exports}}]);