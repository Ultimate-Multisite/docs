---
id: auth_cookie_expiration
title: Filter - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration {#filter-authcookieexpiration}

ਪ੍ਰਮਾਣਿਕਤਾ (authentication) কুকੀ ਦੀ ਮਿਆਦ (expiration period) ਦੀ ਮਿਆਦ ਨੂੰ ਫਿਲਟਰ ਕਰਦਾ ਹੈ।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | ਸੈਕਿੰਡਾਂ ਵਿੱਚ ਮਿਆਦ। |
| $user_id | `int` | ਯੂਜ਼ਰ ID। |
| $remember | `bool` | ਕੀ ਯੂਜ਼ਰ ਲੌਗਇਨ ਯਾਦ ਰੱਖਣਾ ਹੈ। ਡਿਫਾਲਟ (Default) ਫਾਲਸ (false)। |

### Since {#since}

- 2.8.0
### Source {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) ਵਿੱਚ ਲਾਈਨ 52 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਗਿਆ ਹੈ।
