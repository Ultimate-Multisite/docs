---
id: wu_password_require_uppercase
title: Filter - wu_password_require_uppercase
sidebar_label: wu_password_require_uppercase
_i18n_hash: eeb317b6890110f5f0eac4b541d18213
---
# Filter: wu_password_require_uppercase

ตัวกรองนี้ใช้สำหรับกำหนดว่ารหัสผ่านจำเป็นต้องมีตัวอักษรพิมพ์ใหญ่หรือไม่

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $require | `bool` | กำหนดว่าต้องบังคับให้มีตัวพิมพ์ใหญ่หรือไม่ ค่าเริ่มต้นเป็น true เมื่อมีการบังคับใช้กฎ |
| $defender_active | `bool` | กำหนดว่า Defender Pro Strong Password ทำงานอยู่หรือไม่ |

### Since {#since}

- 2.4.0
### Source {#source}

กำหนดไว้ใน [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L553) บรรทัดที่ 553
