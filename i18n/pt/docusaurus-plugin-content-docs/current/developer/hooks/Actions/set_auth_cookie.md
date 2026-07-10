---
id: set_auth_cookie
title: Ação - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Ação: set_auth_cookie {#action-setauthcookie}

Dispara imediatamente antes de o cookie de autenticação ser definido.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $auth_cookie | `string` | Valor do cookie de autenticação. |
| $expire | `int` | O momento em que o período de tolerância de início de sessão expira, como um timestamp UNIX. O padrão é 12 horas após o tempo de expiração do cookie. |
| $expiration | `int` | O momento em que o cookie de autenticação expira, como um timestamp UNIX. O padrão é 14 dias a partir de agora. |
| $user_id | `int` | ID do utilizador. |
| $scheme | `string` | Esquema de autenticação. Os valores incluem 'auth' ou 'secure_auth'. |
| $token | `string` | Token de sessão do utilizador a utilizar para este cookie. |

### Desde {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Fonte {#source}

Definido em [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) na linha 124
