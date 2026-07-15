---
id: wu_woocommerce_line_item_params
title: Filtrační parametr - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

Filtruje parametry používané k vytvoření položek v košíku WooCommerce, a to před přesměrováním zákazníka na pokladnu WooCommerce.

## Parametry {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | Parametry položky v košíku. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Instancí položky v košíku Ultimate Multisite. |
| $wc_product | `\WC_Product` | Produkt WooCommerce. |

### Since {#since}

- 2.0.0
### Source {#source}

Definováno v [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) na řádku 662


## Returns {#returns}
Modifikované parametry položky v košíku.
