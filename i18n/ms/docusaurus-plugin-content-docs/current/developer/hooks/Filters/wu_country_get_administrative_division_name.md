---
id: wu_country_get_administrative_division_name
title: Penapis - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

Mengembalikan nama yang cantik untuk sub-divisi pentadbiran negara.

## Parameter {#parameters}

| Nama | Jenis | Penerangan |
|------|------|-------------|
| $name | `string` | Nama divisyen. Biasanya sesuatu seperti negeri, provinsi, kawasan, dsb. |
| $country_code | `string` | Kod ISO dua huruf untuk negara. |
| $state_code | `string` | Kod ISO dua huruf untuk negeri. |
| $ucwords | `bool` | Jika kita mahu huruf besar (uppercase) pada setiap perkataan. |
| $current_country | `\WP_Ultimo\Country\Country` | Contoh (instance) kelas semasa. |

### Sejak {#since}

- 2.0.11
### Sumber {#source}

Didefinisikan dalam [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) pada baris 250


## Mengembalikan {#returns}
Nama divisyen yang telah diubah suai.
