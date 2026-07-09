---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filtre - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions {#filter-wpultimowoocommerceshouldusesubscriptions}

Permet als desenvolupadors forçar l'ús de WooCommerce Subscriptions.

Per defecte, l'addon comprueba si (1) WooCommerce Subscriptions està present (ja sigui com a plugin complet o integrat al nucli), i després (2) comprova la configuració que permet utilitzar WooCommerce Subscriptions.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Si actualment hem de utilitzar Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | L'objecte actual. |

### Font {#source}

Definit en [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) a la línia 361

## Devoluc {#returns}
`true` per utilitzar WooCommerce Subs, `false` per no utilitzar-lo.
