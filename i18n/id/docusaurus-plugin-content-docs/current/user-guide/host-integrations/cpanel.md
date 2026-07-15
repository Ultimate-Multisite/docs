---
title: Integrasi cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integrasi cPanel

## Ikhtisar {#overview}
cPanel adalah salah satu panel kontrol web hosting paling populer yang digunakan oleh banyak penyedia shared hosting dan dedicated hosting. Integrasi ini memungkinkan sinkronisasi domain secara otomatis antara Ultimate Multisite dan cPanel, sehingga Anda dapat menambahkan alias domain dan subdomain ke akun cPanel Anda secara otomatis.

## Fitur {#features}
- Pembuatan addon domain otomatis di cPanel
- Pembuatan subdomain otomatis di cPanel (untuk instalasi multisite berbasis subdomain)
- Penghapusan domain saat pemetaan dihapus

## Persyaratan {#requirements}
Konstanta berikut harus didefinisikan di file `wp-config.php` Anda:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Opsional, Anda juga dapat mendefinisikan:

```php
define('WU_CPANEL_PORT', 2083); // Default adalah 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default adalah /public_html
```

## Petunjuk Pengaturan {#setup-instructions}

### 1. Dapatkan Kredensial cPanel Anda {#1-get-your-cpanel-credentials}

1. Dapatkan username dan password cPanel dari penyedia hosting Anda
2. Tentukan host cPanel Anda (biasanya `cpanel.domainanda.com` atau `domainanda.com:2083`)

### 2. Tambahkan Konstanta ke wp-config.php {#2-add-constants-to-wp-configphp}

Tambahkan konstanta berikut ke file `wp-config.php` Anda:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Opsional, Anda dapat menyesuaikan port dan direktori root:

```php
define('WU_CPANEL_PORT', 2083); // Ubah jika cPanel Anda menggunakan port berbeda
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Ubah jika document root Anda berbeda
```

### 3. Aktifkan Integrasi {#3-enable-the-integration}

1. Di admin WordPress Anda, buka Ultimate Multisite > Settings
2. Navigasi ke tab "Domain Mapping"
3. Gulir ke bawah ke "Host Integrations"
4. Aktifkan integrasi cPanel
5. Klik "Save Changes"

## Cara Kerja {#how-it-works}

### Addon Domain {#addon-domains}

Ketika domain dipetakan di Ultimate Multisite:

1. Integrasi mengirim permintaan ke API cPanel untuk menambahkan domain sebagai addon domain
2. Domain dikonfigurasi untuk mengarah ke direktori root Anda
3. Ketika pemetaan domain dihapus, integrasi akan menghapus addon domain dari cPanel

### Subdomain {#subdomains}

Untuk instalasi multisite berbasis subdomain, ketika situs baru dibuat:

1. Integrasi mengekstrak bagian subdomain dari domain lengkap
2. Integrasi mengirim permintaan ke API cPanel untuk menambahkan subdomain
3. Subdomain dikonfigurasi untuk mengarah ke direktori root Anda

## Catatan Penting {#important-notes}

- Integrasi ini menggunakan API2 cPanel untuk berkomunikasi dengan akun cPanel Anda
- Akun cPanel Anda harus memiliki izin untuk menambahkan addon domain dan subdomain
- Beberapa penyedia hosting mungkin membatasi jumlah addon domain atau subdomain yang dapat Anda buat
- Integrasi ini tidak menangani konfigurasi DNS; Anda tetap perlu mengarahkan domain Anda ke alamat IP server Anda

## Pemecahan Masalah {#troubleshooting}

### Masalah Koneksi API {#api-connection-issues}
- Pastikan username dan password cPanel Anda benar
- Periksa bahwa host cPanel Anda benar dan dapat diakses
- Pastikan akun cPanel Anda memiliki izin yang diperlukan
- Coba gunakan URL lengkap untuk host (misalnya, `https://cpanel.domainanda.com`)

### Domain Tidak Ditambahkan {#domain-not-added}
- Periksa log Ultimate Multisite untuk pesan error
- Pastikan domain belum ditambahkan ke cPanel sebelumnya
- Pastikan akun cPanel Anda belum mencapai batas addon domain atau subdomain

### Masalah Sertifikat SSL {#ssl-certificate-issues}
- Integrasi ini tidak menangani penerbitan sertifikat SSL
- Anda perlu menggunakan fitur SSL/TLS atau AutoSSL di cPanel untuk menerbitkan sertifikat SSL untuk domain Anda
- Alternatifnya, Anda dapat menggunakan layanan seperti Let's Encrypt dengan fitur AutoSSL cPanel
