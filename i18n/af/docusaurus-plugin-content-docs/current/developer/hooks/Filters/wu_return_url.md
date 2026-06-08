---
id: wu_return_url
title: Filter - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

Laat ontwikkelaars die gateway se terugkeer-URL verander wat gebruik word na die afrekenproses.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | die URL om na te herlei na die proses. |
| $gateway | `self` | die gateway-instansie. |
| $payment | `\WP_Ultimo\Models\Payment` | die Ultimate Multisite betalings-instansie. |
| $cart | `\WP_Ultimo\Checkout\Cart` | die huidige Ultimate Multisite winkelmand-bestelling. |

### Sedert

- 2.0.20
### Bron

Gedefinieer in [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) by lyn 683


## Teruggee
