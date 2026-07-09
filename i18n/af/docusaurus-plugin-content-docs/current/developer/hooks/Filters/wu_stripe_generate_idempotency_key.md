---
id: wu_stripe_generate_idempotency_key
title: Filter - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key {#filter-wustripegenerateidempotencykey}

Filter die `idempotency_key`-waarde wat saam met die Stripe-laaiopsies gestuur word.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | Waarde van die idempotency key. |
| $args | `array` | Argumente wat gebruik word om die sleutel te help genereer. |
| $context | `string` | Konteks waaronder die idempotency key gegenereer word. |

### Sedert {#since}

- 3.5.0
### Bron {#source}

Gedefinieer in [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) by lyn 54
