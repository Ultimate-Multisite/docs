---
id: wu_add_product_setup_fee_line_item
title: ตัวกรอง - wu_add_product_setup_fee_line_item
sidebar_label: wu_add_product_setup_fee_line_item
_i18n_hash: 7175266054e611752e49e762b103e858
---
# Filter: wu_add_product_setup_fee_line_item

ให้ผู้พัฒนาสามารถปรับเปลี่ยนรายการค่าธรรมเนียมการติดตั้ง (setup fee line item) ได้

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $setup_fee_line_item | `array` | พารามิเตอร์สำหรับรายการค่าธรรมเนียมการติดตั้ง |
| $product | `\WP_Ultimo\Models\Product` | ผลิตภัณฑ์ที่เกี่ยวข้องกับค่าธรรมเนียมการติดตั้ง |
| $cart | `\WP_Ultimo\Checkout\Cart` | อ็อบเจกต์ตะกร้าสินค้า |

### Since

- 2.1
### Source

กำหนดไว้ใน [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1790) บรรทัดที่ 1790


## Returns
