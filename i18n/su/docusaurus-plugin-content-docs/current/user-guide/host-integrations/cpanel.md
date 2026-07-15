---
title: Integrasi cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integrasi cPanel

## Gambaran Umum {#overview}
cPanel téh salah sahiji panel kontrol web anu paling dipikaresep ku loba penyedia hosting *shared* jeung *dedicated*. Integrasi ieu ngabantu sinkronisasi domain otomatis antara Ultimate Multisite jeung cPanel, jadi anjeun bisa otomatis nambahan alias domain jeung subdomain ka akun cPanel anjeun.

## Fitur {#features}
- Ngadamel addon domain otomatis di cPanel
- Ngadamel subdomain otomatis di cPanel (pikeun instalasi subdomain multisite)
- Ngabersihkeun domain lamun *mapping*-na dihapus

## Persyaratan {#requirements}
Konstanta ieu kudu didéfinisike dina file `wp-config.php` anjeun:

```php
define('WU_CPANEL_USERNAME', 'username_cpanel_anjeun');
define('WU_CPANEL_PASSWORD', 'password_cpanel_anjeun');
define('WU_CPANEL_HOST', 'host_cpanel_anjeun');
```

Secara pilihan, anjeun ogé bisa ngadéfinisike:

```php
define('WU_CPANEL_PORT', 2083); // *Default*-na 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // *Default*-na /public_html
```

## Petunjuk Setup {#setup-instructions}

### 1. Tongkolkeun Kredensial cPanel Anjeun {#1-get-your-cpanel-credentials}

1. Awakdoke *username* jeung *password* cPanel anjeun ti penyedia hosting anjeun
2. Tentukan host cPanel anjeun (biasana `cpanel.yourdomain.com` atawa `yourdomain.com:2083`)

### 2. Tambah Konstanta ka wp-config.php {#2-add-constants-to-wp-configphp}

Tambahan konstanta di handap kana file `wp-config.php` anjeun:

```php
define('WU_CPANEL_USERNAME', 'username_cpanel_anjeun');
define('WU_CPANEL_PASSWORD', 'password_cpanel_anjeun');
define('WU_CPANEL_HOST', 'host_cpanel_anjeun');
```

Secara pilihan, anjeun bisa ngarobah *port* jeung *root directory*:

```php
define('WU_CPANEL_PORT', 2083); // Robah lamun cPanel anjeun nganggo port anu béda
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Robah lamun *document root*-na béda
```

### 3. Aktifkeun Integrasi {#3-enable-the-integration}

1. Di admin WordPress anjeun, uluk ka Ultimate Multisite > Settings
2. Lanjut ka tab "Domain Mapping"
3. Scroll turun ka "Host Integrations"
4. Aktifkeun integrasi cPanel
5. Klik "Save Changes"

## Kumaha Cara Naonna {#how-it-works}

### Addon Domains {#addon-domains}

Lamun hiji domain dipetakan dina Ultimate Multisite:

1. Integrasi téh ngirim permintaan ka API cPanel pikeun nambahan domain éta salaku addon domain
2. Domain téh dikonfigurasi pikeun nunjukkeun ka direktori root anjeun
3. Lamun pemetaan domain dileupaskeun, integrasi bakal ngahapus addon domain tina cPanel

### Subdomains {#subdomains}

Kanggo instalasi subdomain multisite, lamun situs anyar ditangtukeun:

1. Integrasi téh nyokot bagian subdomain tina domain sapoe
2. Manéhna ngirim permintaan ka API cPanel pikeun nambahan subdomain éta
3. Subdomain téh dikonfigurasi pikeun nunjukkeun ka direktori root anjeun

## Catatan Penting {#important-notes}

- Integrasi téh ngagunake API2 cPanel pikeun komunikasi jeung akun cPanel anjeun
- Akun cPanel anjeun kudu boga ijin pikeun nambahan addon domain je subdomain
- Sababaraha penyedia hosting mungkin ngabatas jumlah addon domain atawa subdomain anu bisa dipikawanoh ku anjeun
- Integrasi téh teu ngurus konfigurasi DNS; anjeun tetep kedah nunjukkeun domain anjeun ka alamat IP server anjeun

## Troubleshooting {#troubleshooting}

### Masalah Koneksi API {#api-connection-issues}
- Verifikasi yén username je password cPanel anjeun bener
- Cek yén host cPanel anjeun bener je bisa diakses
- Pastike akun cPanel anjeun boga ijin anu dipiharep
- Cobaan nganggo URL lengkap pikeun host (contona: `https://cpanel.yourdomain.com`)

### Domain Teu Ditambah {#domain-not-added}
- Cek log Ultimate Multisite kanggo aya pesan error naon waé
- Verifikasi yén domain éta teu geus ditambahan di cPanel
- Pastike akun cPanel anjeun teu nepi ka batasna pikeun addon domain atawa subdomain

### Masalah Sertifikat SSL {#ssl-certificate-issues}
- Integrasi ieu teu ngurus penerbitan sertifikat SSL.
- Anjeun bakal kedah nganggo alat SSL/TLS di cPanel atawa fitur AutoSSL pikeun méré sertifikat SSL kanggo domain anjeun.
- Salianna, anjeun ogé bisa nganggo layanan saperti Let's Encrypt kalawan AutoSSL ti cPanel.
