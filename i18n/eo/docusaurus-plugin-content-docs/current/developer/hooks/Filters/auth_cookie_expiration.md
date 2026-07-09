---
id: auth_cookie_expiration
title: Filtrilo - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filtro: auth_cookie_expiration {#filter-authcookieexpiration}

Filtras la daŭron de la eksvalidiĝa periodo de la aŭtentikiga kuketo.

## Parametroj {#parameters}

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $length | `int` | Daŭro de la eksvalidiĝa periodo en sekundoj. |
| $user_id | `int` | ID de uzanto. |
| $remember | `bool` | Ĉu memori la ensaluton de la uzanto. Defaŭlte false. |

### Ekde {#since}

- 2.8.0
### Fonto {#source}

Difinita en [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) ĉe linio 52
