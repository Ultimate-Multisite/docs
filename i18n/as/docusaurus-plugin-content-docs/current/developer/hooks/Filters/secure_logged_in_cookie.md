---
id: secure_logged_in_cookie
title: Filter - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

লগ ইন কৰা কুকিটো কেৱল HTTPS মাজেৰেহে প্ৰেণত কৰিব লাগে নে নাই, সেইটো এই ফিল্টৰে নিৰ্ধাৰণ কৰে।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | লগ ইন কৰা কুকিটো কেৱল HTTPS মাজেৰেহে প্ৰেণত কৰিব লাগে নে নাই। |
| $user_id | `int` | ব্যৱহাৰকাৰীৰ ID। |
| $secure | `bool` | অথেন্টিকেচন কুকিটো কেৱল HTTPS মাজেৰেহে প্ৰেণত কৰিব লাগে নে নাই। |

### Since {#since}

- 3.1.0
### Source {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) ফাইলৰ ৯১ নং শাৰীত সংজ্ঞায়িত কৰা হৈছে।
