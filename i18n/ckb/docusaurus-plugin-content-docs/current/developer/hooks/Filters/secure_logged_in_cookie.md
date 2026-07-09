---
id: secure_logged_in_cookie
title: فلتەر - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# پاڵێوەر: secure_logged_in_cookie

پاڵێوە دەکات کە ئایا cookieی چوونەژوورەوە تەنها پێویستە لەسەر HTTPS بنێردرێت.

## پارامێتەرەکان

| ناو | جۆر | وەسف |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | ئایا cookieی چوونەژوورەوە تەنها پێویستە لەسەر HTTPS بنێردرێت. |
| $user_id | `int` | ناسنامەی بەکارهێنەر. |
| $secure | `bool` | ئایا cookieی پشتڕاستکردنەوە تەنها پێویستە لەسەر HTTPS بنێردرێت. |

### لە وەشانی

- 3.1.0
### سەرچاوە

پێناسە کراوە لە [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) لە هێڵی 91
