---
id: wu_return_url
title: Filtar - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url {#filter-wureturnurl}

Omogućuje developerima promjenu URL-a za povratak pristupnika koji se koristi nakon procesa naplate.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | URL za preusmjeravanje nakon procesa. |
| $gateway | `self` | instanca pristupnika. |
| $payment | `\WP_Ultimo\Models\Payment` | instanca plaćanja Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | trenutačna narudžba košarice Ultimate Multisite. |

### Od {#since}

- 2.0.20
### Izvor {#source}

Definirano u [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) u retku 683


## Vraća {#returns}
