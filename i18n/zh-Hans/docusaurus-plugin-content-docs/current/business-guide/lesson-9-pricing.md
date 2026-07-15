---
title: 第九课：盈利定价
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# 第 9 课：盈利定价策略

在第 5 课中，我们为 FitSite 规划了初始价格。现在，我们将使用提高收入、鼓励升级和降低客户流失率等技术来完善定价策略。

## 回顾进度 {#where-we-left-off}

FitSite 已经具备了计划、模板、结账流程、品牌和上手流程。最初的定价是每月 $49/$99/$199。现在，我们要让这些定价发挥更大的作用。

## 小众平台定价原则 {#pricing-principles-for-niche-platforms}

### 按价值定价，而非成本定价 {#price-on-value-not-cost}

您的托管成本可能在每位客户网站的 $5-$15 之间。但这并不意味着您的售价就应该是 $20。您销售的不是托管服务。您销售的是：

- 一个专业的健身网站，如果自己定制会花费 $2,000-$5,000
- 持续的维护、更新和安全保障，让客户无需操心
- 泛用建站工具无法提供的、针对小众行业的特定功能
- 一个为他们行业量身打造的平台所带来的信誉

请根据您提供的价值来定价，而不是根据提供服务的成本来定价。

### 对标替代方案 {#anchor-to-alternatives}

当健身工作室老板评估 FitSite 时，他们会将其与以下选项进行比较：

- **聘请网页开发人员**：前期花费 $2,000-$5,000 + 每月 $50-$100 的维护费
- **使用 Wix/Squarespace**：每月 $16-$45，但缺乏健身行业特定的功能，他们需要自己搭建
- **什么都不做**：导致无法在线找到他们的会员流失

以每月 $49-$199 的价格，FitSite 比聘请开发人员更便宜，比通用建站工具更强大，也比没有网站好得多。

## 实施价格变体 {#implementing-price-variations}

年付定价能鼓励客户承诺，并降低客户流失率。请导航到每个计划的 **Price Variations**（价格变体）选项卡，添加年付选项：

| Plan | Monthly | Annual (per month) | Annual Total | Savings |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mo | $39/mo | $468/year | 20% off |
| Growth | $99/mo | $79/mo | $948/year | 20% off |
| Pro | $199/mo | $159/mo | $1,908/year | 20% off |

请在结账表单中添加一个 **Period Selection**（周期选择）字段，让客户可以在月付和年付之间切换。请参阅 [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle)。

### 为什么年付定价有效 {#why-annual-pricing-works}

- **对您而言**：获得前期现金流，降低流失率（年付客户不太可能在中途取消）
- **对客户而言**：真正的节省，预算可预测性

## 设置费 {#setup-fees}

对于包含人工配置的计划，可以考虑收取一次性设置费：

- **Starter**：无设置费（消除入门障碍）
- **Growth**：$99 设置费（涵盖自定义域名配置和初步咨询）
- **Pro**：$299 设置费（涵盖多地点设置和上手咨询）

请在每个计划的定价部分配置设置费。有关详细信息，请参阅 [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product)。

## 试用期 {#trial-periods}

提供试用期可以减少注册的摩擦，但也带来了无法转化的风险。对于 FitSite：

- 仅在 Starter 计划提供 **7 天免费试用**
- Growth 和 Pro 计划不提供试用（这些客户更投入，期望付费）

请通过启用 Starter 计划定价部分的 **Offer Trial** 开关，并将持续时间设置为 7 天，来配置试用期。

### 如何提高试用转化率 {#making-trials-convert}

试用期只有在客户体验到价值时才有效。您的上手流程（第 8 课）至关重要——欢迎邮件的发送时机应该设计成在 7 天内推动客户参与度。

## 优惠代码 {#discount-codes}

为特定目的创建战略性优惠代码：

- **FITLAUNCH** — 前 3 个月享受八折优惠（用于启动推广）
- **ANNUAL20** — 年付计划享受八折优惠（如果尚未折扣）
- **REFERRAL** — 免费赠送 1 个月（用于客户推荐）

请导航到 **Ultimate Multisite > Discount Codes** 来创建这些代码。有关完整指南，请参阅 [Creating Discount Codes](/user-guide/configuration/creating-discount-codes)。

:::tip 默认不打折
折扣应该是战略工具，而不是永久的配置。如果每个人都能享受折扣，那它就不是折扣——它就是您的真实价格。请将它们用于特定的活动、推荐和限时促销。
:::

## 税务处理 {#tax-handling}

如果您的业务所在司法管辖区要求征收税费：

1. 在 **Ultimate Multisite > Settings > Taxes** 中配置税率
2. 将税类别应用到您的计划上
3. 确保发票正确显示税费

有关详细配置，请参阅 [Tax Handling](/user-guide/payment-gateways/tax-handling)。如果您服务国际客户，请考虑使用 [VAT addon](/addons/vat) 来符合欧盟规定。

## 审查您的定价 {#reviewing-your-pricing}

发布后，请每季度重新审查一次定价。关注以下几点：

- **按计划的转化率**：如果 Starter 转化率很高，但 Growth 较低，说明两者之间的价值差距可能过大
- **升级率**：如果很少有客户从 Starter 升级到 Growth，说明 Growth 计划提供的额外价值可能不够吸引人
- **按计划的流失率**：如果年付客户的流失率更低，就应该更大力度地推广年付计划
- **竞争对手定价**：替代方案收费多少？您的定位是否正确？

## FitSite 网络现状 {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (子域名模式)
├── Ultimate Multisite (已配置 + 品牌化)
├── Platform Domain (fitsite.com + 通配符 SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo or $468/yr) + 7-day trial
│   ├── FitSite Growth ($99/mo or $948/yr) + $99 setup fee
│   ├── FitSite Pro ($199/mo or $1,908/yr) + $299 setup fee
│   └── Order Bumps + Discount Codes
├── Checkout Flow (with period selection toggle)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding (Quick Start, emails, help resources)
├── Pricing Strategy
│   ├── Annual discounts (20% off)
│   ├── Strategic setup fees
│   ├── 7-day trial on Starter
│   ├── Discount codes for campaigns and referrals
│   └── Tax configuration
└── Ready for launch (next lesson)
```

## 本课构建的内容 {#what-we-built-this-lesson}

- **年付定价**，提供 20% 折扣以鼓励客户承诺
- **设置费**，在更高层级计划中收取，以覆盖上手配置的精力投入
- **试用期**，在入门级计划中提供，以减少注册摩擦
- **战略性优惠代码**，用于启动、推荐和活动推广
- **税务配置**，用于合规计费
- **定价审查框架**，用于持续优化

---

**下一课：** [Lesson 10: Launch Day](lesson-10-launch) — 上线前的检查清单和正式上线。
