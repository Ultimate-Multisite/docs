---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: "Filter - wp_ultimo_woocommerce_should_use_subscriptions"
sidebar_label: "wp_ultimo_woocommerce_should_use_subscriptions"
---

# Filter: wp_ultimo_woocommerce_should_use_subscriptions

Allow developers to force the use of WooCommerce Subscriptions.

By default the add-on checks if (1) WooCommerce Subscriptions is present (either full plugin or bundled core), then (2) checks the setting enabling WooCommerce Subscriptions usage.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | If we currently need to use Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | The current object. |

### Source

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) at line 361


## Returns
true to use WooCommerce Subs, false to not use it.
