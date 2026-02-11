---
title: cPanel 集成
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel 集成

## 概述
cPanel 是许多共享和专用托管提供商使用的最受欢迎的网络托管控制面板之一。本集成实现了 Ultimate Multisite 与 cPanel 之间的自动域同步，使您能够自动将域别名和子域添加到您的 cPanel 帐户。

## 功能
- 在 cPanel 中自动创建附加域
- 在 cPanel 中自动创建子域（用于子域多站点安装）
- 在映射被删除时移除域

## 要求
以下常量必须在您的 `wp-config.php` 文件中定义：

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

可选地，您还可以定义：

```php
define('WU_CPANEL_PORT', 2083); // Default is 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default is /public_html
```

## 设置说明

### 1. 获取您的 cPanel 凭据
1. 从您的托管提供商获取您的 cPanel 用户名和密码  
2. 确定您的 cPanel 主机（通常为 `cpanel.yourdomain.com` 或 `yourdomain.com:2083`）

### 2. 将常量添加到 wp-config.php
将以下常量添加到您的 `wp-config.php` 文件中：

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

可选地，您可以自定义端口和根目录：

```php
define('WU_CPANEL_PORT', 2083); // Change if your cPanel uses a different port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Change if your document root is different
```

### 3. 启用集成
1. 在您的 WordPress 管理后台，转到 Ultimate Multisite > Settings  
2. 导航到 “Domain Mapping” 选项卡  
3. 向下滚动到 “Host Integrations”  
4. 启用 cPanel 集成  
5. 点击 “Save Changes”

## 工作原理

### 附加域
当在 Ultimate Multisite 中映射域时：  
1. 集成向 cPanel 的 API 发送请求，将域添加为附加域  
2. 该域被配置为指向您的根目录  
3. 当域映射被移除时，集成将从 cPanel 移除该附加域

### 子域
对于子域多站点安装，当创建新站点时：  
1. 集成从完整域名中提取子域部分  
2. 它向 cPanel 的 API 发送请求以添加子域  
3. 子域被配置为指向您的根目录

## 重要说明
- 集成使用 cPanel 的 API2 与您的 cPanel 帐户通信  
- 您的 cPanel 帐户必须具有添加附加域和子域的权限  
- 某些托管提供商可能限制您可以创建的附加域或子域数量  
- 集成不处理 DNS 配置；您仍需将域指向服务器的 IP 地址  

## 故障排除

### API 连接问题
- 验证您的 cPanel 用户名和密码是否正确  
- 检查您的 cPanel 主机是否正确且可访问  
- 确保您的 cPanel 帐户具有必要的权限  
- 尝试使用完整的主机 URL（例如 `https://cpanel.yourdomain.com`）  

### 域未添加
- 检查 Ultimate Multisite 日志中的任何错误信息  
- 验证该域是否已在 cPanel 中添加  
- 确保您的 cPanel 帐户未达到附加域或子域的限制  

### SSL 证书问题
- 集成不处理 SSL 证书颁发  
- 您需要使用 cPanel 的 SSL/TLS 工具或 AutoSSL 功能为您的域颁发 SSL 证书  
- 或者，您可以使用类似 Let's Encrypt 的服务与 cPanel 的 AutoSSL
