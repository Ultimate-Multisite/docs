---
id: wu_stripe_generate_idempotency_key
title: පෙරහන - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# පෙරහන: wu_stripe_generate_idempotency_key {#filter-wustripegenerateidempotencykey}

Stripe අය කිරීමේ විකල්ප සමඟ යවන idempotency_key අගය පෙරහන් කරයි.

## පරාමිතීන් {#parameters}

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $idempotency_key | `string` | idempotency key හි අගය. |
| $args | `array` | යතුර ජනනය කිරීමට උපකාරී වන තර්ක. |
| $context | `string` | idempotency key ජනනය වන සන්දර්භය. |

### සිට {#since}

- 3.5.0
### මූලාශ්‍රය {#source}

[`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) හි 54 වන පේළියේ නිර්වචනය කර ඇත.
