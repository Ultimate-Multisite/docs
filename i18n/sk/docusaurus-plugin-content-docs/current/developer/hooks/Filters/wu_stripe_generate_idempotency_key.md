---
id: wu_stripe_generate_idempotency_key
title: Filter - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

Filtruje hodnotu idempotency_key odoslanú s možnosťami platby Stripe.

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $idempotency_key | `string` | Hodnota idempotency key. |
| $args | `array` | Argumenty použité na pomoc pri generovaní kľúča. |
| $context | `string` | Kontext, v ktorom sa generuje idempotency key. |

### Od verzie

- 3.5.0
### Zdroj

Definované v [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) na riadku 54
