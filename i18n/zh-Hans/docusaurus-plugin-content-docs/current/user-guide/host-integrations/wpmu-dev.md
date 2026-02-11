---
title: WPMU DEV 集成
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# WPMU DEV 集成

## 概述
WPMU DEV 是一个全面的 WordPress 平台，提供托管、插件和 WordPress 站点的服务。此集成实现了 Ultimate Multisite 与 WPMU DEV 托管之间的自动域名同步和 SSL 证书管理。

## 功能
- 自动域名同步
- SSL 证书管理
- 扩展 SSL 证书验证尝试

## 要求
集成会自动检测您是否托管在 WPMU DEV，并使用内置 API。若托管在 WPMU DEV，则无需额外配置。  
集成会检查 `WPMUDEV_HOSTING_SITE_ID` 常量的存在，该常量在托管于 WPMU DEV 时会自动定义。

## 设置说明

### 1. 验证 WPMU DEV 托管

如果您托管在 WPMU DEV，所需的常量应已定义。请确认：

1. 您的环境中已定义 `WPMUDEV_HOSTING_SITE_ID` 常量  
2. 您拥有具有 API 访问权限的有效 WPMUDEV 会员资格

### 2. 启用集成

1. 在您的 WordPress 管理后台，进入 **Ultimate Multisite > Settings**  
2. 导航到 “Domain Mapping” 选项卡  
3. 向下滚动至 “Host Integrations”  
4. 启用 WPMU DEV 集成  
5. 点击 “Save Changes”

## 工作原理

### 域名同步

当在 Ultimate Multisite 中映射域名时：

1. 集成使用 WPMU DEV API 将域名添加到您的托管账户  
2. 它还会自动添加域名的 www 版本  
3. WPMU DEV 负责域名配置和 SSL 证书颁发

### SSL 证书管理

集成已配置为增加 WPMU DEV 托管的 SSL 证书验证尝试次数，因为 SSL 证书的颁发和安装可能需要一些时间。默认情况下，它会尝试最多 10 次进行 SSL 证书验证，而标准尝试次数为 5 次。

## 重要说明

### 域名移除

目前，WPMU DEV API 不提供移除域名的方法。当在 Ultimate Multisite 中移除域名映射时，该域名将保留在您的 WPMU DEV 托管账户中。如有必要，您需要手动从 WPMU DEV 托管仪表盘中移除它。

### API 认证

集成使用存储在 WordPress 数据库中的 `wpmudev_apikey` 选项作为 WPMU DEV API 密钥。当您将站点连接到 WPMU DEV 时，该密钥会自动设置。

## 故障排除

### API 连接问题
- 确认您的站点已正确连接到 WPMU DEV  
- 检查 WordPress 数据库中是否已设置 `wpmudev_apikey` 选项  
- 确保您的 WPMU DEV 会员资格已激活  

### SSL 证书问题
- WPMU DEV 可能需要一些时间来颁发 SSL 证书（通常 5-15 分钟）  
- 集成已配置为最多检查 10 次 SSL 证书  
- 如果多次尝试后 SSL 证书仍未颁发，请联系 WPMU DEV 支持  

### 域名未添加
- 检查 Ultimate Multisite 日志中的任何错误信息  
- 确认该域名尚未添加到 WPMU DEV  
- 确保您的 WPMU DEV 托管计划支持您添加的域名数量
