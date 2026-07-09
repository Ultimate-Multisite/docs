---
id: wu_woocommerce_line_item_params
title: Сүзгі - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Сүзгі: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

Клиентті WooCommerce төлем рәсімдеуіне қайта бағыттамас бұрын, WooCommerce себетінде жол элементтерін жасау үшін қолданылатын параметрлерді сүзгіден өткізеді.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $line_item_params | `array` | Себет жол элементінің параметрлері. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite жол элементінің данасы. |
| $wc_product | `\WC_Product` | WooCommerce өнімі. |

### Бастап {#since}

- 2.0.0
### Дереккөз {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) ішінде 662-жолда анықталған


## Қайтарады {#returns}
Өзгертілген жол элементі параметрлері.
