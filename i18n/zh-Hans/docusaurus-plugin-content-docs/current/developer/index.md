---
title: 开发者文档
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# 开发者文档 {#developer-documentation}

本指南为开发者提供与 Ultimate Multisite 集成、扩展或开发附加组件所需的一切内容。Ultimate Multisite 可将 WordPress Multisite 网络转换为网站即服务（WaaS）平台。

## 可用内容 {#whats-available}

- **[REST API](./rest-api/overview)** — 对所有实体（客户、站点、会员资格、付款、产品、域名）执行完整的 CRUD 操作，并使用 API 密钥认证
- **[钩子参考](./hooks/guide)** — 用于生命周期事件和自定义的 200+ 个 action 钩子与 280+ 个 filter 钩子
- **[集成指南](./integration-guide/)** — CRM 集成、分析、自定义网关和 webhooks 示例
- **[代码示例](./code-examples/)** — 动态定价、站点配置、自定义限制和多网关处理的高级模式
- **[附加组件开发](./addon-development/getting-started)** — 用于构建附加组件 plugin 的结构化框架

## 要求 {#requirements}

- WordPress Multisite 安装
- PHP 7.4 或更高版本
- 已激活 Ultimate Multisite plugin

## Composer / Bedrock 安装 {#composer--bedrock-installation}

Ultimate Multisite 可在 [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite) 上以 `ultimate-multisite/ultimate-multisite` 获取。这是基于 [Bedrock](https://roots.io/bedrock/) 的 WordPress 设置以及其他由 Composer 管理的环境的推荐安装方法。

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note 重命名的软件包（v2.6.1+）
Composer 软件包在 v2.6.1 中从 `devstone/ultimate-multisite` 重命名为 `ultimate-multisite/ultimate-multisite`。如果你的 `composer.json` 引用了旧的供应商名称，请更新 require 条目并运行 `composer update`。
:::

安装后，请从 Network Admin 对 plugin 进行网络激活：

```bash
wp plugin activate ultimate-multisite --network
```

或者，如果你通过 Bedrock 的 autoloader 将该 plugin 作为 must-use plugin 加载，请使用 `wp_ultimo_skip_network_active_check` filter 绕过激活保护：

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## 快速开始 {#quick-start}

### 使用 REST API {#use-the-rest-api}

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### 接入事件 {#hook-into-events}

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### 构建附加组件 {#build-an-addon}

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

请查看各个部分以获取详细文档和示例。
