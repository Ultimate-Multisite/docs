---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

WooCommerce sepetindeki ürün satırlarını oluşturmak için kullanılan parametreleri, müşteriyi WooCommerce ödeme sayfasına yönlendirmeden önce filtreler.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | Sepetindeki ürün satırı parametreleri. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite ürün satırı örneği. |
| $wc_product | `\WC_Product` | WooCommerce ürünü. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) dosyasında 662. satırda tanımlanmıştır.


## Returns {#returns}
Değiştirilmiş ürün satırı parametreleri.
