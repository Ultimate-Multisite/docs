---
id: set_logged_in_cookie
title: Action - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

जेव्हा लॉग-इन प्रमाणीकरण (authentication) कुकी सेट केली जाते, तेव्हा या ॲक्शनला लगेच कार्यान्वित केले जाते.

## पॅरामीटर्स (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | लॉग-इन कुकीचे मूल्य (value). |
| $expire | `int` | लॉग-इन ग्रॅस पीरियड कधी संपेल, हे UNIX timestamp मध्ये दर्शवते. डीफॉल्ट (Default) म्हणजे कुकीच्या समाप्ती वेळेनंतर १२ तास. |
| $expiration | `int` | लॉग-इन प्रमाणीकरण कुकी कधी संपेल, हे UNIX timestamp मध्ये दर्शवते. डीफॉल्ट म्हणजे आजपासून १४ दिवस. |
| $user_id | `int` | वापरकर्ता आयडी (User ID). |
| $scheme | `string` | प्रमाणीकरण योजना (Authentication scheme). डीफॉल्ट 'logged_in' आहे. |
| $token | `string` | या कुकीसाठी वापरण्यासाठी वापरकर्त्याचा सेशन टोकन (session token). |

### Since {#since}

- 2.6.0
- 4.9.0: <code>$token</code> पॅरामीटर जोडण्यात आला.
### Source {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) मध्ये लाइन १४१ वर परिभाषित केले आहे.
