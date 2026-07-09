---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

WooCommerce కార్ట్‌లో లైన్ ఐటమ్స్‌ను సృష్టించడానికి ఉపయోగించే పారామీటర్లను, కస్టమర్‌ను WooCommerce చెకౌట్‌కి మళ్లించే ముందు, ఫిల్టర్ చేస్తుంది.

## పారామీటర్లు {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | కార్ట్ లైన్ ఐటమ్ పారామీటర్లు. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite లైన్ ఐటమ్ ఇన్‌స్టాన్స్. |
| $wc_product | `\WC_Product` | WooCommerce ఉత్పత్తి. |

### ఎప్పటి నుండి {#since}

- 2.0.0
### మూలం {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) వద్ద 662వ లైన్‌లో నిర్వచించబడింది.


## తిరిగి ఇస్తుంది {#returns}
మార్పులు చేసిన లైన్ ఐటమ్ పారామీటర్లు.
