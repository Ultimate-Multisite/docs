---
id: set_logged_in_cookie
title: Aksyon - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

Gumagana kaagad bago itakda ang naka-log in na authentication cookie.

## Mga Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | Ang value ng naka-log in na cookie. |
| $expire | `int` | Ang oras kung kailan mag-e-expire ang login grace period bilang UNIX timestamp. Default ay 12 oras matapos ang expiration time ng cookie. |
| $expiration | `int` | Ang oras kung kailan mag-e-expire ang naka-log in na authentication cookie bilang UNIX timestamp. Default ay 14 na araw mula ngayon. |
| $user_id | `int` | User ID. |
| $scheme | `string` | Authentication scheme. Default 'logged_in'. |
| $token | `string` | Session token ng user na gagamitin para sa cookie na ito. |

### Mula Noong {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Pinagmulan {#source}

Tinukoy sa [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) sa linya 141
