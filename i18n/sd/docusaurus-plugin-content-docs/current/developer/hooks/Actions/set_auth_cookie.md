---
id: set_auth_cookie
title: عمل - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# عمل: set_auth_cookie

تصديق واري cookie سيٽ ٿيڻ کان بلڪل اڳ هلي ٿو.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $auth_cookie | `string` | تصديق واري cookie جي قيمت. |
| $expire | `int` | اهو وقت جڏهن لاگ اِن جي مهلت جو مدو UNIX timestamp طور ختم ٿئي ٿو. ڊفالٽ cookie جي ختم ٿيڻ واري وقت کان 12 ڪلاڪ پوءِ آهي. |
| $expiration | `int` | اهو وقت جڏهن تصديق واري cookie جو مدو UNIX timestamp طور ختم ٿئي ٿو. ڊفالٽ هاڻ کان 14 ڏينهن آهي. |
| $user_id | `int` | يوزر ID. |
| $scheme | `string` | تصديق وارو scheme. قيمتن ۾ 'auth' يا 'secure_auth' شامل آهن. |
| $token | `string` | هن cookie لاءِ استعمال ڪرڻ واسطي يوزر جو session token. |

### کان وٺي {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### ماخذ {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) ۾ لائين 124 تي بيان ٿيل آهي.
