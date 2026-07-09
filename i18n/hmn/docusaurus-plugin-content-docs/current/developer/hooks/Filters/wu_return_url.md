---
id: wu_return_url
title: Lim - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Lim: wu_return_url

Tso cai rau cov developers hloov gateway return URL uas siv tom qab cov txheej txheem checkout.

## Cov Parameter

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | URL uas yuav redirect tom qab txheej txheem. |
| $gateway | `self` | qhov gateway instance. |
| $payment | `\WP_Ultimo\Models\Payment` | qhov Ultimate Multisite payment instance. |
| $cart | `\WP_Ultimo\Checkout\Cart` | qhov kev xaj cart tam sim no ntawm Ultimate Multisite. |

### Txij li

- 2.0.20
### Qhov chaw

Teev nyob rau hauv [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) ntawm kab 683


## Xa rov qab
