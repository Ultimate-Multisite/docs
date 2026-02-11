---
id: secure_logged_in_cookie
title: 过滤器 - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

过滤已登录 cookie 是否仅通过 HTTPS 发送。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | 是否仅通过 HTTPS 发送已登录 cookie。 |
| $user_id | `int` | 用户 ID。 |
| $secure | `bool` | 是否仅通过 HTTPS 发送身份验证 cookie。 |

### Since

- 3.1.0

### Source

定义于 [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) 在第 91 行
