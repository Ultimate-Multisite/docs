---
id: wu_stripe_generate_idempotency_key
title: フィルタ - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# フィルタ: wu_stripe_generate_idempotency_key

Stripe のチャージオプションに送信される idempotency_key の値をフィルタリングします。

## Parameters

| 名前 | タイプ | 説明 |
|------|------|------|
| $idempotency_key | `string` | idempotency key の値。 |
| $args | `array` | キー生成を支援するために使用される引数。 |
| $context | `string` | idempotency key が生成されるコンテキスト。 |

### 以降

- 3.5.0

### ソース

定義は [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) の54行目にあります。
