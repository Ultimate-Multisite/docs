---
id: set_auth_cookie
title: کردار - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# کردار: set_auth_cookie

دەستپێدەکات یەکسەر پێش ئەوەی authentication cookie دابنرێت.

## پارامێتەرەکان {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | نرخی authentication cookie. |
| $expire | `int` | ئەو کاتەی ماوەی بەزەیی login کۆتایی دێت وەک UNIX timestamp. بنەڕەت ١٢ کاتژمێرە دوای کاتی بەسەرچوونی cookie. |
| $expiration | `int` | ئەو کاتەی authentication cookie بەسەر دەچێت وەک UNIX timestamp. بنەڕەت ١٤ ڕۆژە لە ئێستاوە. |
| $user_id | `int` | ناسنامەی بەکارهێنەر. |
| $scheme | `string` | شێوازی authentication. نرخەکان 'auth' یان 'secure_auth' لەخۆدەگرن. |
| $token | `string` | session token ـی بەکارهێنەر بۆ بەکارهێنان بۆ ئەم cookie ـە. |

### لەوەوە {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### سەرچاوە {#source}

پێناسەکراوە لە [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) لە هێڵی 124
