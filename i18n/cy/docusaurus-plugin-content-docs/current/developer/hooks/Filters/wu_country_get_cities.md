---
id: wu_country_get_cities
title: Hidlydd - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Hidlydd: wu_country_get_cities

Yn dychwelyd y rhestr o ddinasoedd ar gyfer talaith mewn gwlad.

## Paramedrau {#parameters}

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $cities | `array` | Rhestr o enwau dinasoedd y dalaith. Nid oes unrhyw allweddi yn bresennol. |
| $country_code | `string` | Cod ISO dwy lythyren ar gyfer y wlad. |
| $state_code | `string` | Cod ISO dwy lythyren ar gyfer y dalaith. |
| $current_country | `\WP_Ultimo\Country\Country` | Enghraifft o'r dosbarth cyfredol. |

### Ers {#since}

- 2.0.11
### Ffynhonnell {#source}

Wedi’i ddiffinio yn [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) ar linell 146


## Yn dychwelyd {#returns}
Y rhestr wedi’i hidlo o daleithiau.
