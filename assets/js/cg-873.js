(window.webpackJsonp=window.webpackJsonp||[]).push([[873],{1174:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"《seckill秒杀系统》第72章-下单流程整合预约系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第72章-下单流程整合预约系统"}},[s._v("#")]),s._v(" 《Seckill秒杀系统》第72章：下单流程整合预约系统")]),s._v(" "),t("p",[s._v("作者：冰河\n"),t("br"),s._v("星球："),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://m6z.cn/6aeFbs"),t("OutboundLink")],1),s._v(" "),t("br"),s._v("博客："),t("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://binghe.gitcode.host"),t("OutboundLink")],1),s._v(" "),t("br"),s._v("文章汇总："),t("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://binghe.gitcode.host/md/all/all.html"),t("OutboundLink")],1),s._v(" "),t("br"),s._v("源码获取地址："),t("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://t.zsxq.com/0dhvFs5oR"),t("OutboundLink")],1)]),s._v(" "),t("blockquote",[t("p",[s._v("沉淀，成长，突破，帮助他人，成就自我。")])]),s._v(" "),t("ul",[t("li",[s._v("本章难度：★★☆☆☆")]),s._v(" "),t("li",[s._v("本章重点：在下单流程中整合预约系统，重点掌握下单流程与预约系统的整合流程，并理解下单流程与预约系统的整合方式，将多系统集成的思想灵活运用到实际项目中。")])]),s._v(" "),t("p",[t("strong",[s._v("大家好，我是冰河~~")])]),s._v(" "),t("p",[s._v("在前面的文章中，我们已经梳理了预约系统的业务流程，并且设计了最简化的接口交互逻辑，也实现了运营端和用户端的业务逻辑。接下来，就要整合下单流程与预约系统了。")]),s._v(" "),t("h2",{attrs:{id:"一、前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[s._v("#")]),s._v(" 一、前言")]),s._v(" "),t("p",[s._v("对于预约微服务和商品微服务以及订单微服务来说，都是分属于秒杀交易链路上不同的服务，用户通过商品微服务获取到商品的信息时，可以通过异步的方式来加载商品的预约配置信息和是否预约过商品的数据。")]),s._v(" "),t("p",[s._v("对于下单流程来说，在下单过程中，就需要通过预约微服务来校验秒杀商品是否开启了预约通道，如果秒杀商品开启了预约通道，并且秒杀商品的预约配置信息有效，则进一步校验用户是否预约了秒杀商品，只有预约秒杀商品成功的用户才能对商品进行抢购和下单。")]),s._v(" "),t("h2",{attrs:{id:"二、本章诉求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[s._v("#")]),s._v(" 二、本章诉求")]),s._v(" "),t("p",[s._v("整合下单流程与预约系统逻辑，在用户下单时，调用预约微服务检验用户是否能够正常下单，如果能够正常下单，则继续执行下单流程，如果不能正常下单，则提示用户不能正常下单。")]),s._v(" "),t("h2",{attrs:{id:"三、预约系统提供服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、预约系统提供服务"}},[s._v("#")]),s._v(" 三、预约系统提供服务")]),s._v(" "),t("p",[s._v("在下单流程整合预约系统的设计中，预约系统主要提供用户是否能够正常下单的校验逻辑。具体的校验逻辑实现步骤如下所示。")]),s._v(" "),t("p",[t("strong",[s._v("（1）新增SeckillReservationDubboService接口")])]),s._v(" "),t("p",[s._v("预约系统通过Dubbo对外提供预约校验的执行逻辑，其他微服务如果需要校验用户是否符合预约微服务的校验逻辑，则只需要调用预约微服务对外提供的Dubbo接口即可。")]),s._v(" "),t("p",[s._v("源码详见：seckill-dubbo-interfaces工程下的io.binghe.seckill.dubbo.interfaces.reservation.SeckillReservationDubboService。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SeckillReservationDubboService")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("checkReservation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),s._v(" userId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),s._v(" goodsId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("checkReservation()方法返回boolean类型的数据，如果返回true则表示用户可以正常下单，如果返回false，则表示用户不能正常下单。")]),s._v(" "),t("p",[t("strong",[s._v("（2）新增SeckillReservationDubboServiceImpl类")])]),s._v(" "),t("p",[s._v("SeckillReservationDubboServiceImpl类主要是SeckillReservationDubboService接口的实现类，并且以Dubbo服务的形式实现了SeckillReservationDubboService接口中定义的checkReservation()方法。")]),s._v(" "),t("p",[s._v("源码详见：seckill-reservation-application工程下的io.binghe.seckill.reservation.application.dubbo.SeckillReservationDubboServiceImpl。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Component")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@DubboService")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("version "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SeckillReservationDubboServiceImpl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SeckillReservationDubboService")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Autowired")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SeckillReservationConfigCacheService")]),s._v(" seckillReservationConfigCacheService"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Autowired")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SeckillReservationUserCacheService")]),s._v(" seckillReservationUserCacheService"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("checkReservation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),s._v(" userId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Long")]),s._v(" goodsId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取商品配置信息")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SeckillBusinessCache")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SeckillReservationConfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" seckillReservationConfigCache "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" seckillReservationConfigCacheService"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSeckillReservationConfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("goodsId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0L")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//缓存中不存在配置数据")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("seckillReservationConfigCache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isExist")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取商品的具体配置信息")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SeckillReservationConfig")]),s._v(" seckillReservationConfig "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" seckillReservationConfigCache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getData")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//商品配置为空，或者不是上线的状态，直接返回true，可以直接抢购下单")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("seckillReservationConfig "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SeckillReservationConfigStatus")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isOnline")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("seckillReservationConfig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getStatus")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//商品配置信息正常，则获取用户是否预约了商品")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SeckillBusinessCache")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SeckillReservationUser")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" seckillReservationUserCache "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" seckillReservationUserCacheService"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getSeckillReservationUserCacheByUserIdAndGoodsId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("userId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" goodsId"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0L")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//用户预约的商品配置缓存为重试状态，或者不存在数据，则直接返回false")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("seckillReservationUserCache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isRetryLater")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("seckillReservationUserCache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isExist")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取指定用户的商品预约信息")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SeckillReservationUser")]),s._v(" seckillReservationUser "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" seckillReservationUserCache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getData")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" seckillReservationUser "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SeckillReservationUserStatus")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isNormal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("seckillReservationUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getStatus")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br")])]),t("h2",{attrs:{id:"查看完整文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[s._v("#")]),s._v(" 查看完整文章")]),s._v(" "),t("p",[s._v("加入"),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[s._v("冰河技术"),t("OutboundLink")],1),s._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);t.default=e.exports}}]);