---
id: set_auth_cookie
title: Acción - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Acción: set_auth_cookie

Se dispara inmediatamente antes de que se establezca la cookie de autenticación.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $auth_cookie | `string` | Valor de la cookie de autenticación. |
| $expire | `int` | El tiempo en que expira el período de gracia de inicio de sesión como marca de tiempo UNIX. El valor predeterminado es 12 horas después de la hora de expiración de la cookie. |
| $expiration | `int` | El tiempo en que expira la cookie de autenticación como marca de tiempo UNIX. El valor predeterminado es 14 días a partir de ahora. |
| $user_id | `int` | ID de usuario. |
| $scheme | `string` | Esquema de autenticación. Los valores incluyen 'auth' o 'secure_auth'. |
| $token | `string` | Token de sesión del usuario para usar con esta cookie. |

### Desde

- 2.5.0
- 4.9.0: El parámetro <code>$token</code> se añadió.

### Fuente

Definido en [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) en la línea 124
