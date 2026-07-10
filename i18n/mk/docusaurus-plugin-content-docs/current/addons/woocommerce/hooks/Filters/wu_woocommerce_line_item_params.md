---
id: wu_woocommerce_line_item_params
title: Филтер - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

Филтрирајте ги параметрите што се користат за создавање на ставките во WooCommerce Cart, пред да го пренасочите клиентот кон WooCommerce наплатата.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $line_item_params | `array` | Параметрите на ставката во кошничката. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Инстанцата на ставката на Ultimate Multisite. |
| $wc_product | `\WC_Product` | WooCommerce производот. |

### Од {#since}

- 2.0.0
### Извор {#source}

Дефинирано во [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) на линија 662


## Враќа {#returns}
Изменетите параметри на ставката.
