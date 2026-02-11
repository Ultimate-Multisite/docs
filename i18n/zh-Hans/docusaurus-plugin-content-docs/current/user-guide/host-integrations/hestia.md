---
title: Hestia 控制面板集成
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia 控制面板集成

本指南说明如何配置 Ultimate Multisite Hestia 集成，使您网络中映射的域名能够自动作为 Web 域名别名添加（并删除）到 Hestia。

- Hestia CLI 参考：v-add-web-domain-alias / v-delete-web-domain-alias
- 官方 REST API 文档：https://hestiacp.com/docs/server-administration/rest-api.html

## What It Does
- 当在 Ultimate Multisite 中映射域名时，集成会调用 Hestia API 来执行：
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- 当域名映射被移除时，它会执行：
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- 可根据域名映射设置中的“自动创建 www 子域名”选项，添加或移除 `www.` 别名。

## Prerequisites
- 已有一个指向您的 WordPress 安装的 Hestia Web 域名。集成将把别名附加到此基础域名。
- 已启用 Hestia API 访问。您可以使用密码或 API 哈希/令牌进行身份验证。

请参阅 Hestia 的 REST API 文档以了解启用 API 访问和身份验证的详细信息：
https://hestiacp.com/docs/server-administration/rest-api.html

## Configuration (Wizard → Integrations → Hestia)
请提供以下值：

- `WU_HESTIA_API_URL`（必填）
  - 基本 API 端点，通常为 `https://your-hestia-host:8083/api/`。
- `WU_HESTIA_API_USER`（必填）
  - 用于 API 命令的 Hestia 用户（通常为 `admin`）。
- `WU_HESTIA_API_PASSWORD` 或 `WU_HESTIA_API_HASH`（至少需要一个）
  - 选择一种身份验证方法：密码或 API 哈希/令牌。
- `WU_HESTIA_ACCOUNT`（必填）
  - Hestia 中 Web 域名的账户（所有者）；这是 CLI 的第一个参数。
- `WU_HESTIA_WEB_DOMAIN`（必填）
  - 已存在的 Hestia Web 域名，用于托管您的 WordPress（别名将附加到此处）。
- `WU_HESTIA_RESTART`（可选；默认 `yes`）
  - 在别名更改后是否重启/重新加载服务。

您可以让向导将这些常量注入 `wp-config.php`，或手动定义它们。

## Verifying Setup
- 在向导的“测试”步骤中，插件通过 API 调用 `v-list-web-domains <WU_HESTIA_ACCOUNT> json`。成功响应确认连接和身份验证。
- 映射域名后，在 Hestia 中检查：Web > 基础域名 > Aliases。您应该能看到新别名已添加。

## Notes & Tips
- 确保 `WU_HESTIA_WEB_DOMAIN` 已存在且由 `WU_HESTIA_ACCOUNT` 拥有。
- 如果需要 SSL，请在 Hestia 中管理证书。此集成目前仅处理别名。
- 插件还可能根据您的域名映射“www 子域名”设置添加/移除 `www.<domain>`。

## Example API Call (cURL)
以下是一个概念性示例（请根据您的环境进行调整）。请参阅官方文档以获取确切参数。

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

对于删除，使用 `cmd=v-delete-web-domain-alias` 并使用相同的参数。

## Troubleshooting
- API 返回 HTTP 错误：请验证 `WU_HESTIA_API_URL` 可访问且包含 `/api`。
- 身份验证错误：请确认 `WU_HESTIA_API_USER` 以及 `WU_HESTIA_API_PASSWORD` 或 `WU_HESTIA_API_HASH`。
- 日志中缺少账户/基础域名：请确保 `WU_HESTIA_ACCOUNT` 和 `WU_HESTIA_WEB_DOMAIN` 已设置并在 Hestia 中有效。

## References
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI 参考（别名）: https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
