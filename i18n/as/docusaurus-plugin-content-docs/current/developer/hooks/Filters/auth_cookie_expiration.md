---
id: auth_cookie_expiration
title: Filter - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filter: auth_cookie_expiration

এই ফিল্টাৰে অথেনটিকেচন কুকিৰ মেয়াদ শেষ হোৱাৰ সময়কাল নিয়ন্ত্ৰণ কৰে।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | মেয়াদ শেষ হোৱাৰ সময়কাল (second) ত। |
| $user_id | `int` | ব্যৱহাৰকাৰীৰ আইডি (User ID)। |
| $remember | `bool` | ব্যৱহাৰকাৰীক লগইন স্মৰণ কৰিব নে নাই। ডিফল্টভাৱে false। |

### Since {#since}

- 2.8.0
### Source {#source}

Defined in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) at line 52
