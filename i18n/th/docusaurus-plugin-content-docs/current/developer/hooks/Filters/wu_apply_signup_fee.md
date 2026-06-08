---
id: wu_apply_signup_fee
title: ตัวกรอง - wu_apply_signup_fee
sidebar_label: wu_apply_signup_fee
_i18n_hash: b6a5ac9b0ef2d459003fa02766ad6f81
---
# Filter: wu_apply_signup_fee

ใช้สำหรับกำหนดว่าควรมีการเรียกเก็บค่าสมัครสมาชิกหรือไม่

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $add_signup_fee | `bool` | กำหนดว่าจะเพิ่มค่าสมัครสมาชิกหรือไม่ |
| $product | `object` | อ็อบเจกต์ระดับสมาชิก (Membership level object) |
| $this | `\WP_Ultimo\Checkout\Cart` | อ็อบเจกต์การลงทะเบียน (Registration object) |

### Since

- 3.1
### Source

ถูกกำหนดไว้ใน [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1769) ที่บรรทัด 1769
