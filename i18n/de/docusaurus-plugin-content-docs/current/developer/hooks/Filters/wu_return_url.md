---
id: wu_return_url
title: Filter - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

Ermöglicht Entwicklern, die Rückkehr-URL des Gateways nach dem Checkout-Prozess zu ändern.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | die URL, zu der nach dem Prozess weitergeleitet wird. |
| $gateway | `self` | die Gateway-Instanz. |
| $payment | `\WP_Ultimo\Models\Payment` | die Ultimate Multisite Zahlungsinstanz. |
| $cart | `\WP_Ultimo\Checkout\Cart` | die aktuelle Ultimate Multisite Warenkorbbestellung. |

### Since

- 2.0.20
### Source

Definiert in [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) bei Zeile 683


## Returns
