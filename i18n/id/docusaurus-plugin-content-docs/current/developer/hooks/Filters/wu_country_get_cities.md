---
id: wu_country_get_cities
title: Filter - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

Mengembalikan daftar kota untuk suatu negara bagian di suatu negara.

## Parameter

| Name | Type | Description |
|------|------|-------------|
| $cities | `array` | Daftar nama kota di negara bagian. Tidak ada kunci yang digunakan. |
| $country_code | `string` | Kode ISO dua huruf untuk negara. |
| $state_code | `string` | Kode ISO dua huruf untuk negara bagian. |
| $current_country | `\WP_Ultimo\Country\Country` | Instance dari kelas saat ini. |

### Sejak

- 2.0.11
### Sumber

Didefinisikan di [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) pada baris 146


## Mengembalikan
Daftar negara bagian yang sudah difilter.
