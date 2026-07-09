---
id: auth_cookie_expiration
title: فلٽر - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# فلٽر: auth_cookie_expiration {#filter-authcookieexpiration}

تصديق واري cookie جي ختم ٿيڻ واري مدت جو عرصو فلٽر ڪري ٿو.

## پيراميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $length | `int` | ختم ٿيڻ واري مدت جو عرصو سيڪنڊن ۾. |
| $user_id | `int` | User ID. |
| $remember | `bool` | ڇا استعمال ڪندڙ جي login کي ياد رکڻو آهي. ڊفالٽ false. |

### کان وٺي {#since}

- 2.8.0
### ذريعو {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) ۾ قطار 52 تي بيان ٿيل آهي.
