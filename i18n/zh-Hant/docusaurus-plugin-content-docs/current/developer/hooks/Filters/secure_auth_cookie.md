---
id: secure_auth_cookie
title: 過濾器 - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# 篩選器：secure_auth_cookie

篩選器是否應只透過 HTTPS 傳送認證 Cookie。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $secure | `bool` | 是否應只透過 HTTPS 傳送 Cookie。 |
| $user_id | `int` | 使用者 ID。 |

### 適用版本 {#since}

- 3.1.0
### 來源 {#source}

定義於 [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) 的第 80 行
