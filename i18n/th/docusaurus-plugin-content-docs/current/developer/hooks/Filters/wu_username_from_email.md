---
id: wu_username_from_email
title: ตัวกรอง - wu_username_from_email
sidebar_label: wu_username_from_email
_i18n_hash: ab432839e318d008d082383ff5a18467
---
# Filter: wu_username_from_email {#filter-wuusernamefromemail}

ตัวกรองชื่อผู้ใช้ลูกค้าใหม่

## พารามิเตอร์ {#parameters}

| Name | Type | คำอธิบาย |
|------|------|-------------|
| $username | `string` | ชื่อผู้ใช้ลูกค้า |
| $email | `string` | ที่อยู่อีเมลของลูกค้าใหม่ |
| $new_user_args | `array` | อาร์เรย์ของอาร์กิวเมนต์ผู้ใช้ใหม่ ซึ่งอาจรวมถึงชื่อและนามสกุล |
| $suffix | `string` | ข้อความที่จะนำไปต่อท้ายชื่อผู้ใช้ เพื่อให้ชื่อนั้นไม่ซ้ำใคร |

### ตั้งแต่ {#since}

- 2.0.0
### แหล่งที่มา {#source}

กำหนดไว้ใน [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L516) บรรทัดที่ 516
