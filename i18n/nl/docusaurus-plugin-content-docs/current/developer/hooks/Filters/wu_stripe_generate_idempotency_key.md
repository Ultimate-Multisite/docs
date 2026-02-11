---
id: wu_stripe_generate_idempotency_key
title: Filter - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

Filtert de `idempotency_key`-waarde die wordt verzonden met de Stripe-kostenopties.

## Parameters

| Naam | Type | Beschrijving |
|------|------|-------------|
| $idempotency_key | `string` | Value of the idempotency key. |
| $args | `array` | Arguments used to help generate the key. |
| $context | `string` | Context under which the idempotency key is generated. |

### Sinds

- 3.5.0
### Bron

Gedefinieerd in [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) op regel 54
