---
id: wu_limits_is_fluent_form_above_limit
title: Filter - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit

Preveri, ali je dana vrsta obrazca dovoljena v tem planu. Omogoča razvijalcem plugina filtriranje vrnjene vrednosti

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $value | `bool` | Ali je vrsta obrazca nad omejitvijo ali ne |
| $form_type | `string` | Vrsta obrazca, ki se preverja |
| $form_count | `int` | Trenutno število obrazcev |
| $quota | `int` | Dovoljena kvota |

### Od {#since}

- 1.0.0
### Vir {#source}

- Določeno v [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) v vrstici 56
- Določeno v [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) v vrstici 89
