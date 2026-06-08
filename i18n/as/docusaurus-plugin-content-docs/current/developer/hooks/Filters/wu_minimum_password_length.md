---
id: wu_minimum_password_length
title: ফিল্টৰ - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

ন্যূনতম পাছৱৰ্ডৰ দৈৰ্ঘ্য ফিল্টাৰ কৰে।

এই ফিল্টাৰটো কেৱল তেতিয়াহে বলবৎ হয় যেতিয়া `wu_enforce_password_rules` সত্য হয়।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | ন্যূনতম পাছৱৰ্ডৰ দৈৰ্ঘ্য। ডিফল্ট ১২ (Defender Pro-ৰ সৈতে মিল)। |
| $defender_active | `bool` | Defender Pro Strong Password কাৰ্য্যক্ষম নে নাই। |

### Since

- 2.4.0
### Source

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) at line 543
