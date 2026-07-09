---
id: wu_return_url
title: Filter - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url {#filter-wureturnurl}

Lar utviklere endre retur-URL-en for betalingsløsningen som brukes etter at betalingsprosessen er fullført.

## Parametere {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | URL-en som skal omdirigeres til etter at prosessen er fullført. |
| $gateway | `self` | Instansen for betalingsløsningen. |
| $payment | `\WP_Ultimo\Models\Payment` | Instansen for Ultimate Multisite-betalingen. |
| $cart | `\WP_Ultimo\Checkout\Cart` | Den nåværende Ultimate Multisite-handlekurvordren. |

### Siden {#since}

- 2.0.20
### Kilde {#source}

Definert i [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) på linje 683


## Returnerer {#returns}
