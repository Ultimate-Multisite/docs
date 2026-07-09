---
id: set_logged_in_cookie
title: کردار - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# کردار: set_logged_in_cookie

دەستپێدەکات دەستبەجێ پێش ئەوەی cookieی پشتڕاستکردنەوەی logged-in دابنرێت.

## پارامێتەرەکان

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | نرخی cookieی logged-in. |
| $expire | `int` | ئەو کاتەی ماوەی لێبوردنی چوونەژوورەوە کۆتایی دێت وەک UNIX timestamp. بنەڕەت ١٢ کاتژمێرە دوای کاتی بەسەرچوونی cookie. |
| $expiration | `int` | ئەو کاتەی cookieی پشتڕاستکردنەوەی logged-in بەسەر دەچێت وەک UNIX timestamp. بنەڕەت ١٤ ڕۆژە لە ئێستاوە. |
| $user_id | `int` | ناسنامەی بەکارهێنەر. |
| $scheme | `string` | شێوازی پشتڕاستکردنەوە. بنەڕەت 'logged_in'. |
| $token | `string` | session token ـی بەکارهێنەر بۆ بەکارهێنان بۆ ئەم cookieیە. |

### لەوەوە

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### سەرچاوە

پێناسەکراوە لە [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) لە دێڕی 141
