---
id: wu_limits_is_fluent_form_above_limit
title: Filtro - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filtro: wu_limits_is_fluent_form_above_limit

Verifica se um determinado tipo de formulário é permitido neste plano. Permite que desenvolvedores de plugins filtrem o valor de retorno.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $value | `bool` | Se o tipo de formulário está acima do limite ou não |
| $form_type | `string` | O tipo de formulário que está sendo verificado |
| $form_count | `int` | Contagem atual de formulários |
| $quota | `int` | A cota permitida |

### Since

- 1.0.0

### Source

- Defined in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) at line 56
- Defined in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) at line 89
