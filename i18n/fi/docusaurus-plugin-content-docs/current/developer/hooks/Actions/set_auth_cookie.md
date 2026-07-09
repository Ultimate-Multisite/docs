---
id: set_auth_cookie
title: Toiminto - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Toiminto: set_auth_cookie {#action-setauthcookie}

Käynnistyy välittömästi ennen kuin todennuseväste asetetaan.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $auth_cookie | `string` | Authentication cookie value. |
| $expire | `int` | The time the login grace period expires as a UNIX timestamp. Default is 12 hours past the cookie's expiration time. |
| $expiration | `int` | The time when the authentication cookie expires as a UNIX timestamp. Default is 14 days from now. |
| $user_id | `int` | User ID. |
| $scheme | `string` | Authentication scheme. Values include 'auth' or 'secure_auth'. |
| $token | `string` | User's session token to use for this cookie. |

### Alkaen {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Lähde {#source}

Määritelty tiedostossa [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) rivillä 124
