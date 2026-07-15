---
id: set_logged_in_cookie
title: کړنه - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

سمدستي مخکې له دې فعالېږي چې د ننوتلي کارن د تصدیق cookie وټاکل شي.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | د ننوتلي کارن د cookie ارزښت. |
| $expire | `int` | هغه وخت چې د ننوتلو د مهلت دوره د UNIX timestamp په توګه پای ته رسېږي. تلواله یې د cookie د پای ته رسېدو له وخت څخه ۱۲ ساعته وروسته ده. |
| $expiration | `int` | هغه وخت چې د ننوتلي کارن د تصدیق cookie د UNIX timestamp په توګه پای ته رسېږي. تلواله یې له اوسه ۱۴ ورځې وروسته ده. |
| $user_id | `int` | د کارن ID. |
| $scheme | `string` | د تصدیق سکیم. تلواله 'logged_in'. |
| $token | `string` | د دې cookie لپاره د کارن د ناستې token. |

### Since {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Source {#source}

په [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) کې په ۱۴۱ کرښه تعریف شوی.
