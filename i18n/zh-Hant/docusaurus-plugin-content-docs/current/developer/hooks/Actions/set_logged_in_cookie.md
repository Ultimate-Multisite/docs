---
id: set_logged_in_cookie
title: 動作 - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie {#action-setloggedincookie}

在設定登入驗證 Cookie 之前立即觸發。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | 登入 Cookie 的值。 |
| $expire | `int` | 登入寬限期過期的時間，以 UNIX 時間戳記表示。預設為 Cookie 過期時間後的 12 小時。 |
| $expiration | `int` | 登入驗證 Cookie 過期的時間，以 UNIX 時間戳記表示。預設為從現在起 14 天後。 |
| $user_id | `int` | 使用者 ID。 |
| $scheme | `string` | 驗證方案。預設為 'logged_in'。 |
| $token | `string` | 用於此 Cookie 的使用者會話代幣 (session token)。 |

### 可用自 {#since}

- 2.6.0
- 4.9.0: 新增了 <code>$token</code> 參數。
### 來源 {#source}

定義於 [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) 的第 141 行
