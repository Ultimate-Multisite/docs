---
id: auth_cookie_expiration
title: Filter - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

Filtrira trajanje perioda isteka kolačića za autentifikaciju.

## Parametri {#parameters}

| Name | Type | Opis |
|------|------|-------------|
| $length | `int` | Trajanje perioda isteka u sekundama. |
| $user_id | `int` | ID korisnika. |
| $remember | `bool` | Da li treba zapamtiti prijavu korisnika. Podrazumevano false. |

### Od verzije {#since}

- 2.8.0
### Izvor {#source}

Definisano u [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) na liniji 52
