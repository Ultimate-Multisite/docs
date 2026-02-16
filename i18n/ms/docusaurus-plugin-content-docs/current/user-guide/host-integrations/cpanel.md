---
title: Integrasi cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integrasi cPanel

## Gambaran Keseluruhan
cPanel adalah salah satu panel kawalan hosting web yang paling popular, digunakan oleh banyak penyedia hosting berkongsi dan dedicated. Integrasi ini membolehkan penyegerakan domain secara automatik antara Ultimate Multisite dan cPanel, membolehkan anda menambah alias domain dan subdomain ke akaun cPanel anda secara automatik.

## Ciri-ciri
- Penciptaan addon domain secara automatik dalam cPanel
- Penciptaan subdomain secara automatik dalam cPanel (untuk pemasangan multisite subdomain)
- Pembuangan domain apabila pemetaan dipadamkan

## Keperluan
Pemalar berikut mesti ditakrifkan dalam fail `wp-config.php` anda:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Secara pilihan, anda juga boleh mentakrifkan:

```php
define('WU_CPANEL_PORT', 2083); // Default is 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default is /public_html
```

## Arahan Persediaan

### 1. Dapatkan Kelayakan cPanel Anda

1. Dapatkan nama pengguna dan kata laluan cPanel daripada penyedia hosting anda
2. Tentukan host cPanel anda (biasanya `cpanel.yourdomain.com` atau `yourdomain.com:2083`)

### 2. Tambah Pemalar ke wp-config.php

Tambah pemalar berikut ke fail `wp-config.php` anda:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Secara pilihan, anda boleh menyesuaikan port dan direktori root:

```php
define('WU_CPANEL_PORT', 2083); // Change if your cPanel uses a different port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Change if your document root is different
```

### 3. Aktifkan Integrasi

1. Dalam admin WordPress anda, pergi ke Ultimate Multisite > Settings
2. Navigasi ke tab "Domain Mapping"
3. Tatal ke bawah ke "Host Integrations"
4. Aktifkan integrasi cPanel
5. Klik "Save Changes"

## Cara Ia Berfungsi

### Addon Domain

Apabila domain dipetakan dalam Ultimate Multisite:

1. Integrasi menghantar permintaan ke API cPanel untuk menambah domain sebagai addon domain
2. Domain dikonfigurasi untuk menghala ke direktori root anda
3. Apabila pemetaan domain dibuang, integrasi akan membuang addon domain daripada cPanel

### Subdomain

Untuk pemasangan multisite subdomain, apabila laman baharu dicipta:

1. Integrasi mengekstrak bahagian subdomain daripada domain penuh
2. Ia menghantar permintaan ke API cPanel untuk menambah subdomain
3. Subdomain dikonfigurasi untuk menghala ke direktori root anda

## Nota Penting

- Integrasi ini menggunakan API2 cPanel untuk berkomunikasi dengan akaun cPanel anda
- Akaun cPanel anda mesti mempunyai kebenaran untuk menambah addon domain dan subdomain
- Sesetengah penyedia hosting mungkin mengehadkan bilangan addon domain atau subdomain yang boleh anda cipta
- Integrasi ini tidak mengendalikan konfigurasi DNS; anda masih perlu menghalakan domain anda ke alamat IP pelayan anda

## Penyelesaian Masalah

### Isu Sambungan API
- Sahkan bahawa nama pengguna dan kata laluan cPanel anda adalah betul
- Semak bahawa host cPanel anda adalah betul dan boleh diakses
- Pastikan akaun cPanel anda mempunyai kebenaran yang diperlukan
- Cuba gunakan URL penuh untuk host (contohnya, `https://cpanel.yourdomain.com`)

### Domain Tidak Ditambah
- Semak log Ultimate Multisite untuk sebarang mesej ralat
- Sahkan bahawa domain belum ditambah ke cPanel
- Pastikan akaun cPanel anda belum mencapai had untuk addon domain atau subdomain

### Isu Sijil SSL
- Integrasi ini tidak mengendalikan pengeluaran sijil SSL
- Anda perlu menggunakan alat SSL/TLS cPanel atau ciri AutoSSL untuk mengeluarkan sijil SSL bagi domain anda
- Sebagai alternatif, anda boleh menggunakan perkhidmatan seperti Let's Encrypt dengan AutoSSL cPanel
