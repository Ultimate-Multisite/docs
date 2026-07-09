---
id: auth_cookie_expiration
title: Filtro - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filtro: auth_cookie_expiration {#filter-authcookieexpiration}

Filtra a duración do período de caducidade da cookie de autenticación.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $length | `int` | Duración do período de caducidade en segundos. |
| $user_id | `int` | ID de usuario. |
| $remember | `bool` | Se se debe lembrar o inicio de sesión do usuario. Valor predeterminado false. |

### Desde {#since}

- 2.8.0
### Fonte {#source}

Definido en [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) na liña 52
