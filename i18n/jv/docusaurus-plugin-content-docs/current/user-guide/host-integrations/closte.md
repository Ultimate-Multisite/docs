---
title: Integrasi Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Integrasi Closte

## Gambaran Umum {#overview}
Closte iku platform hosting WordPress yang dikelola (managed) lan dibangun nganggo infrastruktur Google Cloud. Integrasi iki bisa nggawe sinkronisasi domain otomatis lan ngatur sertifikat SSL antar Ultimate Multisite lan Closte.

## Fitur-fitur {#features}
- Sinkronisasi domain otomatis
- Pengelolaan sertifikat SSL
- Dukungan domain wildcard
- Ora perlu konfigurasi yen dijalanke ing Closte

## Persyaratan {#requirements}
Konstanta iki kudu didefinisikake ing file `wp-config.php` sampeyan yen nggunakake Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Konstanta iki biasane wis ana yen sampeyan hosting ing Closte.

## Instruksi Setup {#setup-instructions}

### 1. Verifikasi Kunci API Closte Sampeyan {#1-verify-your-closte-api-key}

Yen sampeyan hosting ing Closte, konstanta `CLOSTE_CLIENT_API_KEY` wis kudu didefinisikake ing file `wp-config.php` sampeyan. Sampeyan bisa verifikasi iki kanthi mriksa file `wp-config.php` sampeyan.

### 2. Aktifke Integrasi {#2-enable-the-integration}

1. Ing admin WordPress sampeyan, tindakake Ultimate Multisite > Settings
2. Tindakake menyang tab "Domain Mapping"
3. Gulung nedho nganti "Host Integrations"
4. Aktifke integrasi Closte
5. Klik "Save Changes"

## Cara Kerjane {#how-it-works}

Yen domain di-map ing Ultimate Multisite:

1. Integrasi bakal ngirim request menyang API Closte kanggo nambah domain kuwi ing aplikasi sampeyan
2. Closte bakal otomatis ngurus penyediaan sertifikat SSL
3. Nalika pemetaan domain dihapus, integrasi kasebut bakal ngapus domain saka Closte

Integrasi iki uga kerja karo pengaturan interval pengecekan DNS ing Ultimate Multisite, sing menehi sampeyan bisa ngatur seberapa sering sistem ngecek propagasi DNS lan penerbitan sertifikat SSL.

## Pembuatan Catatan Domain {#domain-record-creation}

Integrasi iki njamin yen saite di-create utawa di-duplikat, record domain bakal otomatis digawe. Iki pancen penting banget kanggo integrasi Closte, amarga pembuatan record domain kuwi ndadekake API Closte mbutuhake nggawe domain lan sertifikat SSL.

## Troubleshooting {#troubleshooting}

### Masalah Koneksi API {#api-connection-issues}
- Cek yen kunci API Closte sampeyan bener
- Pastikan akun Closte sampeyan duwe izin sing dibutuhake

### Masalah Sertifikat SSL {#ssl-certificate-issues}
- Closte mungkin butuh wektu kanggo ngeluarkan sertifikat SSL (biasane 5-10 menit)
- Verifikasi yen domain sampeyan wis bener nunjuk menyang IP address server Closte.
- Cek record DNS kanggo domain sampeyan supaya dadi bener konfigurasi

### Domain Ora Ditambah {#domain-not-added}
- Cek log Ultimate Multisite kanggo pesan error apa wae
- Pastikan domain kuwi durung ana ing Closte
- Pastikan record DNS domain sampeyan wis bener dikonfigurasi

### Interval Pengecekan DNS {#dns-check-interval}
- Yen sertifikat SSL suwe banget kanggo di-issue, sampeyan bisa ngatur interval pengecekan DNS ing pengaturan Domain Mapping.
- Interval asline yaiku 300 detik (5 menit), nanging sampeyan bisa set dadi paling cendhek kaya 10 detik kanggo pengecekan luwih cepet nalika tes
