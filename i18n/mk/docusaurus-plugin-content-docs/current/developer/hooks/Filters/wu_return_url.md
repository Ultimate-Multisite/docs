---
id: wu_return_url
title: Филтер - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Филтер: wu_return_url {#filter-wureturnurl}

Дозволува на програмерите да го променат URL за враќање на порталот за плаќање што се користи по процесите на наплата.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $return_url | `string` | URL кон кој се пренасочува по процесот. |
| $gateway | `self` | инстанцата на порталот за плаќање. |
| $payment | `\WP_Ultimo\Models\Payment` | инстанцата за плаќање на Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | тековната нарачка во кошничката на Ultimate Multisite. |

### Од верзија {#since}

- 2.0.20
### Извор {#source}

Дефинирано во [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) на линија 683


## Враќа вредност {#returns}
