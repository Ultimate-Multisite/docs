---
id: wu_limits_is_fluent_form_above_limit
title: Filter - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit

Kontrollerar om en given formulärtyp är tillåtet på denna plan. Gör det möjligt för plugin-utvecklare att filtrera returvärdet.

## Parametrar

| Name | Type | Description |
|------|------|-------------|
| $value | `bool` | Om formulärtypen är över gränsen eller inte |
| $form_type | `string` | Den formulärtyp som kontrolleras |
| $form_count | `int` | Nuvarande antalet formulär |
| $quota | `int` | Den tillåtna kvoten |

### Sedan

- 1.0.0
### Källa

- Definierad i [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) på rad 56
- Definierad i [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) på rad 89
