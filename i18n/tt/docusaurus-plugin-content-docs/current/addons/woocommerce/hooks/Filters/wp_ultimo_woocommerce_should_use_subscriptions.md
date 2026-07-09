---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Фильтр - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

Эшләүчеләргә WooCommerce Subscriptions куллануны мәҗбүри итәргә рөхсәт итә.

Килешү буенча өстәмә башта (1) WooCommerce Subscriptions барлыгын тикшерә (тулы plugin яки комплекттагы төп өлеш), аннары (2) WooCommerce Subscriptions куллануны кабыза торган көйләмәне тикшерә.

## Параметрлар

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Әгәр хәзер Woo Subs кулланырга кирәк булса. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Хәзерге объект. |

### Чыганак

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) эчендә, 361 нче юлда билгеләнгән


## Кайтара
WooCommerce Subs куллану өчен true, кулланмау өчен false.
