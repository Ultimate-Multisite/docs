---
id: wu_return_url
title: Hidlydd - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Hidlydd: wu_return_url

Caniatáu i ddatblygwyr newid URL dychwelyd y porth talu a ddefnyddir ar ôl prosesau talu.

## Paramedrau {#parameters}

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $return_url | `string` | yr URL i ailgyfeirio iddo ar ôl y broses. |
| $gateway | `self` | enghraifft y porth talu. |
| $payment | `\WP_Ultimo\Models\Payment` | enghraifft taliad Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | archeb fasged gyfredol Ultimate Multisite. |

### Ers {#since}

- 2.0.20
### Ffynhonnell {#source}

Wedi’i ddiffinio yn [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) ar linell 683


## Dychweliadau {#returns}
