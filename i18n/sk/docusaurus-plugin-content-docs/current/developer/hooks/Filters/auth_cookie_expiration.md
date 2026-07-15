---
id: auth_cookie_expiration
title: Filter - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

Filtruje trvanie obdobia vypršania platnosti autentifikačného cookie.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $length | `int` | Trvanie obdobia vypršania platnosti v sekundách. |
| $user_id | `int` | ID používateľa. |
| $remember | `bool` | Či si zapamätať prihlásenie používateľa. Predvolené false. |

### Od verzie {#since}

- 2.8.0
### Zdroj {#source}

Definované v [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) na riadku 52
