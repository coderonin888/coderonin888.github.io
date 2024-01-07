(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{370:function(t,r,_){"use strict";_.r(r);var v=_(7),e=Object(v.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《并发设计模式》第01章-不可变模式-这特么到底是哪里不对"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《并发设计模式》第01章-不可变模式-这特么到底是哪里不对"}},[t._v("#")]),t._v(" 《并发设计模式》第01章-不可变模式-这特么到底是哪里不对？")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★☆☆☆")]),t._v(" "),r("li",[t._v("本章重点：以场景故事的形式讲述小菜到公司几天后，接到第一个统计调用商品详情接口次数的任务，在梳理了业务流程后，快速实现了功能，但测试结果与预期差距很大，排查和调试了一天也没定位到问题的过程。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("“这特么到底是哪里出了问题，我感觉没啥问题啊，为什么我统计出来的数据就是和运维统计出来的数据对不上呢？为啥运维统计出来的结果是正确的呢？我觉得自己的代码没毛病啊？”——此时的小菜已经纠结好久了，几乎到精神崩溃的边缘。")]),t._v(" "),r("h2",{attrs:{id:"一、需求背景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、需求背景"}},[t._v("#")]),t._v(" 一、需求背景")]),t._v(" "),r("p",[t._v("事情是这样的，小菜是一名刚从学校毕业的大学生，几乎没啥工作经验，凭借着在学校的传奇经历，顺利进入了某头部互联网大厂实习，刚来没几天，就被分到了一个统计线上调用商品详情接口次数的任务。说起来不就是统计一个接口的访问次数吗？这个需求小菜很懂，也很明白，没一会儿就搞定了，可是发布到测试环境测试时，却发生了各种诡异的问题。")]),t._v(" "),r("h2",{attrs:{id:"二、接手任务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、接手任务"}},[t._v("#")]),t._v(" 二、接手任务")]),t._v(" "),r("p",[t._v("时间过的真快，小菜不只不觉来公司实习快一周了，这几天基本都是学习公司技术资料和项目业务，平时自己写写demo，还没有真正写项目功能。")]),t._v(" "),r("p",[t._v("这不，这天小菜刚到公司，把自己厚重的电脑包往办公位一放，就看到产品经理屁颠屁颠的走过来了，不过不是找小菜的，而是径直走到了小菜的直属领导——老王的身边。")]),t._v(" "),r("p",[t._v("“王工，咱的社区电商项目不是刚上线吗？现在运营有个需求，要统计下访问调用商品详情接口的次数。”")]),t._v(" "),r("p",[t._v("“好，什么时候需要。”")]),t._v(" "),r("p",[t._v("“下周发布上线就行。”")]),t._v(" "),r("p",[t._v("“好的。”")]),t._v(" "),r("p",[t._v("老王把调用商品详情的接口梳理了下，这个需求确实比较简单。老王考虑到小菜来公司好几天了，学习了几天公司的技术资料和项目业务。心里就想着把这个简单的需求，交给小菜做。")]),t._v(" "),r("p",[t._v("“小菜，你过来下，给你个简单的任务”，老王说道。")]),t._v(" "),r("p",[t._v("于是小菜起身来到老王的身边，老王开始巴拉巴拉的为小菜讲解任务需求和对应的接口情况。")]),t._v(" "),r("p",[t._v("虽说小菜没啥工作经验吧，但是这个需求听起来确实比较简单，小菜听完老王的讲解后，说道：“没问题，我尽快完成”。")]),t._v(" "),r("p",[t._v("于是小菜回到工位，开始认真分析代码，并在本子上画实现的流程。")]),t._v(" "),r("h2",{attrs:{id:"三、梳理任务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、梳理任务"}},[t._v("#")]),t._v(" 三、梳理任务")]),t._v(" "),r("p",[t._v("虽说小菜没啥工作经验吧，但是他确实是懂得在搞清楚任务需求和实现流程之前，不会轻易干代码的。这也是他刚来公司的时候，老王跟他说的，说起老王，特么确实是个大好人，新人刚来公司的第一天，就会将自己的一些踩坑经验巴拉巴拉的分享给这些新人（我刚参加工作那会儿怎么就遇不见像老王这样的大好人呢？）。")]),t._v(" "),r("p",[t._v("经过认真的思考和仔细的梳理商品详情接口后，小菜画出了下面的这幅图。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/assets/images/core/concurrent/2023-09-18-001.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("客户端在访问系统接口时，首先会经过网关，由网关将访问系统的流量路由到后端微服务。在网关的设计和实现上，总体上会分为网关核心组件和网关控制台，网关的一些规则，比如接口统计、UV统计、PV统计，鉴权规则，其他规则等等，都是在网关控制台进行配置，并且在网关控制台的配置会及时生效。")]),t._v(" "),r("p",[t._v("网关采用责任链设计模式实现了一系列的拦截器链，比如风控拦截器、接口拦截器、鉴权拦截器、其他拦截器等，每个拦截器专注实现某种特定逻辑的校验规则，例如风控拦截器会调用风控系统检测请求是否存在风险，接口拦截器主要是统计接口层面的一些请求信息，鉴权拦截器主要是检测与鉴权相关的逻辑等等。到达网关的请求只有通过所有拦截器的校验后，才会被路由到后端服务。")]),t._v(" "),r("p",[t._v("梳理完请求的流程和网关的拦截器逻辑后，小菜拿着本子走到了老王的面前。")]),t._v(" "),r("p",[t._v("“老大，业务流程我梳理清楚了，你看看对吗？”")]),t._v(" "),r("p",[t._v("“好，我看看”。")]),t._v(" "),r("p",[t._v("大神就是大神，只见老王接过小菜的本子后，只是看了一眼，说道：“可以这样实现，没问题，实现的过程中遇到自己解决不了的问题，可以再问我。”")]),t._v(" "),r("p",[t._v("“好的”。")]),t._v(" "),r("p",[t._v("小菜回到了工位上。")]),t._v(" "),r("h2",{attrs:{id:"四、实现任务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、实现任务"}},[t._v("#")]),t._v(" 四、实现任务")]),t._v(" "),r("p",[t._v("要不说这个任务很简单呢？小菜梳理清楚业务流程，向老王确认可以这样实现后，回到工位，啪啦啪啦就翘起了键盘，没一会就完成了代码开发。")]),t._v(" "),r("h2",{attrs:{id:"查看全文"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看全文"}},[t._v("#")]),t._v(" 查看全文")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=e.exports}}]);