---
id: wu_return_url
title: Akayunguruzo - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Akayunguruzo: wu_return_url {#filter-wureturnurl}

Emerera abatunganya guhindura URL yo kugarukiraho ya gateway ikoreshwa nyuma y'ibikorwa bya checkout.

## Ibipimo {#parameters}

| Izina | Ubwoko | Ibisobanuro |
|------|------|-------------|
| $return_url | `string` | URL yo koherezaho nyuma y'igikorwa. |
| $gateway | `self` | urugero rwa gateway. |
| $payment | `\WP_Ultimo\Models\Payment` | urugero rw'ubwishyu rwa Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | itegeko rya cart rya Ultimate Multisite ririho ubu. |

### Kuva {#since}

- 2.0.20
### Inkomoko {#source}

Byasobanuwe muri [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) ku murongo wa 683


## Ibisubizwa {#returns}
