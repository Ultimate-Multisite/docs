---
title: Catatan Perubahan Site Exporter
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Catatan Perubahan Ekspor Situs

Version: 1.0.6 - Released on 2026-05-11
* Baru: Ekspor situs sekarang menyertakan `index.php` yang dapat berjalan sendiri, sehingga ZIP dapat diinstal di host baru tanpa perlu instalasi plugin terpisah
* Baru: Ekspor jaringan memungkinkan administrator mengekspor semua subsitus dalam satu arsip dari halaman admin Site Export

Version: 1.0.5 - Released on 2026-05-05
* Perbaikan: Menambahkan `__callStatic` ke *polyfill stub* WP_CLI untuk menangani metode yang belum di-*mock* seperti `get_config`, mencegah kegagalan *bootstrap* pengujian

Version: 1.0.4 - Released on 2025-11-25

* Perbaikan kompatibilitas dengan Ultimate Multisite 2.4.

Version: 1.0.2 - Released on 2025-09-28

* Mengganti awalan (prefix) menjadi ultimate-multisite; memperbarui domain teks; peningkatan versi.

### Version 1.0.1 - Released on 2023-08-09 {#version-101---released-on-2023-08-09}

* Peningkatan: Sekarang memastikan bahwa jalur file yang benar dari file *importer* didapatkan.
* Perbaikan: Menonaktifkan *object cache* untuk mencegah kesalahan selama impor.
* Perbaikan: Memperbaiki masalah tautan unduhan plugin *importer* yang tidak berfungsi.

### Version 1.0.0 - Released on 2022-12-23 {#version-100---released-on-2022-12-23}

* Perbaikan: Popup formulir ekspor tidak memuat;
* Perbaikan: File Javascript tidak memuat di halaman ekspor;
* Internal: Proses *build* baru;

### Version 1.0.0-beta.4 - Released on 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* Internal: Menambahkan generator *hooks* dan *filters*;
* Internal: Menambahkan *stub* WP Ultimo untuk meningkatkan kualitas hidup pengembang (*developer quality of life*);
