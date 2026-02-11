---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

Laat ontwikkelaars het gebruik van WooCommerce Subscriptions afdwingen.

Standaard controleert de add-on of (1) WooCommerce Subscriptions aanwezig is (ofwel volledige plugin of gebundelde core), vervolgens (2) controleert de instelling die het gebruik van WooCommerce Subscriptions mogelijk maakt.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Als we momenteel Woo Subs moeten gebruiken. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Het huidige object. |

### Source

Gedefinieerd in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) op regel 361

## Returns

true om WooCommerce Subs te gebruiken, false om het niet te gebruiken.
