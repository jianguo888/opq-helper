(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{407:function(t,o,e){"use strict";e.r(o);var r=e(28),_=Object(r.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("BackWikiBtn",{attrs:{id:"opq-setu-wiki"}}),t._v(" "),e("p",[t._v("首次启动需要配置的文件有:")]),t._v(" "),e("p",[t._v("OPQ-SetuBot/"),e("a",{attrs:{href:"https://github.com/opq-osc/OPQ-SetuBot/wiki/%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6#opq-setubotbotoyjson",target:"_blank",rel:"noopener noreferrer"}},[t._v("botoy.json"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("OPQ-SetuBot/plugins/bot_Setu/"),e("a",{attrs:{href:"https://github.com/opq-osc/OPQ-SetuBot/wiki/%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6#opq-setubotpluginsbot_setuapispixivtokenjson",target:"_blank",rel:"noopener noreferrer"}},[t._v(".PixivToken.json"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("OPQ-SetuBot/plugins/bot_Search_Picture/"),e("a",{attrs:{href:"https://github.com/opq-osc/OPQ-SetuBot/wiki/%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6#opq-setubotpluginsbot_search_pictureconfigjson",target:"_blank",rel:"noopener noreferrer"}},[t._v("config.json"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("strong",[t._v("还需要运行OPQ-SetuBot/script下的generateConfig.py文件来给Setu插件生成各个群的"),e("a",{attrs:{href:"https://github.com/yuban10703/OPQ-SetuBot/wiki/%E7%BE%A4%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置文件"),e("OutboundLink")],1)])]),t._v(" "),e("hr"),t._v(" "),e("h3",{attrs:{id:"opq-setubot-botoy-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#opq-setubot-botoy-json"}},[t._v("#")]),t._v(" OPQ-SetuBot/botoy.json")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("字段名")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("host")]),t._v(" "),e("td",[t._v("OPQ的IP,本机运行就 http://127.0.0.1")])]),t._v(" "),e("tr",[e("td",[t._v("port")]),t._v(" "),e("td",[t._v("OPQ的端口,没修改过就是8888")])]),t._v(" "),e("tr",[e("td",[t._v("bot")]),t._v(" "),e("td",[t._v("bot的qq")])]),t._v(" "),e("tr",[e("td",[t._v("superAdmin")]),t._v(" "),e("td",[t._v("你的qq")])]),t._v(" "),e("tr",[e("td",[t._v("proxies_http")]),t._v(" "),e("td",[t._v("http代理 "),e("a",{attrs:{href:"https://www.python-httpx.org/advanced/#http-proxying",target:"_blank",rel:"noopener noreferrer"}},[t._v("Advanced Usage - HTTPX (python-httpx.org)"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("proxies_socks")]),t._v(" "),e("td",[t._v("socks代理 例子:  socks5://username:password@127.0.0.1:8888")])]),t._v(" "),e("tr",[e("td",[t._v("group_blacklist")]),t._v(" "),e("td",[t._v("略")])]),t._v(" "),e("tr",[e("td",[t._v("friend_blacklist")]),t._v(" "),e("td",[t._v("略")])]),t._v(" "),e("tr",[e("td",[t._v("blocked_users")]),t._v(" "),e("td",[t._v("略")])]),t._v(" "),e("tr",[e("td",[t._v("webhook")]),t._v(" "),e("td",[t._v("略")])]),t._v(" "),e("tr",[e("td",[t._v("webhook_post_url")]),t._v(" "),e("td",[t._v("略")])]),t._v(" "),e("tr",[e("td",[t._v("webhook_timeout")]),t._v(" "),e("td",[t._v("略")])])])]),t._v(" "),e("hr"),t._v(" "),e("h3",{attrs:{id:"opq-setubot-plugins-bot-setu-pixivtoken-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#opq-setubot-plugins-bot-setu-pixivtoken-json"}},[t._v("#")]),t._v(" OPQ-SetuBot/plugins/bot_Setu/.PixivToken.json")]),t._v(" "),e("p",[t._v("按照这里操作"),e("a",{attrs:{href:"https://gist.github.com/upbit/6edda27cb1644e94183291109b8a5fde",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixiv OAuth Flow (with Selenium) (github.com)"),e("OutboundLink")],1),t._v("(往下拉,有中文)")]),t._v(" "),e("p",[t._v("最后把这里面斜体加粗的字符串完整粘贴到 "),e("strong",[t._v(".PixivToken.json")]),t._v(" 文件里的对应位置")]),t._v(" "),e("blockquote",[e("p",[t._v("❯ python3 pixiv_auth.py login")]),t._v(" "),e("p",[t._v("[INFO] Get code: 3s3Xc075wd7njPLJBXgXc4qS-...")]),t._v(" "),e("p",[t._v("access_token: Fp9WaXhNapC8myQltgEn...")]),t._v(" "),e("p",[t._v("refresh_token: "),e("em",[e("strong",[t._v("uXooTT7xz9v4mflnZqJ...")])])]),t._v(" "),e("p",[t._v("expires_in: 3600")])]),t._v(" "),e("hr"),t._v(" "),e("h4",{attrs:{id:"opq-setubot-plugins-bot-search-picture-config-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#opq-setubot-plugins-bot-search-picture-config-json"}},[t._v("#")]),t._v(" OPQ-SetuBot/plugins/bot_Search_Picture/config.json")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("字段名")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("APIKEY")]),t._v(" "),e("td",[t._v("saucenao的apikey,申请地址: "),e("a",{attrs:{href:"https://saucenao.com/user.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("SauceNAO User Config"),e("OutboundLink")],1),t._v(",注册后左侧api白字点进去的api key")])])])])],1)}),[],!1,null,null,null);o.default=_.exports}}]);