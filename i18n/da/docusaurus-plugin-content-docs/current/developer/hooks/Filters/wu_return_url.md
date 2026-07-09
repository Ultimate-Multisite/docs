---
id: wu_return_url
title: Filter - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

Tillad udviklere at ændre den gateway-retur-URL, der bruges efter betalingsprocesser.

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $return_url | `string` | URL'en der skal omdirigeres til efter processen. |
| $gateway | `self` | gateway-instansen. |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite-betalingsinstansen. |
| $cart | `\WP_Ultimo\Checkout\Cart` | den aktuelle Ultimate Multisite-kurvordre. |

### Siden

- 2.0.20
### Kilde

Defineret i [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) på linje 683


## Returnerer
