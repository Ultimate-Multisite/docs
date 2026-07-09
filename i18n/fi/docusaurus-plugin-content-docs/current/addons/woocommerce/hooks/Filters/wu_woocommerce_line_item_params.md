---
id: wu_woocommerce_line_item_params
title: Suodatin - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Suodatin: wu_woocommerce_line_item_params

Suodata parametreja, joita käytetään rivikohtien luomiseen WooCommerce-ostoskorissa ennen asiakkaan uudelleenohjaamista WooCommerce checkoutiin.

## Parametrit

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $line_item_params | `array` | Ostoskorin rivikohteen parametrit. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite -rivikohteen ilmentymä. |
| $wc_product | `\WC_Product` | WooCommerce-tuote. |

### Alkaen

- 2.0.0
### Lähde

Määritelty tiedostossa [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) rivillä 662


## Palauttaa
Muokatut rivikohteen parametrit.
