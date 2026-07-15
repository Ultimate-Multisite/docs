---
title: Cloudflare 集成
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare 集成

## 概述 {#overview}
Cloudflare 是领先的内容分发网络（CDN）和安全提供商，可帮助保护并加速网站。此集成可在 Ultimate Multisite 和 Cloudflare 之间实现自动域名管理，尤其适用于子域名多站点安装。

## 功能 {#features}
- 在 Cloudflare 中自动创建子域名
- 支持代理子域名
- DNS 记录管理
- 在 Ultimate Multisite 管理后台增强 DNS 记录显示

## 要求 {#requirements}
必须在你的 `wp-config.php` 文件中定义以下常量：

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## 设置说明 {#setup-instructions}

### 1. 获取你的 Cloudflare API 密钥 {#1-get-your-cloudflare-api-key}

1. 登录你的 Cloudflare 仪表盘
2. 前往“我的个人资料”（点击右上角的邮箱）
3. 从菜单中选择“API 令牌”
4. 创建一个具有以下权限的新 API 令牌：
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. 复制你的 API 令牌

### 2. 获取你的 Zone ID {#2-get-your-zone-id}

1. 在你的 Cloudflare 仪表盘中，选择你要使用的域名
2. Zone ID 可在“概览”选项卡中查看，位于右侧边栏“API”下方
3. 复制 Zone ID

### 3. 将常量添加到 wp-config.php {#3-add-constants-to-wp-configphp}

将以下常量添加到你的 `wp-config.php` 文件中：

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. 启用集成 {#4-enable-the-integration}

1. 在你的 WordPress 管理后台中，前往 Ultimate Multisite > 设置
2. 导航到“域名映射”选项卡
3. 向下滚动到“主机集成”
4. 启用 Cloudflare 集成
5. 点击“保存更改”

## 工作原理 {#how-it-works}

### 子域名管理 {#subdomain-management}

当在子域名多站点安装中创建新站点时：

1. 该集成会向 Cloudflare 的 API 发送请求，为子域名添加一条 CNAME 记录
2. 默认情况下，子域名会配置为通过 Cloudflare 代理（这可以通过过滤器更改）
3. 当站点被删除时，该集成会从 Cloudflare 移除该子域名

### DNS 记录显示 {#dns-record-display}

该集成通过以下方式增强 Ultimate Multisite 管理后台中的 DNS 记录显示：

1. 直接从 Cloudflare 获取 DNS 记录
2. 显示记录是否被代理
3. 显示有关 DNS 记录的其他信息

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames**（以前称为“Cloudflare for SaaS”）是 Cloudflare 的一项功能，允许你的客户在你的多站点网络上使用自己的域名并启用 SSL。对于使用 Cloudflare 的域名映射多站点安装，这是推荐的方法，因为 Cloudflare 会为每个自定义域名自动管理 SSL 证书的签发和续期。

### 它与标准 Cloudflare 集成的区别 {#how-it-differs-from-the-standard-cloudflare-integration}

| | 标准集成 | Cloudflare Custom Hostnames |
|---|---|---|
| **用途** | 自动为子域名创建 DNS 记录 | 使用 Cloudflare 管理的 SSL 启用自定义（映射）域名 |
| **最适合** | 子域名多站点 | 域名映射多站点 |
| **SSL** | 单独处理 | 由 Cloudflare 自动管理 |

### 设置 Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. 在你的 Cloudflare 仪表盘中，打开主域名的区域。
2. 前往 **SSL/TLS > Custom Hostnames**。
3. 添加一个指向你的服务器 IP 或主机名的备用源站。
4. 对于在 Ultimate Multisite 中映射的每个客户域名，在 Cloudflare 中添加一个 Custom Hostname 条目。你可以使用 Cloudflare API 自动执行此步骤。
5. 一旦客户的 DNS 指向你的网络，Cloudflare 就会自动为每个自定义主机名签发并续期 TLS 证书。

完整 API 参考请参阅 [Cloudflare Custom Hostnames 文档](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/)。

:::note 术语更新
自 Ultimate Multisite v2.6.1 起，此功能在所有 plugin 设置和标签中都称为 **Cloudflare Custom Hostnames**。早期版本使用名称“Cloudflare for SaaS”，这是底层 Cloudflare 产品名称。
:::

## 重要说明 {#important-notes}

根据 Cloudflare 最近的更新，所有客户现在都可以使用通配符代理。这意味着标准 Cloudflare DNS 集成对于子域名多站点安装的重要性已不如以往，因为你可以直接在 Cloudflare 中设置一条通配符 DNS 记录。

## 故障排查 {#troubleshooting}

### API 连接问题 {#api-connection-issues}
- 验证你的 API 令牌是否正确，并且是否具有必要权限
- 检查你的 Zone ID 是否正确
- 确保你的 Cloudflare account 具有必要权限

### 子域名未添加 {#subdomain-not-added}
- 查看 Ultimate Multisite 日志中是否有任何错误消息
- 验证该子域名是否尚未添加到 Cloudflare
- 确保你的 Cloudflare 方案支持你正在创建的 DNS 记录数量

### 代理问题 {#proxying-issues}
- 如果你不希望子域名被代理，可以使用 `wu_cloudflare_should_proxy` 过滤器
- 某些功能在被代理时可能无法正常工作（例如，某些 WordPress 管理后台功能）
- 考虑使用 Cloudflare 的 Page Rules 为管理后台页面绕过缓存
