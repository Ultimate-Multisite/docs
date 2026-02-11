---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

Ermöglicht Entwicklern, die Verwendung von WooCommerce Subscriptions zu erzwingen.

Standardmäßig prüft das Add‑On, ob (1) WooCommerce Subscriptions vorhanden ist (entweder als vollständiges Plugin oder als gebündeltes Core), und dann (2) die Einstellung, die die Nutzung von WooCommerce Subscriptions aktiviert.

## Parameter

| Name | Typ | Beschreibung |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Wenn wir Woo Subs derzeit verwenden müssen. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Das aktuelle Objekt. |

### Quelle

Definiert in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) in Zeile 361

## Rückgabe
true, um WooCommerce Subs zu verwenden, false, um es nicht zu verwenden.
