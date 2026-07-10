---
id: wu_username_from_email
title: ফিল্টার - wu_username_from_email
sidebar_label: wu_username_from_email
_i18n_hash: ab432839e318d008d082383ff5a18467
---
# Filter: wu_username_from_email {#filter-wuusernamefromemail}

নতুন গ্রাহকের ইউজারনেম ফিল্টার করে।

## প্যারামিটারসমূহ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $username | `string` | গ্রাহকের ইউজারনেম। |
| $email | `string` | নতুন গ্রাহকের ইমেল ঠিকানা। |
| $new_user_args | `array` | নতুন ব্যবহারকারীর আর্গুমেন্টগুলির একটি অ্যারে, যার মধ্যে প্রথম এবং শেষ নামও থাকতে পারে। |
| $suffix | `string` | ইউজারনেমকে অনন্য করার জন্য শেষে যুক্ত করার স্ট্রিং। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L516)-এ লাইন ৫১৬-এ সংজ্ঞায়িত।
