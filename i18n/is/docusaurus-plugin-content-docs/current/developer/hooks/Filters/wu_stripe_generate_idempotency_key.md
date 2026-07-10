---
id: wu_stripe_generate_idempotency_key
title: Sía - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Sía: wu_stripe_generate_idempotency_key {#filter-wustripegenerateidempotencykey}

Síar `idempotency_key`-gildið sem sent er með Stripe-gjaldtökuvalkostunum.

## Færibreytur {#parameters}

| Heiti | Tegund | Lýsing |
|------|------|-------------|
| $idempotency_key | `string` | Gildi idempotency-lykilsins. |
| $args | `array` | Rök sem notuð eru til að hjálpa við að búa lykilinn til. |
| $context | `string` | Samhengi sem idempotency-lykillinn er búinn til í. |

### Frá útgáfu {#since}

- 3.5.0
### Uppruni {#source}

Skilgreint í [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) í línu 54
