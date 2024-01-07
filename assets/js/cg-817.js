(window.webpackJsonp=window.webpackJsonp||[]).push([[817],{1118:function(t,r,e){"use strict";e.r(r);var a=e(7),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第16章-秒杀活动用户端业务开发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第16章-秒杀活动用户端业务开发"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第16章：秒杀活动用户端业务开发")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("课程视频："),r("a",{attrs:{href:"https://t.zsxq.com/10KA0pep3",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/10KA0pep3"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★☆☆☆")]),t._v(" "),r("li",[t._v("本章重点：完成秒杀活动用户端业务开发，用户登录系统后能够查看秒杀活动，并将前后端代码联调成功。")]),t._v(" "),r("li",[t._v("课程视频："),r("a",{attrs:{href:"https://t.zsxq.com/10KA0pep3",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/10KA0pep3"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("用户是秒杀系统的重要参与者，对于用户来说，可以查看秒杀活动，并能够通过秒杀活动来查看对应的秒杀商品，而不需要对秒杀活动进行新增、修改和删除等操作。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("大量的用户请求是造成秒杀系统高并发大量的根本原因，所以说，用户才是秒杀系统最根本的使用者。对于秒杀系统来说，用户端的功能要尽量简化，不要有过多复杂的业务逻辑。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("相比于运营端，用户端的功能会更加精简。用户端不会对秒杀活动进行更新操作，只会查看秒杀活动以及秒杀活动下的商品，对商品进行抢购下单。本章，就简单实现用户端对秒杀活动的查看功能。")]),t._v(" "),r("h2",{attrs:{id:"三、用户端流程设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、用户端流程设计"}},[t._v("#")]),t._v(" 三、用户端流程设计")]),t._v(" "),r("p",[t._v("用户在登录秒杀系统后，能够查看秒杀活动，简化后的流程如图16-1所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-05-20-001.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("可以看到，关于秒杀活动，用户端的流程比运营端的流程简化很多，用户登录系统后，会查看秒杀活动，通过秒杀活动查看秒杀商品。")]),t._v(" "),r("h2",{attrs:{id:"四、用户端页面开发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、用户端页面开发"}},[t._v("#")]),t._v(" 四、用户端页面开发")]),t._v(" "),r("p",[t._v("在用户端实现的秒杀活动业务中，精简后可以只剩下一个查看秒杀活动列表的页面，具体开发步骤如下所示。")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=s.exports}}]);