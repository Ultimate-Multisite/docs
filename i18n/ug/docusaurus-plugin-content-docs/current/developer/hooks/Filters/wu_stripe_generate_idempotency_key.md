---
id: wu_stripe_generate_idempotency_key
title: سۈزگۈچ - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# سۈزگۈچ: wu_stripe_generate_idempotency_key

Stripe ھەق ئېلىش تاللانمىلىرى بىلەن يوللىنىدىغان idempotency_key قىممىتىنى سۈزگۈچتىن ئۆتكۈزىدۇ.

## پارامېتىرلار

| نامى | تۈرى | چۈشەندۈرۈش |
|------|------|-------------|
| $idempotency_key | `string` | idempotency key نىڭ قىممىتى. |
| $args | `array` | ئاچقۇچنى ھاسىل قىلىشقا ياردەم بېرىشتە ئىشلىتىلىدىغان ئارگۇمېنتلار. |
| $context | `string` | idempotency key ھاسىل قىلىنىدىغان كونتېكىست. |

### باشلاپ

- 3.5.0
### مەنبە

[`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) ئىچىدە 54-قۇردا ئېنىقلانغان
