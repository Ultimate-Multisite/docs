---
id: wu_return_url
title: 필터 - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

Allow developers to change the gateway return URL used after checkout processes.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | the URL to redirect after process. |
| $gateway | `self` | the gateway instance. |
| $payment | `\WP_Ultimo\Models\Payment` | the Ultimate Multisite payment instance. |
| $cart | `\WP_Ultimo\Checkout\Cart` | the current Ultimate Multisite cart order. |

### Since

- 2.0.20
### Source

Defined in [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) at line 683


## Returns
