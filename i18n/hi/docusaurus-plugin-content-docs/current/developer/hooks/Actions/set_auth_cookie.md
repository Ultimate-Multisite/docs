---
id: set_auth_cookie
title: Action - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie {#action-setauthcookie}

यह एक्शन प्रमाणीकरण कुकी (authentication cookie) सेट होने से ठीक पहले ट्रिगर होता है।

## पैरामीटर्स {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $auth_cookie | `string` | प्रमाणीकरण कुकी का मान (value)। |
| $expire | `int` | वह समय जब लॉगिन ग्रेश पीरियड समाप्त होगा, जिसे यूनिक्स टाइमस्टैम्प के रूप में दर्शाया गया है। डिफ़ॉल्ट रूप से, यह कुकी की समाप्ति के 12 घंटे बाद का समय होता है। |
| $expiration | `int` | वह समय जब प्रमाणीकरण कुकी समाप्त होगी, जिसे यूनिक्स टाइमस्टैम्प के रूप में दर्शाया गया है। डिफ़ॉल्ट रूप से, यह आज से 14 दिन बाद का समय होता है। |
| $user_id | `int` | उपयोगकर्ता आईडी। |
| $scheme | `string` | प्रमाणीकरण स्कीम। मानों में 'auth' या 'secure_auth' शामिल हैं। |
| $token | `string` | इस कुकी के लिए उपयोग किया जाने वाला उपयोगकर्ता का सेशन टोकन। |

### कब से उपलब्ध {#since}

- 2.5.0
- 4.9.0: <code>$token</code> पैरामीटर जोड़ा गया।
### स्रोत {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) में लाइन 124 पर परिभाषित।
