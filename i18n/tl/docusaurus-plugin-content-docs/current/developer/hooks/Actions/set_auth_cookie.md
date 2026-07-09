---
id: set_auth_cookie
title: Aksyon - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

Gumagana kaagad bago itakda ang authentication cookie.

## Mga Parameter

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $auth_cookie | `string` | Halaga ng authentication cookie. |
| $expire | `int` | Ang oras kung kailan matatapos ang login grace period bilang UNIX timestamp. Default ay 12 oras matapos ang oras ng pag-expire ng cookie. |
| $expiration | `int` | Ang oras kung kailan mag-e-expire ang authentication cookie bilang UNIX timestamp. Default ay 14 na araw mula ngayon. |
| $user_id | `int` | User ID. |
| $scheme | `string` | Authentication scheme. Kabilang sa mga halaga ang 'auth' o 'secure_auth'. |
| $token | `string` | Session token ng user na gagamitin para sa cookie na ito. |

### Mula Noong

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Pinagmulan

Tinukoy sa [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) sa linya 124
