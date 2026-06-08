---
id: set_auth_cookie
title: Action - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

ਇਸਨੂੰ ਪ੍ਰਮਾਣਿਕਤਾ ਕੁਕੀ (authentication cookie) ਸੈੱਟ ਹੋਣ ਤੋਂ ਤੁਰੰਤ ਪਹਿਲਾਂ ਚੱਲਦਾ ਹੈ।

## Parameters

| Name | Type | ਵਰਣਨ |
|------|------|-------------|
| $auth_cookie | `string` | ਪ੍ਰਮਾਣਿਕਤਾ ਕੁਕੀ ਦਾ ਮੁੱਲ (Authentication cookie value)। |
| $expire | `int` | ਉਹ ਸਮਾਂ ਜਦੋਂ ਲੌਗਇਨ ਗ੍ਰੇਸ ਪੀਰੀਅਡ ਖਤਮ ਹੁੰਦਾ ਹੈ, ਯੂਨਿਕਸ ਟਾਈਮਸਟੈਂਪ ਵਜੋਂ। ਡਿਫਾਲਟ ਕੁਕੀ ਦੀ ਮਿਆਦ ਖਤਮ ਹੋਣ ਤੋਂ 12 ਘੰਟੇ ਬਾਅਦ ਹੈ। |
| $expiration | `int` | ਉਹ ਸਮਾਂ ਜਦੋਂ ਪ੍ਰਮਾਣਿਕਤਾ ਕੁਕੀ ਖਤਮ ਹੁੰਦੀ ਹੈ, ਯੂਨਿਕਸ ਟਾਈਮਸਟੈਂਪ ਵਜੋਂ। ਡਿਫਾਲਟ ਅੱਜ ਤੋਂ 14 ਦਿਨ ਬਾਅਦ ਹੈ। |
| $user_id | `int` | ਯੂਜ਼ਰ ID। |
| $scheme | `string` | ਪ੍ਰਮਾਣਿਕਤਾ ਸਕੀਮ। ਮੁੱਲਾਂ ਵਿੱਚ 'auth' ਜਾਂ 'secure_auth' ਸ਼ਾਮਲ ਹਨ। |
| $token | `string` | ਇਸ ਕੁਕੀ ਲਈ ਵਰਤਣ ਲਈ ਯੂਜ਼ਰ ਦਾ ਸੈਸ਼ਨ ਟੋਕਨ। |

### Since

- 2.5.0
- 4.9.0: <code>$token</code> ਪੈਰਾਮੀਟਰ ਜੋੜਿਆ ਗਿਆ ਸੀ।
### Source

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) ਵਿੱਚ ਲਾਈਨ 124 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਗਿਆ ਹੈ।
