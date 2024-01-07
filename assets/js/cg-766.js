(window.webpackJsonp=window.webpackJsonp||[]).push([[766],{1066:function(t,s,a){"use strict";a.r(s);var e=a(7),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"《分布式im系统》即时通讯后端服务-第02节-即时通讯后端服务自定义编解码器的设计与实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#《分布式im系统》即时通讯后端服务-第02节-即时通讯后端服务自定义编解码器的设计与实现"}},[t._v("#")]),t._v(" 《分布式IM系统》即时通讯后端服务-第02节：即时通讯后端服务自定义编解码器的设计与实现")]),t._v(" "),s("p",[t._v("作者：冰河\n"),s("br"),t._v("星球："),s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("博客："),s("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("文章汇总："),s("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("源码获取地址："),s("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("课程视频："),s("a",{attrs:{href:"https://t.zsxq.com/154VxZSq4",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/154VxZSq4"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),s("ul",[s("li",[t._v("本节难度：★★☆☆☆")]),t._v(" "),s("li",[t._v("本节重点：对即时通讯后端服务的编解码器进行设计与实现，掌握Netty中自定义编解码器的设计与实现，并能够将其灵活应用到自身实际项目中。")]),t._v(" "),s("li",[t._v("课程视频："),s("a",{attrs:{href:"https://t.zsxq.com/154VxZSq4",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/154VxZSq4"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),s("p",[t._v("数据在网络中传输时，离不开通信协议，同样，数据在应用层之间通信，也需要实现各种各样的网络协议。在项目开发过程中，我们就需要去构建适合自己业务场景的应用层协议。")]),t._v(" "),s("h2",{attrs:{id:"一、前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),s("p",[t._v("在前面的文章中，我们对即时通讯后端服务的通用代码进行设计和实现，总体上实现了即时通讯后端服务的主要系统框架，对于其他细节部分还有待完善。其中，就包括了编解码器的设计和实现。本节，就对即时通讯后端服务的编解码器进行设计和实现，以此满足数据在即时通讯后端服务中流转的最基本要求。")]),t._v(" "),s("h2",{attrs:{id:"二、本章诉求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),s("p",[t._v("对即时通讯后端服务的编解码器进行设计与实现，掌握Netty中自定义编解码器的设计与实现，了解实现自定义编解码器与自定义通信协议的原理和落地方案，并能够将其灵活应用到自身实际项目中。")]),t._v(" "),s("h2",{attrs:{id:"三、自定义通信协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、自定义通信协议"}},[t._v("#")]),t._v(" 三、自定义通信协议")]),t._v(" "),s("p",[t._v("Netty是一个非常优秀的网络通信框架，在Netty中，提供了非常丰富的编解码器的抽象类，我们基于这些编解码器能够非常方便的进行扩展，并实现自定义的编解码器。")]),t._v(" "),s("p",[t._v("在Netty中，顾名思义，编解码器可以分成编码器和解码器两部分。")]),t._v(" "),s("p",[t._v("常用的编码器类型如下：")]),t._v(" "),s("ul",[s("li",[t._v("MessageToByteEncoder：将对象编码成字节流。")]),t._v(" "),s("li",[t._v("MessageToMessageEncoder：将一种消息类型编码成另外一种消息类型。")])]),t._v(" "),s("p",[t._v("常用解码器类型如下：")]),t._v(" "),s("ul",[s("li",[t._v("ByteToMessageDecoder/ReplayingDecoder 将字节流解码为消息对象。")]),t._v(" "),s("li",[t._v("MessageToMessageDecoder 将一种消息类型解码为另外一种消息类型。")])]),t._v(" "),s("p",[t._v("在Netty中，编解码器还可以细分成一次编解码器和二次编解码器。以解码器为例，解码器还可以分成一次解码器和二次解码器，一次解码器用于解决TCP粘包和拆包的问题，按照协议解析后得到字节流数据，此时这些字节流数据还不能供我们在项目中直接使用。如果我们需要将这些字节流数据转换成所需要的对象模型，就需要使用二次解码器实现。同理，编码器的过程与解码器的过程正好相反。")]),t._v(" "),s("p",[t._v("一次编解码器和二次编解码器分别如下所示。")]),t._v(" "),s("ul",[s("li",[t._v("一次编解码器：MessageToByteEncoder/ByteToMessageDecoder。")]),t._v(" "),s("li",[t._v("二次编解码器：MessageToMessageEncoder/MessageToMessageDecoder。")])]),t._v(" "),s("h2",{attrs:{id:"四、netty编码器类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、netty编码器类"}},[t._v("#")]),t._v(" 四、Netty编码器类")]),t._v(" "),s("p",[t._v("在Netty中，编码器类的类图如图2-1所示。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://binghe.gitcode.host/images/project/im/2023-12-16-001.png?raw=true",width:"70%"}}),t._v(" "),s("br")]),t._v(" "),s("p",[t._v("通过Netty中编码器类的类图可以看出，编码器类是ChanneOutboundHandler接口的实现类，主要操作的是Outbound的出站数据，主要包括：MessageToByteEncoder类和MessageToMessageEncoder类。")]),t._v(" "),s("p",[s("strong",[t._v("（1）MessageToByteEncoder类")])]),t._v(" "),s("p",[t._v("MessageToByteEncoder类主要的作用就是将对象编码成字节流，在MessageToByteEncoder类中，提供了一个encode()抽象方法，我们继承MessageToByteEncoder类，实现encode()方法，即可实现自定义编码的功能，如下所示。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringMessageToByteEncoder")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MessageToByteEncoder")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChannelHandlerContext")]),t._v(" channelHandlerContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ByteBuf")]),t._v(" byteBuf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        byteBuf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeBytes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBytes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[s("strong",[t._v("（2）MessageToMessageEncoder类")])]),t._v(" "),s("p",[t._v("MessageToMessageEncoder类的主要作用是将一种格式的消息转换成另外一种格式的消息。并且MessageToMessageEncoder类最终的输出结果是对象列表，编码后的结果属于中间对象，最终仍然会转化成ByteBuf进行传输。")]),t._v(" "),s("p",[t._v("MessageToMessageEncoder类的子类包括：StringEncoder类、LineEncoder类、Base64Encoder类等。这里，我们以StringEncoder类为例进行说明，StringEncoder类继承了MessageToMessageEncoder类，并实现了MessageToMessageEncoder类的encode()方法。")]),t._v(" "),s("p",[t._v("源码详见：io.netty.handler.codec.string.StringEncoder#encode。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChannelHandlerContext")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CharSequence")]),t._v(" msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ByteBufUtil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alloc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CharBuffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wrap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" charset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h2",{attrs:{id:"五、netty解码器类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、netty解码器类"}},[t._v("#")]),t._v(" 五、Netty解码器类")]),t._v(" "),s("p",[t._v("在Netty中，解码器类的类图如图2-2所示。")]),t._v(" "),s("h2",{attrs:{id:"查看完整文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),s("p",[t._v("加入"),s("a",{attrs:{href:"https://public.zsxq.com/groups/48848484411888.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),s("OutboundLink")],1),t._v("知识星球，解锁完整技术文章、小册、视频与完整代码")])])}),[],!1,null,null,null);s.default=n.exports}}]);