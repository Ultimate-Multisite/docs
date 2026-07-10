---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filtru - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filtru: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Ħalli lill-iżviluppaturi jisfurzaw l-użu ta' WooCommerce Subscriptions.

B'mod awtomatiku l-add-on jiċċekkja jekk (1) WooCommerce Subscriptions huwiex preżenti (jew plugin sħiħ jew core inkluż), imbagħad (2) jiċċekkja s-setting li jippermetti l-użu ta' WooCommerce Subscriptions.

## Parametri {#parameters}

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Jekk bħalissa għandniex bżonn nużaw Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | L-oġġett attwali. |

### Sors {#source}

Iddefinit f'[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) fil-linja 361


## Jirritorna {#returns}
true biex tuża WooCommerce Subs, false biex ma tużahx.
