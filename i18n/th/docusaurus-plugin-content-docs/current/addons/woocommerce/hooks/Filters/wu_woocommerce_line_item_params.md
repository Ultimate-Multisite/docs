---
id: wu_woocommerce_line_item_params
title: ตัวกรอง - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

ตัวกรองพารามิเตอร์ที่ใช้ในการสร้างรายการสินค้า (line items) ในตะกร้าสินค้าของ WooCommerce ก่อนที่ลูกค้าจะถูกนำไปยังหน้าชำระเงิน (checkout) ของ WooCommerce

## พารามิเตอร์ (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | พารามิเตอร์ของรายการสินค้าในตะกร้า |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | อินสแตนซ์ของรายการสินค้า Ultimate Multisite |
| $wc_product | `\WC_Product` | ผลิตภัณฑ์ของ WooCommerce |

### ตั้งแต่ (Since)

- 2.0.0
### แหล่งที่มา (Source)

กำหนดไว้ใน [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) ที่บรรทัด 662


## ค่าที่ส่งกลับ (Returns)
พารามิเตอร์รายการสินค้าที่ถูกแก้ไขแล้ว
