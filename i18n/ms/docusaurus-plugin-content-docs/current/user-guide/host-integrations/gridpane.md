---
title: Integrasi GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integrasi GridPane

## Gambaran Keseluruhan
GridPane ialah panel kawalan hosting WordPress yang dibina khas untuk profesional WordPress yang serius. Integrasi ini membolehkan penyegerakan domain secara automatik dan pengurusan sijil SSL antara Ultimate Multisite dan GridPane.

## Ciri-ciri
- Penyegerakan domain secara automatik
- Pengurusan sijil SSL
- Konfigurasi automatik pemalar SUNRISE

## Keperluan
Pemalar berikut mesti ditakrifkan dalam fail `wp-config.php` anda:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Arahan Persediaan

### 1. Dapatkan Kelayakan API GridPane Anda

1. Log masuk ke dashboard GridPane anda
2. Pergi ke "Settings" > "API"
3. Jana kunci API jika anda belum mempunyainya
4. Salin kunci API anda

### 2. Dapatkan ID Pelayan dan Laman Anda

1. Dalam dashboard GridPane anda, pergi ke "Servers"
2. Pilih pelayan di mana multisite WordPress anda dihoskan
3. Catatkan Server ID (boleh dilihat dalam URL atau pada halaman butiran pelayan)
4. Pergi ke "Sites" dan pilih laman WordPress anda
5. Catatkan Site ID (boleh dilihat dalam URL atau pada halaman butiran laman)

### 3. Tambah Pemalar ke wp-config.php

Tambahkan pemalar berikut ke dalam fail `wp-config.php` anda:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Aktifkan Integrasi

1. Dalam admin WordPress anda, pergi ke Ultimate Multisite > Settings
2. Navigasi ke tab "Domain Mapping"
3. Tatal ke bawah ke "Host Integrations"
4. Aktifkan integrasi GridPane
5. Klik "Save Changes"

## Cara Ia Berfungsi

Apabila domain dipetakan dalam Ultimate Multisite:

1. Integrasi menghantar permintaan ke API GridPane untuk menambah domain ke laman anda
2. GridPane mengendalikan penyediaan sijil SSL secara automatik
3. Apabila pemetaan domain dibuang, integrasi akan membuang domain tersebut dari GridPane

Integrasi ini juga mengendalikan pemalar SUNRISE dalam fail wp-config.php anda secara automatik, yang diperlukan untuk pemetaan domain berfungsi dengan betul.

## Pengurusan Pemalar SUNRISE

Satu ciri unik integrasi GridPane ialah ia secara automatik mengembalikan pemalar SUNRISE dalam wp-config.php untuk mengelakkan konflik dengan sistem pemetaan domain GridPane sendiri. Ini memastikan kedua-dua sistem boleh berfungsi bersama tanpa sebarang masalah.

## Penyelesaian Masalah

### Masalah Sambungan API
- Pastikan kunci API anda betul
- Semak bahawa ID pelayan dan laman anda betul
- Pastikan akaun GridPane anda mempunyai kebenaran yang diperlukan

### Masalah Sijil SSL
- GridPane mungkin mengambil sedikit masa untuk mengeluarkan sijil SSL
- Pastikan domain anda ditujukan dengan betul ke alamat IP pelayan anda
- Semak tetapan SSL GridPane untuk laman anda

### Domain Tidak Ditambah
- Semak log Ultimate Multisite untuk sebarang mesej ralat
- Pastikan domain tersebut belum ditambah ke GridPane
- Pastikan rekod DNS domain anda dikonfigurasikan dengan betul
