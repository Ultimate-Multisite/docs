---
title: Integrasi GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integrasi GridPane

## Ringkasan
GridPane adalah control panel hosting WordPress khusus yang dibuat untuk para profesional WordPress. Integrasi ini memungkinkan sinkronisasi domain otomatis dan pengelolaan sertifikat SSL antara Ultimate Multisite dan GridPane.

## Fitur
- Sinkronisasi domain otomatis
- Pengelolaan sertifikat SSL
- Konfigurasi otomatis konstanta SUNRISE

## Persyaratan
Konstanta berikut harus didefinisikan di file `wp-config.php` Anda:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Panduan Pengaturan

### 1. Dapatkan Kredensial API GridPane Anda

1. Masuk ke dashboard GridPane Anda
2. Buka "Settings" > "API"
3. Buat API key jika Anda belum memilikinya
4. Salin API key Anda

### 2. Dapatkan Server ID dan Site ID Anda

1. Di dashboard GridPane Anda, buka "Servers"
2. Pilih server tempat WordPress multisite Anda di-hosting
3. Catat Server ID (terlihat di URL atau di halaman detail server)
4. Buka "Sites" dan pilih situs WordPress Anda
5. Catat Site ID (terlihat di URL atau di halaman detail situs)

### 3. Tambahkan Konstanta ke wp-config.php

Tambahkan konstanta berikut ke file `wp-config.php` Anda:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Aktifkan Integrasi

1. Di admin WordPress Anda, buka Ultimate Multisite > Settings
2. Navigasi ke tab "Domain Mapping"
3. Gulir ke bawah ke "Host Integrations"
4. Aktifkan integrasi GridPane
5. Klik "Save Changes"

## Cara Kerjanya

Ketika sebuah domain dipetakan di Ultimate Multisite:

1. Integrasi mengirim permintaan ke API GridPane untuk menambahkan domain ke situs Anda
2. GridPane secara otomatis menangani penerbitan sertifikat SSL
3. Ketika pemetaan domain dihapus, integrasi akan menghapus domain tersebut dari GridPane

Integrasi ini juga secara otomatis menangani konstanta SUNRISE di file wp-config.php Anda, yang diperlukan agar pemetaan domain dapat berfungsi dengan benar.

## Pengelolaan Konstanta SUNRISE

Salah satu fitur unik dari integrasi GridPane adalah secara otomatis mengembalikan konstanta SUNRISE di wp-config.php untuk mencegah konflik dengan sistem pemetaan domain milik GridPane. Ini memastikan kedua sistem dapat bekerja bersama tanpa masalah.

## Pemecahan Masalah

### Masalah Koneksi API
- Pastikan API key Anda sudah benar
- Periksa apakah server ID dan site ID Anda sudah benar
- Pastikan akun GridPane Anda memiliki izin yang diperlukan

### Masalah Sertifikat SSL
- GridPane mungkin membutuhkan waktu untuk menerbitkan sertifikat SSL
- Pastikan domain Anda sudah mengarah dengan benar ke alamat IP server Anda
- Periksa pengaturan SSL GridPane untuk situs Anda

### Domain Tidak Ditambahkan
- Periksa log Ultimate Multisite untuk melihat pesan error
- Pastikan domain tersebut belum ditambahkan ke GridPane
- Pastikan record DNS domain Anda sudah dikonfigurasi dengan benar
