---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

Låter utvecklare tvinga fram användningen av WooCommerce Subscriptions.

Standardmässigt kontrollerar add-onet om (1) WooCommerce Subscriptions finns tillgängligt (antingen som ett komplett plugin eller som en inbäddad kärnfunktion), och sedan (2) kontrollerar det inställningen som aktiverar användningen av WooCommerce Subscriptions.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Om vi just nu behöver använda Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Det aktuella objektet. |

### Källa {#source}

Definieras i [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) på rad 361

## Returnerar {#returns}
`true` för att använda WooCommerce Subs, `false` för att inte använda det.
