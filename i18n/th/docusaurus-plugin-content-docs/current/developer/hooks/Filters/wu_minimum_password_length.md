---
id: wu_minimum_password_length
title: ตัวกรอง - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length {#filter-wuminimumpasswordlength}

ใช้สำหรับกำหนดความยาวรหัสผ่านขั้นต่ำ

จะทำงานก็ต่อเมื่อ `wu_enforce_password_rules` เป็น `true` เท่านั้น

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | ความยาวรหัสผ่านขั้นต่ำ ค่าเริ่มต้นคือ 12 (ตรงกับ Defender Pro) |
| $defender_active | `bool` | ระบุว่าฟีเจอร์ Defender Pro Strong Password ทำงานอยู่หรือไม่ |

### Since {#since}

- 2.4.0
### Source {#source}

กำหนดไว้ใน [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) บรรทัดที่ 543
