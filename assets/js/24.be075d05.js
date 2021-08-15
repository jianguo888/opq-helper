(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{400:function(e,a,s){"use strict";s.r(a);var t=s(28),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("BackWikiBtn",{attrs:{id:"opq-wiki"}}),e._v(" "),s("h3",{attrs:{id:"发送语音消息-群-好友-私聊"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送语音消息-群-好友-私聊"}},[e._v("#")]),e._v(" 发送语音消息 群/好友/私聊")]),e._v(" "),s("p",[e._v("URL: http://127.0.0.1:8888/v1/LuaApiCaller")]),e._v(" "),s("p",[e._v("method :POST")]),e._v(" "),s("h5",{attrs:{id:"webapi请求参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webapi请求参数"}},[e._v("#")]),e._v(" WebAPi请求参数:")]),e._v(" "),s("p",[e._v("params:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("{\n  'qq':123456, #机器人QQ号\n  'funcname':SendMsgV2, #调用方法类型\n}\n")])])]),s("h5",{attrs:{id:"通过网络url发送语音"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过网络url发送语音"}},[e._v("#")]),e._v(" 通过网络URL发送语音:")]),e._v(" "),s("p",[s("strong",[e._v("发送好友语音消息")]),e._v("\nbody(json):")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{"ToUserUid":123456789,"SendToType":1,"SendMsgType":"VoiceMsg","VoiceUrl":"http://grouptalk.c2c.qq.com/?ver=0&rkey=3062020101045b305902010102010102040b7dec9504243941693144434158744c6776496e467665316b6e53676d6231447959696a627a7952677702045f74294f041f0000000866696c6574797065000000013100000005636f64656300000001310400&filetype=1&voice_codec=1"}\n\n')])])]),s("p",[s("strong",[e._v("发送群语音消息")]),e._v("\nbody(json):")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('\n{"ToUserUid":123456789,"SendToType":2,"SendMsgType":"VoiceMsg","VoiceUrl":"http://grouptalk.c2c.qq.com/?ver=0&rkey=3062020101045b305902010102010102040b7dec9504243941693144434158744c6776496e467665316b6e53676d6231447959696a627a7952677702045f74294f041f0000000866696c6574797065000000013100000005636f64656300000001310400&filetype=1&voice_codec=1"}\n\n')])])]),s("p",[s("strong",[e._v("发送私聊语音")]),e._v("\nbody(json):")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('\n{"ToUserUid":987654321 ,"GroupID":123456789,"SendToType":3,"SendMsgType":"VoiceMsg","VoiceUrl":"http://grouptalk.c2c.qq.com/?ver=0&rkey=3062020101045b305902010102010102040b7dec9504243941693144434158744c6776496e467665316b6e53676d6231447959696a627a7952677702045f74294f041f0000000866696c6574797065000000013100000005636f64656300000001310400&filetype=1&voice_codec=1"}\n\n# ToUserUid 好友QQ/群ID/私聊对象QQ\n# GroupID 私聊对象所在的群ID\n# SendToType  1 为好友消息 2 发送群消息  3 发送私聊消息\n# VoiceUrl 有效的网络语音地址\n\n')])])]),s("h5",{attrs:{id:"通过本地发送语音"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过本地发送语音"}},[e._v("#")]),e._v(" 通过本地发送语音:")]),e._v(" "),s("p",[s("strong",[e._v("发送好友语音消息")]),e._v("\nbody(json):")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{"ToUserUid":123456789,"SendToType":1,"SendMsgType":"VoiceMsg","VoicePath":"./demo.silk"}\n\n')])])]),s("p",[s("strong",[e._v("发送群语音消息")]),e._v("\nbody(json):")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('\n{"ToUserUid":123456789,"SendToType":2,"SendMsgType":"VoiceMsg","VoicePath":"./demo.silk"}\n\n')])])]),s("p",[s("strong",[e._v("发送私聊语音")]),e._v("\nbody(json):")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{"ToUserUid":987654321 ,"GroupID":123456789,"SendToType":3,"SendMsgType":"VoiceMsg","VoicePath":"./demo.silk"}\n\n# PicPath 本地路语音路径\n')])])]),s("h4",{attrs:{id:"luaapi-发送语音"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#luaapi-发送语音"}},[e._v("#")]),e._v(" LuaApi 发送语音")]),e._v(" "),s("p",[s("strong",[e._v("⚠️我就不一一复制发送结构了 WebApi的Json 对应Lua里的table 映射规律是这样的 把Json的字段的引号都去掉 字段值的冒号换成=号 数组[]换成{}⚠️")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('\n--WebApi JsonBody {"ToUserUid":123456789,"SendToType":2,"SendMsgType":"VoiceMsg","VoicePath":"./demo.silk"}\nif data.Content == "SendMsgV2Test" then\n        Api.Api_SendMsgV2( --群\n            CurrentQQ,\n            {\n                ToUserUid = 123456789,\n                SendToType = 2,\n                SendMsgType = "VoiceMsg",\n                VoicePath = "./demo.silk"\n            }\n        )\n    end\n\n')])])]),s("hr")],1)}),[],!1,null,null,null);a.default=n.exports}}]);