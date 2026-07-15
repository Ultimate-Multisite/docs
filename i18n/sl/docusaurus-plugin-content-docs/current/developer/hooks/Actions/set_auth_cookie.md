---
id: set_auth_cookie
title: Dejanje - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

Sproži se tik preden je nastavljena avtentikacijska piškotek.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | Vrednost avtentikacijskega piškotka. |
| $expire | `int` | Čas, ko poteče obdobje odloga za prijavo, kot UNIX časovni žig. Privzeto je 12 ur po času poteka piškotka. |
| $expiration | `int` | Čas, ko avtentikacijski piškotek poteče, kot UNIX časovni žig. Privzeto je 14 dni od zdaj. |
| $user_id | `int` | ID uporabnika. |
| $scheme | `string` | Shema avtentikacije. Vrednosti vključujejo 'auth' ali 'secure_auth'. |
| $token | `string` | Uporabnikov žeton seje, ki se uporabi za ta piškotek. |

### Od različice {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Vir {#source}

Določeno v [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) v vrstici 124
