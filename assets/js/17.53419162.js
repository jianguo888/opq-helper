(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{393:function(e,t,s){"use strict";s.r(t);var a=s(28),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("BackWikiBtn"),e._v(" "),s("h3",{attrs:{id:"发送xml-json消息-群-好友-私聊"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送xml-json消息-群-好友-私聊"}},[e._v("#")]),e._v(" 发送XML/JSON消息 群/好友/私聊")]),e._v(" "),s("p",[e._v("URL: http://127.0.0.1:8888/v1/LuaApiCaller")]),e._v(" "),s("p",[e._v("method :POST")]),e._v(" "),s("h5",{attrs:{id:"webapi请求参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webapi请求参数"}},[e._v("#")]),e._v(" WebAPi请求参数:")]),e._v(" "),s("p",[e._v("params:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("{\n  'qq':123456, #机器人QQ号\n  'funcname':SendMsgV2, #调用方法类型\n}\n")])])]),s("p",[s("strong",[e._v("发送好友XML消息")]),e._v("\nbody(json):")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("{\"ToUserUid\":123456789,\"SendToType\":1,\"SendMsgType\":\"XmlMsg\",\"Content\":\"<?xml version='1.0' encoding='UTF-8' standalone='yes' ?><msg serviceID='1' templateID='1' action='' brief='&#91;群僵尸任务&#93;' sourceMsgId='0' url='' flag='2' adverSign='0' multiMsgFlag='0'><item layout='0'><title size='38' color='#9900CC' style='1'>🆕已经启动🆕</title></item><item layout='0'><hr hidden='false' style='0' /></item><item layout='6'><summary color='#FF0033'>1⃣️</summary><summary color='#FF0099'>💪正在扫秒僵尸💪</summary></item><source name='' icon='' action='' appid='-1' /></msg>\"}\n\n")])])]),s("p",[s("strong",[e._v("发送群XML消息")]),e._v("\nbody(json):")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# ⚠️ 此XML 只有群能收到 自行转义 收不到就说明XML失效或屏蔽了\n{\"ToUserUid\":123456789,\"SendToType\":2,\"SendMsgType\":\"XmlMsg\",\"Content\":\"<?xml version='1.0' encoding='UTF-8' standalone='yes' ?><msg serviceID='1' templateID='1' action='' brief='&#91;群僵尸任务&#93;' sourceMsgId='0' url='' flag='2' adverSign='0' multiMsgFlag='0'><item layout='0'><title size='38' color='#9900CC' style='1'>🆕已经启动🆕</title></item><item layout='0'><hr hidden='false' style='0' /></item><item layout='6'><summary color='#FF0033'>1⃣️</summary><summary color='#FF0099'>💪正在扫秒僵尸💪</summary></item><source name='' icon='' action='' appid='-1' /></msg>\"}\n\n")])])]),s("p",[s("strong",[e._v("发送私聊XML")]),e._v("\nbody(json):")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("\n{\"ToUserUid\":987654321 ,\"GroupID\":123456789,\"SendToType\":3,\"SendMsgType\":\"XmlMsg\",\"Content\":\"<?xml version='1.0' encoding='UTF-8' standalone='yes' ?><msg serviceID='1' templateID='1' action='' brief='&#91;群僵尸任务&#93;' sourceMsgId='0' url='' flag='2' adverSign='0' multiMsgFlag='0'><item layout='0'><title size='38' color='#9900CC' style='1'>🆕已经启动🆕</title></item><item layout='0'><hr hidden='false' style='0' /></item><item layout='6'><summary color='#FF0033'>1⃣️</summary><summary color='#FF0099'>💪正在扫秒僵尸💪</summary></item><source name='' icon='' action='' appid='-1' /></msg>\"}\n\n# ToUserUid 好友QQ/群ID/私聊对象QQ\n# GroupID 私聊对象所在的群ID\n# SendToType  1 为好友消息 2 发送群消息  3 发送私聊消息\n# Content 为XML或Json\n\n")])])]),s("p",[s("strong",[e._v("发送群Json消息")]),e._v("\nbody(json):")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('# ⚠️ 自行转义 收不到就说明JSON失效或屏蔽了\n{"ToUserUid":123456789,"SendToType":2,"SendMsgType":"JsonMsg","Content":"{"config":{"forward":1,"autosize":1},"prompt":"[应用]天气","app":"com.tencent.weather","ver":"0.0.0.1","view":"RichInfoView","meta":{"richinfo":{"adcode":"101210701","city":"成都","air":"58","min":"20","ts":"1500550866","wind":"1","date":"6月27日 周四","max":"28","type":"201"}},"desc":"天气"}"}\n\n')])])]),s("h4",{attrs:{id:"luaapi发送xml-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#luaapi发送xml-json"}},[e._v("#")]),e._v(" LuaApi发送XML/JSON")]),e._v(" "),s("p",[s("strong",[e._v("⚠️我就不一一复制发送结构了 WebApi的Json 对应Lua里的table 映射规律是这样的 把Json的字段的引号都去掉 字段值的冒号换成=号 数组[]换成{}⚠️")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('if data.Content == "SendMsgV2Test" then\n        Api.Api_SendMsgV2( --群\n            CurrentQQ,\n            {\n                ToUserUid = 987654321,\n                SendToType = 2,\n                SendMsgType = "XmlMsg",\n                Content = [[<?xml version=\'1.0\' encoding=\'UTF-8\' standalone=\'yes\' ?><msg serviceID=\'1\' templateID=\'1\' action=\'\' brief=\'&#91;群僵尸任务&#93;\' sourceMsgId=\'0\' url=\'\' flag=\'2\' adverSign=\'0\' multiMsgFlag=\'0\'><item layout=\'0\'><title size=\'38\' color=\'#9900CC\' style=\'1\'>🆕已经启动🆕</title></item><item layout=\'0\'><hr hidden=\'false\' style=\'0\' /></item><item layout=\'6\'><summary color=\'#FF0033\'>1⃣️</summary><summary color=\'#FF0099\'>💪正在扫秒僵尸💪</summary></item><source name=\'\' icon=\'\' action=\'\' appid=\'-1\' /></msg>]]\n            }\n        )\n        Api.Api_SendMsgV2( --群\n            CurrentQQ,\n            {\n                ToUserUid = 987654321,\n                SendToType = 2,\n                SendMsgType = "JsonMsg",\n                Content = [[{"config":{"forward":1,"autosize":1},"prompt":"[应用]天气","app":"com.tencent.weather","ver":"0.0.0.1","view":"RichInfoView","meta":{"richinfo":{"adcode":"101210701","city":"成都","air":"58","min":"20","ts":"1500550866","wind":"1","date":"6月27日 周四","max":"28","type":"201"}},"desc":"天气"}]]\n            }\n        )\n    end\n\n')])])]),s("hr")],1)}),[],!1,null,null,null);t.default=n.exports}}]);