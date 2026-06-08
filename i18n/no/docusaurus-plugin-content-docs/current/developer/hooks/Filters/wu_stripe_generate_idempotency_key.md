---
id: wu_stripe_generate_idempotency_key
title: Filter - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

Filtrerer verdien av `idempotency_key` som sendes sammen med Stripe-betalingsalternativene.

## Parametere

| Name | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | Verdien av idempotency-nøkkelen. |
| $args | `array` | Argumenter som brukes for å hjelpe til med å generere nøkkelen. |
| $context | `string` | Konteksten nøkkelen genereres under. |

### Siden

- 3.5.0
### Kilde

Definert i [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) på linje 54
