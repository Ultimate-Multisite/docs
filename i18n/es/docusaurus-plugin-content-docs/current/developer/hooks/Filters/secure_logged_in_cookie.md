---
id: secure_logged_in_cookie
title: Filtro - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filtro: secure_logged_in_cookie

Filtra si la cookie de inicio de sesión debe enviarse solo sobre HTTPS.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | ¿Debe la cookie de inicio de sesión enviarse solo sobre HTTPS? |
| $user_id | `int` | ID de usuario. |
| $secure | `bool` | ¿Debe la cookie de autenticación enviarse solo sobre HTTPS? |

### Desde

- 3.1.0

### Fuente

Definido en [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) en la línea 91
