---
title: Cloudways 集成
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Cloudways 集成

## 概述
Cloudways 是一个托管云托管平台，允许您在各种云提供商（如 DigitalOcean、AWS、Google Cloud 等）上部署 WordPress 网站。此集成实现了 Ultimate Multisite 与 Cloudways 之间的自动域名同步和 SSL 证书管理。

## 功能
- 自动域名同步
- SSL 证书管理
- 支持额外域名
- SSL 证书的 DNS 验证

## 要求
以下常量必须在您的 `wp-config.php` 文件中定义：

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

可选地，您还可以定义：

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## 设置说明

### 1. 获取您的 Cloudways API 凭证

1. 登录您的 Cloudways 仪表盘  
2. 前往 "Account" > "API Keys"  
3. 如果您还没有，请生成一个 API 密钥  
4. 复制您的电子邮件和 API 密钥  

### 2. 获取您的服务器和应用程序 ID

1. 在您的 Cloudways 仪表盘中，前往 "Servers"  
2. 选择托管您的 WordPress 多站点的服务器  
3. 服务器 ID 可在 URL 中看到：`https://platform.cloudways.com/server/{SERVER_ID}`  
4. 前往 "Applications" 并选择您的 WordPress 应用  
5. App ID 可在 URL 中看到：`https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`  

### 3. 将常量添加到 wp-config.php

将以下常量添加到您的 `wp-config.php` 文件中：

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

如果您有始终需要包含的额外域名：

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. 启用集成

1. 在您的 WordPress 管理后台，前往 Ultimate Multisite > Settings  
2. 导航到 "Domain Mapping" 选项卡  
3. 向下滚动到 "Host Integrations"  
4. 启用 Cloudways 集成  
5. 点击 "Save Changes"

## 工作原理

### 域名同步

当在 Ultimate Multisite 中映射域名时：

1. 集成检索所有当前已映射的域名  
2. 它将新域名添加到列表中（如适用，还会添加 www 版本）  
3. 它通过 API 将完整列表发送给 Cloudways  
4. Cloudways 为您的应用更新域名别名  

注意：Cloudways API 要求每次发送完整的域名列表，而不是仅添加或删除单个域名。

### SSL 证书管理

域名同步后：

1. 集成检查哪些域名具有指向您服务器的有效 DNS 记录  
2. 它向 Cloudways 发送请求，为这些域名安装 Let's Encrypt SSL 证书  
3. Cloudways 处理 SSL 证书的颁发和安装  

## 额外域名

常量 `WU_CLOUDWAYS_EXTRA_DOMAINS` 允许您指定在与 Cloudways 同步时始终包含的额外域名。这在以下情况下很有用：

- 未由 Ultimate Multisite 管理的域名  
- 通配符域名（例如 `*.example.com`）  
- 开发或预发布域名  

## 故障排除

### API 连接问题

- 验证您的电子邮件和 API 密钥是否正确  
- 检查您的服务器和应用程序 ID 是否正确  
- 确保您的 Cloudways 账户具有必要的权限  

### SSL 证书问题

Cloudways 要求域名在颁发 SSL 证书之前具有指向您服务器的有效 DNS 记录。  
集成在请求 SSL 证书之前验证 DNS 记录。  
如果 SSL 证书未被颁发，请检查您的域名是否正确指向服务器的 IP 地址。  

### 域名未添加

- 检查 Ultimate Multisite 日志中的任何错误信息  
- 验证该域名是否已添加到 Cloudways  
- 确保您的 Cloudways 方案支持您添加的域名数量
