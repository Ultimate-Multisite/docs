---
id: auth_cookie_expiration
title: ফিল্টার - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration {#filter-authcookieexpiration}

প্রমাণীকরণ কুকি মেয়াদকালের সময়কাল নিয়ন্ত্রণ করে।

## প্যারামিটারসমূহ {#parameters}

| Name | Type | বিবরণ |
|------|------|-------------|
| $length | `int` | মেয়াদকালের সময়কাল সেকেন্ডে। |
| $user_id | `int` | ব্যবহারকারী আইডি। |
| $remember | `bool` | ব্যবহারকারীকে লগইন মনে রাখা হবে কিনা। ডিফল্ট false। |

### শুরু {#since}

- 2.8.0
### উৎস {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52)-এ লাইন ৫২-এ সংজ্ঞায়িত করা হয়েছে।
