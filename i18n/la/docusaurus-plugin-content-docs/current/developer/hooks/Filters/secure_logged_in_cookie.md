---
id: secure_logged_in_cookie
title: Filtrum - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filtrum: secure_logged_in_cookie

Filtrat utrum crustulum initii sessionis tantum per HTTPS mittendum sit.

## Parametri

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Utrum crustulum initii sessionis tantum per HTTPS mittendum sit. |
| $user_id | `int` | ID usoris. |
| $secure | `bool` | Utrum crustulum auth tantum per HTTPS mittendum sit. |

### Ab

- 3.1.0
### Fons

Definitum in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) linea 91
