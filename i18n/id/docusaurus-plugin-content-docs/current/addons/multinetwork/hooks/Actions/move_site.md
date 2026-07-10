---
id: move_site
title: Aksi - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action: move_site {#action-movesite}

Dipicu setelah sebuah situs berhasil dipindahkan ke jaringan (network) yang baru.

## Parameter {#parameters}

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $site_id | `int` | ID situs yang telah dipindahkan. |
| $old_network_id | `int` | ID jaringan asli (lama) untuk situs tersebut. |
| $new_network_id | `int` | ID jaringan tujuan tempat situs dipindahkan. |

### Sejak {#since}

- 1.3.0
### Sumber {#source}

Didefinisikan di [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) pada baris 1587
