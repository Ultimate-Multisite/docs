---
id: wu_country_get_administrative_division_name
title: Scagaire - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Scagaire: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

Filleann sé ainm deas d’fhoranna riaracháin na tíre.

## Paraiméadair {#parameters}

| Ainm | Cineál | Cur síos |
|------|------|-------------|
| $name | `string` | Ainm na foroinne. De ghnáth rud éigin cosúil le stát, cúige, réigiún, srl. |
| $country_code | `string` | Cód ISO dhá litir don tír. |
| $state_code | `string` | Cód ISO dhá litir don stát. |
| $ucwords | `bool` | má chuirimid na focail i gceannlitreacha. |
| $current_country | `\WP_Ultimo\Country\Country` | Ásc den aicme reatha. |

### Ó {#since}

- 2.0.11
### Foinse {#source}

Sainmhínithe in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) ag líne 250


## Filleann {#returns}
Ainm modhnaithe na foroinne.
