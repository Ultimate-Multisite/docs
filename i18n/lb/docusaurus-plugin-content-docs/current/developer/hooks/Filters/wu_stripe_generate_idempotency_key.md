---
id: wu_stripe_generate_idempotency_key
title: Filter - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key {#filter-wustripegenerateidempotencykey}

Filtert de Wäert `idempotency_key`, dee mat de Stripe-Bezuelungsoptioune geschéckt gëtt.

## Parameteren {#parameters}

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $idempotency_key | `string` | Wäert vum Idempotenz-Schlëssel. |
| $args | `array` | Argumenter, déi benotzt ginn, fir de Schlëssel ze generéieren. |
| $context | `string` | Kontext, ënner deem den Idempotenz-Schlëssel generéiert gëtt. |

### Zënter {#since}

- 3.5.0
### Quell {#source}

Definéiert an [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) op Linn 54
