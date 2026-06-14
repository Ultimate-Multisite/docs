---
title: Integrasi Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Integrasi Cloudflare

## Gambaran Umum
Cloudflare téh mangrupa jaring pengiriman konten (CDN) jeung penyedia keamanan anu pang maju anu ngabantosan ngajaga jeur je website. Integrasi ieu ngabantu ngatur domain otomatis antara Ultimate Multisite je Cloudflare, utamana pikeun instalasi multisite subdomain.

## Fitur
- Ngadamel subdomain otomatis di Cloudflare
- Dukungan subdomain yang di-proxy (proxied)
- Ngatur record DNS
- Tampilan record DNS anu leuwih hadé dina admin Ultimate Multisite

## Persyaratan
Konstanta ieu kudu didéfinisike dina file `wp-config.php` anjeun:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Instruksi Setup

### 1. Ambil API Key Cloudflare Anjeun

1. Login ka dashboard Cloudflare anjeun
2. Pindah ka "My Profile" (klik email anjeun di pojok kanan luhur)
3. Pilih "API Tokens" tina menu
4. Buat token API anyar kalayan izin-izin berikut:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Salin API token anjeun

### 2. Ambil Zone ID Anjeun

1. Di dashboard Cloudflare anjeun, pilih domain anu rék dipaké
2. Zone ID katingali dina tab "Overview", di sidebar kiwur di handap "API"
3. Salin Zone ID éta

### 3. Tambah Konstanta ka wp-config.php

Tambahkan konstanta berikut kana file `wp-config.php` anjeun:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Aktifkeun Integrasi

1. Di admin WordPress anjeun, pindah ka Ultimate Multisite > Settings
2. Pindah ka tab "Domain Mapping"
3. Gulirkeun ka bagian "Host Integrations"
4. Aktifkeun integrasi Cloudflare
5. Klik "Save Changes"

## Kumaha Cara Kerjanya

### Manajemen Subdomain

Lamun aya situs anyar anu ditangtuke dina instalasi multisite subdomain:

1. Integrasi éta ngirim permintaan ka API Cloudflare pikeun nambahan record CNAME kanggo subdomain.
2. Subdomain téh dikonfigurasi pikeun di-proxy ku Cloudflare salaku default (ieu bisa dirobah ku filter).
3. Lamun hiji situs dihapus, integrasi éta bakal ngabentukkeun subdomain tina Cloudflare.

### Tampilan Record DNS

Integrasi ieu ngagandahar tampilan record DNS dina admin Ultimate Multisite ku cara:

1. Ngambil record DNS langsung ti Cloudflare
2. Nampilkeun naha record téh di-proxy atawa henteu
3. Nampilkeun informasi tambahan ngeunaan record DNS

## Cloudflare Custom Hostnames

**Cloudflare Custom Hostnames** (ti baheul disebut "Cloudflare for SaaS") nyaéta fitur Cloudflare anu ngidinake pelanggan anjeun pikeun ngagunake domain sorangan kalayan SSL dina jaringan multisite anjeun. Ieu mangrupa cara anu direkomendakeun pikeun instalasi multisite anu dipetike domain nu ngagunake Cloudflare, sabab Cloudflare ngatur penerbitan jeung pangrojong sertifikat SSL pikeun unggal domain sorangan secara otomatis.

### Kumaha béda jeung integrasi standar Cloudflare

| | Integrasi Standar | Cloudflare Custom Hostnames |
|---|---|---|
| **Tujuan** | Ngabentuk record DNS otomatis pikeun subdomain | Ngidinake domain kustom (dipetike) kalayan SSL anu dikelola ku Cloudflare |
| **Paling Cocok Pikeun** | Multisite subdomain | Multisite dipetike domain |
| **SSL** | Diurus pisah-pisah | Dikelola otomatis ku Cloudflare |

### Ngatur Cloudflare Custom Hostnames

1. Di dashboard Cloudflare anjeun, buka zona kanggo domain utama anjeun.
2. Lanjut ka **SSL/TLS > Custom Hostnames**.
3. Tambah origin cadangan (fallback origin) nu nunjukkeun IP atawa hostname server anjeun.
4. Pikeun unggal domain pelanggan anu dipetike dina Ultimate Multisite, tambihan entri Custom Hostname di Cloudflare. Anjeun bisa otomatiskeun langkah ieu nganggo Cloudflare API.
5. Cloudflare bakal ngaluarkeun jeung ngareweuh deui sertifikat TLS pikeun unggal custom hostname otomatis salaku DNS pelanggan geus ditunjuk ka jaringan anjeun.

Kanggo referensi API anu lengkap, tingali [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Pembaruan istilah
Saprak Ultimate Multisite v2.6.1, fitur ieu disebut **Cloudflare Custom Hostnames** dina sakabé pengaturan jeung label plugin. Versi anu leuwih lila ngagunakeun nami "Cloudflare for SaaS", nyaéta ngaran produk Cloudflare nu jadi dasarna.
:::

## Catatan Penting

Saprak pembaruan Cloudflare rék, wildcard proxy ayeuna geus bisa dipaké pikeun sakabé pelanggan. Ieu hartina, integrasi DNS standar Cloudflare teu pati penting deui pikeun instalasi multisite subdomain dibandingkeun samémé, sabab anjeun ngan ukur kudu ngatur record DNS wildcard di Cloudflare.

## Troubleshooting

### Masalah Koneksi API
- Pastike token API anjeun bener jeung gaduh izin anu dipiharep
- Cek yén Zone ID anjeun bener
- Pastike akun Cloudflare anjeun gaduh izin anu merlukeun

### Subdomain Teu Ditambah
- Cek log Ultimate Multisite pikeun aya pesen error
- Pastike subdomain geus teu ditambihan di Cloudflare
- Pastike paket Cloudflare anjeun ngajak jumlah record DNS nu anjeun jieun

### Masalah Proxying

- Lamun anjeun teu hayang subdomain jadi proxy, anjeun bisa nganggo filter `wu_cloudflare_should_proxy`.
- Sababaraha fitur mungkin teu jalan bener lamun di-proxy (contona fungsi admin WordPress tertentu).
- Cobalah nganggo Page Rules Cloudflare pikeun ngalampaui cache kanggo halaman admin.
