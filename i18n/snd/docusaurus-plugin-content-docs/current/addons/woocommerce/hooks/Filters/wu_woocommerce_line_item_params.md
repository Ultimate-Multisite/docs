---
id: wu_woocommerce_line_item_params
title: فلٽر - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# فلٽر: wu_woocommerce_line_item_params

WooCommerce Cart تي line items ٺاهڻ لاءِ استعمال ٿيندڙ parameters کي فلٽر ڪريو، گراهڪ کي WooCommerce چيڪ آئوٽ ڏانهن موڪلڻ کان اڳ.

## Parameters

| نالو | قسم | وضاحت |
|------|------|-------------|
| $line_item_params | `array` | ڪارٽ line item parameters. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite line item instance. |
| $wc_product | `\WC_Product` | WooCommerce پراڊڪٽ. |

### کان وٺي

- 2.0.0
### ماخذ

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) ۾ line 662 تي بيان ٿيل


## واپسي
تبديل ڪيل line item parameters.
