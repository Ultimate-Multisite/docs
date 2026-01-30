---
id: wu_minimum_password_length
title: "Filter - wu_minimum_password_length"
sidebar_label: "wu_minimum_password_length"
---

# Filter: wu_minimum_password_length

Filter the minimum password length.

Only enforced when wu_enforce_password_rules is true.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | Minimum password length. Default 12 (matches Defender Pro). |
| $defender_active | `bool` | Whether Defender Pro Strong Password is active. |

### Since

- 2.4.0
### Source

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) at line 543

