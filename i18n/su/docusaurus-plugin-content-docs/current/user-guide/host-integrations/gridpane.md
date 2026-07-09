---
title: Integrasi GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integrasi GridPane {#gridpane-integration}

## Gambaran Umum {#overview}
GridPane téh mangrupake panel kontrol hosting WordPress anu dirancang khusus pikeun profesional WordPress anu serius. Integrasi ieu ngabantu sinkronisasi domain otomatis jeung ngaturan sertifikat SSL antara Ultimate Multisite jeung GridPane.

## Fitur-fitur {#features}
- Sinkronisasi domain otomatis
- Ngatur sertifikat SSL
- Konfigurasi otomatis konstanta SUNRISE

## Persyaratan {#requirements}
Konstanta-konstanta di handap kudu didefinisike dina file `wp-config.php` anjeun:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'api_key_anjeun');
define('WU_GRIDPANE_SERVER_ID', 'server_id_anjeun');
define('WU_GRIDPANE_APP_ID', 'site_id_anjeun');
```

## Petunjuk Setup {#setup-instructions}

### 1. Ambil Kredensial API GridPane Anjeun {#1-get-your-gridpane-api-credentials}

1. Login ka dashboard GridPane anjeun
2. Pindah ka "Settings" > "API"
3. Bérékeun API key lamun anjeun teu boga
4. Salin API key anjeun

### 2. Ambil ID Server jeung Situs Anjeun {#2-get-your-server-and-site-ids}

1. Dina dashboard GridPane anjeun, pindah ka "Servers"
2. Pilih server di mana multisite WordPress anjeun di-hosting
3. Catat Server ID (katingali dina URL atawa dina halaman detail server)
4. Pindah ka "Sites" jeung pilih situs WordPress anjeun
5. Catat Site ID (katingali dina URL atawa dina halaman detail situs)

### 3. Tambah Konstanta ka wp-config.php {#3-add-constants-to-wp-configphp}

Tambahan konstanta di handap kana file `wp-config.php` anjeun:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'api_key_anjeun');
define('WU_GRIDPANE_SERVER_ID', 'server_id_anjeun');
define('WU_GRIDPANE_APP_ID', 'site_id_anjeun');
```

### 4. Aktifkeun Integrasi {#4-enable-the-integration}

1. Dina admin WordPress anjeun, pindah ka Ultimate Multisite > Settings
2. Pindah ka tab "Domain Mapping"
3. Gulirkeun ka bagian "Host Integrations"
4. Aktifkeun integrasi GridPane
5. Klik "Save Changes"

## Kumaha Cara Kerjanya {#how-it-works}

Lamun domain di-map dina Ultimate Multisite:

1. Integrasi éta ngirim permintaan ka API GridPane pikeun nambahan domain dina situs anjeun.
2. GridPane otomatis nguruskeun penyediaan sertifikat SSL.
3. Lamun pemetaan domain dilepas, integrasi bakal ngahapus domain tina GridPane.

Integrasi ieu ogé otomatis ngatur konstanta SUNRISE dina file wp-config.php anjeun, nu dipersihkeun pikeun pemetaan domain bisa lumangsung kalayan bener.

## Ngatur Konstanta SUNRISE {#sunrise-constant-management}

Salah sahaya fitur unik ti integrasi GridPane nyaéta éta bakal otomatis ngabalikeun (revert) konstanta SUNRISE dina wp-config.php supados teu aya konflik jeung sistem pemetaan domain milik GridPane sorangan. Ieu mastikeun yén sababaraha sistem bisa gawé bareng tanpa masalah.

## Troubleshooting {#troubleshooting}

### Masalah Koneksi API {#api-connection-issues}
- Pastike konci API anjeun bener.
- Cek yén ID server jeung situs anjeun bener.
- Pastike akun GridPane anjeun gaduh izin anu dipersihkeun.

### Masalah Sertifikat SSL {#ssl-certificate-issues}
- GridPane bisa butuh waktos kanggo ngaluarke sertifikat SSL.
- Pastike domain anjeun nunjukkeun (pointing) ka alamat IP server anjeun kalayan bener.
- Cek pengaturan SSL GridPane pikeun situs anjeun.

### Domain Teu Ditambah {#domain-not-added}
- Cek log Ultimate Multisite pikeun aya pesan error naon waé.
- Pastike domain éta teu geus ditambahan dina GridPane.
- Pastike rek DNS domain anjeun parantos dikonfigurasi kalayan bener.
