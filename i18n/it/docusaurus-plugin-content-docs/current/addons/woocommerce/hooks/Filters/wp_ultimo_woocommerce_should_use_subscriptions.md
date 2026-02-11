---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filtro - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

Consente agli sviluppatori di forzare l'uso di WooCommerce Subscriptions.

Per impostazione predefinita, l'add-on verifica se (1) WooCommerce Subscriptions è presente (sia come plugin completo sia come core incluso), quindi (2) controlla l'impostazione che abilita l'uso di WooCommerce Subscriptions.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Se attualmente è necessario utilizzare Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | L'oggetto corrente. |

### Source

Definito in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) alla riga 361

## Returns
true per utilizzare WooCommerce Subs, false per non utilizzarlo.
