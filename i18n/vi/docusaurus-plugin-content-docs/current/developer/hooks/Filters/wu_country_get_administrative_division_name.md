---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Bộ lọc: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

Trả về tên hiển thị đẹp của các đơn vị hành chính cấp dưới của quốc gia.

## Tham số {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | Tên đơn vị hành chính. Thường là các từ như bang, tỉnh, khu vực, v.v. |
| $country_code | `string` | Mã ISO hai chữ cái của quốc gia. |
| $state_code | `string` | Mã ISO hai chữ cái của tiểu bang. |
| $ucwords | `bool` | Nếu chúng ta viết hoa các từ. |
| $current_country | `\WP_Ultimo\Country\Country` | Đối tượng (instance) của lớp hiện tại. |

### Từ phiên bản {#since}

- 2.0.11
### Nguồn {#source}

Được định nghĩa trong [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) tại dòng 250


## Giá trị trả về {#returns}
Tên đơn vị hành chính đã được chỉnh sửa.
