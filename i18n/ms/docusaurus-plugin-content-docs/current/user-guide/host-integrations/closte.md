---
title: Integrasi Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Integrasi Closte

## Gambaran Keseluruhan
Closte ialah platform hosting WordPress terurus yang dibina di atas infrastruktur Google Cloud. Integrasi ini membolehkan penyegerakan domain automatik dan pengurusan sijil SSL antara Ultimate Multisite dan Closte.

## Ciri-ciri
- Penyegerakan domain automatik
- Pengurusan sijil SSL
- Sokongan domain wildcard
- Tiada konfigurasi diperlukan jika dijalankan di Closte

## Keperluan
Pemalar berikut mesti ditakrifkan dalam fail `wp-config.php` anda jika anda menggunakan Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Pemalar ini biasanya sudah ditakrifkan jika anda menghos di Closte.

## Arahan Persediaan

### 1. Sahkan Kunci API Closte Anda

Jika anda menghos di Closte, pemalar `CLOSTE_CLIENT_API_KEY` sepatutnya sudah ditakrifkan dalam fail `wp-config.php` anda. Anda boleh mengesahkan ini dengan menyemak fail `wp-config.php` anda.

### 2. Aktifkan Integrasi

1. Dalam admin WordPress anda, pergi ke Ultimate Multisite > Settings
2. Navigasi ke tab "Domain Mapping"
3. Tatal ke bawah ke "Host Integrations"
4. Aktifkan integrasi Closte
5. Klik "Save Changes"

## Cara Ia Berfungsi

Apabila domain dipetakan dalam Ultimate Multisite:

1. Integrasi ini menghantar permintaan kepada API Closte untuk menambah domain ke aplikasi anda
2. Closte mengendalikan pengeluaran sijil SSL secara automatik
3. Apabila pemetaan domain dibuang, integrasi akan membuang domain daripada Closte

Integrasi ini juga berfungsi dengan tetapan selang semakan DNS dalam Ultimate Multisite, membolehkan anda mengkonfigurasi berapa kerap sistem menyemak penyebaran DNS dan pengeluaran sijil SSL.

## Penciptaan Rekod Domain

Integrasi ini memastikan bahawa apabila laman dicipta atau diduplikasi, rekod domain dicipta secara automatik. Ini amat penting untuk integrasi Closte, kerana penciptaan rekod domain mencetuskan API Closte untuk mencipta domain dan sijil SSL.

## Penyelesaian Masalah

### Isu Sambungan API
- Sahkan bahawa kunci API Closte anda adalah betul
- Pastikan akaun Closte anda mempunyai kebenaran yang diperlukan

### Isu Sijil SSL
- Closte mungkin mengambil sedikit masa untuk mengeluarkan sijil SSL (biasanya 5-10 minit)
- Sahkan bahawa domain anda menghala dengan betul ke alamat IP pelayan Closte anda
- Semak rekod DNS untuk domain anda bagi memastikan ia dikonfigurasi dengan betul

### Domain Tidak Ditambah
- Semak log Ultimate Multisite untuk sebarang mesej ralat
- Sahkan bahawa domain belum ditambah ke Closte
- Pastikan rekod DNS domain anda dikonfigurasi dengan betul

### Selang Semakan DNS
- Jika sijil SSL mengambil masa terlalu lama untuk dikeluarkan, anda boleh melaraskan selang semakan DNS dalam tetapan Domain Mapping
- Selang lalai ialah 300 saat (5 minit), tetapi anda boleh menetapkannya serendah 10 saat untuk semakan lebih pantas semasa ujian
