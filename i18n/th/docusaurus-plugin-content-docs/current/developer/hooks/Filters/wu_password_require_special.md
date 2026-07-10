---
id: wu_password_require_special
title: ตัวกรอง - wu_password_require_special
sidebar_label: wu_password_require_special
_i18n_hash: 87f845abf068a92161fb7db01f88ee99
---
# Filter: wu_password_require_special {#filter-wupasswordrequirespecial}

ตัวกรองว่าต้องกำหนดให้มีอักขระพิเศษในรหัสผ่านหรือไม่

## พารามิเตอร์ {#parameters}

| Name | Type | คำอธิบาย |
|------|------|-------------|
| $require | `bool` | ว่าต้องกำหนดให้มีอักขระพิเศษหรือไม่ ค่าเริ่มต้นเป็น true เมื่อมีการบังคับใช้กฎ |
| $defender_active | `bool` | ว่า Defender Pro Strong Password ทำงานอยู่หรือไม่ |

### ตั้งแต่ {#since}

- 2.4.0
### แหล่งที่มา {#source}

กำหนดไว้ใน [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L583) บรรทัดที่ 583
