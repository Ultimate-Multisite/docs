---
id: wu_limits_is_fluent_form_above_limit
title: Filter - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit {#filter-wulimitsisfluentformabovelimit}

Controleert of een gegeven formulier type is toegestaan op dit plan. Sta plugin-ontwikkelaars toe om de geretourneerde waarde te filteren.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $value | `bool` | Of het formulier type boven de limiet ligt of niet |
| $form_type | `string` | Het formulier type dat wordt gecontroleerd |
| $form_count | `int` | Huidig aantal formulieren |
| $quota | `int` | De toegestane quota |

### Since {#since}

- 1.0.0

### Source {#source}

- Gedefinieerd in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) op regel 56
- Gedefinieerd in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) op regel 89
