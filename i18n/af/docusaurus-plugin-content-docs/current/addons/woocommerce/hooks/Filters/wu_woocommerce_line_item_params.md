---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

Filter die parameters wat gebruik word om die items op die WooCommerce Winkelmand te skep, voordat die kliënt na die WooCommerce afrekening herlei word.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | Die parameters vir die items in die winkelmand. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Die Ultimate Multisite item-instansie. |
| $wc_product | `\WC_Product` | Die WooCommerce produk. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) at line 662


## Returns {#returns}
Die gewysigde item-parameters.
