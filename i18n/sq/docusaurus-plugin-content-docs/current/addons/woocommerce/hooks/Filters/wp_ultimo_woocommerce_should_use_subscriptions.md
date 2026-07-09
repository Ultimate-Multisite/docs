---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filtër - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filtër: wp_ultimo_woocommerce_should_use_subscriptions

Lejo zhvilluesit të detyrojnë përdorimin e WooCommerce Subscriptions.

Si parazgjedhje, shtesa kontrollon nëse (1) WooCommerce Subscriptions është i pranishëm (qoftë plugin i plotë ose core i përfshirë), pastaj (2) kontrollon cilësimin që aktivizon përdorimin e WooCommerce Subscriptions.

## Parametrat

| Emri | Tipi | Përshkrimi |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Nëse aktualisht na duhet të përdorim Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Objekti aktual. |

### Burimi

Përcaktuar në [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) në rreshtin 361


## Kthen
true për të përdorur WooCommerce Subs, false për të mos e përdorur.
