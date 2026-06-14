---
title: Integrasi Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Integrasi Cloudways

## Gambaran Umum
Cloudways téh platform hosting cloud yang dikelola, di mana kamu bisa milih tempat buat situs WordPress di berbagai penyedia cloud saperti DigitalOcean, AWS, Google Cloud, jeung liyane. Integrasi ieu ngajadikeun sinkronisasi domain otomatis jeung manajemen sertifikat SSL antara Ultimate Multisite jeung Cloudways.

## Fitur
- Sinkronisasi domain otomatis
- Manajemen sertifikat SSL
- Dukungan untuk domain tambahan (extra domains)
- Validasi DNS pikeun sertifikat SSL

## Persyaratan
Konstanta di handap kudu didefinisikeun dina file `wp-config.php` kamu:

```php
define('WU_CLOUDWAYS_EMAIL', 'email_cloudways_kamu');
define('WU_CLOUDWAYS_API_KEY', 'api_key_kamu');
define('WU_CLOUDWAYS_SERVER_ID', 'id_server_kamu');
define('WU_CLOUDWAYS_APP_ID', 'id_aplikasi_kamu');
```

Secara pilihan, kamu ogé bisa mendefinisikeun:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'daftar_domain_dipisah_kuoma_koma');
```

## Instruksi Setup

### 1. Ambil Kredensial API Cloudways Kamu

1. Login ka dashboard Cloudways kamu
2. Pindah ka "Account" > "API Keys"
3. Bikin API key lamun kamana teu boga
4. Salin email jeung API key kamu

### 2. Ambil ID Server jeung Aplikasi Kamu

1. Dina dashboard Cloudways, pindah ka "Servers"
2. Pilih server di mana multisite WordPress kamu dipasang
3. ID Server bisa dilihat dina URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Pindah ka "Applications" jeung pilih aplikasi WordPress kamu
5. ID Aplikasi bisa dilihat dina URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Tambah Konstanta di wp-config.php

Tambahkan konstanta handap kana file `wp-config.php` kamu:

```php
define('WU_CLOUDWAYS_EMAIL', 'email cloudways anjeun');
define('WU_CLOUDWAYS_API_KEY', 'api key cloudways anjeun');
define('WU_CLOUDWAYS_SERVER_ID', 'id server cloudways anjeun');
define('WU_CLOUDWAYS_APP_ID', 'id aplikasi cloudways anjeun');
```

Upami anjeun aya domain **luar** (di luar jaringan multisite anjeun) anu kudu salawasna aya dina daftar alias Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Tong kaasupkeun wildcard jaringan sorangan anjeun
**Tong** nambahan `*.your-network.com` (atawa pola subdomain jaringan anjeun sorangan) ka `WU_CLOUDWAYS_EXTRA_DOMAINS`. Tingali [Penting — jebakan SSL wildcard](#important--wildcard-ssl-pitfall) di handapna pikeun sabab naon hal ieu ngalangann sertifikat SSL per-tenant ti kapanggih.
:::

### 4. Aktifkeun Integrasi

1. Di admin WordPress anjeun, ka Ultimate Multisite > Settings indit.
2. Indit ka tab "Domain Mapping".
3. Scroll turun ka bagian "Host Integrations".
4. Aktifkeun integrasi Cloudways.
5. Klik "Save Changes".

## Kumaha Cara Naonna

### Domain Syncing (Sinkronisasi Domain)

Lamun hiji domain di-map dina Ultimate Multisite:

1. Integrasi bakal ngagolek sadaya domain anu ayeuna di-map.
2. Manéhna nambahan domain anyar ka daftar (sareng aya versi www lamun aya).
3. Manéhna ngirimkeun daftar lengkap éta ka Cloudways via API.
4. Cloudways bakal ngabaharuan alias domain pikeun aplikasi anjeun.

Catatan: API Cloudways mbutuh ngirimkeun daftar domain anu lengkap unggal kali, lain ngan ukur nambahan atawa ngahapus domain perorangan.

### SSL Certificate Management (Manajemen Sertifikat SSL)

Sanggeus domain disinkronisasi:

1. Integrasi bakal ngecek domain mana waé anu miboga DNS record anu bener nunjukkeun ka server anjeun.
2. Manéhna ngirimkeun permintaan ka Cloudways pikeun ngalaksanakeun instalasi sertifikat Let's Encrypt SSL pikeun domain-domain éta.
3. Cloudways bakal ngurus pemasangan jeung penerbitan sertifikat SSLna.

Integrasi téh sok minta sertifikat Let's Encrypt **standar** (non-wildcard) ti Cloudways. Lamun aya pola wildcard dina `WU_CLOUDWAYS_EXTRA_DOMAINS`, tanda `*.` di awal bakal dileupas samémé permintaan SSL — wildcard éta teu pernah dipasang ku integrasi ieu. Pikeun ngagunake sertifikat wildcard di Cloudways, anjeun kudu pasangna sacara manual, tapi lamun kitu bakal ngalibur (block) penerbitan Let's Encrypt per-domain pikeun domain kustom anu mapana (lihat jebakan di handap).

## Domain Ekstra

Konstanta `WU_CLOUDWAYS_EXTRA_DOMAINS` ngajak anjeun pikeun nulis domain **eksternal** tambahan anu kudu salawasna aya dina daftar alias aplikasi Cloudways. Gunake éta pikeun:

- Domain eksternal anu teu dikelola ku Ultimate Multisite (misalnya, situs marketing terpisah anu share aplikasi Cloudways anu sarua).
- Domain parkir atawa staging anu anjeun hoyong tetep aya dina daftar alias aplikasi.

**Ulah** ngagunake konstanta ieu pikeun subdomain wildcard jaringan sorangan anjeun (misalnya, `*.your-network.com`). Lihat jebakan SSL wildcard di handap.

## Penting — Jebakan SSL Wildcard

Salah hiji kalepatan umum lamun ngikut pengaturan default Cloudways nyaéta nambahan wildcard saperti `*.your-network.com` ka `WU_CLOUDWAYS_EXTRA_DOMAINS`, atawa pasang sertifikat SSL wildcard Cloudways sacara manual pikeun wildcard éta.

**Lamun anjeun ngalakukeun éta, Cloudways bakal nolak pikeun méré sertifikat Let's Encrypt pikeun domain kustom per-tenant anu dipetakan ku Ultimate Multisite.** Cloudways ganti sertifikat SSL aktif dina aplikasi unggal kali, sarta sertifikat wildcard anu geus aya dina aplikasi bakal ngalibur penerbitan Let's Encrypt per-domain anu dikénéh diandelkeun ku integrasi ieu.

### Pengaturan SSL Cloudways anu Dikawasa pikeun jaringan Ultimate Multisite

1. Di tab **SSL Certificate** aplikasi Cloudways, pasang sertifikat Let's Encrypt standar yang cuma mencakup `your-network.com` dan `www.your-network.com` — **bukan** wildcard.
2. Jangan masukkan `*.your-network.com` (atau pola subdomain jaringan Anda sendiri) di `WU_CLOUDWAYS_EXTRA_DOMAINS`. Simpan konstanta itu khusus untuk domain **eksternal** saja.
3. Buat wildcard subdomain per penyewa hanya di level **DNS** (record `A` untuk `*.your-network.com` yang menunjuk ke IP server Cloudways Anda) agar subsites bisa terhubung. SSL untuk domain kustom yang sudah dipetakan secara individual akan diterbitkan otomatis oleh integrasi melalui Let's Encrypt.

Jika domain kustom penyewa Anda macet tanpa SSL, periksa tab SSL Cloudways. Jika sertifikat wildcard aktif di sana, hapus, terbitkan ulang sertifikat Let's Encrypt standar hanya untuk domain jaringan utama, dan hapus entri wildcard apa pun dari `WU_CLOUDWAYS_EXTRA_DOMAINS`. Kemudian picu pemetaan domain lagi (atau tunggu yang berikutnya) dan integrasi akan mulai menerbitkan sertifikat per domain lagi.

## Pemecahan Masalah

### Masalah Koneksi API
- Pastikan email dan API key Anda sudah benar
- Periksa apakah ID server dan aplikasi Anda sudah benar
- Pastikan akun Cloudways Anda memiliki izin yang diperlukan

### Masalah Sertifikat SSL
- Cloudways mewajibkan domain punya catatan DNS yang valid menunjuk ke server kamu sebelum mengeluarkan sertifikat SSL.
- Integrasi ini bakal ngecek catatan DNS samém banget samémnya sae sebelum minta sertifikat SSL.
- Lamun sertifikat SSL teu dikeluarkeun, cek deui yén domain kamu bener-bener nunjuk ka alamat IP server kamu.
- **Domain kustom per tenant teu bisa dipasang SSL?** Cek tab Sertifikat SSL di aplikasi Cloudways. Lamun ada sertifikat wildcard (dipasang manual, atawa ngawengku `*.your-network.com`) anu aktif, Cloudways moal ngaluarkeun sertifikat Let's Encrypt pikeun domain kustom nu dipetkeun hiji-hiji. Ganti éta ku sertifikat Let's Encrypt standar nu ngan ukur ngawengku domain utama jaringan (`your-network.com`, `www.your-network.com`) jeung hapus naon waé entri wildcard tina `WU_CLOUDWAYS_EXTRA_DOMAINS`. Terus pancing deui pemetaan domain (atawa tunggu anu salajengna) sarta integrasi bakal minta sertifikat per-domain.

### Domain Teu Ditambah
- Cek log Ultimate Multisite pikeun aya pesan error naon waé.
- Pastike yén domain éta teu geus ditambihan di Cloudways.
- Pastike paket Cloudways kamu ngahargaan jumlah domain anu keur ditambihan.
