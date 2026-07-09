---
id: wu_limits_is_fluent_form_above_limit
title: Filter - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit {#filter-wulimitsisfluentformabovelimit}

Sjekker om en gitt skjema type er tillatt på denne planen. Lar plugin-utviklere filtrere returverdien.

## Parametere {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $value | `bool` | Om skjema-typen er over grensen eller ikke. |
| $form_type | `string` | Skjema-typen som sjekkes. |
| $form_count | `int` | Nåværende skjemaantall. |
| $quota | `int` | Tillatt kvote. |

### Siden {#since}

- 1.0.0
### Kilde {#source}

- Definert i [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) på linje 56
- Definert i [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) på linje 89
