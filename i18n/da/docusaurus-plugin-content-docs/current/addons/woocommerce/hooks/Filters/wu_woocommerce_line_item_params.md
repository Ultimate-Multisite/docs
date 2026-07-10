---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

Filtrer de parametre, der bruges til at oprette line items i WooCommerce Cart, før kunden omdirigeres til WooCommerce checkout.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $line_item_params | `array` | Parametrene for kurvens line item. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite line item-instansen. |
| $wc_product | `\WC_Product` | WooCommerce-produktet. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Defineret i [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) på linje 662


## Returnerer {#returns}
De ændrede line item-parametre.
