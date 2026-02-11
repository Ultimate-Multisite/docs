---
id: auth_cookie_expiration
title: Filtro - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filtro: auth_cookie_expiration

Filtra a duração do período de expiração do cookie de autenticação.

## Parameters

| Nome | Tipo | Descrição |
|------|------|-------------|
| $length | `int` | Duração do período de expiração em segundos. |
| $user_id | `int` | ID do usuário. |
| $remember | `bool` | Se deve lembrar o login do usuário. Padrão falso. |

### Desde

- 2.8.0

### Fonte

Definido em [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) na linha 52
