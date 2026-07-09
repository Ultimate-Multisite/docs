---
id: wu_woocommerce_line_item_params
title: Filtar - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

Filtrirajte parametre koji se koriste za stvaranje stavki retka u WooCommerce košarici, prije preusmjeravanja klijenta na WooCommerce checkout.

## Parametri

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $line_item_params | `array` | Parametri stavke retka košarice. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Instanca stavke retka Ultimate Multisite. |
| $wc_product | `\WC_Product` | WooCommerce proizvod. |

### Od verzije

- 2.0.0
### Izvor

Definirano u [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) u retku 662


## Vraća
Izmijenjene parametre stavke retka.
