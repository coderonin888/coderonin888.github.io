(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{372:function(s,t,a){"use strict";a.r(t);var n=a(7),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"《并发设计模式》第04章-不可变模式-可变类的线程安全问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#《并发设计模式》第04章-不可变模式-可变类的线程安全问题"}},[s._v("#")]),s._v(" 《并发设计模式》第04章-不可变模式-可变类的线程安全问题")]),s._v(" "),t("p",[s._v("作者：冰河\n"),t("br"),s._v("星球："),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://m6z.cn/6aeFbs"),t("OutboundLink")],1),s._v(" "),t("br"),s._v("博客："),t("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://binghe.gitcode.host"),t("OutboundLink")],1),s._v(" "),t("br"),s._v("文章汇总："),t("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://binghe.gitcode.host/md/all/all.html"),t("OutboundLink")],1),s._v(" "),t("br"),s._v("源码获取地址："),t("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://t.zsxq.com/0dhvFs5oR"),t("OutboundLink")],1)]),s._v(" "),t("blockquote",[t("p",[s._v("沉淀，成长，突破，帮助他人，成就自我。")])]),s._v(" "),t("ul",[t("li",[s._v("本章难度：★★☆☆☆")]),s._v(" "),t("li",[s._v("本章重点：理解可变类引发线程安全问题的原因，重点理解什么是可变类，以及可变类在多线程环境下存在的问题，能够结合自身实际项目思考哪些场景下可变类会引发线程安全问题，并能够思考问题背后的解决方案。")])]),s._v(" "),t("p",[t("strong",[s._v("大家好，我是冰河~~")])]),s._v(" "),t("p",[s._v("“确实在公司跟着老大能学到很多知识啊，之前确实也不怎么了解线程安全问题和一些解决方案，现在了解了，也终于基于不可变类实现了一个简单的功能，明天找老大帮我看看“，小菜心里想着，脸上露出了满意的微笑。")]),s._v(" "),t("h2",{attrs:{id:"一、情景再现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、情景再现"}},[s._v("#")]),s._v(" 一、情景再现")]),s._v(" "),t("p",[s._v("小菜在自己实现分配的统计商品详情接口调用次数的功能时，没注意线程安全问题，导致统计出来的结果数据与实际结果偏差较大，通过老王的耐心讲解，知道了背后产生问题的根本原因，也学到了几种并发问题的解决方案。下班后，小菜自己尝试基于不可变类实现一个简单的功能，但是。。。")]),s._v(" "),t("h2",{attrs:{id:"二、事与愿违"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、事与愿违"}},[s._v("#")]),s._v(" 二、事与愿违")]),s._v(" "),t("p",[s._v("第二天，小菜早早来到公司，昨天自己想基于不可变类实现一个简单的功能，经过自己不懈的努力，终于“完成”了自己想象的功能，心里也是比较高兴的。就等着老王来公司后，给老王看看自己实现的功能。")]),s._v(" "),t("p",[s._v("正想着，小菜听到了老王说话的声音，原来是老王跟几个同事一起到公司了。看着老王走到了自己的工位上，小菜拿着自己的电脑来到老王身边说：”老大，我昨天学了不少并发问题的解决方案，对不可变类这种方式很感兴趣，回去后自己基于这种方式实现了一个小功能，你帮我看看实现的对吗？“。")]),s._v(" "),t("p",[s._v("老王听后说：“我看看，你给我简单说下实现的功能是啥？”。")]),s._v(" "),t("p",[s._v("“咱们乘坐高铁，在进站时不是都要通过身份证检票吗，我就想通过不可变类模拟实现一个检票的功能，这个检票功能支持并发访问，也就是同时支持多个人拿着身份证通过检票。在实现上，我想的比较简单，就是通过一个名字和身份证编号来定义一个不可变类，表示一个用户，由这个不可变类支持线程安全。再由一个Map来存储这些用户的信息，当用户通过检票时，更新下用户的信息，最终打印出来。整个过程基于不可变类实现线程安全”。")]),s._v(" "),t("p",[s._v("“我还画了一张图”，说着小菜从电脑里打开了自己画的场景需求图，如图4-1所示。")]),s._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://binghe.gitcode.host/assets/images/core/concurrent/2023-09-21-001.png?raw=true",width:"80%"}}),s._v(" "),t("br")]),s._v(" "),t("p",[s._v("老王听了后说：“嗯，我大概明白你的需求了，我看看代码实现”。")]),s._v(" "),t("p",[s._v("于是小菜便把电脑给了老王，要不说老王是大牛呢？老王只是用他那凌厉的眼扫了一眼，便说道：“这代码有问题”。")]),s._v(" "),t("p",[s._v("“啊”，小菜当时就有点懵，“这，我觉得没问题呀”。。。")]),s._v(" "),t("h2",{attrs:{id:"三、分析代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、分析代码"}},[s._v("#")]),s._v(" 三、分析代码")]),s._v(" "),t("p",[s._v("“那我们就结合代码来分析下原因吧”，老王说着，便让小菜看代码。“首先是这个User用户类”。")]),s._v(" "),t("p",[s._v("User类的源码详见：concurrent-design-patterns-immutable工程下的io.binghe.concurrent.design.demo.wrong.User。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),s._v(" idCard"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),s._v(" idCard"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("idCard "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" idCard"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"User{"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name=\'"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token char"}},[s._v("'\\''")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('", idCard="')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" idCard "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token char"}},[s._v("'}'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("“这个User类就是有问题的，你知道什么是不可变类吗？”，老王问小菜。")]),s._v(" "),t("p",[s._v("小菜说：“知道，就是一个类一经创建，就不会发生变化的类，就叫做不可变类”。")]),s._v(" "),t("p",[s._v("“对，概念记得倒是挺清楚的，但是这个User类不是一个不可变类呀，我们根据不可变类的定义分析下这个User类为什么不是一个不可变类”，老王巴拉巴拉的说了起来。总体上，老王针对User类为什么不是不可变类，总结了如下几点：")]),s._v(" "),t("ul",[t("li",[s._v("用户类没有被final修饰，可以有其他类继承User类，一旦有子类继承，就可能改变User类的状态。")]),s._v(" "),t("li",[s._v("User类里的成员变量没有被final修饰，可能会发生变化。")]),s._v(" "),t("li",[s._v("User类中提供了修改成员变量的方法。成员变量可能发生变化。")]),s._v(" "),t("li",[s._v("User类的set()方法也不是原子的，存在线程安全问题，多个线程同时访问可能会存在并发问题。")])]),s._v(" "),t("h2",{attrs:{id:"查看全文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看全文"}},[s._v("#")]),s._v(" 查看全文")]),s._v(" "),t("p",[s._v("加入"),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[s._v("冰河技术"),t("OutboundLink")],1),s._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);t.default=r.exports}}]);