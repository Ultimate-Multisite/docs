---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filtru - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Permite dezvoltatorilor să forțeze utilizarea WooCommerce Subscriptions.

În mod implicit, add-on-ul verifică dacă (1) WooCommerce Subscriptions este prezent (fie ca plugin complet, fie ca core integrat), apoi (2) verifică setarea care permite utilizarea WooCommerce Subscriptions.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Dacă trebuie să folosim în prezent Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | Obiectul curent. |

### Sursă {#source}

Definit în [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) la linia 361


## Returnează {#returns}
`true` pentru a folosi WooCommerce Subs, `false` pentru a nu folosi.
