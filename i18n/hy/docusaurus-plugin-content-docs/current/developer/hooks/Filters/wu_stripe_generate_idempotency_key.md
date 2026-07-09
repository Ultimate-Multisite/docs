---
id: wu_stripe_generate_idempotency_key
title: Զտիչ - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Ֆիլտր: wu_stripe_generate_idempotency_key

Ֆիլտրում է Stripe վճարման ընտրանքներով ուղարկվող idempotency_key արժեքը։

## Պարամետրեր

| Անուն | Տիպ | Նկարագրություն |
|------|------|-------------|
| $idempotency_key | `string` | idempotency key-ի արժեքը։ |
| $args | `array` | Արգումենտներ, որոնք օգտագործվում են բանալին գեներացնելուն օգնելու համար։ |
| $context | `string` | Համատեքստ, որի ներքո գեներացվում է idempotency key-ը։ |

### Սկսած

- 3.5.0
### Աղբյուր

Սահմանված է [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54)-ում՝ 54-րդ տողում
