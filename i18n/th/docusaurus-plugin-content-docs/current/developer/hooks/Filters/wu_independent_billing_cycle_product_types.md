---
id: wu_independent_billing_cycle_product_types
title: ตัวกรอง - wu_independent_billing_cycle_product_types
sidebar_label: wu_independent_billing_cycle_product_types
_i18n_hash: 2b9bd3b68a53424272c1c93c6bdc3ef5
---
# Filter: wu_independent_billing_cycle_product_types

ใช้สำหรับกรองประเภทสินค้าที่มีรอบบิลอิสระ (independent billing cycles)

สินค้าที่มีรอบบิลอิสระจะไม่ถูกบังคับให้ต้องตรงกับรอบบิลของแผน (plan's billing period) ในตะกร้าสินค้า ซึ่งมีประโยชน์สำหรับสินค้าบางประเภท เช่น การจดทะเบียนโดเมน ที่ต้องเรียกเก็บเงินเป็นรายปีเสมอ ไม่ว่าแผนที่เลือกจะเป็นแบบรายเดือนหรือรายปีก็ตาม

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $types | `array` | อาร์เรย์ของประเภทสินค้าที่มีรอบบิลอิสระ |

### Since {#since}

- 2.5.0
### Source {#source}

กำหนดไว้ใน [`inc/functions/product.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/product.php#L227) บรรทัดที่ 227


## Returns {#returns}
