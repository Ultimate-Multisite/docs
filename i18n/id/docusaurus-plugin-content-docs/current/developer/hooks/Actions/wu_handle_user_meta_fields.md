---
id: wu_handle_user_meta_fields
title: Aksi - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

Memungkinkan pengembang plugin untuk menyimpan data meta pengguna dengan berbagai cara jika mereka membutuhkannya.

## Parameter

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $meta_repository | `array` | Daftar bidang meta, disusun dalam format kunci => nilai. |
| $user | `\WP_User` | Objek pengguna WordPress. |
| $customer | `\Customer` | Objek pelanggan Ultimate Multisite. |
| $checkout | `\Checkout` | Kelas checkout. |

### Sejak

- 2.0.4
### Sumber

Didefinisikan di [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) pada baris 1244
