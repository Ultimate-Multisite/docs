---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

ডেভেলপারদের WooCommerce Subscriptions ব্যবহার করতে বাধ্য করার সুযোগ দেয়।

ডিফল্টভাবে, অ্যাড-অনটি প্রথমে পরীক্ষা করে দেখে যে (১) WooCommerce Subscriptions আছে কিনা (পুরো প্লাগইন হিসেবে বা কোর-এর সাথে যুক্ত), এবং তারপর (২) WooCommerce Subscriptions ব্যবহারের জন্য সেটিংস চালু আছে কিনা।

## প্যারামিটারসমূহ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | যদি আমাদের বর্তমানে Woo Subs ব্যবহার করার প্রয়োজন হয়। |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | বর্তমান অবজেক্টটি। |

### উৎস {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) ফাইলে ৩৬১ লাইনে সংজ্ঞায়িত।

## রিটার্ন করে {#returns}
WooCommerce Subs ব্যবহার করতে `true` এবং ব্যবহার না করতে `false`।
