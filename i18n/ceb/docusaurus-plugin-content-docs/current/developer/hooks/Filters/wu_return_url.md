---
id: wu_return_url
title: Salaan - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url {#filter-wureturnurl}

Tugoti ang mga developer nga usbon ang gateway return URL nga gigamit human sa mga proseso sa pag-checkout.

## Mga Parameter {#parameters}

| Ngalan | Uri | Deskripsyon |
|------|------|-------------|
| $return_url | `string` | ang URL nga i-redirect human sa proseso. |
| $gateway | `self` | ang gateway instance. |
| $payment | `\WP_Ultimo\Models\Payment` | ang Ultimate Multisite payment instance. |
| $cart | `\WP_Ultimo\Checkout\Cart` | ang kasamtangang Ultimate Multisite cart order. |

### Sukad {#since}

- 2.0.20
### Tinubdan {#source}

Gidefine sa [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) sa linya 683


## Mga Ibalik {#returns}
