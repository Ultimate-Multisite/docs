---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

Ito ay nagfi-filter ng mga parameters na ginagamit para gumawa ng mga line items sa WooCommerce Cart, bago pa man i-redirect ang customer sa WooCommerce checkout.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | Ang mga parameters ng line item sa cart. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ang instance ng line item mula sa Ultimate Multisite. |
| $wc_product | `\WC_Product` | Ang produkto mula sa WooCommerce. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) at line 662


## Returns {#returns}
Ang binagong line item parameters.
