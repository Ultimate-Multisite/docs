---
id: set_logged_in_cookie
title: Action - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie {#action-setloggedincookie}

লগ ইন কৰা প্ৰমাণীকৰণ কুকিটো সেট কৰাৰ ঠিক আগতে এই Action টি কলিছে।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | লগ ইন কৰা কুকিৰ মান। |
| $expire | `int` | লগ ইনৰ অনুগ্ৰহ সময়কালটো UNIX timestamp হিচাপে ক'ত শেষ হয়। ডিফল্ট হিচাপে কুকিটোৰ মেয়াদ শেষ হোৱাৰ ১২ ঘণ্টা পাছৰ। |
| $expiration | `int` | লগ ইন কৰা প্ৰমাণীকৰণ কুকিটো ক'ত মেয়াদ শেষ হয়, সেয়া UNIX timestamp হিচাপে। ডিফল্ট হিচাপে এতিয়াৰ পৰা ১৪ দিন। |
| $user_id | `int` | ব্যৱহাৰকাৰীৰ ID। |
| $scheme | `string` | প্ৰমাণীকৰণ পদ্ধতি। ডিফল্ট 'logged_in'। |
| $token | `string` | এই কুকিটোৰ বাবে ব্যৱহাৰ কৰিবলগীয়া ব্যৱহাৰকাৰীৰ ছেচন টোকেন। |

### Since {#since}

- 2.6.0
- 4.9.0: <code>$token</code> পৰামাপৰিক (parameter) টি যোগ কৰা হৈছে।
### Source {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) ফাইলৰ লাইন ১৪১ ত সংজ্ঞায়িত কৰা হৈছে।
