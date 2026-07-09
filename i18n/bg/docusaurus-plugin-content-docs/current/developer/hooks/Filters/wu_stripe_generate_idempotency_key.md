---
id: wu_stripe_generate_idempotency_key
title: Филтър - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Филтър: wu_stripe_generate_idempotency_key {#filter-wustripegenerateidempotencykey}

Филтрира стойността на `idempotency_key`, която се изпраща заедно с опциите за начисление (charge options) на Stripe.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $idempotency_key | `string` | Стойност на ключа за идемпотентност. |
| $args | `array` | Аргументи, използвани за помагане при генерирането на ключа. |
| $context | `string` | Контекстът, в който се генерира ключът за идемпотентност. |

### От {#since}

- 3.5.0
### Източник {#source}

Дефиниран в [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) на линия 54
