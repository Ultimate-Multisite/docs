---
id: wu_limits_is_fluent_form_above_limit
title: Filtru - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit

Verifică dacă un anumit tip de formular este permis pe acest plan. Permite dezvoltatorilor de plugin să filtreze valoarea returnată.

## Parametri

| Nume | Tip | Descriere |
|------|------|-------------|
| $value | `bool` | Indică dacă tipul de formular depășește limita sau nu. |
| $form_type | `string` | Tipul de formular care este verificat. |
| $form_count | `int` | Numărul curent de formulare. |
| $quota | `int` | Cota maximă permisă. |

### De la

- 1.0.0
### Sursă

- Definit în [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) la linia 56
- Definit în [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) la linia 89
