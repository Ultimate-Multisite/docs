---
id: wu_return_url
title: Filtras - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filtras: wu_return_url

Leidžia kūrėjams pakeisti mokėjimo šliuzo grąžinimo URL, naudojamą po atsiskaitymo procesų.

## Parametrai

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | URL, į kurį nukreipiama po proceso. |
| $gateway | `self` | mokėjimo šliuzo egzempliorius. |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite mokėjimo egzempliorius. |
| $cart | `\WP_Ultimo\Checkout\Cart` | dabartinis Ultimate Multisite krepšelio užsakymas. |

### Nuo

- 2.0.20
### Šaltinis

Apibrėžta [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) 683 eilutėje


## Grąžina
