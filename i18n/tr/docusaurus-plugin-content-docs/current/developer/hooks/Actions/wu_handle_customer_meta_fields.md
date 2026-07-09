---
id: wu_handle_customer_meta_fields
title: Action - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields {#action-wuhandlecustomermetafields}

Eklenti geliştiricilerinin ihtiyaç duyduklarında meta verileri farklı şekillerde kaydetmesine olanak tanır.

## Parametreler {#parameters}

| Adı | Tür | Açıklama |
|------|------|-------------|
| $meta_repository | `array` | Meta alanlarının listesi, anahtar => değer yapısında. |
| $customer | `\Customer` | Ultimate Multisite müşteri nesnesi. |
| $checkout | `\Checkout` | Checkout sınıfı. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) dosyasının 1211. satırında tanımlanmıştır
