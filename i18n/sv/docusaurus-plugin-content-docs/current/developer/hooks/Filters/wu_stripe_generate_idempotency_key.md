---
id: wu_stripe_generate_idempotency_key
title: Filter - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

Filtrerar värdet för `idempotency_key` som skickas med Stripe-betalningsalternativen.

## Parametrar

| Name | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | Värdet för idempotency-nyckeln. |
| $args | `array` | Argument som används för att hjälpa till att generera nyckeln. |
| $context | `string` | Kontexten under vilken idempotency-nyckeln genereras. |

### Sedan

- 3.5.0
### Källa

Definieras i [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) på rad 54
