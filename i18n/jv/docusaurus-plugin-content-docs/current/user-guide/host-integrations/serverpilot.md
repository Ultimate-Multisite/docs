---
title: Integrasi ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Integrasi ServerPilot

## Gambaran Umum
ServerPilot iku layanan cloud kanggo ng-hosting WordPress lan website PHP liyane ing server saka DigitalOcean, Amazon, Google, utawa penyedia server liyane. Integrasi iki bisa nggawe sinkronisasi domain otomatis lan pengelolaan sertifikat SSL antar Ultimate Multisite lan ServerPilot.

## Fitur
- Sinkronisasi domain otomatis
- Pengelolaan sertifikat SSL nganggo Let's Encrypt
- Perpanjangan SSL otomatis

## Persyaratan
Konstanta-konstanta iki kudu didefinisikake ing file `wp-config.php` sampeyan:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Instruksi Setup

### 1. Dapatkan Kredensial API ServerPilot Sampeyan

1. Masuk menyang dashboard ServerPilot sampeyan
2. Tindakake "Account" > "API"
3. Buat kunci API anyar yen sampeyan durung duwe
4. Salin Client ID lan API Key sampeyan

### 2. Dapatkan App ID Sampeyan

1. Ing dashboard ServerPilot sampeyan, tindakake "Apps"
2. Pilih aplikasi sing di-hosting WordPress multisite sampeyan
3. App ID bisa ditemokake ing URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Tambah Konstanta menyang wp-config.php

Tambahkan konstanta-konstanta iki menyang file `wp-config.php` sampeyan:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Aktifke Integrasi

1. Ing admin WordPress sampeyan, tindakake Ultimate Multisite > Settings
2. Tindakake tab "Domain Mapping"
3. Gulung ngisor menyang "Host Integrations"
4. Aktifke integrasi ServerPilot
5. Klik "Save Changes"

## Cara Kerjane

### Sinkronisasi Domain

Nalika domain di-map ing Ultimate Multisite:

1. Integrasi iki njupuk daftar domain saiki saka ServerPilot
2. Iki nambah domain anyar menyang daftar (barengan karo versi www yen ana)
3. Iki ngirim daftar sing wis diupdate menyang ServerPilot liwat API
4. ServerPilot bakal ngupdate daftar domain kanggo aplikasi sampeyan

### Pengelolaan Sertifikat SSL

Sawise domain sinkron:

1. Integrasi otomatis ngaktifake AutoSSL kanggo aplikasi sampeyan
2. ServerPilot bakal ngurus penerbitan lan instalasi sertifikat SSL nganggo Let's Encrypt
3. ServerPilot uga ngurus pembaruan otomatis sertifikat SSL

## Verifikasi Sertifikat SSL

Integrasi iki dikonfigurasi supaya nambah jumlah upaya verifikasi sertifikat SSL kanggo ServerPilot, amarga bisa suwe kanggo ServerPilot menehi lan instalasi sertifikat SSL. Biasane, dheweke bakal nyoba maksimal 5 kali, nanging iki bisa diatur nganggo filter.

## Pemecahan Masalah (Troubleshooting)

### Masalah Koneksi API
- Pastikan Client ID lan API Key sampeyan bener
- Cek yen App ID sampeyan bener
- Pastikan akun ServerPilot sampeyan duwe izin sing dibutuhake

### Masalah Sertifikat SSL
- ServerPilot mbutuhake domain duwe catatan DNS sing sah nyambung menyang server sampeyan sadurunge menehi sertifikat SSL
- Yen sertifikat SSL ora diwenehake, cek yen domain sampeyan wis bener nyambung menyang alamat IP server sampeyan
- Bisa suwe kanggo ServerPilot menehi lan instalasi sertifikat SSL (biasane 5-15 menit)

### Domain Ora Ditambah
- Cek log Ultimate Multisite kanggo pesan error apa wae
- Pastikan domain kuwi durung ana ing ServerPilot
- Pastikan paket ServerPilot sampeyan duwe dukung jumlah domain sing arep sampeyan tambahi

### Penghapusan Domain
- Saiki, API ServerPilot ora duwe cara kanggo ngapus domain per domain.
- Nalika pemetaan domain dihapus ing Ultimate Multisite, integrasi kasebut bakal ngupdate daftar domain ing ServerPilot supaya domain sing wis dihapus kuwi ora ana maneh.
