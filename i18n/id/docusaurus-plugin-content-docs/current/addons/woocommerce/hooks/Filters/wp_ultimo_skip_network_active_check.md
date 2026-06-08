---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

Memungkinkan pengembang untuk melewati pemeriksaan aktivasi jaringan.

Ini berguna saat menggunakan setup kustom berbasis composer dan setup lainnya, seperti Bedrock, misalnya, di mana menggunakan plugin sebagai mu-plugins adalah hal yang umum.

## Parameter

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Jika kita harus melewati pemeriksaan atau tidak, nilai defaultnya adalah false. |

### Sejak

- 2.0.0
### Sumber

Didefinisikan di [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) pada baris 272


## Mengembalikan
`true` jika Anda ingin melewati pemeriksaan, dan `false` jika tidak.
