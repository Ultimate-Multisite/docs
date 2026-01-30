---
id: wu_minimum_password_strength
title: "Filter - wu_minimum_password_strength"
sidebar_label: "wu_minimum_password_strength"
---

# Filter: wu_minimum_password_strength

Filter the minimum password strength required (zxcvbn score).

Strength levels: - 0, 1: Very weak - 2: Weak - 3: Medium - 4: Strong (default)

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | The minimum strength level required. |
| $strength_setting | `string` | The admin setting value (medium, strong, super_strong). |

### Since

- 2.4.0
### Source

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) at line 516

