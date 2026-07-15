---
id: wu_return_url
title: Filter - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

Pinapayagan nito ang mga developer na baguhin ang URL ng pagbabalik (return URL) ng gateway na ginagamit pagkatapos ng proseso ng checkout.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | ang URL na didirekta pagkatapos ng proseso. |
| $gateway | `self` | ang instance ng gateway. |
| $payment | `\WP_Ultimo\Models\Payment` | ang instance ng pagbabayad ng Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | ang kasalukuyang order ng cart ng Ultimate Multisite. |

### Since {#since}

- 2.0.20
### Source {#source}

Tinukoy sa [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) sa linya 683


## Returns {#returns}
