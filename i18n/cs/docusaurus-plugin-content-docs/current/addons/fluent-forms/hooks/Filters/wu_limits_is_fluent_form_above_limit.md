---
id: wu_limits_is_fluent_form_above_limit
title: Filtrační - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit

Kontroluje, zda je daný typ formuláře povolen na tomto plánu. Umožňuje vývojářům pluginů filtrovat hodnotu návratu.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $value | `bool` | Pokud je typ formuláře nad limitem, nebo ne. |
| $form_type | `string` | Typ formuláře, který je kontrolován. |
| $form_count | `int` | Aktuální počet formulářů. |
| $quota | `int` | Umožněná kvóta. |

### Od verze {#since}

- 1.0.0
### Zdroj {#source}

- Definováno v [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) na řádku 56
- Definováno v [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) na řádku 89
