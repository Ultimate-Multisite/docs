---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

ডেভেলপৰসকলক WooCommerce Subscriptions ব্যৱহাৰ কৰিবলৈ বাধ্য কৰিবলৈ অনুমতি দিয়ে।

স্বাভাবিকভাৱে, এই add-on টো পৰীক্ষা কৰে যে (১) WooCommerce Subscriptions উপলব্ধ আছে নে (পূৰ্ণ plugin হিচাপে বা core-ত অন্তৰ্ভুক্ত), আৰু তাৰ পিছত (২) WooCommerce Subscriptions ব্যৱহাৰ কৰাৰ বাবে দিয়া সেটিংটো সক্ৰিয় আছে নে।

## প্যারামিটাৰসমূহ (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | যদি আমি বৰ্তমান Woo Subs ব্যৱহাৰ কৰিবলগীয়া হয়। |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | বৰ্তমানৰ object টো। |

### উৎস (Source) {#source}

[inc/gateways/class-woocommerce-gateway.php](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) ত ৩ ৬ ১ নং লাইনত সংজ্ঞায়িত কৰা হৈছে।

## ফলাফল (Returns) {#returns}
WooCommerce Subs ব্যৱহাৰ কৰিবলৈ `true` আৰু ব্যৱহাৰ নকৰিবলৈ `false`।
