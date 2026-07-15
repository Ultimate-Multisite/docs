---
id: set_auth_cookie
title: 行動 - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

在設定認證 Cookie 之前立即觸發。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | 認證 Cookie 的值。 |
| $expire | `int` | 登入寬限期過期的時間，以 UNIX 時間戳記表示。預設值為 Cookie 過期時間之後的 12 小時。 |
| $expiration | `int` | 認證 Cookie 過期的時間，以 UNIX 時間戳記表示。預設值為從現在算起的 14 天後。 |
| $user_id | `int` | 使用者 ID。 |
| $scheme | `string` | 認證方案。值包括 'auth' 或 'secure_auth'。 |
| $token | `string` | 用於此 Cookie 的使用者會話 Token。 |

### Since {#since}

- 2.5.0
- 4.9.0: 新增了 <code>$token</code> 參數。
### Source {#source}

定義於 [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) 的第 124 行
