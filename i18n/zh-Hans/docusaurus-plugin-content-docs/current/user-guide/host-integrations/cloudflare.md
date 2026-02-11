---
title: Cloudflare 集成
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Cloudflare 集成

## 概述
Cloudflare 是领先的内容分发网络（CDN）和安全提供商，帮助保护和加速网站。此集成实现了 Ultimate Multisite 与 Cloudflare 之间的自动域名管理，特别适用于子域多站点安装。

## 功能
- 在 Cloudflare 中自动创建子域
- 支持代理子域
- DNS 记录管理
- 在 Ultimate Multisite 管理后台增强 DNS 记录显示

## 要求
以下常量必须在您的 `wp-config.php` 文件中定义：

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## 设置说明

### 1. 获取您的 Cloudflare API 密钥

1. 登录到您的 Cloudflare 仪表盘  
2. 前往 `My Profile`（点击右上角的电子邮件）  
3. 在菜单中选择 `API Tokens`  
4. 创建一个具有以下权限的新 API 令牌：  
   - `Zone.Zone: Read`  
   - `Zone.DNS: Edit`  
5. 复制您的 API 令牌  

### 2. 获取您的区域 ID

1. 在您的 Cloudflare 仪表盘中，选择您想使用的域名  
2. 区域 ID 可在 `Overview` 选项卡的右侧边栏下的 `API` 中看到  
3. 复制区域 ID  

### 3. 将常量添加到 `wp-config.php`

将以下常量添加到您的 `wp-config.php` 文件中：

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. 启用集成

1. 在您的 WordPress 管理后台，转到 `Ultimate Multisite > Settings`  
2. 导航到 `Domain Mapping` 选项卡  
3. 向下滚动到 `Host Integrations`  
4. 启用 Cloudflare 集成  
5. 点击 `Save Changes`  

## 工作原理

### 子域管理

当在子域多站点安装中创建新站点时：

1. 集成向 Cloudflare 的 API 发送请求，为子域添加 CNAME 记录  
2. 子域默认配置为通过 Cloudflare 代理（可通过过滤器更改）  
3. 当站点被删除时，集成将从 Cloudflare 中移除该子域  

### DNS 记录显示

集成通过以下方式增强 Ultimate Multisite 管理后台的 DNS 记录显示：

1. 直接从 Cloudflare 获取 DNS 记录  
2. 显示记录是否被代理  
3. 显示关于 DNS 记录的附加信息  

## 重要说明

根据 Cloudflare 最近的更新，通配符代理现在对所有客户可用。这意味着 Cloudflare 集成对子域多站点安装的重要性已不如以前，因为您可以简单地在 Cloudflare 中设置通配符 DNS 记录。

## 故障排除

### API 连接问题

- 验证您的 API 令牌是否正确且具有必要的权限  
- 检查您的区域 ID 是否正确  
- 确保您的 Cloudflare 帐户具有必要的权限  

### 子域未添加

- 检查 Ultimate Multisite 日志中的任何错误信息  
- 验证子域是否已添加到 Cloudflare  
- 确保您的 Cloudflare 计划支持您创建的 DNS 记录数量  

### 代理问题

- 如果您不想让子域被代理，可以使用 `wu_cloudflare_should_proxy` 过滤器  
- 某些功能在被代理时可能无法正常工作（例如，某些 WordPress 管理功能）  
- 考虑使用 Cloudflare 的 Page Rules 绕过管理员页面的缓存
