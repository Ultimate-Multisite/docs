---
title: 开发者文档
sidebar_position: 1
_i18n_hash: 6443e353aea8cf7592387aa5d9658951
---
# 开发者文档

本指南为开发者提供了与 Ultimate Multisite 集成、扩展或开发插件所需的一切。Ultimate Multisite 将 WordPress Multisite 网络转变为 Website-as-a-Service（WaaS）平台。

## 可用内容

- **[REST API](./rest-api/overview)** — 为所有实体（客户、站点、会员、支付、产品、域名）提供完整的 CRUD 操作，并使用 API 密钥身份验证
- **[Hooks Reference](./hooks/guide)** — 200+ 个动作钩子和 280+ 个过滤钩子，用于生命周期事件和自定义
- **[Integration Guide](./integration-guide/)** — CRM 集成、分析、自定义网关和 Webhook 的示例
- **[Code Examples](./code-examples/)** — 动态定价、站点配置、自定义限制和多网关处理的高级模式
- **[Addon Development](./addon-development/getting-started)** — 构建插件的结构化框架

## 要求

- WordPress Multisite 安装
- PHP 7.4 或更高版本
- 已激活 Ultimate Multisite 插件

## 快速开始

### 使用 REST API

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### 绑定事件

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### 构建插件

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

请查看每个章节以获取详细文档和示例。
