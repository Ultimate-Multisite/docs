---
id: wu_stripe_generate_idempotency_key
title: Filter - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

Inafiltera thamani ya `idempotency_key` inayotumwa pamoja na chaguo za malipo za Stripe.

## Vigezo

| Name | Type | Maelezo |
|------|------|---------|
| $idempotency_key | `string` | Thamani ya `idempotency key`. |
| $args | `array` | Vigezo vinavyotumika kusaidia kutengeneza key. |
| $context | `string` | Muktadha ambao `idempotency key` inatengenezwa. |

### Tangu

- 3.5.0
### Chanzo

Imefafanuliwa katika [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) kwenye mstari wa 54
