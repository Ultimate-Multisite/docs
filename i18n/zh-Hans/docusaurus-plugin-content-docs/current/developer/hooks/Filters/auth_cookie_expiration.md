---
id: auth_cookie_expiration
title: 过滤器 - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# 过滤器: auth_cookie_expiration

过滤身份验证 cookie 失效期的持续时间。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $length | `int` | 以秒为单位的失效期持续时间。 |
| $user_id | `int` | 用户 ID。 |
| $remember | `bool` | 是否记住用户登录。默认值为 false。 |

### 自

- 2.8.0

### 来源

在 [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) 的第 52 行定义。
