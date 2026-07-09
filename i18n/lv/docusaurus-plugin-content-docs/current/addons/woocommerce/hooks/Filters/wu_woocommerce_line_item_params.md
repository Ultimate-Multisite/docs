---
id: wu_woocommerce_line_item_params
title: Filtrs - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filtrs: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

Filtrē parametrus, kas tiek izmantoti, lai izveidotu rindas vienumus WooCommerce grozā, pirms klients tiek novirzīts uz WooCommerce norēķināšanos.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $line_item_params | `array` | Groza rindas vienuma parametri. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite rindas vienuma instance. |
| $wc_product | `\WC_Product` | WooCommerce produkts. |

### Kopš {#since}

- 2.0.0
### Avots {#source}

Definēts [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) 662. rindā


## Atgriež {#returns}
Modificētos rindas vienuma parametrus.
