---
title: 第六课：注册体验
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# 第 6 课：注册体验 {#lesson-6-the-signup-experience}

结账流程是实现兴趣转化为收入的关键环节。如果注册流程复杂或过于通用，就会流失客户。只有设计出符合其行业语言、且使用起来毫不费力的专属流程，才能真正促成转化。

## 上节回顾 {#where-we-left-off}

FitSite 已经配置了模板和套餐。现在，我们要构建注册和结账体验，将健身工作室所有者转化为付费客户。

## 理解注册流程 {#understanding-the-registration-flow}

Ultimate Multisite 的结账表单是完全可定制的、多步骤表单。对于 FitSite，我们需要的流程是：

1. 看起来像是为健身企业量身定制的
2. 只收集必需的信息
3. 尽快让客户拥有一个可用的网站

有关完整的技术参考，请参阅 [The Registration Flow](/user-guide/configuration/the-registration-flow)。

## 设计 FitSite 结账流程 {#designing-the-fitsite-checkout}

导航到 **Ultimate Multisite > Checkout Forms**，创建一个新表单。

### 步骤 1：套餐选择 {#step-1-plan-selection}

健身工作室所有者首先看到的内容应该是套餐，并且这些套餐的描述必须是他们能理解的语言。

- 添加一个 **Pricing Table**（定价表）字段
- 配置它以显示所有三个 FitSite 套餐
- 在第 5 课中撰写的套餐描述将出现在这里——请确保这些描述是针对健身业务需求的，而不是技术功能。

:::tip 行业语言至关重要
“1 GB 存储空间”对健身房老板来说毫无意义。“您专业工作室网站所需的一切”则意义重大。请用客户的语言来撰写套餐描述。
:::

### 步骤 2：模板选择 {#step-2-template-selection}

选择套餐后，客户会选择他们的起始模板。

- 添加一个 **Template Selection**（模板选择）字段
- 可用的模板会根据他们选择的套餐进行筛选（此配置在第 5 课中完成）
- 每个模板都应该配有预览图，展示一个与健身相关的设计

### 步骤 3：账户创建 {#step-3-account-creation}

保持极简。只收集以下信息：

- 电子邮件地址
- 密码
- 工作室/商家名称（这将成为他们的网站名称）

不要询问您在注册时不需要的信息。每一个额外的字段都会降低转化率。

### 步骤 4：网站设置 {#step-4-site-setup}

- **Site title**（网站标题）：从第 3 步输入的工作室名称中预填充
- **Site URL**（网站网址）：从工作室名称自动生成（例如：`ironworks.fitsite.com`）

### 步骤 5：支付 {#step-5-payment}

- 添加 **Payment**（支付）字段
- 配置您的支付网关（推荐使用 [Stripe](/user-guide/payment-gateways/stripe) 进行订阅计费）
- 如果您在第 5 课中创建了订单附加品（Order Bumps），请在支付步骤之前添加一个 **Order Bump** 字段

### 步骤 6：确认 {#step-6-confirmation}

- 使用符合健身行业语言的措辞自定义确认消息
- 示例：“您的健身工作室网站正在创建中。几秒钟后，您将被重定向到您的新网站。”

## 添加周期选择切换器 {#adding-a-period-selection-toggle}

如果您在套餐中设置了价格变体（月度 vs. 年度），请在结账表单中添加一个 **Period Selection**（周期选择）字段，以便客户可以在计费周期之间切换。有关操作说明，请参阅 [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle)。

## 配置支付 {#configuring-payment}

如果您尚未设置支付网关：

1. 导航到 **Ultimate Multisite > Settings > Payment Gateways**
2. 遵循 [Stripe 设置指南](/user-guide/payment-gateways/stripe) 或您偏好的网关指南
3. 使用测试支付完成一次完整的结账流程测试

有关支付如何进入您账户的详细信息，请参阅 [Getting Paid](/user-guide/payment-gateways/getting-paid)。

## 测试流程 {#testing-the-flow}

在继续之前，请完成一次完整的测试注册：

1. 在隐身/私密浏览器窗口中打开结账表单
2. 选择一个套餐
3. 选择一个模板
4. 创建一个账户
5. 完成支付（使用测试模式）
6. 验证网站是否使用正确的模板创建成功

请检查以下几点：

- [ ] 套餐描述是否清晰且符合行业特点
- [ ] 模板预览是否展示了适合健身行业的设计
- [ ] 网站 URL 是否能从工作室名称正确生成
- [ ] 支付流程是否成功
- [ ] 客户是否能到达一个使用所选模板的可用网站
- [ ] 确认邮件是否使用了符合行业特点的语言

## FitSite 网络现状 {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (子域名模式)
├── Ultimate Multisite (已配置)
├── 托管服务（带通配符 SSL + 域名映射）
├── 网站模板（Studio Essential, Gym Pro, Fitness Chain）
├── 产品（Starter, Growth, Pro + 订单附加品）
├── 结账流程
│   ├── 配套描述符合行业特点的套餐选择
│   ├── 配有健身预览的模板选择
│   ├── 极简账户创建
│   ├── 通过 Stripe 进行支付
│   └── 行业定制的确认信息
└── 已准备好进行品牌化（下一课）
```

## 本课构建的内容 {#what-we-built-this-lesson}

- **一个为健身工作室所有者量身定制的多步骤结账表单**
- **贯穿注册流程的行业定制语言**
- **极简摩擦力**——只包含必需字段，快速到达可用网站
- **支付集成**并完成测试验证
- **一个从套餐选择到可用网站的端到端测试流程**

---

**下一课：** [Lesson 7: Making It Yours](lesson-7-branding) —— 我们将对平台进行白标处理，并将 FitSite 确立为一个品牌。
