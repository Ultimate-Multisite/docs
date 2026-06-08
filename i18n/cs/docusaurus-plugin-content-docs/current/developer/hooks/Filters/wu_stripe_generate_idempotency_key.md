---
id: wu_stripe_generate_idempotency_key
title: Filter - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

Filtruje hodnotu `idempotency_key`, která je odeslána s parametry platby Stripe.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $idempotency_key | `string` | Hodnota klíče pro idempotenci. |
| $args | `array` | Argumenty používané k vytvoření klíče. |
| $context | `string` | Kontext, ve kterém se klíč pro idempotenci generuje. |

### Od verze

- 3.5.0
### Zdroj

Definováno v [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) na řádku 54
