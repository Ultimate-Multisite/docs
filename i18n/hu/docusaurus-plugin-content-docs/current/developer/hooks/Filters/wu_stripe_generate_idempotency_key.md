---
id: wu_stripe_generate_idempotency_key
title: Szűrő - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key {#filter-wustripegenerateidempotencykey}

Ez a szűrő módosítja az idempotency_key értéket, amelyet a Stripe tranzakció opciókkal együtt küldünk.

## Paraméterek {#parameters}

| Neve | Típusa | Leírása |
|------|------|-------------|
| $idempotency_key | `string` | Az idempotency key értéke. |
| $args | `array` | Argumentumok, amelyeket a kulcs generálásához használnak. |
| $context | `string` | Az idempotency key generálásához használt kontextus (környezet). |

### Kész desde {#since}

- 3.5.0
### Forrás {#source}

Meghatározva a [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) fájlban, 54. soron.
