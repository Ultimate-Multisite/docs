---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Филтър - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Позволява на разработчиците да принудят използването на WooCommerce Subscriptions.

По подразбиране, добавката проверява дали (1) WooCommerce Subscriptions е налична (или пълният plugin, или вградения основен компонент), след което (2) проверява настройките, които активират използването на WooCommerce Subscriptions.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Ако в момента трябва да използваме Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Текущ обект. |

### Source {#source}

Дефиниран в [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) на линия 361


## Returns {#returns}
`true`, за да се използва WooCommerce Subs, `false`, за да не се използва.
