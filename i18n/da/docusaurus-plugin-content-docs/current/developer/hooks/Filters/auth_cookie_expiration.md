---
id: auth_cookie_expiration
title: Filter - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

Filtrerer varigheden af authentication cookie-udløbsperioden.

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $length | `int` | Varighed af udløbsperioden i sekunder. |
| $user_id | `int` | Bruger-ID. |
| $remember | `bool` | Om brugerlogin skal huskes. Standard false. |

### Siden

- 2.8.0
### Kilde

Defineret i [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) på linje 52
