---
id: wu_stripe_generate_idempotency_key
title: Filtre - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

Filtre la valeur **idempotency_key** envoyée avec les options de paiement Stripe.

## Parameters

| Nom | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | Valeur de la clé d'idempotence. |
| $args | `array` | Arguments utilisés pour aider à générer la clé. |
| $context | `string` | Contexte dans lequel la clé d'idempotence est générée. |

### Depuis

- 3.5.0

### Source

Defined in [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) at line 54
