---
id: wu_return_url
title: Filter - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

Erlaabt Entwéckler, d'Retour-URL vun der Gateway z'änneren, déi no Ofschlossprozesser benotzt gëtt.

## Parameteren

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $return_url | `string` | d'URL, op déi nom Prozess weidergeleet gëtt. |
| $gateway | `self` | d'Gateway-Instanz. |
| $payment | `\WP_Ultimo\Models\Payment` | d'Bezuelungsinstanz vun Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | déi aktuell Wuerenkuerf-Bestellung vun Ultimate Multisite. |

### Zanter

- 2.0.20
### Quell

Definéiert an [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) an der Zeil 683


## Retourwäerter
