---
id: secure_auth_cookie
title: Filter - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie

Kontroliše da li se autentifikacioni kolačić (auth cookie) mora slati samo preko HTTPS protokola.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $secure | `bool` | Da li se kolačić šalje samo preko HTTPS. |
| $user_id | `int` | ID korisnika. |

### Od verzije {#since}

- 3.1.0
### Izvor {#source}

Definisano u [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) na liniji 80
