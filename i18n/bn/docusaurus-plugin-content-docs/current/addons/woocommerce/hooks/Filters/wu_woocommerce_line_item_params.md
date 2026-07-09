---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

WooCommerce কার্টে লাইন আইটেম তৈরি করার জন্য ব্যবহৃত প্যারামিটারগুলো ফিল্টার করে দিন, গ্রাহককে WooCommerce চেকআউটে পাঠানোর আগে।

## প্যারামিটারসমূহ {#parameters}

| নাম | ধরন | বিবরণ |
|------|------|-------------|
| $line_item_params | `array` | কার্ট লাইন আইটেম প্যারামিটারগুলো। |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite লাইন আইটেম ইনস্ট্যান্স। |
| $wc_product | `\WC_Product` | WooCommerce পণ্য। |

### শুরু {#since}

- 2.0.0
### উৎস {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) এর লাইন ৬৬২ এ সংজ্ঞায়িত।

## ফেরত দেয় {#returns}
পরিবর্তিত লাইন আইটেম প্যারামিটারগুলো।
