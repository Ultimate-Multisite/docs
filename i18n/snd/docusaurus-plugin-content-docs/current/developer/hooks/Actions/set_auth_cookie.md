---
id: set_auth_cookie
title: ڪارروائي - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# عمل: set_auth_cookie {#action-setauthcookie}

تصديقي cookie سيٽ ٿيڻ کان بلڪل اڳ هلندو آهي.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $auth_cookie | `string` | تصديقي cookie جي قيمت. |
| $expire | `int` | اهو وقت جڏهن login جي رعايتي مدت UNIX timestamp طور ختم ٿئي ٿي. ڊفالٽ cookie جي ختم ٿيڻ واري وقت کان 12 ڪلاڪ پوءِ آهي. |
| $expiration | `int` | اهو وقت جڏهن تصديقي cookie UNIX timestamp طور ختم ٿئي ٿي. ڊفالٽ هاڻي کان 14 ڏينهن آهي. |
| $user_id | `int` | واپرائيندڙ ID. |
| $scheme | `string` | تصديقي scheme. قيمتن ۾ 'auth' يا 'secure_auth' شامل آهن. |
| $token | `string` | هن cookie لاءِ استعمال ڪرڻ واسطي واپرائيندڙ جو session token. |

### کان وٺي {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### ذريعو {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) ۾ line 124 تي بيان ڪيل.
