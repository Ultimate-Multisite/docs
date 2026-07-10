---
id: wu_woocommerce_line_item_params
title: Lim - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

Lim cov parameters uas siv los tsim cov line items ntawm WooCommerce Cart, ua ntej xa tus neeg siv mus rau WooCommerce checkout.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | Cov cart line item parameters. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite line item instance. |
| $wc_product | `\WC_Product` | WooCommerce product. |

### Txij thaum {#since}

- 2.0.0
### Source {#source}

Teev tseg hauv [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) ntawm kab 662


## Returns {#returns}
Cov line item parameters uas tau hloov lawm.
