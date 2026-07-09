---
id: set_auth_cookie
title: Action - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie {#action-setauthcookie}

যখন অথেন্টিকেশন কুকি সেট করা হবে, তার ঠিক আগে এটি কার্যকর হয়।

## প্যারামিটারসমূহ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | অথেন্টিকেশন কুকির মান। |
| $expire | `int` | লগইন গ্রেস পিরিয়ডটি কখন শেষ হবে, তা UNIX টাইমস্ট্যাম্প হিসেবে। ডিফল্ট হিসেবে কুকিটির মেয়াদ শেষ হওয়ার ১২ ঘণ্টা পরে এটি শেষ হবে। |
| $expiration | `int` | কখন অথেন্টিকেশন কুকিটি মেয়াদোত্তীর্ণ হবে, তা UNIX টাইমস্ট্যাম্প হিসেবে। ডিফল্ট হিসেবে এটি এখন থেকে ১৪ দিন পরে সেট করা হয়। |
| $user_id | `int` | ব্যবহারকারীর আইডি। |
| $scheme | `string` | অথেন্টিকেশন স্কিম। এর মানগুলোর মধ্যে 'auth' বা 'secure_auth' থাকতে পারে। |
| $token | `string` | এই কুকির জন্য ব্যবহারকারীর সেশন টোকেন। |

### কখন থেকে {#since}

- 2.5.0
- 4.9.0: <code>$token</code> প্যারামিটারটি যোগ করা হয়েছে।
### উৎস {#source}

এটি [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124)-এ লাইন ১২৪-এ সংজ্ঞায়িত করা হয়েছে।
