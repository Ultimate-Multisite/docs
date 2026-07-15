---
title: Integrasi CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Integrasi CyberPanel

Panduan ini menjelaskan cara mengkonfigurasi integrasi Ultimate Multisite CyberPanel agar domain yang dipetakan (mapped domains) di jaringan Anda secara otomatis ditambahkan (dan dihapus) sebagai *virtual host* di CyberPanel, dengan opsi penyediaan auto-SSL melalui Let's Encrypt.

## Apa Fungsinya {#what-it-does}

- Ketika sebuah domain dipetakan di Ultimate Multisite, integrasi ini akan memanggil API CyberPanel untuk membuat *virtual host* bagi domain tersebut.
- Ketika pemetaan domain dihapus, integrasi ini memanggil API untuk menghapus *virtual host* yang sesuai.
- Ketika auto-SSL diaktifkan, integrasi ini akan memicu penerbitan sertifikat Let's Encrypt segera setelah *virtual host* dibuat.
- Secara opsional menambahkan/menghapus alias `www.` tergantung pada pengaturan "Auto-create www subdomain" di pengaturan Pemetaan Domain (*Domain Mapping*).

## Prasyarat {#prerequisites}

- Sebuah instance CyberPanel yang berjalan (disarankan v2.3 atau yang lebih baru) dan dapat dijangkau dari server WordPress Anda.
- Sebuah situs web yang sudah ada di CyberPanel yang sudah melayani *root* jaringan WordPress Anda. Integrasi ini akan melampirkan *virtual host* baru ke server ini.
- Akses API CyberPanel telah diaktifkan. Otentikasi menggunakan nama pengguna dan kata sandi admin CyberPanel Anda.
- Catatan DNS (*DNS records*) untuk domain yang dipetakan harus sudah menunjuk ke alamat IP server Anda sebelum auto-SSL dapat menerbitkan sertifikat yang valid.

## Persyaratan {#requirements}

Konstanta berikut harus didefinisikan di file `wp-config.php` Anda:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Secara opsional, Anda juga dapat mendefinisikan:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — menerbitkan SSL Let's Encrypt setelah pembuatan domain
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Digunakan untuk kontak sertifikat SSL
```

## Petunjuk Pengaturan {#setup-instructions}

### 1. Mengaktifkan API CyberPanel {#1-enable-the-cyberpanel-api}

1. Masuk ke *dashboard* CyberPanel Anda sebagai administrator.
2. Buka **Security** > **SSL** dan pastikan SSL aktif pada antarmuka CyberPanel itu sendiri (diperlukan untuk panggilan API yang aman).
3. API CyberPanel tersedia di `https://your-server-ip:8090/api/` secara *default*. Tidak diperlukan langkah tambahan untuk mengaktifkannya — ini aktif secara *default* untuk pengguna admin.

### 2. Menambahkan Konstanta ke wp-config.php {#2-add-constants-to-wp-configphp}

Tambahkan konstanta berikut ke file `wp-config.php` Anda sebelum baris `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Untuk mengaktifkan auto-SSL (disarankan):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Mengaktifkan Integrasi {#3-enable-the-integration}

1. Di admin jaringan WordPress Anda, buka **Ultimate Multisite** > **Settings**.
2. Arahkan ke tab **Domain Mapping**.
3. Gulir ke bawah ke **Host Integrations**.
4. Aktifkan integrasi **CyberPanel**.
5. Klik **Save Changes**.

### 4. Memverifikasi Konektivitas {#4-verify-connectivity}

Gunakan tes koneksi bawaan di *settings wizard*:

1. Buka **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Klik **Test Connection**.
3. Pesan sukses mengonfirmasi bahwa *plugin* dapat menjangkau API CyberPanel dan melakukan otentikasi dengan benar.

## Cara Kerjanya {#how-it-works}

### Pemetaan Domain (*Domain Mapping*) {#domain-mapping}

Ketika sebuah domain dipetakan di Ultimate Multisite:

1. Integrasi mengirim permintaan `POST` ke `/api/createWebsite` di *host* CyberPanel Anda.
2. CyberPanel membuat *virtual host* baru untuk domain tersebut di bawah paket yang dikonfigurasi.
3. *Document root* diatur untuk menunjuk ke direktori *root* jaringan WordPress Anda.
4. Ketika pemetaan domain dihapus, integrasi memanggil `/api/deleteWebsite` untuk membersihkan *virtual host*.

### Auto-SSL {#auto-ssl}

Ketika `WU_CYBERPANEL_AUTO_SSL` adalah `true`:

1. Setelah *virtual host* dibuat, integrasi memanggil `/api/issueSSL` untuk domain tersebut.
2. CyberPanel meminta sertifikat Let's Encrypt menggunakan tantangan ACME HTTP-01.
3. Sertifikat akan diperbarui secara otomatis oleh CyberPanel sebelum kedaluwarsa.

> **Penting:** DNS harus sepenuhnya menyebar (*propagated*) ke alamat IP server Anda sebelum Let's Encrypt dapat memvalidasi domain. Jika penerbitan SSL gagal segera setelah pemetaan, tunggu penyebaran DNS dan picu ulang SSL dari *dashboard* CyberPanel di bawah **SSL** > **Manage SSL**.

### Subdomain www {#www-subdomain}

Jika **Auto-create www subdomain** diaktifkan di pengaturan Pemetaan Domain Anda, integrasi juga membuat alias *virtual host* untuk `www.<domain>` dan, jika auto-SSL aktif, menerbitkan sertifikat yang mencakup varian *apex* dan www.

### Penerus Email (*Email Forwarders*) {#email-forwarders}

Ketika *addon* [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) aktif, CyberPanel juga dapat menyediakan penerus email pelanggan. Penerus meneruskan pesan dari alamat domain ke kotak masuk lain tanpa membuat kotak surat penuh, yang berguna untuk alias seperti `info@customer-domain.test` atau `support@customer-domain.test`.

Sebelum mengaktifkan penerus untuk pelanggan:

1. Pastikan konstanta CyberPanel di atas telah dikonfigurasi dan tes koneksi berhasil.
2. Aktifkan penyedia email CyberPanel di pengaturan *addon* Emails.
3. Pastikan domain pelanggan sudah ada di CyberPanel sebelum membuat penerus.
4. Buat penerus uji coba dan kirim pesan melaluinya sebelum menawarkan fitur ini pada paket produksi.

Jika pembuatan penerus gagal, periksa log aktivitas Ultimate Multisite terlebih dahulu, kemudian konfirmasi di CyberPanel bahwa domain sumber ada dan bahwa pengguna API memiliki izin manajemen email.

## Referensi Konfigurasi {#configuration-reference}

| Konstanta | Wajib | Default | Deskripsi |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Ya | — | URL lengkap ke instance CyberPanel Anda termasuk port, contoh: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Ya | — | Nama pengguna admin CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Ya | — | Kata sandi admin CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Ya | `Default` | Paket *hosting* CyberPanel untuk ditetapkan ke *virtual host* baru |
| `WU_CYBERPANEL_AUTO_SSL` | Tidak | `true` | Menerbitkan sertifikat SSL Let's Encrypt setelah pembuatan domain |
| `WU_CYBERPANEL_PHP_VERSION` | Tidak | `PHP 8.2` | Versi PHP untuk *virtual host* baru (harus cocok dengan versi yang terinstal di CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Tidak | — | Email kontak untuk pendaftaran sertifikat SSL |

## Catatan Penting {#important-notes}

- API CyberPanel menggunakan otentikasi token berbasis sesi. Integrasi ini menangani perolehan token secara otomatis pada setiap panggilan API.
- Akun admin CyberPanel Anda harus memiliki izin untuk membuat dan menghapus situs web.
- CyberPanel berjalan pada port `8090` secara *default*. Jika server Anda menggunakan *firewall*, pastikan port ini dapat diakses dari server aplikasi WordPress.
- Integrasi ini tidak mengelola catatan DNS. Anda harus menunjuk DNS domain ke alamat IP server Anda sebelum memetakan domain di Ultimate Multisite.
- Jika Anda menggunakan OpenLiteSpeed (OLS), *graceful restart* dipicu secara otomatis setelah perubahan *virtual host*. Tidak diperlukan intervensi manual.

## Pemecahan Masalah (*Troubleshooting*) {#troubleshooting}

### Koneksi API Ditolak (*API Connection Refused*) {#api-connection-refused}

- Verifikasi bahwa port `8090` terbuka di *firewall* server Anda.
- Konfirmasi bahwa nilai `WU_CYBERPANEL_HOST` menyertakan protokol (`https://`) dan port yang benar.
- Periksa bahwa sertifikat SSL CyberPanel Anda valid; sertifikat *self-signed* dapat menyebabkan kegagalan verifikasi TLS. Atur `WU_CYBERPANEL_VERIFY_SSL` ke `false` hanya di lingkungan jaringan pribadi yang tepercaya.

### Kesalahan Otentikasi (*Authentication Errors*) {#authentication-errors}

- Konfirmasi bahwa `WU_CYBERPANEL_USERNAME` dan `WU_CYBERPANEL_PASSWORD` Anda benar dengan masuk ke CyberPanel secara langsung.
- CyberPanel mengunci akun setelah upaya masuk yang gagal berulang kali. Periksa **Security** > **Brute Force Monitor** di CyberPanel jika terjadi penguncian.

### Domain Tidak Dibuat (*Domain Not Created*) {#domain-not-created}

- Periksa log aktivitas Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) untuk pesan kesalahan API.
- Verifikasi bahwa paket yang didefinisikan di `WU_CYBERPANEL_PACKAGE` ada di CyberPanel (**Packages** > **List Packages**).
- Pastikan domain belum terdaftar sebagai situs web di CyberPanel — pembuatan situs web duplikat akan mengembalikan kesalahan.

### Sertifikat SSL Tidak Diterbitkan (*SSL Certificate Not Issued*) {#ssl-certificate-not-issued}

- Konfirmasi bahwa DNS telah sepenuhnya menyebar: `dig +short your-domain.com` seharusnya mengembalikan IP server Anda.
- Let's Encrypt memberlakukan batas laju (*rate limits*). Jika Anda baru saja menerbitkan beberapa sertifikat untuk domain yang sama, tunggu sebelum mencoba lagi.
- Periksa log SSL CyberPanel di bawah **Logs** > **Error Logs** untuk detail kegagalan penerbitan sertifikat.
- Sebagai alternatif, Anda dapat menerbitkan SSL secara manual dari CyberPanel: **SSL** > **Manage SSL** > pilih domain > **Issue SSL**.

## Referensi {#references}

- Dokumentasi API CyberPanel: https://docs.cyberpanel.net/docs/category/api
- Manajemen SSL CyberPanel: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Batas Laju Let's Encrypt: https://letsencrypt.org/docs/rate-limits/
