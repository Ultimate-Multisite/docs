---
id: wu_password_require_number
title: ตัวกรอง - wu_password_require_number
sidebar_label: wu_password_require_number
_i18n_hash: 358a8fc28a947392f763b07ef807dab7
---
# Filter: wu_password_require_number {#filter-wupasswordrequirenumber}

ตัวกรองนี้ใช้สำหรับกำหนดว่ารหัสผ่านจำเป็นต้องมีตัวเลขหรือไม่

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $require | `bool` | กำหนดว่าต้องมีตัวเลขในรหัสผ่านหรือไม่ ค่าเริ่มต้นคือ true เมื่อมีการบังคับใช้กฎ |
| $defender_active | `bool` | กำหนดว่า Defender Pro Strong Password ทำงานอยู่หรือไม่ |

### Since {#since}

- 2.4.0
### Source {#source}

กำหนดไว้ใน [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L573) บรรทัดที่ 573
