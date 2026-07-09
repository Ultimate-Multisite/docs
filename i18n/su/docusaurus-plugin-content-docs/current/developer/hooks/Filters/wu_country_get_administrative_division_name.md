---
id: wu_country_get_administrative_division_name
title: Saringan - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

Mulangkeun ngaran alus tina sub-divisi administratif nagara.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | Ngaran divisi. Biasana saperti state, province, region, jsb. |
| $country_code | `string` | Kode ISO dua-hurup pikeun nagara. |
| $state_code | `string` | Kode ISO dua-hurup pikeun state. |
| $ucwords | `bool` | lamun urang ngarobah kecap jadi hurup gedé. |
| $current_country | `\WP_Ultimo\Country\Country` | Instansi tina kelas ayeuna. |

### Ti saprak {#since}

- 2.0.11
### Sumber {#source}

Ditetepkeun dina [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) dina baris 250


## Mulangkeun {#returns}
Ngaran divisi anu dirobah.
