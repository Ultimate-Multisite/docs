---
id: set_logged_in_cookie
title: ක්‍රියාව - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# ක්‍රියාව: set_logged_in_cookie

පිවිසී සිටින සත්‍යාපන කුකිය සැකසීමට මොහොතකට පෙර ක්‍රියාත්මක වේ.

## පරාමිතීන්

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $logged_in_cookie | `string` | පිවිසී සිටින කුකියේ අගය. |
| $expire | `int` | පිවිසුම් සහන කාලය අවසන් වන වේලාව UNIX කාලමුද්‍රාවක් ලෙස. පෙරනිමිය කුකියේ කල් ඉකුත්වීමේ වේලාවෙන් පැය 12කට පසුවයි. |
| $expiration | `int` | පිවිසී සිටින සත්‍යාපන කුකිය කල් ඉකුත් වන වේලාව UNIX කාලමුද්‍රාවක් ලෙස. පෙරනිමිය දැන් සිට දින 14කි. |
| $user_id | `int` | පරිශීලක හැඳුනුම්පත. |
| $scheme | `string` | සත්‍යාපන ක්‍රමය. පෙරනිමිය 'logged_in'. |
| $token | `string` | මෙම කුකිය සඳහා භාවිත කිරීමට පරිශීලකයාගේ සැසි ටෝකනය. |

### සිට

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### මූලාශ්‍රය

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) තුළ 141 වන පේළියේ අර්ථ දක්වා ඇත.
