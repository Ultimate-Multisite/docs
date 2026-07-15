---
id: secure_auth_cookie
title: Filter - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie

Bu filtrləmə, auth cookie-sin yalnız HTTPS üzərindən göndərilməli olub-olmaması barədə qərar verir.

## Parametrlər {#parameters}

| Name | Type | Təsvir |
|------|------|-------------|
| $secure | `bool` | Cookie-nin yalnız HTTPS üzərindən göndərilməli olub-olmaması. |
| $user_id | `int` | İstifadəçi ID-si. |

### Nə vaxtdan {#since}

- 3.1.0
### Mənbə {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) faylında 80-ci sətirdə təyin edilmişdir.
