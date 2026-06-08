---
id: wu_handle_user_meta_fields
title: Action - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

ให้ผู้พัฒนาปลั๊กอินสามารถบันทึกข้อมูลเมตา (meta data) ของผู้ใช้ได้หลายรูปแบบตามความจำเป็น

## พารามิเตอร์ (Parameters)

| Name | Type | คำอธิบาย |
|------|------|-------------|
| $meta_repository | `array` | รายการฟิลด์เมตา (meta fields) ที่จัดโครงสร้างแบบ key => value |
| $user | `\WP_User` | อ็อบเจกต์ผู้ใช้ (user object) ของ WordPress |
| $customer | `\Customer` | อ็อบเจกต์ลูกค้า (customer object) ของ Ultimate Multisite |
| $checkout | `\Checkout` | คลาส (class) สำหรับการชำระเงิน (checkout) |

### ตั้งแต่

- 2.0.4
### แหล่งที่มา

กำหนดไว้ใน [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) บรรทัดที่ 1244
