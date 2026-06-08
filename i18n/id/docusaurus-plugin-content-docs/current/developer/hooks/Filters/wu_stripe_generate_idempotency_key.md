---
id: wu_stripe_generate_idempotency_key
title: Filter - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

Memfilter nilai `idempotency_key` yang dikirim bersama opsi penagihan Stripe.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | Nilai dari `idempotency key`. |
| $args | `array` | Argumen yang digunakan untuk membantu menghasilkan kunci. |
| $context | `string` | Konteks di mana `idempotency key` dihasilkan. |

### Since

- 3.5.0
### Source

Didefinisikan di [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) pada baris 54
