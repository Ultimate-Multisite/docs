---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

Returnerar det snygga namnet på landets administrativa underindelningar.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $name | `string` | Underdelningsnamnet. Vanligtvis något i stil med delstat, provins, region, etc. |
| $country_code | `string` | Tvobokstavig ISO-kod för landet. |
| $state_code | `string` | Tvobokstavig ISO-kod för delstaten. |
| $ucwords | `bool` | Om vi ska skriva versaler på orden. |
| $current_country | `\WP_Ultimo\Country\Country` | Instans av den aktuella klassen. |

### Sedan {#since}

- 2.0.11
### Källa {#source}

Definieras i [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) på rad 250


## Returnerar {#returns}
Det modifierade underdelningsnamnet.
