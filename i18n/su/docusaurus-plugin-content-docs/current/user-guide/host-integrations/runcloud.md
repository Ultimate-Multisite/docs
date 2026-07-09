---
title: Integrasi RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Integrasi RunCloud {#runcloud-integration}

## Gambaran Umum {#overview}
RunCloud téh mangrupake platform ngatur server berbasis cloud anu bisa ngajadikeun jeung ngatur aplikasi web di server cloud sorangan jadi gampang pisan. Integrasi ieu ngabantu sinkronisasi domain otomatis jeung ngaturan sertifikat SSL antara Ultimate Multisite jeung RunCloud.

## Fitur {#features}
- Sinkronisasi domain otomatis
- Ngaturan sertifikat SSL
- Ngapus domain lamun pemetaan (mappings) dihapus

## Persyaratan {#requirements}
Konstanta di handap kudu didéfinisike dina file `wp-config.php` anjeun:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Petunjuk Setup {#setup-instructions}

### 1. Ambil Kredensial API RunCloud Anjeun {#1-get-your-runcloud-api-credentials}

1. Login ka dashboard RunCloud anjeun
2. Pindah ka "User Profile" (klik foto profil di pojok kanan atas)
3. Pilih "API" tina menu
4. Klik "Generate API Key" lamun anjeun teu boga
5. Salin API Key jeung API Secret anjeun

### 2. Ambil ID Server jeung Aplikasi Anjeun {#2-get-your-server-and-app-ids}

1. Di dashboard RunCloud anjeun, pindah ka "Servers"
2. Pilih server di mana WordPress multisite anjeun dipasang
3. Server ID bisa ditingali dina URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Pindah ka "Web Applications" jeung pilih aplikasi WordPress anjeun
5. App ID bisa ditingali dina URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Tambah Konstanta ka wp-config.php {#3-add-constants-to-wp-configphp}

Tambah konstanta handap kana file `wp-config.php` anjeun:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Aktifkeun Integrasi {#4-enable-the-integration}

1. Di admin WordPress anjeun, langsung ka Ultimate Multisite > Settings
2. Pilih tab "Domain Mapping" (Pemetaan Domain)
3. Gulirkeun ka bagian "Host Integrations" (Integrasi Host)
4. Aktifkeun integrasi RunCloud
5. Klik "Save Changes" (Simpan Perubahan)

## Kumaha Cara Kerjanya {#how-it-works}

Lamun domain dipetikeun dina Ultimate Multisite:

1. Integrasi bakal ngirim paménta ka API RunCloud pikeun nambahan domain éta kana aplikasi anjeun
2. Lamun domainna sukses ditambihan, integrasi téh ogé bakal ngalaksanakeun *redeploy* sertifikat SSL
3. Nalika pemetaan domain dileupaskeun (dihapus), integrasi bakal ngahapkeun domain tina RunCloud

Kanggo instalasi subdomain, integrasi éta bakal otomatis nguruskeun pembuatan subdomain di RunCloud lamun aya situs anyar ditambihan kana jaringan anjeun.

## Troubleshooting {#troubleshooting}

### Masalah Koneksi API {#api-connection-issues}
- Pastike yén *credentials* API anjeun bener
- Cek yén ID server jeung aplikasi anjeun bener
- Pastike akun RunCloud anjeun geus miboga izin anu dipiharepkeun

### Masalah Sertifikat SSL {#ssl-certificate-issues}
- RunCloud tiasa butuh waktos kanggo ngaluarkeun sertifikat SSL
- Pastike domain anjeun nunjukkeun (pointing) ka alamat IP server anjeun bener
- Cek pengaturan SSL di RunCloud pikeun aplikasi anjeun

### Domain Teu Ditambihan {#domain-not-added}
- Cek log Ultimate Multisite pikeun aya pesan error naon waé
- Pastike domain éta teu geus ditambihan di RunCloud
- Pastike paket RunCloud anjeun ngajakakeun sababaraha domain.
