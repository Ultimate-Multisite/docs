---
id: set_auth_cookie
title: Action - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

প্ৰমাণীকৰণ কুকি (authentication cookie) সেট কৰাৰ ঠিক আগতে এই কাৰ্যটো ট্ৰিগাৰ হয়।

## প্যারামিটাৰসমূহ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | প্ৰমাণীকৰণ কুকিৰ মান। |
| $expire | `int` | লগইনৰ সুবিধাৰ সময়সীমা (grace period) UNIX ট্ৰিগাৰ সময় হিচাপে ক'ত শেষ হয়। ডিফল্টভাৱে কুকিটোৰ শেষ হোৱাৰ সময়ৰ ১২ ঘণ্টা পাছৰ। |
| $expiration | `int` | যেতিয়া প্ৰমাণীকৰণ কুকিটো শেষ হয়, সেই সময় UNIX ট্ৰিগাৰ সময় হিচাপে। ডিফল্টভাৱে এতিয়াৰ পৰা ১৪ দিন পাছৰ। |
| $user_id | `int` | ব্যৱহাৰকাৰীৰ ID। |
| $scheme | `string` | প্ৰমাণীকৰণ স্কীম। মানবোৰত 'auth' বা 'secure_auth' অন্তৰ্ভুক্ত। |
| $token | `string` | এই কুকিটোৰ বাবে ব্যৱহাৰ কৰিবলগীয়া ব্যৱহাৰকাৰীৰ ছেচন টোকেন। |

### ক'ৰ পৰা উপলব্ধ {#since}

- 2.5.0
- 4.9.0: <code>$token</code> প্যারামিটাৰটো যোগ কৰা হৈছিল।
### উৎস {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) ফাইলৰ ১২৪ নং শাৰীত সংজ্ঞায়িত।
