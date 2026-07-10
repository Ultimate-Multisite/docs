---
title: 结账字段和客户 DNS
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Checkout 字段和客户 DNS 管理 {#checkout-field-and-customer-dns-management}

## Domain Selection Checkout 字段 {#the-domain-selection-checkout-field}

**Domain Selection** 字段是一个 Checkout 元素，可让客户选择如何获取其站点的域名。将它添加到任何 Checkout 表单即可启用域名销售。

### 将字段添加到 Checkout 表单 {#adding-the-field-to-a-checkout-form}

1. 前往 **Network Admin › Ultimate Multisite › Checkout Forms**
2. 打开或创建一个 Checkout 表单
3. 在 Checkout 编辑器中，点击 **添加字段**
4. 从字段列表中选择 **Domain Selection**
5. 配置字段选项（见下文）
6. 保存表单

### 字段选项 {#field-options}

**域名模式** — 选择客户会看到哪些选项卡。每种模式都可以独立启用或禁用：

| 模式 | 作用 |
|---|---|
| **子域名** | 客户使用你网络上的免费子域名（例如 `mysite.yournetwork.com`）。无需付款。 |
| **注册新域名** | 客户搜索新域名，并通过你配置的提供商注册。使用匹配的域名产品进行定价。 |
| **现有域名** | 客户映射一个他们已拥有的域名。不收取注册费。该域名会自动映射到他们的站点。 |

**默认模式** — 当三种模式都启用时，首先打开哪个选项卡。设置为 **子域名** 可保持域名注册为可选项，或设置为 **注册新域名** 以鼓励购买。

**域名产品** — 可选择将此字段固定到特定域名产品。如果未设置，插件会根据客户搜索的 TLD 自动选择匹配的产品。

### 注册人联系字段 {#registrant-contact-fields}

当客户选择 **注册新域名** 选项卡时，Checkout 表单会内联添加注册人联系字段：

- 名 / 姓
- 电子邮件地址
- 地址（地址行 1、城市、州/省、邮政编码、国家/地区）
- 电话号码

所有注册商都要求这些信息，并会在发起注册 API 调用之前进行验证。电话号码会自动格式化为注册商所期望的 `+CC.NNN` 国际格式。

### 自动生成的站点 URL {#auto-generated-site-url}

当客户注册或映射域名时，站点 URL 字段会根据所选域名自动填充。客户无需填写单独的 URL 字段。

### 搜索行为 {#search-behaviour}

- 随着客户输入，通过 AJAX 实时检查域名可用性
- 当首选域名不可用时，会显示替代 TLD 建议
- 实时获取并清晰显示价格（注册价格、续费价格、可选 WHOIS 隐私费用）
- 优惠码会像适用于任何其他产品一样适用于域名产品

**调整搜索响应速度：**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**向域名搜索表单添加自定义字段：**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Additional notes',
    ];
    return $fields;
});
```

---

## 客户 DNS 管理 {#customer-dns-management}

客户可以从 **My Account** 页面，在其域名条目下管理已注册域名的 DNS 记录。

### 支持的记录类型 {#supported-record-types}

| 类型 | 用途 |
|---|---|
| **A** | 将主机名映射到 IPv4 地址 |
| **AAAA** | 将主机名映射到 IPv6 地址 |
| **CNAME** | 创建指向另一个主机名的别名 |
| **MX** | 设置邮件交换服务器 |
| **TXT** | 添加 SPF、DMARC、验证或其他文本记录 |

### 哪些提供商支持 DNS 管理？ {#which-providers-support-dns-management}

DNS 管理（添加、编辑、删除记录）可用于 **OpenSRS**、**ResellerClub**、**Enom**、**HostAfrica** 和 **Openprovider**。**Hostinger** 域名可以通过 Domain Seller 更新名称服务器；托管域名的 DNS 记录由核心 Hostinger 域名映射集成管理。Namecheap、GoDaddy 和 NameSilo 域名会显示状态和到期信息，但 DNS 必须直接在注册商的控制面板中管理。

### 默认 DNS 记录 {#default-dns-records}

你可以配置默认 DNS 记录，在域名注册时自动应用。前往 **Settings › Domain Seller › Default DNS Records**。

默认记录值支持两个令牌：

| 令牌 | 替换为 |
|---|---|
| `{DOMAIN}` | 已注册的域名（例如 `example.com`） |
| `{SITE_URL}` | 客户站点的 WordPress 站点 URL |

**示例 — 将根域名和 www 指向你的服务器 IP：**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### 管理员：查看和编辑 DNS {#admin-viewing-and-editing-dns}

网络管理员可以从 **Network Admin › Ultimate Multisite › Domains** 中域名的编辑页面查看和编辑任何客户域名的 DNS 记录。
