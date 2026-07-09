---
id: auth_cookie_expiration
title: Filtër - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration {#filter-authcookieexpiration}

Filtron kohëzgjatjen e periudhës së skadimit të cookie-t të autentikimit.

## Parametrat {#parameters}

| Emri | Lloji | Përshkrimi |
|------|------|-------------|
| $length | `int` | Kohëzgjatja e periudhës së skadimit në sekonda. |
| $user_id | `int` | ID e përdoruesit. |
| $remember | `bool` | Nëse duhet të mbahet mend hyrja e përdoruesit. Parazgjedhja false. |

### Që nga {#since}

- 2.8.0
### Burimi {#source}

Përcaktuar në [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) në rreshtin 52
