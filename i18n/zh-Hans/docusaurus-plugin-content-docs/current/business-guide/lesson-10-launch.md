---
title: 第 10 课：上线日
sidebar_position: 11
_i18n_hash: 49ba467b8efba57e92cf072bcec53969
---
# 第 10 课：发布日 {#lesson-10-launch-day}

所有东西都建好了。在正式“开门营业”之前，本课会带你走过预发布检查清单，确保没有任何东西是坏的、缺失的或让人尴尬的。

## 我们上次停在哪里 {#where-we-left-off}

FitSite 已经配置好了模板、套餐、结账流程、品牌、用户引导和定价。现在我们需要验证所有功能是否正常，然后正式上线。

## 预发布检查清单 {#pre-launch-checklist}

请逐项检查。不要跳过任何一步。

### 平台基础设施 {#platform-infrastructure}

- [ ] 托管服务稳定，且在高负载下性能良好
- [ ] 通配符 SSL 已激活，所有子域名都通过 HTTPS 提供服务
- [ ] 域名映射功能正常——测试创建站点并映射自定义域名
- [ ] 已配置并测试了备份（至少恢复一次以验证）
- [ ] 已设置监控系统——确保你知道平台何时会宕机

### 模板 {#templates}

- [ ] 所有三个模板在新站点上都能正确加载
- [ ] 占位内容有帮助，且没有错别字
- [ ] 所有图片都拥有适当的授权（没有图库照片的水印）
- [ ] 所有模板页面在移动设备上都能正常响应
- [ ] 页面加载速度可接受（使用 GTmetrix 或 PageSpeed Insights 等工具进行测试）
- [ ] 任何模板上都没有损坏的链接或缺失的资源

### 套餐和产品 {#plans-and-products}

- [ ] 所有三个套餐都已激活且可见
- [ ] 套餐描述准确且符合细分市场特点
- [ ] 定价正确（月付和年付）
- [ ] 设置费用已在正确的套餐上配置
- [ ] 试用期在 Starter plan 上正常工作
- [ ] 订单附加产品在结账过程中能正确显示
- [ ] 每个套餐的插件和主题限制都已正确执行

### 结账流程 {#checkout-flow}

- [ ] 对每个套餐进行一次完整的测试注册（使用测试支付模式）
- [ ] 模板选择能显示每个套餐对应的正确模板
- [ ] 支付过程成功
- [ ] 用户在注册后能收到欢迎邮件
- [ ] 新站点使用正确的模板创建成功
- [ ] 用户可以立即登录到其新站点
- [ ] 优惠代码能正确使用

### 品牌 {#branding}

- [ ] 登录页面显示 FitSite 的品牌标识
- [ ] Admin dashboard 显示 FitSite 的品牌标识
- [ ] 所有系统邮件都使用 FitSite 的品牌标识和健身相关的语言
- [ ] 发票显示正确，包含您的业务详细信息
- [ ] 营销网站已上线，并链接到结账表单

### 用户引导 (Onboarding) {#onboarding}

- [ ] Quick Start 小组件出现在新客户的 dashboard 上
- [ ] 所有 Quick Start 链接都指向正确的页面
- [ ] 欢迎邮件序列已配置并测试
- [ ] 知识库文章已发布且可访问
- [ ] 账户页面显示正确的套餐信息和升级选项

### 法律和业务 {#legal-and-business}

- [ ] 服务条款已发布，并从结账页面链接到
- [ ] 隐私政策已发布且可访问
- [ ] 退款政策已定义并记录在案
- [ ] 业务实体已设置，用于接收付款
- [ ] 支付网关处于实时模式（而非测试模式）
- [ ] 税务配置针对您的司法管辖区是正确的

## Soft Launch 与 Hard Launch {#soft-launch-vs-hard-launch}

考虑采用两阶段发布：

### 第一阶段：Soft Launch（软发布） {#phase-1-soft-launch}

在向公众发布前，邀请 5-10 位健身工作室老板注册。这些是您的 Beta 客户。作为交换，向他们提供大幅折扣（终身 5 折，或免费 3 个月）：

- 对注册和用户引导体验提供真实的反馈
- 允许您使用他们的网站作为展示案例
- 报告他们遇到的任何 Bug 或问题

这能让您在向公众开放之前，获得真实的客户反馈和可展示的实地网站。

### 第二阶段：Public Launch（硬发布） {#phase-2-public-launch}

在整合了软发布反馈后：

- 将支付网关切换到实时模式
- 发布您的营销网站
- 开始客户获取（第 11 课）
- 在相关的健身行业渠道宣布

## 发布日行动 {#launch-day-actions}

在您正式公开的日子：

1. **切换到实时的支付模式**——禁用支付网关的测试模式
2. **再次验证**——使用真实的支付进行一次完整的测试注册（之后请给自己退款）
3. **密切监控**——留意错误、注册失败或支付问题
4. **保持待命**——您的第一批真实客户可能需要帮助，快速响应能建立信任
5. **短暂庆祝**——然后回到工作岗位

## 可能出错的地方 {#what-can-go-wrong}

请做好准备应对：

- **支付网关问题**：准备好支付网关提供商的客服联系方式
- **SSL 证书问题**：了解如何检查和续订证书
- **邮件投递失败**：测试邮件是否实际到达（检查垃圾邮件文件夹）
- **高负载下的性能问题**：如果流量激增，了解如何扩展您的托管服务
- **客户困惑**：准备好您的知识库和支持渠道

## FitSite Network 迄今为止的进展 {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode) ✓
├── Ultimate Multisite (configured + branded) ✓
├── Platform Domain (fitsite.com + wildcard SSL) ✓
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain) ✓
├── Products (Starter, Growth, Pro + Order Bumps + Discounts) ✓
├── Checkout Flow (tested end-to-end) ✓
├── Branding (complete) ✓
├── Customer Onboarding (Quick Start, emails, help resources) ✓
├── Pricing Strategy (annual, trials, setup fees, discounts) ✓
├── Pre-Launch Checklist (verified) ✓
├── Soft Launch (beta customers onboarded) ✓
└── LIVE ✓
```

## 本课学到的内容 {#what-we-built-this-lesson}

- **一份全面的预发布检查清单**，涵盖了基础设施、内容、支付和法律等方面
- **一个软发布策略**，让您在公开之前获得真实反馈
- **发布日操作流程**，让您充满信心地上线
- **一个应急计划**，应对常见的发布日问题

---

**下一课：** [第 11 课：寻找客户](lesson-11-customers) — 现在 FitSite 已经上线了，您如何让健身工作室老板注册呢？
