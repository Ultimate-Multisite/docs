---
title: Integrasi RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Integrasi RunCloud

## Ringkasan
RunCloud adalah platform manajemen server berbasis cloud yang memungkinkan Anda untuk dengan mudah mendeploy dan mengelola aplikasi web di server cloud Anda sendiri. Integrasi ini memungkinkan sinkronisasi domain otomatis dan manajemen sertifikat SSL antara Ultimate Multisite dan RunCloud.

## Fitur
- Sinkronisasi domain otomatis
- Manajemen sertifikat SSL
- Penghapusan domain ketika pemetaan dihapus

## Persyaratan
Konstanta berikut harus didefinisikan di file `wp-config.php` Anda:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Panduan Pengaturan

### 1. Dapatkan Kredensial API RunCloud Anda

1. Masuk ke dashboard RunCloud Anda
2. Buka "User Profile" (klik foto profil Anda di pojok kanan atas)
3. Pilih "API" dari menu
4. Klik "Generate API Key" jika Anda belum memilikinya
5. Salin API Key dan API Secret Anda

### 2. Dapatkan Server ID dan App ID Anda

1. Di dashboard RunCloud Anda, buka "Servers"
2. Pilih server tempat WordPress multisite Anda dihosting
3. Server ID terlihat di URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Buka "Web Applications" dan pilih aplikasi WordPress Anda
5. App ID terlihat di URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Tambahkan Konstanta ke wp-config.php

Tambahkan konstanta berikut ke file `wp-config.php` Anda:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Aktifkan Integrasi

1. Di admin WordPress Anda, buka Ultimate Multisite > Settings
2. Navigasi ke tab "Domain Mapping"
3. Gulir ke bawah ke "Host Integrations"
4. Aktifkan integrasi RunCloud
5. Klik "Save Changes"

## Cara Kerjanya

Ketika sebuah domain dipetakan di Ultimate Multisite:

1. Integrasi mengirim permintaan ke API RunCloud untuk menambahkan domain ke aplikasi Anda
2. Jika domain berhasil ditambahkan, integrasi juga akan mendeploy ulang sertifikat SSL
3. Ketika pemetaan domain dihapus, integrasi akan menghapus domain dari RunCloud

Untuk instalasi subdomain, integrasi akan secara otomatis menangani pembuatan subdomain di RunCloud ketika situs baru ditambahkan ke jaringan Anda.

## Pemecahan Masalah

### Masalah Koneksi API
- Pastikan kredensial API Anda benar
- Periksa bahwa server ID dan app ID Anda benar
- Pastikan akun RunCloud Anda memiliki izin yang diperlukan

### Masalah Sertifikat SSL
- RunCloud mungkin memerlukan waktu untuk menerbitkan sertifikat SSL
- Pastikan domain Anda sudah diarahkan dengan benar ke alamat IP server Anda
- Periksa pengaturan SSL RunCloud untuk aplikasi Anda

### Domain Tidak Ditambahkan
- Periksa log Ultimate Multisite untuk pesan error
- Pastikan domain belum ditambahkan ke RunCloud sebelumnya
- Pastikan paket RunCloud Anda mendukung banyak domain
