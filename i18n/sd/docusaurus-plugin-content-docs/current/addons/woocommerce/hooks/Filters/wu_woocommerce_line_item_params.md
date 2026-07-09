---
id: wu_woocommerce_line_item_params
title: فلٽر - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

WooCommerce Cart تي لائن شين ٺاهڻ لاءِ استعمال ٿيندڙ پيرا ميٽرز کي فلٽر ڪريو، ڪسٽمر کي WooCommerce checkout ڏانهن موڪلڻ کان اڳ.

## پيرا ميٽرز

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | ڪارٽ لائن شيءِ جا پيرا ميٽرز. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite لائن شيءِ جو انسٽينس. |
| $wc_product | `\WC_Product` | WooCommerce پيداوار. |

### کان وٺي

- 2.0.0
### ذريعو

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) ۾ لائن 662 تي بيان ٿيل


## واپسيون
تبديل ٿيل لائن شيءِ جا پيرا ميٽرز.
