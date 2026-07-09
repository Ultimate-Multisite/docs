---
id: wu_country_get_cities
title: Filtru - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filtru: wu_country_get_cities {#filter-wucountrygetcities}

Jirritorna l-lista ta' bliet għal stat f'pajjiż.

## Parametri {#parameters}

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $cities | `array` | Lista ta' ismijiet ta' bliet tal-istat. M'hemm l-ebda keys preżenti. |
| $country_code | `string` | Kodiċi ISO b'żewġ ittri għall-pajjiż. |
| $state_code | `string` | Kodiċi ISO b'żewġ ittri għall-istat. |
| $current_country | `\WP_Ultimo\Country\Country` | Istanza tal-klassi attwali. |

### Minn {#since}

- 2.0.11
### Sors {#source}

Definit f'[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) fil-linja 146


## Jirritorna {#returns}
Il-lista ffiltrata ta' stati.
