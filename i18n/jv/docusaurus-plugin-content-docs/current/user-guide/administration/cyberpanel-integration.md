---
title: Integrasi CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Integrasi CyberPanel

Panduan iki njelasake carane ngatur integrasi Ultimate Multisite CyberPanel supaya domain sing wis di-map ing jaringan sampeyan otomatis ditambahi (lan dibuwang) minangka virtual host ing CyberPanel, karo pilihan auto-SSL liwat Let's Encrypt.

## Apa Sing Dilakoni

- Nalika domain di-map ing Ultimate Multisite, integrasi iki bakal ngirimake API CyberPanel kanggo nggawe virtual host kanggo domain kasebut.
- Nalika pemetaan domain dibuwang, integrasi iki bakal ngirimake API kanggo ngapus virtual host sing cocog.
- Nalika auto-SSL diaktifake, integrasi iki bakal mbuwang sertifikat Let's Encrypt langsung sawise virtual host digawe.
- Opsi nambah/ngapus alias `www.` gumantung setting "Auto-create www subdomain" ing pengaturan Domain Mapping sampeyan.

## Prasyarat

- Instansi CyberPanel sing lagi jalan (direkomendasikake v2.3 utawa luwih anyar) sing bisa dijangkau saka server WordPress sampeyan.
- Website sing wis ana ing CyberPanel sing wis nyedhiyakake root jaringan WordPress sampeyan. Integrasi iki bakal nempelake virtual host anyar menyang server iki.
- Akses API CyberPanel aktif. Otentikasi nganggo username lan password admin CyberPanel sampeyan.
- Catatan DNS kanggo domain sing di-map kudu wis nunjuk marang alamat IP server sampeyan sadurunge auto-SSL bisa mbuwang sertifikat sing sah.

## Persyaratan

Konstanta-konstanta iki kudu didefinisikake ing file `wp-config.php` sampeyan:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Opsi, sampeyan uga bisa nggawe:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — issue Let's Encrypt SSL after domain creation
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Used for SSL certificate contact
```

## Cara Setup

### 1. Aktifkan API CyberPanel

1. Masuk ke dashboard CyberPanel kamu sebagai admin.
2. Pergi ke **Security** > **SSL** lan pastikan SSL aktif di antarmuka CyberPanel itu sendiri (ini penting buat panggilan API yang aman).
3. API CyberPanel bisa diakses di `https://your-server-ip:8090/api/` secara default. Ora perlu langkah tambahan kanggo ngaktifake — wis on otomatis kanggo user admin.

### 2. Tambahkan Konstanta ke wp-config.php

Tambahkan konstanta iki menyang file `wp-config.php` kamu sadurunge baris `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Kanggo ngaktifake auto-SSL (direkomendasikake):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Aktifkan Integrasi

1. Ing admin jaringan WordPress kamu, pergi menyang **Ultimate Multisite** > **Settings**.
2. Tindakake menyang tab **Domain Mapping**.
3. Gulir nedhus nganti **Host Integrations**.
4. Aktifke integrasi **CyberPanel**.
5. Klik **Save Changes**.

### 4. Verifikasi Koneksi

Gunakan tes koneksi sing wis ana ing wizard pengaturan:

1. Tindakake menyang **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Klik **Test Connection**.
3. Pesan sukses bakal ngonfirmasi yen plugin bisa nyambung karo CyberPanel API lan otentikasi kanthi bener.

## Cara Kerjane

### Domain Mapping

Nalika domain di-map ing Ultimate Multisite:

1. Integrasi kuwi ngirim request `POST` menyang `/api/createWebsite` ing host CyberPanel sampeyan.
2. CyberPanel bakal nggawe virtual host anyar kanggo domain kasebut ing bawah package sing wis dikonfigurasi.
3. Document root bakal diatur supaya nunjuk marang directory root jaringan WordPress sampeyan.
4. Nalika domain mapping dihapus, integrasi kuwi bakal ngirim panggilan menyang `/api/deleteWebsite` kanggo resikake virtual host kasebut.

### Auto-SSL

Nalika `WU_CYBERPANEL_AUTO_SSL` diatur dadi `true`:

1. Sawise virtual host digawe, integrasi kuwi bakal ngirim panggilan menyang `/api/issueSSL` kanggo domain kasebut.
2. CyberPanel njaluk sertifikat Let's Encrypt nganggo tantangan ACME HTTP-01.
3. Sertifikat kasebut otomatis di-renew dening CyberPanel sadurunge kadaluwarsa.

> **Penting:** DNS kudu wis sepenuhnya disebarkan (propagated) menyang alamat IP server sampeyan sadurunge Let's Encrypt bisa validasi domain kasebut. Yen penerbitan SSL gagal langsung sawise mapping, sabar wae kanggo propagasi DNS lan pancing ulang SSL saka dashboard CyberPanel ing bawah **SSL** > **Manage SSL**.

### www Subdomain

Yen **Auto-create www subdomain** diaktifake ing pengaturan Domain Mapping sampeyan, integrasi kuwi uga bakal nggawe alias virtual host kanggo `www.<domain>` lan, nalika auto-SSL aktif, bakal ngeluarkan sertifikat sing nyakup varian apex lan www.

### Email Forwarders

Nalika addon [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) aktif, CyberPanel uga bisa nyediakake forwarder email pelanggan. Forwarder iki nggolek pesan saka alamat domain menyang inbox liyane tanpa perlu nggawe mailbox utuh, sing apik kanggo alias kaya `info@customer-domain.test` utawa `support@customer-domain.test`.

Sadurunge ngaktifake forwarder kanggo pelanggan:

1. Konfirmasi yen konstanta CyberPanel ing dhuwur wis diatur lan tes koneksi wis lancar.
2. Aktifake penyedia email CyberPanel ing pengaturan addon Emails.
3. Konfirmasi yen domain pelanggan wis ana ing CyberPanel sadurunge nggawe forwarder.
4. Gawe forwarder tes lan kirim pesan liwat iku sadurunge nawakake fitur iki kanggo rencana produksi.

Yen pembuatan forwarder gagal, cek log aktivitas Ultimate Multisite dhisik, banjur konfirmasi ing CyberPanel yen domain sumber wis ana lan yen user API duwe izin manajemen email.

## Referensi Konfigurasi

| Constant | Diperlukan | Default | Deskripsi |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Ya | — | URL lengkap menyang instance CyberPanel sampeyan kalebu port, contone: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Ya | — | Username admin CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Ya | — | Password admin CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Ya | `Default` | Paket hosting CyberPanel sing bakal ditemtokake kanggo virtual host anyar |
| `WU_CYBERPANEL_AUTO_SSL` | Ora | `true` | Ngasilake sertifikat SSL Let's Encrypt sawise domain digawe |
| `WU_CYBERPANEL_PHP_VERSION` | Ora | `PHP 8.2` | Versi PHP kanggo virtual host anyar ( kudu cocog karo versi sing wis diinstal ing CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Ora | — | Email kontak kanggo registrasi sertifikat SSL |

## Cathetan Penting

API CyberPanel nggunakake otentikasi token adhedhasar sesi (session-based token authentication). Integrasi iki ngurusake pangarep-arep token otomatis saben panggilan API.
Akun admin CyberPanel sampeyan kudu duwe izin kanggo nggawe lan ngapus website.
CyberPanel lumaku ing port `8090` kanthi default. Yen server sampeyan nganggo firewall, pastikan port iki bisa diakses saka server aplikasi WordPress.
Integrasi iki ora ngatur record DNS. Sampeyan kudu mbedakake DNS domain menyang alamat IP server samangke nggambar domain ing Ultimate Multisite.
Yen sampeyan nganggo OpenLiteSpeed (OLS), restart alon otomatis dipicu sawise owahane virtual host. Ora perlu intervensi manual.

## Troubleshooting

### API Connection Refused

- Verifikasi yen port `8090` wis dibuka ing firewall server sampeyan.
- Konfirmasi yen nilai `WU_CYBERPANEL_HOST` kalebu protokol sing bener (`https://`) lan port.
- Cek yen sertifikat SSL CyberPanel sampeyan sah; sertifikat self-signed bisa nyebabake kegagalan verifikasi TLS. Setel `WU_CYBERPANEL_VERIFY_SSL` dadi `false` mung ing lingkungan jaringan pribadi sing dipercaya.

### Authentication Errors

- Konfirmasi yen `WU_CYBERPANEL_USERNAME` lan `WU_CYBERPANEL_PASSWORD` sampeyan bener kanthi langsung login menyang CyberPanel.
- CyberPanel ngunci akun sawise upaya login gagal berkali-kali. Cek **Security** > **Brute Force Monitor** ing CyberPanel yen ana penguncian.

### Domain Not Created

- Cek log aktivitas Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) kanggo pesan error API.
- Verifikasi yen package sing didefinisi ing `WU_CYBERPANEL_PACKAGE` wis ana ing CyberPanel (**Packages** > **List Packages**).
- Pastikan domain ora wis diregistrasi minangka website ing CyberPanel — nggawe website duplikat bakal mbalikake error.

### SSL Certificate Not Issued

- Konfirmasi DNS wis sepenuhnya menyebar (propagasi): `dig +short your-domain.com` kudu nggawa IP servermu.
- Let's Encrypt duwe batasan kecepatan (rate limits). Yen saiki kowe wis ngeluarkan sawetara sertifikat kanggo domain sing padha, tunggu dhisit sadurunge nyoba maneh.
- Cek log SSL CyberPanel ing **Logs** > **Error Logs** kanggo detail kegagalan penerbitan sertifikat.
- Minangka pilihan cadangan (fallback), kowe bisa ngeluarkan SSL manual saka CyberPanel: **SSL** > **Manage SSL** > pilih domain > **Issue SSL**.

## Referensi

- Dokumentasi API CyberPanel: https://docs.cyberpanel.net/docs/category/api
- Manajemen SSL CyberPanel: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Batasan Kecepatan Let's Encrypt: https://letsencrypt.org/docs/rate-limits/
