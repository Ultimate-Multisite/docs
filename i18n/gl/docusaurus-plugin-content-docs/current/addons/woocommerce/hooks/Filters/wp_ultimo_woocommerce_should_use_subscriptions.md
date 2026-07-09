---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filtro - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filtro: wp_ultimo_woocommerce_should_use_subscriptions

Permite aos desenvolvedores forzar o uso de WooCommerce Subscriptions.

Por defecto, o add-on comproba se (1) WooCommerce Subscriptions está presente (xa sexa como plugin completo ou núcleo incluído), despois (2) comproba a configuración que activa o uso de WooCommerce Subscriptions.

## Parámetros

| Nome | Tipo | Descrición |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Se actualmente precisamos usar Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | O obxecto actual. |

### Fonte

Definido en [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) na liña 361


## Devolve
true para usar WooCommerce Subs, false para non usalo.
