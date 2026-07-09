---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Lim - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Tso cai rau cov developer yuam kom siv WooCommerce Subscriptions.

Raws li qub, qhov add-on yuav xyuas yog tias (1) WooCommerce Subscriptions muaj nyob (txawm yog plugin tag nrho lossis core uas muab los ua ke), ces (2) xyuas qhov setting uas qhib kev siv WooCommerce Subscriptions.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Yog tias tam sim no peb yuav tsum siv Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Qhov object tam sim no. |

### Source {#source}

Teev tseg hauv [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) ntawm kab 361


## Returns {#returns}
true kom siv WooCommerce Subs, false kom tsis siv nws.
