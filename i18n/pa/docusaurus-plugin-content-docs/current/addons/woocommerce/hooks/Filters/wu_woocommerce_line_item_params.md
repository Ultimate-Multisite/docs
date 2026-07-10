---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

ਇਹ ਫਿਲਟਰ ਉਹ ਪੈਰਾਮੀਟਰ (parameters) ਬਦਲਦਾ ਹੈ ਜੋ WooCommerce Cart ਵਿੱਚ ਲਾਈਨ ਆਈਟਮਾਂ ਬਣਾਉਣ ਲਈ ਵਰਤੇ ਜਾਂਦੇ ਹਨ, ਜਦੋਂ ਗਾਹਕ ਨੂੰ WooCommerce checkout 'ਤੇ ਭੇਜਿਆ ਜਾਂਦਾ ਹੈ।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | ਕਾਰਟ ਦੀ ਲਾਈਨ ਆਈਟਮ ਦੇ ਪੈਰਾਮੀਟਰ। |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite ਲਾਈਨ ਆਈਟਮ ਦਾ ਇੰਸਟੈਂਸ। |
| $wc_product | `\WC_Product` | WooCommerce ਦਾ ਪ੍ਰੋਡਕਟ। |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) at line 662


## Returns {#returns}
ਬਦਲੇ ਹੋਏ ਲਾਈਨ ਆਈਟਮ ਦੇ ਪੈਰਾਮੀਟਰ।
