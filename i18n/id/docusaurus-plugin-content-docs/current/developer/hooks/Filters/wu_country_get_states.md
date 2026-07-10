---
id: wu_country_get_states
title: Filter - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states {#filter-wucountrygetstates}

Mengembalikan daftar negara bagian untuk negara ini.

## Parameter {#parameters}

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $states | `array` | Daftar negara bagian dalam format XX => Nama. |
| $country_code | `string` | Kode ISO dua huruf untuk negara tersebut. |
| $current_country | `\WP_Ultimo\Country\Country` | Instance dari kelas saat ini. |

### Sejak {#since}

- 2.0.11
### Sumber {#source}

Didefinisikan di [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) pada baris 86


## Mengembalikan {#returns}
Daftar negara bagian yang sudah difilter.
