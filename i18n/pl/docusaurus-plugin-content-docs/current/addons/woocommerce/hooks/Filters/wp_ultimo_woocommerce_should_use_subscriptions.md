---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filtr - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filtr: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Pozwala deweloperom wymusić użycie WooCommerce Subscriptions.

Domyślnie dodatek sprawdza, czy (1) WooCommerce Subscriptions jest dostępny (czy to jako pełny plugin, czy w zestawie z core), a następnie (2) sprawdza ustawienie umożliwiające użycie WooCommerce Subscriptions.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Czy obecnie musimy używać Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Aktualny obiekt. |

### Źródło {#source}

Zdefiniowane w [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) w linii 361

## Zwraca {#returns}
`true`, aby użyć WooCommerce Subs, `false`, aby nie używać.
