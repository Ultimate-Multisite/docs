---
id: auth_cookie_expiration
title: Filter - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

Filtrira trajanje obdobja poteka veljavnosti piškotka za preverjanje pristnosti.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | Trajanje obdobja poteka veljavnosti v sekundah. |
| $user_id | `int` | ID uporabnika. |
| $remember | `bool` | Ali naj se prijava uporabnika zapomni. Privzeto false. |

### Od različice

- 2.8.0
### Vir

Določeno v [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) v vrstici 52
