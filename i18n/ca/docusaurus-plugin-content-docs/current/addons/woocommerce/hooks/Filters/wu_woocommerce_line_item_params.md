---
id: wu_woocommerce_line_item_params
title: Filtre - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

Filtra els paràmetres utilitzats per crear les línies d'article (line items) al carret de WooCommerce, abans de redirigir el client a la pagina de checkout de WooCommerce.

## Paràmetres

| Nom | Tipus | Descripció |
|------|------|-------------|
| $line_item_params | `array` | Els paràmetres de les línies d'article del carret. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | L'instància de la línia d'article (line item) d'Ultimate Multisite. |
| $wc_product | `\WC_Product` | El producte de WooCommerce. |

### Desvinguts des de

- 2.0.0
### Font

Definit en [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) a la línia 662


## Retorn

Els paràmetres de les línies d'article modificats.
