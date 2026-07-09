---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

ገንቢዎች WooCommerce Subscriptions እንዲጠቀሙ ማስገደድ ይችላሉ።

በመደበኛነት፣ add-on-ው (1) WooCommerce Subscriptions መኖሩን (ሙሉ plugin ወይም የተያዘ core ቢሆንም)፣ ከዚያም (2) WooCommerce Subscriptionsን መጠቀም የሚያስችል ቅንብሩን ይፈትሻል።

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | አሁን Woo Subs መጠቀም ካለብን። |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | የአሁኑን object። |

### Source {#source}

በ[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) ፋይል ውስጥ በ361ኛው መስመር ተገልጿል።

## Returns {#returns}
WooCommerce Subs ለመጠቀም `true`፣ ላለመጠቀም ደግሞ `false` ይመልሳል።
