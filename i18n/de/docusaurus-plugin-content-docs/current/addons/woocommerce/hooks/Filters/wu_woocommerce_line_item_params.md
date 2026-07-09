---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

Filter die Parameter, die zur Erstellung der Zeilenartikel im WooCommerce-Warenkorb verwendet werden, bevor der Kunde zum WooCommerce-Checkout weitergeleitet wird.

## Parameter {#parameters}

| Name | Typ | Beschreibung |
|------|------|-------------|
| $line_item_params | `array` | Die Parameter des Warenkorbzeilenartikels. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Die Instanz des Ultimate Multisite Zeilenartikels. |
| $wc_product | `\WC_Product` | Das WooCommerce-Produkt. |

### Seit {#since}

- 2.0.0

### Quelle {#source}

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) at line 662

## Rückgabe {#returns}
Die modifizierten Zeilenartikelparameter.
