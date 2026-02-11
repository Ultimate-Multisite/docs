---
id: send_auth_cookies
title: 过滤器 - send_auth_cookies
sidebar_label: send_auth_cookies
_i18n_hash: b4e7974df7394f865bbf7450c9a1cd37
---
# 过滤器: send_auth_cookies

允许防止身份验证 cookie 实际发送给客户端。

## 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| $send | `bool` | 是否将身份验证 cookie 发送给客户端。 |

### 版本自

- 4.7.4

### 源码

在 [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L150) 的第 150 行定义
