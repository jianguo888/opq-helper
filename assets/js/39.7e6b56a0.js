(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{500:function(e,s,a){"use strict";a.r(s);var t=a(29),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("BackWikiBtn",{attrs:{id:"opq-wiki"}}),e._v(" "),a("h3",{attrs:{id:"发送图片消息-群-好友-私聊"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发送图片消息-群-好友-私聊"}},[e._v("#")]),e._v(" 发送图片消息 群/好友/私聊")]),e._v(" "),a("p",[e._v("URL: http://127.0.0.1:8888/v1/LuaApiCaller")]),e._v(" "),a("p",[e._v("method :POST")]),e._v(" "),a("h5",{attrs:{id:"webapi请求参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webapi请求参数"}},[e._v("#")]),e._v(" WebAPi请求参数:")]),e._v(" "),a("p",[e._v("params:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("{\n  'qq':123456, #机器人QQ号\n  'funcname':SendMsgV2, #调用方法类型\n}\n")])])]),a("h5",{attrs:{id:"通过网络url发送图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过网络url发送图片"}},[e._v("#")]),e._v(" 通过网络URL发送图片:")]),e._v(" "),a("p",[a("strong",[e._v("发送好友图片消息")]),e._v("\nbody(json):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{"ToUserUid":123456789,"SendToType":1,"SendMsgType":"PicMsg","PicUrl":"http://gchat.qpic.cn/gchatpic_new/304980169/636617867-2534335053-8E6B948D1E7A4F96DB5F9C4A6050FB02/0?vuin=123456789&term=255&pictype=0"}\n\n')])])]),a("p",[a("strong",[e._v("发送群图片消息")]),e._v("\nbody(json):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\n{"ToUserUid":123456789,"SendToType":2,"SendMsgType":"PicMsg","PicUrl":"http://gchat.qpic.cn/gchatpic_new/304980169/636617867-2534335053-8E6B948D1E7A4F96DB5F9C4A6050FB02/0?vuin=123456789&term=255&pictype=0"}\n\n')])])]),a("p",[a("strong",[e._v("发送私聊图片")]),e._v("\nbody(json):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\n{"ToUserUid":987654321 ,"GroupID":123456789,"SendToType":3,"SendMsgType":"PicMsg","PicUrl":"http://gchat.qpic.cn/gchatpic_new/304980169/636617867-2534335053-8E6B948D1E7A4F96DB5F9C4A6050FB02/0?vuin=123456789&term=255&pictype=0"}\n\n# ToUserUid 好友QQ/群ID/私聊对象QQ\n# GroupID 私聊对象所在的群ID\n# SendToType  1 为好友消息 2 发送群消息  3 发送私聊消息\n# PicUrl 有效的网络图片地址\n\n')])])]),a("h5",{attrs:{id:"通过本地发送图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过本地发送图片"}},[e._v("#")]),e._v(" 通过本地发送图片:")]),e._v(" "),a("p",[a("strong",[e._v("发送好友图片消息")]),e._v("\nbody(json):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{"ToUserUid":123456789,"SendToType":1,"SendMsgType":"PicMsg","PicPath":"./demo.jpg"}\n\n')])])]),a("p",[a("strong",[e._v("发送群图片消息")]),e._v("\nbody(json):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\n{"ToUserUid":123456789,"SendToType":2,"SendMsgType":"PicMsg","PicPath":"./demo.jpg"}\n\n')])])]),a("p",[a("strong",[e._v("发送私聊图片")]),e._v("\nbody(json):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\n{"ToUserUid":987654321 ,"GroupID":123456789,"SendToType":3,"SendMsgType":"PicMsg","PicPath":"./demo.jpg"}\n\n# PicPath 本地路图片路径\n')])])]),a("h5",{attrs:{id:"通过图片base64编码发送"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过图片base64编码发送"}},[e._v("#")]),e._v(" 通过图片Base64编码发送:")]),e._v(" "),a("p",[a("strong",[e._v("发送好友图片消息")]),e._v("\nbody(json):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{"ToUserUid":123456789,"SendToType":1,"SendMsgType":"PicMsg","PicBase64Buf":"xxxx"}\n\n')])])]),a("p",[a("strong",[e._v("发送群图片消息")]),e._v("\nbody(json):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\n{"ToUserUid":123456789,"SendToType":2,"SendMsgType":"PicMsg","PicBase64Buf":"xxx"}\n\n')])])]),a("p",[a("strong",[e._v("发送私聊图片")]),e._v("\nbody(json):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\n{"ToUserUid":987654321 ,"GroupID":123456789,"SendToType":3,"SendMsgType":"PicMsg","PicBase64Buf":"xxxx"}\n\n##### 通过MD5发送图片(可多图):\n\n\n**仅支持群  发送群图片消息**\nbody(json):\n')])])]),a("p",[e._v('{"ToUserUid":123456789,"SendToType":2,"SendMsgType":"PicMsg","PicMd5s":["Tppfy1LzVenJUY1EEUi/BA=="]}')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n`⚠️ 可根据自己需要选择是通过网络Url发送还是本地发送 PicMd5s PicPath PicUrl PicBase64Buf 字段 同时存在时 处理优先级依次是  PicMd5s PicUrl PicPath PicBase64Buf 发送多图仅支持群的md5图片`\n\n**发送群闪照**\nbody(json):\n")])])]),a("p",[e._v('{"ToUserUid":123456789,"SendToType":2,"SendMsgType":"PicMsg","PicPath":"./demo.jpg","FlashPic":true}')]),e._v(" "),a("h1",{attrs:{id:"flashpic-true-为发送闪照-默认false"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flashpic-true-为发送闪照-默认false"}},[e._v("#")]),e._v(" FlashPic true 为发送闪照 默认false")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("**发送图文消息**\n")])])]),a("p",[e._v('{"ToUserUid":757360354,"SendToType":2,"SendMsgType":"PicMsg","PicPath":"./demo.jpg","Content":"HelloWorld","FlashPic":true}')]),e._v(" "),a("p",[e._v("#只需增加一个Content字段即可 图文的顺序问题会在消息宏中介绍")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n**发送群秀图**\n")])])]),a("p",[e._v("--通过宏[秀图40001] 范围 40000-40006 实现秀图发送 群有效好友无效 后续消息宏介绍")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n#### LuaApi 发送图片\n\n**⚠️我就不一一复制发送结构了 WebApi的Json 对应Lua里的table 映射规律是这样的 把Json的字段的引号都去掉 字段值的冒号换成=号 数组[]换成{}⚠️**\n\n")])])]),a("p",[e._v('--WebApi JsonBody {"ToUserUid":123456789,"SendToType":2,"SendMsgType":"PicMsg","PicMd5s":["Tppfy1LzVenJUY1EEUi/BA=="],"Content":"HelloWorld"}')]),e._v(" "),a("p",[e._v('if data.Content == "SendMsgV2Test" then\nApi.Api_SendMsgV2( --群\nCurrentQQ,\n{\nToUserUid = 123456789,\nSendToType = 2,\nSendMsgType = "PicMsg",\nContent = "HelloWorld",\nPicMd5s = {"Tppfy1LzVenJUY1EEUi/BA=="}\n}\n)\nend')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n\n\n\n------\n\n\n")])])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);