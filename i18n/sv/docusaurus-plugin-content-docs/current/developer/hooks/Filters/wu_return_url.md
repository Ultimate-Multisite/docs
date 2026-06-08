---
id: wu_return_url
title: Filter - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

Låter utvecklare ändra den retur-URL som används av gatewayen efter att betalningsprocessen är klar.

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $return_url | `string` | URL:en som ska användas för omdirigering efter processen. |
| $gateway | `self` | Gateway-instansen. |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite betalningsinstans. |
| $cart | `\WP_Ultimo\Checkout\Cart` | Den aktuella Ultimate Multisite varukorgen. |

### Sedan

- 2.0.20
### Källa

Definieras i [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) på rad 683


## Returnerar
