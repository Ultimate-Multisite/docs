---
id: wu_country_get_cities
title: Penapis - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

Mengembalikan senarai bandar untuk sebuah negeri dalam sesebuah negara.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $cities | `array` | Senarai nama bandar negeri. Tiada kunci (keys) yang disertakan. |
| $country_code | `string` | Kod ISO dua huruf untuk negara tersebut. |
| $state_code | `string` | Kod ISO dua huruf untuk negeri tersebut. |
| $current_country | `\WP_Ultimo\Country\Country` | Contoh (instance) kelas semasa. |

### Since

- 2.0.11
### Source

Defined in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) at line 146


## Returns
Senarai negeri yang telah ditapis.
