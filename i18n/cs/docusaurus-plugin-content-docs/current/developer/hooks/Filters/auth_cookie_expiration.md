---
id: auth_cookie_expiration
title: Filtrační metoda - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration {#filter-authcookieexpiration}

Filtruje dobu platnosti cookie pro ověření autentizace.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $length | `int` | Délka období platnosti v sekundách. |
| $user_id | `int` | ID uživatele. |
| $remember | `bool` | Čím se má uživatelské přihlášení zapamatovat. Výchozí hodnota je `false`. |

### Od {#since}

- 2.8.0
### Zdroj {#source}

Definováno v [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) na řádku 52
