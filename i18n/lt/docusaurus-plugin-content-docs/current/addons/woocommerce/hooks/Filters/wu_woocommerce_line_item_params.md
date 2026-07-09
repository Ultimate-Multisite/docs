---
id: wu_woocommerce_line_item_params
title: Filtras - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filtras: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

Filtruoja parametrus, naudojamus kuriant eilutės elementus WooCommerce Cart, prieš nukreipiant klientą į WooCommerce checkout.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $line_item_params | `array` | Krepšelio eilutės elemento parametrai. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite eilutės elemento egzempliorius. |
| $wc_product | `\WC_Product` | WooCommerce produktas. |

### Nuo {#since}

- 2.0.0
### Šaltinis {#source}

Apibrėžta [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) 662 eilutėje


## Grąžina {#returns}
Pakeistus eilutės elemento parametrus.
