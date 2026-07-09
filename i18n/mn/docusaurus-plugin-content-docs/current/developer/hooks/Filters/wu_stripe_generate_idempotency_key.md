---
id: wu_stripe_generate_idempotency_key
title: Шүүлтүүр - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

Stripe төлбөрийн сонголтуудтай илгээх idempotency_key утгыг шүүнэ.

## Параметрүүд

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $idempotency_key | `string` | idempotency түлхүүрийн утга. |
| $args | `array` | Түлхүүр үүсгэхэд туслахад ашигласан аргументууд. |
| $context | `string` | idempotency түлхүүр үүсгэгдэх нөхцөл. |

### Хойш

- 3.5.0
### Эх сурвалж

[`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54)-д 54-р мөрөнд тодорхойлсон
