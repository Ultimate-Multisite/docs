---
id: wu_stripe_generate_idempotency_key
title: Tātari - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Tātari: wu_stripe_generate_idempotency_key

Ka tātari i te uara idempotency_key ka tukuna me ngā kōwhiringa utu Stripe.

## Tawhā {#parameters}

| Ingoa | Momo | Whakaahuatanga |
|------|------|-------------|
| $idempotency_key | `string` | Uara o te kī idempotency. |
| $args | `array` | Ngā tohenga ka whakamahia hei āwhina ki te whakaputa i te kī. |
| $context | `string` | Te horopaki e whakaputaina ai te kī idempotency. |

### Mai i {#since}

- 3.5.0
### Pūtake {#source}

Kua tautuhia ki [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) i te rārangi 54
