---
id: auth_cookie_expiration
title: Filtro - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filtro: auth_cookie_expiration

Filtra la duración del período de expiración de la cookie de autenticación.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $length | `int` | Duración del período de expiración en segundos. |
| $user_id | `int` | ID de usuario. |
| $remember | `bool` | Si se recuerda el inicio de sesión del usuario. Por defecto falso. |

### Desde

- 2.8.0

### Fuente

Definido en [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) en la línea 52
