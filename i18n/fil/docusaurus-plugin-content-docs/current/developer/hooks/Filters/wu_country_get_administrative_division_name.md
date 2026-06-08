---
id: wu_country_get_administrative_division_name
title: Salain - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

Nagbabalik ito ng pormal at magandang pangalan para sa mga sub-dibisyon ng administrasyon ng bansa.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | Ang pangalan ng dibisyon. Karaniwan itong parang estado, probinsya, rehiyon, atbp. |
| $country_code | `string` | Dalawang-letrang ISO code para sa bansa. |
| $state_code | `string` | Dalawang-letrang ISO code para sa estado. |
| $ucwords | `bool` | Kung gagawin nating malalaki (uppercase) ang mga titik. |
| $current_country | `\WP_Ultimo\Country\Country` | Instance ng kasalukuyang class. |

### Since

- 2.0.11
### Source

Defined in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) at line 250


## Returns
Ang binagong pangalan ng dibisyon.
