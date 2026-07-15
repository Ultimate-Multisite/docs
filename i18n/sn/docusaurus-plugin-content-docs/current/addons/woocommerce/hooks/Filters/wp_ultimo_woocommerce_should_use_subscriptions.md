---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Sefa - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Sefa: wp_ultimo_woocommerce_should_use_subscriptions

Bvumira vagadziri kumanikidza kushandiswa kweWooCommerce Subscriptions.

Pakutanga wedzero inoongorora kana (1) WooCommerce Subscriptions iripo (ingava plugin yakazara kana core yakasungirirwa), yozoti (2) iongorore marongero anogonesa kushandiswa kweWooCommerce Subscriptions.

## Maparamita {#parameters}

| Zita | Rudzi | Tsananguro |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Kana pari zvino tichida kushandisa Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Chinhu chiripo pari zvino. |

### Kwakabva {#source}

Yakatsanangurwa mu[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) pamutsetse 361


## Zvinodzoserwa {#returns}
true kushandisa WooCommerce Subs, false kusachishandisa.
