---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: فلتەر - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

ڕێگە بە گەشەپێدەران دەدات بە زۆرەملێ بەکارهێنانی WooCommerce Subscriptions بسەپێنن.

بە شێوەی پێشوەختە، add-on پشکنین دەکات کە (1) WooCommerce Subscriptions هەیە (یان pluginی تەواو یان coreی هاوپێچکراو)، پاشان (2) ڕێکخستنەکە دەپشکنێت کە بەکارهێنانی WooCommerce Subscriptions چالاک دەکات.

## پارامەتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | ئەگەر لە ئێستادا پێویستمان بە بەکارهێنانی Woo Subs هەبێت. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | ئۆبجێکتی ئێستایی. |

### سەرچاوە {#source}

لە [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) لە هێڵی 361 پێناسە کراوە


## دەگەڕێنێتەوە {#returns}
true بۆ بەکارهێنانی WooCommerce Subs، false بۆ بەکارنەهێنانی.
