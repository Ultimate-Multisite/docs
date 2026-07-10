---
id: wu_password_require_lowercase
title: ตัวกรอง - wu_password_require_lowercase
sidebar_label: wu_password_require_lowercase
_i18n_hash: 5afaa63a8b318dc2167edd1bba3e0b27
---
# Filter: wu_password_require_lowercase {#filter-wupasswordrequirelowercase}

ตัวกรองนี้ใช้สำหรับกำหนดว่ารหัสผ่านจะต้องมีตัวอักษรพิมพ์เล็กหรือไม่

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $require | `bool` | กำหนดให้ต้องมีตัวพิมพ์เล็กหรือไม่ ค่าเริ่มต้นเป็น true เมื่อมีการบังคับใช้กฎ |
| $defender_active | `bool` | กำหนดว่า Defender Pro Strong Password ทำงานอยู่หรือไม่ |

### Since {#since}

- 2.4.0
### Source {#source}

กำหนดไว้ใน [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L563) บรรทัดที่ 563
