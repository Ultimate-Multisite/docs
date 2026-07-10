---
id: set_auth_cookie
title: ئەمەل - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# ھەرىكەت: set_auth_cookie {#action-setauthcookie}

دەلىللەش cookie سى تەڭشىلىشتىن دەرھال بۇرۇن ئىجرا بولىدۇ.

## پارامېتىرلار {#parameters}

| نامى | تىپى | چۈشەندۈرۈشى |
|------|------|-------------|
| $auth_cookie | `string` | دەلىللەش cookie قىممىتى. |
| $expire | `int` | كىرىشنىڭ مۆھلەتلىك رۇخسەت ۋاقتى توشىدىغان ۋاقىت، UNIX timestamp شەكلىدە. كۆڭۈلدىكى قىممىتى cookie نىڭ مۆھلىتى توشقان ۋاقىتتىن كېيىنكى 12 سائەت. |
| $expiration | `int` | دەلىللەش cookie سىنىڭ مۆھلىتى توشىدىغان ۋاقىت، UNIX timestamp شەكلىدە. كۆڭۈلدىكى قىممىتى ھازىردىن باشلاپ 14 كۈن. |
| $user_id | `int` | ئىشلەتكۈچى ID سى. |
| $scheme | `string` | دەلىللەش سىخېمىسى. قىممەتلىرى 'auth' ياكى 'secure_auth' نى ئۆز ئىچىگە ئالىدۇ. |
| $token | `string` | بۇ cookie ئۈچۈن ئىشلىتىلىدىغان ئىشلەتكۈچىنىڭ سېسىيە token ى. |

### باشلاپ {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### مەنبە {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) ئىچىدە 124-قۇردا ئېنىقلانغان.
