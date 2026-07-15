---
id: secure_auth_cookie
title: Filter - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie

এই ফিল্টাৰে নিৰ্ধাৰণ কৰে যে অথ কুকিটো কেৱল HTTPS মাজেৰেহে প্ৰেণত কৰা হ'ব নে নাই।

## পৰামিটারসমূহ {#parameters}

| Name | Type | বিৱৰণ |
|------|------|-------------|
| $secure | `bool` | কুকিটো কেৱল HTTPS মাজেৰেহে প্ৰেণত কৰা হ'ব নে নাই। |
| $user_id | `int` | ইউজাৰ আইডি। |

### Since {#since}

- 3.1.0
### উৎস {#source}

- [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) ত লাইন ৮০-ত সংজ্ঞায়িত কৰা হৈছে
