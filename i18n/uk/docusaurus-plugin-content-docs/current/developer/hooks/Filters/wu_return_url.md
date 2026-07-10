---
id: wu_return_url
title: Фільтр - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url {#filter-wureturnurl}

Дозволяє розробникам змінити URL повернення шлюзу, який використовується після процесу оформлення замовлення.

## Параметри {#parameters}

| Ім'я | Тип | Опис |
|------|------|-------------|
| $return_url | `string` | URL, на який буде перенаправлено після процесу. |
| $gateway | `self` | екземпляр шлюзу. |
| $payment | `\WP_Ultimo\Models\Payment` | екземпляр платежу Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | поточне замовлення кошика Ultimate Multisite. |

### Починаючи з {#since}

- 2.0.20
### Джерело {#source}

Визначено в [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) на рядку 683

## Повертає {#returns}
