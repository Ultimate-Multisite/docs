---
id: wu_limits_is_fluent_form_above_limit
title: Филтер - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Филтер: wu_limits_is_fluent_form_above_limit

Проверува дали даден тип на формулар е дозволен на овој план. Им овозможува на развивачите на plugin да ја филтрираат повратната вредност

## Параметри

| Име | Тип | Опис |
|------|------|-------------|
| $value | `bool` | Дали типот на формулар е над ограничувањето или не |
| $form_type | `string` | Типот на формулар што се проверува |
| $form_count | `int` | Тековен број на формулари |
| $quota | `int` | Дозволената квота |

### Од

- 1.0.0
### Извор

- Дефинирано во [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) на линија 56
- Дефинирано во [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) на линија 89
