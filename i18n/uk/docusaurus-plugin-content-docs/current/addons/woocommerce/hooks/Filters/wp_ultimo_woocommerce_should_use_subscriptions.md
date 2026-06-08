---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Фільтр - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

Дозволяє розробникам примусово використовувати WooCommerce Subscriptions.

За замовчуванням аддон перевіряє, чи (1) встановлено WooCommerce Subscriptions (повний плагін або вбудований core), а потім (2) перевіряє налаштування, що увімкнює використання WooCommerce Subscriptions.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Чи потрібно нам зараз використовувати Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Поточний об'єкт. |

### Source

Визначено в [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) на рядку 361

## Returns
`true` для використання WooCommerce Subs, `false` для відмови від його використання.
