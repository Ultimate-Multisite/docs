---
id: secure_logged_in_cookie
title: Filtër - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filtër: secure_logged_in_cookie

Filtron nëse cookie i përdoruesit të kyçur duhet të dërgohet vetëm përmes HTTPS.

## Parametrat

| Emri | Tipi | Përshkrimi |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Nëse cookie i përdoruesit të kyçur duhet të dërgohet vetëm përmes HTTPS. |
| $user_id | `int` | ID e përdoruesit. |
| $secure | `bool` | Nëse cookie i autentikimit duhet të dërgohet vetëm përmes HTTPS. |

### Që nga

- 3.1.0
### Burimi

Përcaktuar në [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) në rreshtin 91
