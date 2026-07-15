---
id: set_logged_in_cookie
title: عمل - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# عمل: set_logged_in_cookie

لاگ اِن تصديق واري ڪوڪي سيٽ ٿيڻ کان فوراً اڳ هلندو آهي.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $logged_in_cookie | `string` | لاگ اِن ڪوڪي جي قيمت. |
| $expire | `int` | اهو وقت جڏهن لاگ اِن گريس مدت UNIX timestamp طور ختم ٿئي ٿي. ڊفالٽ ڪوڪي جي ختم ٿيڻ واري وقت کان 12 ڪلاڪ پوءِ آهي. |
| $expiration | `int` | اهو وقت جڏهن لاگ اِن تصديق واري ڪوڪي UNIX timestamp طور ختم ٿئي ٿي. ڊفالٽ هاڻي کان 14 ڏينهن آهي. |
| $user_id | `int` | استعمال ڪندڙ ID. |
| $scheme | `string` | تصديق اسڪيم. ڊفالٽ 'logged_in'. |
| $token | `string` | هن ڪوڪي لاءِ استعمال ڪرڻ واسطي استعمال ڪندڙ جو session token. |

### کان وٺي {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### ذريعو {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) ۾ لڪير 141 تي بيان ٿيل آهي.
