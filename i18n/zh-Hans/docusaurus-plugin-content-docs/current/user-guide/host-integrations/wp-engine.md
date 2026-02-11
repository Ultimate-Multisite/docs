---
title: WP Engine 集成
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine 集成

## 概述
WP Engine 是一个高级托管 WordPress 主机平台，为 WordPress 网站提供优化的性能、安全性和可扩展性。此集成可实现 Ultimate Multisite 与 WP Engine 之间的自动域名同步。

## 功能
- 自动域名同步
- 多站点安装的子域名支持
- 与 WP Engine 现有系统无缝集成

## 要求
集成会自动检测您是否托管在 WP Engine 上，并使用内置的 WP Engine API。若 WP Engine 插件已激活且配置正确，则无需额外配置。

然而，如果您需要手动配置集成，可以在 `wp-config.php` 文件中定义以下常量之一：

```php
define('WPE_APIKEY', 'your_api_key'); // Preferred method
// OR
define('WPE_API', 'your_api_key'); // Alternative method
```

### 1. 验证 WP Engine 插件
如果您托管在 WP Engine 上，WP Engine 插件应已安装并激活。请验证：

1. WP Engine 插件已激活
2. 文件 `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` 存在

### 2. 启用集成
1. 在您的 WordPress 管理后台，转到 Ultimate Multisite > Settings
2. 导航到 “Domain Mapping” 选项卡
3. 向下滚动到 “Host Integrations”
4. 启用 WP Engine 集成
5. 点击 “Save Changes”

## 工作原理

### 域名同步
当在 Ultimate Multisite 中映射域名时：

1. 集成使用 WP Engine API 将域名添加到您的 WP Engine 安装中
2. WP Engine 处理域名配置和 SSL 证书颁发
3. 当域名映射被移除时，集成将从 WP Engine 中移除该域名

### 子域名支持
对于子域名多站点安装：

1. 当创建新站点时，集成会将每个子域名添加到 WP Engine
2. WP Engine 处理子域名配置
3. 当站点被删除时，集成将从 WP Engine 中移除该子域名

## 重要说明

### 通配符域名
对于子域名多站点安装，建议联系 WP Engine 支持请求通配符域名配置。这将使所有子域名自动工作，无需逐个添加。

### SSL 证书
WP Engine 会自动处理通过此集成添加的所有域名的 SSL 证书颁发和续订。无需额外配置。

## 故障排除

### API 连接问题
- 验证 WP Engine 插件已激活且配置正确
- 如果您手动定义了 API 密钥，请检查其是否正确
- 如遇 API 问题，请联系 WP Engine 支持

### 域名未添加
- 检查 Ultimate Multisite 日志中的任何错误信息
- 验证该域名尚未添加到 WP Engine
- 确保您的 WP Engine 计划支持您添加的域名数量

### 子域名问题
- 如果子域名无法工作，请联系 WP Engine 支持请求通配符域名配置
- 验证您的 DNS 设置已正确配置主域名和子域名
