---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

Filtrerer parameterne som brukes til å opprette linjeelementene i WooCommerce-kurven, før kunden omdirigeres til WooCommerce-kassen.

## Parametere

| Name | Type | Beskrivelse |
|------|------|-------------|
| $line_item_params | `array` | Parameterne for kurvlinjeelementet. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite-instansen for linjeelementet. |
| $wc_product | `\WC_Product` | WooCommerce-produktet. |

### Siden

- 2.0.0
### Kilde

Definert i [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) på linje 662


## Returnerer
De modifiserte parameterne for linjeelementet.
