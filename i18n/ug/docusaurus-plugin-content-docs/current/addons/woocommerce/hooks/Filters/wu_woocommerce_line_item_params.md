---
id: wu_woocommerce_line_item_params
title: سۈزگۈچ - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# سۈزگۈچ: wu_woocommerce_line_item_params

خېرىدارنى WooCommerce checkout غا قايتا يۆتكەشتىن بۇرۇن، WooCommerce Cart تا قۇر لىنىيە تۈرلىرىنى قۇرۇشقا ئىشلىتىلىدىغان پارامېتىرلارنى سۈزۈڭ.

## پارامېتىرلار {#parameters}

| نامى | تۈرى | چۈشەندۈرۈش |
|------|------|-------------|
| $line_item_params | `array` | سەۋەت قۇر لىنىيە تۈرى پارامېتىرلىرى. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite قۇر لىنىيە تۈرى instance. |
| $wc_product | `\WC_Product` | WooCommerce مەھسۇلاتى. |

### باشلاپ {#since}

- 2.0.0
### مەنبە {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) دا 662-قۇردا ئېنىقلانغان


## قايتۇرىدۇ {#returns}
ئۆزگەرتىلگەن قۇر لىنىيە تۈرى پارامېتىرلىرى.
