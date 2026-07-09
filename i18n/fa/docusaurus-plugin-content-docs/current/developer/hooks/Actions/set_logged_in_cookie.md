---
id: set_logged_in_cookie
title: Action - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# اکشن: set_logged_in_cookie {#action-setloggedincookie}

بلافاصله قبل از اینکه کوکی احراز هویت ورود (logged-in authentication cookie) تنظیم شود، اجرا می‌شود.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $logged_in_cookie | `string` | مقدار کوکی ورود. |
| $expire | `int` | زمانی که دوره تنفس (grace period) ورود منقضی می‌شود، به صورت تایم‌استمپ یونیکس. به طور پیش‌فرض ۱۲ ساعت پس از زمان انقضای کوکی است. |
| $expiration | `int` | زمانی که کوکی احراز هویت ورود منقضی می‌شود، به صورت تایم‌استمپ یونیکس. به طور پیش‌فرض ۱۴ روز از امروز است. |
| $user_id | `int` | شناسه کاربری (User ID). |
| $scheme | `string` | طرح احراز هویت. به طور پیش‌فرض 'logged_in' است. |
| $token | `string` | توکن نشست (session token) کاربر برای استفاده در این کوکی. |

### از نسخه {#since}

- 2.6.0
- 4.9.0: پارامتر <code>$token</code> اضافه شد.
### منبع {#source}

در [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) در خط ۱۴۱ تعریف شده است.
