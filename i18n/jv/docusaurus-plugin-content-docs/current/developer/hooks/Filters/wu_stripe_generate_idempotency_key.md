---
id: wu_stripe_generate_idempotency_key
title: Saringan - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

Nyaring nilai idempotency_key sing dikirim karo opsi tagihan Stripe.

## Parameter

| Name | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | Nilai saka idempotency key. |
| $args | `array` | Argumen sing digunakake kanggo mbantu ngasilake key. |
| $context | `string` | Konteks ing ngendi idempotency key digawe. |

### Wiwit

- 3.5.0
### Sumber

Ditetepake ing [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) ing baris 54
