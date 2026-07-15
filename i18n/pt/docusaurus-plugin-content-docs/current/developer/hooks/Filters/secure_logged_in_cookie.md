---
id: secure_logged_in_cookie
title: Filtro - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filtro: secure_logged_in_cookie

Filtra se o cookie de utilizador com sessão iniciada deve ser enviado apenas por HTTPS.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Se o cookie de utilizador com sessão iniciada deve ser enviado apenas por HTTPS. |
| $user_id | `int` | ID do utilizador. |
| $secure | `bool` | Se o cookie de autenticação deve ser enviado apenas por HTTPS. |

### Desde {#since}

- 3.1.0
### Fonte {#source}

Definido em [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) na linha 91
