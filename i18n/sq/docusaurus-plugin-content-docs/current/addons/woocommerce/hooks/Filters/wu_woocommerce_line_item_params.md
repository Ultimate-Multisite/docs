---
id: wu_woocommerce_line_item_params
title: Filtër - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

Filtron parametrat e përdorur për të krijuar artikujt e rreshtit në Shportën WooCommerce, përpara se klienti të ridrejtohet te checkout-i WooCommerce.

## Parametrat

| Emri | Tipi | Përshkrimi |
|------|------|-------------|
| $line_item_params | `array` | Parametrat e artikullit të rreshtit të shportës. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Instanca e artikullit të rreshtit Ultimate Multisite. |
| $wc_product | `\WC_Product` | Produkti WooCommerce. |

### Që nga

- 2.0.0
### Burimi

Përcaktuar në [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) në rreshtin 662


## Kthen
Parametrat e modifikuar të artikullit të rreshtit.
