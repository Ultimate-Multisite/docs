---
id: wu_woocommerce_line_item_params
title: Филтър - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

Филтрирате параметрите, използвани за създаване на артикулите в количката на WooCommerce, преди пренасочването на клиента към чекаута на WooCommerce.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | Параметрите на артикула в количката. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Инстанцията на артикула в количката на Ultimate Multisite. |
| $wc_product | `\WC_Product` | Продуктът на WooCommerce. |

### Since {#since}

- 2.0.0
### Source {#source}

Дефиниран в [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) на линия 662


## Returns {#returns}
Модифицираните параметри на артикула в количката.
