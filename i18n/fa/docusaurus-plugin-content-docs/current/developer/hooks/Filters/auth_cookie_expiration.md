---
id: auth_cookie_expiration
title: فیلتر - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

این فیلتر، مدت زمان دوره انقضای کوکی احراز هویت را تعیین می‌کند.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | مدت زمان دوره انقضا بر حسب ثانیه. |
| $user_id | `int` | شناسه کاربری. |
| $remember | `bool` | اینکه آیا باید ورود کاربر را به خاطر بسپارد یا خیر. پیش‌فرض آن false است. |

### Since

- 2.8.0
### Source

تعریف شده در [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) در خط ۵۲
