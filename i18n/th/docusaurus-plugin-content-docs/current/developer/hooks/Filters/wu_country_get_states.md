---
id: wu_country_get_states
title: ตัวกรอง - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states

ส่งคืนรายชื่อรัฐสำหรับประเทศนี้

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $states | `array` | รายชื่อรัฐในรูปแบบ XX => ชื่อรัฐ |
| $country_code | `string` | รหัส ISO สองตัวอักษรสำหรับประเทศนั้นๆ |
| $current_country | `\WP_Ultimo\Country\Country` | อินสแตนซ์ของคลาสปัจจุบัน |

### Since {#since}

- 2.0.11
### Source {#source}

กำหนดไว้ใน [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) บรรทัดที่ 86


## Returns {#returns}
รายชื่อรัฐที่ผ่านการกรองแล้ว
