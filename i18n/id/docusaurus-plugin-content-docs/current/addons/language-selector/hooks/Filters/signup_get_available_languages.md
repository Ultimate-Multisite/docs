---
id: signup_get_available_languages
title: Filter - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages

Menyaring daftar bahasa yang tersedia untuk pendaftaran situs di *front-end*.

Meneruskan array kosong ke *hook* ini akan menonaktifkan tampilan pengaturan di formulir pendaftaran, dan bahasa default akan digunakan saat membuat situs. Bahasa yang belum terinstal akan dihapus.

## Parameter

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $available_languages | `array` | Bahasa yang tersedia. |

### Sejak

- 4.4.0
### Sumber

Didefinisikan di [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) pada baris 117
