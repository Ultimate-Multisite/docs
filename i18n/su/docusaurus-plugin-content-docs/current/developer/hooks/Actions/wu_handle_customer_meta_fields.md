---
id: wu_handle_customer_meta_fields
title: Tindakan - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

Ngidinan pamekar plugin pikeun nyimpen data meta ku cara anu béda lamun diperlukeun.

## Parameter {#parameters}

| Ngaran | Jenis | Pedaran |
|------|------|-------------|
| $meta_repository | `array` | Daptar widang meta, disusun key =&gt; value. |
| $customer | `\Customer` | Objek palanggan Ultimate Multisite. |
| $checkout | `\Checkout` | Kelas pamayaran. |

### Ti saprak {#since}

- 2.0.0
### Sumber {#source}

Ditetepkeun dina [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) dina garis 1211
