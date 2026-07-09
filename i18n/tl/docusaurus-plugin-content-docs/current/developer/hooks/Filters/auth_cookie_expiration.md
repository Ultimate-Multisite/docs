---
id: auth_cookie_expiration
title: Filtro - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

Sinasala ang tagal ng panahon ng pag-expire ng authentication cookie.

## Mga Parameter

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $length | `int` | Tagal ng panahon ng pag-expire sa mga segundo. |
| $user_id | `int` | User ID. |
| $remember | `bool` | Kung tatandaan ang pag-login ng user. Default ay false. |

### Mula Noong

- 2.8.0
### Pinagmulan

Tinukoy sa [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) sa linya 52
