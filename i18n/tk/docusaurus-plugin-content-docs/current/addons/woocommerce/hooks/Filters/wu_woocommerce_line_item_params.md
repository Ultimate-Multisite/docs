---
id: wu_woocommerce_line_item_params
title: Filtr - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

Müşderini WooCommerce töleg sahypasyna ugrukdyrmazdan öň, WooCommerce Cart-daky setir elementlerini döretmek üçin ulanylýan parametrleri süzgüçden geçiriň.

## Parametrler {#parameters}

| Ady | Görnüşi | Beýany |
|------|------|-------------|
| $line_item_params | `array` | Sebediň setir elementi parametrleri. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite setir elementi nusgasy. |
| $wc_product | `\WC_Product` | WooCommerce önümi. |

### Şondan bäri {#since}

- 2.0.0
### Çeşme {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) içinde 662-nji setirde kesgitlenen


## Gaýtarýar {#returns}
Üýtgedilen setir elementi parametrleri.
