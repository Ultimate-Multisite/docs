---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

WooCommerce कार्ट पर लाइन आइटम बनाने के लिए उपयोग किए जाने वाले पैरामीटर्स को फ़िल्टर करता है, इससे पहले कि ग्राहक को WooCommerce चेकआउट पर रीडायरेक्ट किया जाए।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | कार्ट लाइन आइटम पैरामीटर्स। |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite लाइन आइटम इंस्टेंस। |
| $wc_product | `\WC_Product` | WooCommerce प्रोडक्ट। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) में लाइन 662 पर परिभाषित।

## Returns {#returns}
संशोधित लाइन आइटम पैरामीटर्स।
