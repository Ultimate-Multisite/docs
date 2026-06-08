---
id: wu_generated_username_from_email
title: Filter - wu_generated_username_from_email
sidebar_label: wu_generated_username_from_email
_i18n_hash: ad708562b0c2c9c80d1d5845ef1e67b7
---
# Filter: wu_generated_username_from_email

গ্রাহকের তৈরি হওয়া ইউজারনেম ফিল্টার করা।

## প্যারামিটারসমূহ (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $username | `string` | তৈরি হওয়া ইউজারনেম। |
| $email | `string` | নতুন গ্রাহকের ইমেল ঠিকানা। |
| $new_user_args | `array` | নতুন ব্যবহারকারীর আর্গুমেন্টগুলির একটি অ্যারে, যার মধ্যে প্রথম এবং শেষ নামও থাকতে পারে। |
| $suffix | `string` | ইউজারনেমকে অনন্য (unique) করার জন্য শেষে যুক্ত করার স্ট্রিং। |

### কবে থেকে (Since)

- 3.7.0
### উৎস (Source)

Defined in [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L488) at line 488
