---
id: wu_limits_is_fluent_form_above_limit
title: Filter - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit

Kontroluje, či je daný typ formulára povolený v tomto pláne. Umožňuje vývojárom pluginov filtrovať návratovú hodnotu

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $value | `bool` | Či je typ formulára nad limitom alebo nie |
| $form_type | `string` | Typ formulára, ktorý sa kontroluje |
| $form_count | `int` | Aktuálny počet formulárov |
| $quota | `int` | Povolená kvóta |

### Od verzie

- 1.0.0
### Zdroj

- Definované v [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) na riadku 56
- Definované v [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) na riadku 89
