---
id: get_site_url_for_previewer
title: Filter - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer

Memungkinkan pengembang plugin untuk memfilter URL yang digunakan di previewer.

## Parameter

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $domain | `string` | Domain default yang sedang digunakan saat ini, berguna untuk manipulasi. |
| $domain_options | `array` | Daftar semua opsi domain yang dimasukkan di Pengaturan Ultimate Multisite -> Pengaturan Jaringan -> Opsi Domain. |

### Sejak

- 1.7.2
### Sumber

Didefinisikan di [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) pada baris 812

## Mengembalikan
Domain baru yang akan digunakan.
