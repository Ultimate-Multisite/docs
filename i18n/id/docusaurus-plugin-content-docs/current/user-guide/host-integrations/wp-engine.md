---
title: Integrasi WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integrasi WP Engine

## Gambaran Umum
WP Engine adalah platform hosting WordPress terkelola premium yang menyediakan performa optimal, keamanan, dan skalabilitas untuk situs WordPress. Integrasi ini memungkinkan sinkronisasi domain otomatis antara Ultimate Multisite dan WP Engine.

## Fitur
- Sinkronisasi domain otomatis
- Dukungan subdomain untuk instalasi multisite
- Integrasi mulus dengan sistem WP Engine yang sudah ada

## Persyaratan
Integrasi ini secara otomatis mendeteksi jika Anda menggunakan hosting WP Engine dan menggunakan API WP Engine bawaan. Tidak diperlukan konfigurasi tambahan jika plugin WP Engine sudah aktif dan dikonfigurasi dengan benar.

Namun, jika Anda perlu mengonfigurasi integrasi secara manual, Anda dapat mendefinisikan salah satu konstanta berikut di file `wp-config.php`:

```php
define('WPE_APIKEY', 'your_api_key'); // Metode yang disarankan
// OR
define('WPE_API', 'your_api_key'); // Metode alternatif
```

## Panduan Pengaturan

### 1. Verifikasi Plugin WP Engine

Jika Anda menggunakan hosting WP Engine, plugin WP Engine seharusnya sudah terinstal dan aktif. Pastikan bahwa:

1. Plugin WP Engine sudah aktif
2. File `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` ada

### 2. Aktifkan Integrasi

1. Di admin WordPress Anda, buka Ultimate Multisite > Settings
2. Navigasi ke tab "Domain Mapping"
3. Gulir ke bawah ke "Host Integrations"
4. Aktifkan integrasi WP Engine
5. Klik "Save Changes"

## Cara Kerjanya

### Sinkronisasi Domain

Ketika domain dipetakan di Ultimate Multisite:

1. Integrasi menggunakan API WP Engine untuk menambahkan domain ke instalasi WP Engine Anda
2. WP Engine menangani konfigurasi domain dan penerbitan sertifikat SSL
3. Ketika pemetaan domain dihapus, integrasi akan menghapus domain dari WP Engine

### Dukungan Subdomain

Untuk instalasi multisite subdomain:

1. Integrasi menambahkan setiap subdomain ke WP Engine ketika situs baru dibuat
2. WP Engine menangani konfigurasi subdomain
3. Ketika situs dihapus, integrasi akan menghapus subdomain dari WP Engine

## Catatan Penting

### Domain Wildcard

Untuk instalasi multisite subdomain, disarankan untuk menghubungi dukungan WP Engine untuk meminta konfigurasi domain wildcard. Ini memungkinkan semua subdomain bekerja secara otomatis tanpa perlu menambahkan masing-masing satu per satu.

### Sertifikat SSL

WP Engine secara otomatis menangani penerbitan dan pembaruan sertifikat SSL untuk semua domain yang ditambahkan melalui integrasi ini. Tidak diperlukan konfigurasi tambahan.

## Pemecahan Masalah

### Masalah Koneksi API
- Pastikan plugin WP Engine aktif dan dikonfigurasi dengan benar
- Jika Anda mendefinisikan API key secara manual, periksa apakah sudah benar
- Hubungi dukungan WP Engine jika Anda mengalami masalah dengan API

### Domain Tidak Ditambahkan
- Periksa log Ultimate Multisite untuk pesan error
- Pastikan domain belum ditambahkan ke WP Engine sebelumnya
- Pastikan paket WP Engine Anda mendukung jumlah domain yang ingin Anda tambahkan

### Masalah Subdomain
- Jika subdomain tidak berfungsi, hubungi dukungan WP Engine untuk meminta konfigurasi domain wildcard
- Pastikan pengaturan DNS Anda dikonfigurasi dengan benar untuk domain utama dan subdomain
