---
title: 增强控制面板集成
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Enhance 控制面板集成

## 概述
Enhance 是一个现代化的控制面板，提供强大的托管自动化和管理功能。本集成实现了 Ultimate Multisite 与 Enhance 控制面板之间的自动域名同步和 SSL 证书管理。

**相关讨论：** 参见 [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) 获取社区提示和更多信息。

## 功能
- 在 Ultimate Multisite 中映射域名时自动同步域名
- 当 DNS 解析时，使用 LetsEncrypt 自动提供 SSL 证书
- 支持在子域模式下运行的网络的子域
- 删除映射时移除域名
- 连接测试以验证 API 凭证

## 需求

### 系统需求
- 已安装并可访问 Enhance 控制面板
- WordPress Multisite 安装托管在或连接到 Enhance 服务器
- Apache Web 服务器（Enhance 当前支持 Apache 配置；LiteSpeed Enterprise 可按折扣价提供）

### API 访问
您必须拥有 Enhance 控制面板的管理员访问权限才能创建 API 令牌。

## 获取您的 API 凭证

### 1. 创建 API 令牌

1. 以管理员身份登录您的 Enhance 控制面板
2. 在导航菜单中点击 **Settings**
3. 导航至 **Access Tokens**
4. 点击 **Create Token**
5. 为令牌起一个描述性名称（例如，“Ultimate Multisite Integration”）
6. 赋予 **System Administrator** 角色
7. 对于到期日期：
   - 如需令牌永不过期，请留空
   - 或为安全起见设置特定的到期日期
8. 点击 **Create**

创建后，您的 **Access Token** 和 **Organization ID** 将显示。**立即保存**，因为令牌只会显示一次。

### 2. 获取您的 Organization ID

Organization ID 在 Access Tokens 页面中蓝色信息框内显示，标签为 “Org ID: {your_id}”。

Organization ID 是类似 `d8554b6d-5d0d-6719-009b-fec1189aa8f3` 的 UUID 格式。

您还可以通过以下方式找到客户的 Organization ID：

1. 前往 **Customers** 页面
2. 点击相关客户的 **Manage customer**
3. 查看 URL——Organization ID 是 `/customers/` 后的字母数字字符

### 3. 获取您的 Server ID

要查找您的 Server ID（域操作所需）：

1. 在 Enhance 控制面板中，导航至 **Servers**
2. 点击运行 WordPress 安装的服务器
3. Server ID（UUID 格式）将在 URL 或服务器详情中可见
4. 或者，您可以使用 API 列出服务器：

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID 采用 UUID 格式：`00000000-0000-0000-0000-000000000000`

### 4. 获取您的 API URL

您的 API URL 是您的 Enhance 控制面板 URL 并追加 `/api/`：

```
https://your-enhance-panel.com/api/
```

**重要：** `/api/` 路径是必需的。常见错误包括：

- 仅使用域名而不加 `/api/`
- 使用 HTTP 而非 HTTPS（HTTPS 是安全所需）

## 配置

### 必需常量

将以下常量添加到您的 `wp-config.php` 文件中：

```php
// Enhance 控制面板集成
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### 通过集成向导设置

1. 在 WordPress 管理后台，转到 **Ultimate Multisite** > **Settings**
2. 导航至 **Integrations** 选项卡
3. 找到 **Enhance Control Panel Integration** 并点击 **Configuration**
4. 向导将引导您完成设置：
   - **步骤 1：** 介绍和功能概述
   - **步骤 2：** 输入您的 API 凭证（Token、API URL、Server ID）
   - **步骤 3：** 测试连接
   - **步骤 4：** 审核并激活
你可以选择：
- 让向导自动将常量注入您的 `wp-config.php` 文件
- 复制常量定义并手动添加

## 额外的 WordPress 配置

根据社区反馈（[Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)），您可能需要配置以下额外设置：

### .htaccess 配置

如果您在域名映射时遇到问题：

1. 删除原始 Enhance `.htaccess` 文件
2. 用标准 WordPress Multisite `.htaccess` 文件替换它

### Cookie 常量

将这些常量添加到 `wp-config.php`，以确保跨映射域名的正确 cookie 处理：

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## 工作原理

### 当域名被映射时

1. 用户在 Ultimate Multisite 中映射自定义域名（或在子域模式下创建新站点）
2. 集成向 Enhance 的 API 发送 POST 请求：`/servers/{server_id}/domains`
3. Enhance 将域名添加到您的服务器配置
4. 当 DNS 解析到您的服务器时，Enhance 自动通过 LetsEncrypt 提供 SSL 证书
5. 域名启用 HTTPS

### 当域名被移除时

1. 在 Ultimate Multisite 中删除域名映射
2. 集成查询域名的 ID
3. 发送 DELETE 请求至：`/servers/{server_id}/domains/{domain_id}`
4. Enhance 从您的服务器配置中移除该域名

### DNS 与 SSL 检查

Ultimate Multisite 包含内置的 DNS 与 SSL 检查：

- 您可以在 **Domain Mapping Settings** 中配置检查间隔（默认：300 秒/5 分钟）
- 系统将在标记域名为激活前验证 DNS 传播
- SSL 证书有效性将自动检查
- Enhance 自动处理 SSL 供应，因此不需要手动 SSL 配置

## 验证设置

### 测试连接

1. 在集成向导中使用 **Test Connection** 步骤
2. 插件将尝试列出您服务器上的域名
3. 成功消息确认：
   - API 凭证正确
   - API URL 可访问
   - Server ID 有效
   - 权限设置正确

### 在映射域名后

1. 在 Ultimate Multisite 中映射测试域名
2. 检查 Ultimate Multisite 日志（**Ultimate Multisite** > **Logs** > **integration-enhance**）
3. 在 Enhance 控制面板中验证域名已添加：
   - 前往 **Servers** > **Your Server** > **Domains**
   - 新域名应出现在列表中
4. DNS 传播后，验证 SSL 已自动提供

## 故障排除

### API 连接问题

**错误：** “Failed to connect to Enhance API”

- 验证 `WU_ENHANCE_API_URL` 末尾包含 `/api/`
- 确保使用 HTTPS，而非 HTTP
- 检查 Enhance 面板是否可从您的 WordPress 服务器访问
- 验证没有防火墙规则阻止连接

**错误：** “Enhance API Token not found”

- 确保 `WU_ENHANCE_API_TOKEN` 已在 `wp-config.php` 中定义
- 验证令牌未在 Enhance 中被删除或过期
- 检查令牌值中的拼写错误

**错误：** “Server ID is not configured”

- 验证 `WU_ENHANCE_SERVER_ID` 已在 `wp-config.php` 中定义
- 确保 Server ID 为有效的 UUID 格式
- 确认服务器存在于您的 Enhance 面板中

### 域名未添加

**检查日志：**

1. 前往 **Ultimate Multisite** > **Logs**
2. 过滤 **integration-enhance**
3. 查找指示问题的错误信息

**常见原因：**

- 无效的域名格式
- 域名已存在于 Enhance
- API 权限不足（确保令牌具有 System Administrator 角色）
- Server ID 与 Enhance 中实际服务器不匹配

### SSL 证书问题

**SSL 未提供：**

- 验证 DNS 是否指向您的服务器 IP 地址
- 检查域名是否正确解析：`nslookup yourdomain.com`
- Enhance 需要 DNS 解析后才能提供 SSL
- SSL 供应通常在 DNS 传播后 5-10 分钟完成
- 检查 Enhance 控制面板日志中的 SSL 相关错误

**在 Enhance 中手动排查 SSL：**

1. 前往 **Servers** > **Your Server** > **Domains**
2. 找到您的域名并检查其 SSL 状态
3. 如有需要，您可以手动触发 SSL 供应

### DNS 检查间隔

如果域名或 SSL 证书激活过慢：

1. 前往 **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. 找到 **DNS Check Interval** 设置
3. 将默认 300 秒调整为更低值（最小 10 秒）
4. **注意：** 低间隔意味着更频繁的检查，但服务器负载更高

### 身份验证错误

**HTTP 401/403 错误：**

- 在 Enhance 中重新生成 API 令牌
- 验证令牌具有 **System Administrator** 角色
- 检查令牌是否已过期
- 确保使用正确的 Organization ID（尽管通常不需要在 URL 中）

### 日志分析

启用详细日志：

```php
// Add to wp-config.php for enhanced debugging
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

然后检查日志：

- Ultimate Multisite 日志：**Ultimate Multisite** > **Logs**
- WordPress 调试日志：`wp-content/debug.log`
- Enhance 面板日志：可在 Enhance 的管理界面查看

## API 参考

### 认证

所有 API 请求使用 Bearer 令牌认证：

```
Authorization: Bearer YOUR_TOKEN_HERE
```

### 常用端点

**列出服务器：**

```
GET /servers
```

**列出服务器上的域名：**

```
GET /servers/{server_id}/domains
```

**添加域名：**

```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**删除域名：**

```
DELETE /servers/{server_id}/domains/{domain_id}
```

### 完整 API 文档

完整 API 文档： [https://apidocs.enhance.com](https://apidocs.enhance.com)

## 最佳实践

### 安全

- **永远不要** 将 API 令牌提交到版本控制
- 将令牌存储在 `wp-config.php`，并确保从 Git 中排除
- 使用具有适当权限的令牌（System Administrator 以实现完整集成）
- 为生产环境设置令牌过期日期
- 定期轮换令牌

### 性能

- 使用默认 DNS 检查间隔（300 秒）以避免过多 API 调用
- 在执行大规模域名操作时监控 Enhance 服务器资源
- 如果一次映射许多域名，请考虑分批添加

### 监控

- 定期检查 Ultimate Multisite 日志以获取集成错误
- 设置监控以捕获域名添加失败
- 验证 SSL 证书是否正确提供
- 关注 Enhance 服务器容量和域名限制

## 其他资源

- **Enhance 官方文档：** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API 文档：** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance 社区论坛：** [https://community.enhance.com](https://community.enhance.com)
- **GitHub 讨论：** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite 域名映射指南：** 参见 wiki 页面 “How to Configure Domain Mapping v2”

## 支持

如果您遇到问题：

1. 检查上方的故障排除部分
2. 查看 **Ultimate Multisite** 日志
3. 咨询 [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
4. 联系 Enhance 支持以获取面板相关问题
5. 创建一个新讨论，详细错误日志以供社区协助

## 备注

- 本集成仅处理域名别名；Enhance 自动管理 SSL
- 集成支持自定义域名映射和基于子域的站点
- 自动 www 子域创建可在域名映射设置中配置
- Enhance 当前支持 Apache 配置（LiteSpeed Enterprise 可用）
- Ultimate Multisite 中的域名删除将从 Enhance 中移除，但可能不立即删除相关 SSL 证书
