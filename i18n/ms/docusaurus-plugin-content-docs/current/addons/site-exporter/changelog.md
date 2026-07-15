---
title: Log Perubahan Site Exporter
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Log Perubahan Site Exporter

Versi: 1.0.6 - Dikeluarkan pada 2026-05-11
* Baru: Eksport tapak kini membungkus `index.php` yang boleh but semula sendiri, jadi ZIP ini boleh dipasang pada hos baharu tanpa perlu memasang plugin berasingan.
* Baru: Eksport Rangkaian membenarkan pentadbir mengeksport semua subsites dalam satu arkib dari halaman pentadbiran Site Export.

Versi: 1.0.5 - Dikeluarkan pada 2026-05-05
* Pembaikan: Menambah `__callStatic` ke dalam stub polyfill WP_CLI untuk mengendalikan kaedah yang tidak di-mock seperti `get_config`, mencegah kegagalan butut (bootstrap) ujian.

Versi: 1.0.4 - Dikeluarkan pada 2025-11-25

* Pembaikan keserasian dengan Ultimate Multisite 2.4.

Versi: 1.0.2 - Dikeluarkan pada 2025-09-28

* Menukar awalan (prefix) kepada `ultimate-multisite`; mengemas kini domain teks; menaikkan versi.

### Versi 1.0.1 - Dikeluarkan pada 2023-08-09 {#version-101---released-on-2023-08-09}

* Peningkatan: Kini memastikan laluan fail yang betul untuk fail import diperoleh.
* Pembaikan: Mematikan cache objek untuk mencegah ralat semasa import.
* Pembaikan: Memperbaiki isu pautan muat turun plugin import yang tidak berfungsi.

### Versi 1.0.0 - Dikeluarkan pada 2022-12-23 {#version-100---released-on-2022-12-23}

* Pembaikan: Popup borang eksport tidak dimuatkan;
* Pembaikan: Fail Javascript tidak dimuatkan pada halaman eksport;
* Dalaman: Proses binaan baharu;

### Versi 1.0.0-beta.4 - Dikeluarkan pada 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* Dalaman: Menambah penjana hooks dan filter;
* Dalaman: Menambah stub WP Ultimo untuk kualiti hidup pembangun;
