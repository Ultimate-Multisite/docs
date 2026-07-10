---
id: wu_minimum_password_strength
title: ফিল্টাৰ - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength {#filter-wuminimumpasswordstrength}

এই ফিল্টাৰে ন্যূনতম পাছৱৰ্ড শক্তি (zxcvbn স্কোৰ) নিৰ্ধাৰণ কৰে।

শক্তিৰ স্তৰসমূহ: - 0, 1: অতি দুৰ্বল - 2: দুৰ্বল - 3: মধ্যমীয়া - 4: শক্তিশালী (ডিফল্ট)

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | ন্যূনতম শক্তিৰ স্তৰ যিটো প্ৰয়োজন। |
| $strength_setting | `string` | এডমিনৰ সেটিং মান (medium, strong, super_strong)। |

### Since {#since}

- 2.4.0
### Source {#source}

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) at line 516
