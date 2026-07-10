---
id: secure_auth_cookie
title: Filtër - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie {#filter-secureauthcookie}

Filtron nëse auth cookie duhet të dërgohet vetëm përmes HTTPS.

## Parametrat {#parameters}

| Emri | Lloji | Përshkrimi |
|------|------|-------------|
| $secure | `bool` | Nëse cookie duhet të dërgohet vetëm përmes HTTPS. |
| $user_id | `int` | ID e përdoruesit. |

### Që nga {#since}

- 3.1.0
### Burimi {#source}

Përcaktuar në [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) në rreshtin 80
