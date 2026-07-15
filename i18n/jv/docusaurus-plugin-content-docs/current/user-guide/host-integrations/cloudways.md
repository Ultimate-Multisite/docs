---
title: Integrasi Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Integrasi Cloudways

## Gambaran Umum {#overview}
Cloudways iku platform hosting cloud yang dikelola, sing ngidini sampeyan nggolek WordPress site nang berbagai penyedia cloud kaya DigitalOcean, AWS, Google Cloud, lan liyane. Integrasi iki bisa gawe sinkronisasi domain otomatis lan ngatur sertifikat SSL antar Ultimate Multisite lan Cloudways.

## Fitur {#features}
- Sinkronisasi domain otomatis
- Pengelolaan sertifikat SSL
- Dukungan untuk domain tambahan
- Validasi DNS kanggo sertifikat SSL

## Persyaratan {#requirements}
Konstanta iki kudu didefinisik nang file `wp-config.php` sampeyan:

```php
define('WU_CLOUDWAYS_EMAIL', 'email_cloudways_sampeyan');
define('WU_CLOUDWAYS_API_KEY', 'api_key_sampeyan');
define('WU_CLOUDWAYS_SERVER_ID', 'server_id_sampeyan');
define('WU_CLOUDWAYS_APP_ID', 'app_id_sampeyan');
```

Secara opsional, sampeyan uga bisa nggawe:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'daftar_domain_dipisah_ake_koma');
```

## Instruksi Setup {#setup-instructions}

### 1. Dapatkan Kredensial API Cloudways Sampeyan {#1-get-your-cloudways-api-credentials}

1. Masuk menyang dashboard Cloudways sampeyan
2. Tindakake "Account" > "API Keys"
3. Bikin API key yen durung ana, utawa wis ana nanging lali
4. Salin email lan API key sampeyan

### 2. Dapatkan ID Server lan Aplikasi Sampeyan {#2-get-your-server-and-application-ids}

1. Nang dashboard Cloudways sampeyan, tindakake "Servers"
2. Pilih server sing ng-hosting WordPress multisite sampeyan
3. Server ID bisa ditemokake nang URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Tindakake "Applications" lan pilih aplikasi WordPress sampeyan
5. App ID bisa ditemokake nang URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Tambah Konstanta nang wp-config.php {#3-add-constants-to-wp-configphp}

Tambah konstanta iki nang file `wp-config.php` sampeyan:

```php
define('WU_CLOUDWAYS_EMAIL', 'email cloudways panjenengan');
define('WU_CLOUDWAYS_API_KEY', 'api key cloudways panjenengan');
define('WU_CLOUDWAYS_SERVER_ID', 'id server cloudways panjenengan');
define('WU_CLOUDWAYS_APP_ID', 'id aplikasi cloudways panjenengan');
```

Yen sampeyan duwe domain **luar** (luar jaringan multisite panjenengan) sing kudu tansah ana ing daftar alias Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Aja sertakake wildcard jaringan panjenengan dhewe
**Aja** nambah `*.your-network.com` (utawa pola subdomain jaringan panjenengan dewe) menyang `WU_CLOUDWAYS_EXTRA_DOMAINS`. Deleng [Penting — jebakan SSL wildcard](#important--wildcard-ssl-pitfall) ing ngisor kanggo kenapa iki mencegah sertifikat SSL per-tenant diwenehake.
:::

### 4. Aktifake Integrasi {#4-enable-the-integration}

1. Ing admin WordPress panjenengan, tindakake Ultimate Multisite > Settings
2. Tindakake menyang tab "Domain Mapping"
3. Gulung ngisor menyang "Host Integrations"
4. Aktifake integrasi Cloudways
5. Klik "Save Changes"

## Kepiye Carane Nggunakake {#how-it-works}

### Domain Syncing {#domain-syncing}

Nalika domain dipetake ing Ultimate Multisite:

1. Integrasi kuwi njupuk kabeh domain sing wis dipetake
2. Integrasi kuwi nambah domain anyar menyang daftar (barengan karo versi www yen ana)
3. Integrasi kuwi ngirim daftar lengkap menyang Cloudways liwat API
4. Cloudways bakal ngupdate alias domain kanggo aplikasi panjenengan

Cathetan: API Cloudways mbutuh ngirim daftar domain lengkap saben wektu, ora mung nambah utawa ngilangake domain perorangan.

### SSL Certificate Management {#ssl-certificate-management}

Sawise domain disinkronisasi:

1. Integrasi kuwi bakal ngecek domain-domain sing duwe catatan DNS sing bener nyambung menyang server panjenengan
2. Integrasi kuwi ngirim permintaan menyang Cloudways kanggo instalasi sertifikat Let's Encrypt SSL kanggo domain-domain kasebut
3. Cloudways bakal ngurus penerbitan lan instalasi sertifikat SSL

Integrasi iki mesthi njaluk sertifikat Let's Encrypt **standar** (ora nganggo *wildcard*). Yen pola *wildcard* di `WU_CLOUDWAYS_EXTRA_DOMAINS` diwenehi, awalan `*.` bakal ilang sadurunge permintaan SSL — *wildcard*-e dhewe ora bakal dipasang dening integrasi iki. Kanggo nggunakake sertifikat *wildcard* ing Cloudways, sampeyan kudu nginstallé manual, nanging nindakake kuwi bakal ngrusak penerbitan Let's Encrypt per-domain kanggo domain kustom sing di-*map*, (deleng jebakan ing ngisor iki).

## Domain Ekstra (*Extra Domains*) {#extra-domains}

Konstanta `WU_CLOUDWAYS_EXTRA_DOMAINS` menehi sampeyan kesempatan kanggo nentokake domain **eksternal** tambahan sing kudu tansah ana ing daftar *alias* aplikasi Cloudways. Gunakna kanggo:

- Domain eksternal sing ora dikelola dening Ultimate Multisite (contone, situs pemasaran terpisah sing berbagi aplikasi Cloudways sing padha).
- Domain *parked* utawa *staging* sing arep sampeyan tansah ana ing daftar *alias* aplikasi.

**Aja** nganggo konstanta iki kanggo *subdomain wildcard* jaringan sampeyan dhewe (contone, `*.your-network.com`). Deleng jebakan SSL *wildcard* ing ngisor iki.

## Penting — Jebakan SSL Wildcard {#important--wildcard-ssl-pitfall}

Kesalahan umum nalika nindakake pengaturan *default* Cloudways yaiku nambah *wildcard* kaya `*.your-network.com` menyang `WU_CLOUDWAYS_EXTRA_DOMAINS`, utawa nginstallé sertifikat SSL *wildcard* Cloudways manual kanggo *wildcard* kasebut.

**Yen sampeyan nindakake iki, Cloudways bakal nolak menehi sertifikat Let's Encrypt kanggo domain kustom per-tenant sing di-*map* dening Ultimate Multisite.** Cloudways ngumbah sertifikat SSL aktif ing aplikasi saben wektu, lan sertifikat *wildcard* sing wis ana ing aplikasi bakal ngrusak penerbitan Let's Encrypt per-domain sing dikandelake dening integrasi iki.

### Pengaturan SSL Cloudways sing direkomendasikake kanggo jaringan Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Ing tab **SSL Certificate** ing aplikasi Cloudways, pasang sertifikat Let's Encrypt standar sing mung ngubungake `your-network.com` lan `www.your-network.com` — **ora** wildcard.
2. **Ora** masukak `*.your-network.com` (utawa pola subdomain jaringanmu dhewe) ing `WU_CLOUDWAYS_EXTRA_DOMAINS`. Simpen konstanta kuwi mung kanggo domain **eksternal**.
3. Gawe subdomain wildcard per tenant ing level **DNS** wae (record `A` kanggo `*.your-network.com` sing nunjukake IP server Cloudways-mu) supaya subsites bisa diakses. SSL kanggo domain kustom sing wis dipetakan dhewe bakal diurus otomatis dening integrasi liwat Let's Encrypt.

Yen domain kustom tenantmu macet tanpa SSL, cek ing tab Cloudways SSL. Yen sertifikat wildcard aktif ing kono, hapus, terbitake maneh sertifikat Let's Encrypt standar mung kanggo domain jaringan utama, lan hapus entri wildcard saka `WU_CLOUDWAYS_EXTRA_DOMAINS`. Banjur pancing maneh pemetaan domain (utawa tunggu sing sabanjure) lan integrasi bakal mulai ngeluarkan sertifikat per-domain maneh.

## Troubleshooting {#troubleshooting}

### Masalah Koneksi API {#api-connection-issues}
- Pastikan email lan API key-mu bener
- Cek yen ID server lan aplikasi-mu bener
- Pastikan akun Cloudways-mu duwe izin sing dibutuhake

### Masalah Sertifikat SSL {#ssl-certificate-issues}
- Cloudways butuh domain duwe record DNS sing bener (nyambung) menyang server sampe bisa ngeluarkan sertifikat SSL.
- Integrasi kuwi bakal ngecek record DNS dhisik sadurunge njaluk sertifikat SSL.
- Yen sertifikat SSL ora metu, cek maneh yen domainmu wis bener nyambung karo IP address servermu.
- **Domain kustom per tenant macet tanpa SSL?** Cek tab Sertifikat SSL ing aplikasi Cloudways. Yen sertifikat wildcard (sing diinstall manual, utawa ngubungi `*.your-network.com`) lagi aktif, Cloudways ora bakal ngeluarkan sertifikat Let's Encrypt kanggo domain kustom sing wis di-map dhewe. Ganti nganggo sertifikat Let's Encrypt standar sing mung nutupi domain jaringan utama (`your-network.com`, `www.your-network.com`) lan hapus entri wildcard saka `WU_CLOUDWAYS_EXTRA_DOMAINS`. Banjur, coba pancing mapping domain maneh (utawa tunggu yang sabanjure) lan integrasi kuwi bakal njaluk sertifikat per domain.

### Domain Ora Ditambah {#domain-not-added}
- Cek log Ultimate Multisite kanggo error message apa wae sing ana.
- Pastikan domainmu durung ditambahkan ing Cloudways.
- Pastikan paket Cloudways sampeyan duwe kapasitas cukup kanggo jumlah domain sing arep ditambah.
