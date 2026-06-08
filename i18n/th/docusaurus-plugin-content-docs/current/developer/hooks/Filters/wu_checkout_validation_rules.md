---
id: wu_checkout_validation_rules
title: ตัวกรอง - wu_checkout_validation_rules
sidebar_label: wu_checkout_validation_rules
_i18n_hash: 7b765499f6f7d4b9b5337981302e2331
---
# Filter: wu_checkout_validation_rules

อนุญาตให้ผู้พัฒนาปลั๊กอินสามารถกรอง (filter) กฎการตรวจสอบ (validation rules) ได้

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $validation_rules | `array` | กฎการตรวจสอบที่จะถูกนำไปใช้ |
| $checkout | `\Checkout` | คลาสของหน้าชำระเงิน (checkout class) |

### Since

- 2.0.20
### Source

กำหนดไว้ใน [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L2092) บรรทัดที่ 2092
