---
id: auth_cookie_expiration
title: Filter - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration {#filter-authcookieexpiration}

Filtrerar varaktigheten för autentiseringskaksutgångsperioden.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $length | `int` | Varaktigheten av utgångsperioden i sekunder. |
| $user_id | `int` | Användar-ID. |
| $remember | `bool` | Om man ska komma ihåg användarens inloggning. Standardvärde är false. |

### Sedan {#since}

- 2.8.0
### Källa {#source}

Definieras i [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) på rad 52
