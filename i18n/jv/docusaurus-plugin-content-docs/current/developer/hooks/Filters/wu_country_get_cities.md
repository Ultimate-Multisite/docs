---
id: wu_country_get_cities
title: Saringan - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Saringan: wu_country_get_cities {#filter-wucountrygetcities}

Mbalèkaké dhaptar kutha kanggo sawijining negara bagian ing sawijining negara.

## Paramèter {#parameters}

| Jeneng | Tipe | Katrangan |
|------|------|-------------|
| $cities | `array` | Dhaptar jeneng kutha negara bagian. Ora ana kunci sing ana. |
| $country_code | `string` | Kode ISO rong aksara kanggo negara. |
| $state_code | `string` | Kode ISO rong aksara kanggo negara bagian. |
| $current_country | `\WP_Ultimo\Country\Country` | Instance saka class saiki. |

### Wiwit {#since}

- 2.0.11
### Sumber {#source}

Ditetepaké ing [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) ing baris 146


## Mbalèkaké {#returns}
Dhaptar negara bagian sing wis disaring.
