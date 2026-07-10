---
id: secure_auth_cookie
title: Filter - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie {#filter-secureauthcookie}

এটি ফিল্টার করে যে অথ কুকিটি শুধুমাত্র HTTPS এর মাধ্যমে পাঠানো হবে কিনা।

## প্যারামিটারসমূহ {#parameters}

| নাম | ধরন | বিবরণ |
|------|------|-------------|
| $secure | `bool` | কুকিটি শুধুমাত্র HTTPS এর মাধ্যমে পাঠানো হবে কিনা। |
| $user_id | `int` | ব্যবহারকারী আইডি। |

### যেহেতু {#since}

- 3.1.0
### উৎস {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80)-এ লাইন ৮০-এ সংজ্ঞায়িত করা হয়েছে
