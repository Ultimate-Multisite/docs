---
id: wu_stripe_generate_idempotency_key
title: Filtro - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filtro: wu_stripe_generate_idempotency_key

Filtra o valor idempotency_key enviado coas opcións de cargo de Stripe.

## Parámetros

| Nome | Tipo | Descrición |
|------|------|-------------|
| $idempotency_key | `string` | Valor da clave de idempotencia. |
| $args | `array` | Argumentos usados para axudar a xerar a clave. |
| $context | `string` | Contexto baixo o cal se xera a clave de idempotencia. |

### Desde

- 3.5.0
### Fonte

Definido en [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) na liña 54
