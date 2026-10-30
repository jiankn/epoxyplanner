# EpoxyPlanner：AdSense 拒审后的全面审计与改造方案

> 本文保留为整改前的审计基线。后续工作区改造与验证结果见[整改实施记录](C:/antigravity/epoxyplanner/docs/adsense-remediation-implementation-2026-10-30.md)，不能把本文的旧页面状态当作改造后的结果。

审计日期：2026-10-30，Asia/Shanghai。目标：[epoxyplanner.com](https://epoxyplanner.com/)。代码基线：`a6f8c7c` 加当前工作区；本次在临时副本构建，没有覆盖工作区已有修改。交付范围：审计、证据、页面处理建议和实施验收标准。

**结论：Not ready。当前版本不建议直接再次申请。**

用户截图确认站点因“低价值内容”需要整改。重新检查发现，站点具有真实计算功能，访问、静态 HTML、canonical、站点地图和验证文件基本正常；主要整改方向是让每个公开页面兑现具体用途，减少同义入口和换标题的通用表单，并补足可核验的内容与维护记录。

这不是 Google 提供的逐页拒审归因。截图没有指出具体 URL，下面的根因排序是结合网站实际行为作出的审计判断；修复后也不能保证 Google 批准。Google 当前的[内容与用户体验说明](https://support.google.com/adsense/answer/10015918?hl=en)明确关注独特价值、相似页面的扩充或整合，以及页面是否提供承诺的信息和服务。

## 1. 本次检查了什么

| 检查面 | 本次结果与边界 |
| --- | --- |
| 正式页面 | 全量检查 79 页：51 个计算器、20 篇指南、首页及 7 个信息页 |
| 语言 | 英语 57 页，德语 4 页，法语 4 页，巴西葡语 6 页，西语 4 页，意语 4 页 |
| 在线 GET | 79 个正式页面均为 200；另检查 12 个辅助路径，包括资源、地图、真实 404 和嵌入页 |
| 抓取及跳转 | HTTP、www、尾斜杠和一个旧地址抽查均为单次正确 301；两个模拟 Google 广告爬虫 UA 均取得 200 |
| 生成 HTML | 检查全部正式页的 H1、canonical、title/description、JSON-LD、内部内容链接、片段锚点及 hreflang 返回关系 |
| 构建 | 用当前源码的临时副本运行项目原生构建，成功生成 79 个正式页面；原工作区构建产物未被重写 |
| 浏览器 | 用 ego-browser 抽查 20 个不同页面；覆盖全部 15 类计算引擎的默认运行，以及单位切换、无效尺寸、分段输入、DIY 系统选择、分层、移动菜单、语言导航和隐私面板 |
| 算法 | 25 项基础公式、换算与空输入检查通过；额外边界检查复现负损耗率和小体积展示问题 |
| 现有测试 | `node --test tests/privacy-choices.test.mjs`：4 项通过；它们是模拟 API 测试，不能证明真实 CMP 已部署 |
| 历史搜索证据 | 使用仓库中 2026-10-06 保存的 GSC JSON；有效数据截至 2026-10-04，没有刷新 API |
| 未取得 | AdSense 账号设置、当前 GSC、真实 Google 爬虫访问日志、欧洲地区同意请求、长期可用性、邮箱收件测试及完整内容授权档案 |

静态检查未发现重复 title/description、损坏的站内内容路径或片段、无效 JSON-LD、canonical 地址冲突、hreflang 缺失目标或返回链问题。没有发现恶意下载、强制外跳、登录墙或禁止类内容。上述结论限于本次代码与请求样本；模拟 UA 成功不能代替真实 Google IP/WAF 验证。抓取相关依据见 Google 的[广告爬虫排障文档](https://support.google.com/adsense/answer/2381908?hl=en)。

站点地图包含 **74 个 URL**，其余 5 页为当前主动 noindex 的 About、Contact、Privacy、Terms 和 FAQ，这个数量差异本身不是错误。`ads.txt` 为 200、纯文本，seller 行与页面 loader 一致：

```text
google.com, pub-3562784107542460, DIRECT, f08c47fec0942fa0
```

72 页加载标准 AdSense loader；另外 7 个信息页、404 和自有嵌入页不加载。代码中没有手动广告单元。**loader 存在不等于实际已经展示广告**；自动广告格式和排除设置仍属于后台待核实事项。Google 的[站点管理说明](https://support.google.com/adsense/answer/12131223?hl=en)区分所有权验证与审核通过，只有站点达到 Ready 才能正式投放。

## 2. 最需要改的六类问题

### High：部分页面只有场景名不同，工具并没有完成该场景

这比继续增加通用文字更值得优先处理。51 个计算器由 15 类引擎生成，共享引擎是正常工程做法；风险来自页面声称有专用能力，实际仍使用相同默认值、输入与输出。

| 页面 | 本次实测或源码证据 | 应如何改 |
| --- | --- | --- |
| [Metric Epoxy Calculator](https://epoxyplanner.com/epoxy-calculator-metric/) | 初始 unit 是 imperial，48 × 18 × 1.25 in，主结果 5.05 gal；FAQ 却说本页从厘米和升开始 | 立即修正公制初始状态；若没有独立用途，后续将其整合为主工具的公制预设 |
| [Resin Coaster Calculator](https://epoxyplanner.com/resin-coaster-calculator/) | 默认直径 28 in、厚度 0.75 in，主结果 2.16 gal；没有套数输入 | 使用符合杯垫任务的示例尺寸，提供数量、单件/整批 ml、损耗和模具实际容量入口；默认值须明确是示例 |
| [Resin Dice Calculator](https://epoxyplanner.com/resin-dice-calculator/) | 与 cube 页共用单一立方体边长表单，默认 1.5 in；没有多面骰类型和套数 | 改成明确的立方体骰坯工具，或实现对应骰型/实测模具容量及整套数量；不得把立方体体积当作所有骰型的精确体积 |
| [Resin Art Pricing](https://epoxyplanner.com/resin-art-pricing-calculator/) | title 含 Margin；首页称可把材料、时间和管理成本转成最低售价。表单只有树脂数量、损耗和单价，主结果仍是 3.24 gal | 实现人工、辅料、包装、渠道费、失败率、利润口径及售价输出；或准确改名为树脂材料预算并统一首页承诺 |
| [Coverage Calculator](https://epoxyplanner.com/epoxy-coverage-calculator/) | 文案让用户输入 sq ft/m²，实际只有英寸/厘米的长、宽和厚度，没有直接面积输入 | 增加直接面积模式，面积与厚度分别选择单位；说明主材、边缘及损耗的计算过程 |
| [Seal Coat Calculator](https://epoxyplanner.com/epoxy-seal-coat-calculator/) | 和 tabletop/flood-coat 等共用 surface 表单，默认厚度同为 0.125 in | 改为基于所选产品覆盖率的封闭层估算，和主浇注分开；不要把通用洪流涂层默认值包装成封闭层建议 |
| [巴西葡语地坪㎡价格页](https://epoxyplanner.com/pt-br/preco-piso-epoxi-m2/) | 底层仍是 coverage；默认长宽为 72 × 30 cm，主结果 0.31 L，没有每 m² 价格与施工分项 | 明确材料预算或完整施工报价的范围；提供 m² 面积、实际产品覆盖率或合适的用量模型、R$/m² 与总价 |

定位文件：[表单模板](C:/antigravity/epoxyplanner/src/templates/render.mjs:1)、[Metric 页数据](C:/antigravity/epoxyplanner/src/data/seo-batch-2026-05.mjs:60)、[杯垫页数据](C:/antigravity/epoxyplanner/src/data/seo-batch-2026-05.mjs:522)、[定价页数据](C:/antigravity/epoxyplanner/src/data/seo-batch-2026-05.mjs:907)、[首页承诺](C:/antigravity/epoxyplanner/src/data/site.mjs:504)。

这些发现说明网站的部分“专用工具”还停留在入口与文案层。Google 的[页面准备要求](https://support.google.com/adsense/answer/7299563?hl=en)强调访客相关的独特内容和实际可用的体验；本项是据此作出的整改判断，不是认定共用代码本身违规。

### High：同语种近似页面，尤其葡语分支，尚未完成整合

对页面 intro、answer、专属说明列表和 sections 做四词连续片段集合比较，不包含导航卡片、站外来源链接名、输入输出和共享 FAQ：

| 页面组合 | 四词片段 Jaccard 相似度 | 判断 |
| --- | ---: | --- |
| `/pt-br/calculadora-volume-resina-epoxi/` 与 `/pt-br/quanta-resina-epoxi-preciso/` | 0.910 | 文案高度接近，分别使用 volume/general 通用表单；优先审查是否整合到葡语主工具 |
| `/pt-br/quanta-resina-epoxi-preciso/` 与 `/pt-br/preco-piso-epoxi-m2/` | 0.765 | “需要多少树脂”和“地坪㎡价格”本应解决不同任务，当前大量说明却相同 |
| 德语用量页与㎡费用页 | 0.505 | 应靠不同输入、明确输出和独立算例区分，而非继续替换标题词 |
| 西语用量页与㎡价格页 | 0.524 | ㎡价格页的成本任务需要真正实现 |
| 意语用量页与㎡价格页 | 0.514 | 同上 |

这是本次审计的文本诊断指标，**不是 Google 的评分、查重阈值或拒审阈值**。跨语言翻译没有纳入这些同语种比较；多语言本身不是问题，当前六种语言也都在 Google 的[支持语言列表](https://support.google.com/adsense/answer/9727?hl=en)内。

另外，`epoxy-pour` 与 `deep-pour`、主工具与 `metric/rectangle/circle` 等同义或几何入口，需要逐一判断是否值得独立存在。英文页面未出现上述高文本相似度，不能因此把所有英文页都称作文字重复；其主要问题是功能与默认表单的重复。

整合顺序应是：先让保留页覆盖原用户任务，再迁移有用内容、更新内链和 hreflang，最后做一跳 301。暂时保留的弱页可以改善内容并排除广告；`noindex` 和移出 sitemap 只是搜索收录管理，不能用来掩盖低质量页面或保证 AdSense 通过。不要用 robots.txt 阻断审核爬虫，Google 对 [robots.txt 的说明](https://developers.google.com/search/docs/crawling-indexing/robots/intro)也明确区分抓取控制与索引控制。

### High：计算结果需要更可靠的输入约束与产品边界

核心几何并非全部有问题：48 × 18 × 1.25 in 为 4.68 gal，8% 损耗后 5.05 gal；换为 121.92 × 45.72 × 3.175 cm 后为 19.11 L，结果一致。河流桌分段输入、地坪 DIY 切换、用户指定最大层厚后计算层数，也均能运行。

但还有以下明确缺口：

- 主工具输入损耗率 `-110`，正常输出 **-0.47 gal、-$40**，没有错误提示。应明确校验尺寸、百分比、单价、次数、覆盖率和有限数值；不能仅依赖浏览器 `type=number`。
- 4 in 直径、0.25 in 厚、8% 损耗的单个圆杯垫约需 55.6 ml，主结果却显示 **0.01 gal**。公式没有因此变错，但低精度加仑主结果不适合小工艺品采购；小体积应优先 ml/fl oz，并显示足够精度。
- A/B 输出是由树脂类别自动选择的 1:1 或 2:1“示例”，没有真实产品配比输入。当前已标示 example，不能说在冒充产品参数；仍应让用户输入厂家给出的比例与体积/重量依据，或把混合拆分保持为待确认状态。
- general/volume 的部分层数提示按内置 2 in 分界估算，deep-pour 的最大层厚也默认 2 in。文案虽提示核对产品，但这种默认值不应被当作产品安全上限。增加“已确认厂家上限”状态，未知时只给总量，不输出可执行的通用浇注许可。
- 固定的边缘、渗漏、封闭层及保守系数需要清楚展示是否可改；Authors 中“全部可见并可调”的说法应与实际能力一致。

定位文件：[主计算](C:/antigravity/epoxyplanner/src/assets/calculator.js:1263)、[覆盖率模型](C:/antigravity/epoxyplanner/src/assets/calculator.js:1318)、[表面涂层模型](C:/antigravity/epoxyplanner/src/assets/calculator.js:1510)、[产品类别推断](C:/antigravity/epoxyplanner/src/assets/calculator.js:1112)。

产品配比与浇注限制必须来自具体材料。例如 [MAS Deep Pour 的官方资料](https://masepoxies.com/products/deep-pour-epoxy-resin)列出该产品的 3:1 体积比及与浇注量、温度有关的限制；不能从“deep pour”类别推导出统一 2:1。[Crosslink 的厂家说明](https://crosslinktech.com/support/trouble-shooting-guide/mix-ratio-related-problems.html)也解释了重量比与体积比依赖材料性质。这些是参数来源要求，不要求本站伪装成专业施工机构。

### High：内容已有改善，但独立证据主要集中在少数页面

10 月 3 日的指南增补确实增加了可手算的例子、预算表和使用边界，本次不建议把已经改善的 20 篇指南一概推倒重写。问题更多集中在计算器：

- 51 个计算器中，38 个没有额外的 sections，32 个没有数据表。没有表格或长文不是自动不合格，但多个相似入口都只剩通用表单和通用说明时，独立价值不足。
- 统计 intro、answer、表格、专属说明及未跨页重复的 FAQ，排除共享检查单、导航、结果 UI 和相关推荐后，17 个计算器的说明少于约 200 个词。这个数字只用于定位复查，不作为合格线；也没有把正文较短但好用的工具直接判为无价值。
- 48 个计算器、15 篇指南没有页面级业务来源链接。纯几何公式不必每页引用；涉及材料配比、层厚、覆盖率和市场价格的关键参数则应有明确出处、适用条件和核对日期。
- 正式 HTML 没有正文 `<img>` 图片，品牌标识采用 SVG；没有看到测量示意图或可核验的现场过程资料。工具站并非必须有照片，但河流桌测宽、杯垫模具容量、台面边缘等任务很适合用自己绘制的尺寸图解释。不要为了“经验”而伪造施工照片、项目经历或测试结果。

建议把“原创价值”落到用户能利用的东西上：可复算的完整案例、参数来源表、尺寸图、单件/整批采购表、产品限制清单和公开纠错记录。情景算例须标明理论演算；只有有真实记录时才称为实测。Google 的[以用户为中心的内容自检](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)可作为编辑质量参考，但 Search 排名与 AdSense 审核是不同系统。

### Medium：真正的工具位于长答案和表格之后

在 1440 × 1000 桌面视口，主工具 form 顶部约在页面 y=1167；390 × 844 手机视口约 y=1573。工具输入前已经有标题、说明、长答案和六行表格。用户从“calculator”任务进入，需要先滚过这些内容。

建议按“标题与一句说明 → 计算器和结果 → 算例/参考表 → 方法/来源 → 相关下一步”组织。可以保留首屏短答案，但把完整表格移到工具下方。首页保留最主要的任务入口，并增加一个直接可用的快速估算区，减少大段卡片列表。

移动菜单开关、语言导航、隐私面板和 Escape 关闭已在浏览器实测；抽查页面没有整页横向溢出，表格在自己的容器内横向滚动。菜单按钮约 36 × 36 px，可在后续提升触控尺寸。本项属于 UX 改善，不是官方规定的首屏像素门槛，也没有据此推断 Core Web Vitals 不合格。

参见证据：[桌面主工具首屏](C:/antigravity/epoxyplanner/docs/audits/2026-10-30/desktop-calculator.png)、[手机主工具首屏](C:/antigravity/epoxyplanner/docs/audits/2026-10-30/mobile-calculator.png)。

### Medium / Unknown：信任信息和广告后台仍有待完成的环节

About、Authors、Methodology、Contact、Privacy、Terms 均已存在，不应再把“补几个法律页面”作为主要解决方案。

- Authors 只写“site operator”，仍没有清楚介绍维护者或稳定的运营主体。可以用真实个人或品牌主体说明职责、计算复核方法、资料来源与纠错方式；不需要虚构姓名、团队、资历或营业地址。
- 20 篇指南的 Article JSON-LD 没有 datePublished/dateModified，页面也没有统一的修订记录。增加真实的复核日期和重要修改记录，不要每次构建自动刷新内容日期。
- 首页有 `SearchAction` 指向 `/?q=...`，实际没有站内搜索功能，建议删除该声明。结构化数据应反映实际功能，见 Google 的[结构化数据通用规范](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)。这是 P2 清理项，不应被包装为本次拒审主因。
- PT/ES/IT 的部分“地坪㎡价格”页与英文“台面树脂材料成本/sq ft”页放在同一 alternate 组，字面任务范围不同。hreflang 技术链路通过，不等于内容互为等价版本；需要按实际任务重组。参考 Google 的[本地化版本说明](https://developers.google.com/search/docs/specialty/international/localized-versions)。
- Privacy 已包含 Google/第三方广告 Cookie、跨站访问、退出链接及隐私选择说明，符合本次检查的[必需披露要点](https://support.google.com/adsense/answer/1348695?hl=en)。本地隐私面板能打开与关闭；本次浏览环境没有观察到 `__tcfapi`，Google 站点同意按钮未显示。这不足以断言后台没配置：地区、消息发布与账号状态都可能影响它。
- 面向 EEA、英国、瑞士投放个性化广告时，应核实 Google 认证且整合 TCF 的 CMP、发布的消息和真实拒绝/接受/撤回请求。[Google 的当前要求](https://support.google.com/adsense/answer/13554116?hl=en)针对相关地区的广告投放；不能把当前证据不足直接当成“低价值内容”的已知原因。

## 3. 用现有 GSC 决定保留什么

这部分只读取历史导出。2026-09-07 至 2026-10-04，站点级 Google Web Search 为 **53 次点击、7,689 次展示，CTR 0.69%**；前一个 28 天为 22 次点击。90 天站点级为 118 次点击。不是当前日流量、用户数、会话数或全站流量，也不能代表所有流量来源是否合规。

| 页面 | 历史 28 天点击 | 展示 | 改造取向 |
| --- | ---: | ---: | --- |
| `/pt-br/` | 8 | 1,355 | 保护 URL，优先完善实际工具与本地化 |
| `/epoxy-unit-converter/` | 6 | 284 | 保护，保留直接完成换算的价值 |
| `/fr/` | 6 | 326 | 保护，完善算例与当地单位表达 |
| `/pt-br/consumo-resina-epoxi-por-m2/` | 6 | 461 | 保护，强化面积/厚度输入与用量依据 |
| `/epoxy-cost-calculator/` | 2 | 98 | 保留并改成能接续数量结果的采购预算工具 |
| `/pt-br/calculadora-piso-epoxi/` | 2 | 628 | 保护，强化按产品覆盖率和涂层分别计算 |
| `/resin-dice-calculator/` | 2 | 25 | 样本很小，但有独立需求信号；先补真实骰子任务 |
| `/sphere-resin-calculator/` | 2 | 20 | 保留几何任务，改进小体积结果 |
| `/cylinder-resin-calculator/` | 1 | 21 | 同上 |

数据文件：[导出清单](C:/antigravity/epoxyplanner/.seo/runs/2026-10-06/api-manifest.json)、[28 天站点总计](C:/antigravity/epoxyplanner/.seo/runs/2026-10-06/source/recent28_totals.json)、[页面明细](C:/antigravity/epoxyplanner/.seo/runs/2026-10-06/source/recent28_page.json)。逐页表中的“0”只表示该历史窗口的导出记录，没有记录写“—”，不把两者当作当前零流量。

因此不建议为过审一刀切关闭多语言，也不建议把全站随意压到某个页面数量。先保护已产生需求的入口，对同义的 volume/amount/metric 等变体完成任务整合。真正实施 URL 迁移前，应补看最新 GSC 和现有链接，历史窗口不足以支持大批删除。

## 4. 目标产品与实施顺序

目标是让网站提供一套完整的树脂采购规划流程：测量 → 原始体积 → 明示损耗 → 实际产品配比/限制 → 分层或分批 → 包装采购 → 成本。技术框架可继续使用当前静态构建，不需要为审核换成 WordPress 或重建域名。

| 主要任务 | 应提供的独立能力 | 对应现有资产 |
| --- | --- | --- |
| 通用体积与形状 | 尺寸图、多单位、按大小切换 ml/L/gal、原始量与采购量；清楚处理插入物或空腔限制 | 主计算器及 mold/几何页面 |
| 河流桌 | 标注测宽位置、解释等长分段假设、渗漏/封闭层分项、完整采购算例；以后若支持非等长分段，应按各段长度计算 | river 工具及测量/预算指南 |
| 表面覆盖与封闭层 | 直接面积、厚度或厂家覆盖率、不同涂层、边缘和损耗分别计算 | coverage、tabletop、seal-coat |
| 深浇注 | 用户确认的产品层厚/批量上限、总量与单批量分开、明确未知条件 | deep-pour 及两个分工不同的深度指南 |
| 地坪数量与预算 | 按每层真实产品覆盖率计算；数量与施工价格分开，标明市场、来源和日期 | floor-coverage、garage-floor-cost |
| 配比、套装与成本 | 用户实际配比及依据、套装混合产量、向上取整采购、材料和完整售价不同口径 | mixing/kit 指南、cost、art-pricing |
| 小型工艺品 | 单件/整套数量、ml 主结果、实际模具容量或明确的理论几何近似 | coaster、dice、sphere、cylinder 等 |

不要求每个任务一定占一个 URL。保留页和合并目标必须先有对应功能，不能先 301 到一个无法完成原任务的页面。

### 第一轮：修正现有产品承诺

| 编号 | 优先级 | 改造事项 | 验收结果 |
| --- | --- | --- | --- |
| A01 | High | 为表单引入按页配置的默认单位、尺寸、显示单位与业务字段 | Metric 首次就是公制；杯垫/骰子等不再使用桌面尺寸；各页配置与说明一致 |
| A02 | High | 补百分比、价格、次数、覆盖率和非有限数值校验 | 负损耗被拒绝；不会产生负采购量；次数规则明确；错误时清除过期结果 |
| A03 | High | 补面积模式及每面积成本输出 | 10 m² × 1 mm 的原始体积为 10 L；损耗另列；㎡价格页输出真实对应的单价与总价 |
| A04 | High | 修正 art-pricing 的完整售价承诺 | 实现费用/利润模型并明确 markup 与 margin，或统一改成材料预算名称 |
| A05 | High | 将 A/B、层数和产品适配提示改为有条件的规划结果 | 未知产品比率或限制时不把示例当指令；实际比率由用户或可核对资料提供 |
| A06 | Medium | 把工具移动到短介绍之后 | 桌面和手机用户可迅速找到输入；表格与长解释位于工具下方 |

定位：[表单和结果模板](C:/antigravity/epoxyplanner/src/templates/render.mjs:542)、[计算逻辑](C:/antigravity/epoxyplanner/src/assets/calculator.js:1214)、[页面配置](C:/antigravity/epoxyplanner/src/data/seo-batch-2026-05.mjs:3)。可以逐步把纯计算与 DOM 交互拆开，便于复用和验证；不要为了架构整洁先做大规模重写。

### 第二轮：减少无独立任务的页面，补强保留页

1. 优先审查 `epoxy-pour`、`metric`、`rectangle`、`circle` 和葡语 volume/amount 分支；按附录逐页处理，不按统一字数或统一页数删减。
2. 为保留的主要页面补一套用户可以复算的尺寸图、完整算例、参数表及适用限制；已有合格算例继续利用。
3. 工艺品用单件与整套的采购量，台面用顶面与边缘，地坪用每层覆盖率，艺术品定价用完整成本结构。不要只给所有页追加相同 FAQ。
4. 成本、层厚、混合比例等资料记录具体来源与核对日期。纯数学算例标明假设；实际项目案例保留原始测量和过程证据。
5. 合并时搬迁有用内容、实现原任务、更新站内链接与 hreflang、生成一跳 301，并从 sitemap 去掉旧 URL。没有等价目标而确实废弃的页面应返回相应状态，不要一律跳首页。

Google 对[没有出版者内容或低价值内容页面](https://support.google.com/publisherpolicies/answer/11112688?hl=en)的规定涉及广告库存价值；不应靠导航卡片、相关推荐数量或单纯增长字数来冒充页面正文价值。

### 第三轮：完善维护、隐私和上线验收

1. About/Authors 写清实际运营主体与职责，增加可执行的纠错入口和真实修订记录。将“参数全部可调”等表述改到与工具相符。
2. 以任务为单位复核多语种页面，修正 PT/ES/IT 地坪价格与英文台面材料费用的 alternate 错配；当地预算缺资料时使用用户输入单价，避免制造无来源的当地市场均价。
3. 保留已完善的隐私披露；在后台确认 publisher ID、站点状态、欧洲法规消息以及自动广告排除。实际投放后重新检查广告遮挡与广告/正文比例，依据 [AdSense 计划政策](https://support.google.com/adsense/answer/48182?hl=en)。
4. 删去不存在的 SearchAction；给有实际日期的指南补页面日期与一致的 Article 元数据。补元数据只是如实表达，不是审核捷径。
5. 执行最终构建、计算示例、无效输入、全部重定向目标、内部链接、canonical、noindex/sitemap 一致性和桌面/手机任务路径检查；现有隐私模拟测试继续通过。

## 5. 何时值得重新送审

以下是本项目的内部验收条件，不是 Google 发布的固定门槛：

- 第一轮所有 High 问题已修正；标题、首页介绍、表单字段和结果能够一一对应。
- 同义入口已完成有依据的整合，或保留页已具备清楚的独立任务；合并目标具备实际能力。
- 优先工具有可复算案例、透明参数和相关资料来源，重要指南不再依赖共享 FAQ 撑内容。
- 主要流程在手机和桌面均可完成，输入异常不产生误导采购结果。
- 正式 HTML、链接、404、验证文件和抓取没有回归；隐私页与实际服务一致，相关广告配置得到核实。
- 运营者确认账号资格、无重复账号、publisher 对应关系及合法流量来源；网站内容实质完成后，在后台允许的时间重新申请。

本次读取的[资格要求](https://support.google.com/adsense/answer/9724?hl=en)与[拒审后处理说明](https://support.google.com/adsense/answer/12176698?hl=en)没有给出“30 篇文章、每篇 1,000 词、每天 100 IP”这样的统一数字。不要把这些经验传言当作必需条件；也不要用购买流量、批量填文章、伪造作者或只对审核爬虫改变页面来应对。

无需等待所有页面都被 Search 收录，也不能把提交 sitemap 当成内容审核已完成。广告审查与搜索收录结果应分别跟进。正式请求复核应放在部署后的用户可见验收完成之后。

## 6. 完整 AdSense 要求核对表

`Pass`＝在说明的证据范围内满足；`Fail`＝当前审核准备存在明确缺口或状态未完成，不等于账号被判违规；`Unknown`＝缺少账号、运行地区、日志或来源证明；`N/A`＝本网站当前功能或业务不适用，原因逐行写明。下表的条款索引来自审计技能完整清单，资格与所有权分别参照 [Google 资格要求](https://support.google.com/adsense/answer/9724?hl=en)和[所有权要求](https://support.google.com/adsense/answer/91205?hl=en)，政策范围参照 [Google 发布商政策](https://support.google.com/adsense/answer/10502938?hl=en)及[发布商限制](https://support.google.com/adsense/answer/10437795?hl=en)。

| ID | Status | 本站证据 | 下一步 |
| --- | --- | --- | --- |
| ADS-ELIG-01 | Unknown | 未取得当前申请主体年龄/资格信息 | 运营者确认合资格主体，不需要提供身份证件给本审计 |
| ADS-ELIG-02 | Unknown | 截图显示已有 AdSense 站点，重复账号情况未知 | 使用合适的既有账号并确认没有重复账号 |
| ADS-ELIG-03 | Fail | 截图明确拒审；当前仍有未兑现功能与近似页面问题 | 完成核心整改后复核 |
| ADS-ELIG-04 | N/A | 独立域名静态网站，不是 YouTube/Blogger 托管流程 | 走普通网站审核 |
| ADS-OWN-01 | Pass | 源码可访问；head 中存在标准 loader 注入路径 | 保持正确内容页验证路径 |
| ADS-OWN-02 | Pass | 本地站点与线上域名对应；历史 GSC 记录为 siteOwner | 后台核对申请主体与域名对应关系 |
| ADS-OWN-03 | Pass | 浏览器覆盖全部 15 类计算引擎，JS 运行及页面结构正常 | 改造后回归 |
| ADS-SITE-01 | Fail | 用户截图状态为需要注意，尚未 Ready | 实质整改完成后请求重新审核 |
| ADS-SITE-02 | Pass | 72 页有标准 loader；ads.txt 正常 | 维持可部署的验证方式 |
| ADS-TXT-01 | Pass | seller 行格式正确，pub ID 与 loader 一致 | 账号归属在后台另核对 |
| ADS-TXT-02 | Pass | 根目录 ads.txt 200、text/plain，由构建生成 | 保留构建规则 |
| ADS-CONTENT-01 | Fail | 核心工具有用途，但部分专用入口未实现所承诺任务，当前质量准备不足 | 实现独立能力并减少无价值入口 |
| ADS-CONTENT-02 | Pass | 本地有自有算法与页面内容，未发现抓取文章/联盟 feed 充当正文 | 保留引用出处；版权完整溯源另见对应项 |
| ADS-CONTENT-03 | Fail | 多个场景页仅复用通用表单；葡语两页说明相似度 0.91 | 按任务补足或整合 |
| ADS-CONTENT-04 | Pass | 正式页在线，未见 lorem/coming soon；真实工具存在 | 不把未完成特性包装为已完成 |
| ADS-CONTENT-05 | Pass | 当前源码无手动广告、联盟 feed 或付费推广块；页面以自有内容为主 | 开广告后复查实际占比 |
| ADS-CONTENT-06 | Pass | 六种主语言均在本次核对的官方支持列表中 | 继续逐页检查翻译与任务一致性 |
| ADS-CONTENT-07 | N/A | 无评论、论坛或公开 UGC/上传系统 | 若增加再建立审核机制 |
| ADS-CONTENT-08 | Fail | 有同语种近似说明与多个同义工具入口 | 用真实任务决定独立 URL |
| ADS-UX-01 | Pass | 桌面 More、语言导航和手机主菜单可操作，内容链接静态检查通过 | 改版后复测全部主要入口 |
| ADS-UX-02 | Fail | 艺术品售价、面积输入、Metric 默认等存在承诺与实际能力差异 | 对齐入口、字段和输出 |
| ADS-UX-03 | Pass | 未见假下载/播放或不存在的内容链接；上述功能不足单列处理 | 继续保证入口描述准确 |
| ADS-UX-04 | Pass | 抽查及源码未见强制下载、异常外跳、恶意弹窗或修改浏览器设置行为 | 第三方代码变化时复查 |
| ADS-UX-05 | Pass | 基本信任和政策页已存在且可访问，Methodology 有公式 | 补真实运营介绍和维护记录，邮箱收件另核实 |
| ADS-UX-06 | Pass | 当前抽查无广告式遮挡；移动页未整页横向溢出 | 改善工具位置；广告开启后复查 |
| ADS-CRAWL-01 | Pass | 79 正式页均 200，测试不存在地址真实 404 | 发布后重跑 |
| ADS-CRAWL-02 | Unknown | robots 允许，两个模拟 Google UA 200；真实 IP、地区与 WAF 未核实 | 查看真实抓取日志和 WAF 规则 |
| ADS-CRAWL-03 | Pass | 正文可通过 GET 获得，不依赖 POST 才能阅读 | 保持静态可抓取正文 |
| ADS-CRAWL-04 | Pass | 抽查主机、协议、尾斜杠与旧 URL 都是一跳正确 301 | 新整合避免链式跳转 |
| ADS-CRAWL-05 | Pass | 规范 URL 无会话 ID，canonical 稳定 | 预设参数保留统一规范地址 |
| ADS-CRAWL-06 | Pass | 本次线上 DNS/TLS/HTTP 请求成功，无请求异常 | 本次观测不能代替长期监测 |
| ADS-CRAWL-07 | Pass | sitemap 74 个规范可索引 URL，正式页面均有站内链接 | 合并后同步更新地图和内链 |
| ADS-PROG-01 | Unknown | 未取得点击、展示或完整流量日志；GSC 只覆盖部分自然搜索 | 运营者确认没有人工/自动虚增 |
| ADS-PROG-02 | Pass | 本地模板与文案未见点击广告换支持或奖励文案 | 保持中性广告表达 |
| ADS-PROG-03 | N/A | 当前没有手动广告单元，抽查未展示可评估的实际广告标签 | 启用广告时单独验收标识和布局 |
| ADS-PROG-04 | Unknown | 有历史真实 Google 搜索证据，但其他流量及推广方式未知 | 核实来源，避免无效与激励流量 |
| ADS-PROG-05 | Pass | 使用标准异步 AdSense loader，未见修改广告性能的包装逻辑 | 保留标准接入 |
| ADS-PROG-06 | Pass | 7 个信息页、404、embed 不加载广告脚本；没有邮件/软件广告位 | 保留排除并审核未来落地广告位置 |
| ADS-PROG-07 | N/A | 正常网站，没有应用 WebView 变现实现 | 若开发应用再核实 |
| ADS-PUB-01 | Pass | 检查内容为合法树脂规划工具与指南，无违法活动推广 | 新内容继续检查 |
| ADS-PUB-02 | Unknown | 未见明显仿冒或外部媒体复制，但没有完整原创/授权溯源档案 | 保留代码、素材和引用的来源证明 |
| ADS-PUB-03 | Pass | 本次内容源未见仇恨、骚扰、暴力或自伤宣传 | 持续编辑复核 |
| ADS-PUB-04 | Pass | 无动物虐待或濒危物种商品内容 | 持续编辑复核 |
| ADS-PUB-05 | Unknown | 无官方认证冒充；仅有笼统运营者介绍，真实身份及资历未独立核实 | 用真实主体补充说明，纠正功能承诺 |
| ADS-PUB-06 | Pass | 没有钓鱼、私人资料盗取表单或快速致富承诺 | 定价页保持正常成本模型 |
| ADS-PUB-07 | Pass | 没有作弊、伪造证件、破解或未授权追踪工具 | 保持主题边界 |
| ADS-PUB-08 | Pass | 无付费性行为、色情婚介或家庭内容中的成人主题 | 新内容继续检查 |
| ADS-PUB-09 | Unknown | 网站域名与代码一致，seller 与 loader 一致；账号侧身份和 pub 归属未核实 | 后台核对完整发布者资料 |
| ADS-PUB-10 | N/A | 抽查时没有实际广告可评估覆盖/强制点击行为 | 开广告后检查手机与桌面布局 |
| ADS-PUB-11 | Fail | 当前仍有未完成任务与薄弱近似页；属于送审和未来广告库存的准备缺口 | 完善、整合或排除相应弱库存 |
| ADS-PUB-12 | N/A | 当前没有自建后台/离屏广告位，无实际广告运行样本 | 启用广告时复核可见性 |
| ADS-PUB-13 | Pass | 无选举、反科学健康或气候虚假宣传；产品边界另行整改 | 关键材料建议继续依据厂家资料 |
| ADS-PUB-14 | N/A | 没有政治/社会议题的被操纵影音内容 | 将来有此类内容再审 |
| ADS-PUB-15 | Pass | 内容与功能不涉及未成年人性剥削，无上传/评论系统 | 继续保持内容审核 |
| ADS-PUB-16 | N/A | 不发布危机、灾难或敏感事件资讯 | 若未来涉及时再审 |
| ADS-REST-01 | Pass | 无性内容、性用品或性建议 | 保持主题边界 |
| ADS-REST-02 | Pass | 未见血腥、惊悚或突出粗俗内容 | 新素材继续检查 |
| ADS-REST-03 | Pass | 工具及指南不涉及武器、爆炸物或其制造 | 保持主题边界 |
| ADS-REST-04 | Pass | 不涉及烟草、娱乐性毒品或器具 | 保持主题边界 |
| ADS-REST-05 | Pass | 无酒精销售或不负责任饮酒宣传 | 保持主题边界 |
| ADS-REST-06 | Pass | 骰子页是树脂模具用量工具，不提供赌博、下注或付费博彩 | 不混入博彩业务 |
| ADS-REST-07 | Pass | 无处方药、网药房、未批准药物或下架应用推广 | 保持主题边界 |
| ADS-REST-08 | N/A | 没有视频播放器或视频广告，当前无广告遮挡样本 | 若增加视频广告再审 |
| ADS-PRIV-01 | Pass | Privacy 正文披露 Google/第三方、Cookie、IP/标识及使用目的，页脚可访问 | 实际接入变化时同步更新 |
| ADS-PRIV-02 | Pass | 正文明确第三方可读写 Cookie，使用信标、IP 等 | 参与供应商变化时更新 |
| ADS-PRIV-03 | Pass | 表单仅本地数值计算，无向 Google 传姓名/邮箱的自定义请求或 dataLayer | 新增表单/埋点时再次检查 |
| ADS-PRIV-04 | Unknown | 存在 Google 撤回 API 接口；本次环境无 TCF，未验证适用地区的真实请求 | 核实认证 CMP 和发布消息，再测接受/拒绝/撤回 |
| ADS-PRIV-05 | N/A | 未使用精确定位权限或坐标收集 | 若新增再审 |
| ADS-PRIV-06 | N/A | 成人 DIY/施工规划定位，未见面向儿童的业务或儿童资料收集 | 若定位改变再核实对应设置 |
| ADS-PRIV-07 | Pass | 自有代码没有写入或代理修改 Google 域 Cookie 的逻辑 | 保留标准 Google 接入 |
| ADS-PRIV-08 | Unknown | 源码没有敏感兴趣分群埋点，但后台个性化/受众配置未知 | 后台核实没有敏感受众用途 |
| ADS-PRIV-09 | N/A | 不提供美国/加拿大住房、雇佣或信贷广告定向服务 | 若业务扩展再核实 |
| ADS-PRIV-10 | Unknown | 退出链接及披露已补；个性化广告启用、受众数据权利和地区控制仍未知 | 根据实际后台广告模式确认 |

完整性检查：技能参考清单 **73 项**；本报告核对表 **73 项**；缺失 0，重复 0。状态统计：Unknown 11、Fail 7、N/A 12、Pass 43。

## 7. 全部正式页面的处理建议

“整合候选”指先检查最新搜索与链接证据、让目标具备完整能力后再实施，不是本轮已经删除或重定向。下表覆盖本次全部 79 页；字数是专属说明诊断量（含正文表格与独立 FAQ），不含共享 UI/FAQ/检查单、导航卡片和来源链接名，不是通过门槛。历史点击仅对应 2026-09-07 至 2026-10-04 的原 URL。

### 7.1 首页与信息页（8 页）

| 页面 | 专属说明词数≈ | 历史点击 | 建议 | 需要完成的具体工作 |
| --- | ---: | ---: | --- | --- |
| [/](https://epoxyplanner.com/) | 279 | 3 | 保留并改首页 | 加入可直接使用的快速估算；主任务清晰排序，减少卡片目录占比。 |
| [/methodology/](https://epoxyplanner.com/methodology/) | 730 | 0 | 保留完善 | 逐项对应实际算法、固定与可调参数；说明示例比率和默认层厚的边界。 |
| [/about/](https://epoxyplanner.com/about/) | 221 | — | 保留完善 | 介绍真实运营主体、产品范围与维护方式；保持政策页可访问。 |
| [/authors/](https://epoxyplanner.com/authors/) | 359 | 0 | 保留完善 | 用真实维护与复核说明替代笼统保证；修正“全部参数可调”等承诺。 |
| [/contact/](https://epoxyplanner.com/contact/) | 168 | — | 保留 | 核实邮箱实际收件，提供纠错所需 URL/单位/输入信息，不发送测试邮件。 |
| [/privacy/](https://epoxyplanner.com/privacy/) | 550 | — | 保留 | 现有 Google 披露保留；跟随后台广告服务及消息配置同步更新。 |
| [/terms/](https://epoxyplanner.com/terms/) | 299 | — | 保留 | 保持真实规划边界及访问入口，继续不加载广告。 |
| [/faq/](https://epoxyplanner.com/faq/) | 122 | — | 保留为辅助页 | 当前 noindex 和无广告可保留；不要反复用同一组 FAQ 增厚每页。 |

### 7.2 英文计算器（29 页）

| 页面 | 专属说明词数≈ | 历史点击 | 建议 | 需要完成的具体工作 |
| --- | ---: | ---: | --- | --- |
| [/epoxy-calculator/](https://epoxyplanner.com/epoxy-calculator/) | 881 | 0 | 保留为核心工具 | 修输入校验、参数边界与首屏位置；用形状和单位预设接纳同义入口任务。 |
| [/epoxy-coverage-calculator/](https://epoxyplanner.com/epoxy-coverage-calculator/) | 457 | 0 | 保留并改工具 | 提供直接面积、独立厚度单位、可解释边缘和每面积成本。 |
| [/river-table-epoxy-calculator/](https://epoxyplanner.com/river-table-epoxy-calculator/) | 338 | 0 | 保留并强化 | 增加测宽图与完整算例；解释等长分段、渗漏和封闭层假设。 |
| [/deep-pour-epoxy-calculator/](https://epoxyplanner.com/deep-pour-epoxy-calculator/) | 324 | 0 | 保留并强化 | 确认真实产品层厚与批量限制；未知条件时不把默认值当许可。 |
| [/table-top-epoxy-calculator/](https://epoxyplanner.com/table-top-epoxy-calculator/) | 285 | 0 | 保留并强化 | 成为表面涂层任务入口，补面积、边缘、圆形与各层分项能力。 |
| [/bar-top-epoxy-calculator/](https://epoxyplanner.com/bar-top-epoxy-calculator/) | 308 | — | 整合候选 | 考虑进入 tabletop 的吧台预设；先补端头/边缘任务并核对最新查询。 |
| [/countertop-epoxy-calculator/](https://epoxyplanner.com/countertop-epoxy-calculator/) | 296 | 0 | 保留或实质区分 | 需要台面边缘、挡水边、封闭/面层和耗材分项；资源不足时再审整合。 |
| [/garage-floor-epoxy-calculator/](https://epoxyplanner.com/garage-floor-epoxy-calculator/) | 1074 | 0 | 保留为核心工具 | 保留美国安装成本口径与出处，清楚区分 DIY 材料和专业施工。 |
| [/void-fill-epoxy-calculator/](https://epoxyplanner.com/void-fill-epoxy-calculator/) | 169 | 0 | 保留并强化 | 小体积用 ml，说明不规则空腔近似和实测容量，补独立算例。 |
| [/round-epoxy-table-calculator/](https://epoxyplanner.com/round-epoxy-table-calculator/) | 142 | 0 | 整合候选 | 与 tabletop/通用圆形模式整合；目标先支持圆形面积、厚度和桌边。 |
| [/epoxy-cost-calculator/](https://epoxyplanner.com/epoxy-cost-calculator/) | 438 | 2 | 保留并强化 | 接续数量结果，提供套装产量、取整采购与材料成本；避免重复加损耗。 |
| [/epoxy-unit-converter/](https://epoxyplanner.com/epoxy-unit-converter/) | 407 | 6 | 保护并优化 | 已有历史点击；保留精确换算，改进小量精度与后续任务连接。 |
| [/epoxy-pour-calculator/](https://epoxyplanner.com/epoxy-pour-calculator/) | 277 | 0 | 整合候选 | 与 deep-pour 是同类任务；有用说明迁入后再一跳 301。 |
| [/epoxy-calculator-metric/](https://epoxyplanner.com/epoxy-calculator-metric/) | 237 | 0 | 先修默认，后审整合 | 立刻公制默认；如果仅单位差异，整合为主工具的公制预设。 |
| [/epoxy-circle-calculator/](https://epoxyplanner.com/epoxy-circle-calculator/) | 234 | 0 | 整合候选 | 由主工具圆形模式承接；保留圆形测量和换算说明。 |
| [/epoxy-rectangle-calculator/](https://epoxyplanner.com/epoxy-rectangle-calculator/) | 244 | 0 | 整合候选 | 由主工具矩形模式承接；独立纯公式入口价值不足。 |
| [/epoxy-floor-coverage-calculator/](https://epoxyplanner.com/epoxy-floor-coverage-calculator/) | 278 | 1 | 保护并强化 | 按每层实际覆盖率、涂层次数与套装产量算数量，成本链接到正确工具。 |
| [/two-car-garage-epoxy-calculator/](https://epoxyplanner.com/two-car-garage-epoxy-calculator/) | 433 | 0 | 整合候选 | 可作为 floor-coverage 的车库尺寸预设；先保留有用尺寸表和预算说明。 |
| [/epoxy-flood-coat-calculator/](https://epoxyplanner.com/epoxy-flood-coat-calculator/) | 401 | 0 | 整合候选 | 与 tabletop/coverage 共同处理，确保保留涂层厚度与流挂任务。 |
| [/epoxy-seal-coat-calculator/](https://epoxyplanner.com/epoxy-seal-coat-calculator/) | 248 | 0 | 重做专用模型 | 以产品封闭层覆盖率或已知用量估算，不沿用 1/8 in 洪流层默认。 |
| [/resin-mold-calculator/](https://epoxyplanner.com/resin-mold-calculator/) | 242 | 0 | 保留并强化 | 支持实际模具容量、单件数量、插入物扣除与 ml；承接部分几何预设。 |
| [/resin-coaster-calculator/](https://epoxyplanner.com/resin-coaster-calculator/) | 382 | 0 | 修成真实杯垫工具 | 修 28 in 默认值，增加圆/方、单件/套数和 ml 输出。 |
| [/resin-jewelry-calculator/](https://epoxyplanner.com/resin-jewelry-calculator/) | 229 | — | 整合候选或重做 | 当前 void-fill 通用表单不足；小模具容量与件数可由 mold 工具承接。 |
| [/resin-dice-calculator/](https://epoxyplanner.com/resin-dice-calculator/) | 393 | 2 | 保护并重做任务 | 有少量点击；区分立方体骰坯与多面骰容量，支持整套/件数与 ml。 |
| [/resin-tray-calculator/](https://epoxyplanner.com/resin-tray-calculator/) | 227 | 0 | 整合候选 | 区分有边空腔与表面涂层；先让 mold/tabletop 目标分别覆盖相应任务。 |
| [/sphere-resin-calculator/](https://epoxyplanner.com/sphere-resin-calculator/) | 422 | 2 | 保护并优化 | 有少量点击；保留球体任务，补直径图、数量和小体积单位。 |
| [/cylinder-resin-calculator/](https://epoxyplanner.com/cylinder-resin-calculator/) | 384 | 1 | 保护并优化 | 有历史点击；保留圆柱任务，说明实心/中空限制并补数量。 |
| [/cube-resin-calculator/](https://epoxyplanner.com/cube-resin-calculator/) | 368 | 0 | 保留为形状工具或预设 | 与 dice 区分；若并入 mold，先保留立方体公式、尺寸图与对应例子。 |
| [/resin-art-pricing-calculator/](https://epoxyplanner.com/resin-art-pricing-calculator/) | 226 | 0 | 实现售价或准确改名 | 当前只有树脂材料费；补人工、费用、利润口径，或整合材料预算。 |

### 7.3 英文指南（20 页）

| 页面 | 专属说明词数≈ | 历史点击 | 建议 | 需要完成的具体工作 |
| --- | ---: | ---: | --- | --- |
| [/how-much-epoxy-do-i-need/](https://epoxyplanner.com/how-much-epoxy-do-i-need/) | 244 | 0 | 保留为任务总入口 | 把不同任务的测量依据与工具选择讲清；避免与首页重复罗列卡片。 |
| [/how-much-epoxy-do-i-need-for-a-river-table/](https://epoxyplanner.com/how-much-epoxy-do-i-need-for-a-river-table/) | 597 | 0 | 保留完善 | 保留现有采购算例，增加测量图和与实际表单一致的参数说明。 |
| [/how-to-measure-a-river-table-for-epoxy/](https://epoxyplanner.com/how-to-measure-a-river-table-for-epoxy/) | 471 | 0 | 保留完善 | 测宽位置、等长分段和深度图是本页独立任务。 |
| [/deep-pour-vs-table-top-epoxy/](https://epoxyplanner.com/deep-pour-vs-table-top-epoxy/) | 451 | 0 | 保留完善 | 用厂家应用限制比较，表明产品类名不能直接确定配比或层厚。 |
| [/epoxy-waste-factor-guide/](https://epoxyplanner.com/epoxy-waste-factor-guide/) | 527 | 0 | 保留完善 | 保留假设/算例，区分百分比增量与经验记录；不制造行业实测均值。 |
| [/epoxy-coverage-chart/](https://epoxyplanner.com/epoxy-coverage-chart/) | 551 | 0 | 保留为参考中心 | 统一薄层/厚度覆盖换算及厂家覆盖率的不同口径。 |
| [/epoxy-mixing-ratio-guide/](https://epoxyplanner.com/epoxy-mixing-ratio-guide/) | 591 | 0 | 保留完善 | 保持体积比/重量比边界，补与真实产品输入一致的算例。 |
| [/river-table-epoxy-cost/](https://epoxyplanner.com/river-table-epoxy-cost/) | 600 | 0 | 保留完善 | 保留数量到预算的完整例子，强调材料费而非整张桌子售价。 |
| [/epoxy-countertop-cost/](https://epoxyplanner.com/epoxy-countertop-cost/) | 534 | 0 | 保留完善 | 台面边缘、封闭层、辅料与人工范围要清楚，来源/假设分开。 |
| [/epoxy-bar-top-cost/](https://epoxyplanner.com/epoxy-bar-top-cost/) | 541 | 0 | 保留并区分 | 保留长吧台和端头场景，避免复制 countertop 的预算表。 |
| [/epoxy-cost-per-square-foot/](https://epoxyplanner.com/epoxy-cost-per-square-foot/) | 397 | 0 | 保留并纠正 alternate | 这是台面材料成本页；不能与外国施工地坪价格页直接视为等价。 |
| [/how-much-epoxy-per-square-foot/](https://epoxyplanner.com/how-much-epoxy-per-square-foot/) | 373 | 0 | 整合候选 | 可合入 coverage-chart 的直接答案；先核对最新查询与反向覆盖任务。 |
| [/how-much-does-a-gallon-of-epoxy-cover/](https://epoxyplanner.com/how-much-does-a-gallon-of-epoxy-cover/) | 455 | 0 | 整合候选 | 可合入覆盖率参考中心，保留每加仑反向计算和适用厚度。 |
| [/epoxy-pour-depth-guide/](https://epoxyplanner.com/epoxy-pour-depth-guide/) | 549 | 0 | 保留既有分工 | 在用户已知产品限制后讲分层规划，保留现有假设与体积提醒。 |
| [/maximum-epoxy-pour-depth/](https://epoxyplanner.com/maximum-epoxy-pour-depth/) | 541 | 0 | 保留既有分工 | 讲如何读取产品层厚/体积/温度条件；与分层教程不同。 |
| [/seal-coat-vs-flood-coat/](https://epoxyplanner.com/seal-coat-vs-flood-coat/) | 559 | 0 | 保留并连接新模型 | 现有指南区分较清楚，工具应实现它描述的两种不同用量模型。 |
| [/how-to-prevent-epoxy-leaks/](https://epoxyplanner.com/how-to-prevent-epoxy-leaks/) | 529 | 0 | 保留完善 | 补真实或自绘检查位置图，任何漏检方法都需满足材料适用条件。 |
| [/how-to-calculate-epoxy-pour/](https://epoxyplanner.com/how-to-calculate-epoxy-pour/) | 541 | — | 保留为操作教程 | 用一次从测量到采购的完整演算区分于主计算器和总入口。 |
| [/epoxy-mix-ratio-by-volume-vs-weight/](https://epoxyplanner.com/epoxy-mix-ratio-by-volume-vs-weight/) | 566 | 0 | 保留完善 | 保持密度与厂家比率边界，不能给跨品牌通用重量比。 |
| [/epoxy-kit-size-guide/](https://epoxyplanner.com/epoxy-kit-size-guide/) | 552 | 0 | 保留并连接采购功能 | 保留组分/混合总量示例，增加包装向上取整与实际可购数量。 |

### 7.4 多语言工具（22 页）

| 页面 | 专属说明词数≈ | 历史点击 | 建议 | 需要完成的具体工作 |
| --- | ---: | ---: | --- | --- |
| [/de/](https://epoxyplanner.com/de/) | 163 | 1 | 保护语言主入口 | 补可直接使用的工具、真实维护说明和本语言算例；不因多语言本身删除。 |
| [/de/epoxidharz-verbrauch-pro-m2/](https://epoxyplanner.com/de/epoxidharz-verbrauch-pro-m2/) | 262 | 1 | 保护并强化用量任务 | 增加直接 m²、独立 mm 厚度和清晰损耗，补产品覆盖率与几何量的区别。 |
| [/de/epoxidharz-kosten-pro-m2/](https://epoxyplanner.com/de/epoxidharz-kosten-pro-m2/) | 128 | 1 | 修正㎡价格任务 | 增加直接面积和每㎡成本输出；明确材料/施工范围，纠正不等价的 alternate，缺资料用用户单价。 |
| [/de/epoxidboden-rechner/](https://epoxyplanner.com/de/epoxidboden-rechner/) | 127 | 0 | 保留并强化地坪数量 | 按每层产品覆盖率、实际套装产量及本地单位计算，加入完整算例。 |
| [/fr/](https://epoxyplanner.com/fr/) | 348 | 6 | 保护语言主入口 | 补可直接使用的工具、真实维护说明和本语言算例；不因多语言本身删除。 |
| [/fr/quantite-resine-epoxy-par-m2/](https://epoxyplanner.com/fr/quantite-resine-epoxy-par-m2/) | 544 | 1 | 保护并强化用量任务 | 增加直接 m²、独立 mm 厚度和清晰损耗，补产品覆盖率与几何量的区别。 |
| [/fr/prix-resine-epoxy-m2/](https://epoxyplanner.com/fr/prix-resine-epoxy-m2/) | 164 | 1 | 修正㎡价格任务 | 增加直接面积和每㎡成本输出；明确材料/施工范围，纠正不等价的 alternate，缺资料用用户单价。 |
| [/fr/calculateur-sol-epoxy/](https://epoxyplanner.com/fr/calculateur-sol-epoxy/) | 171 | 0 | 保留并强化地坪数量 | 按每层产品覆盖率、实际套装产量及本地单位计算，加入完整算例。 |
| [/pt-br/](https://epoxyplanner.com/pt-br/) | 188 | 8 | 保护语言主入口 | 补可直接使用的工具、真实维护说明和本语言算例；不因多语言本身删除。 |
| [/pt-br/calculadora-volume-resina-epoxi/](https://epoxyplanner.com/pt-br/calculadora-volume-resina-epoxi/) | 152 | 0 | 优先审查整合 | 两页专属说明高度相似；有用内容迁入葡语主工具，目标先覆盖对应问题。 |
| [/pt-br/quanta-resina-epoxi-preciso/](https://epoxyplanner.com/pt-br/quanta-resina-epoxi-preciso/) | 150 | 0 | 优先审查整合 | 两页专属说明高度相似；有用内容迁入葡语主工具，目标先覆盖对应问题。 |
| [/pt-br/consumo-resina-epoxi-por-m2/](https://epoxyplanner.com/pt-br/consumo-resina-epoxi-por-m2/) | 516 | 6 | 保护并强化用量任务 | 增加直接 m²、独立 mm 厚度和清晰损耗，补产品覆盖率与几何量的区别。 |
| [/pt-br/preco-piso-epoxi-m2/](https://epoxyplanner.com/pt-br/preco-piso-epoxi-m2/) | 149 | 0 | 修正㎡价格任务 | 增加直接面积和每㎡成本输出；明确材料/施工范围，纠正不等价的 alternate，缺资料用用户单价。 |
| [/pt-br/calculadora-piso-epoxi/](https://epoxyplanner.com/pt-br/calculadora-piso-epoxi/) | 386 | 2 | 保护并强化地坪数量 | 按每层产品覆盖率、实际套装产量及本地单位计算，加入完整算例。 |
| [/es/](https://epoxyplanner.com/es/) | 184 | 1 | 保护语言主入口 | 补可直接使用的工具、真实维护说明和本语言算例；不因多语言本身删除。 |
| [/es/consumo-resina-epoxi-por-m2/](https://epoxyplanner.com/es/consumo-resina-epoxi-por-m2/) | 291 | 2 | 保护并强化用量任务 | 增加直接 m²、独立 mm 厚度和清晰损耗，补产品覆盖率与几何量的区别。 |
| [/es/precio-suelo-epoxi-m2/](https://epoxyplanner.com/es/precio-suelo-epoxi-m2/) | 144 | 0 | 修正㎡价格任务 | 增加直接面积和每㎡成本输出；明确材料/施工范围，纠正不等价的 alternate，缺资料用用户单价。 |
| [/es/calculadora-suelo-epoxi/](https://epoxyplanner.com/es/calculadora-suelo-epoxi/) | 155 | 1 | 保护并强化地坪数量 | 按每层产品覆盖率、实际套装产量及本地单位计算，加入完整算例。 |
| [/it/](https://epoxyplanner.com/it/) | 179 | 0 | 保留语言主入口 | 补可直接使用的工具、真实维护说明和本语言算例；不因多语言本身删除。 |
| [/it/consumo-resina-epossidica-m2/](https://epoxyplanner.com/it/consumo-resina-epossidica-m2/) | 283 | 0 | 保留并强化用量任务 | 增加直接 m²、独立 mm 厚度和清晰损耗，补产品覆盖率与几何量的区别。 |
| [/it/prezzo-pavimento-resina-epossidica-m2/](https://epoxyplanner.com/it/prezzo-pavimento-resina-epossidica-m2/) | 139 | 0 | 修正㎡价格任务 | 增加直接面积和每㎡成本输出；明确材料/施工范围，纠正不等价的 alternate，缺资料用用户单价。 |
| [/it/calcolatore-pavimento-epossidico/](https://epoxyplanner.com/it/calcolatore-pavimento-epossidico/) | 148 | 0 | 保留并强化地坪数量 | 按每层产品覆盖率、实际套装产量及本地单位计算，加入完整算例。 |

## 8. 证据、可重复检查及交付状态

证据目录：[本次审计资料](C:/antigravity/epoxyplanner/docs/audits/2026-10-30/)。其中保存页面清单、在线状态、计算观察、浏览器结果及截图；完整在线 HTML 和审计临时脚本保存在 `C:/Users/jiank/AppData/Local/Temp/epoxyplanner-audit-20261030/`。证据中没有把模拟 API 或模拟爬虫 UA 结果当作真实 Google 后台验证。

建议将最终验收做成可重复检查：渲染/构建全部正式页，验证每个 sitemap URL 的规范地址、noindex、HTTP 状态、H1、JSON-LD、内链和迁移目标；算法验证覆盖单位等价、不同形状、损耗、层数、覆盖率、配比与套装取整；浏览器覆盖手机主流程及隐私消息实际适用地区。源码与线上版本均要验证，不能只看开发服务器返回的页面。

注意：当前 `scripts/preview.mjs` 对不存在路径会回落首页并返回 200，不适合用来判断生产 404。线上中间件本次返回真实 404；这一点应保留在部署后的验收中。

本轮产出为审计及改造方案，尚未实施业务改造、提交 Git、推送或请求 AdSense 复核。当前工作区原有修改保留。旧的 2026-10-03“Ready after fixes”结论不再代表当前准备状态；其中已完成的隐私与指南工作可继续使用，但本次浏览器实测揭示的功能和近似页面问题仍应先解决。

工具维护附记：本次使用的 Agent Reach 检测到新版 v1.6.0。需要更新时可使用这句话：[帮我更新 Agent Reach](https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/update.md)。本次未执行更新。
