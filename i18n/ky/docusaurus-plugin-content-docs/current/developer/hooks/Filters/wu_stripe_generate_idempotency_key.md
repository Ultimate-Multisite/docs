---
id: wu_stripe_generate_idempotency_key
title: Фильтр - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

Stripe төлөм параметрлери менен жөнөтүлгөн idempotency_key маанисин чыпкалайт.

## Параметрлер {#parameters}

| Аты | Түрү | Сүрөттөмө |
|------|------|-------------|
| $idempotency_key | `string` | Идемпотенттүүлүк ачкычынын мааниси. |
| $args | `array` | Ачкычты түзүүгө жардам берүү үчүн колдонулган аргументтер. |
| $context | `string` | Идемпотенттүүлүк ачкычы түзүлгөн контекст. |

### Чыгарылышы {#since}

- 3.5.0
### Булагы {#source}

[`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) ичинде 54-сапта аныкталган
