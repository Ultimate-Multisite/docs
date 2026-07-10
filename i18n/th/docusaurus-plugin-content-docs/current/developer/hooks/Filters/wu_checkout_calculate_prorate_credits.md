---
id: wu_checkout_calculate_prorate_credits
title: ตัวกรอง - wu_checkout_calculate_prorate_credits
sidebar_label: wu_checkout_calculate_prorate_credits
_i18n_hash: 154cf63c15da66e7cb0faee9530b45c3
---
# Filter: wu_checkout_calculate_prorate_credits {#filter-wucheckoutcalculateproratecredits}

ตัวกรองนี้ช่วยให้ผู้พัฒนาปลั๊กอินสามารถปรับเปลี่ยนค่าเครดิตได้ตามที่ต้องการ

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $credit | `int` | จำนวนเครดิตที่คำนวณได้ |
| $cart | `self` | อ็อบเจกต์ตะกร้าสินค้า (cart object) นี้ |

### Since {#since}

- 2.0.0
### Source {#source}

กำหนดไว้ใน [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1287) ที่บรรทัด 1287
