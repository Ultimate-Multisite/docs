---
id: wu_get_checkout_variables
title: ตัวกรอง - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables

ใช้สำหรับให้ผู้พัฒนาปลั๊กอินสามารถกรองค่าตัวแปรที่ใช้ในหน้าชำระเงิน (checkout page) ได้

**ข้อควรระวัง:** หากลบ key ใดออกไป อาจทำให้หน้าชำระเงินบนหน้าเว็บไซต์เกิดข้อผิดพลาดอย่างรุนแรงได้

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | ตัวแปรที่แปลตามภาษาท้องถิ่น (Localized variables) |
| $checkout | `\Checkout` | คลาสสำหรับหน้าชำระเงิน (The checkout class) |

### Since

- 2.0.0
### Source

กำหนดไว้ใน [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) บรรทัดที่ 1970


## Returns
ตัวแปร array ชุดใหม่ที่ผ่านการกรองแล้ว
