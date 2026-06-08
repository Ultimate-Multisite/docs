---
id: wu_maybe_create_customer
title: Tindakan - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Tindakan: wu_maybe_create_customer

Membenarkan pembangun plugin melakukan tindakan tambahan apabila pelanggan ditambah.

Di sinilah kita menambah *hook* untuk menambah pengguna pelanggan ke tapak utama juga, sebagai contoh.

## Parameter

| Nama | Jenis | Penerangan |
|------|------|-------------|
| $customer | `\Customer` | Pelanggan yang mungkin telah dicipta. |
| $checkout | `\Checkout` | Kelas *checkout* semasa. |

### Sejak

- 2.0.0
### Sumber

Didefinisikan dalam [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) pada baris 1156
