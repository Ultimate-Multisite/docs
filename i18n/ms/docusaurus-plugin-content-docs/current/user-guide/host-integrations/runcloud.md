---
title: Integrasi RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Integrasi RunCloud

## Gambaran Keseluruhan
RunCloud ialah platform pengurusan pelayan berasaskan awan yang membolehkan anda menyediakan dan menguruskan aplikasi web pada pelayan awan anda sendiri dengan mudah. Integrasi ini membolehkan penyegerakan domain secara automatik dan pengurusan sijil SSL antara Ultimate Multisite dan RunCloud.

## Ciri-ciri
- Penyegerakan domain secara automatik
- Pengurusan sijil SSL
- Pembuangan domain apabila pemetaan dipadam

## Keperluan
Pemalar berikut perlu ditakrifkan dalam fail `wp-config.php` anda:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Arahan Persediaan

### 1. Dapatkan Kelayakan API RunCloud Anda

1. Log masuk ke dashboard RunCloud anda
2. Pergi ke "User Profile" (klik pada gambar profil anda di sudut kanan atas)
3. Pilih "API" daripada menu
4. Klik "Generate API Key" jika anda belum mempunyainya
5. Salin API Key dan API Secret anda

### 2. Dapatkan ID Pelayan dan Aplikasi Anda

1. Dalam dashboard RunCloud anda, pergi ke "Servers"
2. Pilih pelayan di mana WordPress multisite anda dihoskan
3. Server ID boleh dilihat dalam URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Pergi ke "Web Applications" dan pilih aplikasi WordPress anda
5. App ID boleh dilihat dalam URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Tambah Pemalar ke wp-config.php

Tambah pemalar berikut ke dalam fail `wp-config.php` anda:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Aktifkan Integrasi

1. Dalam admin WordPress anda, pergi ke Ultimate Multisite > Settings
2. Navigasi ke tab "Domain Mapping"
3. Tatal ke bawah ke "Host Integrations"
4. Aktifkan integrasi RunCloud
5. Klik "Save Changes"

## Cara Ia Berfungsi

Apabila domain dipetakan dalam Ultimate Multisite:

1. Integrasi ini menghantar permintaan ke API RunCloud untuk menambah domain ke aplikasi anda
2. Jika domain berjaya ditambah, integrasi juga akan menyediakan semula sijil SSL
3. Apabila pemetaan domain dibuang, integrasi akan membuang domain tersebut daripada RunCloud

Untuk pemasangan subdomain, integrasi ini akan mengendalikan penciptaan subdomain dalam RunCloud secara automatik apabila laman baru ditambah ke rangkaian anda.

## Penyelesaian Masalah

### Masalah Sambungan API
- Pastikan kelayakan API anda adalah betul
- Semak bahawa ID pelayan dan aplikasi anda adalah betul
- Pastikan akaun RunCloud anda mempunyai kebenaran yang diperlukan

### Masalah Sijil SSL
- RunCloud mungkin mengambil sedikit masa untuk mengeluarkan sijil SSL
- Pastikan domain anda ditujukan dengan betul ke alamat IP pelayan anda
- Semak tetapan SSL RunCloud untuk aplikasi anda

### Domain Tidak Ditambah
- Semak log Ultimate Multisite untuk sebarang mesej ralat
- Pastikan domain tersebut belum ditambah ke RunCloud
- Pastikan pelan RunCloud anda menyokong pelbagai domain
