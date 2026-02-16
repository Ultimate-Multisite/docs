---
title: Integrasi Cloudflare
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Integrasi Cloudflare

## Gambaran Umum
Cloudflare adalah penyedia content delivery network (CDN) dan keamanan terkemuka yang membantu melindungi dan mempercepat website. Integrasi ini memungkinkan pengelolaan domain otomatis antara Ultimate Multisite dan Cloudflare, khususnya untuk instalasi multisite subdomain.

## Fitur
- Pembuatan subdomain otomatis di Cloudflare
- Dukungan subdomain yang di-proxy
- Pengelolaan DNS record
- Tampilan DNS record yang lebih lengkap di admin Ultimate Multisite

## Persyaratan
Konstanta berikut harus didefinisikan di file `wp-config.php` Anda:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Panduan Pengaturan

### 1. Dapatkan API Key Cloudflare Anda

1. Login ke dashboard Cloudflare Anda
2. Buka "My Profile" (klik email Anda di pojok kanan atas)
3. Pilih "API Tokens" dari menu
4. Buat API token baru dengan izin berikut:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Salin API token Anda

### 2. Dapatkan Zone ID Anda

1. Di dashboard Cloudflare Anda, pilih domain yang ingin Anda gunakan
2. Zone ID terlihat di tab "Overview", di sidebar kanan di bawah "API"
3. Salin Zone ID tersebut

### 3. Tambahkan Konstanta ke wp-config.php

Tambahkan konstanta berikut ke file `wp-config.php` Anda:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Aktifkan Integrasi

1. Di admin WordPress Anda, buka Ultimate Multisite > Settings
2. Navigasi ke tab "Domain Mapping"
3. Gulir ke bawah ke "Host Integrations"
4. Aktifkan integrasi Cloudflare
5. Klik "Save Changes"

## Cara Kerjanya

### Pengelolaan Subdomain

Ketika situs baru dibuat di instalasi multisite subdomain:

1. Integrasi mengirim permintaan ke API Cloudflare untuk menambahkan CNAME record untuk subdomain tersebut
2. Subdomain dikonfigurasi untuk di-proxy melalui Cloudflare secara default (ini bisa diubah dengan filter)
3. Ketika situs dihapus, integrasi akan menghapus subdomain dari Cloudflare

### Tampilan DNS Record

Integrasi ini menyempurnakan tampilan DNS record di admin Ultimate Multisite dengan:

1. Mengambil DNS record langsung dari Cloudflare
2. Menampilkan apakah record di-proxy atau tidak
3. Menampilkan informasi tambahan tentang DNS record

## Catatan Penting

Dengan pembaruan terbaru Cloudflare, wildcard proxying kini tersedia untuk semua pelanggan. Ini berarti integrasi Cloudflare tidak lagi sekrusial dulu untuk instalasi multisite subdomain, karena Anda cukup membuat wildcard DNS record di Cloudflare.

## Pemecahan Masalah

### Masalah Koneksi API
- Pastikan API token Anda benar dan memiliki izin yang diperlukan
- Periksa apakah Zone ID Anda benar
- Pastikan akun Cloudflare Anda memiliki izin yang diperlukan

### Subdomain Tidak Ditambahkan
- Periksa log Ultimate Multisite untuk pesan error
- Pastikan subdomain tersebut belum ditambahkan ke Cloudflare
- Pastikan paket Cloudflare Anda mendukung jumlah DNS record yang Anda buat

### Masalah Proxy
- Jika Anda tidak ingin subdomain di-proxy, Anda bisa menggunakan filter `wu_cloudflare_should_proxy`
- Beberapa fitur mungkin tidak berfungsi dengan benar saat di-proxy (misalnya, fungsi admin WordPress tertentu)
- Pertimbangkan untuk menggunakan Page Rules Cloudflare untuk melewati cache di halaman admin
