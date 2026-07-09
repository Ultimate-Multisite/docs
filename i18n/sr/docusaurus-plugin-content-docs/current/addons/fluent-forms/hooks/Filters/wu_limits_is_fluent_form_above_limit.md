---
id: wu_limits_is_fluent_form_above_limit
title: Филтер - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Филтер: wu_limits_is_fluent_form_above_limit

Проверава да ли је дати тип обрасца дозвољен на овом плану. Омогућава програмерима plugin-а да филтрирају повратну вредност

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $value | `bool` | Да ли је тип обрасца изнад ограничења или није |
| $form_type | `string` | Тип обрасца који се проверава |
| $form_count | `int` | Тренутни број образаца |
| $quota | `int` | Дозвољена квота |

### Од верзије

- 1.0.0
### Извор

- Дефинисано у [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) у реду 56
- Дефинисано у [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) у реду 89
