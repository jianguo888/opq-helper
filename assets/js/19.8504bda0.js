(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{395:function(e,n,a){"use strict";a.r(n);var t=a(28),s=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("BackWikiBtn"),e._v(" "),a("h3",{attrs:{id:"发送回复消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发送回复消息"}},[e._v("#")]),e._v(" 发送回复消息")]),e._v(" "),a("p",[e._v("URL: http://127.0.0.1:8888/v1/LuaApiCaller")]),e._v(" "),a("p",[e._v("method :POST")]),e._v(" "),a("h5",{attrs:{id:"webapi请求参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webapi请求参数"}},[e._v("#")]),e._v(" WebAPi请求参数:")]),e._v(" "),a("p",[e._v("params:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("{\n  'qq':123456, #机器人QQ号\n  'funcname':SendMsgV2, #调用方法类型\n}\n")])])]),a("p",[a("strong",[e._v("回复群消息")]),e._v("\nbody(json):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\n{"ToUserUid":123456789,"SendToType":2,"SendMsgType":"ReplayMsg","Content":"回复内容","ReplayInfo":{"MsgSeq":301424,"MsgTime":1601480305,"UserID":1700487478,"RawContent":"没事发吧"}}\n\n# ToUserUid 好友QQ/群ID/私聊对象QQ\n# SendToType  1 为好友消息 2 发送群消息  3 发送私聊消息\n# ReplayInfo  来自框架的消息参数结构 UserID 为原发送者 RawContent 为原内容\n\n')])])]),a("h4",{attrs:{id:"luaapi发送文本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#luaapi发送文本"}},[e._v("#")]),e._v(" LuaApi发送文本")]),e._v(" "),a("p",[a("strong",[e._v("⚠️我就不一一复制发送结构了 WebApi的Json 对应Lua里的table 映射规律是这样的 把Json的字段的引号都去掉 字段值的冒号换成=号 数组[]换成{}⚠️")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('if data.Content == "SendMsgV2Test" then\n        \n        Api.Api_SendMsgV2( --群\n            CurrentQQ,\n            {\n                ToUserUid = 987654321,\n                SendToType = 2,\n                SendMsgType = "ReplayMsg",\n                ReplayInfo = {\n                    MsgSeq = 301424,\n                    MsgTime = 1601480305,\n                    UserID = 987654321,\n                    RawContent = "没事发吧"\n                }\n            }\n        )\n    end\n\n')])])]),a("hr")],1)}),[],!1,null,null,null);n.default=s.exports}}]);