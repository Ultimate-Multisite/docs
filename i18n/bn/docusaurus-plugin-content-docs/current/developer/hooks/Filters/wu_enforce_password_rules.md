---
id: wu_enforce_password_rules
title: ফিল্টার - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

অতিরিক্ত পাসওয়ার্ড নিয়ম প্রয়োগ করা হবে কিনা তা ফিল্টার করে।

যখন এটি `true` হয়, তখন এটি ন্যূনতম দৈর্ঘ্য এবং অক্ষরের প্রয়োজনীয়তা প্রয়োগ করে। "Super Strong" সেটিং বা যখন Defender Pro-এর Strong Password ফিচার সক্রিয় থাকে, তখন এটি স্বয়ংক্রিয়ভাবে সক্রিয় হয়ে যায়।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | অতিরিক্ত নিয়ম প্রয়োগ করা হবে কিনা। |
| $strength_setting | `string` | অ্যাডমিন সেটিং মান। |
| $defender_active | `bool` | Defender Pro Strong Password সক্রিয় কিনা। |

### Since

- 2.4.0
### Source

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531)-এ লাইন ৫৩১-এ সংজ্ঞায়িত করা হয়েছে।
