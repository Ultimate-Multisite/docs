---
title: Integrasi Cloudways
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Integrasi Cloudways

## Gambaran Keseluruhan
Cloudways ialah platform hosting cloud terurus yang membolehkan anda deploy laman WordPress pada pelbagai penyedia cloud seperti DigitalOcean, AWS, Google Cloud, dan banyak lagi. Integrasi ini membolehkan penyegerakan domain secara automatik dan pengurusan sijil SSL antara Ultimate Multisite dan Cloudways.

## Ciri-ciri
- Penyegerakan domain secara automatik
- Pengurusan sijil SSL
- Sokongan untuk domain tambahan
- Pengesahan DNS untuk sijil SSL

## Keperluan
Constant berikut perlu ditakrifkan dalam fail `wp-config.php` anda:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Secara pilihan, anda juga boleh takrifkan:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Arahan Persediaan

### 1. Dapatkan Kelayakan API Cloudways Anda

1. Log masuk ke dashboard Cloudways anda
2. Pergi ke "Account" > "API Keys"
3. Jana API key jika anda belum mempunyainya
4. Salin email dan API key anda

### 2. Dapatkan ID Server dan Aplikasi Anda

1. Dalam dashboard Cloudways anda, pergi ke "Servers"
2. Pilih server tempat WordPress multisite anda dihoskan
3. Server ID boleh dilihat dalam URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Pergi ke "Applications" dan pilih aplikasi WordPress anda
5. App ID boleh dilihat dalam URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Tambah Constant ke wp-config.php

Tambahkan constant berikut ke dalam fail `wp-config.php` anda:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Jika anda mempunyai domain tambahan yang perlu sentiasa disertakan:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. Aktifkan Integrasi

1. Dalam admin WordPress anda, pergi ke Ultimate Multisite > Settings
2. Navigasi ke tab "Domain Mapping"
3. Tatal ke bawah ke "Host Integrations"
4. Aktifkan integrasi Cloudways
5. Klik "Save Changes"

## Cara Ia Berfungsi

### Penyegerakan Domain

Apabila domain dipetakan dalam Ultimate Multisite:

1. Integrasi ini mendapatkan semua domain yang sedang dipetakan
2. Ia menambah domain baharu ke dalam senarai (bersama versi www jika berkenaan)
3. Ia menghantar senarai lengkap ke Cloudways melalui API
4. Cloudways mengemas kini alias domain untuk aplikasi anda

Nota: API Cloudways memerlukan penghantaran senarai domain yang lengkap setiap kali, bukan sekadar menambah atau membuang domain individu.

### Pengurusan Sijil SSL

Selepas domain disegerakkan:

1. Integrasi ini menyemak domain mana yang mempunyai rekod DNS yang sah yang menghala ke server anda
2. Ia menghantar permintaan ke Cloudways untuk memasang sijil SSL Let's Encrypt bagi domain tersebut
3. Cloudways mengendalikan pengeluaran dan pemasangan sijil SSL

## Domain Tambahan

Constant `WU_CLOUDWAYS_EXTRA_DOMAINS` membolehkan anda menentukan domain tambahan yang perlu sentiasa disertakan semasa penyegerakan dengan Cloudways. Ini berguna untuk:

- Domain yang tidak diuruskan oleh Ultimate Multisite
- Domain wildcard (contohnya, `*.example.com`)
- Domain pembangunan atau staging

## Penyelesaian Masalah

### Isu Sambungan API
- Pastikan email dan API key anda adalah betul
- Semak bahawa ID server dan aplikasi anda adalah betul
- Pastikan akaun Cloudways anda mempunyai kebenaran yang diperlukan

### Isu Sijil SSL
- Cloudways memerlukan domain mempunyai rekod DNS yang sah yang menghala ke server anda sebelum mengeluarkan sijil SSL
- Integrasi ini mengesahkan rekod DNS sebelum meminta sijil SSL
- Jika sijil SSL tidak dikeluarkan, semak bahawa domain anda dihala dengan betul ke alamat IP server anda

### Domain Tidak Ditambah
- Semak log Ultimate Multisite untuk sebarang mesej ralat
- Pastikan domain tersebut belum ditambah ke Cloudways
- Pastikan pelan Cloudways anda menyokong bilangan domain yang anda tambah
