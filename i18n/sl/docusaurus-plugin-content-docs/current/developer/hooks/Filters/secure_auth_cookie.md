---
id: secure_auth_cookie
title: Filter - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie {#filter-secureauthcookie}

Filtrira, ali naj se auth cookie pošilja samo prek HTTPS.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $secure | `bool` | Ali naj se cookie pošilja samo prek HTTPS. |
| $user_id | `int` | ID uporabnika. |

### Od različice {#since}

- 3.1.0
### Vir {#source}

Določeno v [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) v vrstici 80
