---
id: set_logged_in_cookie
title: مەشغۇلات - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

كىرىپ بولغان دەلىللەش cookie سى تەڭشىلىشتىن دەل بۇرۇن ئىجرا بولىدۇ.

## پارامېتىرلار

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | كىرىپ بولغان cookie قىممىتى. |
| $expire | `int` | كىرىش مۆھلەتچىلىك ۋاقتىنىڭ ئاخىرلىشىدىغان ۋاقتى، UNIX ۋاقىت تامغىسى سۈپىتىدە. كۆڭۈلدىكى قىممىتى cookie نىڭ ئاخىرلىشىش ۋاقتىدىن 12 سائەت كېيىن. |
| $expiration | `int` | كىرىپ بولغان دەلىللەش cookie سىنىڭ ئاخىرلىشىدىغان ۋاقتى، UNIX ۋاقىت تامغىسى سۈپىتىدە. كۆڭۈلدىكى قىممىتى ھازىردىن 14 كۈن كېيىن. |
| $user_id | `int` | ئىشلەتكۈچى ID سى. |
| $scheme | `string` | دەلىللەش لايىھىسى. كۆڭۈلدىكى قىممىتى 'logged_in'. |
| $token | `string` | بۇ cookie ئۈچۈن ئىشلىتىلىدىغان ئىشلەتكۈچىنىڭ session token ى. |

### باشلاپ

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### مەنبە

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) دا 141-قۇردا بەلگىلەنگەن.
