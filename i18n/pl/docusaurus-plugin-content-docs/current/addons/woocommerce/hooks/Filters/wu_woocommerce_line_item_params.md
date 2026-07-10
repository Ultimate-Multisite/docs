---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

Filtruje parametry używane do tworzenia pozycji w koszyku WooCommerce, zanim klient zostanie przekierowany do realizacji zamówienia (checkout) WooCommerce.

## Parametry {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | Parametry pozycji w koszyku. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Instancja pozycji w koszyku Ultimate Multisite. |
| $wc_product | `\WC_Product` | Produkt WooCommerce. |

### Since {#since}

- 2.0.0
### Source {#source}

Zdefiniowane w [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) w linii 662


## Returns {#returns}
Zmodyfikowane parametry pozycji w koszyku.
