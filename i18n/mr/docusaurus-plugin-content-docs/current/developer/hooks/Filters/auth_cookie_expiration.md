---
id: auth_cookie_expiration
title: Filter - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

प्रमाणीकरण कुकीच्या मुदत समाप्ती कालावधीला फिल्टर (Filter) करतो.

## पॅरामीटर्स

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | मुदत समाप्ती कालावधी सेकंदांमध्ये. |
| $user_id | `int` | युजर आयडी. |
| $remember | `bool` | युजर लॉगिन आठवणीत ठेवायचे की नाही. डीफॉल्ट: false. |

### कधीपासून

- 2.8.0
### स्रोत

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) मध्ये लाइन ५२ वर परिभाषित केले आहे.
