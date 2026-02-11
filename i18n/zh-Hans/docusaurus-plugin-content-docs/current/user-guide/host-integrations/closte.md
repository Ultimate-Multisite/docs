---
title: Closte 集成
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte 集成

## 概述
Closte 是一个托管的 WordPress 托管平台，构建在 Google Cloud 基础设施上。此集成实现了 Ultimate Multisite 与 Closte 之间的自动域名同步和 SSL 证书管理。

## 功能
- 自动域名同步
- SSL 证书管理
- 通配符域名支持
- 如果在 Closte 上运行，无需配置

## 要求
如果您正在使用 Closte，则必须在 `wp-config.php` 文件中定义以下常量：

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

如果您在 Closte 上托管，通常已定义此常量。

## 设置说明

### 1. 验证您的 Closte API 密钥
如果您在 Closte 上托管，`CLOSTE_CLIENT_API_KEY` 常量应该已经在您的 `wp-config.php` 文件中定义。您可以通过检查 `wp-config.php` 文件来验证。

### 2. 启用集成
1. 在您的 WordPress 管理后台，转到 Ultimate Multisite > Settings  
2. 导航到 “Domain Mapping” 选项卡  
3. 向下滚动到 “Host Integrations”  
4. 启用 Closte 集成  
5. 点击 “Save Changes”

## 工作原理
当在 Ultimate Multisite 中映射域名时：

1. 集成向 Closte 的 API 发送请求，将域名添加到您的应用程序  
2. Closte 自动处理 SSL 证书颁发  
3. 当域名映射被移除时，集成将从 Closte 中移除该域名  

集成还与 Ultimate Multisite 中的 DNS 检查间隔设置配合使用，允许您配置系统检查 DNS 传播和 SSL 证书颁发的频率。

## 域记录创建
此集成确保在创建或复制站点时，域记录会自动创建。这对于 Closte 集成尤为重要，因为域记录创建会触发 Closte API 创建域名和 SSL 证书。

## 故障排除

### API 连接问题
- 验证您的 Closte API 密钥是否正确  
- 确保您的 Closte 账户具有必要的权限  

### SSL 证书问题
- Closte 可能需要一些时间颁发 SSL 证书（通常 5-10 分钟）  
- 验证您的域名是否正确指向 Closte 服务器的 IP 地址  
- 检查您的域名的 DNS 记录，确保其已正确配置  

### 域名未添加
- 检查 Ultimate Multisite 日志中的任何错误信息  
- 验证该域名是否已添加到 Closte  
- 确保您的域名的 DNS 记录已正确配置  

### DNS 检查间隔
- 如果 SSL 证书颁发时间过长，您可以在 Domain Mapping 设置中调整 DNS 检查间隔  
- 默认间隔为 300 秒（5 分钟），但您可以将其设置为 10 秒，以便在测试期间更快地检查
