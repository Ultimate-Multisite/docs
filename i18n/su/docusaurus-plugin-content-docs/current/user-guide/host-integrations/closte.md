---
title: Integrasi Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Integrasi Closte

## Gambaran Umum {#overview}
Closte téh platform hosting WordPress yang dikelola (managed) di atas infrastruktur Google Cloud. Integrasi ieu ngabantu sinkronisasi domain otomatis jeung manajemen sertifikat SSL antara Ultimate Multisite jeung Closte.

## Fitur-fitur {#features}
- Sinkronisasi domain otomatis
- Manajemen sertifikat SSL
- Dukungan wildcard domain
- Teu perlu konfigurasi mun dijalankeun di Closte

## Persyaratan {#requirements}
Konstanta ieu kudu didefinisikeun dina file `wp-config.php` anjeun lamun anjeun ngagunakeun Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Konstanta ieu biasana geus aya mun anjeun hosting di Closte.

## Instruksi Setup {#setup-instructions}

### 1. Verifikasi Kunci API Closte Anjeun {#1-verify-your-closte-api-key}

Lamun anjeun hosting di Closte, konstanta `CLOSTE_CLIENT_API_KEY` kudu geus didefinisikeun dina file `wp-config.php` anjeun. Anjeun bisa verifikasi éta ku ngcek file `wp-config.php` anjeun.

### 2. Aktifkeun Integrasi {#2-enable-the-integration}

1. Di admin WordPress anjeun, pergi ka Ultimate Multisite > Settings
2. Pindah ka tab "Domain Mapping" (Pemetaan Domain)
3. Gulirkeun ka bagian "Host Integrations" (Integrasi Host)
4. Aktifkeun integrasi Closte
5. Klik "Save Changes" (Simpan Perubahan)

## Kumaha Cara Kerjanya {#how-it-works}

Lamun domain dipetakan dina Ultimate Multisite:

1. Integrasi bakal ngirim permintaan ka API Closte pikeun nambahan domain éta kana aplikasi anjeun
2. Closte otomatis ngurus penyediaan sertifikat SSL
3. Lamun pemetaan domain dihapus, integrasi téh bakal ngahapus domain tina Closte

Integrasi ieu ogé gawé bareng jeung pengaturan interval pengecekan DNS dina Ultimate Multisite, jadi anjeun bisa ngatur seberapa sering sistem ngecek propagasi DNS jeung penerbitan sertifikat SSL.

## Pembuatan Catatan Domain {#domain-record-creation}

Integrasi ieu ngajamin yén lamun situs dipikawanoh atawa diduplikasi, rek domain bakal otomatis dikaciptake. Ieu penting pisan pikeun integrasi Closte, sabab pembuatan rek domain mimiti nyulut API Closte pikeun ngaciptake domain je sertifikat SSL.

## Troubleshooting (Ngatasi Masalah) {#troubleshooting}

### Masalah Koneksi API {#api-connection-issues}
- Pastike konci API Closte anjeun bener
- Pastike akun Closte anjeun gaduh izin anu dipiharep

### Masalah Sertifikat SSL {#ssl-certificate-issues}
- Closte tiasa butuh waktos kanggo ngaciptake sertifikat SSL (biasana 5-10 menit)
- Pastike domain anjeun nunjukkeun IP address server Closte anjeun kalawan bener
- Cek rek DNS domain anjeun pikeun pastike geus dikonfigurasi kalawan bener

### Domain Teu Ditambah {#domain-not-added}
- Cek log Ultimate Multisite kanggo aya pesen error
- Pastike domain éta teu acan ditambihan ka Closte
- Pastike rek DNS domain anjeun geus dikonfigurasi kalawan bener

### Interval Pengecekan DNS {#dns-check-interval}
- Lamun sertifikat SSL keur lila pisan diproses, anjeun bisa ngarobah interval pengecekan DNS dina pengaturan Domain Mapping.
- Interval defaultna nyaéta 300 detik (5 menit), tapi anjeun bisa ngatur jadi leutik saperti 10 detik pikeun pengecekan leuwih gancang nalika tes
