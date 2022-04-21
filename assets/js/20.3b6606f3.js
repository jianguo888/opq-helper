(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{483:function(t,n,e){"use strict";e.r(n);var r=e(20),o=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("BackWikiBtn",{attrs:{id:"opq-manager-wiki"}}),t._v(" "),e("h1",{attrs:{id:"插件开发-✈️"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件开发-✈️"}},[t._v("#")]),t._v(" 插件开发 ✈️")]),t._v(" "),e("p",[t._v("虽然机器人自带了很多功能，但我相信这些功能可能都满足不了你，所以在这里我写一些插件开发的注意点，欢迎PR功能到仓库里哟❤️❤️")]),t._v(" "),e("h2",{attrs:{id:"一个基本的模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一个基本的模块"}},[t._v("#")]),t._v(" 一个基本的模块")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('type Module struct {\n}\nvar (\n\tlog *logrus.Entry\n)\nfunc (m *Module) ModuleInfo() Core.ModuleInfo {\n\treturn Core.ModuleInfo{\n\t\tName:        "词云生成",\n\t\tAuthor:      "enjoy",\n\t\tDescription: "给群生成聊天词云 还可以查询奥运信息呢！",\n\t\tVersion:     0,\n\t\t//RequireModule: []string{"群管理插件"}, 如果需要在面板上开发接口就必须依赖于 群管理插件\n\t}\n}\nfunc (m *Module) ModuleInit(b *Core.Bot, l *logrus.Entry) error {\n\tlog = l\n\terr := b.AddEvent(OPQBot.EventNameOnGroupMessage, func(botQQ int64, packet *OPQBot.GroupMsgPack) {\n...\n        return nil\n}\nfunc init() {\n\tCore.RegisterModule(&Module{})\n}\n')])])]),e("p",[t._v("在将插件写好后需要在"),e("code",[t._v("/main.go")]),t._v("里引用才行哟")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('package main\n\nimport (\n\t_ "OPQBot-QQGroupManager/wordCloud"\n...\n)\n')])])]),e("h2",{attrs:{id:"自带的周期任务管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自带的周期任务管理"}},[t._v("#")]),t._v(" 自带的周期任务管理")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('err := b.BotCronManager.AddJob(-1, "setuAuto", "0 8 * * *", func() {\n\t\t\tp.autoGetPic()\n\t\t})\n\t\tif err != nil {\n\t\t\tlog.Error(err)\n\t\t}\n// 0 是分钟 8 是小时 没有秒 注意\n')])])]),e("h2",{attrs:{id:"进阶-拦截消息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进阶-拦截消息"}},[t._v("#")]),t._v(" 进阶-拦截消息")]),t._v(" "),e("p",[t._v("在"),e("code",[t._v("/main.go")]),t._v("里我们可以看见有一条命令"),e("code",[t._v("_ = BanWord.Hook(&b)")]),t._v("\n这个就是Hook的函数")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('func Hook(b *Core.Bot) error {\n\tb.AddEvent(OPQBot.EventNameOnGroupMessage, func(botQQ int64, packet *OPQBot.GroupMsgPack) {\n\t\tif packet.FromUserID == botQQ {\n\t\t\treturn\n\t\t}\n\t\tConfig.Lock.RLock()\n\t\tvar c Config.GroupConfig\n\t\tif v, ok := Config.CoreConfig.GroupConfig[packet.FromGroupID]; ok {\n\t\t\tc = v\n\t\t} else {\n\t\t\tc = Config.CoreConfig.DefaultGroupConfig\n\t\t}\n\t\tbanQQ := Config.CoreConfig.BanQQ\n\t\tConfig.Lock.RUnlock()\n\n\t\tfor _, v := range banQQ {\n\t\t\tif packet.FromUserID == v {\n\t\t\t\tpacket.Ban = true  //拦截了消息 后面的插件都收不到 的是\n\t\t\t\treturn\n\t\t\t}\n\t\t}\n\n\t\tif !c.Enable {\n\t\t\treturn\n\t\t}\n\t\tif m, err := regexp.MatchString(c.ShutUpWord, packet.Content); err != nil {\n\t\t\tlog.Println(err)\n\t\t\treturn\n\t\t} else if m {\n\t\t\terr := packet.Bot.ReCallMsg(packet.FromGroupID, packet.MsgRandom, packet.MsgSeq)\n\t\t\tif err != nil {\n\t\t\t\tlog.Println(err)\n\t\t\t}\n\t\t\terr = packet.Bot.SetForbidden(1, c.ShutUpTime, packet.FromGroupID, packet.FromUserID)\n\t\t\tif err != nil {\n\t\t\t\tlog.Println(err)\n\t\t\t}\n\t\t\tpacket.Bot.SendGroupTextMsg(packet.FromGroupID, OPQBot.MacroAt([]int64{packet.FromUserID})+"触发违禁词")\n\t\t\tpacket.Ban = true\n\t\t\treturn\n\t\t}\n\t})\n\treturn nil\n}\n')])])])],1)}),[],!1,null,null,null);n.default=o.exports}}]);