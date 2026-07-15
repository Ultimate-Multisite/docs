---
id: wu_stripe_generate_idempotency_key
title: Filter - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

Sinusala nito ang halaga ng `idempotency_key` na ipinapadala kasama ng mga opsyon sa pag-charge gamit ang Stripe.

## Mga Parameter {#parameters}

| Name | Type | Paglalarawan |
|------|------|-------------|
| $idempotency_key | `string` | Ang halaga ng idempotency key. |
| $args | `array` | Mga argumento na ginagamit para makatulong sa pagbuo ng key. |
| $context | `string` | Ang konteksto kung saan nabubuo ang idempotency key. |

### Simula {#since}

- 3.5.0
### Pinagmulan {#source}

Tinukoy sa [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) sa linya 54
