---
id: wu_minimum_password_strength
title: Filter - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

ন্যূনতম পাসওয়ার্ড শক্তি (zxcvbn স্কোর) কত হওয়া দরকার, তা ফিল্টার করে।

শক্তির স্তরগুলো: - 0, 1: খুব দুর্বল - 2: দুর্বল - 3: মাঝারি - 4: শক্তিশালী (ডিফল্ট)

## প্যারামিটারসমূহ

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | প্রয়োজনীয় ন্যূনতম শক্তির স্তর। |
| $strength_setting | `string` | অ্যাডমিন সেটিং এর মান (medium, strong, super_strong)। |

### Since

- 2.4.0
### Source

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) at line 516
