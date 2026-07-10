---
id: set_auth_cookie
title: Action - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie {#action-setauthcookie}

ઓથેન્ટિકેશન કૂકી સેટ થતાં પહેલા તરત જ આ એક્શન સક્રિય થાય છે.

## પરિમાણો (Parameters) {#parameters}

| નામ (Name) | પ્રકાર (Type) | વર્ણન (Description) |
|------|------|-------------|
| $auth_cookie | `string` | ઓથેન્ટિકેશન કૂકીનું મૂલ્ય (Authentication cookie value). |
| $expire | `int` | જે સમયે લોગિન ગ્રેસ પીરિયડ સમાપ્ત થાય છે, તે યુનિક્સ ટાઇમસ્ટેમ્પમાં સમય. ડિફોલ્ટ તરીકે કૂકીની સમાપ્તિના સમય પછીના ૧૨ કલાક છે. |
| $expiration | `int` | જે સમયે ઓથેન્ટિકેશન કૂકી સમાપ્ત થાય છે, તે યુનિક્સ ટાઇમસ્ટેમ્પમાં સમય. ડિફોલ્ટ તરીકે આજથી ૧૪ દિવસ છે. |
| $user_id | `int` | યુઝર ID. |
| $scheme | `string` | ઓથેન્ટિકેશન સ્કીમ. મૂલ્યોમાં 'auth' અથવા 'secure_auth' શામેલ છે. |
| $token | `string` | આ કૂકી માટે ઉપયોગ કરવા માટે યુઝરનો સેશન ટોકન. |

### ક્યારથી (Since) {#since}

- 2.5.0
- 4.9.0: <code>$token</code> પરિમાણ ઉમેરવામાં આવ્યું હતું.
### સ્ત્રોત (Source) {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) માં લાઇન ૧૨૪ પર વ્યાખ્યાયિત છે.
