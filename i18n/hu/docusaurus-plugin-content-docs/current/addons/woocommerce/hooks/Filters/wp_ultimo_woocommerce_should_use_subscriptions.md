---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Szűrő - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

Ez a filter lehetővé teszi a fejlesztők számára, hogy kötelezően használják a WooCommerce Subscriptions-t.

Alapértelmezés szerint az add-on ellenőrzi, hogy (1) jelen van-e a WooCommerce Subscriptions (teljes plugin vagy beépített core), majd (2) ellenőrzi az összeállítási beállítást, ami lehetővé teszi a WooCommerce Subscriptions használatát.

## Paraméterek

| Neve | Típus | Leírás |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Ha jelenleg szükség van a Woo Subs használatára. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | A jelenlegi objektum. |

### Forrás

Definíciója található a [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) fájlban, 361-sorban.

## Visszaadja
Ha `true`, akkor használja a WooCommerce Subs-t; ha `false`, akkor nem.
