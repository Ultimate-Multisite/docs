---
id: wu_stripe_generate_idempotency_key
title: Filter - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

Filtrerer idempotency_key-værdien, der sendes med Stripe-betalingsindstillingerne.

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $idempotency_key | `string` | Værdi for idempotency key. |
| $args | `array` | Argumenter, der bruges til at hjælpe med at generere nøglen. |
| $context | `string` | Kontekst, som idempotency key genereres under. |

### Siden

- 3.5.0
### Kilde

Defineret i [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) på linje 54
