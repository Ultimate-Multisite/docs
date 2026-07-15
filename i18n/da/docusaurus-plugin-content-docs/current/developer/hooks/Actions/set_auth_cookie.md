---
id: set_auth_cookie
title: Handling - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

Udløses umiddelbart før godkendelses-cookien sættes.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $auth_cookie | `string` | Godkendelses-cookieværdi. |
| $expire | `int` | Tidspunktet, hvor loginets afdragsperiode udløber, som et UNIX-tidsstempel. Standard er 12 timer efter cookiens udløbstidspunkt. |
| $expiration | `int` | Tidspunktet, hvor godkendelses-cookien udløber, som et UNIX-tidsstempel. Standard er 14 dage fra nu. |
| $user_id | `int` | Bruger-ID. |
| $scheme | `string` | Godkendelsesskema. Værdier omfatter 'auth' eller 'secure_auth'. |
| $token | `string` | Brugerens sessionstoken, der skal bruges til denne cookie. |

### Siden {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Kilde {#source}

Defineret i [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) på linje 124
