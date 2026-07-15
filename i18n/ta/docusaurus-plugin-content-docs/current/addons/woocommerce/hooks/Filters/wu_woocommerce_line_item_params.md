---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

வாடிக்கையாளரை WooCommerce checkout-க்கு திருப்பி அனுப்பும் முன், WooCommerce Cart-ல் line items-களை உருவாக்கப் பயன்படுத்தப்படும் parameters-களை வடிகட்டுகிறது (Filter).

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | கார்ட் line item parameters. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite line item instance. |
| $wc_product | `\WC_Product` | WooCommerce product. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) at line 662


## Returns {#returns}
மாற்றியமைக்கப்பட்ட line item parameters.
