---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

WooCommerce Cart پر line items بنانے کے لیے استعمال ہونے والے parameters کو فلٹر کرتا ہے، اس سے پہلے کہ کسٹمر کو WooCommerce checkout پر ریڈائریکٹ کیا جائے۔

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | کارٹ کے line item parameters۔ |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite line item instance۔ |
| $wc_product | `\WC_Product` | WooCommerce product۔ |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) میں لائن 662 پر ڈیفائن کیا گیا ہے۔

## Returns {#returns}
متبادل (modified) line item parameters۔
