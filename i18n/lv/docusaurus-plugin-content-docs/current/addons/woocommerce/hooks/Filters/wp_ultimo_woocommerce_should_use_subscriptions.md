---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filtrs - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filtrs: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Ļauj izstrādātājiem piespiedu kārtā izmantot WooCommerce Subscriptions.

Pēc noklusējuma papildinājums pārbauda, vai (1) WooCommerce Subscriptions ir pieejams (vai nu pilnais plugin, vai komplektā iekļautais kodols), pēc tam (2) pārbauda iestatījumu, kas iespējo WooCommerce Subscriptions izmantošanu.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Vai pašlaik ir jāizmanto Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Pašreizējais objekts. |

### Avots {#source}

Definēts [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) 361. rindā


## Atgriež {#returns}
true, lai izmantotu WooCommerce Subs, false, lai to neizmantotu.
