---
id: wu_checkout_order_created
title: Action - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

จะทำงานหลังจากที่คำสั่งซื้อในหน้า checkout ถูกประกอบเสร็จสมบูรณ์แล้ว

ส่วนเสริม (Addons) สามารถใช้ Action นี้เพื่อสร้างการเป็นสมาชิกรอง (secondary memberships) สำหรับสินค้าที่มีรอบการเรียกเก็บเงินที่เป็นอิสระ

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | อ็อบเจกต์ตะกร้าสินค้า/คำสั่งซื้อ (cart/order object) |
| $customer | `\WP_Ultimo\Models\Customer` | ข้อมูลลูกค้า (customer) |
| $membership | `\WP_Ultimo\Models\Membership` | การเป็นสมาชิกหลัก (primary membership) |
| $payment | `\WP_Ultimo\Models\Payment` | ข้อมูลการชำระเงิน (payment) |

### Since {#since}

- 2.5.0
### Source {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) at line 891
