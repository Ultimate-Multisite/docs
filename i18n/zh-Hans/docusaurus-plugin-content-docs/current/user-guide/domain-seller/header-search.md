---
title: 页眉域名搜索
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Header 域名搜索 {#header-domain-search}

当你需要一个小型 Header 表单来启动域名搜索，然后让客户在 Ultimate Multisite 结账中从可用域名里选择时，请使用此设置。

## 要求 {#requirements}

- Ultimate Multisite 已在网络中启用。
- Multisite Ultimate Domain Seller 已在网络中启用。
- 至少有一个有效的域名注册产品，并且：
  - `domain_provider` 设置为已配置的提供商。
  - 已配置支持的 TLD，例如 `com`、`net` 和 `org`。
- 一个包含 **域名选择** 字段的有效结账表单。

## 结账表单 {#checkout-form}

1. 创建或编辑注册页面使用的结账表单。
2. 添加正常必需的结账/Account 字段，包括 **Username**。只包含域名字段的结账表单会被 Ultimate Multisite 验证拒绝。
3. 添加一个 **域名选择** 字段。
4. 当流程应侧重于注册域名，而不是免费子域名或现有域名时，将 Domain Selection 模式设置为 **Register Only**。
5. 将域名注册产品分配给该字段。

注册页面应渲染结账表单，例如：

```text
[wu_checkout slug="domain-form"]
```

## Header 表单 {#header-form}

在网站 Header 中添加一个小型 `GET` 表单，将输入的搜索词作为 `domain_name` 发送到结账页面：

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

不要在自定义 Header JavaScript 中预选域名。Header 只应传递搜索词。Domain Seller 结账脚本会读取 `?domain_name=example`，填充结账搜索框，并运行可用性搜索，让客户从返回的域名中选择。

## 预期行为 {#expected-behaviour}

在 Header 中搜索 `example` 应打开：

```text
/register/?domain_name=example
```

然后，结账页面应显示可选择的结果，例如：

- `example.com`
- `example.net`
- `example.org` 不可用
- 其他提供商支持的 TLD

选择可用结果后，订单摘要应包含域名注册产品和所选域名。

## 验证 {#verification}

1. 打开首页。
2. 搜索一个裸名称，例如 `example`。
3. 确认结账 URL 包含 `?domain_name=example`。
4. 确认结账域名字段包含 `example`。
5. 确认出现域名选项列表。
6. 对可用域名点击 **选择**。
7. 确认订单摘要包含 `Domain Registration - example.com` 或所选域名。

## 故障排除 {#troubleshooting}

- 如果没有出现列表，请检查浏览器网络选项卡中的 `admin-ajax.php?action=wu_domain_search`，并确认它返回非空的 `domains` 或 `results`。
- 如果结账表单在保存时验证失败，请添加必需的 Account 字段，例如 **Username**。
- 如果选择域名后购物车未更新，请确认 `window.wu_checkout_form` 存在，并且 Domain Seller 结账资源已加载到结账页面。
