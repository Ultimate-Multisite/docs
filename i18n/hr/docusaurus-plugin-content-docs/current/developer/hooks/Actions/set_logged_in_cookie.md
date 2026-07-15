---
id: set_logged_in_cookie
title: Radnja - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

Pokreće se neposredno prije postavljanja autentifikacijskog cookieja za prijavljenog korisnika.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | Vrijednost cookieja za prijavljenog korisnika. |
| $expire | `int` | Vrijeme isteka razdoblja odgode prijave kao UNIX vremenska oznaka. Zadano je 12 sati nakon vremena isteka cookieja. |
| $expiration | `int` | Vrijeme kada autentifikacijski cookie za prijavljenog korisnika istječe kao UNIX vremenska oznaka. Zadano je 14 dana od sada. |
| $user_id | `int` | ID korisnika. |
| $scheme | `string` | Autentifikacijska shema. Zadano 'logged_in'. |
| $token | `string` | Korisnikov token sesije koji se koristi za ovaj cookie. |

### Od verzije {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Izvor {#source}

Definirano u [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) u retku 141
