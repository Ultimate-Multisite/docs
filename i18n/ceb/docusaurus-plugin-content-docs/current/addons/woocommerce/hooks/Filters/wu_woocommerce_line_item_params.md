---
id: wu_woocommerce_line_item_params
title: Salaan - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

Sal-a ang mga parameter nga gigamit sa paghimo sa mga line item sa WooCommerce Cart, sa wala pa i-redirect ang customer ngadto sa WooCommerce checkout.

## Mga Parameter

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | Ang mga parameter sa line item sa cart. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ang instance sa line item sa Ultimate Multisite. |
| $wc_product | `\WC_Product` | Ang produkto sa WooCommerce. |

### Sukad

- 2.0.0
### Tinubdan

Gihubit sa [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) sa linya 662


## Mga Pagbalik
Ang giusab nga mga parameter sa line item.
