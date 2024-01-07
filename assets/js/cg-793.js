(window.webpackJsonp=window.webpackJsonp||[]).push([[793],{1094:function(t,r,e){"use strict";e.r(r);var _=e(7),a=Object(_.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《分布式im系统》需求设计-第04节-分布式im即时通讯系统技术流程梳理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《分布式im系统》需求设计-第04节-分布式im即时通讯系统技术流程梳理"}},[t._v("#")]),t._v(" 《分布式IM系统》需求设计-第04节：分布式IM即时通讯系统技术流程梳理")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("课程视频："),r("a",{attrs:{href:"https://t.zsxq.com/144SWUMPi",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/144SWUMPi"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本节难度：★★★☆☆")]),t._v(" "),r("li",[t._v("本节重点：从技术角度梳理分布式IM即时通讯系统的流程，用户请求交互链路、发送消息交互链路、单聊交互链路和群聊交互链路，使研发人员能够从技术角度理解分布式IM即时通讯系统的整个技术流程与技术交互过程。")]),t._v(" "),r("li",[t._v("课程视频："),r("a",{attrs:{href:"https://t.zsxq.com/144SWUMPi",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/144SWUMPi"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("在前面的文章中，我们对建设分布式IM即时通讯系统过程中要实现的目标与存在的挑战有了大致的了解。并且大致梳理了分布式IM即时通讯系统的功能需求和业务流程，心中大概明确了要开发哪些功能。除了这些，作为技术人员，我们还要从技术的角度梳理下分布式IM即时通讯系统的交互流程。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("运营或产品经理从实际场景和业务角度提出对应的业务需求后，作为研发人员，不仅需求理解场景和业务需求，还需要将这些场景和业务需求转化成技术实现方案。从技术的角度出发，来梳理需要实现的逻辑与交互流程，例如，用户请求交互链路、发送消息交互链路、单聊交互链路和群聊交互链路等，这样才能从整体链路上理解分布式IM即时通讯系统的实现。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("在正式设计和编码实现分布式IM即时通讯系统之前，除了要理解业务需求和业务流程外，作为技术人员，还有一项非常重要的事情，那就是从技术角度好好梳理下分布式IM即时通讯系统的请求链路，交互逻辑和技术流程，以便更好的设计和研发分布式IM即时通讯系统。")]),t._v(" "),r("p",[t._v("本章，就从技术的角度出发，梳理下分布式IM即时通讯系统的用户请求交互链路、发送消息交互链路、单聊交互链路和群聊交互链路。")]),t._v(" "),r("h2",{attrs:{id:"三、用户请求交互链路"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、用户请求交互链路"}},[t._v("#")]),t._v(" 三、用户请求交互链路")]),t._v(" "),r("p",[t._v("从技术的角度来讲，用户通过客户端访问分布式IM即时通讯系统，一般都是通过域名来访问的，通过域名访问系统，就需要DNS服务器做域名解析，将域名解析成对应的IP地址来访问指定的服务器。进入服务器后，会通过Kong/OpenResty/Nginx进入系统的业务网关，再到我们部署的后端平台，IM即时通讯服务。由后端平台、IM即时通讯服务再到基础服务，由基础服务再到数据存储服务。向客户端返回数据时，再按照相反的顺序层层返回。整体链路如图4-1所示。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/im/2023-11-28-001.png?raw=true",width:"70%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("可以看到，当用户通过域名访问分布式IM即时通讯系统时，会经过如下的请求链路。")]),t._v(" "),r("p",[t._v("（1）用户通过PC/H5/小程序/APP访问分布式IM即时通讯系统时，请求可能会分为HTTP请求、TCP请求或者是WebSocket请求，不管是哪种请求，都会先经过DNS服务器对域名进行解析，解析出IP地址，通过IP地址定位到最终的服务器。")]),t._v(" "),r("p",[t._v("（2）请求进入服务器后，会先经过Kong/OpenResty/Nginx等流量网关或者负载均衡器，将请求发往业务网关。")]),t._v(" "),r("p",[t._v("（3）请求进入业务网关后，如果是HTTP请求，则业务网关会将请求路由到后端平台，如果后端平台此时的业务需要发送即时消息，则后端平台会通过集成的SDK向IM即时通讯服务发送即时消息。如果是TCP请求或者WebSocket请求，则业务网关会将请求路由到IM即时通讯服务，由IM即时通讯服务来处理即时消息。")]),t._v(" "),r("p",[t._v("（4）后端平台和IM即时通讯服务接收到请求后，进行对应的业务处理后，都会调用基础服务的接口来进一步处理业务。")]),t._v(" "),r("p",[t._v("（5）基础服务执行完业务逻辑，会将数据写入数据存储服务，比如Redis、MySQL、ES等数据存储服务中。")]),t._v(" "),r("p",[t._v("（6）后端平台会集成IM即时通讯SDK，并且会集成对接OpenAI大模型的SDK。")]),t._v(" "),r("p",[t._v("当分布式IM即时通讯系统处理完业务逻辑向客户端响应结果数据时，会经过如下的响应链路。")]),t._v(" "),r("p",[t._v("（1）如果客户端只是调用后端平台的接口，来执行后端平台的逻辑，例如搜索用户、查看好友列表、搜索群组、查看群列表等不涉及即时通讯的逻辑时，后端平台处理完业务逻辑并记录相关的数据后，就会按照与请求相反的链路响应数据。")]),t._v(" "),r("p",[t._v("（2）如果客户端调用后端平台的接口，通过后端平台的接口来发送即时消息时，后端平台处理完业务逻辑并记录相应的数据后，会通过集成的SDK服务向IM即时通讯服务发送即时消息，IM即时通讯服务接收到消息后，会通过客户端与IM即时通讯服务建立的长链接，向客户端发送即时消息。")]),t._v(" "),r("p",[t._v("（3）如果客户端是通过WebSocket或者TCP等协议向IM即时通讯服务发送消息，IM即时通讯服务处理完业务逻辑并记录数据后，会通过客户端与IM即时通讯服务建立的长链接，向客户端发送即时消息。")]),t._v(" "),r("h2",{attrs:{id:"四、发送消息交互链路"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、发送消息交互链路"}},[t._v("#")]),t._v(" 四、发送消息交互链路")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"https://public.zsxq.com/groups/48848484411888.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=a.exports}}]);