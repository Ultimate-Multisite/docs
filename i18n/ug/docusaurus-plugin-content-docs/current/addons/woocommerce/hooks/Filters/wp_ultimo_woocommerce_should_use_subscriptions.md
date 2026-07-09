---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: سۈزگۈچ - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

ئىجادكارلارنىڭ WooCommerce Subscriptions ئىشلىتىشنى مەجبۇرىي قىلىشىغا يول قويىدۇ.

سۈكۈتتىكى ھالەتتە، بۇ add-on ئاۋۋال (1) WooCommerce Subscriptions بار-يوقلۇقىنى تەكشۈرىدۇ (تولۇق plugin ياكى باغلانغان core بولسۇن)، ئاندىن (2) WooCommerce Subscriptions ئىشلىتىشنى قوزغىتىدىغان تەڭشەكنى تەكشۈرىدۇ.

## پارامېتىرلار

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | ھازىر Woo Subs ئىشلىتىشىمىز كېرەك بولسا. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | نۆۋەتتىكى object. |

### مەنبە

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) دا 361-قۇردا ئېنىقلانغان


## قايتۇرىدۇ
WooCommerce Subs ئىشلىتىش ئۈچۈن true، ئىشلەتمەسلىك ئۈچۈن false.
