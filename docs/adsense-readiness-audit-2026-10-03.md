# EpoxyPlanner AdSense 申请前审计

审计及修复日期：2026-10-03（Asia/Shanghai）。目标：[epoxyplanner.com](https://epoxyplanner.com/)。初审代码版本：`2f5a795`；本报告包含随后完成的网站端修复。使用 `adsense-site-auditor`，官方依据在本次审计中重新读取。

**结论：Ready after fixes（网站端问题已修复，后台同意消息及浏览器复测仍待核实）。**

核心计算器具有实际用途，网站访问和验证配置已具备申请基础。隐私披露、14 篇指南及 Methodology/Authors 已完成修复；原自建接受/拒绝界面已改为 Google 官方同意控制的入口。该入口只有在 Google 消息及 API 实际可用时才显示撤回按钮，不能替代后台发布认证 CMP 消息。欧洲同意机制同时涉及后续广告投放准备，不能据此断言 Google 一定会拒绝网站申请。审核最终由 Google 决定，本报告不提供通过率或批准保证。

用户已确认已有 AdSense 账号，流量主要来自 Google、Bing 的 SEO 及社媒。申请应使用现有账号新增网站。年龄、是否存在重复账号、账号后台当前网站状态及流量质量尚未独立核实。

## 网站端修复与验收

- Privacy 增加 Google/第三方基于此前访问本站或其他网站投放广告的披露、Ads Settings 及行业退出链接、同意修改和撤回说明。
- 14 篇指南增加尺寸推导、预算/采购表、分层示例及操作边界；费用、损耗与密度均标明为示例输入，厂家层厚信息链接到原始资料。两个浇注深度页分别回答“如何读取限制”和“如何计算层数”，保留原 URL。
- Methodology 增加形状公式、US 单位常数、损耗/覆盖/混合/分层/费用口径及可手算示例。Authors 删除无法核实的团队、实地验证声明，准确说明规划参数的性质。
- 删除只写入本站 localStorage、不会影响 Google 请求的自建接受/拒绝逻辑。Privacy choices 接入 `googlefc.callbackQueue`、`CONSENT_API_READY` 及 `showRevocationMessage()`；只有 TCF 成功报告 `gdprApplies` 且 API 可用才展示站点撤回按钮。没有把旧 Cookie 选择转为 Google 同意记录。
- 7 个信息页（About、Authors、Methodology、Contact、Privacy、Terms、FAQ）不再加载 AdSense。首页、51 个计算器及 20 篇指南保留标准脚本，共 72 页。404 和自有嵌入页继续不加载。
- `npm run build` 成功；79 个正式生成页面的广告排除规则、H1、站内链接及片段锚点检查通过，ads.txt 内容保持正确。隐私入口的 4 项 Node 测试覆盖无 Google API、延迟加载、地区不适用、撤回队列与键盘焦点；这些测试使用模拟 API，不能替代真实 Google 消息的端到端验证。

## 初审检查范围与证据

- 全部 79 个正式页面均通过在线 GET 检查，返回 HTTP 200：51 个计算器、20 篇指南、8 个信息页面（其中包含首页）。
- 语言分布：英语 57 页、德语 4 页、法语 4 页、巴西葡萄牙语 6 页、西班牙语 4 页、意大利语 4 页。这些语言均在 Google 支持列表中。
- 79 页均有正确的 canonical、一个 H1，以及 `<head>` 中的指定 AdSense 脚本。所有已检查的站内内容链接和片段锚点均找到对应内容。
- `/ads.txt` 返回 HTTP 200、`text/plain`，内容是 `google.com, pub-3562784107542460, DIRECT, f08c47fec0942fa0`。
- robots.txt 允许抓取；站点地图索引及三个分表均返回 200。模拟 `Mediapartners-Google` 和 `AdsBot-Google` User-Agent 的内容页请求返回 200，未观察到挑战页面。这不等于验证了 Google 的真实爬虫 IP 或所有地区的访问权限。
- HTTP、www、无尾斜杠及已合并旧页面的抽查均为单次 301，目标正确。不存在的测试地址返回真实 404；404 和自有嵌入工具页不加载 AdSense 脚本。
- DNS A 记录可解析，HTTPS 请求成功。79 个页面请求耗时中位数约 324 ms、最大约 2.0 s，仅代表本次观测，不能代替长期可用性或浏览器性能数据。
- 离线执行现有计算函数，验证体积、损耗、成本、英制/公制一致性、单位转换、分层及无效尺寸：48 × 18 × 1.25 in 为 4.68 gal，8% 损耗后为 5.05 gal；400 sq ft 专业环氧估价为 $1,600–$4,000。检查通过，浏览器输入事件仍未验证。
- Contact 邮件链接由 Cloudflare 混淆，解码脚本返回 200；剥离哈希后访问 `/cdn-cgi/l/email-protection` 出现 404 不足以认定邮件链接坏了。域名有 Cloudflare MX；邮箱是否实际收件未测试，也未发送邮件。
- 浏览器自动化接口创建/绑定页面时超时，未能完成桌面和手机的视觉及点击复测。涉及这部分的条目标为 Unknown；本报告不声称已经验证手机菜单、弹窗遮挡或运行时广告行为。

在线证据及 HTML 副本保存在本机临时目录：`C:/Users/jiank/AppData/Local/Temp/epoxyplanner-adsense-audit-2026-10-03/`。网站内容与公开代码检查覆盖本次版本，不能代替 AdSense 后台、流量日志或完整第三方版权取证。

## 初审发现与修复结果

以下缺口描述对应初审版本；各节末尾注明本次处理结果。完整核对表反映修复后的状态，后台及浏览器证据不足的项目继续保留 Unknown。

### Blocker：隐私页面没有完整满足 AdSense 的必需披露

涉及 `ADS-PRIV-01`、`ADS-PRIV-10`。在线 [Privacy Policy](https://epoxyplanner.com/privacy/) 已说明 Google、Cookie、IP 地址、存储及设备信息，但未说明广告 Cookie 可依据用户此前访问本站或其他网站投放广告，也未提供个性化广告退出说明和 Google Ads Settings 链接。页面仍大量使用“如果服务启用”的假设语气，实际验证脚本已经部署。

Google 的 [Required content](https://support.google.com/adsense/answer/1348695?hl=en) 明确列出了广告 Cookie、跨站访问依据和个性化广告退出披露。这里的 Blocker 指申请准备中的明确披露缺项，不代表账号已被处罚。

**具体修复：**更新隐私页为当前实际状态；加入上述三项披露和 [Google 广告设置](https://www.google.com/settings/ads) 入口，说明本站 Cookie 选择如何修改或撤回；区分已启用的服务和仅计划启用的服务。若开放其他广告技术提供商，按实际后台配置补充供应商信息、相关链接和退出方式。

**处理结果：网站端已完成。**必需披露、供应商隐私链接、Ads Settings/行业退出入口及撤回说明已加入；实际 CMP 发布仍在下项单独核实。

### High：若干指南的独立内容不足以回答标题中的具体问题

涉及 `ADS-CONTENT-03`、`ADS-PUB-11`。按正文主要字段（intro、answer、takeaways、sections）统计，20 篇指南中有 13 篇的独立正文约少于 200 个英文词；其中大部分约 150–200 词。统计不含共享 FAQ、相关推荐和导航，属于近似诊断值。整页文字更多，不能用整页总词数掩盖独立正文不足。

具体证据：

- [Epoxy Waste Factor Guide](https://epoxyplanner.com/epoxy-waste-factor-guide/) 主要罗列杯损、渗透和溢出因素，没有损耗计算示例、参数选取依据或情景比较。
- [Epoxy Countertop Cost](https://epoxyplanner.com/epoxy-countertop-cost/) 罗列成本因素并导向其他计算器，没有预算算例或价格口径。
- [River Table Epoxy Cost](https://epoxyplanner.com/river-table-epoxy-cost/) 说明影响因素，没有展示一个渠道尺寸如何转成采购数量和材料预算。
- [Epoxy Pour Depth Guide](https://epoxyplanner.com/epoxy-pour-depth-guide/) 与 [Maximum Epoxy Pour Depth](https://epoxyplanner.com/maximum-epoxy-pour-depth/) 内容重叠，均未提供具体产品的层厚示例及资料链接；反而主计算器页面已有这类资料。

**具体修复：**优先补充这五页的实际算例、表格、参数依据与出处；对两个浇注深度页选择合并并 301，或明确不同任务后分别补足。其余较弱指南逐页检查是否回答了标题承诺，补充独有信息或并入更强页面。引用厂家信息时增加自己的计算或解释，避免复制产品手册。

这属于基于内容的审计判断，**Google 没有在本次读取的官方申请要求中规定统一的最低文章字数**，也没有要求每个工具站必须凑够固定数量的文章。官方重点是独特、相关、有价值的内容和可用的导航，见 [网站页面准备要求](https://support.google.com/adsense/answer/7299563?hl=en)。主计算器的具体例子和真实计算功能是正向证据。

**处理结果：已完成。**补充初审指出的 13 篇指南及 Bar Top Cost 共 14 篇；复核其标题承诺、公式与示例口径，没有把增加字数作为单独通过依据。

### High：自建 Cookie 选择没有传递给 Google 广告系统

涉及 `ADS-PRIV-04`。`src/templates/render.mjs` 中的 bootstrap 仅建立 `window.epoxyConsentState` 和 DOM dataset；`src/assets/site.js` 保存 localStorage 并发送 `epoxy:consent-changed` 自定义事件。全仓未发现该事件的广告侧监听器、IAB TCF 接口或对 Google 的同意更新调用。AdSense loader 直接加载，不读取这些自建状态。因此，这个自建弹窗本身不能证明用户拒绝或撤回后 Google 会遵循选择。

网站有德语、法语、西班牙语和意大利语内容，具有欧洲访客场景。Google 的 [EU user consent policy](https://www.google.com/about/company/user-consent-policy/) 要求相关披露、适用情况下的有效同意、同意记录和撤回说明；向 EEA、英国和瑞士用户投放**个性化广告**时，还要求 [Google 认证、支持 IAB TCF 的 CMP](https://support.google.com/adsense/answer/13554116?hl=en)。最新文档允许非认证 CMP 流量在受支持的情况下获得非个性化或有限广告，这不是可以忽略同意规则的豁免。单独添加 Consent Mode 也不能替代需要的认证 CMP。

**具体修复：**在 AdSense 的“隐私权和消息”中为该网站配置并发布欧洲法规消息（Google 官方文档确认其为认证 CMP），或接入其他适合本站的认证 CMP；避免同时出现两套互相矛盾的广告同意界面；验证拒绝、接受和撤回动作能影响真实广告请求。后台是否已配置自动注入的 Google 消息，本次无法查看，因此该后台事实仍待核实。本项是启用相关地区广告前的高风险准备缺口，不能单独等同于 Google 申请必拒。

**处理结果：网站端已改接官方 API，后台及真实请求仍为 Unknown。**旧界面已移除，已实现可用地区的官方撤回入口。Google 消息通过现有 AdSense tag 部署，但先要在后台发布到本站；浏览器接口超时，无法代为操作或确认发布。没有添加第二套 CMP loader，也没有将模拟 API 测试当作实际同意验证。

### Medium：信任页面的承诺与 Methodology 实际内容不一致

涉及 `ADS-UX-05`，发布者声明核实涉及 `ADS-PUB-05`。 [Authors](https://epoxyplanner.com/authors/) 表示 Methodology 展示所有公式和假设，但 [Methodology](https://epoxyplanner.com/methodology/) 只有约 164 词，实际是三段概述，没有公式、换算常数、损耗来源或算例。“small team”“documented project patterns”等事实也没有可核验介绍。

**具体修复：**Methodology 增加矩形、圆形、球体公式，231 in³/US gal、升换算、损耗及分层算法、费用口径、参数来源和一个可手算示例；将 Authors 改为真实的运营者或团队介绍，删除无法证实的经验/验证声明。个人姓名、头像或营业地址不是本次读取的 AdSense 通用硬性要求，不应为了“过审”虚构团队或资历。内容及发布者描述应准确，依据 [Google Publisher Policies](https://support.google.com/adsense/answer/10502938?hl=en)。

**处理结果：已完成。**公式、单位、模型、示例与来源已补足；Authors 不再声称存在已证明的团队资历或田野验证。Contact 的实际收件能力仍未测试。

### 开广告前的配置检查：功能页与弱内容页的自动广告排除

涉及 `ADS-PROG-06`、`ADS-PUB-11`。共享模板目前也将验证脚本加载在 Contact、Privacy、Terms、FAQ 等页面。**验证 loader 存在不等于这些页面已经展示广告**；仓库中没有手动 `<ins class="adsbygoogle">` 广告位，自动广告后台配置未知。

发布自动广告前检查并排除不适合的功能、法律说明和弱内容页面，尤其是 `/contact/`、`/privacy/`、`/terms/` 及尚未补足的指南/Methodology。现有 404 和自有嵌入工具页保持无广告。这是预防性配置建议，不是认定当前已经发生了违规投放。Google 不允许在非内容页面投放广告，见 [AdSense Program policies](https://support.google.com/adsense/answer/48182?hl=en)。

**处理结果：代码中已排除 7 个信息页。**指南已补足；后台自动广告格式、落地布局和加载后行为仍需在实际投放时复核。

## 完整要求核对表

状态定义：Pass＝在本次证据范围内符合；Fail＝发现需修复的准备缺口；Unknown＝证据不足；N/A＝当前网站类型或投放方式不适用。涉及实际广告行为的结论不能从静态验证脚本推断。

| ID | Status | 证据 | 下一步 |
| --- | --- | --- | --- |
| ADS-ELIG-01 | Unknown | 用户确认有现有账号，未确认年龄或合法主体资格 | 使用符合资格的现有账号，不索取身份证件 |
| ADS-ELIG-02 | Unknown | 已有账号；是否存在重复账号未确认 | 在现有账号添加网站，确认没有重复账号 |
| ADS-ELIG-03 | Unknown | 网站端缺口已处理；后台 CMP、账号状态及运行时证据不足 | 核实后台与浏览器项目后送审；该项为准备情况汇总 |
| ADS-ELIG-04 | N/A | 独立域名工具站，非 Blogger/YouTube 等合作伙伴流程 | 使用普通网站添加流程 |
| ADS-OWN-01 | Pass | 仓库、模板可编辑；72 个首页/计算器/指南页面有验证代码，另 7 个信息页主动排除 | 保持内容页验证代码及信息页排除 |
| ADS-OWN-02 | Pass | 本会话已成功推送并部署到该正式域名，具有实际站点控制证据 | 后台以 epoxyplanner.com 添加网站 |
| ADS-OWN-03 | Unknown | 页面提供有效 HTML 和 JS 模块，离线算法通过；浏览器绑定超时 | 复测启用 JS 后页面与计算器运行 |
| ADS-SITE-01 | Unknown | 用户截图显示网站待审核；没有本次实时后台 Ready 状态 | 验证所有权、申请审核，确认 Ready 后投放 |
| ADS-SITE-02 | Pass | 脚本和 ads.txt 两条验证路径均在线有效 | 后台点击验证 |
| ADS-TXT-01 | Pass | ads.txt 的 Google seller 行及 publisher ID 与用户提供值一致 | 保持正确行 |
| ADS-TXT-02 | Pass | 根目录 ads.txt 200，纯文本类型，构建自动生成 | 后续构建保留 |
| ADS-CONTENT-01 | Pass | 实际计算逻辑、具体例子、采购数量及预算功能具有访客价值 | 保持核心工具和指南的实际价值 |
| ADS-CONTENT-02 | Pass | 内容源为本地数据和自有计算工具，无抓取文章/联盟 feed 导入或外部嵌入充当正文 | 外部资料继续注明出处并增加解释 |
| ADS-CONTENT-03 | Pass | 14 篇指南补充独有算例、预算表与操作边界，标题中的数量/成本/深度问题已有具体回答 | 新内容继续按问题完成度审查 |
| ADS-CONTENT-04 | Pass | 79 页在线，无占位文本、coming soon 或 under construction；真实工具存在 | 保持完整可用 |
| ADS-CONTENT-05 | Pass | 本地模板无手动广告位、联盟 feed 或付费推广块，正文以工具与说明为主 | 实际开启自动广告后重新检查占比 |
| ADS-CONTENT-06 | Pass | 六种语言均属于官方支持语言，翻译页有实际说明和工具内容 | 新增语言先核对支持列表 |
| ADS-CONTENT-07 | N/A | 无评论、论坛、上传或公开 UGC 系统 | 将来增加 UGC 时落实审核 |
| ADS-CONTENT-08 | Pass | 等价旧入口已有 301；深度指南明确分工，工具页存在不同场景逻辑，未发现完全重复正文或机械关键词堆砌 | 保持每页独立任务与实际价值 |
| ADS-UX-01 | Unknown | 导航和内容链接静态检查通过；未完成桌面/手机菜单点击与视觉检查 | 人工或可用浏览器复测菜单、语言切换和阅读布局 |
| ADS-UX-02 | Pass | 首页任务入口、计算器/指南分组、面包屑及相关内容链接可明确定位内容 | 保持任务导航 |
| ADS-UX-03 | Pass | 代码未发现假下载/假播放按钮；内容跳转目标存在，旧页重定向相关 | 新增商业入口时检查其目标 |
| ADS-UX-04 | Unknown | 源码没有强制下载、改浏览器设置或异常外跳；未完成运行时弹窗检查 | 复测首访及拒绝 Cookie 后的实际行为 |
| ADS-UX-05 | Pass | 信任页可访问；Methodology 已补公式与假设，Authors 已删除不可核实声明，Privacy 已完善 | 邮箱实际收件仍需所有者核实 |
| ADS-UX-06 | Unknown | 无仓库内广告位，已实现响应式 CSS；没有本次视觉验证 | 检查手机层级和 Cookie/广告覆盖情况 |
| ADS-CRAWL-01 | Pass | 79 页与关键文件返回 200，不存在地址真实返回 404 | 后续发布保持状态码正确 |
| ADS-CRAWL-02 | Unknown | robots 允许，未登录及两个模拟 Google UA 均 200；真实 Google IP、地区和 WAF 配置未验证 | 后台确认无 Google/地区屏蔽，核对实际爬虫访问 |
| ADS-CRAWL-03 | Pass | 主内容直接由 GET 返回，计算结果不依赖 POST 页面状态 | 保留可抓取正文 |
| ADS-CRAWL-04 | Pass | HTTP/www/无尾斜杠和六个旧路径抽查为单次正确 301 | 避免新增重定向链 |
| ADS-CRAWL-05 | Pass | 规范 URL 无会话或个人标识参数，79 个 canonical 与正式地址一致 | 保持稳定路径 |
| ADS-CRAWL-06 | Pass | DNS 可解析、TLS 请求成功、本次全部页面正常响应 | 该 Pass 仅覆盖本次，不表示长期 uptime 已测 |
| ADS-CRAWL-07 | Pass | sitemap 索引和三个分表可访问，内容有稳定内部链接 | 允许新页正常等待抓取 |
| ADS-PROG-01 | Unknown | 无账号点击历史或流量日志，本次只进行了常规内容审计 | 避免自点、刷量；有异常时审查日志 |
| ADS-PROG-02 | Pass | 内容和模板无要求点击广告、奖励广告点击或吸引广告点击的箭头文案 | 商业上线后继续遵守 |
| ADS-PROG-03 | N/A | 当前仓库无手动广告单元或广告标签，尚处申请准备阶段 | 出现广告后确认可区分及标签准确 |
| ADS-PROG-04 | Unknown | 用户声明来源为 Google/Bing SEO 和社媒；没有 Analytics/日志证据 | 核对异常来源、机器人、奖励或交换流量 |
| ADS-PROG-05 | Pass | loader 为用户提供的官方标准代码，没有改写、代理或刷量包装 | 保留标准加载方式 |
| ADS-PROG-06 | Unknown | 无邮箱/私信/软件广告代码；代码中已排除 7 个信息页、404 和嵌入页，后台配置与实际投放未见 | 申请通过后复核实际自动广告页面和格式 |
| ADS-PROG-07 | N/A | 普通公开网站，无 App WebView 变现实现 | App 化时另行检查 |
| ADS-PUB-01 | Pass | 本次全部内容和工具围绕合法树脂、家具、地坪规划，无非法活动入口 | 新内容维持合法用途 |
| ADS-PUB-02 | Unknown | 没有观察到复制文章、假品牌背书或冒牌商品；未进行全网逐句版权比对和资产授权取证 | 确认自有资产授权，引用材料保留出处 |
| ADS-PUB-03 | Pass | 页面主题及已检查正文无仇恨、威胁、自残、恐怖主义或暴力煽动内容；无 UGC | 新内容继续审查 |
| ADS-PUB-04 | Pass | 页面无动物虐待或濒危动物商品内容 | 维持当前范围 |
| ADS-PUB-05 | Pass | 无假 Google 身份；已删除无法核实的团队/实地验证声明，说明工具目的、默认假设及实际公式 | 后续介绍和背书须有真实依据 |
| ADS-PUB-06 | Pass | 工具不索取密码/金融信息，无发财承诺或虚假服务漏斗 | 新表单避免误导和不必要信息收集 |
| ADS-PUB-07 | Pass | 功能为体积、换算和预算，不提供造假、作弊、破解或跟踪工具 | 保持规划用途 |
| ADS-PUB-08 | Pass | 无色情交易、婚介或家庭内容中的成人性主题 | 维持当前范围 |
| ADS-PUB-09 | Pass | 域名、site origin、canonical、pub ID 与 ads.txt 一致，未自定义额外广告请求数据 | 后台继续使用同一账号/域名 |
| ADS-PUB-10 | N/A | 当前没有已定义广告单元的覆盖/退出布局可审计，自动广告实际投放尚未验证 | 启用后检查计算器按钮、导航和遮挡 |
| ADS-PUB-11 | Pass | 弱指南补足；信息页/404/嵌入页代码中无广告 loader；当前无定义的手动广告单元 | 本项为申请前内容及模板检查，实际投放后复核 |
| ADS-PUB-12 | N/A | 无定义的背景、离屏或注意力不在屏幕上的广告放置实现 | 出现实际广告后再检查 |
| ADS-PUB-13 | Pass | 无选举、医疗或气候虚假论断主题；树脂内容提醒核对厂家规格 | 新科学类说明保留可靠依据 |
| ADS-PUB-14 | N/A | 无政治、社会议题或公共事件的合成/操纵媒体内容 | 此类媒体加入时重新审查 |
| ADS-PUB-15 | Pass | 内容面向 DIY/采购，无未成年人剥削材料、上传或评论入口 | 不增加相关违规内容 |
| ADS-PUB-16 | N/A | 无灾难、战争等敏感事件报道或利用危机的变现场景 | 若扩展新闻场景重新检查 |
| ADS-REST-01 | Pass | 页面无性内容、性产品、成人娱乐或相关补充剂 | 维持当前内容范围 |
| ADS-REST-02 | Pass | 页面无血腥、暴力描绘、恶心图片或显著粗俗语言 | 新图片和文章继续检查 |
| ADS-REST-03 | Pass | 无爆炸物、枪支或其他武器教程与销售；树脂计算不涉及武器制造 | 不扩展至受限用途 |
| ADS-REST-04 | Pass | 无烟草、娱乐性毒品、用具或生产使用教程 | 维持当前内容范围 |
| ADS-REST-05 | Pass | bar-top 页面是家具涂层估算，不售酒或鼓励不负责任饮酒 | 保持家具施工语境 |
| ADS-REST-06 | Pass | resin-dice 页面是树脂模具用量，不是赌博或付费机会游戏 | 保持制作规划语境 |
| ADS-REST-07 | Pass | 无药品销售、网上药房、补充剂或被下架应用 | 维持当前内容范围 |
| ADS-REST-08 | N/A | 无视频广告播放器、自动播放视频广告或已定义的遮挡广告单元 | 实际开启广告后复测 |
| ADS-PRIV-01 | Pass | 已补充跨站访问历史广告依据、Cookie/标识符、供应商链接与个性化退出说明 | 服务或广告供应商改变时同步更新 |
| ADS-PRIV-02 | Pass | 页面说明 Google/第三方可使用 Cookie、localStorage、设备和 IP 信息 | 补充实际参与的供应商及完整披露 |
| ADS-PRIV-03 | Pass | 本地计算函数无数据外传调用，未将邮件/姓名等 PII 写入广告参数 | 新表单或统计接入时重新检查 |
| ADS-PRIV-04 | Unknown | 旧自建同意逻辑已移除，撤回入口已接官方 API；Google CMP 是否发布及真实请求未核实 | 在后台发布认证消息，测试接受/拒绝/撤回 |
| ADS-PRIV-05 | N/A | 无 GPS、Wi-Fi/基站精确定位或浏览器定位权限调用 | 引入定位前增加相应同意和披露 |
| ADS-PRIV-06 | N/A | 非儿童定向站，主题为成人 DIY 与采购，无儿童用户建模 | 若改变受众则核对儿童定向设置 |
| ADS-PRIV-07 | Pass | 自有脚本没有操作或代理 Google 域 Cookie，也不再读取/写入原自建同意键 | 保持无自定义 Google Cookie 干预 |
| ADS-PRIV-08 | Pass | 无敏感信息受众列表、再营销参数或相关 data layer；工具输入用于本地计算 | 不将敏感行为接入个性化广告 |
| ADS-PRIV-09 | N/A | 无住房交易、招聘或信贷定向广告/受众设置；地坪预算工具不构成这类投放 | 若加入相关营销再检查 |
| ADS-PRIV-10 | Unknown | 访问历史披露及 Ads Settings/行业退出链接已补齐；实际 CMP 控制、个性化投放配置未核实 | 核实 Google 消息及适用地区的真实控制 |

## 送审顺序

1. 网站端必需披露、内容补强、方法说明与页面排除已完成；检查正式站已部署本次版本。
2. 在现有账号的“隐私权和消息 → 欧洲法规”选择 epoxyplanner.com，填写 `https://epoxyplanner.com/privacy/`，配置并发布 Google 消息，保留拒绝/管理入口及本站所需语言。消息通过现有 AdSense tag 部署，不需另一套 CMP 脚本。参见 [创建欧洲法规消息](https://support.google.com/adsense/answer/10960768?hl=en-GB)。
3. 发布后用新浏览器会话访问 [Google 消息测试地址](https://epoxyplanner.com/?fc=alwaysshow&fctype=gdpr)，检查接受、拒绝、保存及 footer Privacy choices 撤回；核对真实广告/存储行为。测试参数不能代替后台发布，也不要点击测试中的广告。撤回 API 依据 [Google Funding Choices API](https://developers.google.com/funding-choices/fc-api-docs)。
4. 复测手机与桌面导航、计算器输入及实际消息布局，确认现有账号和所有权验证状态。本次浏览器接口超时，因此这些不是已完成的检查。
5. 在现有 AdSense 账号中为 epoxyplanner.com 申请审核；网站显示 Ready 后再启用并复核实际广告布局。所有权验证成功不等于网站审核通过，见 [AdSense 网站管理](https://support.google.com/adsense/answer/12131223?hl=en)。

## 官方依据

- [页面准备要求](https://support.google.com/adsense/answer/7299563?hl=en)、[申请资格](https://support.google.com/adsense/answer/9724?hl=en)、[网站所有权](https://support.google.com/adsense/answer/91205?hl=en)。
- [AdSense Program policies](https://support.google.com/adsense/answer/48182?hl=en)、[Google Publisher Policies](https://support.google.com/adsense/answer/10502938?hl=en)、[Google Publisher Restrictions](https://support.google.com/adsense/answer/10437795?hl=en)。
- [隐私必需内容](https://support.google.com/adsense/answer/1348695?hl=en)、[EU user consent policy](https://www.google.com/about/company/user-consent-policy/)、[认证 CMP 要求](https://support.google.com/adsense/answer/13554116?hl=en)。
- [爬虫问题排查](https://support.google.com/adsense/answer/2381908?hl=en)、[支持语言](https://support.google.com/adsense/answer/9727?hl=en)、[网站管理](https://support.google.com/adsense/answer/12131223?hl=en)。

## 完整性检查

清单 A–I 共 73 个不同要求 ID；J 节输出示例重复展示了两个 ID，不是额外要求。本报告完整表格包含 73 个不同 ID，每项恰好一个状态，无遗漏、无重复。修复后脚本校验结果：Pass 46 项、Fail 0 项、Unknown 15 项、N/A 12 项；缺失 ID：无。Fail 为 0 只表示已识别的网站端缺口完成处理，不表示 Unknown 已通过或 Google 将批准申请。
