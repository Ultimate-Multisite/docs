---
id: wu_stripe_generate_idempotency_key
title: Criathrag - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Criathrag: wu_stripe_generate_idempotency_key

Criathraich an luach idempotency_key a thèid a chur leis na roghainnean cosgais Stripe.

## Paramadairean {#parameters}

| Ainm | Seòrsa | Tuairisgeul |
|------|------|-------------|
| $idempotency_key | `string` | Luach na h-iuchrach idempotency. |
| $args | `array` | Argamaidean a chleachdar gus cuideachadh le gineadh na h-iuchrach. |
| $context | `string` | Co-theacsa fon tèid an iuchair idempotency a gineadh. |

### Bho {#since}

- 3.5.0
### Tùs {#source}

Air a mhìneachadh ann an [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) aig loidhne 54
