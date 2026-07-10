---
id: set_auth_cookie
title: ක්‍රියාව - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie {#action-setauthcookie}

සත්‍යාපන cookie එක සකසීමට තත්ක්ෂණයකට පෙර ක්‍රියාත්මක වේ.

## පරාමිතීන් {#parameters}

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $auth_cookie | `string` | සත්‍යාපන cookie අගය. |
| $expire | `int` | පිවිසුම් සහන කාලය අවසන් වන වේලාව UNIX timestamp එකක් ලෙස. පෙරනිමිය cookie එකේ කල් ඉකුත් වීමේ වේලාවෙන් පැය 12කට පසුවයි. |
| $expiration | `int` | සත්‍යාපන cookie එක කල් ඉකුත් වන වේලාව UNIX timestamp එකක් ලෙස. පෙරනිමිය අද සිට දින 14කි. |
| $user_id | `int` | පරිශීලක ID. |
| $scheme | `string` | සත්‍යාපන scheme. අගයන් ලෙස 'auth' හෝ 'secure_auth' ඇතුළත් වේ. |
| $token | `string` | මෙම cookie එක සඳහා භාවිත කිරීමට පරිශීලකයාගේ session token. |

### සිට {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### මූලාශ්‍රය {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) හි 124 වන පේළියේ අර්ථ දක්වා ඇත.
