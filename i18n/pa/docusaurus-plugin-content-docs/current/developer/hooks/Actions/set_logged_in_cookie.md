---
id: set_logged_in_cookie
title: Action - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

ਇਹ `logged-in` authentication cookie set ਹੋਣ ਤੋਂ ਥੋੜ੍ਹੀ ਦੇਰ ਪਹਿਲਾਂ ਚੱਲਦਾ ਹੈ।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | ਲੌਗ-ਇਨ cookie ਦਾ ਮੁੱਲ। |
| $expire | `int` | ਉਹ ਸਮਾਂ ਜਦੋਂ ਲੌਗਇਨ ਗ੍ਰੇਸ ਪੀਰੀਅਡ ਖਤਮ ਹੋ ਜਾਵੇਗਾ, ਇੱਕ UNIX ਟਾਈਮਸਟੈਂਪ ਵਜੋਂ। ਡਿਫਾਲਟ cookie ਦੀ Expiration time ਤੋਂ 12 ਘੰਟੇ ਬਾਅਦ ਹੁੰਦਾ ਹੈ। |
| $expiration | `int` | ਉਹ ਸਮਾਂ ਜਦੋਂ ਲੌਗ-ਇਨ authentication cookie ਖਤਮ ਹੋ ਜਾਵੇਗਾ, ਇੱਕ UNIX ਟਾਈਮਸਟੈਂਪ ਵਜੋਂ। ਡਿਫਾਲਟ ਅੱਜ ਤੋਂ 14 ਦਿਨ ਬਾਅਦ ਹੁੰਦਾ ਹੈ। |
| $user_id | `int` | ਯੂਜ਼ਰ ID। |
| $scheme | `string` | Authentication scheme। ਡਿਫਾਲਟ 'logged_in' ਹੈ। |
| $token | `string` | ਇਸ cookie ਲਈ ਵਰਤਣ ਲਈ ਯੂਜ਼ਰ ਦਾ session token। |

### Since {#since}

- 2.6.0
- 4.9.0: <code>$token</code> ਪੈਰਾਮੀਟਰ ਜੋੜਿਆ ਗਿਆ ਸੀ।
### Source {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) ਵਿੱਚ ਲਾਈਨ 141 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਹੈ।
