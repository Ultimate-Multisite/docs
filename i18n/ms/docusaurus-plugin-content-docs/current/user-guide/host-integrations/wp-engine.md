---
title: Integrasi WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integrasi WP Engine

## Gambaran Keseluruhan {#overview}
WP Engine ialah platform hosting WordPress terurus premium yang menyediakan prestasi yang dioptimumkan, keselamatan, dan kebolehskalaan untuk laman WordPress. Integrasi ini membolehkan penyegerakan domain secara automatik antara Ultimate Multisite dan WP Engine.

## Ciri-ciri {#features}
- Penyegerakan domain secara automatik
- Sokongan subdomain untuk pemasangan multisite
- Integrasi lancar dengan sistem sedia ada WP Engine

## Keperluan {#requirements}
Integrasi ini akan mengesan secara automatik jika anda menggunakan hosting WP Engine dan menggunakan API WP Engine yang terbina dalam. Tiada konfigurasi tambahan diperlukan jika plugin WP Engine aktif dan dikonfigurasi dengan betul.

Walau bagaimanapun, jika anda perlu mengkonfigurasi integrasi secara manual, anda boleh mentakrifkan salah satu pemalar berikut dalam fail `wp-config.php` anda:

```php
define('WPE_APIKEY', 'your_api_key'); // Kaedah yang disyorkan
// ATAU
define('WPE_API', 'your_api_key'); // Kaedah alternatif
```

## Arahan Persediaan {#setup-instructions}

### 1. Sahkan Plugin WP Engine {#1-verify-wp-engine-plugin}

Jika anda menggunakan hosting WP Engine, plugin WP Engine sepatutnya sudah dipasang dan diaktifkan. Pastikan bahawa:

1. Plugin WP Engine aktif
2. Fail `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` wujud

### 2. Aktifkan Integrasi {#2-enable-the-integration}

1. Dalam admin WordPress anda, pergi ke Ultimate Multisite > Settings
2. Navigasi ke tab "Domain Mapping"
3. Tatal ke bawah ke "Host Integrations"
4. Aktifkan integrasi WP Engine
5. Klik "Save Changes"

## Cara Ia Berfungsi {#how-it-works}

### Penyegerakan Domain {#domain-syncing}

Apabila domain dipetakan dalam Ultimate Multisite:

1. Integrasi menggunakan API WP Engine untuk menambah domain ke pemasangan WP Engine anda
2. WP Engine menguruskan konfigurasi domain dan pengeluaran sijil SSL
3. Apabila pemetaan domain dikeluarkan, integrasi akan membuang domain daripada WP Engine

### Sokongan Subdomain {#subdomain-support}

Untuk pemasangan multisite subdomain:

1. Integrasi menambah setiap subdomain ke WP Engine apabila laman baharu dicipta
2. WP Engine menguruskan konfigurasi subdomain
3. Apabila laman dipadam, integrasi akan membuang subdomain daripada WP Engine

## Nota Penting {#important-notes}

### Domain Wildcard {#wildcard-domains}

Untuk pemasangan multisite subdomain, adalah disyorkan untuk menghubungi sokongan WP Engine bagi memohon konfigurasi domain wildcard. Ini membolehkan semua subdomain berfungsi secara automatik tanpa perlu menambah setiap satu secara individu.

### Sijil SSL {#ssl-certificates}

WP Engine menguruskan pengeluaran dan pembaharuan sijil SSL secara automatik untuk semua domain yang ditambah melalui integrasi ini. Tiada konfigurasi tambahan diperlukan.

## Penyelesaian Masalah {#troubleshooting}

### Masalah Sambungan API {#api-connection-issues}
- Pastikan plugin WP Engine aktif dan dikonfigurasi dengan betul
- Jika anda telah mentakrifkan kunci API secara manual, semak bahawa ia betul
- Hubungi sokongan WP Engine jika anda menghadapi masalah dengan API

### Domain Tidak Ditambah {#domain-not-added}
- Semak log Ultimate Multisite untuk sebarang mesej ralat
- Pastikan domain belum ditambah ke WP Engine
- Pastikan pelan WP Engine anda menyokong bilangan domain yang anda tambah

### Masalah Subdomain {#subdomain-issues}
- Jika subdomain tidak berfungsi, hubungi sokongan WP Engine untuk memohon konfigurasi domain wildcard
- Pastikan tetapan DNS anda dikonfigurasi dengan betul untuk domain utama dan subdomain
