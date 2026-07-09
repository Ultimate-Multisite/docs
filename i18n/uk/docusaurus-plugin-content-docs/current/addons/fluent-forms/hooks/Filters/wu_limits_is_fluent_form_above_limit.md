---
id: wu_limits_is_fluent_form_above_limit
title: Фільтр - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit {#filter-wulimitsisfluentformabovelimit}

Перевіряє, чи дозволено заданому типу форми у поточному плані. Дозволяє розробникам плагінів фільтрувати значення, яке повертається.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $value | `bool` | Чи перевищено ліміт для цього типу форми, чи ні |
| $form_type | `string` | Перевіряний тип форми |
| $form_count | `int` | Поточна кількість форм |
| $quota | `int` | Дозволена квота |

### Since {#since}

- 1.0.0
### Source {#source}

- Defined in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) at line 56
- Defined in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) at line 89
