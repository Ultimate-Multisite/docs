---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filtre - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

Permettre aux développeurs de forcer l'utilisation des Abonnements WooCommerce.

Par défaut, l'extension vérifie si (1) WooCommerce Subscriptions est présent (soit le plugin complet, soit le noyau inclus), puis (2) vérifie le paramètre activant l'utilisation des Abonnements WooCommerce.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | Si nous avons actuellement besoin d'utiliser les Abonnements Woo |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | L'objet actuel |

### Source

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) at line 361

## Returns
true pour utiliser les Abonnements WooCommerce, false pour ne pas les utiliser.
