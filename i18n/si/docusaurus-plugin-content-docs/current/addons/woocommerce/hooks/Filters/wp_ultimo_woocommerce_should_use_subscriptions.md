---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: පෙරහන - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# පෙරහන: wp_ultimo_woocommerce_should_use_subscriptions

WooCommerce Subscriptions භාවිතය බලහත්කාරයෙන් ක්‍රියාත්මක කිරීමට සංවර්ධකයන්ට ඉඩ දෙයි.

පෙරනිමියෙන් add-on එක පරීක්ෂා කරන්නේ (1) WooCommerce Subscriptions තිබේද (සම්පූර්ණ plugin එකක් ලෙස හෝ bundled core ලෙස), ඉන්පසු (2) WooCommerce Subscriptions භාවිතය සක්‍රීය කරන සැකසුම පරීක්ෂා කරයි.

## පරාමිති

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | දැනට අපට Woo Subs භාවිතා කිරීමට අවශ්‍ය නම්. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | වත්මන් object එක. |

### මූලාශ්‍රය

361 වැනි පේළියේ [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) තුළ අර්ථ දක්වා ඇත


## ආපසු ලැබෙන්නේ
WooCommerce Subs භාවිතා කිරීමට true, එය භාවිතා නොකිරීමට false.
