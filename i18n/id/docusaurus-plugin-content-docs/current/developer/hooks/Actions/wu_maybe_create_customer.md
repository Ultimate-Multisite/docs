---
id: wu_maybe_create_customer
title: Aksi - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer

Memungkinkan pengembang plugin untuk melakukan hal tambahan ketika pelanggan ditambahkan.

Di sinilah kita menambahkan *hook* untuk menambahkan pelanggan ke pengguna utama situs juga, misalnya.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $customer | `\Customer` | Pelanggan yang mungkin telah dibuat. |
| $checkout | `\Checkout` | Kelas *checkout* saat ini. |

### Since

- 2.0.0
### Source

Didefinisikan di [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) pada baris 1156
