---
id: wu_return_url
title: Filtër - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url {#filter-wureturnurl}

Lejon zhvilluesit të ndryshojnë URL-në e kthimit të portës së pagesës që përdoret pas proceseve të pagesës.

## Parametrat {#parameters}

| Emri | Tipi | Përshkrimi |
|------|------|-------------|
| $return_url | `string` | URL-ja ku të ridrejtohet pas procesit. |
| $gateway | `self` | instanca e portës së pagesës. |
| $payment | `\WP_Ultimo\Models\Payment` | instanca e pagesës së Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | porosia aktuale e shportës së Ultimate Multisite. |

### Që nga {#since}

- 2.0.20
### Burimi {#source}

Përcaktuar në [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) në rreshtin 683


## Kthen {#returns}
