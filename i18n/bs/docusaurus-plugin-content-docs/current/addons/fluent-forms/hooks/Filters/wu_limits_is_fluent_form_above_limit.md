---
id: wu_limits_is_fluent_form_above_limit
title: Filter - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit

Provjerava da li je određen tip forme dopušten na ovom planu. Omogućava developerima pluginova da filtriraju povratnu vrijednost.

## Parametri

| Ime | Tip | Opis |
|------|------|-------------|
| $value | `bool` | Ako je tip forme iznad limita ili ne. |
| $form_type | `string` | Tip forme koji se provjerava. |
| $form_count | `int` | Trenutni broj forma. |
| $quota | `int` | Dopuštena kvota. |

### Od

- 1.0.0
### Izvor

- Definirano u [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) na liniji 56
- Definirano u [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) na liniji 89
