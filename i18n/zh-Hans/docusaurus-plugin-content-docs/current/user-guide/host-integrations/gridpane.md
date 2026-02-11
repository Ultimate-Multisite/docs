---
title: GridPane 集成
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane 集成

## 概述
GridPane 是一个专为严肃的 WordPress 专业人士打造的专用 WordPress 托管控制面板。此集成实现了 Ultimate Multisite 与 GridPane 之间的自动域名同步和 SSL 证书管理。

## 功能
- 自动域名同步
- SSL 证书管理
- 自动配置 SUNRISE 常量

## 要求
以下常量必须在您的 `wp-config.php` 文件中定义：

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## 设置说明

### 1. 获取您的 GridPane API 凭证

1. 登录您的 GridPane 仪表盘  
2. 前往 "Settings" > "API"  
3. 如果您还没有，请生成一个 API 密钥  
4. 复制您的 API 密钥  

### 2. 获取您的服务器和站点 ID

1. 在您的 GridPane 仪表盘中，前往 "Servers"  
2. 选择托管您的 WordPress 多站点的服务器  
3. 记录服务器 ID（可在 URL 或服务器详情页中查看）  
4. 前往 "Sites" 并选择您的 WordPress 站点  
5. 记录站点 ID（可在 URL 或站点详情页中查看）  

### 3. 将常量添加到 wp-config.php

将以下常量添加到您的 `wp-config.php` 文件中：

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. 启用集成

1. 在您的 WordPress 管理后台，前往 Ultimate Multisite > Settings  
2. 导航至 "Domain Mapping" 选项卡  
3. 向下滚动至 "Host Integrations"  
4. 启用 GridPane 集成  
5. 点击 "Save Changes"  

## 工作原理

当在 Ultimate Multisite 中映射域名时：

1. 集成向 GridPane 的 API 发送请求，将域名添加到您的站点  
2. GridPane 自动处理 SSL 证书颁发  
3. 当域名映射被移除时，集成将从 GridPane 中移除该域名  

集成还会自动处理 wp-config.php 文件中的 SUNRISE 常量，这是域名映射正常工作的必要条件。

## SUNRISE 常量管理

GridPane 集成的一个独特功能是它会自动恢复 wp-config.php 中的 SUNRISE 常量，以防止与 GridPane 自己的域名映射系统冲突。这确保了两个系统能够无缝协同工作。

## 故障排除

### API 连接问题
- 确认您的 API 密钥是否正确  
- 检查您的服务器和站点 ID 是否正确  
- 确保您的 GridPane 账户拥有必要的权限  

### SSL 证书问题
- GridPane 可能需要一些时间来颁发 SSL 证书  
- 确认您的域名已正确指向服务器的 IP 地址  
- 检查您站点的 GridPane SSL 设置  

### 域名未添加
- 检查 Ultimate Multisite 日志中的任何错误信息  
- 确认该域名尚未添加到 GridPane  
- 确保您的域名 DNS 记录已正确配置
