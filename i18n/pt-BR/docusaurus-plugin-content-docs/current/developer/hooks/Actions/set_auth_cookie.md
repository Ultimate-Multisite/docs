---
id: set_auth_cookie
title: Ação - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Ação: set_auth_cookie

Dispara imediatamente antes de o cookie de autenticação ser definido.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-----------|
| $auth_cookie | `string` | Valor do cookie de autenticação. |
| $expire | `int` | O tempo em que o período de carência de login expira como um carimbo de data/hora UNIX. O padrão é 12 horas após a data de expiração do cookie. |
| $expiration | `int` | O tempo em que o cookie de autenticação expira como um carimbo de data/hora UNIX. O padrão é 14 dias a partir de agora. |
| $user_id | `int` | ID do usuário. |
| $scheme | `string` | Esquema de autenticação. Valores incluem 'auth' ou 'secure_auth'. |
| $token | `string` | Token de sessão do usuário a ser usado para este cookie. |

### Desde

- 2.5.0
- 4.9.0: O parâmetro <code>$token</code> foi adicionado.

### Fonte

Definido em [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) na linha 124
