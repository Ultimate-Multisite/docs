---
id: wu_enforce_password_rules
title: Filter - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

ตัวกรองว่าควรบังคับใช้กฎรหัสผ่านเพิ่มเติมหรือไม่

เมื่อตั้งค่าเป็น true จะบังคับใช้ความยาวขั้นต่ำและข้อกำหนดตัวอักษรต่างๆ โดยจะเปิดใช้งานโดยอัตโนมัติเมื่อตั้งค่าเป็น "Super Strong" หรือเมื่อฟีเจอร์ Strong Password ของ Defender Pro ทำงานอยู่

## พารามิเตอร์ {#parameters}

| Name | Type | คำอธิบาย |
|------|------|-------------|
| $enforce_rules | `bool` | ว่าจะบังคับใช้กฎเพิ่มเติมหรือไม่ |
| $strength_setting | `string` | ค่าการตั้งค่าในส่วนแอดมิน |
| $defender_active | `bool` | ว่าฟีเจอร์ Strong Password ของ Defender Pro ทำงานอยู่หรือไม่ |

### ตั้งแต่ {#since}

- 2.4.0
### แหล่งที่มา {#source}

กำหนดไว้ใน [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) บรรทัดที่ 531
