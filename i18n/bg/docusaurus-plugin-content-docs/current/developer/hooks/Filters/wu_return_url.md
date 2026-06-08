---
id: wu_return_url
title: Филтър - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

Позволява на разработчиците да променят URL-адресата на връщане на гейтвейа, която се използва след процеса на плащане (checkout).

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | URL-ът, към който се пренасочва след процеса. |
| $gateway | `self` | Инстанцията на гейтвейа. |
| $payment | `\WP_Ultimo\Models\Payment` | Инстанцията на плащането Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | Текущият ред/поръчка в количката Ultimate Multisite. |

### Since

- 2.0.20
### Source

Дефиниран в [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) на линия 683


## Returns
