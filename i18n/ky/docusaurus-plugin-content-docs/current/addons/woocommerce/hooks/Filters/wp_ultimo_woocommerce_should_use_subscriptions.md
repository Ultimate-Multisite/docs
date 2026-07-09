---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Чыпка - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Фильтр: wp_ultimo_woocommerce_should_use_subscriptions

Иштеп чыгуучуларга WooCommerce Subscriptions колдонулушун мажбурлоого уруксат берет.

Демейки боюнча add-on (1) WooCommerce Subscriptions бар-жогун текшерет (толук plugin же камтылган core), андан кийин (2) WooCommerce Subscriptions колдонулушун иштеткен жөндөөнү текшерет.

## Параметрлер

| Аты | Түрү | Сүрөттөмө |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Учурда Woo Subs колдонушубуз керек болсо. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Учурдагы объект. |

### Булак

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) ичинде 361-сапта аныкталган


## Кайтарымдар
WooCommerce Subs колдонуу үчүн true, колдонбоо үчүн false.
