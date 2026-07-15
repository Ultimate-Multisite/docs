---
id: wu_membership_renewal_expiration_date
title: ตัวกรอง - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# ตัวกรอง: wu_membership_renewal_expiration_date

ตัวกรองวันที่หมดอายุที่คำนวณไว้ เพื่อให้แน่ใจว่าวันที่ตั้งค่าจะอยู่หลังช่วงต่ออายุ

## พารามิเตอร์ {#parameters}

| Name | Type | คำอธิบาย |
|------|------|-------------|
| $expiration | `string` | วันที่หมดอายุที่คำนวณได้ |
| $plan | `\Product` | อ็อบเจกต์ระดับสมาชิก |
| $membership_id | `int` | ID ของสมาชิก |
| $membership | `\Membership` | อ็อบเจกต์สมาชิก |

### ตั้งแต่ {#since}

- 2.0.0
### แหล่งที่มา {#source}

ถูกกำหนดไว้ใน [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) บรรทัดที่ 2192
