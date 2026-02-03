---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filtro - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

Permitir a los desarrolladores forzar el uso de WooCommerce Subscriptions.

Por defecto, el complemento verifica si (1) WooCommerce Subscriptions está presente (ya sea el plugin completo o el núcleo incluido), luego (2) verifica la configuración que habilita el uso de WooCommerce Subscriptions.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Si actualmente necesitamos usar Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | The current object. |

### Source

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) at line 361


## Returns
verdadero para usar WooCommerce Subs, falso para no usarlo.
