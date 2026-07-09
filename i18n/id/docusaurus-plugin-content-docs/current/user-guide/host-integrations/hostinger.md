---
title: Integrasi Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Integrasi Hostinger (hPanel) {#hostinger-hpanel-integration}

## Ikhtisar {#overview}

Hostinger adalah penyedia web hosting populer dengan panel kontrol modern bernama hPanel. Integrasi Ultimate Multisite Hostinger memungkinkan sinkronisasi domain otomatis antara Ultimate Multisite dan hPanel Hostinger, sehingga Anda dapat mengelola pemetaan domain dan subdomain secara otomatis langsung dari admin WordPress Anda.

## Fitur {#features}

- Pembuatan domain tambahan (addon domain) otomatis di hPanel
- Pembuatan subdomain otomatis di hPanel (untuk instalasi multisite subdomain)
- Penghapusan domain ketika pemetaan dihapus
- Integrasi mulus dengan API manajemen domain hPanel

## Persyaratan {#requirements}

Untuk menggunakan integrasi Hostinger, Anda memerlukan:

1. Akun Hostinger dengan akses hPanel
2. Token API dari Hostinger
3. Konstanta berikut yang didefinisikan di file `wp-config.php` Anda:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Secara opsional, Anda juga dapat mendefinisikan:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Endpoint API default
```

## Petunjuk Pengaturan {#setup-instructions}

### 1. Buat Token API Hostinger Anda {#1-generate-your-hostinger-api-token}

1. Masuk ke akun Hostinger Anda dan akses hPanel
2. Arahkan ke **Pengaturan Akun** → **Token API**
3. Klik **Buat Token Baru**
4. Beri nama deskriptif pada token Anda (misalnya, "Ultimate Multisite")
5. Pilih izin yang diperlukan:
   - Manajemen domain
   - Manajemen subdomain
6. Salin token yang dihasilkan dan simpan dengan aman

### 2. Temukan ID Akun Anda {#2-find-your-account-id}

1. Di hPanel, buka **Pengaturan Akun** → **Informasi Akun**
2. ID Akun Anda ditampilkan di halaman ini
3. Salin dan simpan ID ini untuk langkah berikutnya

### 3. Tambahkan Konstanta ke wp-config.php {#3-add-constants-to-wp-configphp}

Tambahkan konstanta berikut ke file `wp-config.php` Anda:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Jika akun Hostinger Anda menggunakan endpoint API yang berbeda, Anda dapat menyesuaikannya:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Aktifkan Integrasi {#4-enable-the-integration}

1. Di admin WordPress Anda, buka **Ultimate Multisite > Pengaturan**
2. Arahkan ke tab **Pemetaan Domain**
3. Gulir ke bawah ke **Integrasi Host**
4. Aktifkan integrasi **Hostinger (hPanel)**
5. Klik **Simpan Perubahan**

## Cara Kerjanya {#how-it-works}

### Domain Tambahan (Addon Domains) {#addon-domains}

Ketika Anda memetakan domain di Ultimate Multisite:

1. Integrasi mengirim permintaan ke API Hostinger untuk menambahkan domain sebagai domain tambahan
2. Domain dikonfigurasi untuk menunjuk ke direktori utama Anda
3. Ketika pemetaan domain dihapus, integrasi secara otomatis menghapus domain tambahan dari hPanel

### Subdomain {#subdomains}

Untuk instalasi multisite subdomain, ketika situs baru dibuat:

1. Integrasi mengekstrak bagian subdomain dari domain lengkap
2. Ia mengirim permintaan ke API Hostinger untuk menambahkan subdomain
3. Subdomain dikonfigurasi untuk menunjuk ke direktori utama Anda

## Catatan Penting {#important-notes}

- Integrasi menggunakan REST API Hostinger untuk berkomunikasi dengan akun Anda
- Token API Anda harus memiliki izin yang diperlukan untuk manajemen domain dan subdomain
- Integrasi tidak menangani konfigurasi DNS; domain harus sudah menunjuk ke akun Hostinger Anda
- Permintaan API dibuat dengan aman melalui HTTPS
- Jaga kerahasiaan token API Anda dan jangan pernah membagikannya di tempat umum

## Pemecahan Masalah {#troubleshooting}

### Masalah Koneksi API {#api-connection-issues}

- Verifikasi bahwa token API Anda benar dan belum kedaluwarsa
- Periksa apakah ID Akun Anda sudah benar
- Pastikan token API Anda memiliki izin yang diperlukan untuk manajemen domain
- Verifikasi bahwa akun Hostinger Anda aktif dan dalam kondisi baik

### Domain Tidak Ditambahkan {#domain-not-added}

- Periksa log Ultimate Multisite untuk pesan kesalahan apa pun
- Verifikasi bahwa domain belum ditambahkan ke akun Hostinger Anda
- Pastikan akun Hostinger Anda belum mencapai batas domain tambahan
- Konfirmasi bahwa domain menunjuk dengan benar ke nameserver Hostinger Anda

### Masalah Sertifikat SSL {#ssl-certificate-issues}

- Integrasi tidak menangani penerbitan sertifikat SSL
- Hostinger biasanya menyediakan sertifikat SSL gratis melalui AutoSSL
- Anda dapat mengelola sertifikat SSL langsung di hPanel di bawah **SSL/TLS**
- Sebagai alternatif, gunakan Let's Encrypt dengan fitur AutoSSL Hostinger

## Dukungan {#support}

Untuk bantuan tambahan mengenai integrasi Hostinger, silakan merujuk ke:

- [Dokumentasi API Hostinger](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Dokumentasi Ultimate Multisite](/)
- [Dukungan Ultimate Multisite](https://ultimatemultisite.com/support)
