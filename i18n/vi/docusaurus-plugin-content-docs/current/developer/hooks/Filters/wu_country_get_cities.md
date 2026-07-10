---
id: wu_country_get_cities
title: Filter - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Bộ lọc: wu_country_get_cities {#filter-wucountrygetcities}

Trả về danh sách các thành phố thuộc một tiểu bang trong một quốc gia.

## Tham số {#parameters}

| Tên | Kiểu dữ liệu | Mô tả |
|------|------|-------------|
| $cities | `array` | Danh sách tên các thành phố của tiểu bang. Không có khóa (key) nào được sử dụng. |
| $country_code | `string` | Mã ISO hai chữ cái của quốc gia. |
| $state_code | `string` | Mã ISO hai chữ cái của tiểu bang. |
| $current_country | `\WP_Ultimo\Country\Country` | Một thể hiện (instance) của lớp hiện tại. |

### Từ phiên bản {#since}

- 2.0.11
### Nguồn {#source}

Được định nghĩa trong [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) tại dòng 146


## Giá trị trả về {#returns}
Danh sách các tiểu bang đã được lọc.
