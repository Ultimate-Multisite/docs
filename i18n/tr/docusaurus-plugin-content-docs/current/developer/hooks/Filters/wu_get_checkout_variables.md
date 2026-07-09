---
id: wu_get_checkout_variables
title: Filter - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filtre: wu_get_checkout_variables {#filter-wugetcheckoutvariables}

Eklenti geliştiricilerinin bir ödeme sayfasının ön ayarlarını filtrelemesine olanak tanır.

Dikkatli olun, eksik anahtarlar ödeme sayfasının ön yüzdeki çalışmasını tamamen bozabilir.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | Yerelleştirilmiş değişkenler. |
| $checkout | `\Checkout` | Ödeme sınıfı. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) dosyasında 1970. satırda tanımlanmıştır.


## Returns {#returns}
Yeni değişkenler dizisi.
