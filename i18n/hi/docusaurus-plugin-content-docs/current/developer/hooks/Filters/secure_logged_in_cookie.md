---
id: secure_logged_in_cookie
title: Filter - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

यह फ़िल्टर निर्धारित करता है कि लॉग-इन कुकी केवल HTTPS पर भेजी जानी चाहिए या नहीं।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | क्या लॉग-इन कुकी केवल HTTPS पर भेजी जानी चाहिए। |
| $user_id | `int` | उपयोगकर्ता ID। |
| $secure | `bool` | क्या ऑथ कुकी केवल HTTPS पर भेजी जानी चाहिए। |

### Since {#since}

- 3.1.0
### Source {#source}

Defined in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) at line 91
