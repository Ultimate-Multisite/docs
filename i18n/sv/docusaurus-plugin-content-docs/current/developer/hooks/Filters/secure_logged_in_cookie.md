---
id: secure_logged_in_cookie
title: Filter - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

Bestämmer om den inloggade cookien endast ska skickas över HTTPS.

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Bestämmer om den inloggade cookien endast ska skickas över HTTPS. |
| $user_id | `int` | Användarens ID. |
| $secure | `bool` | Bestämmer om autentiseringscookien endast ska skickas över HTTPS. |

### Sedan

- 3.1.0
### Källa

Definieras i [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) på rad 91
