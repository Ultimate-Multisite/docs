---
id: set_logged_in_cookie
title: Acción - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Acción: set_logged_in_cookie

Dispárase inmediatamente antes de que se estableza a cookie de autenticación de inicio de sesión.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $logged_in_cookie | `string` | O valor da cookie de inicio de sesión. |
| $expire | `int` | O momento no que expira o período de graza do inicio de sesión como marca de tempo UNIX. O predeterminado é 12 horas despois da hora de expiración da cookie. |
| $expiration | `int` | O momento no que expira a cookie de autenticación de inicio de sesión como marca de tempo UNIX. O predeterminado é 14 días desde agora. |
| $user_id | `int` | ID de usuario. |
| $scheme | `string` | Esquema de autenticación. Predeterminado 'logged_in'. |
| $token | `string` | Token de sesión do usuario para usar con esta cookie. |

### Desde {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Orixe {#source}

Definido en [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) na liña 141
