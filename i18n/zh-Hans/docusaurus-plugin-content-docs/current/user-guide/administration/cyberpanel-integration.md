---
title: CyberPanel 集成
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel 集成

本指南解释了如何配置 Ultimate Multisite CyberPanel 集成，以便网络中映射的域名能够自动作为 CyberPanel 中的虚拟主机添加（和删除），并可选地通过 Let's Encrypt 自动配置 SSL 证书。

## 功能概述 {#what-it-does}

- 当 Ultimate Multisite 中映射了一个域名时，该集成会调用 CyberPanel API 为该域名创建一个虚拟主机。
- 当移除域名映射时，该集成会调用 API 删除相应的虚拟主机。
- 当启用自动 SSL 时，该集成会在虚拟主机创建后立即触发 Let's Encrypt 证书的签发。
- 根据您在“域名映射”设置中的“自动创建 www 子域名”设置，可选地添加/移除 `www.` 别名。

## 前提条件 {#prerequisites}

- 一个正在运行的 CyberPanel 实例（推荐 v2.3 或更高版本），并且该实例可从您的 WordPress 服务器访问。
- 一个已在 CyberPanel 中运行的现有网站，该网站已经服务于您的 WordPress 网络根目录。该集成会将新的虚拟主机附加到此服务器上。
- 启用 CyberPanel API 访问权限。身份验证使用您的 CyberPanel 管理员用户名和密码。
- 在自动 SSL 签发之前，您用于映射域名的 DNS 记录必须已经指向您的服务器 IP 地址。

## 要求 {#requirements}

您的 `wp-config.php` 文件中必须定义以下常量：

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

可选地，您还可以定义：

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // 默认值：true — 在域名创建后签发 Let's Encrypt SSL
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // 默认值：PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // 用于 SSL 证书联系人
```

## 设置说明 {#setup-instructions}

### 1. 启用 CyberPanel API {#1-enable-the-cyberpanel-api}

1. 以管理员身份登录您的 CyberPanel dashboard。
2. 导航到 **Security** > **SSL**，确认 CyberPanel 界面本身已启用 SSL（这是进行安全 API 调用所必需的）。
3. CyberPanel API 默认可在 `https://your-server-ip:8090/api/` 访问。无需额外步骤启用——对于管理员用户，它默认就是开启的。

### 2. 在 wp-config.php 中添加常量 {#2-add-constants-to-wp-configphp}

请将以下常量添加到 `wp-config.php` 文件的 `/* That's all, stop editing! */` 行之前：

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

要启用自动 SSL（推荐）：

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. 启用集成 {#3-enable-the-integration}

1. 在您的 WordPress network admin 中，转到 **Ultimate Multisite** > **Settings**。
2. 导航到 **Domain Mapping** 选项卡。
3. 向下滚动到 **Host Integrations**。
4. 启用 **CyberPanel** 集成。
5. 点击 **Save Changes**。

### 4. 验证连接性 {#4-verify-connectivity}

使用设置向导中的内置连接测试：

1. 转到 **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**。
2. 点击 **Test Connection**。
3. 成功消息确认了插件可以连接到 CyberPanel API 并正确进行身份验证。

## 工作原理 {#how-it-works}

### 域名映射 {#domain-mapping}

当 Ultimate Multisite 中映射一个域名时：

1. 集成向您的 CyberPanel host 的 `/api/createWebsite` 发送一个 `POST` 请求。
2. CyberPanel 在配置的套餐下为该域名创建了一个新的虚拟主机。
3. 文档根目录被设置为指向您的 WordPress 网络根目录。
4. 当移除域名映射时，集成调用 `/api/deleteWebsite` 来清理虚拟主机。

### 自动 SSL {#auto-ssl}

当 `WU_CYBERPANEL_AUTO_SSL` 为 `true` 时：

1. 在虚拟主机创建后，集成会为该域名调用 `/api/issueSSL`。
2. CyberPanel 使用 ACME HTTP-01 challenge 请求 Let's Encrypt 证书。
3. CyberPanel 会在证书到期前自动续期证书。

> **重要提示：** Let's Encrypt 必须在 DNS 完全传播到您的服务器 IP 地址之后才能验证域名。如果 SSL 签发在映射后立即失败，请等待 DNS 传播，并在 CyberPanel dashboard 的 **SSL** > **Manage SSL** 下重新触发 SSL。

### www 子域名 {#www-subdomain}

如果您的 Domain Mapping 设置中启用了 **Auto-create www subdomain**，该集成还会为 `www.<domain>` 创建一个虚拟主机别名，并且当自动 SSL 开启时，会签发覆盖主域名和 www 两种变体的证书。

### 邮件转发器 {#email-forwarders}

当 [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) 插件激活时，CyberPanel 还可以提供客户邮件转发器。转发器可以将来自域名的消息路由到另一个收件箱，而无需创建完整的邮箱，这对于像 `info@customer-domain.test` 或 `support@customer-domain.test` 这样的别名非常有用。

在为客户启用转发器之前：

1. 确认上述 CyberPanel 常量已配置并且连接测试通过。
2. 在 Emails 插件设置中启用 CyberPanel 邮件提供商。
3. 确认客户域名已在 CyberPanel 中存在，然后再创建转发器。
4. 在生产计划上提供此功能前，先创建一个测试转发器并通过它发送一条消息。

如果转发器创建失败，请首先检查 Ultimate Multisite 的活动日志，然后确认 CyberPanel 中源域名是否存在，并且 API 用户具有邮件管理权限。

## 配置参考 {#configuration-reference}

| Constant | Required | Default | Description |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Yes | — | CyberPanel 实例的完整 URL，包括端口，例如 `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Yes | — | CyberPanel 管理员用户名 |
| `WU_CYBERPANEL_PASSWORD` | Yes | — | CyberPanel 管理员密码 |
| `WU_CYBERPANEL_PACKAGE` | Yes | `Default` | 分配给新虚拟主机的 CyberPanel 托管套餐 |
| `WU_CYBERPANEL_AUTO_SSL` | No | `true` | 在域名创建后签发 Let's Encrypt SSL 证书 |
| `WU_CYBERPANEL_PHP_VERSION` | No | `PHP 8.2` | 新虚拟主机的 PHP 版本（必须与 CyberPanel 中已安装的版本匹配） |
| `WU_CYBERPANEL_EMAIL` | No | — | SSL 证书注册的联系邮箱 |

## 重要注意事项 {#important-notes}

- CyberPanel 的 API 使用基于会话的 Token 认证。该集成会在每次 API 调用时自动处理 Token 的获取。
- 您的 CyberPanel 管理员账户必须具有创建和删除网站的权限。
- CyberPanel 默认运行在 `8090` 端口。如果您的服务器使用了防火墙，请确保该端口可以从 WordPress 应用服务器访问。
- 该集成不管理 DNS 记录。您必须在 Ultimate Multisite 中映射域名之前，将域名的 DNS 指向您的服务器 IP 地址。
- 如果您使用 OpenLiteSpeed (OLS)，虚拟主机更改后会自动触发优雅重启。无需手动干预。

## 故障排除 {#troubleshooting}

### API 连接被拒绝 {#api-connection-refused}

- 验证服务器防火墙是否开放了 `8090` 端口。
- 确认 `WU_CYBERPANEL_HOST` 的值是否包含了正确的协议（`https://`）和端口。
- 检查您的 CyberPanel SSL 证书是否有效；自签名证书可能会导致 TLS 验证失败。仅在受信任的私有网络环境中设置 `WU_CYBERPANEL_VERIFY_SSL` 为 `false`。

### 身份验证错误 {#authentication-errors}

- 通过直接登录 CyberPanel 确认您的 `WU_CYBERPANEL_USERNAME` 和 `WU_CYBERPANEL_PASSWORD` 是否正确。
- CyberPanel 在多次登录失败尝试后会锁定账户。如果发生锁定，请检查 CyberPanel 中的 **Security** > **Brute Force Monitor**。

### 域名未创建 {#domain-not-created}

- 检查 Ultimate Multisite 的活动日志（**Ultimate Multisite** > **Activity Logs**）以查找 API 错误消息。
- 验证 `WU_CYBERPANEL_PACKAGE` 中定义的套餐是否存在于 CyberPanel (**Packages** > **List Packages**)。
- 确保该域名尚未在 CyberPanel 中注册为网站——重复创建网站会返回错误。

### SSL 证书未签发 {#ssl-certificate-not-issued}

- 确认 DNS 已完全传播：`dig +short your-domain.com` 应该返回您的服务器 IP。
- Let's Encrypt 会强制执行速率限制。如果您最近为同一域名签发了多个证书，请等待后再重试。
- 检查 CyberPanel 的 SSL 日志（**Logs** > **Error Logs**）以获取证书签发失败的详细信息。
- 作为备用方案，您可以从 CyberPanel 手动签发 SSL：**SSL** > **Manage SSL** > 选择域名 > **Issue SSL**。

## 参考资料 {#references}

- CyberPanel API 文档：https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL 管理：https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt 速率限制：https://letsencrypt.org/docs/rate-limits/
