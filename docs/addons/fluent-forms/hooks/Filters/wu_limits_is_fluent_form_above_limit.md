---
id: wu_limits_is_fluent_form_above_limit
title: "Filter - wu_limits_is_fluent_form_above_limit"
sidebar_label: "wu_limits_is_fluent_form_above_limit"
---

# Filter: wu_limits_is_fluent_form_above_limit

Checks if a given form type is allowed on this plan Allow plugin developers to filter the return value

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $value | `bool` | If the form type is above limit or not |
| $form_type | `string` | The form type being checked |
| $form_count | `int` | Current form count |
| $quota | `int` | The allowed quota |

### Since

- 1.0.0
### Source

- Defined in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) at line 56
- Defined in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) at line 89