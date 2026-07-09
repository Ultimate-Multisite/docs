---
id: wu_minimum_password_strength
title: Filter - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength {#filter-wuminimumpasswordstrength}

ตัวกรองความแข็งแกร่งของรหัสผ่านขั้นต่ำที่ต้องการ (คะแนน zxcvbn)

ระดับความแข็งแกร่ง: - 0, 1: อ่อนมาก - 2: อ่อน - 3: ปานกลาง - 4: แข็งแรง (ค่าเริ่มต้น)

## พารามิเตอร์ {#parameters}

| Name | Type | คำอธิบาย |
|------|------|-------------|
| $min_strength | `int` | ระดับความแข็งแกร่งขั้นต่ำที่ต้องการ |
| $strength_setting | `string` | ค่าที่ตั้งค่าในแอดมิน (medium, strong, super_strong) |

### ตั้งแต่ {#since}

- 2.4.0
### แหล่งที่มา {#source}

กำหนดไว้ใน [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) บรรทัดที่ 516
