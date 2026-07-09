---
id: wu_stripe_generate_idempotency_key
title: Sivana - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Sivana: wu_stripe_generate_idempotency_key

Manivana ny sanda idempotency_key alefa miaraka amin'ny safidin'ny charge Stripe.

## Masontsivana

| Anarana | Karazana | Famaritana |
|------|------|-------------|
| $idempotency_key | `string` | Sandan'ny idempotency key. |
| $args | `array` | Argument ampiasaina hanampiana amin'ny famoronana ny key. |
| $context | `string` | Context izay ametrahana ny famoronana ny idempotency key. |

### Nanomboka

- 3.5.0
### Loharano

Voafaritra ao amin'ny [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) amin'ny andalana 54
