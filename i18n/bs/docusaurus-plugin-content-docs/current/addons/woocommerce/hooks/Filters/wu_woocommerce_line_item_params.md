---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

Filtrira parametre koje se koriste za kreiranje stavki u korpi (line items) na WooCommerce korpi, prije nego što se korisnik preusmjeri na WooCommerce checkout.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | Parametri stavke u korpi. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Instanca stavke u korpi Ultimate Multisite-a. |
| $wc_product | `\WC_Product` | WooCommerce proizvod. |

### Since {#since}

- 2.0.0
### Source {#source}

Definisano je u [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) na liniji 662


## Returns {#returns}
Modificirani parametri stavke u korpi.
