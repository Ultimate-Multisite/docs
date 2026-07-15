---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Parzûn - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Parzûn: wp_ultimo_woocommerce_should_use_subscriptions

Destûrê bide pêşdeberan ku bikaranîna WooCommerce Subscriptions bi zorê çalak bikin.

Bi awayê standard, add-on kontrol dike ka (1) WooCommerce Subscriptions heye (an plugin-a tevahî an navika pêvekirî), paşê (2) mîhengê ku bikaranîna WooCommerce Subscriptions çalak dike kontrol dike.

## Parametre {#parameters}

| Nav | Cure | Danasîn |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Ger niha pêwîst be ku em Woo Subs bikar bînin. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Objekta heyî. |

### Çavkanî {#source}

Di [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) de, li rêza 361 hatiye danasîn


## Vegerandin {#returns}
true ji bo bikaranîna WooCommerce Subs, false ji bo ku neyê bikaranîn.
