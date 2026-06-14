---
title: Integrasi RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Integrasi RunCloud

## Gambaran Umum
RunCloud kuwi platform manajemen server berbasis cloud sing ngomongake carane sampeyan gampang nggolek lan ngatur aplikasi web ing server cloud dhewe. Integrasi iki bisa gawe sinkronisasi domain otomatis lan ngatur sertifikat SSL antar Ultimate Multisite lan RunCloud.

## Fitur
- Sinkronisasi domain otomatis
- Manajemen sertifikat SSL
- Penghapusan domain nalika pemetaan (mappings) dihapus

## Persyaratan
Konstanta-konstanta iki kudu didefinisikake ing file `wp-config.php` sampeyan:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Instruksi Setup

### 1. Dapatkan Kredensial API RunCloud Sampeyan

1. Masuk menyang dashboard RunCloud sampeyan
2. Tindakake "User Profile" (klik foto profilmu ing pojok tengene)
3. Pilih "API" saka menu
4. Klik "Generate API Key" yen sampeyan durung duwe
5. Salin API Key lan API Secret sampeyan

### 2. Dapatkan ID Server lan Aplikasi Sampeyan

1. Ing dashboard RunCloud sampeyan, tindakake "Servers"
2. Pilih server sing di-hosting WordPress multisite sampeyan
3. Server ID bisa ditemokake ing URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Tindakake "Web Applications" lan pilih aplikasi WordPress sampeyan
5. App ID bisa ditemokake ing URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Tambah Konstanta ing wp-config.php

Tambahkan konstanta-konstanta iki menyang file `wp-config.php` sampeyan:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Aktifke Integrasi

1. Ing admin WordPress sampeyan, tindakake menyang Ultimate Multisite > Settings
2. Tindakake menyang tab "Domain Mapping"
3. Gulir nedhus nganti "Host Integrations"
4. Aktifke integrasi RunCloud
5. Klik "Save Changes"

## Cara Kerjane

Nalika domain di-map ing Ultimate Multisite:

1. Integrasi kuwi bakal ngirim request menyang API RunCloud kanggo nambah domain kuwi nang aplikasi sampeyan
2. Yen domain kase sukses ditambahi, integrasi kuwi uga bakal nge-deploy ulang SSL certificates
3. Nalika mapping domain dihilangi, integrasi kuwi bakal ngilangake domain saka RunCloud

Kanggo instalasi subdomain, integrasi kuwi bakal otomatis ngurus pembuatan subdomain ing RunCloud nalika situs anyar ditambah nang jaringan sampeyan.

## Troubleshooting

### Masalah Koneksi API
- Pastikan kredensial API sampeyan bener
- Cek yen server lan app ID sampeyan bener
- Pastikan akun RunCloud sampeyan duwe izin sing dibutuhake

### Masalah SSL Certificate
- RunCloud mungkin butuh wektu kanggo ngeluarkan SSL certificates
- Verifikasi yen domain sampeyan wis nunjuk kanthi bener menyang IP address server sampeyan
- Cek pengaturan SSL RunCloud kanggo aplikasi sampeyan

### Domain Ora Ditambahi
- Cek log Ultimate Multisite kanggo pesan error apa wae
- Pastikan domain kuwi ora wis ditambahi ing RunCloud
- Pastikan rencana RunCloud sampeyan duwe dukungan kanggo akeh domain
