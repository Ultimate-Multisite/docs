---
id: wu_stripe_generate_idempotency_key
title: Сүзгі - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Сүзгі: wu_stripe_generate_idempotency_key

Stripe төлем опцияларымен жіберілетін idempotency_key мәнін сүзеді.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $idempotency_key | `string` | Идемпотенттілік кілтінің мәні. |
| $args | `array` | Кілтті жасауға көмектесу үшін пайдаланылатын аргументтер. |
| $context | `string` | Идемпотенттілік кілті жасалатын контекст. |

### Нұсқадан бастап {#since}

- 3.5.0
### Дереккөзі {#source}

[`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) ішінде 54-жолда анықталған.
