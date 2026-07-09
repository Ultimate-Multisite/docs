---
id: wu_country_get_cities
title: Saringan - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities {#filter-wucountrygetcities}

Mulangkeun daptar kota pikeun hiji nagara bagian dina hiji nagara.

## Parameter {#parameters}

| Ngaran | Tipe | Pedaran |
|------|------|-------------|
| $cities | `array` | Daptar ngaran kota nagara bagian. Teu aya konci anu aya. |
| $country_code | `string` | Kode ISO dua hurup pikeun nagara. |
| $state_code | `string` | Kode ISO dua hurup pikeun nagara bagian. |
| $current_country | `\WP_Ultimo\Country\Country` | Instansi tina kelas ayeuna. |

### Ti saprak {#since}

- 2.0.11
### Sumber {#source}

Ditetepkeun dina [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) dina garis 146


## Balikan {#returns}
Daptar nagara bagian anu geus disaring.
