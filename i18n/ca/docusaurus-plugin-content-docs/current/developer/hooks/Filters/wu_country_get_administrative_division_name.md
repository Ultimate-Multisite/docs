---
id: wu_country_get_administrative_division_name
title: Filtre - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filtre: wu_country_get_administrative_division_name

Retorna el nom bonic de les subdivisions administratives del país.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $name | `string` | El nom de la divisió. Normalment alguna cosa com estat, província, regió, etc. |
| $country_code | `string` | Codi ISO de dues lletres del país. |
| $state_code | `string` | Codi ISO de dues lletres de l’estat. |
| $ucwords | `bool` | si posem les paraules en majúscules. |
| $current_country | `\WP_Ultimo\Country\Country` | Instància de la classe actual. |

### Des de {#since}

- 2.0.11
### Font {#source}

Definit a [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) a la línia 250


## Retorna {#returns}
El nom de la divisió modificat.
