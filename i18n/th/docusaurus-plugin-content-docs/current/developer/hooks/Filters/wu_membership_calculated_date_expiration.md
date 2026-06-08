---
id: wu_membership_calculated_date_expiration
title: ตัวกรอง - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# Filter: wu_membership_calculated_date_expiration

ใช้สำหรับกรองวันที่หมดอายุที่ระบบคำนวณให้

## พารามิเตอร์ (Parameters)

| Name | Type | คำอธิบาย |
|------|------|-------------|
| $expiration | `string` | วันหมดอายุที่คำนวณได้ในรูปแบบ MySQL |
| $membership_id | `int` | ID ของสมาชิก |
| $membership | `\WP_Ultimo\Models\Membership` | อ็อบเจกต์สมาชิก (Membership object) |

### ตั้งแต่ (Since)

- 2.0
### แหล่งที่มา (Source)

กำหนดไว้ใน [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) บรรทัดที่ 1309
