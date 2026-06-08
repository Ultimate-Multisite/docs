---
id: secure_logged_in_cookie
title: Filter - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

Bu filtrləmə, giriş kukisinin yalnız HTTPS protokolu vasitəsilə göndərilməli olub-olmaması məsələsini müəyyən edir.

## Parametrlər

| Name | Type | Təsvir |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Giriş kukisinin yalnız HTTPS üzərindən göndərilməli olub-olmaması. |
| $user_id | `int` | İstifadəçi ID-si. |
| $secure | `bool` | Autentifikasiya kukisinin yalnız HTTPS üzərindən göndərilməli olub-olmaması. |

### Nə vaxtdan

- 3.1.0
### Mənbə

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) faylında 91-ci sətirdə təyin edilmişdir.
