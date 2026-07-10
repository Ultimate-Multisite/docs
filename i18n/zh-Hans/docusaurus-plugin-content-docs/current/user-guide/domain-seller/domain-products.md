---
title: 域名产品与定价
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# 域名产品和定价 {#domain-products-and-pricing}

域产品是您用来控制定价、TLD、WHOIS隐私和提供商选择的方式。每个域产品都是一个标准的 Ultimate Multisite 产品，但会额外增加一个 **域名设置 (Domain Settings)** 标签页。

## 创建域产品 {#creating-a-domain-product}

1. 导航到 **网络管理 (Network Admin) › Ultimate Multisite › 产品 (Products)**
2. 点击 **添加新产品 (Add New)**
3. 将产品类型设置为 **域名 (Domain)**
4. 配置 **域名设置 (Domain Settings)** 标签页（见下文）
5. 保存

域产品在产品列表中会显示一个紫色的 **域名 (Domain)** 徽章，您可以使用 **域产品 (Domain Products)** 标签页进行筛选。

## 域名设置标签页 {#domain-settings-tab}

### 提供商 (Provider) {#provider}

选择哪个注册商负责该产品的注册。默认使用 Domain Seller 设置中的全局 **默认提供商 (Default provider)**。

### 支持的 TLDs {#supported-tlds}

留空可以创建一个 **通用产品 (catch-all product)**，该产品适用于所有未被其他产品匹配的 TLD。

输入逗号分隔的 TLD 列表（例如，`.com, .net, .org`），可以创建一个 **特定 TLD 产品 (TLD-specific product)**，该产品仅适用于这些扩展名。

**产品匹配的工作原理：** 当客户搜索域名时，插件会选择匹配度最高的那个产品。如果产品 TLD 列表中包含 `.com`，则它优先于通用产品。如果没有任何特定 TLD 产品匹配，则使用通用产品。如果不存在任何产品，则不会显示域名搜索结果。

### 定价模式 (Markup type) {#markup-type}

以下三种模式控制您的零售价格如何从批发成本计算得出：

| 模式 | 工作原理 |
|---|---|
| **百分比 (Percentage)** | 在批发成本的基础上增加一个百分比。对 10 美元批发域名的 20% 定价，最终价格为 12 美元。 |
| **固定加价 (Fixed markup)** | 增加一个固定的美元金额。对 10 美元域名的 5 美元加价，最终价格为 15 美元。 |
| **固定价格 (Fixed price)** | 完全忽略批发成本。始终收取您输入的金额。 |

### 介绍性定价 (Introductory pricing) {#introductory-pricing}

启用此功能可以提供折扣的首年价格。您需要设置一个单独的 **介绍性价格 (Introductory price)**（第一年价格），以及常规的 **续费价格 (Renewal price)**（第二年及以后）。客户在结账时会看到这两个价格，从而了解续费时的预期费用。

### WHOIS 隐私 (WHOIS privacy) {#whois-privacy}

控制是否为通过此产品注册的域名提供 WHOIS 隐私保护。

| 设置 | 行为 |
|---|---|
| **禁用 (Disabled)** | 永远不提供或启用 WHOIS 隐私。 |
| **始终包含 (Always Included)** | 在注册时自动免费启用 WHOIS 隐私。 |
| **客户选择 (Customer Choice)** | 结账时会出现一个复选框。您可以设置 **隐私价格 (Privacy price)** 按年收费，或者将其设置为 $0 以免费提供。 |

对于 Namecheap，WHOIS 隐私使用 WhoisGuard（始终免费）。对于 OpenSRS，它使用 OpenSRS 隐私服务（批发时可能需要费用）。

---

## TLD 导入和同步 {#tld-import-and-sync}

域产品会显示从连接的提供商处获取的实时批发价格。要实现此功能，必须导入 TLD。

- **手动同步 (Manual sync):** Settings › Domain Seller › Sync TLDs (按提供商)
- **自动同步 (Automatic sync):** 通过配置的所有提供商每天运行一次计划的 cron job。

同步完成后，请转到任何域产品的域名设置标签页，并使用 TLD 选择器查看当前批发价格可用的 TLD。

---

## 自动续费 (Auto-renewal) {#auto-renewal}

域名续费与客户的会员状态挂钩：

- 当会员资格续费且域名已关联时，域名续费会自动排队。
- 续费尝试使用客户当前的支付网关。
- 续费失败的记录会自动使用指数退避算法重试。
- 对于成功的续费、失败的续费和即将到期的域名，系统会发送电子邮件通知。

域名生命周期事件的邮件模板 ID：

| 事件 | Template ID |
|---|---|
| 域名注册 | `domain_registered` |
| 域名续费 | `domain_renewed` |
| 续费失败 | `domain_renewal_failed` |
| 域名即将过期 | `domain_expiring_soon` |

---

## 管理员：手动域名注册 {#admin-manual-domain-registration}

如果您需要代表客户注册域名，而无需他们通过结账流程：

1. 导航到 **网络管理 (Network Admin) › Ultimate Multisite › 注册域名 (Register Domain)**
2. 选择客户并输入域名名称
3. 填写注册人联系信息（姓名、地址、电话）
4. 点击 **注册 (Register)**

域名记录将被创建并链接到客户的账户。
