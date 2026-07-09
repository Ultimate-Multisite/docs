---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter – wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Umožňuje vývojárom vynútiť používanie WooCommerce Subscriptions.

V predvolenom nastavení doplnok kontroluje, či je (1) prítomný WooCommerce Subscriptions (buď plný plugin, alebo pribalené jadro), potom (2) kontroluje nastavenie umožňujúce používanie WooCommerce Subscriptions.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Či aktuálne potrebujeme používať Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Aktuálny objekt. |

### Zdroj {#source}

Definované v [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) na riadku 361


## Návratová hodnota {#returns}
true na používanie WooCommerce Subs, false na nepoužívanie.
