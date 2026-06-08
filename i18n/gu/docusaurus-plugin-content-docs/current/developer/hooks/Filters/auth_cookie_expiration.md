---
id: auth_cookie_expiration
title: ફિલ્ટર - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

ઓથેન્ટિકેશન કૂકીની સમાપ્તિ અવધિ (expiration period) ને ફિલ્ટર કરે છે.

## પેરામીટર્સ

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | સેકન્ડ્સમાં સમાપ્તિ અવધિની અવધિ. |
| $user_id | `int` | યુઝર ID. |
| $remember | `bool` | શું યુઝર લોગિન યાદ રાખવું છે કે નહીં. ડિફોલ્ટ: false. |

### ક્યારથી

- 2.8.0
### સ્ત્રોત

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) માં લાઇન 52 પર વ્યાખ્યાયિત છે.
