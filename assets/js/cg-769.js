(window.webpackJsonp=window.webpackJsonp||[]).push([[769],{1069:function(t,r,e){"use strict";e.r(r);var a=e(7),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《分布式im系统》即时通讯后端服务-第05节-即时通讯后端服务心跳处理器的设计与实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《分布式im系统》即时通讯后端服务-第05节-即时通讯后端服务心跳处理器的设计与实现"}},[t._v("#")]),t._v(" 《分布式IM系统》即时通讯后端服务-第05节：即时通讯后端服务心跳处理器的设计与实现")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("课程视频："),r("a",{attrs:{href:"https://t.zsxq.com/15bXHo0dr",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/15bXHo0dr"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本节难度：★★☆☆☆")]),t._v(" "),r("li",[t._v("本节重点：对即时通讯后端服务的心跳处理器进行设计和实现，并对用户终端发送心跳的流程进行设计，掌握消息处理器的设计方法和落地实现方案。并能够将其灵活应用到自身实际项目中。")]),t._v(" "),r("li",[t._v("课程视频："),r("a",{attrs:{href:"https://t.zsxq.com/15bXHo0dr",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/15bXHo0dr"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("心跳保活是维持连接有效性的一种重要措施，在很多场景下都可以使用心跳机制来维持连接的有效性。例如：通过心跳机制来维持长连接的有效性。在服务治理层面，通过心跳机制检测注册中心服务的有效性，通过心跳机制检测服务实例是否下线等等。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("在前面的文章中，我们对即时通讯后端服务登录处理器进行了设计与实现，并对整个消息处理器的大体框架源码进行了设计和实现。在即时通讯后端服务中，最主要也是最核心的功能就是消息的收发，消息总体上会分成：登录消息、心跳消息、单聊消息和群聊消息，每种消息都会通过消息处理器进行处理。")]),t._v(" "),r("h2",{attrs:{id:"二、本节诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本节诉求"}},[t._v("#")]),t._v(" 二、本节诉求")]),t._v(" "),r("p",[t._v("对即时通讯后端服务心跳处理器进行设计与实现，实现即时通讯后端服务的整体心跳机制，并结合心跳机制通过一定的规则延长用户在线状态的有效性，也就是延长分布式缓存中存储的与用户终端建立连接的即时通讯后端服务ID的有效性。同时，向用户终端响应心跳消息。")]),t._v(" "),r("h2",{attrs:{id:"三、流程设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、流程设计"}},[t._v("#")]),t._v(" 三、流程设计")]),t._v(" "),r("p",[t._v("用户通过终端登录分布式IM即时通讯系统后，用户终端会与即时通讯后端服务建立长连接，用户终端无论是向即时通讯后端服务发送登录消息，还是向即时通讯后端服务发送心跳消息，整体流程如图5-1所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/im/2023-12-19-001.png?raw=true",width:"70%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("发送心跳消息的流程与发送登录消息的流程大体相似，都是即时通讯后端服务接收到消息后，调用消息处理器工厂的方法从IOC容器中获取对应的消息处理器，进而处理相应的消息。")]),t._v(" "),r("h2",{attrs:{id:"四、类结构设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、类结构设计"}},[t._v("#")]),t._v(" 四、类结构设计")]),t._v(" "),r("p",[t._v("由于我们之前已经对消息处理器的大体框架进行了设计和实现，并且在消息处理器的设计和实现中，我们考虑到的后续的扩展性，所以，在原来的基础上新增心跳处理器是非常方便的，整体类图如图5-2所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/im/2023-12-19-002.png?raw=true",width:"70%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("可以看到，整体类结构比较简单，我们只需要新增一个HeartbeatProcessor类，实现MessageProcessor接口，并在ProcessorFactory工厂类中进行配置即可。")]),t._v(" "),r("h2",{attrs:{id:"五、编码实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#五、编码实现"}},[t._v("#")]),t._v(" 五、编码实现")]),t._v(" "),r("h2",{attrs:{id:"查看全文"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看全文"}},[t._v("#")]),t._v(" 查看全文")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=s.exports}}]);