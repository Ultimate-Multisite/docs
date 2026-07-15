---
id: set_auth_cookie
title: کړنه - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# عمل: set_auth_cookie

سمدستي مخکې له دې فعالېږي چې د تصدیق کوکي وټاکل شي.

## پارامترونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $auth_cookie | `string` | د تصدیق کوکي ارزښت. |
| $expire | `int` | هغه وخت چې د ننوتلو د مهلت موده د UNIX مهال‌ټاپ په توګه پای ته رسېږي. اصلي ټاکنه د کوکي د پای نېټې څخه ۱۲ ساعته وروسته ده. |
| $expiration | `int` | هغه وخت چې د تصدیق کوکي د UNIX مهال‌ټاپ په توګه پای ته رسېږي. اصلي ټاکنه له اوس څخه ۱۴ ورځې ده. |
| $user_id | `int` | د کارونکي پېژند. |
| $scheme | `string` | د تصدیق طرحه. ارزښتونه 'auth' یا 'secure_auth' شاملوي. |
| $token | `string` | د دې کوکي لپاره د کارولو د کارونکي د ناستې token. |

### له نسخې راهیسې {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### سرچینه {#source}

په [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) کې په ۱۲۴ کرښه تعریف شوی.
