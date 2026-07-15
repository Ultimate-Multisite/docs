---
id: secure_logged_in_cookie
title: Filter - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

लॉग-इन कुकी केवळ HTTPS द्वारे पाठवली जावी की नाही, हे हे फिल्टर ठरवते.

## पॅरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | लॉग-इन कुकी केवळ HTTPS द्वारे पाठवली जावी की नाही. |
| $user_id | `int` | वापरकर्ता आयडी (User ID). |
| $secure | `bool` | ऑथ कुकी केवळ HTTPS द्वारे पाठवली जावी की नाही. |

### Since {#since}

- 3.1.0
### Source {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) मध्ये लाइन ९१ वर परिभाषित केले आहे.
