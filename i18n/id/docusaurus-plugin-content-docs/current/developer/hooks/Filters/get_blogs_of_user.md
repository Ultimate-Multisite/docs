---
id: get_blogs_of_user
title: Filter - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

Mereplikasi Filter WP aslinya di sini, untuk memastikan fungsinya.

Menyaring daftar situs tempat pengguna tersebut berada.

## Parameter

| Name | Type | Deskripsi |
|------|------|-------------|
| $sites | `object[]` | Sebuah array objek situs yang dimiliki oleh pengguna. |
| $user_id | `int` | ID Pengguna. |
| $all | `bool` | Apakah array situs yang dikembalikan harus berisi semua situs, termasuk yang ditandai 'deleted', 'archived', atau 'spam'. Defaultnya adalah false. |

### Sejak

- 2.0.11
### Sumber

Didefinisikan di [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) pada baris 851
