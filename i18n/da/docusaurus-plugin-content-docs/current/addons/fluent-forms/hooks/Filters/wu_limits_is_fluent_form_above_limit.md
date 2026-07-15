---
id: wu_limits_is_fluent_form_above_limit
title: Filter - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit

Tjekker, om en given formulartype er tilladt på denne plan. Giver plugin-udviklere mulighed for at filtrere returværdien

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $value | `bool` | Om formulartypen er over grænsen eller ej |
| $form_type | `string` | Den formulartype, der tjekkes |
| $form_count | `int` | Aktuelt antal formularer |
| $quota | `int` | Den tilladte kvote |

### Siden {#since}

- 1.0.0
### Kilde {#source}

- Defineret i [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) på linje 56
- Defineret i [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) på linje 89
