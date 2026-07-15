---
id: wu_return_url
title: Filtè - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

Pèmèt devlopè yo chanje URL retou gateway la ki itilize apre pwosesis checkout yo.

## Paramèt {#parameters}

| Non | Tip | Deskripsyon |
|------|------|-------------|
| $return_url | `string` | URL pou redirije apre pwosesis la. |
| $gateway | `self` | enstans gateway la. |
| $payment | `\WP_Ultimo\Models\Payment` | enstans peman Ultimate Multisite la. |
| $cart | `\WP_Ultimo\Checkout\Cart` | kòmann panier Ultimate Multisite aktyèl la. |

### Depi {#since}

- 2.0.20
### Sous {#source}

Defini nan [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) nan liy 683


## Retounen {#returns}
