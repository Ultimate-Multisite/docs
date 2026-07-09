---
id: secure_logged_in_cookie
title: فلٽر - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# فلٽر: secure_logged_in_cookie

فلٽر ڪري ٿو ته لاگ اِن ٿيل cookie صرف HTTPS تي موڪلي وڃي يا نه.

## پيرا ميٽر

| نالو | قسم | وضاحت |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | ڇا لاگ اِن ٿيل cookie صرف HTTPS تي موڪلي وڃي. |
| $user_id | `int` | User ID. |
| $secure | `bool` | ڇا auth cookie صرف HTTPS تي موڪلي وڃي. |

### کان وٺي

- 3.1.0
### ذريعو

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) ۾ line 91 تي بيان ڪيل.
