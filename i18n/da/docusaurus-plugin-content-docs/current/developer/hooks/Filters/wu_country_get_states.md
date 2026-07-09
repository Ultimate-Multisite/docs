---
id: wu_country_get_states
title: Filter - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states

Returnerer listen over stater for dette land.

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $states | `array` | Liste over stater i et XX =&gt; Navn-format. |
| $country_code | `string` | ISO-kode på to bogstaver for landet. |
| $current_country | `\WP_Ultimo\Country\Country` | Instans af den aktuelle klasse. |

### Siden

- 2.0.11
### Kilde

Defineret i [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) på linje 86


## Returnerer
Den filtrerede liste over stater.
