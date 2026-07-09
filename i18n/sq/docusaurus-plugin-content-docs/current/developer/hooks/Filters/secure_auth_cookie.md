---
id: secure_auth_cookie
title: Filtër - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie

Filtron nëse auth cookie duhet të dërgohet vetëm përmes HTTPS.

## Parametrat

| Emri | Lloji | Përshkrimi |
|------|------|-------------|
| $secure | `bool` | Nëse cookie duhet të dërgohet vetëm përmes HTTPS. |
| $user_id | `int` | ID e përdoruesit. |

### Që nga

- 3.1.0
### Burimi

Përcaktuar në [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) në rreshtin 80
