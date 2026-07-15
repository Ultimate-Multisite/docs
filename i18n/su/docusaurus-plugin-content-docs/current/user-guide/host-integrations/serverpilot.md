---
title: Integrasi ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Integrasi ServerPilot

## Gambaran Umum {#overview}
ServerPilot téh layanan cloud pikeun ngajang WordPress je situs PHP séjén dina server di DigitalOcean, Amazon, Google, atawa penyedia server séjénna. Integrasi ieu ngabantu sinkronisasi domain otomatis je ngaturan sertifikat SSL antara Ultimate Multisite je ServerPilot.

## Fitur {#features}
- Sinkronisasi domain otomatis
- Ngatur sertifikat SSL kalawan Let's Encrypt
- Perpanjangan SSL otomatis

## Persyaratan {#requirements}
Konstanta di handap kudu didéfinisike dina file `wp-config.php` anjeun:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Petunjuk Setup {#setup-instructions}

### 1. Béré Kredensial API ServerPilot Anjeun {#1-get-your-serverpilot-api-credentials}

1. *Log in* ka dashboard ServerPilot anjeun
2. Pindah ka "Account" > "API"
3. Béré kunci API anyar lamun anjeun teu boga
4. Salin Client ID je API Key anjeun

### 2. Béré App ID Anjeun {#2-get-your-app-id}

1. Dina dashboard ServerPilot anjeun, pindah ka "Apps"
2. Pilih aplikasi di mana multisite WordPress anjeun di-host
3. App ID bisa dipikawanoh dina URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Tambah Konstanta ka wp-config.php {#3-add-constants-to-wp-configphp}

Tambahan konstanta handap kana file `wp-config.php` anjeun:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Aktifkeun Integrasi {#4-enable-the-integration}

1. Dina admin WordPress anjeun, pindah ka Ultimate Multisite > Settings
2. Pindah ka tab "Domain Mapping"
3. Gulirkeun ka handap kana bagian "Host Integrations"
4. Aktifkeun integrasi ServerPilot
5. Klik "Save Changes"

## Kumaha Cara Kerjanya {#how-it-works}

### Sinkronisasi Domain {#domain-syncing}

Lamun domain di-map dina Ultimate Multisite:

1. Integrasi ieu ngagoleukkeun daftar domain ayeuna ti ServerPilot
2. Ieu nambahan domain anyar kana daftar (sareng aya versi www lamun dipiharep)
3. Ieu ngirimkeun daftar anu diupdate ka ServerPilot via API
4. ServerPilot bakal ngabaharake daftar domain pikeun aplikasi anjeun

### Ngatur Sertifikat SSL {#ssl-certificate-management}

Sanggeus domain disinkronisasi:

1. Integrasi otomatis ngaktifkeun AutoSSL pikeun aplikasi anjeun
2. ServerPilot ngurus pangawetan jeung pemasangan sertifikat SSL maké Let's Encrypt
3. ServerPilot ogé ngurus panambahan ulang (renewal) sertifikat SSL secara otomatis

## Verifikasi Sertifikat SSL {#ssl-certificate-verification}

Integrasi diatur sangkan jumlah upaya verifikasi sertifikat SSL pikeun ServerPilot dilebokkeun, sabab bisa butuh waktu kanggo ServerPilot ngaluarkeun jeung ngalaksanakeun sertifikat SSL. Biasana, éta bakal nyobaan nepi ka 5 kali, tapi ieu bisa diubah maké filter.

## Troubleshooting {#troubleshooting}

### Masalah Koneksi API {#api-connection-issues}
- Pastike Client ID jeung API Key anjeun bener
- Cek yén App ID anjeun bener
- Pastike akun ServerPilot anjeun boga ijin anu dipiharep

### Masalah Sertifikat SSL {#ssl-certificate-issues}
- ServerPilot ngarepkeun domain kudu boga DNS record anu sah nunjuk ka server anjeun samémé ngaluarkeun sertifikat SSL
- Lamun sertifikat SSL teu dialuarkeun, cek yén domain anjeun bener nunjuk ka IP address server anjeun
- Bisa butuh waktu kanggo ServerPilot ngaluarkeun jeung ngalaksanakeun sertifikat SSL (biasana 5-15 menit)

### Domain Teu Ditambah {#domain-not-added}
- Cek log Ultimate Multisite pikeun aya pesan error
- Pastike domain éta teu geus ditambahan di ServerPilot
- Pastike paket ServerPilot anjeun bisa nyokot jumlah domain anu rék anjeun tambihan

### Ngabersihkeun Domain {#domain-removal}

- Ayeuna mah, ServerPilot API teu boga cara pikeun ngabersihkeun domain-domain hiji-hijina.
- Lamun mapping domain dihapus dina Ultimate Multisite, integrasi éta bakal ngarobah daftár domain di ServerPilot sangkan domain anu geus dihapus jadi teu aya deui.
