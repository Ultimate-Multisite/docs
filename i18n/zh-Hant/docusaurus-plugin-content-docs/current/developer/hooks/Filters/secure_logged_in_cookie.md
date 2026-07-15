---
id: secure_logged_in_cookie
title: 過濾器 - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# 過濾器：secure_logged_in_cookie

用於判斷登入 Cookie 是否必須透過 HTTPS 傳送。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | 判斷登入 Cookie 是否必須透過 HTTPS 傳送。 |
| $user_id | `int` | 使用者 ID。 |
| $secure | `bool` | 判斷認證 Cookie 是否必須透過 HTTPS 傳送。 |

### 適用版本 {#since}

- 3.1.0
### 來源 {#source}

定義於 [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) 的第 91 行
