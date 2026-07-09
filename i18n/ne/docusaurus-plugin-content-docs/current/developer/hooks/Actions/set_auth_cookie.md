---
id: set_auth_cookie
title: कार्य - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

प्रमाणीकरण कुकी सेट हुनु ठीक अघि ट्रिगर हुन्छ।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | प्रमाणीकरण कुकी मान। |
| $expire | `int` | लगइन अनुग्रह अवधि UNIX timestamp का रूपमा समाप्त हुने समय। पूर्वनिर्धारित कुकीको समाप्ति समयपछि १२ घण्टा हो। |
| $expiration | `int` | प्रमाणीकरण कुकी UNIX timestamp का रूपमा समाप्त हुने समय। पूर्वनिर्धारित अहिलेबाट १४ दिन हो। |
| $user_id | `int` | प्रयोगकर्ता ID। |
| $scheme | `string` | प्रमाणीकरण योजना। मानहरूमा 'auth' वा 'secure_auth' समावेश छन्। |
| $token | `string` | यस कुकीका लागि प्रयोग गर्नुपर्ने प्रयोगकर्ताको session token। |

### Since

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Source

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) मा पङ्क्ति 124 मा परिभाषित।
