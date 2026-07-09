---
id: set_auth_cookie
title: Radnja - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie {#action-setauthcookie}

Pokreće se neposredno prije postavljanja autentifikacijskog kolačića.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | Vrijednost autentifikacijskog kolačića. |
| $expire | `int` | Vrijeme isteka razdoblja odgode prijave kao UNIX timestamp. Zadano je 12 sati nakon vremena isteka kolačića. |
| $expiration | `int` | Vrijeme kada autentifikacijski kolačić istječe kao UNIX timestamp. Zadano je 14 dana od sada. |
| $user_id | `int` | ID korisnika. |
| $scheme | `string` | Autentifikacijska shema. Vrijednosti uključuju 'auth' ili 'secure_auth'. |
| $token | `string` | Korisnikov session token koji se koristi za ovaj kolačić. |

### Od verzije {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Izvor {#source}

Definirano u [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) u retku 124
