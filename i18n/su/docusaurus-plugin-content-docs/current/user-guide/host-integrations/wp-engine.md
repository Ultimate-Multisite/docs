---
title: Integrasi WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integrasi WP Engine

## Gambaran Umum
WP Engine téh platform hosting WordPress premium anu ngajamin kinerja nu optimal, keamanan, jeung skalabilitas pikeun situs WordPress anjeun. Integrasi ieu ngabantu sinkronisasi domain otomatis antara Ultimate Multisite jeung WP Engine.

## Fitur-fitur
- Sinkronisasi domain otomatis
- Dukungan subdomain pikeun instalasi multisite
- Integrasi lancar jeung sistem WP Engine anu geus aya

## Persyaratan
Integrasi ieu bakal ngadeukeutan lamun anjeun hosting di WP Engine jeung maké API WP Engine nu geus aya. Teu perlu konfigurasi tambahan mun plugin WP Engine geus aktif jeung dikonfigurasi bener.

Nanging, upami anjeun peryogi ngatur integrasi sacara manual, anjeun bisa ngadéfinisike salah sahiji konstanta ieu dina file `wp-config.php` anjeun:

```php
define('WPE_APIKEY', 'your_api_key'); // Cara anu dipikaresepkeun
// ATAU
define('WPE_API', 'your_api_key'); // Cara alternatif
```

## Petunjuk Setup

### 1. Verifikasi Plugin WP Engine

Lamun anjeun hosting di WP Engine, plugin WP Engine geus kedah dipasang jeung diaktifkeun. Tiasa verifikasi yén:

1. Plugin WP Engine geus aktif
2. File `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` aya

### 2. Aktifkeun Integrasi

1. Di admin WordPress anjeun, ka Ultimate Multisite > Settings
2. Pindah ka tab "Domain Mapping"
3. Gulirkeun ka bagian "Host Integrations"
4. Aktifkeun integrasi WP Engine
5. Klik "Save Changes"

## Kumaha Cara Kerjanya

### Sinkronisasi Domain

Lamun hiji domain di-map dina Ultimate Multisite:

1. Integrasi ngagunake API WP Engine pikeun nambahan domain éta ka instalasi WP Engine anjeun
2. WP Engine ngurus konfigurasi domain jeung penerbitan sertifikat SSL
3. Lamun mapping domain dihapus, integrasi bakal ngahapus domain tina WP Engine

### Dukungan Subdomain

Kanggo kanggo instalasi subdomain multisite:

1. Integrasi ieu nambahan unggal subdomain ka WP Engine nalika situs anyar diciptake.
2. WP Engine ngurus konfigurasi subdomain.
3. Nalika situs dihapus, integrasi ieu bakal ngahapus subdomain tina WP Engine.

## Catatan Penting

### Domain Wildcard

Kanggo instalasi subdomain multisite, disaranke pisan kanggo ngontak dukungan WP Engine pikeun ménta konfigurasi domain wildcard. Ieu ngajadikeun sakabéh subdomain bisa nyaho otomatis tanpa perlu nambahan unggal hiji-hijina.

### Sertifikat SSL

WP Engine bakal ngurus penerbitan jeung pangwangunan (renewal) sertifikat SSL otomatis pikeun sakabéh domain anu ditambihan ngaliwatan integrasi ieu. Teu peryogi konfigurasi tambahan.

## Troubleshooting

### Masalah Koneksi API
- Pastike plugin WP Engine aktif jeung dikonfigurasi kalayan bener.
- Upami anjeun geus nentuke konci API (API key) sacara manual, cek yén éta bener.
- Hubungi dukungan WP Engine upami anjeun nempo masalah sareng API.

### Domain Teu Ditambihan
- Cek log Ultimate Multisite pikeun aya pesan error naon waé.
- Pastike domain geus teu ditambihan ka WP Engine.
- Pastike rencana (plan) WP Engine anjeun mendukung jumlah domain anu keur ditambihan.

### Masalah Subdomain
- Upami subdomain teu nyaho, hubungi dukungan WP Engine pikeun ménta konfigurasi domain wildcard.
- Pastike pengaturan DNS anjeun geus dikonfigurasi kalayan bener kanggo domain utama jeung subdomainna.
