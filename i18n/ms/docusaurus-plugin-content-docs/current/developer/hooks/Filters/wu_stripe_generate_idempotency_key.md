---
id: wu_stripe_generate_idempotency_key
title: Filter - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

Menapis nilai `idempotency_key` yang dihantar bersama pilihan caj Stripe.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | Nilai kunci idempotensi. |
| $args | `array` | Argumen yang digunakan untuk membantu menjana kunci. |
| $context | `string` | Konteks di mana kunci idempotensi dijana. |

### Since {#since}

- 3.5.0
### Source {#source}

Didefinisikan dalam [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) pada baris 54
