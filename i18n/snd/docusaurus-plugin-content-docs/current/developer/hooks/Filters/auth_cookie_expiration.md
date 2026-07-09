---
id: auth_cookie_expiration
title: فلٽر - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# فلٽر: auth_cookie_expiration

تصدیقي cookie جي ختم ٿيڻ واري مدت جو عرصو فلٽر ڪري ٿو.

## پيرا ميٽر

| نالو | قسم | وضاحت |
|------|------|-------------|
| $length | `int` | ختم ٿيڻ واري مدت جو عرصو سيڪنڊن ۾. |
| $user_id | `int` | واپرائيندڙ ID. |
| $remember | `bool` | ڇا واپرائيندڙ جي لاگ اِن کي ياد رکڻو آهي. ڊفالٽ false. |

### کان وٺي

- 2.8.0
### ذريعو

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) ۾ line 52 تي بيان ڪيل.
