---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

Mengembalikan nama yang rapi untuk pembagian wilayah administratif negara.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | Nama pembagian wilayah. Biasanya berupa nama negara bagian, provinsi, wilayah, dll. |
| $country_code | `string` | Kode ISO dua huruf untuk negara. |
| $state_code | `string` | Kode ISO dua huruf untuk negara bagian. |
| $ucwords | `bool` | Apakah kata-kata tersebut harus dikapitalisasi (uppercase). |
| $current_country | `\WP_Ultimo\Country\Country` | Instance dari kelas saat ini. |

### Since {#since}

- 2.0.11
### Source {#source}

Didefinisikan di [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) pada baris 250


## Returns {#returns}
Nama pembagian yang sudah dimodifikasi.
