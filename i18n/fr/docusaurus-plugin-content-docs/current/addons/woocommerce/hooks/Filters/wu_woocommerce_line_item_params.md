---
id: wu_woocommerce_line_item_params
title: Filtre - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

Filtrer les paramètres utilisés pour créer les éléments de ligne dans le panier WooCommerce, avant de rediriger le client vers la caisse WooCommerce.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | Les paramètres d'élément de ligne du panier. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | L'instance d'élément de ligne Ultimate Multisite. |
| $wc_product | `\WC_Product` | Le produit WooCommerce. |

### Depuis

- 2.0.0

### Source

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) at line 662

## Renvoie
Les paramètres d'élément de ligne modifiés.
