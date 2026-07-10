---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Umožňuje vývojářům vynutit použití WooCommerce Subscriptions.

Výchozí chování add-onu kontroluje, zda (1) je přítomno WooCommerce Subscriptions (ať už jako samostatný plugin, nebo jako vestavěný core), a poté (2) kontroluje nastavení povolující použití WooCommerce Subscriptions.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Zda aktuálně potřebujeme použít Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Aktuální objekt. |

### Zdroj {#source}

Definováno v [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) na řádku 361

## Vrátí {#returns}
`true` pro použití WooCommerce Subs, `false` pro jeho nepoužití.
