---
title: Integrasi Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Integrasi Hostinger (hPanel) {#hostinger-hpanel-integration}

## Gambaran Umum {#overview}

Hostinger téh penyedia hosting web anu populer jeung ngagaduhan panel kontrol modérn ngaranna hPanel. Integrasi Ultimate Multisite Hostinger ngabantu ngajadikeun sinkronisasi domain otomatis antara Ultimate Multisite jeung hPanel Hostinger, jadi anjeun bisa ngatur pemetaan domain je subdomain sacara otomatis langsung tina admin WordPress anjeun.

## Fitur-fitur {#features}

- Ngadamel addon domain otomatis di hPanel
- Ngadamel subdomain otomatis di hPanel (pikeun instalasi subdomain multisite)
- Ngabersihkeun domain lamun pemetaan dihapus
- Integrasi lancar jeung API manajemen domain hPanel

## Persyaratan {#requirements}

Kanggo ngagunake integrasi Hostinger, anjeun peryogi:

1. Akun Hostinger anu gaduh akses ka hPanel
2. Token API tina Hostinger
3. Konstanta di handap dina file `wp-config.php` anjeun:

```php
define('WU_HOSTINGER_API_TOKEN', 'token_api_hostinger_anjeun');
define('WU_HOSTINGER_ACCOUNT_ID', 'id_akun_hostinger_anjeun');
```

Secara pilihan, anjeun ogé bisa ngadéfinisikeun:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Endpoint API default
```

## Panduan Setup {#setup-instructions}

### 1. Ngajadikeun Token API Hostinger Anjeun {#1-generate-your-hostinger-api-token}

1. *Log in* ka akun Hostinger anjeun jeung akses hPanel
2. Pindah ka **Account Settings** → **API Tokens**
3. Klik **Create New Token**
4. Munkeun ngaran anu deskriptif pikeun token anjeun (misal: "Ultimate Multisite")
5. Pilih izin anu dipikahoyong:
   - Domain management
   - Subdomain management
6. Salin token anu geus didamel jeung simpan sacara aman

### 2. Néangan ID Akun Anjeun {#2-find-your-account-id}

1. Di hPanel, pindah ka **Account Settings** → **Account Information**
2. ID Akun anjeun bakal muncul di halaman éta
3. Salin je simpan ID ieu pikeun langkah salajengna

### 3. Nambahan Konstanta dina wp-config.php {#3-add-constants-to-wp-configphp}

Tambahan konstanta di handap kana file `wp-config.php` anjeun:

```php
define('WU_HOSTINGER_API_TOKEN', 'token api hostinger anjeun');
define('WU_HOSTINGER_ACCOUNT_ID', 'id akun hostinger anjeun');
```

Upami akun Hostinger anjeun nganggo endpoint API anu béda, anjeun tiasa ngarobahna:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Aktifkeun Integrasi {#4-enable-the-integration}

1. Di admin WordPress anjeun, ka **Ultimate Multisite > Settings** indit.
2. Pindah ka tab **Domain Mapping**.
3. Scroll turun ka **Host Integrations**.
4. Aktifkeun integrasi **Hostinger (hPanel)**.
5. Klik **Save Changes**.

## Kumaha Cara Kerjanya {#how-it-works}

### Addon Domains {#addon-domains}

Lamun anjeun map domain di Ultimate Multisite:

1. Integrasi bakal ngirim permintaan ka API Hostinger pikeun nambahan domain éta salaku addon domain.
2. Domain téh dikonfigurasi pikeun nunjukkeun ka direktori root anjeun.
3. Lamun mapping domain dihapus, integrasi bakal otomatis ngahapus addon domain tina hPanel.

### Subdomains {#subdomains}

Kanggo instalasi subdomain multisite, lamun situs anyar dibentuk:

1. Integrasi bakal nyokot bagian subdomain tina domain sapenuhna.
2. Integrasi ngirim permintaan ka API Hostinger pikeun nambahan subdomain éta.
3. Subdomain téh dikonfigurasi pikeun nunjukkeun ka direktori root anjeun.

## Catatan Penting {#important-notes}

- Integrasi ieu ngagunake REST API Hostinger pikeun komunikasi jeung akun anjeun.
- API token anjeun kudu boga ijin anu merlukeun kanggo ngatur domain je subdomain.
- Integrasi ieu teu ngurus konfigurasi DNS; domain geus kudu nunjukkeun ka akun Hostinger anjeun.
- Permintaan API dilakukeun sacara aman ngaliwatan HTTPS.
- Jaga token API anjeun sangkan aman tur ulah pernah bagi ka umum.

## Troubleshooting {#troubleshooting}

### Masalah Koneksi API {#api-connection-issues}

- Pastike yén API token anjeun bener je sareng teu kedaluwarsa
- Cek yén Account ID anjeun bener
- Pastike yén API token anjeun gaduh izin anu dipiharep kanggo ngatur domain
- Pastike akun Hostinger anjeun aktif sareng dina kaayaan anu saé

### Domain Belum Ditambah {#domain-not-added}

- Cek log Ultimate Multisite pikeun aya pesan error
- Pastike domain éta teu acan ditambihan dina akun Hostinger anjeun
- Pastike akun Hostinger anjeun teu ngahontal batasna kanggo addon domains
- Konfirmasi yén domain geus dipindah (pointed) kalayan bener ka nameserver Hostinger anjeun

### Masalah Sertifikat SSL {#ssl-certificate-issues}

- Integrasi éta teu ngurus penerbitan sertifikat SSL
- Biasana Hostinger méré sertifikat SSL gratis ngaliwatan AutoSSL
- Anjeun tiasa ngatur sertifikat SSL langsung di hPanel dina bagian **SSL/TLS**
- Atanapi, manfaatkan Let's Encrypt kalayan fitur AutoSSL tina Hostinger

## Dukungan (Support) {#support}

Kanggo bantuan tambahan ngeunaan integrasi Hostinger, punten merujuk kana:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
