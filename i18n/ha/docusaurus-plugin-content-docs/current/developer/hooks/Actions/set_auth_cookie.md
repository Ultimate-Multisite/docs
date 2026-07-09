---
id: set_auth_cookie
title: Aiki - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

Yana faruwa nan take kafin a saita cookie na tantancewa.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | Darajar cookie na tantancewa. |
| $expire | `int` | Lokacin da wa’adin rangwamen shiga zai ƙare a matsayin UNIX timestamp. Tsoho shi ne awanni 12 bayan lokacin ƙarewar cookie. |
| $expiration | `int` | Lokacin da cookie na tantancewa zai ƙare a matsayin UNIX timestamp. Tsoho shi ne kwanaki 14 daga yanzu. |
| $user_id | `int` | ID na mai amfani. |
| $scheme | `string` | Tsarin tantancewa. Darajoji sun haɗa da 'auth' ko 'secure_auth'. |
| $token | `string` | Token na zaman mai amfani da za a yi amfani da shi don wannan cookie. |

### Tun daga

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Tushe

An bayyana a cikin [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) a layi na 124
