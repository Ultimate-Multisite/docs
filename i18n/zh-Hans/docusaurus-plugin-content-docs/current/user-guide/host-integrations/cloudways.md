---
title: Cloudways 集成
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways 集成

## 概述
Cloudways 是一个托管式云主机平台，可让你在 DigitalOcean、AWS、Google Cloud 等各种云服务提供商上部署 WordPress 站点。此集成可在 Ultimate Multisite 与 Cloudways 之间实现自动域名同步和 SSL 证书管理。

## 功能
- 自动域名同步
- SSL 证书管理
- 支持额外域名
- SSL 证书的 DNS 验证

## 要求
必须在你的 `wp-config.php` 文件中定义以下常量：

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

也可以选择定义：

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## 设置说明

### 1. 获取你的 Cloudways API 凭据

1. 登录你的 Cloudways dashboard
2. 前往 "Account" > "API Keys"
3. 如果你还没有 API key，请生成一个
4. 复制你的电子邮件和 API key

### 2. 获取你的服务器和应用程序 ID

1. 在你的 Cloudways dashboard 中，前往 "Servers"
2. 选择托管你的 WordPress 多站点的服务器
3. Server ID 可在 URL 中看到：`https://platform.cloudways.com/server/{SERVER_ID}`
4. 前往 "Applications" 并选择你的 WordPress 应用程序
5. App ID 可在 URL 中看到：`https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. 将常量添加到 wp-config.php

将以下常量添加到你的 `wp-config.php` 文件：

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

如果你有其他应始终保留在 Cloudways 别名列表中的**外部**域名（不在你的多站点网络内）：

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning 不要包含你自己网络的通配符
**不要**将 `*.your-network.com`（或你自己网络的任何子域名模式）添加到
`WU_CLOUDWAYS_EXTRA_DOMAINS`。请参见下方的[重要 — 通配符 SSL 陷阱](#important--wildcard-ssl-pitfall)，
了解为什么这会阻止为每个租户签发 SSL 证书。
:::

### 4. 启用集成

1. 在你的 WordPress 管理后台中，前往 Ultimate Multisite > Settings
2. 导航到 "Domain Mapping" 选项卡
3. 向下滚动到 "Host Integrations"
4. 启用 Cloudways 集成
5. 点击 "Save Changes"

## 工作原理

### 域名同步

当某个域名在 Ultimate Multisite 中映射时：

1. 此集成会检索当前已映射的所有域名
2. 它会将新域名添加到列表中（如果适用，还会添加 www 版本）
3. 它通过 API 将完整列表发送到 Cloudways
4. Cloudways 会更新你的应用程序的域名别名

注意：Cloudways API 要求每次都发送完整的域名列表，而不是仅添加或移除单个域名。

### SSL 证书管理

域名同步后：

1. 此集成会检查哪些域名具有指向你服务器的有效 DNS 记录
2. 它会向 Cloudways 发送请求，为这些域名安装 Let's Encrypt SSL 证书
3. Cloudways 负责 SSL 证书的签发和安装

此集成始终从 Cloudways 请求**标准**（非通配符）Let's Encrypt 证书。如果在 `WU_CLOUDWAYS_EXTRA_DOMAINS` 中提供了通配符模式，则在发起 SSL 请求前会移除开头的 `*.` — 此集成本身绝不会安装通配符。要在 Cloudways 上使用通配符证书，你必须手动安装，但这样做会阻止为已映射的自定义域名单独签发 Let's Encrypt 证书（请参见下方陷阱）。

## 额外域名

`WU_CLOUDWAYS_EXTRA_DOMAINS` 常量允许你指定应始终保留在 Cloudways 应用程序别名列表中的其他**外部**域名。可用于：

- 不由 Ultimate Multisite 管理的外部域名（例如与同一 Cloudways 应用程序共享的独立营销站点）
- 你希望保留在应用程序别名列表中的停放域名或预发布域名

**不要**将此常量用于你自己网络的子域名通配符
（例如 `*.your-network.com`）。请参见下方的通配符 SSL 陷阱。

## 重要 — 通配符 SSL 陷阱

按照 Cloudways 默认设置操作时，一个常见错误是将类似
`*.your-network.com` 的通配符添加到 `WU_CLOUDWAYS_EXTRA_DOMAINS`，或为该通配符手动安装 Cloudways
通配符 SSL 证书。

**如果你这样做，Cloudways 将拒绝为 Ultimate Multisite 映射的每个租户自定义域名签发 Let's Encrypt 证书。** Cloudways 每次都会替换应用程序上的活动 SSL 证书，而应用程序上预先存在的通配符证书会阻止此集成所依赖的按域名 Let's Encrypt 签发。

### Ultimate Multisite 网络的推荐 Cloudways SSL 设置

1. 在 Cloudways 应用程序的 **SSL Certificate** 选项卡中，安装一个**标准
   Let's Encrypt 证书**，仅覆盖 `your-network.com` 和 `www.your-network.com`
   — **不要**使用通配符。
2. **不要**将 `*.your-network.com`（或你自己网络的任何子域名模式）放入
   `WU_CLOUDWAYS_EXTRA_DOMAINS`。该常量仅保留给**外部**域名使用。
3. 仅在 **DNS** 层级创建每个租户的子域名通配符（一个指向你的 Cloudways 服务器 IP 的
   `*.your-network.com` 的 `A` 记录），以便子站点能够解析。随后，单个已映射自定义域名的 SSL
   将由此集成通过 Let's Encrypt 自动签发。

如果你的租户自定义域名卡在没有 SSL 的状态，请检查 Cloudways SSL 选项卡。如果那里启用了
通配符证书，请将其移除，仅为主网络域名重新签发标准 Let's Encrypt
证书，并从
`WU_CLOUDWAYS_EXTRA_DOMAINS` 中移除所有通配符条目。然后重新触发一次域名映射（或等待下一次）
，集成将再次开始为每个域名签发证书。

## 故障排除

### API 连接问题
- 验证你的邮箱和 API key 是否正确
- 检查你的服务器和应用 ID 是否正确
- 确保你的 Cloudways 账户具有必要的权限

### SSL 证书问题
- Cloudways 要求域名在签发 SSL 证书之前，必须有指向你服务器的有效 DNS 记录
- 集成会在请求 SSL 证书之前验证 DNS 记录
- 如果 SSL 证书未被签发，请检查你的域名是否已正确指向你服务器的 IP 地址
- **每个租户的自定义域名卡在没有 SSL 的状态？** 检查 Cloudways 应用的 SSL Certificate 选项卡。如果通配符证书（手动安装，或覆盖 `*.your-network.com`）处于启用状态，Cloudways 将不会为单独映射的自定义域名签发 Let's Encrypt 证书。将其替换为仅覆盖主网络域名（`your-network.com`、`www.your-network.com`）的标准 Let's Encrypt 证书，并从 `WU_CLOUDWAYS_EXTRA_DOMAINS` 中移除所有通配符条目。然后重新触发一次域名映射（或等待下一次），集成将请求每个域名的证书。

### 域名未添加
- 检查 Ultimate Multisite 日志中是否有任何错误消息
- 验证该域名是否尚未添加到 Cloudways
- 确保你的 Cloudways plan 支持你正在添加的域名数量
