---
id: wu_generated_username_from_email
title: ตัวกรอง - wu_generated_username_from_email
sidebar_label: wu_generated_username_from_email
_i18n_hash: ad708562b0c2c9c80d1d5845ef1e67b7
---
# Filter: wu_generated_username_from_email {#filter-wugeneratedusernamefromemail}

ตัวกรอง (Filter) สำหรับชื่อผู้ใช้ลูกค้าที่ถูกสร้างขึ้น

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $username | `string` | ชื่อผู้ใช้ที่ถูกสร้างขึ้น |
| $email | `string` | ที่อยู่อีเมลของลูกค้าใหม่ |
| $new_user_args | `array` | อาร์เรย์ของค่าสำหรับผู้ใช้ใหม่ ซึ่งอาจรวมถึงชื่อและนามสกุล |
| $suffix | `string` | ข้อความที่จะนำไปต่อท้ายชื่อผู้ใช้เพื่อให้ไม่ซ้ำกัน |

### Since {#since}

- 3.7.0
### Source {#source}

กำหนดไว้ใน [`inc/functions/customer.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/customer.php#L488) บรรทัดที่ 488
