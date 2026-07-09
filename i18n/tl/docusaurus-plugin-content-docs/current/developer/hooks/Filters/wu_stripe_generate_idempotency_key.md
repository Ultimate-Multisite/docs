---
id: wu_stripe_generate_idempotency_key
title: Pansala - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key {#filter-wustripegenerateidempotencykey}

Sinasala ang value ng idempotency_key na ipinapadala kasama ng mga opsyon sa charge ng Stripe.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $idempotency_key | `string` | Value ng idempotency key. |
| $args | `array` | Mga argumentong ginamit upang makatulong sa pagbuo ng key. |
| $context | `string` | Context kung saan binubuo ang idempotency key. |

### Mula Noong {#since}

- 3.5.0
### Pinagmulan {#source}

Tinukoy sa [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) sa linya 54
