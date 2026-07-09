---
id: wu_woocommerce_line_item_params
title: फिल्टर - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

WooCommerce चेकआउटवर ग्राहकला रीडायरेक्ट करण्यापूर्वी, कार्टमधील लाइन आयटम (line items) तयार करण्यासाठी वापरले जाणारे पॅरामीटर्स (parameters) फिल्टर करा.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | कार्टमधील लाइन आयटम पॅरामीटर्स. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite लाइन आयटम इन्स्टन्स. |
| $wc_product | `\WC_Product` | WooCommerce उत्पादन (product). |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) मध्ये लाइन 662 वर परिभाषित केले आहे.

## Returns {#returns}
बदललेले लाइन आयटम पॅरामीटर्स.
