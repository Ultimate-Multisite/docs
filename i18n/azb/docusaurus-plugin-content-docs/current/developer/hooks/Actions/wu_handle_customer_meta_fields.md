---
id: wu_handle_customer_meta_fields
title: Action - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

Bu aksiyon, eklenti geliştiricilerinin ihtiyaç duydukları durumlarda meta verileri farklı şekillerde kaydetmelerine olanak tanır.

## Parametreler

| Ad | Tip | Açıklama |
|------|------|-------------|
| $meta_repository | `array` | Meta alanlarının listesi, anahtar => değer yapısında. |
| $customer | `\Customer` | Ultimate Multisite müşteri nesnesi. |
| $checkout | `\Checkout` | Ödeme (checkout) sınıfı. |

### Versiyon

- 2.0.0
### Kaynak

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) dosyasının 1211. satırında tanımlanmıştır.
