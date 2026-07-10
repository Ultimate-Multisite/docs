---
id: wu_woocommerce_line_item_params
title: Salain - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

I-filter ang mga parameter na ginagamit upang gumawa ng mga line item sa WooCommerce Cart, bago i-redirect ang customer sa WooCommerce checkout.

## Mga Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | Ang mga parameter ng cart line item. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ang Ultimate Multisite line item instance. |
| $wc_product | `\WC_Product` | Ang WooCommerce product. |

### Mula Noong {#since}

- 2.0.0
### Pinagmulan {#source}

Tinukoy sa [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) sa line 662


## Mga Ibinabalik {#returns}
Ang binagong mga parameter ng line item.
