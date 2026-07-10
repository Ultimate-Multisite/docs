---
id: wu_stripe_generate_idempotency_key
title: Филтер - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Филтер: wu_stripe_generate_idempotency_key {#filter-wustripegenerateidempotencykey}

Филтрира вредност idempotency_key која се шаље са опцијама наплате за Stripe.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $idempotency_key | `string` | Вредност кључа идемпотентности. |
| $args | `array` | Аргументи који се користе као помоћ при генерисању кључа. |
| $context | `string` | Контекст у ком се генерише кључ идемпотентности. |

### Од верзије {#since}

- 3.5.0
### Извор {#source}

Дефинисано у [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) у реду 54
