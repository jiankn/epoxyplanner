# AdSense 整改实施记录

实施日期：2026-10-30，Asia/Shanghai。基于同日的[拒审审计](C:/antigravity/epoxyplanner/docs/adsense-remediation-audit-2026-10-30.md)。本记录主要描述工作区与本地构建结果。用户随后授权提交 GitHub 并部署，发布进展见下方附记；未代为提交 AdSense 复核。

## 已完成的产品改造

- 计算器先于长答案和参考表出现。首页增加直接可用的估算工具；桌面采用输入和结果并列布局。工具页导航及结果摘要不再浮动遮挡表单。手机主工具的尺寸输入约在 y=686，原审计约 y=1573，视口均为 390 × 844。
- 有限数值、负数、百分比、整数件数/涂层数和极大数值都有校验。出错会清除旧结果。体积较小时优先显示 mL，费用保留至货币的小数单位。
- A/B 默认“未确认”；输入厂家体积比后才拆分。重量比不会套用通用密度转换。层厚和最大批量为独立产品输入，未知时不再输出通用 2 in 浇注许可。
- 增加套装总混合产量及向上取整采购数。几何最低量、带余量数量、完整套装采购和允许的混合批量分开表达。
- 杯垫有圆形/方形、实际示例尺寸和数量；骰子区分立方体坯与已知模具/整套容量；模具、首饰和托盘支持已知混合容量与件数。同步修正了旧 FAQ，避免让用户再乘一次已经包含的件数。
- 表面涂层支持直接面积或尺寸、独立厚度单位、产品标签覆盖率和明确的边缘/损耗系数。封闭层使用其产品覆盖率，不再直接沿用洪流层厚度。
- 艺术品售价包含树脂、辅料、包装、人工、管理成本、预计失败率、销售费和利润率。利润率以售价为分母，人工先计入成本。
- 材料预算以金额作为主结果。五个多语言㎡费用页输出每面积成本和总预算，明确材料/施工范围；可另填自有附加成本。面积、厚度及覆盖率单位切换保留相应物理总量；附加成本的单位也随面积单位换算。

相关源码：[表单与页面](C:/antigravity/epoxyplanner/src/templates/render.mjs)、[计算逻辑](C:/antigravity/epoxyplanner/src/assets/calculator.js)、[本次页面配置与内容](C:/antigravity/epoxyplanner/src/data/remediation-2026-10.mjs)、[新增多语言文案](C:/antigravity/epoxyplanner/src/assets/planner-text.js)。

## 内容与信任信息

为主要工具添加了可复算案例、尺寸示意、参数范围解释及相关厂家来源。20 篇指南增加了与实际新工具一致的操作说明。图示为自绘几何示意，不宣称现场项目或实测。

About、Authors 和 Methodology 说明以 Epoxy Planner 品牌独立维护的性质、算法复核、资料来源、纠错和本次计算变更；没有新增虚构作者、资历或施工经历。新增真实修订日期，Article 的 dateModified 与页面版本一致。删除了不存在的站内搜索 SearchAction 和 keywords meta。

减少跨页重复的共享 FAQ；保留任务相关问答。葡语、法语等已有点击入口继续保留；㎡费用页明确为材料预算，避免与英文台面材料费用页在任务范围上冲突。原有隐私必需披露、信息页和 404/嵌入页广告排除保持有效。

## URL 整合

| 原入口 | 保留页 | 保留的任务预设 |
| --- | --- | --- |
| `/epoxy-calculator-metric/` | `/epoxy-calculator/` | `unit=metric` |
| `/epoxy-rectangle-calculator/` | `/epoxy-calculator/` | `shape=rectangle` |
| `/epoxy-circle-calculator/` | `/epoxy-calculator/` | `shape=round` |
| `/epoxy-pour-calculator/` | `/deep-pour-epoxy-calculator/` | 对应深浇注任务 |
| `/round-epoxy-table-calculator/` | `/table-top-epoxy-calculator/` | 圆形尺寸模式 |
| `/bar-top-epoxy-calculator/` | `/table-top-epoxy-calculator/` | 表面涂层及边缘余量 |
| `/epoxy-flood-coat-calculator/` | `/table-top-epoxy-calculator/` | 洪流涂层任务 |
| `/pt-br/calculadora-volume-resina-epoxi/` | `/pt-br/` | 公制体积工具 |
| `/pt-br/quanta-resina-epoxi-preciso/` | `/pt-br/` | 公制数量工具 |

这些入口使用一跳 301，并更新站内链接、导航、hreflang 和 sitemap。公制/形状查询参数只控制工具初始状态，canonical 保持保留页的基础 URL。主机、协议与旧路径的规范化可在一次跳转完成。

迁移依据为已验证的相同任务及本地历史 GSC；该历史窗口为 2026-09-07 至 2026-10-04，九个入口均无点击记录或未出现在该导出中。没有把这些记录当作当前流量，没有调用 GSC API，也没有据此删除仍有独立任务的其他页面。

## 验证结果

| 项目 | 最终结果 |
| --- | --- |
| 原生构建 | 成功，70 个正式页：42 个计算器、20 篇指南、8 个首页/信息页 |
| 全量生成页检查 | 70 页，44 个可运行的默认工具表单，65 个 sitemap URL，38 个累计重定向，63 个 AdSense loader 页面 |
| 检查内容 | H1、title/description 唯一性、canonical、robots/noindex、JSON-LD、hreflang 返回、内容链接/锚点、脚本资源、重定向目标及广告排除 |
| Node 测试 | 24 项通过，包含计算模型、异常输入、配比、套装边界、费用/利润、路由和原有隐私模拟 API 测试 |
| 浏览器默认状态 | 全部 44 个工具表单运行正常 |
| 浏览器操作 | 12 组操作检查完成；最初发现的两处遮挡问题修复后，针对配比/套装与面积成本单位切换的复测通过 |
| 响应式 | 抽查桌面及 390px 手机无整页横向溢出；手机单位/形状按钮文本宽度检查通过 |
| 代码检查 | `git diff --check` 通过；界面机械检查运行无报告项 |
| 生产环境 | 用户后续授权发布；Cloudflare Pages 部署结果见相应 GitHub 提交的检查，不能将发布成功当作 Google 已重新抓取 |

复用命令：

```powershell
npm.cmd run build
npm.cmd run check
npm.cmd test
npm.cmd run preview
```

`check` 是本轮新增的构建产物检查。预览服务现在支持真实 404 与迁移跳转；它限制外部脚本，避免本地验收加载广告，因此本地浏览器不能验证真实 Google CMP 或广告请求。

## 发布与重新申请前仍需完成

1. 将本轮代码部署到实际 Cloudflare 站点，并验证正式域名上的状态、脚本、301 预设、canonical 和移动端主要流程。若有更新的 GSC 数据，再检查迁移页及保留页的变化。
2. 由账号运营者核实申请主体、publisher ID、重复账号和流量来源；确认 AdSense 后台的网站状态及隐私消息。针对适用地区的个性化广告，验证真实认证 CMP 的接受、拒绝和撤回请求，而非本地帮助面板或模拟 API。相关地区要求见 [Google 官方说明](https://support.google.com/adsense/answer/13554116?hl=en)。
3. 确认联系邮箱能够收件。实际启用广告后，检查自动广告排除、遮挡与广告/正文比例。完成正式环境验收后，再通过 AdSense 后台允许的流程申请复核。

网站端已落实本轮可验证的主要整改。Google 未给出本次拒审的具体页面清单，本次改造不能保证批准。可对照 [Google 内容与用户体验要求](https://support.google.com/adsense/answer/10015918?hl=en)继续维护实际工具与独立内容。

本轮没有创建 subagent，没有更改现有无关未跟踪目录，也没有发送邮件。

## 发布验收附记

用户授权后，整改提交 `1ba7432` 已推送至 GitHub `main`；Cloudflare Pages 自动部署和 IndexNow 工作流均成功。正式域名验收复现浏览器仍使用旧版缓存脚本和样式，导致新表单没有结果，因此补充了基于源码内容哈希的资源文件名，并同步改写 HTML 和 ES module 的依赖路径。保留旧的稳定资源路径兼容已有引用；构建检查同时验证新文件和依赖均可解析。该修复不改变计算公式。

发布状态以 [GitHub 主分支提交检查](https://github.com/jiankn/epoxyplanner/commits/main/)及正式域名验收为准。本次发布不包含 AdSense 后台复核操作。

## 预览与证据

本地入口：[主计算器](http://localhost:4173/epoxy-calculator/)、[杯垫批量](http://localhost:4173/resin-coaster-calculator/)、[艺术品售价](http://localhost:4173/resin-art-pricing-calculator/)、[葡语㎡费用](http://localhost:4173/pt-br/preco-piso-epoxi-m2/)。

截图和结构化记录位于 [整改证据目录](C:/antigravity/epoxyplanner/docs/audits/2026-10-30-remediation/)。本地预览服务运行期间可直接打开上述地址。

![桌面主工具](C:/antigravity/epoxyplanner/docs/audits/2026-10-30-remediation/desktop-main.png)

![手机主工具](C:/antigravity/epoxyplanner/docs/audits/2026-10-30-remediation/mobile-main.png)
