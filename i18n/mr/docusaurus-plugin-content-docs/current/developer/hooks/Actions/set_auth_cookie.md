---
id: set_auth_cookie
title: Action - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

जेव्हा प्रमाणीकरण कुकी (authentication cookie) सेट केली जाते, तेव्हा या ॲक्शनला लगेच ट्रिगर केले जाते.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | प्रमाणीकरण कुकीचे मूल्य (Authentication cookie value). |
| $expire | `int` | लॉगइन ग्रेश पीरियड (login grace period) कधी संपतो, हे युनिक्स टाइमस्टॅम्पमध्ये (UNIX timestamp) दिले जाते. डीफॉल्टनुसार, हे कुकीच्या समाप्ती वेळेनंतर १२ तास असते. |
| $expiration | `int` | प्रमाणीकरण कुकी कधी समाप्त होईल, हे युनिक्स टाइमस्टॅम्पमध्ये (UNIX timestamp) दिले जाते. डीफॉल्टनुसार, हे आजपासून १४ दिवसांनंतरचे असते. |
| $user_id | `int` | वापरकर्ता आयडी (User ID). |
| $scheme | `string` | प्रमाणीकरण योजना (Authentication scheme). यामध्ये 'auth' किंवा 'secure_auth' हे मूल्य समाविष्ट आहेत. |
| $token | `string` | या कुकीसाठी वापरण्यासाठी वापरकर्त्याचे सेशन टोकन (User's session token). |

### Since {#since}

- 2.5.0
- 4.9.0: <code>$token</code> पॅरामीटर जोडण्यात आला.
### Source {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) मध्ये लाइन १२४ वर परिभाषित केले आहे.
