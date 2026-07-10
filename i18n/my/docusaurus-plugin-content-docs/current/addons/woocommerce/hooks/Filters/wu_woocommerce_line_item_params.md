---
id: wu_woocommerce_line_item_params
title: စစ်ထုတ်ခြင်း - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

WooCommerce ကားတွဲ (Cart) မှာ line items တွေ ဖန်တီးဖို့ အသုံးပြုတဲ့ parameters တွေကို၊ customer ကို WooCommerce checkout ကို redirect မလုပ်ခင်မှာ စစ်ထုတ် (filter) ပေးတဲ့ နေရာ ဖြစ်ပါတယ်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | ကားတွဲ (cart) line item တွေရဲ့ parameters တွေ ဖြစ်ပါတယ်။ |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite line item instance ဖြစ်ပါတယ်။ |
| $wc_product | `\WC_Product` | WooCommerce product ဖြစ်ပါတယ်။ |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) at line 662


## Returns {#returns}
ပြင်ဆင်ထားတဲ့ line item parameters တွေ။
