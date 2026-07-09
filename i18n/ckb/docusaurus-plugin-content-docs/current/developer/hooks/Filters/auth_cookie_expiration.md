---
id: auth_cookie_expiration
title: فلتەر - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# پاڵێوەر: auth_cookie_expiration

ماوەی کۆتاییهاتنی cookieی پشتڕاستکردنەوە دیاری دەکات.

## پارامێتەرەکان

| ناو | جۆر | وەسف |
|------|------|-------------|
| $length | `int` | ماوەی کۆتاییهاتن بە چرکە. |
| $user_id | `int` | ناسنامەی بەکارهێنەر. |
| $remember | `bool` | ئایا چوونەژوورەوەی بەکارهێنەر لەبیر بکرێت. بنەڕەت false. |

### لەو وەشانەوە

- 2.8.0
### سەرچاوە

لە [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) لە هێڵی 52 پێناسە کراوە.
