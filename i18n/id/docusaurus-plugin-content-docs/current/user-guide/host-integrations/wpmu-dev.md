---
title: Integrasi WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integrasi WPMU DEV

## Gambaran Umum
WPMU DEV adalah platform WordPress lengkap yang menyediakan hosting, plugin, dan layanan untuk situs WordPress. Integrasi ini memungkinkan sinkronisasi domain otomatis dan pengelolaan sertifikat SSL antara Ultimate Multisite dan hosting WPMU DEV.

## Fitur
- Sinkronisasi domain otomatis
- Pengelolaan sertifikat SSL
- Peningkatan jumlah percobaan verifikasi sertifikat SSL

## Persyaratan
Integrasi ini secara otomatis mendeteksi apakah Anda menggunakan hosting WPMU DEV dan menggunakan API bawaan. Tidak diperlukan konfigurasi tambahan jika Anda menggunakan hosting WPMU DEV.

Integrasi ini memeriksa keberadaan konstanta `WPMUDEV_HOSTING_SITE_ID`, yang secara otomatis didefinisikan saat menggunakan hosting WPMU DEV.

## Panduan Pengaturan

### 1. Verifikasi Hosting WPMU DEV

Jika Anda menggunakan hosting WPMU DEV, konstanta yang diperlukan seharusnya sudah terdefinisi. Pastikan bahwa:

1. Konstanta `WPMUDEV_HOSTING_SITE_ID` sudah terdefinisi di environment Anda
2. Anda memiliki keanggotaan WPMU DEV aktif dengan akses API

### 2. Aktifkan Integrasi

1. Di admin WordPress Anda, buka Ultimate Multisite > Settings
2. Buka tab "Domain Mapping"
3. Gulir ke bawah ke bagian "Host Integrations"
4. Aktifkan integrasi WPMU DEV
5. Klik "Save Changes"

## Cara Kerja

### Sinkronisasi Domain

Ketika sebuah domain dipetakan di Ultimate Multisite:

1. Integrasi ini menggunakan API WPMU DEV untuk menambahkan domain ke akun hosting Anda
2. Integrasi juga menambahkan versi www dari domain secara otomatis
3. WPMU DEV menangani konfigurasi domain dan penerbitan sertifikat SSL

### Pengelolaan Sertifikat SSL

Integrasi ini dikonfigurasi untuk meningkatkan jumlah percobaan verifikasi sertifikat SSL untuk hosting WPMU DEV, karena mungkin membutuhkan waktu untuk sertifikat SSL diterbitkan dan dipasang. Secara default, integrasi akan mencoba hingga 10 kali untuk verifikasi sertifikat SSL, dibandingkan dengan standar 5 kali percobaan.

## Catatan Penting

### Penghapusan Domain

Saat ini, API WPMU DEV tidak menyediakan cara untuk menghapus domain. Ketika pemetaan domain dihapus di Ultimate Multisite, domain akan tetap ada di akun hosting WPMU DEV Anda. Anda perlu menghapusnya secara manual dari dashboard hosting WPMU DEV jika diperlukan.

### Autentikasi API

Integrasi ini menggunakan API key WPMU DEV yang tersimpan di database WordPress Anda sebagai opsi `wpmudev_apikey`. Ini secara otomatis diatur ketika Anda menghubungkan situs Anda ke WPMU DEV.

## Pemecahan Masalah

### Masalah Koneksi API
- Pastikan situs Anda terhubung dengan benar ke WPMU DEV
- Periksa apakah opsi `wpmudev_apikey` sudah diatur di database WordPress Anda
- Pastikan keanggotaan WPMU DEV Anda masih aktif

### Masalah Sertifikat SSL
- WPMU DEV mungkin membutuhkan waktu untuk menerbitkan sertifikat SSL (biasanya 5-15 menit)
- Integrasi ini dikonfigurasi untuk memeriksa hingga 10 kali untuk sertifikat SSL
- Jika sertifikat SSL masih tidak diterbitkan setelah beberapa kali percobaan, hubungi dukungan WPMU DEV

### Domain Tidak Ditambahkan
- Periksa log Ultimate Multisite untuk melihat pesan error
- Pastikan domain belum ditambahkan ke WPMU DEV sebelumnya
- Pastikan paket hosting WPMU DEV Anda mendukung jumlah domain yang ingin Anda tambahkan
