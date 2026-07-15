---
title: Integrasi Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Integrasi Cloudways

## Ikhtisar {#overview}
Cloudways adalah platform hosting cloud terkelola yang memungkinkan Anda men-deploy situs WordPress di berbagai penyedia cloud seperti DigitalOcean, AWS, Google Cloud, dan lainnya. Integrasi ini memungkinkan sinkronisasi domain otomatis dan pengelolaan sertifikat SSL antara Ultimate Multisite dan Cloudways.

## Fitur {#features}
- Sinkronisasi domain otomatis
- Pengelolaan sertifikat SSL
- Dukungan untuk domain tambahan
- Validasi DNS untuk sertifikat SSL

## Persyaratan {#requirements}
Konstanta berikut harus didefinisikan di file `wp-config.php` Anda:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Secara opsional, Anda juga dapat mendefinisikan:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Instruksi Penyiapan {#setup-instructions}

### 1. Dapatkan Kredensial API Cloudways Anda {#1-get-your-cloudways-api-credentials}

1. Masuk ke dashboard Cloudways Anda
2. Buka "Account" > "API Keys"
3. Buat API key jika Anda belum memilikinya
4. Salin email dan API key Anda

### 2. Dapatkan ID Server dan Aplikasi Anda {#2-get-your-server-and-application-ids}

1. Di dashboard Cloudways Anda, buka "Servers"
2. Pilih server tempat multisite WordPress Anda di-host
3. Server ID terlihat di URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Buka "Applications" dan pilih aplikasi WordPress Anda
5. App ID terlihat di URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Tambahkan Konstanta ke wp-config.php {#3-add-constants-to-wp-configphp}

Tambahkan konstanta berikut ke file `wp-config.php` Anda:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Jika Anda memiliki domain **eksternal** tambahan (di luar jaringan multisite Anda) yang harus selalu dipertahankan di daftar alias Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Jangan sertakan wildcard jaringan Anda sendiri
Jangan **menambahkan** `*.your-network.com` (atau pola subdomain apa pun dari jaringan Anda sendiri) ke
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Lihat [Penting — jebakan SSL wildcard](#important--wildcard-ssl-pitfall)
di bawah untuk mengetahui mengapa hal ini mencegah sertifikat SSL per-tenant diterbitkan.
:::

### 4. Aktifkan Integrasi {#4-enable-the-integration}

1. Di admin WordPress Anda, buka Ultimate Multisite > Settings
2. Navigasikan ke tab "Domain Mapping"
3. Gulir ke bawah ke "Host Integrations"
4. Aktifkan integrasi Cloudways
5. Klik "Save Changes"

## Cara Kerjanya {#how-it-works}

### Sinkronisasi Domain {#domain-syncing}

Ketika sebuah domain dipetakan di Ultimate Multisite:

1. Integrasi mengambil semua domain yang saat ini dipetakan
2. Integrasi menambahkan domain baru ke daftar (bersama versi www jika berlaku)
3. Integrasi mengirim daftar lengkap ke Cloudways melalui API
4. Cloudways memperbarui alias domain untuk aplikasi Anda

Catatan: Cloudways API mengharuskan pengiriman daftar lengkap domain setiap kali, bukan hanya menambahkan atau menghapus domain individual.

### Pengelolaan Sertifikat SSL {#ssl-certificate-management}

Setelah domain disinkronkan:

1. Integrasi memeriksa domain mana yang memiliki catatan DNS valid yang mengarah ke server Anda
2. Integrasi mengirim permintaan ke Cloudways untuk menginstal sertifikat SSL Let's Encrypt bagi domain-domain tersebut
3. Cloudways menangani penerbitan dan instalasi sertifikat SSL

Integrasi ini selalu meminta sertifikat Let's Encrypt **standar** (non-wildcard) dari
Cloudways. Jika pola wildcard disediakan di `WU_CLOUDWAYS_EXTRA_DOMAINS`, awalan
`*.` dihapus sebelum permintaan SSL — wildcard itu sendiri tidak pernah diinstal oleh
integrasi ini. Untuk menggunakan sertifikat wildcard di Cloudways, Anda harus menginstalnya
secara manual, tetapi melakukannya akan memblokir penerbitan Let's Encrypt per-domain untuk domain kustom yang dipetakan
(lihat jebakan di bawah).

## Domain Tambahan {#extra-domains}

Konstanta `WU_CLOUDWAYS_EXTRA_DOMAINS` memungkinkan Anda menentukan domain **eksternal**
tambahan yang harus selalu dipertahankan di daftar alias aplikasi Cloudways. Gunakan untuk:

- Domain eksternal yang tidak dikelola oleh Ultimate Multisite (misalnya, situs pemasaran terpisah yang berbagi aplikasi Cloudways yang sama)
- Domain parked atau staging yang ingin Anda pertahankan di daftar alias aplikasi

Jangan **gunakan** konstanta ini untuk wildcard subdomain jaringan Anda sendiri
(misalnya `*.your-network.com`). Lihat jebakan SSL wildcard di bawah.

## Penting — Jebakan SSL Wildcard {#important--wildcard-ssl-pitfall}

Kesalahan umum saat mengikuti penyiapan default Cloudways adalah menambahkan wildcard seperti
`*.your-network.com` ke `WU_CLOUDWAYS_EXTRA_DOMAINS`, atau menginstal secara manual sertifikat SSL wildcard Cloudways
untuk wildcard tersebut.

**Jika Anda melakukan ini, Cloudways akan menolak menerbitkan sertifikat Let's Encrypt untuk
domain kustom per-tenant yang dipetakan Ultimate Multisite.** Cloudways mengganti sertifikat
SSL aktif pada aplikasi setiap kali, dan sertifikat wildcard yang sudah ada pada
aplikasi memblokir penerbitan Let's Encrypt per-domain yang diandalkan integrasi.

### Penyiapan SSL Cloudways yang direkomendasikan untuk jaringan Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Di tab **SSL Certificate** aplikasi Cloudways, instal **sertifikat
   Let's Encrypt standar** yang hanya mencakup `your-network.com` dan `www.your-network.com`
   — **bukan** wildcard.
2. Jangan **masukkan** `*.your-network.com` (atau pola subdomain apa pun dari jaringan Anda sendiri) ke
   `WU_CLOUDWAYS_EXTRA_DOMAINS`. Cadangkan konstanta tersebut hanya untuk domain **eksternal**.
3. Buat wildcard subdomain per-tenant hanya di tingkat **DNS** (catatan `A` untuk
   `*.your-network.com` yang mengarah ke IP server Cloudways Anda) agar subsitus dapat di-resolve. SSL
   untuk domain kustom individual yang dipetakan kemudian diterbitkan secara otomatis oleh integrasi
   melalui Let's Encrypt.

Jika domain kustom penyewa Anda macet tanpa SSL, periksa tab SSL Cloudways. Jika
sertifikat wildcard aktif di sana, hapus, terbitkan ulang sertifikat Let's Encrypt
standar hanya untuk domain jaringan utama, dan hapus entri wildcard apa pun dari
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Lalu picu ulang pemetaan domain (atau tunggu yang berikutnya)
dan integrasi akan mulai menerbitkan sertifikat per-domain lagi.

## Pemecahan Masalah {#troubleshooting}

### Masalah Koneksi API {#api-connection-issues}
- Verifikasi bahwa email dan API key Anda benar
- Periksa bahwa ID server dan aplikasi Anda benar
- Pastikan Account Cloudways Anda memiliki izin yang diperlukan

### Masalah Sertifikat SSL {#ssl-certificate-issues}
- Cloudways mengharuskan domain memiliki catatan DNS yang valid yang mengarah ke server Anda sebelum menerbitkan sertifikat SSL
- Integrasi memvalidasi catatan DNS sebelum meminta sertifikat SSL
- Jika sertifikat SSL tidak diterbitkan, periksa bahwa domain Anda sudah mengarah dengan benar ke alamat IP server Anda
- **Domain kustom per-penyewa macet tanpa SSL?** Periksa tab Sertifikat SSL aplikasi Cloudways. Jika sertifikat wildcard (dipasang secara manual, atau mencakup `*.your-network.com`) aktif, Cloudways tidak akan menerbitkan sertifikat Let's Encrypt untuk domain kustom yang dipetakan secara individual. Ganti dengan sertifikat Let's Encrypt standar yang hanya mencakup domain jaringan utama (`your-network.com`, `www.your-network.com`) dan hapus entri wildcard apa pun dari `WU_CLOUDWAYS_EXTRA_DOMAINS`. Lalu picu ulang pemetaan domain (atau tunggu yang berikutnya) dan integrasi akan meminta sertifikat per-domain.

### Domain Tidak Ditambahkan {#domain-not-added}
- Periksa log Ultimate Multisite untuk pesan kesalahan apa pun
- Verifikasi bahwa domain belum ditambahkan ke Cloudways
- Pastikan plan Cloudways Anda mendukung jumlah domain yang Anda tambahkan
