---
id: set_auth_cookie
title: Kev nqis tes - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie {#action-setauthcookie}

Khiav tam sim ua ntej authentication cookie raug teeb.

## Cov parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | Tus nqi authentication cookie. |
| $expire | `int` | Lub sij hawm uas lub caij pub nkag login tas sij hawm raws li UNIX timestamp. Default yog 12 teev tom qab lub cookie lub sij hawm tas. |
| $expiration | `int` | Lub sij hawm uas authentication cookie tas sij hawm raws li UNIX timestamp. Default yog 14 hnub txij tam sim no. |
| $user_id | `int` | User ID. |
| $scheme | `string` | Authentication scheme. Cov nqi muaj xws li 'auth' los sis 'secure_auth'. |
| $token | `string` | Tus user lub session token siv rau lub cookie no. |

### Txij thaum {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Qhov chaw {#source}

Teev tseg hauv [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) ntawm kab 124
