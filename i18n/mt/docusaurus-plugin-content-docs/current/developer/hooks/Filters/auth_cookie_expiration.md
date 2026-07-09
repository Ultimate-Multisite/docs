---
id: auth_cookie_expiration
title: Filtru - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

Jiffiltra t-tul tal-perjodu ta' skadenza tal-cookie tal-awtentikazzjoni.

## Parametri

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $length | `int` | Tul tal-perjodu ta' skadenza f'sekondi. |
| $user_id | `int` | ID tal-utent. |
| $remember | `bool` | Jekk għandux jiftakar il-login tal-utent. Default false. |

### Minn

- 2.8.0
### Sors

Definit f'[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) fil-linja 52
