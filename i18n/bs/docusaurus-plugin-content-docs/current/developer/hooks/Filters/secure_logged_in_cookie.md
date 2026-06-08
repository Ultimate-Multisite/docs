---
id: secure_logged_in_cookie
title: Filter - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

Filtrira da li se kolačić za prijavljenog korisnika (logged in cookie) šalje samo preko HTTPS protokola.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Određuje da li se kolačić za prijavljenog korisnika šalje samo preko HTTPS protokola. |
| $user_id | `int` | ID korisnika. |
| $secure | `bool` | Određuje da li se kolačić za autentifikaciju (auth cookie) šalje samo preko HTTPS protokola. |

### Od verzije

- 3.1.0
### Izvor

Definisano je u [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) na liniji 91
