---
id: set_auth_cookie
title: 动作 - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# 动作: set_auth_cookie

在设置身份验证 cookie 之前立即触发。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $auth_cookie | `string` | 身份验证 cookie 值。 |
| $expire | `int` | 登录宽限期过期时间（UNIX 时间戳）。默认值为 cookie 过期时间之后的 12 小时。 |
| $expiration | `int` | 身份验证 cookie 过期时间（UNIX 时间戳）。默认值为现在起 14 天。 |
| $user_id | `int` | 用户 ID。 |
| $scheme | `string` | 身份验证方案。值包括 'auth' 或 'secure_auth'。 |
| $token | `string` | 用于此 cookie 的用户会话令牌。 |

### 版本

- 2.5.0
- 4.9.0: <code>$token</code> 参数已添加。

### 源码

在 [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) 第 124 行定义
