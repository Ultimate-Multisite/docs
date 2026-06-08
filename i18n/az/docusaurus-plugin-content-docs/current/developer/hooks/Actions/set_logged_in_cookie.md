---
id: set_logged_in_cookie
title: Action - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

Bu hərəkət, giriş etmiş autentifikasiya cookie-si təyin edilməzdən dərhal əvvəl işə düşür.

## Parametrlər

| Name | Type | Təsvir |
|------|------|-------------|
| $logged_in_cookie | `string` | Giriş etmiş cookie dəyəri. |
| $expire | `int` | Giriş müvəqqətinin (grace period) bitdiyi vaxt, UNIX timestamp kimi. Default olaraq cookie-nin bitmə vaxtından 12 saat sonra. |
| $expiration | `int` | Giriş etmiş autentifikasiya cookie-sinin bitdiyi vaxt, UNIX timestamp kimi. Default olaraq indidən 14 gün sonra. |
| $user_id | `int` | İstifadəçi ID-si. |
| $scheme | `string` | Autentifikasiya sxemi. Default 'logged_in'. |
| $token | `string` | Bu cookie üçün istifadə ediləcək istifadəçi sessiya token-ı. |

### Nə vaxtdan

- 2.6.0
- 4.9.0: <code>$token</code> parametri əlavə edilmişdir.
### Mənbə

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) faylında 141-ci sətirdə təyin edilmişdir.
