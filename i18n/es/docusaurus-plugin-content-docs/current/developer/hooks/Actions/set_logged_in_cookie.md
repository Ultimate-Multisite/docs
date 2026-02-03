---
id: set_logged_in_cookie
title: Acción - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

Se dispara inmediatamente antes de que se establezca la cookie de autenticación de inicio de sesión.

## Parámetros

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | El valor de la cookie de inicio de sesión. |
| $expire | `int` | El momento en que expira el período de gracia de inicio de sesión como una marca de tiempo UNIX. El valor predeterminado es 12 horas después de la hora de expiración de la cookie. |
| $expiration | `int` | El momento en que expira la cookie de autenticación de inicio de sesión como una marca de tiempo UNIX. El valor predeterminado es 14 días a partir de ahora. |
| $user_id | `int` | ID de usuario. |
| $scheme | `string` | Esquema de autenticación. Predeterminado 'logged_in'. |
| $token | `string` | Token de sesión del usuario para usar con esta cookie. |

### Desde

- 2.6.0
- 4.9.0: Se añadió el parámetro <code>$token</code>.

### Fuente

Definido en [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) en la línea 141
