---
id: wu_stripe_generate_idempotency_key
title: Фильтр - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Фильтр: wu_stripe_generate_idempotency_key

Фильтрует значение idempotency_key, отправляемое с параметрами платежа Stripe.

## Параметры

| Name | Type | Описание |
|------|------|----------|
| $idempotency_key | `string` | Значение ключа идемпотентности. |
| $args | `array` | Аргументы, используемые для генерации ключа. |
| $context | `string` | Контекст, в котором генерируется ключ идемпотентности. |

### С версии

- 3.5.0

### Источник

Определено в [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) на строке 54
