---
id: set_logged_in_cookie
title: Ação - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Ação: set_logged_in_cookie

Dispara imediatamente antes de o cookie de autenticação de login ser definido.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $logged_in_cookie | `string` | O valor do cookie de login. |
| $expire | `int` | O tempo em que o período de carência de login expira como um carimbo de data/hora UNIX. O padrão é 12 horas após a hora de expiração do cookie. |
| $expiration | `int` | O tempo em que o cookie de autenticação de login expira como um carimbo de data/hora UNIX. O padrão é 14 dias a partir de agora. |
| $user_id | `int` | ID do usuário. |
| $scheme | `string` | Esquema de autenticação. Padrão 'logged_in'. |
| $token | `string` | Token de sessão do usuário a ser usado para este cookie. |

### Desde

- 2.6.0
- 4.9.0: O parâmetro <code>$token</code> foi adicionado.

### Fonte

Definido em [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) na linha 141
