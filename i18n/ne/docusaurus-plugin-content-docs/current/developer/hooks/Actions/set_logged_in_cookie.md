---
id: set_logged_in_cookie
title: कार्य - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# कार्य: set_logged_in_cookie

लग-इन प्रमाणीकरण cookie सेट हुनु ठीक अघि चल्छ।

## Parameters

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $logged_in_cookie | `string` | लग-इन cookie मान। |
| $expire | `int` | लगइन grace period समाप्त हुने समय UNIX timestamp को रूपमा। पूर्वनिर्धारित cookie को समाप्ति समयभन्दा १२ घण्टा पछाडि हो। |
| $expiration | `int` | लग-इन प्रमाणीकरण cookie समाप्त हुने समय UNIX timestamp को रूपमा। पूर्वनिर्धारित अहिलेबाट १४ दिन हो। |
| $user_id | `int` | प्रयोगकर्ता ID। |
| $scheme | `string` | प्रमाणीकरण योजना। पूर्वनिर्धारित 'logged_in'। |
| $token | `string` | यस cookie का लागि प्रयोग गर्ने प्रयोगकर्ताको session token। |

### देखि

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### स्रोत

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) मा लाइन 141 मा परिभाषित गरिएको छ।
