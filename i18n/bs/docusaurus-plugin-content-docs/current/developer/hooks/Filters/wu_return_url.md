---
id: wu_return_url
title: Filter - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

Omogućava programerima da promijene URL povratka gatewaya koji se koristi nakon procesa plaćanja.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | URL na koji se preusmjerava nakon procesa. |
| $gateway | `self` | instanca gatewaya. |
| $payment | `\WP_Ultimo\Models\Payment` | instanca plaćanja Ultimate Multisite-a. |
| $cart | `\WP_Ultimo\Checkout\Cart` | trenutna Ultimate Multisite narudžba iz korpe. |

### Od verzije

- 2.0.20
### Izvor

Definisano u [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) na liniji 683


## Vraća
