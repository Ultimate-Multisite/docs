---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Pansala - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

Tugoti ang mga developer nga pugson ang paggamit sa WooCommerce Subscriptions.

Sa default ang add-on mosusi kung (1) anaa ang WooCommerce Subscriptions (bisan full plugin o bundled core), unya (2) mosusi sa setting nga nagpa-enable sa paggamit sa WooCommerce Subscriptions.

## Mga Parameter

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Kung karon kinahanglan nato gamiton ang Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Ang kasamtangang object. |

### Tinubdan

Gidefine sa [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) sa linya 361


## Mga Ibalik
true aron gamiton ang WooCommerce Subs, false aron dili kini gamiton.
