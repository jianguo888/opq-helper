(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{498:function(e,t,a){"use strict";a.r(t);var s=a(29),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("BackWikiBtn",{attrs:{id:"opq-wiki"}}),e._v(" "),a("h1",{attrs:{id:"定时任务管理-demo语音报时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定时任务管理-demo语音报时"}},[e._v("#")]),e._v(" 定时任务管理-Demo语音报时")]),e._v(" "),a("p",[a("strong",[e._v("之前一直用linux下的Crontab 现在OPQ内置了定时任务属实是方便了很多..谁用谁知道 懂得人自然懂 会用的人自然会用 关于OPQ的XXXXX 不喜勿喷 嘿嘿 全部源码以及语音报时文件均在项目主页的"),a("code",[e._v("Plugins")]),e._v("目录下")])]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"搭建指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建指南"}},[e._v("#")]),e._v(" 搭建指南")]),e._v(" "),a("p",[a("strong",[e._v("Step 1 将项目主页"),a("code",[e._v("Plugins")]),e._v("目录的"),a("code",[e._v("TimeSilk")]),e._v("目录拉到本地的"),a("code",[e._v("Plugins")]),e._v("的目录中")])]),e._v(" "),a("p",[a("strong",[e._v("Step 2 将项目主页"),a("code",[e._v("Plugins")]),e._v("目录的"),a("code",[e._v("CronDemo1.lua")]),e._v("文件拉到本地的"),a("code",[e._v("CronSchedules")]),e._v("的目录中")])]),e._v(" "),a("p",[a("strong",[e._v("Step 3 通过WebApi或lua 添加定时任务")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('POST\n{"QQ":"123456789","Sepc":"0 0 */1 * * ?","FileName":"CronDemo1.lua","FuncName":"TimeReport"}\n')])])]),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('Lua\n        Api.Api_AddCrons(\n            {\n                QQ = "123456789",\n                Sepc = "0 0 */1 * * ?",\n                FileName = "CronDemo1.lua",\n                FuncName = "TimeReport"\n            }\n        )\n')])])]),a("h2",{attrs:{id:"justforfun"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#justforfun"}},[e._v("#")]),e._v(" JustForFun")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);