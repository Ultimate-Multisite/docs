---
id: wu_woocommerce_line_item_params
title: Filtru - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

Filtrează parametrii folosiți pentru a crea articolele de pe coșul WooCommerce, înainte de a redirecționa clientul către checkout-ul WooCommerce.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | Parametrii articolelor din coș. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Instanța articolului Ultimate Multisite. |
| $wc_product | `\WC_Product` | Produsul WooCommerce. |

### Since {#since}

- 2.0.0
### Source {#source}

Definit în [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) la linia 662


## Returns {#returns}
Parametrii articolelor modificați.
