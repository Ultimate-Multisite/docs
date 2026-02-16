---
title: Integrasi ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Integrasi ServerPilot

## Gambaran Umum
ServerPilot adalah layanan cloud untuk hosting situs WordPress dan PHP lainnya di server DigitalOcean, Amazon, Google, atau penyedia server lainnya. Integrasi ini memungkinkan sinkronisasi domain otomatis dan pengelolaan sertifikat SSL antara Ultimate Multisite dan ServerPilot.

## Fitur
- Sinkronisasi domain otomatis
- Pengelolaan sertifikat SSL dengan Let's Encrypt
- Perpanjangan SSL otomatis

## Persyaratan
Konstanta berikut harus didefinisikan di file `wp-config.php` Anda:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Panduan Pengaturan

### 1. Dapatkan Kredensial API ServerPilot Anda

1. Masuk ke dashboard ServerPilot Anda
2. Buka "Account" > "API"
3. Buat API key baru jika Anda belum memilikinya
4. Salin Client ID dan API Key Anda

### 2. Dapatkan App ID Anda

1. Di dashboard ServerPilot Anda, buka "Apps"
2. Pilih aplikasi tempat WordPress multisite Anda di-hosting
3. App ID dapat dilihat di URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Tambahkan Konstanta ke wp-config.php

Tambahkan konstanta berikut ke file `wp-config.php` Anda:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Aktifkan Integrasi

1. Di admin WordPress Anda, buka Ultimate Multisite > Settings
2. Navigasi ke tab "Domain Mapping"
3. Gulir ke bawah ke "Host Integrations"
4. Aktifkan integrasi ServerPilot
5. Klik "Save Changes"

## Cara Kerja

### Sinkronisasi Domain

Ketika domain dipetakan di Ultimate Multisite:

1. Integrasi mengambil daftar domain saat ini dari ServerPilot
2. Integrasi menambahkan domain baru ke daftar (beserta versi www jika berlaku)
3. Integrasi mengirimkan daftar yang diperbarui ke ServerPilot melalui API
4. ServerPilot memperbarui daftar domain untuk aplikasi Anda

### Pengelolaan Sertifikat SSL

Setelah domain disinkronkan:

1. Integrasi secara otomatis mengaktifkan AutoSSL untuk aplikasi Anda
2. ServerPilot menangani penerbitan dan instalasi sertifikat SSL menggunakan Let's Encrypt
3. ServerPilot juga menangani perpanjangan otomatis sertifikat SSL

## Verifikasi Sertifikat SSL

Integrasi ini dikonfigurasi untuk meningkatkan jumlah percobaan verifikasi sertifikat SSL untuk ServerPilot, karena mungkin memerlukan waktu bagi ServerPilot untuk menerbitkan dan menginstal sertifikat SSL. Secara default, integrasi akan mencoba hingga 5 kali, tetapi ini dapat disesuaikan menggunakan filter.

## Pemecahan Masalah

### Masalah Koneksi API
- Pastikan Client ID dan API Key Anda benar
- Periksa apakah App ID Anda benar
- Pastikan akun ServerPilot Anda memiliki izin yang diperlukan

### Masalah Sertifikat SSL
- ServerPilot mengharuskan domain memiliki catatan DNS yang valid yang mengarah ke server Anda sebelum menerbitkan sertifikat SSL
- Jika sertifikat SSL tidak diterbitkan, periksa apakah domain Anda sudah mengarah dengan benar ke alamat IP server Anda
- Mungkin diperlukan waktu bagi ServerPilot untuk menerbitkan dan menginstal sertifikat SSL (biasanya 5-15 menit)

### Domain Tidak Ditambahkan
- Periksa log Ultimate Multisite untuk pesan error
- Pastikan domain belum ditambahkan ke ServerPilot sebelumnya
- Pastikan paket ServerPilot Anda mendukung jumlah domain yang Anda tambahkan

### Penghapusan Domain
- Saat ini, API ServerPilot tidak menyediakan cara untuk menghapus domain secara individual
- Ketika pemetaan domain dihapus di Ultimate Multisite, integrasi akan memperbarui daftar domain di ServerPilot untuk mengecualikan domain yang dihapus
