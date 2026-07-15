---
id: set_auth_cookie
title: Akce - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

Vykonává se těsně před nastavením cookie pro ověření.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $auth_cookie | `string` | Hodnota cookie pro ověření. |
| $expire | `int` | Čas, kdy vyprší lhůta pro přihlášení, jako UNIX časová razítko. Výchozí hodnota je 12 hodin po vypršení cookie. |
| $expiration | `int` | Čas, kdy cookie pro ověření vyprší, jako UNIX časová razítko. Výchozí hodnota je za 14 dní. |
| $user_id | `int` | ID uživatele. |
| $scheme | `string` | Schéma ověření. Hodnoty zahrnují 'auth' nebo 'secure_auth'. |
| $token | `string` | Token uživatele, který se použije pro toto cookie. |

### Od {#since}

- 2.5.0
- 4.9.0: Byl přidán parametr <code>$token</code>.
### Zdroj {#source}

Definováno v [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) na řádku 124
