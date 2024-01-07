(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{481:function(t,e,r){"use strict";r.r(e);var v=r(7),a=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"《jvm核心技术》第09章-g1收集器、region、停顿时间模型、垃圾回收"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#《jvm核心技术》第09章-g1收集器、region、停顿时间模型、垃圾回收"}},[t._v("#")]),t._v(" 《JVM核心技术》第09章：G1收集器、Region、停顿时间模型、垃圾回收")]),t._v(" "),e("p",[e("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),e("p",[t._v("今天，我们继续学习JVM相关的知识，今天给大家分享一篇关于G1收集器的文章，好了，不多说了，直接进入正题。")]),t._v(" "),e("h2",{attrs:{id:"region"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#region"}},[t._v("#")]),t._v(" Region")]),t._v(" "),e("p",[t._v("使用G1收集器时，java堆的内存会划分为多个大小相等的独立区域（Region），他也有新生代和老年代的概念，但是新生代和老年代不再是物理隔离的，它们都是一部分Region（不需要连续）的集合.")]),t._v(" "),e("p",[t._v("如下图所示：粉色的代表新生代，没有字母的是eden，有s的是survivor ，老年代是浅蓝的O，还有一个H是humongous，也是老年代，我们在《"),e("a",{attrs:{href:"https://binghe.gitcode.host/md/core/jvm/2022-04-18-005-JVM%E5%A0%86%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JVM堆内存分配机制"),e("OutboundLink")],1),t._v("》提过，大对象直接进入老年代，这个humongous就是存储大对象的，也就是说如果对象内存大小大于Region的一半大小，那就会给一个专门的Region存放，如果对象大于一个Region的大小，那就用多个Region存放。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://binghe.gitcode.host/assets/images/core/jvm/jvm-2023-07-25-057.png?raw=true",width:"40%"}}),t._v(" "),e("br")]),t._v(" "),e("p",[t._v("我们只画了16个Region，并不是说堆只分配了16个，在没有用-XX:G1HeapRegionSize去指定的情况下，默认是2048个，Region的个数必须是2的倍数，每个Region的大小在1到32M之间。")]),t._v(" "),e("p",[t._v("新生代的大小在5%到60%之间，可以通过"),e("code",[t._v("-XX:G1NewSizePercent=5")]),t._v("，"),e("code",[t._v("-XX:G1MaxNewSizePercent=60")]),t._v("来设置。")]),t._v(" "),e("h2",{attrs:{id:"停顿时间模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#停顿时间模型"}},[t._v("#")]),t._v(" 停顿时间模型")]),t._v(" "),e("p",[t._v("G1的另外一个特点，就是建立可预测的停顿时间模型。G1跟踪各个Region的回收价值，并在后台维护一个优先列表，每次根据允许的收集时间，优先回收价值最大的Region，保证了在有限的时间内获取尽可能高的收集效率，停顿时间默认200ms，用"),e("code",[t._v("-XX:MaxGCPauseMillis")]),t._v("设置。")]),t._v(" "),e("p",[t._v("比如下图，第一个新生代的Region回收10M需要5ms，第二个新生代的Region回收20M也只要5ms，第三个新生代的Region回收10M却需要10ms，如果指定他需要5ms内回收20M的垃圾，他会直接去回收第二个新生代的Region，而不是回收第一个和第三个新生代的Region。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://binghe.gitcode.host/assets/images/core/jvm/jvm-2023-07-25-058.png?raw=true",width:"40%"}}),t._v(" "),e("br")]),t._v(" "),e("h2",{attrs:{id:"垃圾回收"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收"}},[t._v("#")]),t._v(" 垃圾回收")]),t._v(" "),e("h3",{attrs:{id:"新生代回收"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新生代回收"}},[t._v("#")]),t._v(" 新生代回收")]),t._v(" "),e("p",[t._v("上面提过，新生代的内存空间最多占用60%，当60%的空间用完的时候，就会触发新生代的回收。新生代的回收是用复制算法的，与之前不同的是，他会考虑到停顿时间。")]),t._v(" "),e("h3",{attrs:{id:"老年代回收"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#老年代回收"}},[t._v("#")]),t._v(" 老年代回收")]),t._v(" "),e("p",[t._v("老年代回收分为："),e("strong",[t._v("初始标记、并发标记、最终标记、混合回收")]),t._v("。")]),t._v(" "),e("p",[t._v("前面三个阶段跟《"),e("a",{attrs:{href:"https://binghe.gitcode.host/md/core/jvm/2022-04-18-008-JVM-CMS%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CMS垃圾收集器"),e("OutboundLink")],1),t._v("》的前面三个类似。")]),t._v(" "),e("p",[t._v("混合回收，是说他并不会仅仅回收老年代的垃圾，也会回收新生代的垃圾，他会根据停顿时间，尽可能的多回收Region。由于在停顿时间内回收的垃圾可能不会很多，所以这个阶段会进行多次的混合回收，默认是8次，可以通过"),e("code",[t._v("-XX:G1MixedGCCountTarget")]),t._v("设置。\n如果混合回收的时候，发现Region仅占有5%了，那他就会停止回收，不会一直回收8次。")]),t._v(" "),e("p",[t._v("混合回收的基于复制算法的，所以大对象的复制会比较耗时，如果某个老年代的Region超过85%的对象是存活的，那他不会被回收，通过"),e("code",[t._v("-XX:G1MixedGCLiveThresholdPercent")]),t._v("设置。")]),t._v(" "),e("p",[e("strong",[t._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),t._v(" "),e("h2",{attrs:{id:"星球服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#星球服务"}},[t._v("#")]),t._v(" 星球服务")]),t._v(" "),e("p",[t._v("加入星球，你将获得：")]),t._v(" "),e("p",[t._v("1.项目学习：微服务入门必备的SpringCloud  Alibaba实战项目、手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】、Seckill秒杀系统项目—进大厂必备高并发、高性能和高可用技能。")]),t._v(" "),e("p",[t._v("2.框架源码：手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】。")]),t._v(" "),e("p",[t._v("3.硬核技术：深入理解高并发系列（全册）、深入理解JVM系列（全册）、深入浅出Java设计模式（全册）、MySQL核心知识（全册）。")]),t._v(" "),e("p",[t._v("4.技术小册：深入理解高并发编程（第1版）、深入理解高并发编程（第2版）、从零开始手写RPC框架、SpringCloud  Alibaba实战、冰河的渗透实战笔记、MySQL核心知识手册、Spring IOC核心技术、Nginx核心技术、面经手册等。")]),t._v(" "),e("p",[t._v("5.技术与就业指导：提供相关就业辅导和未来发展指引，冰河从初级程序员不断沉淀，成长，突破，一路成长为互联网资深技术专家，相信我的经历和经验对你有所帮助。")]),t._v(" "),e("p",[t._v("冰河的知识星球是一个简单、干净、纯粹交流技术的星球，不吹水，目前加入享5折优惠，价值远超门票。加入星球的用户，记得添加冰河微信：hacker_binghe，冰河拉你进星球专属VIP交流群。")]),t._v(" "),e("h2",{attrs:{id:"星球重磅福利"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#星球重磅福利"}},[t._v("#")]),t._v(" 星球重磅福利")]),t._v(" "),e("p",[t._v("跟冰河一起从根本上提升自己的技术能力，架构思维和设计思路，以及突破自身职场瓶颈，冰河特推出重大优惠活动，扫码领券进行星球，"),e("strong",[t._v("直接立减149元，相当于5折，")]),t._v(" 这已经是星球最大优惠力度！")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu_149.png?raw=true",width:"80%"}}),t._v(" "),e("br")]),t._v(" "),e("p",[t._v("领券加入星球，跟冰河一起学习《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》，更有已经上新的《大规模分布式Seckill秒杀系统》，从零开始介绍原理、设计架构、手撸代码。后续更有硬核中间件项目和业务项目，而这些都是你升职加薪必备的基础技能。")]),t._v(" "),e("p",[e("strong",[t._v("100多元就能学这么多硬核技术、中间件项目和大厂秒杀系统，如果是我，我会买他个终身会员！")])]),t._v(" "),e("h2",{attrs:{id:"其他方式加入星球"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他方式加入星球"}},[t._v("#")]),t._v(" 其他方式加入星球")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("链接")]),t._v(" ：打开链接 "),e("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),e("OutboundLink")],1),t._v(" 加入星球。")]),t._v(" "),e("li",[e("strong",[t._v("回复")]),t._v(" ：在公众号 "),e("strong",[t._v("冰河技术")]),t._v(" 回复 "),e("strong",[t._v("星球")]),t._v(" 领取优惠券加入星球。")])]),t._v(" "),e("p",[e("strong",[t._v("特别提醒：")]),t._v(" 苹果用户进圈或续费，请加微信 "),e("strong",[t._v("hacker_binghe")]),t._v(" 扫二维码，或者去公众号 "),e("strong",[t._v("冰河技术")]),t._v(" 回复 "),e("strong",[t._v("星球")]),t._v(" 扫二维码加入星球。")]),t._v(" "),e("h2",{attrs:{id:"星球规划"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#星球规划"}},[t._v("#")]),t._v(" 星球规划")]),t._v(" "),e("p",[t._v("后续冰河还会在星球更新大规模中间件项目和深度剖析核心技术的专栏，目前已经规划的专栏如下所示。")]),t._v(" "),e("h3",{attrs:{id:"中间件项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#中间件项目"}},[t._v("#")]),t._v(" 中间件项目")]),t._v(" "),e("ul",[e("li",[t._v("《大规模分布式定时调度中间件项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),e("li",[t._v("《大规模分布式IM（即时通讯）项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),e("li",[t._v("《大规模分布式网关项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),e("li",[t._v("《手写Redis》：全程手撸代码。")]),t._v(" "),e("li",[t._v("《手写JVM》全程手撸代码。")])]),t._v(" "),e("h3",{attrs:{id:"超硬核项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#超硬核项目"}},[t._v("#")]),t._v(" 超硬核项目")]),t._v(" "),e("ul",[e("li",[t._v("《从零落地秒杀系统项目》：全程手撸代码，在阿里云实现压测（"),e("strong",[t._v("已上新")]),t._v("）。")]),t._v(" "),e("li",[t._v("《大规模电商系统商品详情页项目》：全程手撸代码，在阿里云实现压测。")]),t._v(" "),e("li",[t._v("其他待规划的实战项目，小伙伴们也可以提一些自己想学的，想一起手撸的实战项目。。。")])]),t._v(" "),e("p",[t._v("既然星球规划了这么多内容，那么肯定就会有小伙伴们提出疑问：这么多内容，能更新完吗？我的回答就是：一个个攻破呗，咱这星球干就干真实中间件项目，剖析硬核技术和项目，不做Demo。初衷就是能够让小伙伴们学到真正的核心技术，不再只是简单的做CRUD开发。所以，每个专栏都会是硬核内容，像《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》就是很好的示例。后续的专栏只会比这些更加硬核，杜绝Demo开发。")]),t._v(" "),e("p",[t._v("小伙伴们跟着冰河认真学习，多动手，多思考，多分析，多总结，有问题及时在星球提问，相信在技术层面，都会有所提高。将学到的知识和技术及时运用到实际的工作当中，学以致用。星球中不少小伙伴都成为了公司的核心技术骨干，实现了升职加薪的目标。")]),t._v(" "),e("h2",{attrs:{id:"联系冰河"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联系冰河"}},[t._v("#")]),t._v(" 联系冰河")]),t._v(" "),e("h3",{attrs:{id:"加群交流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[t._v("#")]),t._v(" 加群交流")]),t._v(" "),e("p",[t._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),e("code",[t._v("星球编号")]),t._v("。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),t._v(" "),e("div",{staticStyle:{"font-size":"18px"}},[t._v("冰河微信")]),t._v(" "),e("br")]),t._v(" "),e("h3",{attrs:{id:"公众号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[t._v("#")]),t._v(" 公众号")]),t._v(" "),e("p",[t._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),e("strong",[t._v("冰河技术")]),t._v(" 微信公众号首发，强烈建议大家关注。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),t._v(" "),e("div",{staticStyle:{"font-size":"18px"}},[t._v("公众号：冰河技术")]),t._v(" "),e("br")]),t._v(" "),e("h3",{attrs:{id:"视频号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#视频号"}},[t._v("#")]),t._v(" 视频号")]),t._v(" "),e("p",[t._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),t._v(" "),e("div",{staticStyle:{"font-size":"18px"}},[t._v("视频号：冰河技术")]),t._v(" "),e("br")]),t._v(" "),e("h3",{attrs:{id:"星球"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[t._v("#")]),t._v(" 星球")]),t._v(" "),e("p",[t._v("加入星球 "),e("strong",[e("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),e("OutboundLink")],1)]),t._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),e("strong",[t._v("hacker_binghe")]),t._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),e("strong",[t._v("实战项目")]),t._v("！")]),t._v(" "),e("p",[t._v("关注 "),e("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),e("OutboundLink")],1),t._v("公众号，回复 "),e("code",[t._v("星球")]),t._v(" 可以获取入场优惠券。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),t._v(" "),e("div",{staticStyle:{"font-size":"18px"}},[t._v("知识星球：冰河技术")]),t._v(" "),e("br")])])}),[],!1,null,null,null);e.default=a.exports}}]);