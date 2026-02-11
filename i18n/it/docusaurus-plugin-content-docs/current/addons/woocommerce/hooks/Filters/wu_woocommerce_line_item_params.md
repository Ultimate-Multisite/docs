---
id: wu_woocommerce_line_item_params
title: Filtro - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filtra: wu_woocommerce_line_item_params

Filtra i parametri utilizzati per creare gli articoli della riga nel carrello WooCommerce, prima di reindirizzare il cliente al checkout WooCommerce.

## Parametri

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $line_item_params | `array` | I parametri dell'articolo della riga del carrello. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | L'istanza dell'articolo della riga di Ultimate Multisite. |
| $wc_product | `\WC_Product` | Il prodotto WooCommerce. |

### Da

- 2.0.0

### Fonte

Definito in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) alla riga 662

## Restituisce
I parametri dell'articolo della riga modificati.
