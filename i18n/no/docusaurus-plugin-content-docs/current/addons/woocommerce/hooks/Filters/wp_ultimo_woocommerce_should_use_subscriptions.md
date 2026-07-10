---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Lar utviklere tvinge bruken av WooCommerce Subscriptions.

Som standard sjekker add-onet om (1) WooCommerce Subscriptions er til stede (enten som et fullt plugin eller som en inkludert kjernefunksjon), og deretter (2) sjekker innstillingen som aktiverer bruken av WooCommerce Subscriptions.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Om vi for tiden må bruke Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Det nåværende objektet. |

### Kilde {#source}

Definert i [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) på linje 361


## Returnerer {#returns}
`true` for å bruke WooCommerce Subs, og `false` for å ikke bruke det.
