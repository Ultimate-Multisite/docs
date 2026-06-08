---
id: wu_apc_process_page_content
title: Filter - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content

Memungkinkan pengembang untuk memanipulasi konten akhir

## Parameter

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $content | `string` | Konten setelah penggantian. |
| $content_before_processing | `string` | Konten sebelum penggantian. |
| $to_replace | `array` | Array yang berisi placeholder yang akan diganti. |
| $placeholder_count | `int` | Jumlah placeholder yang ditemukan. |

### Sejak

- 1.4.0
### Sumber

Didefinisikan di [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) pada baris 46

## Mengembalikan
Konten setelah dimodifikasi.
