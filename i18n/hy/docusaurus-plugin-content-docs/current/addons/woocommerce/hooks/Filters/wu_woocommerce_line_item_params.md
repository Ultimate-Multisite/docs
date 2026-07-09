---
id: wu_woocommerce_line_item_params
title: Զտիչ - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

Զտում է WooCommerce Cart-ում տողային տարրերը ստեղծելու համար օգտագործվող պարամետրերը՝ նախքան հաճախորդին WooCommerce checkout վերահղելը։

## Պարամետրեր

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $line_item_params | `array` | Cart-ի տողային տարրի պարամետրերը։ |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite տողային տարրի նմուշը։ |
| $wc_product | `\WC_Product` | WooCommerce ապրանքը։ |

### Սկսած

- 2.0.0
### Աղբյուր

Սահմանված է [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662)-ում՝ 662-րդ տողում


## Վերադարձնում է
Փոփոխված տողային տարրի պարամետրերը։
