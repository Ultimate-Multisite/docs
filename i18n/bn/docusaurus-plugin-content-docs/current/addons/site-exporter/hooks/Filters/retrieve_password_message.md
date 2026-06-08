---
id: retrieve_password_message
title: ফিল্টার - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

এটি পাসওয়ার্ড রিসেট ইমেলের মেসেজের বডি ফিল্টার করে।

## প্যারামিটারসমূহ

| Name | Type | বিবরণ |
|------|------|-------------|
| $message | `string` | ডিফল্ট মেইল মেসেজ। |
| $key | `string` | অ্যাক্টিভেশন কী। |
| $user_login | `string` | ব্যবহারকারীর ইউজারনেম। |
| $user_data | `\WP_User` | WP_User অবজেক্ট। |

### কবে থেকে

- 2.8.0
- 4.1.0: <code>$user_login</code> এবং <code>$user_data</code> প্যারামিটার যোগ করা হয়েছে।
### উৎস

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149)-এর লাইন ১৪৯ এ সংজ্ঞায়িত।

## ফেরত দেয়
ডিফল্ট মেইল মেসেজ।
