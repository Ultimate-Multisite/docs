---
id: secure_auth_cookie
title: فیلتر - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# فیلتر: secure_auth_cookie {#filter-secureauthcookie}

تعیین می‌کند که آیا کوکی احراز هویت (auth cookie) باید فقط از طریق HTTPS ارسال شود یا خیر.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $secure | `bool` | آیا کوکی باید فقط از طریق HTTPS ارسال شود. |
| $user_id | `int` | شناسه کاربری. |

### از نسخه {#since}

- 3.1.0
### منبع {#source}

در [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) در خط ۸۰ تعریف شده است.
