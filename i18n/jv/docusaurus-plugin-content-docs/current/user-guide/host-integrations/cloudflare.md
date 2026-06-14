---
title: Integrasi Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Integrasi Cloudflare

## Gambaran Umum
Cloudflare iku salah satu penyedia jaringan pengiriman konten (CDN) lan keamanan utama sing mbantu nglindungi lan ngebut website. Integrasi iki bisa nggawe manajemen domain otomatis antara Ultimate Multisite lan Cloudflare, utamane kanggo instalasi subdomain multisite.

## Fitur-fitur
- Otomatis nggawe subdomain ing Cloudflare
- Dukungan subdomain sing di-proxy (proxied)
- Manajemen record DNS
- Tampilan record DNS sing luwih apik ing admin Ultimate Multisite

## Persyaratan
Konstanta iki kudu didefinisikake ing file `wp-config.php` sampeyan:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Instruksi Setup

### 1. Dapatkan API Key Cloudflare Sampeyan

1. Masuk menyang dashboard Cloudflare sampeyan
2. Tindakake "My Profile" (klik email sampeyan ing pojok tengene)
3. Pilih "API Tokens" saka menu
4. Gawe token API anyar kanthi izin kaya iki:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Salin token API sampeyan

### 2. Dapatkan Zone ID Sampeyan

1. Ing dashboard Cloudflare sampeyan, pilih domain sing arep dienggo
2. Zone ID bisa ditemokake ing tab "Overview", ing sidebar tengene ngisor "API"
3. Salin Zone ID kasebut

### 3. Tambah Konstanta ing wp-config.php

Tambahkan konstanta iki menyang file `wp-config.php` sampeyan:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Aktifke Integrasi

1. Ing admin WordPress sampeyan, tindakake Ultimate Multisite > Settings
2. Tindakake menyang tab "Domain Mapping"
3. Gulung ngisor menyang "Host Integrations"
4. Aktifke integrasi Cloudflare
5. Klik "Save Changes"

## Cara Kerjane

### Manajemen Subdomain

Nalika website anyar digawe ing instalasi subdomain multisite:

1. Integrasi iki ngirim request menyang API Cloudflare kanggo nambah record CNAME kanggo subdomain.
2. Subdomain diatur supaya diproksi liwat Cloudflare kanthi default (iki bisa diubah nganggo filter).
3. Nalika situs dihapus, integrasi bakal ngilangake subdomain saka Cloudflare.

### Tampilan Record DNS

Integrasi iki nambah tampilan record DNS ing admin Ultimate Multisite kanthi cara:

1. Ngambil record DNS langsung saka Cloudflare.
2. Nampilake yen record iku diproksi utawa ora.
3. Nggambarake informasi tambahan babagan record DNS kasebut.

## Cloudflare Custom Hostnames

**Cloudflare Custom Hostnames** (sadurunge diarani "Cloudflare for SaaS") yaiku fitur ing Cloudflare sing menehi pelangganmu bisa nggunakake domain dhewe kanthi SSL ing jaringan multisite-mu. Iki cara sing direkomendake kanggo instalasi multisite sing dipetapakake domain sing nggunakake Cloudflare, amarga Cloudflare ngatur penerbitan lan pangresik sertifikat SSL kanggo saben domain kustom kanthi otomatis.

### Kepiye bedane karo integrasi standar Cloudflare

| | Integrasi Standar | Cloudflare Custom Hostnames |
|---|---|---|
| **Tujuan** | Otomatis nggawe record DNS kanggo subdomain | Menehi domain kustom (sing dipetapakake) kanthi SSL sing dikelola dening Cloudflare |
| **Cocok kanggo** | Multisite subdomain | Multisite sing dipetapakake domain |
| **SSL** | Diurus terpisah | Dikelola otomatis dening Cloudflare |

### Ngatur Cloudflare Custom Hostnames

1. Ing dashboard Cloudflare sampeyan, buka zona kanggo domain utama sampeyan.
2. Tindakake **SSL/TLS > Custom Hostnames**.
3. Tambah origin cadangan (fallback origin) sing nunjuk menyang IP utawa hostname server panjenengan.
4. Kanggo saben domain pelanggan sing dipetakan ing Ultimate Multisite, tamba entri Custom Hostname ing Cloudflare. Langkah iki bisa diotomatisasi nganggo Cloudflare API.
5. Cloudflare bakal ngeluarkan lan ngresiki sertifikat TLS kanggo saben custom hostname otomatis nalika DNS pelanggan diarahkan menyang jaringan panjenengan.

Kanggo referensi API lengkap, deleng [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Pembaruan Terminologi
Miturut Ultimate Multisite v2.6.1, fitur iki diarani **Cloudflare Custom Hostnames** ing kabeh pengaturan lan label plugin. Versi sadurunge nggunakake jeneng "Cloudflare for SaaS", sing yaiku jeneng produk Cloudflare sing dadi dasare.
:::

## Cathetan Penting

Miturut pembaruan Cloudflare saiki, wildcard proxy wis bisa kanggo kabeh pelanggan. Iki tegese integrasi DNS standar Cloudflare ora pati penting maneh kanggo instalasi multisite subdomain tinimbang biyen, amarga sampeyan mung perlu ngatur record DNS wildcard ing Cloudflare.

## Pemecahan Masalah (Troubleshooting)

### Masalah Koneksi API
- Verifikasi yen token API panjenengan bener lan duwe izin sing dibutuhake.
- Cek yen Zone ID panjenengan bener.
- Pastikan yen akun Cloudflare panjenengan duwe izin sing perlu.

### Subdomain Ora Ditambah
- Cek log Ultimate Multisite kanggo pesan error apa wae.
- Verifikasi yen subdomain wis ora ditambahi ing Cloudflare.
- Pastikan yen paket Cloudflare panjenengan ndhukung jumlah record DNS sing sampeyan gawe.

### Masalah Proxying

- Yen sampeyan ora pengin subdomain dadi proxy, sampeyan bisa nggunakake filter `wu_cloudflare_should_proxy`.
- Kadhang fitur mungkin ora bakal nyambung bener nalika di-proxy (contone, fungsi admin WordPress tartamtu).
- Coba nganggo Page Rules Cloudflare kanggo ngindari cache kanggo halaman admin.
