---
id: wu_maybe_create_customer
title: Action - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer

อนุญาตให้ผู้พัฒนาปลั๊กอินสามารถเพิ่มโค้ดส่วนเสริมได้เมื่อมีการเพิ่มข้อมูลลูกค้า

ตัวอย่างเช่น นี่คือจุดที่เราใช้เพิ่ม hook เพื่อจัดการการเพิ่มข้อมูลลูกค้าให้เป็นผู้ใช้ (user) ในเว็บไซต์หลักด้วย

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $customer | `\Customer` | ข้อมูลลูกค้าที่อาจถูกสร้างขึ้น |
| $checkout | `\Checkout` | คลาส checkout ปัจจุบัน |

### Since

- 2.0.0
### Source

กำหนดไว้ใน [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) บรรทัดที่ 1156
