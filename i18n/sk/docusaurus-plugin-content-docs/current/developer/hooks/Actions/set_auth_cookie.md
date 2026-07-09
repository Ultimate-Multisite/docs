---
id: set_auth_cookie
title: Akcia - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

Spustí sa bezprostredne pred nastavením autentifikačného cookie.

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $auth_cookie | `string` | Hodnota autentifikačného cookie. |
| $expire | `int` | Čas, keď uplynie tolerančné obdobie prihlásenia, ako časová pečiatka UNIX. Predvolená hodnota je 12 hodín po čase vypršania platnosti cookie. |
| $expiration | `int` | Čas, keď autentifikačné cookie vyprší, ako časová pečiatka UNIX. Predvolená hodnota je 14 dní odteraz. |
| $user_id | `int` | ID používateľa. |
| $scheme | `string` | Autentifikačná schéma. Hodnoty zahŕňajú 'auth' alebo 'secure_auth'. |
| $token | `string` | Token relácie používateľa, ktorý sa má použiť pre toto cookie. |

### Od verzie

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Zdroj

Definované v [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) na riadku 124
