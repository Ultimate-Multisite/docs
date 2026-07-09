---
id: auth_cookie_expiration
title: Filtar - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration {#filter-authcookieexpiration}

Filtrira trajanje razdoblja isteka autentifikacijskog cookieja.

## Parametri {#parameters}

| Naziv | Tip | Opis |
|------|------|-------------|
| $length | `int` | Trajanje razdoblja isteka u sekundama. |
| $user_id | `int` | ID korisnika. |
| $remember | `bool` | Treba li zapamtiti prijavu korisnika. Zadano false. |

### Od {#since}

- 2.8.0
### Izvor {#source}

Definirano u [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) u retku 52
