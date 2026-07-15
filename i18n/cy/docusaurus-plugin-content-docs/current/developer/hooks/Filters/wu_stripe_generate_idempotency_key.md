---
id: wu_stripe_generate_idempotency_key
title: Hidlydd - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Hidlydd: wu_stripe_generate_idempotency_key

Yn hidlo'r gwerth idempotency_key a anfonir gyda dewisiadau tâl Stripe.

## Paramedrau {#parameters}

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $idempotency_key | `string` | Gwerth yr allwedd idempotency. |
| $args | `array` | Ymresymiadau a ddefnyddir i helpu i gynhyrchu'r allwedd. |
| $context | `string` | Cyd-destun y cynhyrchir yr allwedd idempotency oddi tano. |

### Ers {#since}

- 3.5.0
### Ffynhonnell {#source}

Wedi'i ddiffinio yn [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) ar linell 54
