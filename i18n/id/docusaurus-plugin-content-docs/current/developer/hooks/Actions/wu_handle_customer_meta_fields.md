---
id: wu_handle_customer_meta_fields
title: Aksi - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

Memungkinkan pengembang plugin untuk menyimpan data meta dengan cara yang berbeda jika mereka membutuhkannya.

## Parameter {#parameters}

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $meta_repository | `array` | Daftar bidang meta, disusun dalam format kunci => nilai. |
| $customer | `\Customer` | Objek pelanggan Ultimate Multisite. |
| $checkout | `\Checkout` | Kelas checkout. |

### Sejak {#since}

- 2.0.0
### Sumber {#source}

Didefinisikan di [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) pada baris 1211
