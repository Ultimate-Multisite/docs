---
id: wu_country_get_states
title: Filter - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states

Returnerar listan över delstater för detta land.

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $states | `array` | Lista över delstater i formatet XX => Namn. |
| $country_code | `string` | Tvåbokstavig ISO-kod för landet. |
| $current_country | `\WP_Ultimo\Country\Country` | Instans av den aktuella klassen. |

### Sedan

- 2.0.11
### Källa

Definieras i [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) på rad 86


## Returnerar
Den filtrerade listan över delstater.
