(window.webpackJsonp=window.webpackJsonp||[]).push([[771],{1070:function(t,r,e){"use strict";e.r(r);var a=e(7),_=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《分布式im系统》即时通讯后端服务-第07节-即时通讯后端服务群聊处理器的设计与实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《分布式im系统》即时通讯后端服务-第07节-即时通讯后端服务群聊处理器的设计与实现"}},[t._v("#")]),t._v(" 《分布式IM系统》即时通讯后端服务-第07节：即时通讯后端服务群聊处理器的设计与实现")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("课程视频："),r("a",{attrs:{href:"https://t.zsxq.com/15jflSI9W",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/15jflSI9W"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本节难度：★★☆☆☆")]),t._v(" "),r("li",[t._v("本节重点：对即时通讯后端服务的群聊处理器进行设计和实现，并对用户终端发送群聊消息的流程进行设计，掌握消息处理器的设计方法和落地实现方案。并能够将其灵活应用到自身实际项目中。")]),t._v(" "),r("li",[t._v("课程视频："),r("a",{attrs:{href:"https://t.zsxq.com/15jflSI9W",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/15jflSI9W"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("分布式IM即时通讯系统除了要支持单聊外，另一个非常重要的功能就是要实现用户与其他多个用户之间的群聊。也就是一个用户可以和其他多个用户在一个群组中进行聊天。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("用户通过终端登录分布式IM即时通讯系统后，向一个群组发送消息时，大后端平台会解析消息数据，并根据消息接收者ID和终端类型获取即时通讯服务的ID，随后根据即时通讯服务的ID对消息数据进行分组，并通过大后端平台集成的即时通讯SDK将分组后的消息发往消息中间件集群，即时通讯后端服务会监听消息中间件集群中的消息数据，循环获取当前分组中与用户终端建立的连接，通过与用户终端建立的连接向用户发送消息。")]),t._v(" "),r("h2",{attrs:{id:"二、本节诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本节诉求"}},[t._v("#")]),t._v(" 二、本节诉求")]),t._v(" "),r("p",[t._v("对即时通讯后端服务的群聊处理器进行设计和实现，并对用户终端发送群聊消息的流程进行设计，最终实现即时通讯后端服务通过消息处理器处理群聊消息的逻辑。")]),t._v(" "),r("h2",{attrs:{id:"三、流程设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、流程设计"}},[t._v("#")]),t._v(" 三、流程设计")]),t._v(" "),r("p",[t._v("分布式IM即时通讯系统的架构设计，大家回顾下总体架构篇章的"),r("a",{attrs:{href:"https://articles.zsxq.com/id_8pif15lf1lae.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《第01节：分布式IM即时通讯系统总体方案目标与架构设计》"),r("OutboundLink")],1),t._v(" ，这里不再赘述。")]),t._v(" "),r("p",[t._v("群聊就是在分布式IM即时通讯系统中，多个用户在同一个群组中进行聊天，此时在发送消息时，我们可以通过群组ID找出群内所有在线的用户，将消息即时发送给在线的用户。那些未在线的用户就按照单聊未在线的用户进行处理，如图7-1所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/im/2023-11-28-004.png?raw=true",width:"70%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("可以看到，群聊的流程如下所示。")]),t._v(" "),r("p",[t._v("（1）用户调用后端平台的接口向群组发送消息。")]),t._v(" "),r("p",[t._v("（2）后端平台将消息缓存并写入消息库。")]),t._v(" "),r("p",[t._v("（3）由于是向群组发送消息，群里有多个用户，此时就会从Redis中获取所有用户连接的IM即时通讯服务ID列表。")]),t._v(" "),r("p",[t._v("（4）对用户按照服务ID分组，将相同服务ID下的用户分在同一个逻辑分组里，方便后续推送消息，并且会记录未在线的用户列表。")]),t._v(" "),r("p",[t._v("（5）循环向每个服务ID对应的RocketMQ中的Topic发送消息。")]),t._v(" "),r("p",[t._v("（6）广播处理未在线用户的未读消息ID。")]),t._v(" "),r("p",[t._v("（7）IM即时通讯服务会监听自身服务ID对应的Topic，会随时接收推送到自身服务的消息。")]),t._v(" "),r("p",[t._v("（8）当IM即时通讯服务接收到消息后，此时用户掉线，或者用户不在线，向用户推送消息就会失败，或者未查询到用户与IM即时通讯服务建立的连接，就不会向用户推送消息。")]),t._v(" "),r("p",[t._v("（9）当用户登录分布式IM即时通讯系统后，会从后端平台拉取历史（离线）消息，并通过用户在线的流程，向用户推送消息。")]),t._v(" "),r("h2",{attrs:{id:"四、类结构设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、类结构设计"}},[t._v("#")]),t._v(" 四、类结构设计")]),t._v(" "),r("p",[t._v("有了前面对代码的扩展性设计，加入群聊的类结构设计也比较简单，如图7-2所示。")]),t._v(" "),r("h2",{attrs:{id:"查看全文"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看全文"}},[t._v("#")]),t._v(" 查看全文")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=_.exports}}]);