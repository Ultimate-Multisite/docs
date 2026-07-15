---
id: wu_stripe_generate_idempotency_key
title: Филтер - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Филтер: wu_stripe_generate_idempotency_key

Го филтрира значењето idempotency_key испратено со опциите за Stripe наплата.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | Значење на клучот за идемпотентност. |
| $args | `array` | Аргументи што се користат за да помогнат при генерирање на клучот. |
| $context | `string` | Контекст под кој се генерира клучот за идемпотентност. |

### Од {#since}

- 3.5.0
### Извор {#source}

Дефинирано во [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) на линија 54
