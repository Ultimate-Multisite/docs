---
id: wu_woocommerce_line_item_params
title: فلتەر - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

ئەو parameters ـانە filter بکە کە بۆ دروستکردنی line items لەسەر WooCommerce Cart بەکاردەهێنرێن، پێش ئەوەی کڕیار بگوازرێتەوە بۆ WooCommerce checkout.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | parameters ـەکانی cart line item. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | نموونەی line item ـی Ultimate Multisite. |
| $wc_product | `\WC_Product` | بەرهەمی WooCommerce. |

### لەوەوە {#since}

- 2.0.0
### سەرچاوە {#source}

پێناسەکراوە لە [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) لە هێڵی 662


## دەگەڕێنێتەوە {#returns}
parameters ـە گۆڕدراوەکانی line item.
