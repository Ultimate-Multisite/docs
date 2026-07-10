---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

Filtert d'Parameteren, déi benotzt ginn, fir d'Linnenartikelen am WooCommerce Wuerekuerf ze erstellen, éier de Client op de WooCommerce Checkout weidergeleet gëtt.

## Parameteren {#parameters}

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $line_item_params | `array` | D'Parameteren vum Wuerekuerf-Linnenartikel. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | D'Ultimate Multisite Linnenartikel-Instanz. |
| $wc_product | `\WC_Product` | De WooCommerce Produkt. |

### Säit {#since}

- 2.0.0
### Quell {#source}

Definéiert an [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) op Linn 662


## Retouren {#returns}
Déi geännert Linnenartikel-Parameteren.
