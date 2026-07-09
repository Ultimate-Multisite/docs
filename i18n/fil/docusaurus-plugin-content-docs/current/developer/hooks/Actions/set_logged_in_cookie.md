---
id: set_logged_in_cookie
title: Aksyon - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie {#action-setloggedincookie}

Nagpapatakbo ito kaagad bago itakda (set) ang cookie ng pag-authenticate na nagpapakita na naka-login.

## Mga Parameter {#parameters}

| Name | Type | Deskripsyon |
|------|------|-------------|
| $logged_in_cookie | `string` | Ang halaga ng cookie ng pag-login. |
| $expire | `int` | Ang oras na mag-e-expire ang grace period ng pag-login bilang isang UNIX timestamp. Ang default ay 12 oras pagkatapos ng expiration time ng cookie. |
| $expiration | `int` | Ang oras kung kailan mag-e-expire ang cookie ng pag-authenticate na naka-login bilang isang UNIX timestamp. Ang default ay 14 araw mula ngayon. |
| $user_id | `int` | User ID. |
| $scheme | `string` | Iskema ng pag-authenticate. Ang default ay 'logged_in'. |
| $token | `string` | Ang session token ng user na gagamitin para sa cookie na ito. |

### Mula pa noong {#since}

- 2.6.0
- 4.9.0: Idinagdag ang parameter na <code>$token</code>.
### Pinagmulan {#source}

Tinukoy sa [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) sa linya 141
