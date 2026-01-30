---
id: wu_woocommerce_line_item_params
title: "Filter - wu_woocommerce_line_item_params"
sidebar_label: "wu_woocommerce_line_item_params"
---

# Filter: wu_woocommerce_line_item_params

Filter the parameters used to create the line items on the WooCommerce Cart, before redirecting the customer to the WooCommerce checkout.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | The cart line item parameters. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | The Ultimate Multisite line item instance. |
| $wc_product | `\WC_Product` | The WooCommerce product. |

### Since

- 2.0.0
### Source

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) at line 662


## Returns
The modified line item parameters.
