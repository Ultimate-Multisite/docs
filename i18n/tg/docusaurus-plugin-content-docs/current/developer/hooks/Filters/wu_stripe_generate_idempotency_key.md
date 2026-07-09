---
id: wu_stripe_generate_idempotency_key
title: Филтр - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Филтр: wu_stripe_generate_idempotency_key {#filter-wustripegenerateidempotencykey}

Қимати idempotency_key-ро, ки бо имконоти пардохти Stripe фиристода мешавад, филтр мекунад.

## Параметрҳо {#parameters}

| Ном | Навъ | Тавсиф |
|------|------|-------------|
| $idempotency_key | `string` | Қимати калиди idempotency. |
| $args | `array` | Аргументҳое, ки барои кӯмак дар тавлиди калид истифода мешаванд. |
| $context | `string` | Контексте, ки дар он калиди idempotency тавлид мешавад. |

### Аз версия {#since}

- 3.5.0
### Манбаъ {#source}

Дар [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) дар сатри 54 муайян шудааст
