---
id: wu_minimum_password_length
title: Filter - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

পাসওয়ার্ডের ন্যূনতম দৈর্ঘ্য ফিল্টার করে।

শুধুমাত্র যখন `wu_enforce_password_rules` সত্য হয়, তখনই এটি কার্যকর হয়।

## প্যারামিটারসমূহ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | পাসওয়ার্ডের ন্যূনতম দৈর্ঘ্য। ডিফল্ট মান ১২ (Defender Pro-এর সাথে মেলে)। |
| $defender_active | `bool` | Defender Pro Strong Password সক্রিয় আছে কিনা। |

### শুরু {#since}

- 2.4.0
### উৎস {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543)-এ লাইন ৫৪৩-এ সংজ্ঞায়িত।
