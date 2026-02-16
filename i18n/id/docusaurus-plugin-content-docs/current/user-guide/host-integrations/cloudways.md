---
title: Integrasi Cloudways
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Integrasi Cloudways

## Ringkasan
Cloudways adalah platform hosting cloud terkelola yang memungkinkan Anda men-deploy situs WordPress di berbagai penyedia layanan cloud seperti DigitalOcean, AWS, Google Cloud, dan lainnya. Integrasi ini memungkinkan sinkronisasi domain otomatis dan pengelolaan sertifikat SSL antara Ultimate Multisite dan Cloudways.

## Fitur
- Sinkronisasi domain otomatis
- Pengelolaan sertifikat SSL
- Dukungan untuk domain tambahan
- Validasi DNS untuk sertifikat SSL

## Persyaratan
Konstanta berikut harus didefinisikan di file `wp-config.php` Anda:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Opsional, Anda juga dapat mendefinisikan:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Petunjuk Pengaturan

### 1. Dapatkan Kredensial API Cloudways Anda

1. Masuk ke dashboard Cloudways Anda
2. Buka "Account" > "API Keys"
3. Buat API key jika Anda belum memilikinya
4. Salin email dan API key Anda

### 2. Dapatkan Server ID dan Application ID Anda

1. Di dashboard Cloudways Anda, buka "Servers"
2. Pilih server tempat WordPress multisite Anda di-hosting
3. Server ID terlihat di URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Buka "Applications" dan pilih aplikasi WordPress Anda
5. App ID terlihat di URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Tambahkan Konstanta ke wp-config.php

Tambahkan konstanta berikut ke file `wp-config.php` Anda:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Jika Anda memiliki domain tambahan yang harus selalu disertakan:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. Aktifkan Integrasi

1. Di admin WordPress Anda, buka Ultimate Multisite > Settings
2. Navigasi ke tab "Domain Mapping"
3. Gulir ke bawah ke "Host Integrations"
4. Aktifkan integrasi Cloudways
5. Klik "Save Changes"

## Cara Kerja

### Sinkronisasi Domain

Ketika domain dipetakan di Ultimate Multisite:

1. Integrasi mengambil semua domain yang saat ini dipetakan
2. Menambahkan domain baru ke daftar (beserta versi www jika berlaku)
3. Mengirim daftar lengkap ke Cloudways melalui API
4. Cloudways memperbarui alias domain untuk aplikasi Anda

Catatan: API Cloudways mengharuskan pengiriman daftar domain lengkap setiap kali, bukan hanya menambah atau menghapus domain individual.

### Pengelolaan Sertifikat SSL

Setelah domain disinkronkan:

1. Integrasi memeriksa domain mana yang memiliki rekaman DNS valid yang mengarah ke server Anda
2. Mengirim permintaan ke Cloudways untuk menginstal sertifikat SSL Let's Encrypt untuk domain tersebut
3. Cloudways menangani penerbitan dan instalasi sertifikat SSL

## Domain Tambahan

Konstanta `WU_CLOUDWAYS_EXTRA_DOMAINS` memungkinkan Anda menentukan domain tambahan yang harus selalu disertakan saat sinkronisasi dengan Cloudways. Ini berguna untuk:

- Domain yang tidak dikelola oleh Ultimate Multisite
- Domain wildcard (misalnya, `*.example.com`)
- Domain development atau staging

## Pemecahan Masalah

### Masalah Koneksi API
- Pastikan email dan API key Anda benar
- Periksa bahwa server ID dan application ID Anda benar
- Pastikan akun Cloudways Anda memiliki izin yang diperlukan

### Masalah Sertifikat SSL
- Cloudways mengharuskan domain memiliki rekaman DNS valid yang mengarah ke server Anda sebelum menerbitkan sertifikat SSL
- Integrasi memvalidasi rekaman DNS sebelum meminta sertifikat SSL
- Jika sertifikat SSL tidak diterbitkan, periksa bahwa domain Anda mengarah dengan benar ke alamat IP server Anda

### Domain Tidak Ditambahkan
- Periksa log Ultimate Multisite untuk pesan error
- Pastikan domain belum ditambahkan ke Cloudways sebelumnya
- Pastikan paket Cloudways Anda mendukung jumlah domain yang ingin Anda tambahkan
