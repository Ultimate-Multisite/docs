---
id: wu_handle_customer_meta_fields
title: Action - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

อนุญาตให้ผู้พัฒนาปลั๊กอินสามารถบันทึกข้อมูลเมตา (meta data) ได้ในรูปแบบที่แตกต่างกัน หากพวกเขาต้องการ

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | รายการฟิลด์เมตาที่จัดโครงสร้างแบบ key => value |
| $customer | `\Customer` | อ็อบเจกต์ลูกค้าของ Ultimate Multisite |
| $checkout | `\Checkout` | คลาสสำหรับหน้าชำระเงิน (checkout) |

### Since {#since}

- 2.0.0
### Source {#source}

กำหนดไว้ใน [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) บรรทัดที่ 1211
