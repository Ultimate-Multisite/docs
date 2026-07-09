---
id: wu_stripe_generate_idempotency_key
title: Bộ lọc - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key {#filter-wustripegenerateidempotencykey}

Bộ lọc giá trị `idempotency_key` được gửi cùng với các tùy chọn tính phí của Stripe.

## Tham số {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | Giá trị của khóa idempotency. |
| $args | `array` | Các đối số được sử dụng để giúp tạo khóa. |
| $context | `string` | Ngữ cảnh mà khóa idempotency được tạo ra. |

### Từ phiên bản {#since}

- 3.5.0
### Nguồn {#source}

Được định nghĩa trong [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) tại dòng 54
