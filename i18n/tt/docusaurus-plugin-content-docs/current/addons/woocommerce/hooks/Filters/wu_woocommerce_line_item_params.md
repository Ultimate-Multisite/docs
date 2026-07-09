---
id: wu_woocommerce_line_item_params
title: Сөзгеч - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Фильтр: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

Клиентны WooCommerce checkout битенә юнәлткәнче, WooCommerce Cart-та юл элементларын булдыру өчен кулланылган параметрларны фильтрлый.

## Параметрлар {#parameters}

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $line_item_params | `array` | Кәрзин юл элементы параметрлары. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite юл элементы нөсхәсе. |
| $wc_product | `\WC_Product` | WooCommerce продукт. |

### Версиядән {#since}

- 2.0.0
### Чыганак {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) эчендә 662 нче юлда билгеләнгән


## Кайтара {#returns}
Үзгәртелгән юл элементы параметрлары.
