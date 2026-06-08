---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

ڈویلپرز کو WooCommerce Subscriptions کو استعمال کرنے کے لیے مجبور کر سکتا ہے۔

ڈیفالٹ طور پر، یہ ایڈ آن پہلے چیک کرتا ہے کہ (1) کیا WooCommerce Subscriptions موجود ہے (چاہے وہ مکمل پلگ ان ہو یا کور میں شامل ہو)، اور پھر (2) وہ سیٹنگ چیک کرتا ہے جو WooCommerce Subscriptions کے استعمال کو فعال کرتی ہے۔

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | اگر ہمیں فی الحال Woo Subs استعمال کرنے کی ضرورت ہے۔ |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | موجودہ آبجیکٹ۔ |

### Source

یہ [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) میں لائن 361 پر ڈیفائن کیا گیا ہے۔

## Returns
`true` کا مطلب ہے WooCommerce Subs استعمال کرنا، اور `false` کا مطلب ہے کہ اسے استعمال نہ کیا جائے۔
