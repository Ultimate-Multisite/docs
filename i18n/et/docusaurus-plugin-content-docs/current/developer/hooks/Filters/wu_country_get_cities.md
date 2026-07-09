---
id: wu_country_get_cities
title: Filter - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities {#filter-wucountrygetcities}

Tagastab riigi osariigi linnade loendi.

## Parameetrid {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $cities | `array` | Osariigi linnanimede loend. Võtmeid ei ole. |
| $country_code | `string` | Riigi kahetäheline ISO-kood. |
| $state_code | `string` | Osariigi kahetäheline ISO-kood. |
| $current_country | `\WP_Ultimo\Country\Country` | Praeguse klassi instants. |

### Alates {#since}

- 2.0.11
### Allikas {#source}

Määratletud failis [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) real 146


## Tagastab {#returns}
Filtreeritud osariikide loendi.
