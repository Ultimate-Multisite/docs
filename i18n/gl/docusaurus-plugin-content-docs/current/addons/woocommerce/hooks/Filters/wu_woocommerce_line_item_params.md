---
id: wu_woocommerce_line_item_params
title: Filtro - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filtro: wu_woocommerce_line_item_params

Filtra os parámetros usados para crear os elementos de liña no carriño de WooCommerce, antes de redirixir o cliente ao checkout de WooCommerce.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $line_item_params | `array` | Os parámetros do elemento de liña do carriño. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | A instancia do elemento de liña de Ultimate Multisite. |
| $wc_product | `\WC_Product` | O produto de WooCommerce. |

### Desde {#since}

- 2.0.0
### Orixe {#source}

Definido en [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) na liña 662


## Devolve {#returns}
Os parámetros modificados do elemento de liña.
