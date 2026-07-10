---
id: wu_woocommerce_line_item_params
title: Шүүлтүүр - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Шүүлтүүр: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

Үйлчлүүлэгчийг WooCommerce checkout руу чиглүүлэхээс өмнө WooCommerce Cart дээрх мөрийн зүйлсийг үүсгэхэд ашиглагдах параметрүүдийг шүүнэ.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $line_item_params | `array` | Сагсны мөрийн зүйлийн параметрүүд. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite мөрийн зүйлийн instance. |
| $wc_product | `\WC_Product` | WooCommerce бүтээгдэхүүн. |

### Хойш {#since}

- 2.0.0
### Эх сурвалж {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662)-д 662-р мөрөнд тодорхойлогдсон


## Буцаах утга {#returns}
Өөрчлөгдсөн мөрийн зүйлийн параметрүүд.
