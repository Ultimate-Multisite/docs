---
title: RunCloud 集成
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud 集成

## 概述
RunCloud 是一个基于云的服务器管理平台，允许您轻松在自己的云服务器上部署和管理 Web 应用程序。此集成实现了 Ultimate Multisite 与 RunCloud 之间的自动域名同步和 SSL 证书管理。

## 功能
- 自动域名同步
- SSL 证书管理
- 删除映射时移除域名

## 要求
以下常量必须在您的 `wp-config.php` 文件中定义：

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## 设置说明

### 1. 获取您的 RunCloud API 凭证

1. 登录您的 RunCloud 仪表盘  
2. 前往“用户资料”（点击右上角的个人头像）  
3. 在菜单中选择“API”  
4. 如果您还没有，请点击“生成 API Key”  
5. 复制您的 API Key 和 API Secret  

### 2. 获取您的服务器和应用 ID

1. 在您的 RunCloud 仪表盘中，前往“服务器”  
2. 选择托管您的 WordPress 多站点的服务器  
3. 服务器 ID 可在 URL 中查看：`https://manage.runcloud.io/servers/{SERVER_ID}`  
4. 前往“Web 应用程序”，并选择您的 WordPress 应用  
5. 应用 ID 可在 URL 中查看：`https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`  

### 3. 将常量添加到 wp-config.php

将以下常量添加到您的 `wp-config.php` 文件中：

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. 启用集成

1. 在您的 WordPress 管理后台，前往 Ultimate Multisite > 设置  
2. 导航至“域名映射”选项卡  
3. 向下滚动至“主机集成”  
4. 启用 RunCloud 集成  
5. 点击“保存更改”

## 工作原理

当在 Ultimate Multisite 中映射域名时：

1. 集成会向 RunCloud 的 API 发送请求，将域名添加到您的应用  
2. 如果域名成功添加，集成还会重新部署 SSL 证书  
3. 当域名映射被移除时，集成会从 RunCloud 中移除该域名  

对于子域名安装，集成将在向网络添加新站点时自动在 RunCloud 中创建子域名。

## 故障排除

### API 连接问题
- 验证您的 API 凭证是否正确  
- 检查您的服务器和应用 ID 是否正确  
- 确保您的 RunCloud 账户具有必要的权限  

### SSL 证书问题
- RunCloud 可能需要一些时间来颁发 SSL 证书  
- 验证您的域名是否正确指向服务器的 IP 地址  
- 检查您应用的 RunCloud SSL 设置  

### 域名未添加
- 检查 Ultimate Multisite 日志中的任何错误信息  
- 验证该域名是否已在 RunCloud 中添加  
- 确保您的 RunCloud 计划支持多个域名
