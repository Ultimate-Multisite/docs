---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

Ibinabalik ang maayos na pangalan ng mga administratibong sub-dibisyon ng bansa.

## Mga Parameter

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $name | `string` | Ang pangalan ng dibisyon. Karaniwan ay gaya ng estado, lalawigan, rehiyon, atbp. |
| $country_code | `string` | Dalawang-titik na ISO code para sa bansa. |
| $state_code | `string` | Dalawang-titik na ISO code para sa estado. |
| $ucwords | `bool` | kung gagawin nating malalaking titik ang mga salita. |
| $current_country | `\WP_Ultimo\Country\Country` | Instance ng kasalukuyang class. |

### Mula Noong

- 2.0.11
### Pinagmulan

Tinukoy sa [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) sa linya 250


## Ibinabalik
Ang binagong pangalan ng dibisyon.
