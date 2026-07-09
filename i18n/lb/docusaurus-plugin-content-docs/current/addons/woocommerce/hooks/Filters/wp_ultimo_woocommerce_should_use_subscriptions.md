---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Erlaabt Entwéckler, d'Benotzung vu WooCommerce Subscriptions ze forcéieren.

Standardméisseg iwwerpréift den Add-on ob (1) WooCommerce Subscriptions disponibel ass (entweder als komplette Plugin oder gebündelte Kär), dann (2) iwwerpréift en d'Astellung, déi d'Benotzung vu WooCommerce Subscriptions aktivéiert.

## Parameteren {#parameters}

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Ob mir aktuell Woo Subs benotze mussen. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Den aktuellen Objet. |

### Quell {#source}

Definéiert an [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) an der Zeil 361


## Retouren {#returns}
true fir WooCommerce Subs ze benotzen, false fir et net ze benotzen.
