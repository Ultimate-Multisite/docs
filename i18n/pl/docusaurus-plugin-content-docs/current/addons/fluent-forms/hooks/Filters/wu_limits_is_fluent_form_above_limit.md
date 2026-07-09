---
id: wu_limits_is_fluent_form_above_limit
title: Filtr - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit {#filter-wulimitsisfluentformabovelimit}

Sprawdza, czy podany typ formularza jest dozwolony w ramach obecnego planu. Pozwala deweloperom pluginów filtrować wartość zwracaną.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $value | `bool` | Wartość boolowska określająca, czy typ formularza przekracza limit, czy nie. |
| $form_type | `string` | Typ formularza, który jest sprawdzany. |
| $form_count | `int` | Aktualna liczba formularzy. |
| $quota | `int` | Dopuszczalny limit. |

### Since {#since}

- 1.0.0
### Source {#source}

- Zdefiniowane w [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) na linii 56
- Zdefiniowane w [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) na linii 89
