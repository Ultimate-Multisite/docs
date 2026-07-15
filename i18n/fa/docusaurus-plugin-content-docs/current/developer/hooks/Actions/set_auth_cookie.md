---
id: set_auth_cookie
title: عمل - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# اکشن: set_auth_cookie

بلافاصله قبل از تنظیم کوکی احراز هویت اجرا می‌شود.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $auth_cookie | `string` | مقدار کوکی احراز هویت. |
| $expire | `int` | زمانی که دوره تنفس (grace period) ورود منقضی می‌شود، به صورت تایم‌استمپ یونیکس. به طور پیش‌فرض ۱۲ ساعت پس از زمان انقضای کوکی است. |
| $expiration | `int` | زمانی که کوکی احراز هویت منقضی می‌شود، به صورت تایم‌استمپ یونیکس. به طور پیش‌فرض ۱۴ روز از امروز است. |
| $user_id | `int` | شناسه کاربری. |
| $scheme | `string` | روش احراز هویت. مقادیر شامل 'auth' یا 'secure_auth' هستند. |
| $token | `string` | توکن نشست (session token) کاربر برای استفاده در این کوکی. |

### از نسخه {#since}

- 2.5.0
- 4.9.0: پارامتر <code>$token</code> اضافه شد.
### منبع {#source}

تعریف شده در [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) در خط ۱۲۴
