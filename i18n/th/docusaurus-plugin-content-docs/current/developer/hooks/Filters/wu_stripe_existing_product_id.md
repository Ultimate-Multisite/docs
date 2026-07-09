---
id: wu_stripe_existing_product_id
title: ตัวกรอง - wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# ตัวกรอง: wu_stripe_existing_product_id {#filter-wustripeexistingproductid}

ใช้สำหรับกรอง ID ของสินค้าที่ต้องการตรวจสอบ หากมีค่านี้อยู่ การสมัครสมาชิกใหม่จะใช้สินค้าตัวนี้แทน

## พารามิเตอร์ {#parameters}

| Name | Type | คำอธิบาย |
|------|------|-------------|
| $product_id | `string` | ID ของสินค้า Stripe ที่ต้องการตรวจสอบ |
| $name | `string` | ชื่อสินค้า |

### แหล่งที่มา {#source}

กำหนดไว้ใน [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741) บรรทัดที่ 2741
