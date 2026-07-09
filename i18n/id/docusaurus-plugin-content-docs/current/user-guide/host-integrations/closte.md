---
title: Integrasi Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Integrasi Closte {#closte-integration}

## Gambaran Umum {#overview}
Closte adalah platform hosting WordPress terkelola yang dibangun di atas infrastruktur Google Cloud. Integrasi ini memungkinkan sinkronisasi domain otomatis dan pengelolaan sertifikat SSL antara Ultimate Multisite dan Closte.

## Fitur {#features}
- Sinkronisasi domain otomatis
- Pengelolaan sertifikat SSL
- Dukungan wildcard domain
- Tidak perlu konfigurasi jika berjalan di Closte

## Persyaratan {#requirements}
Konstanta berikut harus didefinisikan di file `wp-config.php` Anda jika menggunakan Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Konstanta ini biasanya sudah didefinisikan jika Anda hosting di Closte.

## Petunjuk Pengaturan {#setup-instructions}

### 1. Verifikasi API Key Closte Anda {#1-verify-your-closte-api-key}

Jika Anda hosting di Closte, konstanta `CLOSTE_CLIENT_API_KEY` seharusnya sudah didefinisikan di file `wp-config.php` Anda. Anda dapat memverifikasi ini dengan memeriksa file `wp-config.php` Anda.

### 2. Aktifkan Integrasi {#2-enable-the-integration}

1. Di admin WordPress Anda, buka Ultimate Multisite > Settings
2. Navigasi ke tab "Domain Mapping"
3. Gulir ke bawah ke "Host Integrations"
4. Aktifkan integrasi Closte
5. Klik "Save Changes"

## Cara Kerjanya {#how-it-works}

Ketika domain dipetakan di Ultimate Multisite:

1. Integrasi mengirim permintaan ke API Closte untuk menambahkan domain ke aplikasi Anda
2. Closte secara otomatis menangani penyediaan sertifikat SSL
3. Ketika pemetaan domain dihapus, integrasi akan menghapus domain dari Closte

Integrasi ini juga bekerja dengan pengaturan interval pemeriksaan DNS di Ultimate Multisite, memungkinkan Anda mengonfigurasi seberapa sering sistem memeriksa propagasi DNS dan penerbitan sertifikat SSL.

## Pembuatan Rekaman Domain {#domain-record-creation}

Integrasi ini memastikan bahwa ketika sebuah situs dibuat atau diduplikasi, rekaman domain secara otomatis dibuat. Ini sangat penting untuk integrasi Closte, karena pembuatan rekaman domain memicu API Closte untuk membuat domain dan sertifikat SSL.

## Pemecahan Masalah {#troubleshooting}

### Masalah Koneksi API {#api-connection-issues}
- Verifikasi bahwa API key Closte Anda sudah benar
- Pastikan akun Closte Anda memiliki izin yang diperlukan

### Masalah Sertifikat SSL {#ssl-certificate-issues}
- Closte mungkin memerlukan waktu untuk menerbitkan sertifikat SSL (biasanya 5-10 menit)
- Verifikasi bahwa domain Anda sudah diarahkan dengan benar ke alamat IP server Closte Anda
- Periksa rekaman DNS untuk domain Anda untuk memastikan konfigurasinya sudah benar

### Domain Tidak Ditambahkan {#domain-not-added}
- Periksa log Ultimate Multisite untuk pesan error
- Verifikasi bahwa domain belum ditambahkan ke Closte
- Pastikan rekaman DNS domain Anda sudah dikonfigurasi dengan benar

### Interval Pemeriksaan DNS {#dns-check-interval}
- Jika sertifikat SSL terlalu lama untuk diterbitkan, Anda dapat menyesuaikan interval pemeriksaan DNS di pengaturan Domain Mapping
- Interval default adalah 300 detik (5 menit), tetapi Anda dapat mengaturnya serendah 10 detik untuk pemeriksaan lebih cepat saat pengujian
