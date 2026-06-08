---
id: secure_auth_cookie
title: Filtrační metoda - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie

Filtruje, zda by měl autentizační cookie být odesílán pouze přes HTTPS.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $secure | `bool` | Zda má cookie být odesílán pouze přes HTTPS. |
| $user_id | `int` | ID uživatele. |

### Od verze

- 3.1.0
### Zdroj

Definováno v [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) na řádku 80
