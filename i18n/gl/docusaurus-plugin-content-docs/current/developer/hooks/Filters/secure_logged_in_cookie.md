---
id: secure_logged_in_cookie
title: Filtro - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filtro: secure_logged_in_cookie {#filter-secureloggedincookie}

Filtra se a cookie de sesión iniciada só debe enviarse a través de HTTPS.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Se a cookie de sesión iniciada só debe enviarse a través de HTTPS. |
| $user_id | `int` | ID de usuario. |
| $secure | `bool` | Se a cookie de autenticación só debe enviarse a través de HTTPS. |

### Desde {#since}

- 3.1.0
### Fonte {#source}

Definido en [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) na liña 91
