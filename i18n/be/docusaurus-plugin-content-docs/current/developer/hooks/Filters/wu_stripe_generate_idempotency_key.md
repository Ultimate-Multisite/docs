---
id: wu_stripe_generate_idempotency_key
title: Filter - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Фільтр: wu_stripe_generate_idempotency_key

Фільтруе значэнне `idempotency_key`, якое перадаецца разам з параметрам спагадоўнага Stripe.

## Параметры {#parameters}

| Назва | Тып | Апіс |
|------|------|-------------|
| $idempotency_key | `string` | Значэнне ключа ідэмпарэнтнасці. |
| $args | `array` | Аргументы, выкарыстоўваныя для генерацыі ключа. |
| $context | `string` | Кантакст, у якім генеруецца ключ ідэмпарэнтнасці. |

### З версіі {#since}

- 3.5.0
### Вынік {#source}

Вызначаны ў [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) на 54-й паўніне.
