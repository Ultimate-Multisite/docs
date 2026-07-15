---
id: wu_country_get_states
title: Filter - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states

Returnerer listen over delstater for dette landet.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $states | `array` | Liste over delstater i formatet XX => Navn. |
| $country_code | `string` | To-bokstavs ISO-kode for landet. |
| $current_country | `\WP_Ultimo\Country\Country` | Eksemplar av den nåværende klassen. |

### Siden {#since}

- 2.0.11
### Kilde {#source}

Definert i [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) på linje 86


## Returnerer {#returns}
Den filtrerte listen over delstater.
