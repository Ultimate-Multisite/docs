---
id: secure_logged_in_cookie
title: Filtro - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filtro: secure_logged_in_cookie

Filtra se o cookie de login deve ser enviado apenas via HTTPS.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-----------|
| $secure_logged_in_cookie | `bool` | Se o cookie de login deve ser enviado apenas via HTTPS. |
| $user_id | `int` | ID do usuário. |
| $secure | `bool` | Se o cookie de autenticação deve ser enviado apenas via HTTPS. |

### Desde

- 3.1.0

### Fonte

Definido em [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) na linha 91
