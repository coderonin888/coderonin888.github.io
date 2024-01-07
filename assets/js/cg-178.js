(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{482:function(t,r,v){"use strict";v.r(r);var e=v(7),_=Object(e.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《jvm核心技术》第06章-jvm垃圾回收机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《jvm核心技术》第06章-jvm垃圾回收机制"}},[t._v("#")]),t._v(" 《JVM核心技术》第06章：JVM垃圾回收机制")]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("结合《"),r("a",{attrs:{href:"https://binghe.gitcode.host/md/core/jvm/2022-04-18-004-JVM%E5%86%85%E5%AD%98%E7%A9%BA%E9%97%B4.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JVM内存空间"),r("OutboundLink")],1),t._v("》、《"),r("a",{attrs:{href:"https://binghe.gitcode.host/md/core/jvm/2022-04-18-005-JVM%E5%A0%86%E5%86%85%E5%AD%98%E5%88%86%E9%85%8D.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JVM堆内存分配机制"),r("OutboundLink")],1),t._v("》，合并后图如下：")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/assets/images/core/jvm/jvm-2023-07-25-043.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("当我们调用一个方法的时候，就会创建这个方法的栈帧，当方法调用结束的时候，这个栈帧出栈，栈帧所占用的内存也随之释放。")]),t._v(" "),r("p",[t._v("如果这个线程销毁了，那与这个线程相关的栈以及程序计数器的内存也随之被回收，那在堆内存中创建的对象怎么办？这些对象可是都占着很多的内存资源的。因此我们需要知道哪些对象是可以回收的，哪些对象是不能回收的。")]),t._v(" "),r("h2",{attrs:{id:"可达性分析算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#可达性分析算法"}},[t._v("#")]),t._v(" 可达性分析算法")]),t._v(" "),r("p",[t._v("可达性算法就是从GC Roots出发，去搜索他引用的对象，然后根据这个引用的对象，继续查找他引用的对象。")]),t._v(" "),r("p",[t._v("如果一个对象到GC Roots没有任何引用链相连，说明他是不可用的，这个类就可以回收，比如下图的object5、object6、object7。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/assets/images/core/jvm/jvm-2023-07-25-044.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("我们回忆一下合并图：")]),t._v(" "),r("ol",[r("li",[t._v("类加载到方法区的时候，初始化阶段会为静态变量赋值，他所引用的对象可以做GC Roots。")]),t._v(" "),r("li",[t._v("同样的，方法区的常量引用的对象可以做GC Roots。")]),t._v(" "),r("li",[t._v("调用方法的时候，会创建方法的栈帧，栈帧里的局部变量引用的对象，可以做GC Roots。")]),t._v(" "),r("li",[t._v("同样的，本地方法栈中栈帧里的局部变量引用的对象，可以做GC Roots。")])]),t._v(" "),r("p",[t._v("可达性算法除了GC Roots，还有一个引用，引用分以下几种：")]),t._v(" "),r("ol",[r("li",[t._v("强引用(Strong Reference)：只要强引用还存在，垃圾收集器永远不会回收被引用的对象。")]),t._v(" "),r("li",[t._v("软引用(Soft Reference)：在系统将要发生内存溢出异常之前,将会把这些对象列进回收范围之中进行第二次回收。如果这次回收还没有足够的内存,才会拋出内存溢出异常。")]),t._v(" "),r("li",[t._v("弱引用(Weak Reference )： 被弱引用关联的对象只能生存到下一次垃圾收集发生之前。当垃圾收集器工作时,无论当前内存是否足够, 都会回收掉只被弱引用关联的对象。")]),t._v(" "),r("li",[t._v("虚引用(Phantom Reference)：一个对象是否有虚引用的存在,完全不会对其生存时间构成影响,也无法通过虚引用来取得一个对象实例。为一个对象设置虚引用关联的唯一目的就是能在这个对象被收集器回收时收到一个系统通知。")])]),t._v(" "),r("p",[r("strong",[t._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),t._v(" "),r("h2",{attrs:{id:"星球服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#星球服务"}},[t._v("#")]),t._v(" 星球服务")]),t._v(" "),r("p",[t._v("加入星球，你将获得：")]),t._v(" "),r("p",[t._v("1.项目学习：微服务入门必备的SpringCloud  Alibaba实战项目、手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】、Seckill秒杀系统项目—进大厂必备高并发、高性能和高可用技能。")]),t._v(" "),r("p",[t._v("2.框架源码：手写RPC项目—所有大厂都需要的项目【含上百个经典面试题】、深度解析Spring6核心技术—只要学习Java就必须深度掌握的框架【含数十个经典思考题】。")]),t._v(" "),r("p",[t._v("3.硬核技术：深入理解高并发系列（全册）、深入理解JVM系列（全册）、深入浅出Java设计模式（全册）、MySQL核心知识（全册）。")]),t._v(" "),r("p",[t._v("4.技术小册：深入理解高并发编程（第1版）、深入理解高并发编程（第2版）、从零开始手写RPC框架、SpringCloud  Alibaba实战、冰河的渗透实战笔记、MySQL核心知识手册、Spring IOC核心技术、Nginx核心技术、面经手册等。")]),t._v(" "),r("p",[t._v("5.技术与就业指导：提供相关就业辅导和未来发展指引，冰河从初级程序员不断沉淀，成长，突破，一路成长为互联网资深技术专家，相信我的经历和经验对你有所帮助。")]),t._v(" "),r("p",[t._v("冰河的知识星球是一个简单、干净、纯粹交流技术的星球，不吹水，目前加入享5折优惠，价值远超门票。加入星球的用户，记得添加冰河微信：hacker_binghe，冰河拉你进星球专属VIP交流群。")]),t._v(" "),r("h2",{attrs:{id:"星球重磅福利"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#星球重磅福利"}},[t._v("#")]),t._v(" 星球重磅福利")]),t._v(" "),r("p",[t._v("跟冰河一起从根本上提升自己的技术能力，架构思维和设计思路，以及突破自身职场瓶颈，冰河特推出重大优惠活动，扫码领券进行星球，"),r("strong",[t._v("直接立减149元，相当于5折，")]),t._v(" 这已经是星球最大优惠力度！")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu_149.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("领券加入星球，跟冰河一起学习《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》，更有已经上新的《大规模分布式Seckill秒杀系统》，从零开始介绍原理、设计架构、手撸代码。后续更有硬核中间件项目和业务项目，而这些都是你升职加薪必备的基础技能。")]),t._v(" "),r("p",[r("strong",[t._v("100多元就能学这么多硬核技术、中间件项目和大厂秒杀系统，如果是我，我会买他个终身会员！")])]),t._v(" "),r("h2",{attrs:{id:"其他方式加入星球"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他方式加入星球"}},[t._v("#")]),t._v(" 其他方式加入星球")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("链接")]),t._v(" ：打开链接 "),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" 加入星球。")]),t._v(" "),r("li",[r("strong",[t._v("回复")]),t._v(" ：在公众号 "),r("strong",[t._v("冰河技术")]),t._v(" 回复 "),r("strong",[t._v("星球")]),t._v(" 领取优惠券加入星球。")])]),t._v(" "),r("p",[r("strong",[t._v("特别提醒：")]),t._v(" 苹果用户进圈或续费，请加微信 "),r("strong",[t._v("hacker_binghe")]),t._v(" 扫二维码，或者去公众号 "),r("strong",[t._v("冰河技术")]),t._v(" 回复 "),r("strong",[t._v("星球")]),t._v(" 扫二维码加入星球。")]),t._v(" "),r("h2",{attrs:{id:"星球规划"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#星球规划"}},[t._v("#")]),t._v(" 星球规划")]),t._v(" "),r("p",[t._v("后续冰河还会在星球更新大规模中间件项目和深度剖析核心技术的专栏，目前已经规划的专栏如下所示。")]),t._v(" "),r("h3",{attrs:{id:"中间件项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#中间件项目"}},[t._v("#")]),t._v(" 中间件项目")]),t._v(" "),r("ul",[r("li",[t._v("《大规模分布式定时调度中间件项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),r("li",[t._v("《大规模分布式IM（即时通讯）项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),r("li",[t._v("《大规模分布式网关项目实战（非Demo）》：全程手撸代码。")]),t._v(" "),r("li",[t._v("《手写Redis》：全程手撸代码。")]),t._v(" "),r("li",[t._v("《手写JVM》全程手撸代码。")])]),t._v(" "),r("h3",{attrs:{id:"超硬核项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#超硬核项目"}},[t._v("#")]),t._v(" 超硬核项目")]),t._v(" "),r("ul",[r("li",[t._v("《从零落地秒杀系统项目》：全程手撸代码，在阿里云实现压测（"),r("strong",[t._v("已上新")]),t._v("）。")]),t._v(" "),r("li",[t._v("《大规模电商系统商品详情页项目》：全程手撸代码，在阿里云实现压测。")]),t._v(" "),r("li",[t._v("其他待规划的实战项目，小伙伴们也可以提一些自己想学的，想一起手撸的实战项目。。。")])]),t._v(" "),r("p",[t._v("既然星球规划了这么多内容，那么肯定就会有小伙伴们提出疑问：这么多内容，能更新完吗？我的回答就是：一个个攻破呗，咱这星球干就干真实中间件项目，剖析硬核技术和项目，不做Demo。初衷就是能够让小伙伴们学到真正的核心技术，不再只是简单的做CRUD开发。所以，每个专栏都会是硬核内容，像《SpringCloud Alibaba实战》、《手撸RPC专栏》和《Spring6核心技术》就是很好的示例。后续的专栏只会比这些更加硬核，杜绝Demo开发。")]),t._v(" "),r("p",[t._v("小伙伴们跟着冰河认真学习，多动手，多思考，多分析，多总结，有问题及时在星球提问，相信在技术层面，都会有所提高。将学到的知识和技术及时运用到实际的工作当中，学以致用。星球中不少小伙伴都成为了公司的核心技术骨干，实现了升职加薪的目标。")]),t._v(" "),r("h2",{attrs:{id:"联系冰河"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#联系冰河"}},[t._v("#")]),t._v(" 联系冰河")]),t._v(" "),r("h3",{attrs:{id:"加群交流"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[t._v("#")]),t._v(" 加群交流")]),t._v(" "),r("p",[t._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),r("code",[t._v("星球编号")]),t._v("。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),t._v(" "),r("div",{staticStyle:{"font-size":"18px"}},[t._v("冰河微信")]),t._v(" "),r("br")]),t._v(" "),r("h3",{attrs:{id:"公众号"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[t._v("#")]),t._v(" 公众号")]),t._v(" "),r("p",[t._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。内容在 "),r("strong",[t._v("冰河技术")]),t._v(" 微信公众号首发，强烈建议大家关注。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_wechat.jpg?raw=true",width:"180px"}}),t._v(" "),r("div",{staticStyle:{"font-size":"18px"}},[t._v("公众号：冰河技术")]),t._v(" "),r("br")]),t._v(" "),r("h3",{attrs:{id:"视频号"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#视频号"}},[t._v("#")]),t._v(" 视频号")]),t._v(" "),r("p",[t._v("定期分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/ice_video.png?raw=true",width:"180px"}}),t._v(" "),r("div",{staticStyle:{"font-size":"18px"}},[t._v("视频号：冰河技术")]),t._v(" "),r("br")]),t._v(" "),r("h3",{attrs:{id:"星球"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[t._v("#")]),t._v(" 星球")]),t._v(" "),r("p",[t._v("加入星球 "),r("strong",[r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1)]),t._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),r("strong",[t._v("hacker_binghe")]),t._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),r("strong",[t._v("实战项目")]),t._v("！")]),t._v(" "),r("p",[t._v("关注 "),r("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("公众号，回复 "),r("code",[t._v("星球")]),t._v(" 可以获取入场优惠券。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),t._v(" "),r("div",{staticStyle:{"font-size":"18px"}},[t._v("知识星球：冰河技术")]),t._v(" "),r("br")])])}),[],!1,null,null,null);r.default=_.exports}}]);