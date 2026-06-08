---
id: wu_stripe_webhook_membership
title: ตัวกรอง - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

ตัวกรองบันทึกสมาชิกที่เกี่ยวข้องกับ webhook นี้

ตัวกรองนี้ถูกเพิ่มเข้ามาเพื่อจัดการกับความขัดแย้งที่อาจเกิดขึ้น เมื่อมีการใช้ลูกค้า Stripe รายเดียวกันในหลายเว็บไซต์

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | อ็อบเจกต์สมาชิก |
| $event | `\Stripe\Event` | อีเวนต์ที่ได้รับ |

### Source

กำหนดไว้ใน [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) บรรทัดที่ 2035
