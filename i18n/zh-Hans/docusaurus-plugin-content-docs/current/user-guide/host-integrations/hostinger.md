---
title: Hostinger (hPanel) 集成
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Hostinger (hPanel) 集成

## 概述

Hostinger 是一款流行的网站托管服务商，其控制面板名为 hPanel。Ultimate Multisite Hostinger 集成功能允许 Ultimate Multisite 与 Hostinger 的 hPanel 之间自动同步域名，让您可以直接在 WordPress 管理后台自动管理域名映射和子域名。

## 功能特性

- 在 hPanel 中自动创建附加域名（addon domain）
- 在 hPanel 中自动创建子域名（适用于子域名多站点安装）
- 删除映射时自动移除域名
- 与 hPanel 的域名管理 API 无缝集成

## 要求

要使用 Hostinger 集成，您需要：

1. 一个具有 hPanel 访问权限的 Hostinger 账户
2. 一个来自 Hostinger 的 API token
3. 在您的 `wp-config.php` 文件中定义以下常量：

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

可选地，您还可以定义：

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // 默认 API 端点
```

## 设置说明

### 1. 生成您的 Hostinger API Token

1. 登录您的 Hostinger 账户并访问 hPanel
2. 导航到 **Account Settings** → **API Tokens**
3. 点击 **Create New Token**
4. 为您的 token 设置一个描述性的名称（例如：“Ultimate Multisite”）
5. 选择必要的权限：
   - 域名管理
   - 子域名管理
6. 复制生成的 token 并妥善保管

### 2. 查找您的账户 ID

1. 在 hPanel 中，转到 **Account Settings** → **Account Information**
2. 您的账户 ID 会显示在该页面上
3. 复制并保存此 ID 以用于下一步操作

### 3. 将常量添加到 wp-config.php

将以下常量添加到您的 `wp-config.php` 文件中：

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

如果您的 Hostinger 账户使用了不同的 API 端点，您可以进行自定义：

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. 启用集成

1. 在您的 WordPress 管理后台，转到 **Ultimate Multisite > Settings**
2. 导航到 **Domain Mapping** 标签页
3. 向下滚动到 **Host Integrations**
4. 启用 **Hostinger (hPanel)** 集成
5. 点击 **Save Changes**

## 工作原理

### 附加域名（Addon Domains）

当您在 Ultimate Multisite 中映射一个域名时：

1. 集成会向 Hostinger 的 API 发送请求，将该域名添加为附加域名。
2. 该域名将被配置指向您的根目录。
3. 当删除域名映射时，集成会自动从 hPanel 中移除附加域名。

### 子域名（Subdomains）

对于子域名多站点安装，当创建新站点时：

1. 集成会从完整域名中提取子域名部分。
2. 它会向 Hostinger 的 API 发送请求，添加该子域名。
3. 该子域名将被配置指向您的根目录。

## 重要注意事项

- 该集成使用 Hostinger 的 REST API 与您的账户进行通信。
- 您的 API token 必须拥有管理域名和子域名所需的必要权限。
- 该集成不处理 DNS 配置；域名必须已经指向您的 Hostinger 账户。
- API 请求通过安全的 HTTPS 进行。
- 请妥善保管您的 API token，切勿公开发布。

## 故障排除

### API 连接问题

- 验证您的 API token 是否正确且未过期。
- 检查您的账户 ID 是否正确。
- 确保您的 API token 拥有管理域名所需的必要权限。
- 验证您的 Hostinger 账户是否处于活跃且良好的状态。

### 域名未添加

- 检查 Ultimate Multisite 的日志，查看是否有任何错误消息。
- 验证该域名是否尚未添加到您的 Hostinger 账户中。
- 确保您的 Hostinger 账户尚未达到附加域名的限制。
- 确认该域名是否已正确指向您的 Hostinger 名称服务器。

### SSL 证书问题

- 该集成不处理 SSL 证书的签发。
- Hostinger 通常通过 AutoSSL 提供免费 SSL 证书。
- 您可以直接在 hPanel 的 **SSL/TLS** 下管理 SSL 证书。
- 或者，使用 Let's Encrypt 并结合 Hostinger 的 AutoSSL 功能。

## 支持

如需了解 Hostinger 集成的更多帮助，请参阅：

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/docs)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
