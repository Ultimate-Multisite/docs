---
id: wu_woocommerce_line_item_params
title: Филтер - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Филтер: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

Филтрира параметре који се користе за креирање ставки реда у WooCommerce корпи, пре преусмеравања клијента на WooCommerce checkout.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $line_item_params | `array` | Параметри ставке реда корпе. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Инстанца ставке реда Ultimate Multisite. |
| $wc_product | `\WC_Product` | WooCommerce производ. |

### Од верзије {#since}

- 2.0.0
### Извор {#source}

Дефинисано у [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) на линији 662


## Враћа {#returns}
Измењене параметре ставке реда.
