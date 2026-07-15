---
id: wu_stripe_generate_idempotency_key
title: Filter - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

用於篩選傳送給 Stripe 收費選項中的 `idempotency_key` 值。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | 冪等性金鑰的值。 |
| $args | `array` | 用於生成金鑰的參數。 |
| $context | `string` | 生成冪等性金鑰的上下文。 |

### 自 {#since}

- 3.5.0
### 來源 {#source}

定義於 [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) 的第 54 行
