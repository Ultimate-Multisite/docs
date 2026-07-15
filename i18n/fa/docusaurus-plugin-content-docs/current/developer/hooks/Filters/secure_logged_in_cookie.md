---
id: secure_logged_in_cookie
title: فیلتر - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# فیلتر: secure_logged_in_cookie

آیا کوکی ورود باید فقط از طریق HTTPS ارسال شود یا خیر.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | تعیین می‌کند که آیا کوکی ورود باید فقط از طریق HTTPS ارسال شود. |
| $user_id | `int` | شناسه کاربری. |
| $secure | `bool` | تعیین می‌کند که آیا کوکی احراز هویت باید فقط از طریق HTTPS ارسال شود. |

### از نسخه {#since}

- 3.1.0
### منبع {#source}

در [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) در خط ۹۱ تعریف شده است.
