---
id: wu_limits_is_fluent_form_above_limit
title: Filtër - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit

Kontrollon nëse një lloj i caktuar formulari lejohet në këtë plan. U lejon zhvilluesve të plugin-it të filtrojnë vlerën e kthyer

## Parametrat {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $value | `bool` | Nëse lloji i formularit është mbi limit apo jo |
| $form_type | `string` | Lloji i formularit që po kontrollohet |
| $form_count | `int` | Numri aktual i formularëve |
| $quota | `int` | Kuota e lejuar |

### Që prej {#since}

- 1.0.0
### Burimi {#source}

- Përcaktuar në [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) në rreshtin 56
- Përcaktuar në [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) në rreshtin 89
