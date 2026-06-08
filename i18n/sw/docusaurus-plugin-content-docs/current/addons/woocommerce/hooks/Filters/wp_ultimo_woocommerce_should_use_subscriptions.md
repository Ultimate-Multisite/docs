---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

Inaruhusu developers kulazimisha matumizi ya WooCommerce Subscriptions.

Kwa msingi (by default), add-on hii inakagua kama (1) WooCommerce Subscriptions ipo (iwe ni plugin kamili au sehemu ya core), kisha (2) inakagua mipangilio inayowezesha matumizi ya WooCommerce Subscriptions.

## Vigezo (Parameters)

| Name | Type | Maelezo |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Ikiwa kwa sasa tunahitaji kutumia Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Kifaa (object) kilicho sasa. |

### Chanzo (Source)

Imefafanuliwa katika [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) kwenye mstari wa 361.

## Inarejesha (Returns)
`true` kutumia WooCommerce Subs, na `false` kutotumia.
