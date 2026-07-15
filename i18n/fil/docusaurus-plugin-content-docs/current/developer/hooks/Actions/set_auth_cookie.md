---
id: set_auth_cookie
title: Aksyon - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

Tinatawag ito kaagad bago itakda ang authentication cookie.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | Ang halaga ng authentication cookie. |
| $expire | `int` | Ang oras na mag-e-expire ang login grace period bilang UNIX timestamp. Ang default ay 12 oras pagkatapos ng expiration time ng cookie. |
| $expiration | `int` | Ang oras kung kailan mag-e-expire ang authentication cookie bilang UNIX timestamp. Ang default ay 14 araw mula ngayon. |
| $user_id | `int` | Ang User ID. |
| $scheme | `string` | Ang authentication scheme. Kasama sa mga halaga ang 'auth' o 'secure_auth'. |
| $token | `string` | Ang session token ng user na gagamitin para sa cookie na ito. |

### Since {#since}

- 2.5.0
- 4.9.0: Idinagdag ang parameter na <code>$token</code>.
### Source {#source}

Nakatakda sa [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) sa linya 124
