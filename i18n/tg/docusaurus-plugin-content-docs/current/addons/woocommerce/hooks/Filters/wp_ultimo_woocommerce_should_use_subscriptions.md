---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Филтр - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Филтр: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Ба таҳиягарон имкон медиҳад, ки истифодаи WooCommerce Subscriptions-ро маҷбурӣ кунанд.

Бо нобаёнӣ, илова месанҷад, ки (1) WooCommerce Subscriptions мавҷуд аст (ё plugin-и пурра ё core-и ҳамроҳшуда), сипас (2) танзимотеро месанҷад, ки истифодаи WooCommerce Subscriptions-ро фаъол мекунад.

## Параметрҳо {#parameters}

| Ном | Навъ | Тавсиф |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Агар айни ҳол ба мо лозим бошад, ки Woo Subs-ро истифода барем. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Объекти ҷорӣ. |

### Манбаъ {#source}

Дар [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) дар сатри 361 муайян шудааст


## Бармегардонад {#returns}
true барои истифодаи WooCommerce Subs, false барои истифода накардани он.
