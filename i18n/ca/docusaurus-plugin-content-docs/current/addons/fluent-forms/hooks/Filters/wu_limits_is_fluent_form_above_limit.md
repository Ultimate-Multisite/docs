---
id: wu_limits_is_fluent_form_above_limit
title: Filter - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filtre: wu_limits_is_fluent_form_above_limit {#filter-wulimitsisfluentformabovelimit}

Comprova si un tipus de formulari donat està permès en aquest pla. Permet als desenvolupadors de plugins filtrar el valor que es retorna.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $value | `bool` | Indica si el tipus de formulari ha superat el límit o no. |
| $form_type | `string` | El tipus de formulari que s'està comprant. |
| $form_count | `int` | El compte actual de formularis. |
| $quota | `int` | La quota màxima permessa. |

### Des {#since}

- 1.0.0
### Font {#source}

- Definit a [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) a la línia 56
- Definit a [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) a la línia 89
