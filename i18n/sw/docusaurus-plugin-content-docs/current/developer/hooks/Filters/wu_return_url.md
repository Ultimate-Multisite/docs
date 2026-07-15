---
id: wu_return_url
title: Kifilasho - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

Inaruhusu watengenezaji (developers) kubadilisha anwani ya URL ya kurudi (return URL) inayotumika baada ya kukamilisha mchakato wa malipo (checkout).

## Parameters {#parameters}

| Name | Type | Maelezo |
|------|------|-------------|
| $return_url | `string` | URL ambayo itatumika kurudisha mtumiaji baada ya mchakato. |
| $gateway | `self` | Mfumo wa malipo (gateway) husika. |
| $payment | `\WP_Ultimo\Models\Payment` | Mfumo wa malipo wa Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | Agizo la sasa la malipo (cart) la Ultimate Multisite. |

### Since {#since}

- 2.0.20
### Source {#source}

Imefafanuliwa katika [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) kwenye mstari wa 683


## Returns {#returns}
