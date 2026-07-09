---
id: wu_limits_is_fluent_form_above_limit
title: Suodatin - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit {#filter-wulimitsisfluentformabovelimit}

Tarkistaa, onko annettu lomaketyyppi sallittu tässä tilauksessa. Sallii plugin-kehittäjien suodattaa palautusarvon

## Parametrit {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $value | `bool` | Onko lomaketyyppi rajan yli vai ei |
| $form_type | `string` | Tarkistettava lomaketyyppi |
| $form_count | `int` | Nykyinen lomakkeiden määrä |
| $quota | `int` | Sallittu kiintiö |

### Alkaen {#since}

- 1.0.0
### Lähde {#source}

- Määritetty tiedostossa [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) rivillä 56
- Määritetty tiedostossa [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) rivillä 89
