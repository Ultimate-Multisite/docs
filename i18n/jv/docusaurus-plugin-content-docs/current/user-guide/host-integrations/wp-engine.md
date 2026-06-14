---
title: Integrasi WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integrasi WP Engine

## Gambaran Umum
WP Engine iku platform hosting WordPress premium sing nyedhiyakake performa optimal, keamanan, lan skalabilitas kanggo situs WordPressmu. Integrasi iki bisa nggawe sinkronisasi domain otomatis antara Ultimate Multisite lan WP Engine.

## Fitur-fitur
- Sinkronisasi domain otomatis
- Dukungan subdomain kanggo instalasi multisite
- Integrasi mulus karo sistem WP Engine sing wis ana

## Persyaratan
Integrasi iki bakal ngdeteksi otomatis yen sampeyan hosting ing WP Engine lan nggunakake API WP Engine sing wis ana. Ora perlu konfigurasi tambahan yen plugin WP Engine aktif lan dikonfigurasi kanthi bener.

Nanging, yen sampeyan perlu ngatur integrasi manual, sampeyan bisa definisikake salah siji konstanta iki ing file `wp-config.php` mu:

```php
define('WPE_APIKEY', 'your_api_key'); // Cara sing paling disaranake
// ATAU
define('WPE_API', 'your_api_key'); // Cara alternatif
```

## Instruksi Setup

### 1. Verifikasi Plugin WP Engine

Yen sampeyan hosting ing WP Engine, plugin WP Engine wis kudune terpasang lan aktif. Verifikasi yen:

1. Plugin WP Engine wis aktif
2. File `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` ana

### 2. Aktifake Integrasi

1. Ing admin WordPress mu, tindakake Ultimate Multisite > Settings
2. Tindakake tab "Domain Mapping"
3. Gulir nedho nganti "Host Integrations"
4. Aktifake integrasi WP Engine
5. Klik "Save Changes"

## Cara Kerjane

### Sinkronisasi Domain

Nalika domain di-map ing Ultimate Multisite:

1. Integrasi nggunakake WP Engine API kanggo nambah domain menyang instalasi WP Engine mu
2. WP Engine ngurus konfigurasi domain lan penerbitan sertifikat SSL
3. Nalika pemetaan domain dihapus, integrasi bakal ngapus domain saka WP Engine

### Dukungan Subdomain

Kanggo kanggo instalasi subdomain multisite:

1. Integrasi iki nambah saben subdomain menyang WP Engine nalika situs anyar digawe.
2. WP Engine bakal ngurus konfigurasi subdomain kuwi.
3. Nalika situs dihapus, integrasi iki bakal ngilangake subdomain saka WP Engine.

## Cathetan Penting

### Domain Wildcard

Kanggo instalasi subdomain multisite, lumaku banget yen sampeyan hubungi dukungan WP Engine kanggo njaluk konfigurasi domain wildcard. Iki bakal nggawe kabeh subdomain bisa kerja otomatis tanpa perlu nambah saben siji kanthi manual.

### Sertifikat SSL

WP Engine bakal ngurus penerbitan lan pembaruan sertifikat SSL otomatis kanggo kabeh domain sing ditambahi liwat integrasi iki. Ora perlu konfigurasi tambahan.

## Pemecahan Masalah (Troubleshooting)

### Masalah Koneksi API
- Pastikan plugin WP Engine wis aktif lan dikonfigurasi kanthi bener.
- Yen sampeyan wis nentokake kunci API manual, cek yen iku bener.
- Hubungi dukungan WP Engine yen sampeyan nemokake masalah karo API.

### Domain Ora Ditambahi
- Cek log Ultimate Multisite kanggo pesan error apa wae sing ana.
- Pastikan domain kuwi durung ditambahi ing WP Engine.
- Pastikan paket WP Engine sampeyan ndukung jumlah domain sing arep sampeyan tambahi.

### Masalah Subdomain
- Yen subdomain ora bisa kerja, hubungi dukungan WP Engine kanggo njaluk konfigurasi domain wildcard.
- Verifikasi yen pengaturan DNS sampeyan wis bener kanggo domain utama lan subdomain-subdomain.
