---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filtro - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filtrilo: wp_ultimo_woocommerce_should_use_subscriptions

Permesas al programistoj devigi la uzon de WooCommerce Subscriptions.

Defaŭlte la aldonaĵo kontrolas ĉu (1) WooCommerce Subscriptions ĉeestas (aŭ plena plugin aŭ kunpakita kerno), poste (2) kontrolas la agordon kiu ebligas uzon de WooCommerce Subscriptions.

## Parametroj {#parameters}

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Ĉu ni nuntempe bezonas uzi Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | La nuna objekto. |

### Fonto {#source}

Difinita en [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) ĉe linio 361


## Redonas {#returns}
true por uzi WooCommerce Subs, false por ne uzi ĝin.
