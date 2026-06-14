---
title: Integrasi cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integrasi cPanel

## Gambaran Umum
cPanel iku salah satu panel kontrol hosting paling populer sing digunakake akeh penyedia hosting shared lan dedicated. Integrasi iki bisa nggawe sinkronisasi domain otomatis antara Ultimate Multisite lan cPanel, ngidini sampeyan nambah alias domain lan subdomain ing akun cPanel-mu kanthi otomatis.

## Fitur
- Pembuatan addon domain otomatis ing cPanel
- Pembuatan subdomain otomatis ing cPanel (kanggo instalasi subdomain multisite)
- Penghapusan domain nalika pemetaan dihapus

## Persyaratan
Konstanta iki kudu didefinisikake ing file `wp-config.php` sampeyan:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Kadhangkala, sampeyan uga bisa nggawe definisi iki:

```php
define('WU_CPANEL_PORT', 2083); // Default-e ya 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default-e ya /public_html
```

## Instruksi Setup

### 1. Dapatkan Kredensial cPanel Sampeyan

1. Dapatkan username lan password cPanel sampeyan saka penyedia hostingmu
2. Tentukan host cPanel sampeyan (biasane `cpanel.yourdomain.com` utawa `yourdomain.com:2083`)

### 2. Tambahkan Konstanta ke wp-config.php

Tambahkan konstanta iki ing file `wp-config.php` sampeyan:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Kadhangkala, sampeyan bisa ngubah port lan root directory-e:

```php
define('WU_CPANEL_PORT', 2083); // Ubah yen cPanel sampeyan nggunakake port liyane
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Ubah yen folder dokumen sampeyan beda
```

### 3. Aktifkan Integrasi

1. Ing admin WordPress sampeyan, tindakake menyang Ultimate Multisite > Settings
2. Tindakake menyang tab "Domain Mapping"
3. Gulir nedhus nganti "Host Integrations"
4. Aktifke integrasi cPanel
5. Klik "Save Changes"

## Cara Kerjane

### Addon Domains

Nalika domain dipetakan ing Ultimate Multisite:

1. Integrasi kuwi ngirim request menyang API cPanel kanggo nambah domain minangka addon domain
2. Domain kase dikonfigurasi supaya nunjuk marang direktori utama (root directory) sampeyan
3. Nalika pemetaan domain dihapus, integrasi kuwi bakal ngapus addon domain saka cPanel

### Subdomains

Kanggo instalasi subdomain multisite, nalika situs anyar digawe:

1. Integrasi kuwi njupuk bagian subdomain saka domain lengkap
2. Integrasi kuwi ngirim request menyang API cPanel kanggo nambah subdomain kase
3. Subdomain kase dikonfigurasi supaya nunjuk marang direktori utama (root directory) sampeyan

## Cathetan Penting

- Integrasi iki nganggo API2 saka cPanel kanggo komunikasi karo akun cPanel panjenengan
- Akun cPanel panjenengan kudu duwe izin kanggo nambah addon domains lan subdomain
- Sawetara penyedia hosting mungkin mbates jumlah addon domain utawa subdomain sing bisa sampeyan gawe
- Integrasi iki ora ngurus konfigurasi DNS; sampeyan isih perlu nunjukake domain marang IP address server panjenengan

## Pemecahan Masalah (Troubleshooting)

### Masalah Koneksi API
- Verifikasi yen username lan password cPanel panjenengan bener
- Cek yen host cPanel panjenengan bener lan bisa diakses
- Pastikan akun cPanel panjenengan duwe izin sing dibutuhake
- Coba nganggo URL lengkap kanggo host (contone, `https://cpanel.yourdomain.com`)

### Domain Ora Ditambah
- Cek log Ultimate Multisite kanggo pesan error apa wae
- Verifikasi yen domain kase durung ana ing cPanel
- Pastikan akun cPanel panjenengan ora wis nggoleki batas kanggo addon domains utawa subdomain

### Masalah Sertifikat SSL
- Integrasi iki ora ngurus penerbitan sertifikat SSL.
- Kowe bakal perlu nggunakake alat SSL/TLS saka cPanel utawa fitur AutoSSL kanggo nggawe sertifikat SSL kanggo domainmu.
- Alternatifé, kowe bisa nggunakake layanan kaya Let's Encrypt karo AutoSSL saka cPanel.
