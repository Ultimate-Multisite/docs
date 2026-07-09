---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Tillad udviklere at gennemtvinge brugen af WooCommerce Subscriptions.

Som standard kontrollerer add-on'et, om (1) WooCommerce Subscriptions er til stede (enten fuldt plugin eller medfølgende kerne), og derefter (2) kontrolleres indstillingen, der aktiverer brug af WooCommerce Subscriptions.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Om vi aktuelt skal bruge Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Det aktuelle objekt. |

### Kilde {#source}

Defineret i [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) på linje 361


## Returnerer {#returns}
true for at bruge WooCommerce Subs, false for ikke at bruge det.
