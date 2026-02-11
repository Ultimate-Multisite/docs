---
id: wu_limits_is_fluent_form_above_limit
title: Фильтр - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit

Проверяет, разрешён ли данный тип формы в рамках этого плана. Позволяет разработчикам плагинов фильтровать возвращаемое значение.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $value | `bool` | Если тип формы превышает лимит или нет |
| $form_type | `string` | Тип формы, который проверяется |
| $form_count | `int` | Текущее количество форм |
| $quota | `int` | Разрешённый квот |

### Since

- 1.0.0

### Source

- Определено в [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) at line 56
- Определено в [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) at line 89
