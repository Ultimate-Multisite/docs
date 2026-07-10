---
id: set_auth_cookie
title: Hərəkət - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie {#action-setauthcookie}

Authentication cookie təyin edilməzdən dərhal əvvəl işə düşür.

## Parametrlər {#parameters}

| Adı | Növ | Təsvir |
|------|------|-------------|
| $auth_cookie | `string` | Authentication cookie dəyəri. |
| $expire | `int` | Login lütf müddətinin (grace period) bitdiyi vaxtı UNIX timestamp kimi. Default olaraq, cookie-nin bitmə vaxtından 12 saat sonra olur. |
| $expiration | `int` | Authentication cookie-nin bitdiyi vaxtı UNIX timestamp kimi. Default olaraq, indidən 14 gün sonra olur. |
| $user_id | `int` | İstifadəçi ID-si. |
| $scheme | `string` | Authentication şeması. Dəyərlər 'auth' və ya 'secure_auth' daxil olmaqla. |
| $token | `string` | Bu cookie üçün istifadə ediləcək istifadəçinin sessiya token-ı. |

### Nə vaxtdan {#since}

- 2.5.0
- 4.9.0: <code>$token</code> parametri əlavə edilmişdir.
### Mənbə {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) faylında 124-ci sətirdə təyin edilmişdir.
