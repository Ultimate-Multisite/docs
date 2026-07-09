---
id: auth_cookie_expiration
title: Pagsala - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Pansala: auth_cookie_expiration

Gipansala ang gidugayon sa panahon sa pag-expire sa authentication cookie.

## Mga Parameter

| Ngalan | Matang | Deskripsyon |
|------|------|-------------|
| $length | `int` | Gidugayon sa panahon sa pag-expire sa mga segundo. |
| $user_id | `int` | User ID. |
| $remember | `bool` | Kung hinumduman ba ang login sa user. Ang default kay false. |

### Sukad

- 2.8.0
### Tinubdan

Gidefine sa [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) sa linya 52
