---
id: wu_stripe_generate_idempotency_key
title: Фільтр - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Фільтр: wu_stripe_generate_idempotency_key

Фільтрує значення `idempotency_key`, яке надсилається разом із параметрами оплати Stripe.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | Значення ключа ідемпотентності. |
| $args | `array` | Аргументи, які використовуються для допомоги у генерації ключа. |
| $context | `string` | Контекст, в якому генерується ключ ідемпотентності. |

### Since

- 3.5.0
### Source

Визначено в [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) на рядку 54
