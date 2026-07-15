---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

Müşteriyi WooCommerce ödeme sayfasına yönlendirmeden önce, WooCommerce Sepet'indeki satır öğelerini oluşturmak için kullanılan parametreleri filtreler.

## Parametreler {#parameters}

| Ad | Tip | Açıklama |
|------|------|-------------|
| $line_item_params | `array` | Sepet satır öğesi parametreleri. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite satır öğesi örneği. |
| $wc_product | `\WC_Product` | WooCommerce ürünü. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) dosyasının 662. satırında tanımlanmıştır.

## Dönüş Değeri {#returns}
Değiştirilmiş satır öğesi parametreleri.
