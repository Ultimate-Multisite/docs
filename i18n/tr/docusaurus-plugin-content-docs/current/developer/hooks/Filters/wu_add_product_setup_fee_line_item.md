---
id: wu_add_product_setup_fee_line_item
title: Filter - wu_add_product_setup_fee_line_item
sidebar_label: wu_add_product_setup_fee_line_item
_i18n_hash: 7175266054e611752e49e762b103e858
---
# Filter: wu_add_product_setup_fee_line_item

Geliştiricilerin kurulum ücreti satır öğesini değiştirmesine olanak tanır.

## Parametreler {#parameters}

| Adı | Tip | Açıklama |
|------|------|-------------|
| $setup_fee_line_item | `array` | Kurulum ücreti satır öğesi parametreleri. |
| $product | `\WP_Ultimo\Models\Product` | Kurulum ücretiyle ilgili ürün. |
| $cart | `\WP_Ultimo\Checkout\Cart` | Sepet nesnesi. |

### Versiyon {#since}

- 2.1
### Kaynak {#source}

1790. satırda [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1790) dosyasında tanımlanmıştır.


## Dönüş Değeri {#returns}
