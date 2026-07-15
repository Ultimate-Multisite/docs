---
id: set_logged_in_cookie
title: Action - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

આ એક્શન લોગ-ઇન ઓથેન્ટિકેશન કૂકી સેટ થતાની બરાબર પહેલા ચાલે છે.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | લોગ-ઇન કૂકીનું મૂલ્ય (The logged-in cookie value). |
| $expire | `int` | જે સમયે લોગિન ગ્રેસ પીરિયડ સમાપ્ત થાય છે, તે UNIX ટાઇમસ્ટેમ્પમાં સમય. ડિફોલ્ટ તરીકે કૂકીની સમાપ્તિના સમય પછીના 12 કલાક. |
| $expiration | `int` | જે સમયે લોગ-ઇન ઓથેન્ટિકેશન કૂકી સમાપ્ત થાય છે, તે UNIX ટાઇમસ્ટેમ્પમાં સમય. ડિફોલ્ટ તરીકે આજથી 14 દિવસ. |
| $user_id | `int` | યુઝર ID. |
| $scheme | `string` | ઓથેન્ટિકેશન સ્કીમ. ડિફોલ્ટ 'logged_in'. |
| $token | `string` | આ કૂકી માટે ઉપયોગમાં લેવા માટે યુઝરનો સેશન ટોકન. |

### Since {#since}

- 2.6.0
- 4.9.0: <code>$token</code> પેરામીટર ઉમેરવામાં આવ્યું.
### Source {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) માં લાઇન 141 પર વ્યાખ્યાયિત.
