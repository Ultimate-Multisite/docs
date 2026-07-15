---
title: Integrasi GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integrasi GridPane

## Gambaran Umum {#overview}
GridPane iku panel kontrol hosting WordPress khusus sing digawe kanggo profesional WordPress sing serius. Integrasi iki bisa nggawe sinkronisasi domain otomatis lan ngelola sertifikat SSL antarane Ultimate Multisite lan GridPane.

## Fitur-fitur {#features}
- Sinkronisasi domain otomatis
- Pengelolaan sertifikat SSL
- Konfigurasi konstanta SUNRISE otomatis

## Persyaratan {#requirements}
Konstanta-konstanta iki kudu didefinisikake ing file `wp-config.php` sampeyan:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Instruksi Penyiapan {#setup-instructions}

### 1. Dapatkan Kredensial API GridPane Sampeyan {#1-get-your-gridpane-api-credentials}

1. Masuk menyang dashboard GridPane sampeyan
2. Tindakake "Settings" > "API"
3. Bikin kunci API yen sampeyan durung duwe
4. Salin kunci API sampeyan

### 2. Dapatkan ID Server lan Situs Sampeyan {#2-get-your-server-and-site-ids}

1. Ing dashboard GridPane sampeyan, tindakake "Servers"
2. Pilih server sing dihosting WordPress multisite panjenengan
3. Cathet Server ID (sing katon ing URL utawa ing halaman detail server)
4. Tindakake "Sites" lan pilih situs WordPress panjenengan
5. Cathet Site ID (sing katon ing URL utawa ing halaman detail situs)

### 3. Tambah Konstanta ing wp-config.php {#3-add-constants-to-wp-configphp}

Tambahkan konstanta-konstanta iki menyang file `wp-config.php` sampeyan:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Aktifke Integrasi {#4-enable-the-integration}

1. Ing admin WordPress panjenengan, tindakake Ultimate Multisite > Settings
2. Tindakake tab "Domain Mapping"
3. Gulir nedhus nganti "Host Integrations"
4. Aktifke integrasi GridPane
5. Klik "Save Changes"

## Cara Kerjane {#how-it-works}

Nalika domain di-map ing Ultimate Multisite:

1. Integrasi iki ngirim request menyang API GridPane kanggo nambah domain ing situsmu
2. GridPane otomatis ngurus sertifikat SSL
3. Nalika pemetaan domain dihapus, integrasi bakal ngapus domain saka GridPane

Integrasi iki uga otomatis ngurus konstanta SUNRISE ing file wp-config.php-mu, sing dibutuhake supaya pemetaan domain bisa kerja kanthi bener.

## Pengelolaan Konstanta SUNRISE {#sunrise-constant-management}

Salah siji fitur unik saka integrasi GridPane yaiku dhewe otomatis ngatur maneh (reverts) konstanta SUNRISE ing wp-config.php supaya ora ana konflik karo sistem pemetaan domain sing duweake GridPane dewe. Iki njamin kedua sistem bisa kerja bareng tanpa masalah.

## Pemecahan Masalah (Troubleshooting) {#troubleshooting}

### Masalah Koneksi API {#api-connection-issues}
- Pastikan kunci API-mu bener
- Cek yen ID server lan situsmu bener
- Pastikan akun GridPane-mu duwe izin sing dibutuhake

### Masalah Sertifikat SSL {#ssl-certificate-issues}
- GridPane mungkin butuh wektu kanggo ngeluarkan sertifikat SSL
- Verifikasi yen domain-mu diarani kanthi bener menyang alamat IP servermu
- Cek pengaturan SSL GridPane kanggo situsmu

### Domain Ora Ditambah {#domain-not-added}
- Cek log Ultimate Multisite kanggo pesan error apa wae
- Pastikan domain wis ora ana ing GridPane
- Pastikan record DNS domainmu wis dikonfigurasi kanthi bener
