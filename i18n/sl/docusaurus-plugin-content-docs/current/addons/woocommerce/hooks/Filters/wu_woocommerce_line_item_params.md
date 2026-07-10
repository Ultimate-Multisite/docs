---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

Filtrirajte parametre, uporabljene za ustvarjanje vrstičnih postavk v WooCommerce košarici, preden stranko preusmerite na WooCommerce blagajno.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $line_item_params | `array` | Parametri vrstične postavke košarice. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Instanca vrstične postavke Ultimate Multisite. |
| $wc_product | `\WC_Product` | WooCommerce izdelek. |

### Od različice {#since}

- 2.0.0
### Vir {#source}

Določeno v [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) v vrstici 662


## Vrne {#returns}
Spremenjene parametre vrstične postavke.
