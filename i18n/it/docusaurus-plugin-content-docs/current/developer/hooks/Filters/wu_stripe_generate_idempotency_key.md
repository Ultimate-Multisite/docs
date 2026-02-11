---
id: wu_stripe_generate_idempotency_key
title: Filtro - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filtro: wu_stripe_generate_idempotency_key

Filtra il valore idempotency_key inviato con le opzioni di addebito Stripe.

## Parametri

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $idempotency_key | `string` | Valore della chiave di idempotenza. |
| $args | `array` | Argomenti usati per aiutare a generare la chiave. |
| $context | `string` | Contesto in cui viene generata la chiave di idempotenza. |

### Da

- 3.5.0

### Fonte

Definito in [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) alla riga 54
