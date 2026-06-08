---
id: secure_auth_cookie
title: Filter - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie

यह फ़िल्टर करता है कि ऑथ कुकी (auth cookie) केवल HTTPS के माध्यम से भेजी जानी चाहिए या नहीं।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $secure | `bool` | क्या कुकी केवल HTTPS पर भेजी जानी चाहिए। |
| $user_id | `int` | उपयोगकर्ता आईडी। |

### Since

- 3.1.0
### Source

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) में लाइन 80 पर परिभाषित है
