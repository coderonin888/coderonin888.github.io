(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{534:function(t,a,s){"use strict";s.r(a);var e=s(7),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《nginx核心技术》第09章-格式化日志并推送到远程服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《nginx核心技术》第09章-格式化日志并推送到远程服务器"}},[t._v("#")]),t._v(" 《Nginx核心技术》第09章：格式化日志并推送到远程服务器")]),t._v(" "),a("p",[t._v("作者：冰河\n"),a("br"),t._v("星球："),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("博客："),a("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("文章汇总："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("星球项目地址："),a("a",{attrs:{href:"https://binghe.gitcode.host/md/zsxq/introduce.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/zsxq/introduce.html"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),a("ul",[a("li",[t._v("本章难度：★★☆☆☆")]),t._v(" "),a("li",[t._v("本章重点：用最简短的篇幅介绍Nginx最核心的知识，掌握如何格式化日志并推送到远程服务器，并能够灵活运用到实际项目中，维护高可用系统。")])]),t._v(" "),a("p",[a("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),a("p",[t._v("今天给大家介绍《Nginx核心技术》的第09章：格式化日志并推送到远程服务器，多一句没有，少一句不行，用最简短的篇幅讲述Nginx最核心的知识，好了，开始今天的内容。")]),t._v(" "),a("h2",{attrs:{id:"_9-1-本章概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-本章概述"}},[t._v("#")]),t._v(" 9.1 本章概述")]),t._v(" "),a("p",[t._v("Nginx作为最常用的反向代理和负载均衡服务器，被广泛的应用在众多互联网项目的前置服务中，很多互联网项目直接将Nginx服务器作为整个项目的流量入口。这就使得我们可以通过对Nginx服务器日志的分析，就可以分析出整个网站的访问总量、PV、UV、VV等信息。实际上，企业的业务线众多，很难使用一台Nginx服务器来代理所有的线上服务，这就导致企业会在线上部署多台Nginx服务器。而我们如果想分析所有Nginx服务器的总流量信息时，如果分别对每个Nginx服务器进行分析，再汇总所有的信息，一方面增加了分析的复杂度，另一方面也不好维护这些日志信息。所以，大部分企业会将这些日志信息统一汇总到某个数据存储集群中，以方便的进行数据存储、维护与分析统计。那么如何对Nginx的日志进行格式化并推送到远程的服务器呢？今天，我们就一起来探讨下这个问题。")]),t._v(" "),a("h2",{attrs:{id:"_9-2-配置nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-配置nginx"}},[t._v("#")]),t._v(" 9.2 配置Nginx")]),t._v(" "),a("p",[t._v("格式化Nginx日志并推送到远程服务器，其实很简单，我们只需要在Nginx服务器的配置文件nginx.conf中进行简单的配置即可。例如，我们可以在nginx.conf文件中添加如下配置。")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("log_format common "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_ip")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_mac")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$time_local")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$status")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_length")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$bytes_sent")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$body_bytes_sent")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_user_agent")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_referer")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_method")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_time")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_uri")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$server_protocol")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_body")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_token")]),t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \nlog_format main "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_ip")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_mac")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$time_local")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$status")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_length")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$bytes_sent")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$body_bytes_sent")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_user_agent")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_referer")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_method")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_time")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_uri")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$server_protocol")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_body")]),t._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_token")]),t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t \naccess_log  logs/access.log  common"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \naccess_log syslog:server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".1.100:9999,facility"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("local7,tag"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("nginx,severity"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("info main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  map "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_upgrade")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$connection_upgrade")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tdefault upgrade"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("      close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("上述配置是将Nginx的日志各项参数以逗号分隔的形式进行输出，同时将Nginx日志实时推送到192.168.1.100:9999上。")]),t._v(" "),a("p",[t._v("此时，我们只需要在192.168.1.100服务器上部署一个TCP或UDP服务，监听端口为9999，并在192.168.1.100服务器的防火墙开放9999端口。我们写的TCP或UDP服务就会实时接收到Nginx服务器发送过来的日志。")]),t._v(" "),a("p",[t._v("通过这种方式，我们就可以将Nginx日志实时收集到某个存储集群中，对Nginx日志进行统一存储、维护和分析。")]),t._v(" "),a("p",[a("strong",[t._v("好了，相信各位小伙伴们对如何格式化日志并推送到远程服务器，有了进一步的了解，我是冰河，我们下期见~~")])]),t._v(" "),a("h2",{attrs:{id:"星球服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球服务"}},[t._v("#")]),t._v(" 星球服务")]),t._v(" "),a("p",[t._v("加入星球，你将获得：")]),t._v(" "),a("p",[t._v("1.项目学习：微服务入门必备的SpringCloud  Alibaba实战项目、手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】、Seckill秒杀系统项目—进大厂必备高并发、高性能和高可用技能。")]),t._v(" "),a("p",[t._v("2.框架源码：手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】。")]),t._v(" "),a("p",[t._v("3.硬核技术：深入理解高并发系列（全册）、深入理解JVM系列（全册）、深入浅出Java设计模式（全册）、MySQL核心知识（全册）。")]),t._v(" "),a("p",[t._v("4.技术小册：深入理解高并发编程（第1版）、深入理解高并发编程（第2版）、从零开始手写RPC框架、SpringCloud  Alibaba实战、冰河的渗透实战笔记、MySQL核心知识手册、Spring IOC核心技术、Nginx核心技术、面经手册等。")]),t._v(" "),a("p",[t._v("5.技术与就业指导：提供相关就业辅导和未来发展指引，冰河从初级程序员不断沉淀，成长，突破，一路成长为互联网资深技术专家，相信我的经历和经验对你有所帮助。")]),t._v(" "),a("p",[t._v("冰河的知识星球是一个简单、干净、纯粹交流技术的星球，不吹水，目前加入享5折优惠，价值远超门票。加入星球的用户，记得添加冰河微信：hacker_binghe，冰河拉你进星球专属VIP交流群。")]),t._v(" "),a("h2",{attrs:{id:"星球重磅福利"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球重磅福利"}},[t._v("#")]),t._v(" 星球重磅福利")]),t._v(" "),a("p",[t._v("跟冰河一起从根本上提升自己的技术能力，架构思维和设计思路，以及突破自身职场瓶颈，冰河特推出重大优惠活动，扫码领券进行星球，"),a("strong",[t._v("直接立减149元，相当于5折，")]),t._v(" 这已经是星球最大优惠力度！")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu_149.png?raw=true",width:"80%"}}),t._v(" "),a("br")]),t._v(" "),a("p",[t._v("领券加入星球，跟冰河一起学习《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》，更有已经上新的《大规模分布式Seckill秒杀系统》，从零开始介绍原理、设计架构、手撸代码。后续更有硬核中间件项目和业务项目，而这些都是你升职加薪必备的基础技能。")]),t._v(" "),a("p",[a("strong",[t._v("100多元就能学这么多硬核技术、中间件项目和大厂秒杀系统，如果是我，我会买他个终身会员！")])]),t._v(" "),a("h2",{attrs:{id:"其他方式加入星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他方式加入星球"}},[t._v("#")]),t._v(" 其他方式加入星球")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("链接")]),t._v(" ：打开链接 "),a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),a("OutboundLink")],1),t._v(" 加入星球。")]),t._v(" "),a("li",[a("strong",[t._v("回复")]),t._v(" ：在公众号 "),a("strong",[t._v("冰河技术")]),t._v(" 回复 "),a("strong",[t._v("星球")]),t._v(" 领取优惠券加入星球。")])]),t._v(" "),a("p",[a("strong",[t._v("特别提醒：")]),t._v(" 苹果用户进圈或续费，请加微信 "),a("strong",[t._v("hacker_binghe")]),t._v(" 扫二维码，或者去公众号 "),a("strong",[t._v("冰河技术")]),t._v(" 回复 "),a("strong",[t._v("星球")]),t._v(" 扫二维码加入星球。")]),t._v(" "),a("h2",{attrs:{id:"星球规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球规划"}},[t._v("#")]),t._v(" 星球规划")]),t._v(" "),a("p",[t._v("后续冰河还会在星球更新大规模中间件项目和深度剖析核心技术的专栏，目前已经规划的专栏如下所示。")]),t._v(" "),a("h3",{attrs:{id:"中间件项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中间件项目"}},[t._v("#")]),t._v(" 中间件项目")]),t._v(" "),a("ul",[a("li",[t._v("《大规模分布式定时调度中间件项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《大规模分布式IM（即时通讯）项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《大规模分布式网关项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《手写Redis》：全程手撸代码。")]),t._v(" "),a("li",[t._v("《手写JVM》全程手撸代码。")])]),t._v(" "),a("h3",{attrs:{id:"超硬核项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#超硬核项目"}},[t._v("#")]),t._v(" 超硬核项目")]),t._v(" "),a("ul",[a("li",[t._v("《从零落地秒杀系统项目》：全程手撸代码，在阿里云实现压测（"),a("strong",[t._v("已上新")]),t._v("）。")]),t._v(" "),a("li",[t._v("《大规模电商系统商品详情页项目》：全程手撸代码，在阿里云实现压测。")]),t._v(" "),a("li",[t._v("其他待规划的实战项目，小伙伴们也可以提一些自己想学的，想一起手撸的实战项目。。。")])]),t._v(" "),a("p",[t._v("既然星球规划了这么多内容，那么肯定就会有小伙伴们提出疑问：这么多内容，能更新完吗？我的回答就是：一个个攻破呗，咱这星球干就干真实中间件项目，剖析硬核技术和项目，不做Demo。初衷就是能够让小伙伴们学到真正的核心技术，不再只是简单的做CRUD开发。所以，每个专栏都会是硬核内容，像《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》就是很好的示例。后续的专栏只会比这些更加硬核，杜绝Demo开发。")]),t._v(" "),a("p",[t._v("小伙伴们跟着冰河认真学习，多动手，多思考，多分析，多总结，有问题及时在星球提问，相信在技术层面，都会有所提高。将学到的知识和技术及时运用到实际的工作当中，学以致用。星球中不少小伙伴都成为了公司的核心技术骨干，实现了升职加薪的目标。")]),t._v(" "),a("h2",{attrs:{id:"联系冰河"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联系冰河"}},[t._v("#")]),t._v(" 联系冰河")]),t._v(" "),a("h3",{attrs:{id:"加群交流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[t._v("#")]),t._v(" 加群交流")]),t._v(" "),a("p",[t._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),a("code",[t._v("星球编号")]),t._v("。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("冰河微信")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"公众号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[t._v("#")]),t._v(" 公众号")]),t._v(" "),a("p",[t._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),a("strong",[t._v("冰河技术")]),t._v(" 微信公众号首发，强烈建议大家关注。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("公众号：冰河技术")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"视频号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频号"}},[t._v("#")]),t._v(" 视频号")]),t._v(" "),a("p",[t._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("视频号：冰河技术")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"星球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[t._v("#")]),t._v(" 星球")]),t._v(" "),a("p",[t._v("加入星球 "),a("strong",[a("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1)]),t._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),a("strong",[t._v("hacker_binghe")]),t._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),a("strong",[t._v("实战项目")]),t._v("！")]),t._v(" "),a("p",[t._v("关注 "),a("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),a("OutboundLink")],1),t._v("公众号，回复 "),a("code",[t._v("星球")]),t._v(" 可以获取入场优惠券。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),t._v(" "),a("div",{staticStyle:{"font-size":"18px"}},[t._v("知识星球：冰河技术")]),t._v(" "),a("br")])])}),[],!1,null,null,null);a.default=r.exports}}]);