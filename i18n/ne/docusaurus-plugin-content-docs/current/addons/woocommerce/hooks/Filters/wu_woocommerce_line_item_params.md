---
id: wu_woocommerce_line_item_params
title: फिल्टर - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# फिल्टर: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

ग्राहकलाई WooCommerce चेकआउटमा पुनर्निर्देशित गर्नुअघि, WooCommerce कार्टमा लाइन आइटमहरू सिर्जना गर्न प्रयोग गरिने प्यारामिटरहरू फिल्टर गर्नुहोस्।

## प्यारामिटरहरू {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $line_item_params | `array` | कार्ट लाइन आइटम प्यारामिटरहरू। |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite लाइन आइटम इन्स्ट्यान्स। |
| $wc_product | `\WC_Product` | WooCommerce उत्पादन। |

### देखि {#since}

- 2.0.0
### स्रोत {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) मा लाइन 662 मा परिभाषित


## फिर्ता मानहरू {#returns}
परिमार्जित लाइन आइटम प्यारामिटरहरू।
