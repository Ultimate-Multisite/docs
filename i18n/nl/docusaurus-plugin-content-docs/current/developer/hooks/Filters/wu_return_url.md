---
id: wu_return_url
title: Filter - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

Laat ontwikkelaars de gateway return URL wijzigen die na het afrekenproces wordt gebruikt.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | de URL om na het proces te omleiden. |
| $gateway | `self` | de gateway instantie. |
| $payment | `\WP_Ultimo\Models\Payment` | de Ultimate Multisite betalingsinstantie. |
| $cart | `\WP_Ultimo\Checkout\Cart` | de huidige Ultimate Multisite winkelwagenorder. |

### Since

- 2.0.20
### Source

Defined in [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) at line 683


## Returns
