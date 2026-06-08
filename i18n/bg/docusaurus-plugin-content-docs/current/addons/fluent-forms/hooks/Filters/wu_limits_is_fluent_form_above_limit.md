---
id: wu_limits_is_fluent_form_above_limit
title: Филтър - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit

Проверява дали определен тип форма е разрешен в текущия план. Това позволява на разработчиците на плагини да филтрират стойността, която се връща.

## Параметри

| Name | Type | Описание |
|------|------|-------------|
| $value | `bool` | Проверява дали типът форма надхвърля ли лимита или не |
| $form_type | `string` | Типът форма, който се проверява |
| $form_count | `int` | Текущ брой форми |
| $quota | `int` | Разрешената квота |

### От версия

- 1.0.0
### Източник

- Дефиниран в [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) на линия 56
- Дефиниран в [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) на линия 89
