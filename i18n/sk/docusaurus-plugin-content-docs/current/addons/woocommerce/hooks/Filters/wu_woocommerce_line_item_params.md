---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

Filtruje parametre použité na vytvorenie riadkových položiek v košíku WooCommerce pred presmerovaním zákazníka na pokladňu WooCommerce.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $line_item_params | `array` | Parametre riadkovej položky košíka. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Inštancia riadkovej položky Ultimate Multisite. |
| $wc_product | `\WC_Product` | Produkt WooCommerce. |

### Od verzie {#since}

- 2.0.0
### Zdroj {#source}

Definované v [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) na riadku 662


## Vracia {#returns}
Upravené parametre riadkovej položky.
