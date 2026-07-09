---
id: auth_cookie_expiration
title: 過濾器 - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# 過濾器：auth_cookie_expiration {#filter-authcookieexpiration}

用於過濾和設定認證 Cookie 的過期時間。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $length | `int` | 過期時間（秒）。 |
| $user_id | `int` | 使用者 ID。 |
| $remember | `bool` | 是否記住使用者登入。預設為 false。 |

### 可用自 {#since}

- 2.8.0
### 來源 {#source}

定義於 [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) 第 52 行
