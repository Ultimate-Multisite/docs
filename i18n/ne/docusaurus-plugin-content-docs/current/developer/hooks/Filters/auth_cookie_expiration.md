---
id: auth_cookie_expiration
title: फिल्टर - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# फिल्टर: auth_cookie_expiration

प्रमाणीकरण cookie समाप्ति अवधिको अवधि फिल्टर गर्छ।

## प्यारामिटरहरू

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $length | `int` | समाप्ति अवधिको अवधि सेकेन्डमा। |
| $user_id | `int` | प्रयोगकर्ता ID। |
| $remember | `bool` | प्रयोगकर्ता login सम्झने कि नसम्झने। पूर्वनिर्धारित false। |

### देखि

- 2.8.0
### स्रोत

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) मा पंक्ति 52 मा परिभाषित गरिएको छ।
