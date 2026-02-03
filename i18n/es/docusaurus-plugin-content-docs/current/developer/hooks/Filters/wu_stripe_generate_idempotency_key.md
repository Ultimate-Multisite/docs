---
id: wu_stripe_generate_idempotency_key
title: Filtro - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

Filtra el valor de idempotency_key enviado con las opciones de cargo de Stripe.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | Valor de la clave de idempotencia. |
| $args | `array` | Argumentos utilizados para ayudar a generar la clave. |
| $context | `string` | Contexto bajo el cual se genera la clave de idempotencia. |

### Since

- 3.5.0

### Source

Definido en `inc/functions/checkout.php` en la línea 54

---
