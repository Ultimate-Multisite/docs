---
id: wu_stripe_generate_idempotency_key
title: ตัวกรอง - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key {#filter-wustripegenerateidempotencykey}

ตัวกรองค่า `idempotency_key` ที่จะถูกส่งไปพร้อมกับตัวเลือกการเรียกเก็บเงินของ Stripe

## พารามิเตอร์ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | ค่าของ `idempotency_key` |
| $args | `array` | อาร์กิวเมนต์ที่ใช้ช่วยในการสร้างคีย์ |
| $context | `string` | บริบทที่ใช้ในการสร้าง `idempotency_key` |

### ตั้งแต่ {#since}

- 3.5.0
### แหล่งที่มา {#source}

กำหนดไว้ใน [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) บรรทัดที่ 54
