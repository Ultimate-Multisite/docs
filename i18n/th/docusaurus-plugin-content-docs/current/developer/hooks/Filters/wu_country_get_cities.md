---
id: wu_country_get_cities
title: ตัวกรอง - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities {#filter-wucountrygetcities}

ฟิลเตอร์นี้จะส่งคืนรายการเมืองสำหรับรัฐที่อยู่ในประเทศนั้นๆ

## พารามิเตอร์ {#parameters}

| Name | Type | คำอธิบาย |
|------|------|-------------|
| $cities | `array` | รายการชื่อเมืองของรัฐ ไม่มีคีย์ (key) ใดๆ |
| $country_code | `string` | รหัส ISO สองตัวอักษรสำหรับประเทศ |
| $state_code | `string` | รหัส ISO สองตัวอักษรสำหรับรัฐ |
| $current_country | `\WP_Ultimo\Country\Country` | อินสแตนซ์ของคลาสปัจจุบัน |

### ตั้งแต่ {#since}

- 2.0.11
### แหล่งที่มา {#source}

กำหนดไว้ใน [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) ที่บรรทัด 146


## ค่าที่ส่งคืน {#returns}
รายการรัฐที่ถูกกรองแล้ว
