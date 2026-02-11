---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Фильтр: wp_ultimo_woocommerce_should_use_subscriptions

Позволяет разработчикам принудительно использовать подписки WooCommerce Subscriptions.

По умолчанию аддон проверяет, (1) присутствует ли WooCommerce Subscriptions (полный плагин или включённый ядром), а затем (2) проверяет настройку, разрешающую использование WooCommerce Subscriptions.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Если нам сейчас нужно использовать подписки Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Текущий объект. |

### Источник

Определено в [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) на строке 361

## Возвращает

true, чтобы использовать подписки WooCommerce, false, чтобы не использовать их.
