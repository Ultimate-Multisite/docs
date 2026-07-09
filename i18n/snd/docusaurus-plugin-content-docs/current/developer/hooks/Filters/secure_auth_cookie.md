---
id: secure_auth_cookie
title: فلٽر - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# فلٽر: secure_auth_cookie

فلٽر ڪري ٿو ته auth cookie رڳو HTTPS تي موڪلي وڃي يا نه.

## پيرا ميٽر

| نالو | قسم | وضاحت |
|------|------|-------------|
| $secure | `bool` | ڇا cookie رڳو HTTPS تي موڪلي وڃي. |
| $user_id | `int` | استعمال ڪندڙ ID. |

### کان وٺي

- 3.1.0
### ذريعو

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) ۾ لڪير 80 تي بيان ڪيل.
