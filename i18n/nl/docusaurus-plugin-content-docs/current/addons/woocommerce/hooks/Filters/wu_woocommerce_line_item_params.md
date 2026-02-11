---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

Filter de parameters die worden gebruikt om de lijnitems op de WooCommerce winkelwagen te maken, voordat de klant wordt doorgestuurd naar de WooCommerce afrekenpagina.

## Parameters

| Naam | Type | Beschrijving |
|------|------|-------------|
| $line_item_params | `array` | De parameters voor de winkelwagenlijnitems. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | De Ultimate Multisite lijnitem instantie. |
| $wc_product | `\WC_Product` | Het WooCommerce product. |

### Sinds

- 2.0.0

### Bron

Gedefinieerd in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) op regel 662

## Retour

De aangepaste lijnitem parameters.
