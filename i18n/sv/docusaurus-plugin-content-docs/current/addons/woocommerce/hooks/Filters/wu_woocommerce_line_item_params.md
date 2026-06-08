---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

Filtrerar parametrarna som används för att skapa varuposterna i WooCommerce-varukorgen, innan kunden omdirigeras till kassan.

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $line_item_params | `array` | Parametrarna för varuposten i varukorgen. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Instansen för varuposten i Ultimate Multisite. |
| $wc_product | `\WC_Product` | WooCommerce-produkten. |

### Sedan

- 2.0.0
### Källa

Definieras i [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) på rad 662


## Returnerar
De modifierade parametrarna för varuposten.
