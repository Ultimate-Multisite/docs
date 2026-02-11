---
id: set_logged_in_cookie
title: 操作 - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# 动作: set_logged_in_cookie

在设置已登录身份验证 cookie 之前立即触发。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $logged_in_cookie | `string` | 已登录 cookie 的值。 |
| $expire | `int` | 登录宽限期到期时间（UNIX 时间戳）。默认值为 cookie 过期时间后 12 小时。 |
| $expiration | `int` | 已登录身份验证 cookie 过期时间（UNIX 时间戳）。默认值为当前时间起 14 天。 |
| $user_id | `int` | 用户 ID。 |
| $scheme | `string` | 身份验证方案。默认值为 'logged_in'。 |
| $token | `string` | 用于此 cookie 的用户会话令牌。 |

### 版本

- 2.6.0
- 4.9.0: 添加了 <code>$token</code> 参数。

### 源码

在 [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) 第 141 行定义。
