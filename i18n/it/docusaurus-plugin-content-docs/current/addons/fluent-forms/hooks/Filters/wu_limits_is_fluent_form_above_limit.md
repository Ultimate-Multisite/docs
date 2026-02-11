---
id: wu_limits_is_fluent_form_above_limit
title: Filtro - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit

Checks if a given form type is allowed on this plan Allow plugin developers to filter the return value

## Parameters

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $value | `bool` | Se il tipo di modulo è oltre il limite o meno |
| $form_type | `string` | Il tipo di modulo in fase di verifica |
| $form_count | `int` | Conteggio attuale dei moduli |
| $quota | `int` | La quota consentita |

### Since

- 1.0.0

### Source

- Definito in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) alla riga 56
- Definito in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) alla riga 89
