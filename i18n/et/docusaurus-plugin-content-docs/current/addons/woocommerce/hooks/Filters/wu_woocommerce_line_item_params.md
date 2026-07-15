---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

Filtreeri parameetreid, mida kasutatakse WooCommerce ostukorvis reaartiklite loomiseks enne kliendi suunamist WooCommerce kassasse.

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $line_item_params | `array` | Ostukorvi reaartikli parameetrid. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite reaartikli eksemplar. |
| $wc_product | `\WC_Product` | WooCommerce toode. |

### Alates {#since}

- 2.0.0
### Allikas {#source}

Määratletud failis [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) real 662


## Tagastab {#returns}
Muudetud reaartikli parameetrid.
