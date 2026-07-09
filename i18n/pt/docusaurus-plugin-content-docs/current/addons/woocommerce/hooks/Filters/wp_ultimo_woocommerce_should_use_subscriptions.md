---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filtro - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filtro: wp_ultimo_woocommerce_should_use_subscriptions

Permite que os programadores forcem a utilização de WooCommerce Subscriptions.

Por predefinição, o add-on verifica se (1) WooCommerce Subscriptions está presente (seja o plugin completo ou o core incluído) e depois (2) verifica a definição que ativa a utilização de WooCommerce Subscriptions.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Se atualmente precisamos de usar Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | O objeto atual. |

### Fonte

Definido em [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) na linha 361


## Retorna
true para usar WooCommerce Subs, false para não o usar.
