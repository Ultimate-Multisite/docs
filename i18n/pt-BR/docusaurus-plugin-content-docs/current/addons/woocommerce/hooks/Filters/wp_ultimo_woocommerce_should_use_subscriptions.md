---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filtro: wp_ultimo_woocommerce_should_use_subscriptions

Permite que os desenvolvedores forcem o uso das Subscrições do WooCommerce.

By default the add-on checks if (1) WooCommerce Subscriptions is present (either full plugin or bundled core), then (2) checks the setting enabling WooCommerce Subscriptions usage.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-----------|
| $enable_woocommerce_subscription_integration | `bool` | Se atualmente precisamos usar Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | O objeto atual. |

### Fonte

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) at line 361


## Retornos
verdadeiro para usar WooCommerce Subs, falso para não usá-lo.
