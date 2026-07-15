---
title: 第五课：制定计划
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# 第 5 课：设计您的套餐

您的套餐层级不仅仅是定价级别——它们反映了您的特定领域客户群体实际的运营方式。在本课中，您将设计出与不同阶段健身企业真实需求相匹配的产品层级。

## 回顾进度 {#where-we-left-off}

FitSite 已经准备了三个模板（Studio Essential、Gym Pro、Fitness Chain）。现在，我们需要创建决定客户可以访问哪些内容以及他们需要支付多少费用的套餐。

## 从客户群体角度思考 {#thinking-in-customer-segments}

大多数人犯的错误是围绕技术功能（存储空间、带宽、页面数量）来设计套餐。您的特定领域客户群体不会从这些角度思考。健身房老板思考的是他们经营业务需要什么。

对于健身工作室来说，存在三个自然的群体：

| 群体 | 他们是谁 | 他们需要什么 |
|---------|-------------|----------------|
| **独立教练/小型工作室** | 1-3 名员工，单个地点，起步阶段 | 专业网站、课程信息、联系表单 |
| **成熟健身房** | 5-20 名员工，单个地点，正在发展 | 以上所有功能，外加预约系统、博客、图库、自定义域名 |
| **连锁健身房** | 多个地点，成熟品牌 | 以上所有功能，外加多站点、地点页面、员工名录 |

您的套餐应该与这些群体挂钩，而不是与任意的功能组合挂钩。

## 创建 FitSite 套餐 {#creating-the-fitsite-plans}

请导航到 **Ultimate Multisite > Products > Add Product** 为每个套餐设置。

### 套餐 1：FitSite Starter -- $49/月 {#plan-1-fitsite-starter----49month}

**目标群体**：独立教练和小型工作室

**描述 tab**：
- 名称：FitSite Starter
- 描述：“个人教练或小型工作室所需的一切，让您在线上看起来专业。”

**General tab**：
- 产品类型：套餐 (Plan)
- 客户角色：管理员 (Administrator)

**Site Templates tab**：
- 允许站点模板：启用 (Enabled)
- 可用模板：仅 Studio Essential

**限制 (Limitations)**：
- 站点数：1
- 磁盘空间：1 GB
- 自定义域名：禁用 (Disabled) (使用 `studioname.fitsite.com`)

**Plugins tab**：
- 联系表单插件：强制激活 (Force Activate)
- SEO 插件：强制激活 (Force Activate)
- 预约插件：不可用 (Not Available) (升级激励)

**Themes tab**：
- 您选择的主题：强制激活 (Force Activate)
- 所有其他主题：隐藏 (Hidden)

### 套餐 2：FitSite Growth -- $99/月 {#plan-2-fitsite-growth----99month}

**目标群体**：成熟的单地点健身房

**描述 tab**：
- 名称：FitSite Growth
- 描述：“专为准备扩大线上业务版面并吸引新会员的成熟健身房设计。”

**Site Templates tab**：
- 可用模板：Studio Essential 和 Gym Pro

**限制 (Limitations)**：
- 站点数：1
- 磁盘空间：5 GB
- 自定义域名：启用 (Enabled)

**Plugins tab**：
- Starter 中的所有功能，外加：
- 预约插件：强制激活 (Force Activate)
- 图库插件：强制激活 (Force Activate)
- 博客功能：可用 (Available)

**Up & Downgrades tab**：
- 套餐组 (Plan group)：FitSite Plans
- 产品顺序 (Product order)：2

### 套餐 3：FitSite Pro -- $199/月 {#plan-3-fitsite-pro----199month}

**目标群体**：多地点连锁健身房

**描述 tab**：
- 名称：FitSite Pro
- 描述：“为拥有多个地点的健身品牌提供的完整平台。”

**Site Templates tab**：
- 可用模板：所有三个模板

**限制 (Limitations)**：
- 站点数：5 (每个地点一个)
- 磁盘空间：20 GB
- 自定义域名：启用 (Enabled)

**Plugins tab**：
- Growth 中的所有功能，外加：
- 所有高级插件：强制激活 (Force Activate)

**Up & Downgrades tab**：
- 套餐组 (Plan group)：FitSite Plans
- 产品顺序 (Product order)：3

## 设置套餐组 (Plan Group) {#setting-up-the-plan-group}

套餐组确保客户只能在 FitSite 套餐系列内部进行升级或降级。在每个套餐的 **Up & Downgrades** tab 上：

1. 将 **Plan Group** 设置为所有套餐的 "FitSite Plans"
2. 将 **Product Order** 设置为 1 (Starter)，2 (Growth)，3 (Pro)

这样就创建了一条清晰的升级路径：Starter → Growth → Pro。

## 添加附加产品 (Order Bumps) {#adding-order-bumps}

附加产品是在结账时提供的增值产品。对于 FitSite，可以考虑：

- **额外存储包** ($19/月) -- 额外 5 GB 磁盘空间
- **优先支持** ($29/月) -- 更快的响应时间
- **额外站点** ($39/月) -- 适用于超出套餐允许站点数量的客户

请在 Ultimate Multisite 中将这些产品创建为 **Package** 类型，并将其关联到相应的套餐。

## 为什么这种结构有效 {#why-this-structure-works}

- **Starter** 降低了入门门槛——价格低廉，功能简单，能让教练快速上线
- **Growth** 增加了健身房真正需要的功能——预约、图库、自定义域名
- **Pro** 服务于需要多地点支持的高价值客户群体
- **附加产品** 让客户可以在不复杂化核心套餐的情况下进行定制
- **清晰的升级路径** 意味着客户会随着您的发展而成长，而不是流失

## FitSite 网络现状 {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## 本课构建的内容 {#what-we-built-this-lesson}

- **三个套餐层级**，对应真实的健身业务群体
- 使用 Ultimate Multisite 的插件和模板控制实现的**功能门控 (Feature gating)**
- 一个具有清晰升级路径的**套餐组 (Plan group)**
- 用于增加额外收入的**附加产品 (Order bump products)**
- 一个基于客户价值而非技术规格的**定价结构**

---

**下一课：** [Lesson 6: The Signup Experience](lesson-6-checkout) — 我们将构建一个能将健身工作室老板转化为付费客户的结账流程。
