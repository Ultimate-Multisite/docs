---
id: wu_country_get_states
title: Bộ lọc - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states {#filter-wucountrygetstates}

Trả về danh sách các tiểu bang của quốc gia này.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $states | `array` | Danh sách các tiểu bang theo định dạng XX => Tên. |
| $country_code | `string` | Mã ISO hai chữ cái của quốc gia. |
| $current_country | `\WP_Ultimo\Country\Country` | Một thể hiện (instance) của lớp hiện tại. |

### Since {#since}

- 2.0.11
### Source {#source}

Được định nghĩa trong [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) tại dòng 86


## Returns {#returns}
Danh sách các tiểu bang đã được lọc.
