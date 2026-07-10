---
id: wu_return_url
title: Filter - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Pansala: wu_return_url {#filter-wureturnurl}

Payagan ang mga developer na baguhin ang return URL ng gateway na ginagamit pagkatapos ng mga proseso ng checkout.

## Mga Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | ang URL kung saan ire-redirect pagkatapos ng proseso. |
| $gateway | `self` | ang instance ng gateway. |
| $payment | `\WP_Ultimo\Models\Payment` | ang instance ng pagbabayad ng Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | ang kasalukuyang order sa cart ng Ultimate Multisite. |

### Mula Noong {#since}

- 2.0.20
### Pinagmulan {#source}

Tinukoy sa [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) sa linya 683


## Mga Ibinabalik {#returns}
