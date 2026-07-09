---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

คืนค่าชื่อที่สวยงามของหน่วยงานย่อยในการปกครองของประเทศ

## พารามิเตอร์ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | ชื่อหน่วยงานย่อยในการปกครอง โดยปกติจะเป็นคำอย่าง state, province, region ฯลฯ |
| $country_code | `string` | รหัส ISO สองตัวอักษรสำหรับประเทศ |
| $state_code | `string` | รหัส ISO สองตัวอักษรสำหรับรัฐ |
| $ucwords | `bool` | หากต้องการให้ตัวอักษรขึ้นต้นด้วยตัวพิมพ์ใหญ่ (Upper Case) |
| $current_country | `\WP_Ultimo\Country\Country` | อินสแตนซ์ของคลาสปัจจุบัน |

### ตั้งแต่ {#since}

- 2.0.11
### แหล่งที่มา {#source}

กำหนดไว้ใน [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) บรรทัดที่ 250


## ค่าที่ส่งกลับ {#returns}
ชื่อหน่วยงานย่อยในการปกครองที่ถูกแก้ไขแล้ว
