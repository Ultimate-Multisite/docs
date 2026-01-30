---
id: wu_enforce_password_rules
title: "Filter - wu_enforce_password_rules"
sidebar_label: "wu_enforce_password_rules"
---

# Filter: wu_enforce_password_rules

Filter whether to enforce additional password rules.

When true, enforces minimum length and character requirements. Automatically enabled for "Super Strong" setting or when Defender Pro's Strong Password feature is active.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Whether to enforce additional rules. |
| $strength_setting | `string` | The admin setting value. |
| $defender_active | `bool` | Whether Defender Pro Strong Password is active. |

### Since

- 2.4.0
### Source

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) at line 531

