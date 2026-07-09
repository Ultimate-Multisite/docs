---
id: set_logged_in_cookie
title: Action - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# অ্যাকশন: set_logged_in_cookie {#action-setloggedincookie}

এই অ্যাকশনটি লগইন করা প্রমাণীকরণ কুকি সেট করার ঠিক আগে ট্রিগার হয়।

## প্যারামিটারসমূহ {#parameters}

| Name | Type | বিবরণ |
|------|------|-------------|
| $logged_in_cookie | `string` | লগইন কুকির মান। |
| $expire | `int` | লগইন গ্রেস পিরিয়ডটি কখন শেষ হবে, তা ইউনিক্স টাইমস্ট্যাম্প হিসেবে। ডিফল্ট হিসেবে কুকিটির মেয়াদ শেষ হওয়ার ১২ ঘণ্টা পরে। |
| $expiration | `int` | কখন লগইন প্রমাণীকরণ কুকিটি মেয়াদোত্তীর্ণ হবে, তা ইউনিক্স টাইমস্ট্যাম্প হিসেবে। ডিফল্ট হিসেবে এখন থেকে ১৪ দিন। |
| $user_id | `int` | ব্যবহারকারী আইডি। |
| $scheme | `string` | প্রমাণীকরণ স্কিম। ডিফল্ট 'logged_in'। |
| $token | `string` | এই কুকির জন্য ব্যবহারকারীর সেশন টোকেন। |

### শুরু {#since}

- 2.6.0
- 4.9.0: <code>$token</code> প্যারামিটারটি যোগ করা হয়েছে।
### উৎস {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141)-এ লাইন ১৪১-এ সংজ্ঞায়িত করা হয়েছে।
