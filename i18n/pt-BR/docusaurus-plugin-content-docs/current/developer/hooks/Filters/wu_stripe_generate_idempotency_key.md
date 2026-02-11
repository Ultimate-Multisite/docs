---
id: wu_stripe_generate_idempotency_key
title: Filtro - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filtro: wu_stripe_generate_idempotency_key

Filtra o valor idempotency_key enviado com as opções de cobrança do Stripe.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-----------|
| $idempotency_key | `string` | Valor da chave de idempotência. |
| $args | `array` | Argumentos usados para ajudar a gerar a chave. |
| $context | `string` | Contexto no qual a chave de idempotência é gerada. |

### Desde

- 3.5.0

### Fonte

Definido em [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) na linha 54
