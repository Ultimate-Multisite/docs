---
id: secure_auth_cookie
title: Filter - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie

Bestämmer om autentiseringskakan (auth cookie) endast ska skickas över HTTPS.

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $secure | `bool` | Om kakan endast ska skickas över HTTPS. |
| $user_id | `int` | Användarens ID. |

### Sedan

- 3.1.0
### Källa

Definieras i [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) på rad 80
