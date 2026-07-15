---
id: wu_country_get_administrative_division_name
title: Isihluzi - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Isihluzi: wu_country_get_administrative_division_name

Sibuyisa igama elihle lamacandelo olawulo elizwe.

## Iiparamitha {#parameters}

| Igama | Uhlobo | Inkcazelo |
|------|------|-------------|
| $name | `string` | Igama lecandelo. Ngokuqhelekileyo liba yinto efana ne-state, province, region, njl. |
| $country_code | `string` | Ikhowudi ye-ISO enoonobumba ababini yelizwe. |
| $state_code | `string` | Ikhowudi ye-ISO enoonobumba ababini ye-state. |
| $ucwords | `bool` | ukuba siwenza amagama abe ngoonobumba abakhulu. |
| $current_country | `\WP_Ultimo\Country\Country` | Instance yeklasi yangoku. |

### Ukusukela {#since}

- 2.0.11
### Umthombo {#source}

Ichazwe kwi [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) kumgca 250


## Ibuyisa {#returns}
Igama lecandelo eliguquliweyo.
