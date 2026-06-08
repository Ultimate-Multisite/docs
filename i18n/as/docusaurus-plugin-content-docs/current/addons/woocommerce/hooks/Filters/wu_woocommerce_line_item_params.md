---
id: wu_woocommerce_line_item_params
title: ফিল্টাৰ - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

WooCommerce checkout লৈ কাস্টমৰক পুনৰ স্থানান্তৰ কৰাৰ আগতে, WooCommerce Cart ত line item সমূহ সৃষ্টি কৰিবলৈ ব্যৱহৃত parameters সমূহ ফিল্টাৰ কৰে।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | কাৰ্টৰ line item parameters। |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite line item-ৰ instance। |
| $wc_product | `\WC_Product` | WooCommerce product। |

### Since

- 2.0.0
### Source

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) at line 662


## Returns
সলনি কৰা line item parameters।
