---
id: wu_return_url
title: Фильтр - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Фильтр: wu_return_url

Позволяет разработчикам изменить URL возврата шлюза, используемый после процессов оформления заказа.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $return_url | `string` | URL для перенаправления после процесса. |
| $gateway | `self` | экземпляр шлюза. |
| $payment | `\WP_Ultimo\Models\Payment` | экземпляр платежа Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | текущий заказ корзины Ultimate Multisite. |

### Since

- 2.0.20

### Source

Определено в [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) на строке 683


## Returns
