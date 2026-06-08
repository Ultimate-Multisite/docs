---
id: wu_country_get_cities
title: Filter - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

Returnerar en lista över städer för en delstat i ett land.

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $cities | `array` | Lista över stadnamn i delstaten. Inga nycklar finns med. |
| $country_code | `string` | Tvobokstavig ISO-kod för landet. |
| $state_code | `string` | Tvobokstavig ISO-kod för delstaten. |
| $current_country | `\WP_Ultimo\Country\Country` | Instans av den aktuella klassen. |

### Sedan

- 2.0.11
### Källa

Definieras i [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) på rad 146


## Returnerar
Den filtrerade listan över delstater.
