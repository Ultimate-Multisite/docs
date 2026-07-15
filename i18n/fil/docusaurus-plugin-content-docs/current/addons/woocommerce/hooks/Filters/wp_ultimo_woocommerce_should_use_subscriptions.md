---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

Pinapayagan nito ang mga developer na pilitin ang paggamit ng WooCommerce Subscriptions.

Sa default, tinitingnan ng add-on kung (1) naroroon ang WooCommerce Subscriptions (maaaring buong plugin o kasama sa core), at pagkatapos ay (2) tinitingnan din nito ang setting na nagpapahintulot sa paggamit ng WooCommerce Subscriptions.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Kung kailangan ba nating gamitin ang Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Ang kasalukuyang object. |

### Source {#source}

Nakatakda sa [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) sa linya 361


## Returns {#returns}
`true` para gamitin ang WooCommerce Subs, `false` para huwag itong gamitin.
