---
title: Integrasi CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Integrasi CyberPanel

Panduan ini menjelaskan cara mengatur integrasi Ultimate Multisite CyberPanel agar domain yang sudah dipetakan di jaringan Anda otomatis ditambahkan (dan dihapus) sebagai virtual host di CyberPanel, dengan opsi penyediaan auto-SSL melalui Let's Encrypt.

## Apa Fungsinya {#what-it-does}

- Ketika sebuah domain dipetakan di Ultimate Multisite, integrasi ini akan memanggil API CyberPanel untuk membuat virtual host untuk domain tersebut.
- Ketika pemetaan domain dihapus, integrasi ini akan memanggil API untuk menghapus virtual host yang sesuai.
- Ketika auto-SSL diaktifkan, integrasi ini akan memicu penerbitan sertifikat Let's Encrypt segera setelah virtual host dibuat.
- Secara opsional menambahkan/menghapus alias `www` tergantung pada pengaturan "Auto-create www subdomain" Anda di pengaturan Pemetaan Domain (Domain Mapping settings).

## Persyaratan Awal {#prerequisites}

- Sebuah instance CyberPanel yang berjalan (direkomendasikan versi v2.3 atau lebih baru) yang dapat dijangkau dari server WordPress Anda.
- Sebuah situs web yang sudah ada di CyberPanel yang sudah melayani root jaringan WordPress Anda. Integrasi ini akan menempelkan virtual host baru ke server ini.
- Akses API CyberPanel diaktifkan. Otentikasi menggunakan nama pengguna dan kata sandi admin CyberPanel Anda.
- Catatan DNS untuk domain yang dipetakan harus sudah mengarah ke alamat IP server Anda sebelum auto-SSL dapat menerbitkan sertifikat yang valid.

## Persyaratan {#requirements}

Konstanta berikut harus didefinisikan di file `wp-config.php` Anda:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Secara opsional, Anda juga bisa mendefinisikan:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — SSL Let's Encrypt masalah sang domain jadi
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Dipake kanggo kontak sertifikat SSL
```

## Panduan Setup {#setup-instructions}

### 1. Aktifkeun API CyberPanel {#1-enable-the-cyberpanel-api}

1. Login ka dashboard CyberPanel an asup pamimpin (administrator).
2. Pergi ka **Security** > **SSL** teras SSL aktif dina antarmuka CyberPanel sorangan (diperyogikeun pikeun panggil API anu aman).
3. API CyberPanel biasana aya di `https://your-server-ip:8090/api/`. Teu perlu langkah tambahan pikeun ngaktifkeunana — éta geus aktif saperti default pikeun admin.

### 2. Tambah Konstanta ka wp-config.php {#2-add-constants-to-wp-configphp}

Tambah konstanta ieu dina file `wp-config.php` saméména baris `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'password_aman_anda');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Kanggo ngaktifkeun auto-SSL (dipikahoyong):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Aktifkeun Integrasi {#3-enable-the-integration}

1. Di admin jaringan WordPress an, pergi ka **Ultimate Multisite** > **Settings**.
2. Pindah ka tab **Domain Mapping**.
3. Gulirkeun ka handap nepi ka **Host Integrations**.
4. Aktifkeun integrasi **CyberPanel**.
5. Klik **Save Changes**.

### 4. Verifikasi Konektivitas {#4-verify-connectivity}

Gunakan tes koneksi anu aya dina wizard pengaturan:

1. **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**-na pergi ka.
2. **Test Connection**-na klikkeun.
3. Pesan sukses bakal ngabuktikeun yén plugin bisa nyampe ka CyberPanel API jeung autentikasi téh bener.

## Kumaha Cara Kerjanya {#how-it-works}

### Domain Mapping {#domain-mapping}

Lamun domain dipetakan dina Ultimate Multisite:

1. Integrasi bakal ngirimkeun `POST` request ka `/api/createWebsite` di host CyberPanel anjeun.
2. CyberPanel bakal nyiptake virtual host anyar pikeun domain éta dina paket anu geus dikonfigurasi.
3. *Document root*-na bakal diatur pikeun nunjukkeun ka direktori akar jaringan WordPress anjeun.
4. Lamun pemetaan domain dileupaskeun, integrasi bakal ngirim `/api/deleteWebsite` pikeun ngabersihkeun virtual host éta.

### Auto-SSL {#auto-ssl}

Lamun `WU_CYBERPANEL_AUTO_SSL` diatur jadi `true`:

1. Sanggeus virtual host diciptakeun, integrasi bakal ngirim `/api/issueSSL` pikeun domain éta.
2. CyberPanel bakal ménta sertifikat Let's Encrypt nganggo tantangan ACME HTTP-01.
3. Sertifikat téh otomatis di-renew ku CyberPanel saméméh kedaluwarsa.

> **Penting:** DNS kudu geus luyu pisan ka alamat IP server anjeun saméméh Let's Encrypt bisa ngabales validasi domain. Lamun penerbitan SSL gagal langsung sanggeus mapping, ulah sieun, sabar waé pikeun propagasi DNS terus re-trigger SSL ti dashboard CyberPanel di bagian **SSL** > **Manage SSL**.

### Subdomain www {#www-subdomain}

Lamun **Auto-create www subdomain** diaktifkeun dina pengaturan Domain Mapping anjeun, integrasi ogé bakal nyiptake alias virtual host pikeun `www.<domain>` jeung, lamun auto-SSL on, bakal ngabéré sertifikat anu ngawengku varian apex jeung www.

### Email Forwarders {#email-forwarders}

Lamun addon [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) aktif, CyberPanel ogéng bisa nyediakeur layanan *customer email forwarder*. Forwarder ieu ngarutkeun pesan ti alamat domain ka kotak masuk séjén tanpa perlu bikin mailbox penuh, eta pantes pisan keun alias saperti `info@customer-domain.test` atawa `support@customer-domain.test`.

Saméméan ngaktifkeun *forwarder* pikeun pelanggan:

1. Pastike konstanta CyberPanel di luhur geus dikonfigurasi bener jeung tes koneksina lancar.
2. Aktifkeun penyedia email CyberPanel dina pengaturan addon Emails.
3. Pastike domain pelanggan geus aya di CyberPanel saméméh ngadamel *forwarder*.
4. Bikin *test forwarder* teras kirim pesan ngaliwatan éta saméméh nawarkeun fitur ieu dina rencana produksi.

Lamun pembuatan *forwarder* gagal, cek log aktivitas Ultimate Multisite heula, tuluy pastike di CyberPanel yén domain sumber geus aya jeung yén API user boga izin manajemen email.

## Referensi Konfigurasi {#configuration-reference}

| Constant | Diperlukan | Default | Deskripsi |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Ya | — | URL lengkap instance CyberPanel anjeun kaasup portna, conto: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Ya | — | Username admin CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Ya | — | Password admin CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Ya | `Default` | Paket hosting CyberPanel anu bakal dipasihan ka *virtual host* anyar |
| `WU_CYBERPANEL_AUTO_SSL` | Teu | `true` | Ngajadikeun sertifikat SSL Let's Encrypt sanggeus domain diciptakeun |
| `WU_CYBERPANEL_PHP_VERSION` | Teu | `PHP 8.2` | Versi PHP pikeun *virtual host* anyar (harus cocong jeung versi anu dipasang di CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Teu | — | Email kontak kanggo registrasi sertifikat SSL |

## Catatan Penting {#important-notes}

API CyberPanel nganggo ngagunake otentikasi token adegan (session-based token authentication). Integrasi ieu nguruskeun panampa token secara otomatis dina unggal panggilan API.
Akun admin CyberPanel anjeun kudu boga ijin pikeun nyipta jeung ngapus website.
CyberPanel biasana jalan di port `8090`. Upami server anjeun nganggo firewall, pastikeun port ieu bisa diakses tina server aplikasi WordPress.
Integrasi ieu teu ngatur record DNS. Anjeun kudu nunjukkeun domain DNS ka alamat IP server anjeun saméméh mapping domain dina Ultimate Multisite.
Upami anjeun nganggo OpenLiteSpeed (OLS), *graceful restart* bakal dipicu otomatis sanggeus ganti virtual host. Teu perlu intervensi manual.

## Troubleshooting {#troubleshooting}

### API Connection Refused {#api-connection-refused}

- Pastikeun yén port `8090` dibuka dina firewall server anjeun.
- Konfirmasina nilai `WU_CYBERPANEL_HOST` ngandung protokol anu bener (`https://`) jeung portna.
- Periksa yén sertifikat SSL CyberPanel anjeun valid; sertifikat *self-signed* bisa nyababkeun gagal verifikasi TLS. Setel `WU_CYBERPANEL_VERIFY_SSL` jadi `false` ngan ukur dina lingkungan jaringan pribadi anu dipercaya.

### Authentication Errors {#authentication-errors}

- Konfirmasina `WU_CYBERPANEL_USERNAME` jeung `WU_CYBERPANEL_PASSWORD` anjeun bener ku cara *login* langsung ka CyberPanel.
- CyberPanel bakal ngunci akun sanggeus aya percobaan *login* gagal anu parah. Periksa **Security** > **Brute Force Monitor** dina CyberPanel upami aya kunci akun (lockouts).

### Domain Teu Diciptakeun {#domain-not-created}

- Periksa log aktivitas Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) pikeun pesan error API.
- Pastikeun paket anu ditangtukeun dina `WU_CYBERPANEL_PACKAGE` aya di CyberPanel (**Packages** > **List Packages**).
- Pastikeun domain éta teu geus terdaftar salaku website di CyberPanel — nyiptakeun website duplikat bakal ngabalukarkeun error.

### SSL Certificate Teu Diperuntukan {#ssl-certificate-not-issued}

- Pastike DNS geusna sabener: `dig +short your-domain.com` kudu ngabales IP server anjeun.
- Let's Encrypt ngatur batasan laju (rate limits). Lamun anjeun réa ngajual sababaraha sertifikat pikeun domain anu sarua, ulah langsung coba deui, tunggu saeutik.
- Cek log SSL CyberPanel di bagian **Logs** > **Error Logs** pikeun rincian gagalna penerbitan sertifikat.
- Salaku pilihan pamungkas (fallback), anjeun bisa ngajual SSL sacara manual tina CyberPanel: **SSL** > **Manage SSL** > pilih domain > **Issue SSL**.

## Referensi {#references}

- Dokumentasi API CyberPanel: https://docs.cyberpanel.net/docs/category/api
- Manajemen SSL CyberPanel: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Batasan Laju Let's Encrypt: https://letsencrypt.org/docs/rate-limits/
