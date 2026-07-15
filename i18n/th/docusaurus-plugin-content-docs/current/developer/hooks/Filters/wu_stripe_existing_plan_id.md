---
id: wu_stripe_existing_plan_id
title: ตัวกรอง - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id

ตัวกรองนี้ใช้สำหรับตรวจสอบ ID ของแผน หากมีการระบุค่านี้ไว้ การสมัครสมาชิกใหม่จะใช้แผนที่ระบุนี้แทน

## พารามิเตอร์ (Parameters) {#parameters}

| Name | Type | คำอธิบาย |
|------|------|-------------|
| $plan_id | `string` | ID ของแผน Stripe ที่ต้องการตรวจสอบ |
| $membership_level | `object` | อ็อบเจกต์ระดับสมาชิก (Membership level object) |

### แหล่งที่มา (Source) {#source}

ถูกกำหนดไว้ใน [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) บรรทัดที่ 2653
