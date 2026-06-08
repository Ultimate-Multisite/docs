---
id: auth_cookie_expiration
title: फ़िल्टर - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

यह प्रमाणीकरण (authentication) कुकी की समाप्ति अवधि को नियंत्रित करता है।

## पैरामीटर्स

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | समाप्ति अवधि सेकंड में। |
| $user_id | `int` | उपयोगकर्ता आईडी। |
| $remember | `bool` | क्या उपयोगकर्ता के लॉगिन को याद रखना है। डिफ़ॉल्ट रूप से false। |

### कब से उपलब्ध

- 2.8.0
### स्रोत

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) में लाइन 52 पर परिभाषित।
