---
id: wu_get_checkout_variables
title: Filter - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables {#filter-wugetcheckoutvariables}

Plugin geliştiricilerinin bir ödeme sayfasının ön ayarlarını filtrelemesine izin verir.

Dikkatli olun, eksik anahtarlar ön yüzde ödeme işlemini tamamen bozabilir.

## Parametreler {#parameters}

| Ad | Tip | Açıklama |
|------|------|-------------|
| $variables | `array` | Yerelleştirilmiş değişkenler. |
| $checkout | `\Checkout` | Ödeme sınıfı. |

### Kullanılmaya Başladığı {#since}

- 2.0.0
### Kaynak {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) dosyasında 1970. satırda tanımlanmıştır.


## Dönüş Değeri {#returns}
Yeni değişkenler dizisi.
