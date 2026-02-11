---
id: secure_auth_cookie
title: 过滤器 - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# 过滤器: secure_auth_cookie

过滤器决定是否仅通过 HTTPS 发送 auth cookie。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $secure | `bool` | 是否仅通过 HTTPS 发送 cookie。 |
| $user_id | `int` | 用户 ID。 |

### Since

- 3.1.0

### Source

Defined in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) at line 80
