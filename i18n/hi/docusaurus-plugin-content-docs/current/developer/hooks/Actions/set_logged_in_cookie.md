---
id: set_logged_in_cookie
title: Action - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie {#action-setloggedincookie}

यह एक्शन तब चलता है जब लॉग-इन ऑथेंटिकेशन कुकी सेट होने वाली होती है।

## पैरामीटर्स {#parameters}

| Name | Type | विवरण |
|------|------|-------------|
| $logged_in_cookie | `string` | लॉग-इन कुकी का मान। |
| $expire | `int` | वह समय जब लॉग-इन ग्रेश पीरियड समाप्त होता है (यूनिक्स टाइमस्टैम्प के रूप में)। डिफ़ॉल्ट रूप से, यह कुकी की समाप्ति के समय से 12 घंटे बाद का होता है। |
| $expiration | `int` | वह समय जब लॉग-इन ऑथेंटिकेशन कुकी समाप्त होती है (यूनिक्स टाइमस्टैम्प के रूप में)। डिफ़ॉल्ट रूप से, यह अभी से 14 दिन बाद का होता है। |
| $user_id | `int` | उपयोगकर्ता ID। |
| $scheme | `string` | ऑथेंटिकेशन स्कीम। डिफ़ॉल्ट 'logged_in' है। |
| $token | `string` | इस कुकी के लिए उपयोग करने हेतु उपयोगकर्ता का सेशन टोकन। |

### कब से उपलब्ध {#since}

- 2.6.0
- 4.9.0: <code>$token</code> पैरामीटर जोड़ा गया था।
### स्रोत {#source}

[inc/sso/auth-functions.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) में लाइन 141 पर परिभाषित किया गया है।
