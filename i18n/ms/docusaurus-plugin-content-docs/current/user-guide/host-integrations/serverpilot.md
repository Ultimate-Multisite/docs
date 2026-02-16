---
title: Integrasi ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Integrasi ServerPilot

## Gambaran Keseluruhan
ServerPilot ialah perkhidmatan awan untuk mengehoskan WordPress dan laman web PHP lain pada pelayan di DigitalOcean, Amazon, Google, atau mana-mana penyedia pelayan lain. Integrasi ini membolehkan penyegerakan domain secara automatik dan pengurusan sijil SSL antara Ultimate Multisite dan ServerPilot.

## Ciri-ciri
- Penyegerakan domain secara automatik
- Pengurusan sijil SSL dengan Let's Encrypt
- Pembaharuan SSL secara automatik

## Keperluan
Pemalar berikut mesti ditakrifkan dalam fail `wp-config.php` anda:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Arahan Persediaan

### 1. Dapatkan Kelayakan API ServerPilot Anda

1. Log masuk ke dashboard ServerPilot anda
2. Pergi ke "Account" > "API"
3. Cipta kunci API baharu jika anda belum mempunyainya
4. Salin Client ID dan API Key anda

### 2. Dapatkan App ID Anda

1. Dalam dashboard ServerPilot anda, pergi ke "Apps"
2. Pilih aplikasi di mana multisite WordPress anda dihoskan
3. App ID boleh dilihat dalam URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Tambah Pemalar ke wp-config.php

Tambahkan pemalar berikut ke dalam fail `wp-config.php` anda:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Aktifkan Integrasi

1. Dalam admin WordPress anda, pergi ke Ultimate Multisite > Settings
2. Navigasi ke tab "Domain Mapping"
3. Tatal ke bawah ke "Host Integrations"
4. Aktifkan integrasi ServerPilot
5. Klik "Save Changes"

## Cara Ia Berfungsi

### Penyegerakan Domain

Apabila domain dipetakan dalam Ultimate Multisite:

1. Integrasi ini mendapatkan senarai domain semasa daripada ServerPilot
2. Ia menambah domain baharu ke dalam senarai (bersama dengan versi www jika berkenaan)
3. Ia menghantar senarai yang dikemas kini ke ServerPilot melalui API
4. ServerPilot mengemas kini senarai domain untuk aplikasi anda

### Pengurusan Sijil SSL

Selepas domain disegerakkan:

1. Integrasi ini secara automatik mengaktifkan AutoSSL untuk aplikasi anda
2. ServerPilot menguruskan pengeluaran dan pemasangan sijil SSL menggunakan Let's Encrypt
3. ServerPilot juga menguruskan pembaharuan sijil SSL secara automatik

## Pengesahan Sijil SSL

Integrasi ini dikonfigurasikan untuk meningkatkan bilangan percubaan pengesahan sijil SSL untuk ServerPilot, kerana ServerPilot mungkin mengambil sedikit masa untuk mengeluarkan dan memasang sijil SSL. Secara lalai, ia akan mencuba sehingga 5 kali, tetapi ini boleh diselaraskan menggunakan filter.

## Penyelesaian Masalah

### Isu Sambungan API
- Pastikan Client ID dan API Key anda betul
- Semak bahawa App ID anda betul
- Pastikan akaun ServerPilot anda mempunyai kebenaran yang diperlukan

### Isu Sijil SSL
- ServerPilot memerlukan domain mempunyai rekod DNS yang sah yang menghala ke pelayan anda sebelum mengeluarkan sijil SSL
- Jika sijil SSL tidak dikeluarkan, semak bahawa domain anda menghala dengan betul ke alamat IP pelayan anda
- ServerPilot mungkin mengambil sedikit masa untuk mengeluarkan dan memasang sijil SSL (biasanya 5-15 minit)

### Domain Tidak Ditambah
- Semak log Ultimate Multisite untuk sebarang mesej ralat
- Pastikan domain belum ditambah ke ServerPilot
- Pastikan pelan ServerPilot anda menyokong bilangan domain yang anda tambahkan

### Pembuangan Domain
- Buat masa ini, API ServerPilot tidak menyediakan cara untuk membuang domain secara individu
- Apabila pemetaan domain dibuang dalam Ultimate Multisite, integrasi ini akan mengemas kini senarai domain dalam ServerPilot untuk mengecualikan domain yang dibuang
