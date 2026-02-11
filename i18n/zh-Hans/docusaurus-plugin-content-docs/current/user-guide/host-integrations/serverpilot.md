---
title: ServerPilot 集成
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot 集成

## 概述
ServerPilot 是一个云服务，用于在 DigitalOcean、Amazon、Google 或任何其他服务器提供商的服务器上托管 WordPress 和其他 PHP 网站。此集成实现了 Ultimate Multisite 与 ServerPilot 之间的自动域名同步和 SSL 证书管理。

## 功能
- 自动域名同步
- 使用 Let's Encrypt 的 SSL 证书管理
- 自动 SSL 续期

## 要求
以下常量必须在您的 `wp-config.php` 文件中定义：

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## 设置说明

### 1. 获取您的 ServerPilot API 凭据
1. 登录您的 ServerPilot 仪表盘  
2. 前往 “Account” > “API”  
3. 如果您还没有，请创建一个新的 API 密钥  
4. 复制您的 Client ID 和 API Key  

### 2. 获取您的 App ID
1. 在您的 ServerPilot 仪表盘中，前往 “Apps”  
2. 选择托管您的 WordPress multisite 的应用  
3. App ID 可在 URL 中查看：`https://manage.serverpilot.io/apps/{APP_ID}`  

### 3. 将常量添加到 wp-config.php
将以下常量添加到您的 `wp-config.php` 文件中：

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. 启用集成
1. 在您的 WordPress 管理后台，前往 Ultimate Multisite > Settings  
2. 导航至 “Domain Mapping” 选项卡  
3. 向下滚动至 “Host Integrations”  
4. 启用 ServerPilot 集成  
5. 点击 “Save Changes”

## 工作原理

### 域名同步
当在 Ultimate Multisite 中映射域名时：
1. 集成从 ServerPilot 检索当前域名列表  
2. 将新域名添加到列表中（如适用，还会添加 www 版本）  
3. 通过 API 将更新后的列表发送至 ServerPilot  
4. ServerPilot 为您的应用更新域名列表  

### SSL 证书管理
域名同步后：
1. 集成会为您的应用自动启用 AutoSSL  
2. ServerPilot 使用 Let's Encrypt 处理 SSL 证书的颁发和安装  
3. ServerPilot 还会处理 SSL 证书的自动续期  

## SSL 证书验证
集成已配置为增加 ServerPilot 的 SSL 证书验证尝试次数，因为 ServerPilot 颁发和安装 SSL 证书可能需要一些时间。默认情况下，它会尝试最多 5 次，但可以通过过滤器进行调整。

## 故障排除

### API 连接问题
- 验证您的 Client ID 和 API Key 是否正确  
- 检查您的 App ID 是否正确  
- 确保您的 ServerPilot 账户具有必要的权限  

### SSL 证书问题
ServerPilot 要求域名在颁发 SSL 证书之前具有指向您服务器的有效 DNS 记录  
- 如果 SSL 证书未被颁发，请检查您的域名是否正确指向服务器的 IP 地址  
- ServerPilot 颁发和安装 SSL 证书可能需要一些时间（通常 5-15 分钟）  

### 域名未添加
检查 Ultimate Multisite 日志中的任何错误信息  
- 验证该域名是否已在 ServerPilot 中添加  
- 确保您的 ServerPilot 计划支持您添加的域名数量  

### 域名移除
目前，ServerPilot API 不提供移除单个域名的方法  
- 当在 Ultimate Multisite 中移除域名映射时，集成会更新 ServerPilot 中的域名列表，排除已移除的域名
