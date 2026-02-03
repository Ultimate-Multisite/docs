---
id: wu_woocommerce_line_item_params
title: Filtro - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filtro: wu_woocommerce_line_item_params

Filtra los parámetros utilizados para crear los artículos de línea en el carrito de WooCommerce, antes de redirigir al cliente al checkout de WooCommerce.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $line_item_params | `array` | Los parámetros del artículo de línea del carrito. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | La instancia del artículo de línea de Ultimate Multisite. |
| $wc_product | `\WC_Product` | El producto de WooCommerce. |

### Desde

- 2.0.0

### Fuente

Definido en [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) en la línea 662

## Devuelve

Los parámetros del artículo de línea modificados.
