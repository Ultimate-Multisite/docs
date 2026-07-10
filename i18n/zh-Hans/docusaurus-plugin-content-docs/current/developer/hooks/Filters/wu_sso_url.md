---
id: wu_sso_url
title: 过滤器 - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url {#filter-wussourl}

在为跨域客户操作返回生成的 SSO URL 之前，对其进行过滤。

当集成需要向主权租户 SSO 链接添加可信上下文，或在保留 Ultimate Multisite 的令牌验证的同时替换 broker URL 时，请使用此过滤器。

## 参数 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sso_url | `string` | 生成的 SSO URL。 |
| $user | `WP_User` | 将通过 SSO 访问进行身份验证的用户。 |
| $site_id | `int` | 访问的目标站点 ID。 |
| $redirect_to | `string` | SSO 验证成功后的目标 URL。 |

### 自从 {#since}

- 2.13.0

### 来源 {#source}

定义于 `inc/sso/class-sso.php`。


## 返回 {#returns}

过滤后的 SSO URL。
