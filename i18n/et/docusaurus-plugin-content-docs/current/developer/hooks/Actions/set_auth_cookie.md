---
id: set_auth_cookie
title: Toiming - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Toiming: set_auth_cookie

Käivitub vahetult enne autentimisküpsise määramist.

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $auth_cookie | `string` | Authentication cookie value. |
| $expire | `int` | The time the login grace period expires as a UNIX timestamp. Default is 12 hours past the cookie's expiration time. |
| $expiration | `int` | The time when the authentication cookie expires as a UNIX timestamp. Default is 14 days from now. |
| $user_id | `int` | User ID. |
| $scheme | `string` | Authentication scheme. Values include 'auth' or 'secure_auth'. |
| $token | `string` | User's session token to use for this cookie. |

### Alates {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Allikas {#source}

Määratletud failis [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) real 124
