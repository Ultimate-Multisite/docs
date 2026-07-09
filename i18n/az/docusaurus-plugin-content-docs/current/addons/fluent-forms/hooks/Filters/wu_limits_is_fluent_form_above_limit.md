---
id: wu_limits_is_fluent_form_above_limit
title: Filter - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit {#filter-wulimitsisfluentformabovelimit}

Verilmiş bir form növünün bu plan üzrə icazə verilip verilmədiyini yoxlayır. Plugin developerlarına qaytarılan dəyəri (return value) filtrləməyə imkan verir.

## Parametrlər {#parameters}

| Ad | Növ | Təsvir |
|------|------|-------------|
| $value | `bool` | Form növü limitin yuxarısında olub-olmadığı. |
| $form_type | `string` | Yoxlanılan form növü. |
| $form_count | `int` | Hazırkı form sayı. |
| $quota | `int` | İcazə verilən kvota. |

### Nə vaxtdan {#since}

- 1.0.0
### Mənbə {#source}

- Defined in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) at line 56
- Defined in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) at line 89
