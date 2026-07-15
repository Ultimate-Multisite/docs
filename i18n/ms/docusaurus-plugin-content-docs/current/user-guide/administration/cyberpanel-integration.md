---
title: Integrasi CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Integrasi CyberPanel

Panduan ini menerangkan cara mengkonfigurasi integrasi Ultimate Multisite CyberPanel supaya domain yang dipetakan dalam rangkaian anda ditambah (dan dikeluarkan) secara automatik sebagai *virtual host* dalam CyberPanel, dengan penyediaan auto-SSL pilihan melalui Let's Encrypt.

## Apa Fungsinya {#what-it-does}

- Apabila domain dipetakan dalam Ultimate Multisite, integrasi ini akan memanggil API CyberPanel untuk mencipta *virtual host* bagi domain tersebut.
- Apabila pemetaan domain dikeluarkan, integrasi ini akan memanggil API untuk memadamkan *virtual host* yang sepadan.
- Apabila auto-SSL diaktifkan, integrasi ini akan mencetuskan pengeluaran sijil Let's Encrypt serta-merta selepas *virtual host* dicipta.
- Secara pilihan, ia menambah/mengeluarkan alias `www.` bergantung pada tetapan "Auto-create www subdomain" dalam tetapan Pemetaan Domain.

## Prasyarat {#prerequisites}

- Satu instans CyberPanel yang sedang berjalan (disyorkan v2.3 atau lebih baru) dan boleh diakses daripada pelayan WordPress anda.
- Sebuah laman web sedia ada dalam CyberPanel yang sudah berfungsi sebagai akar rangkaian WordPress anda. Integrasi ini akan melampirkan *virtual host* baharu kepada pelayan ini.
- Akses API CyberPanel diaktifkan. Pengesahan menggunakan nama pengguna dan kata laluan admin CyberPanel anda.
- Rekod DNS anda untuk domain yang dipetakan mesti sudah menunjuk ke alamat IP pelayan anda sebelum auto-SSL boleh mengeluarkan sijil yang sah.

## Keperluan {#requirements}

Pemalar (constants) berikut mesti ditakrifkan dalam fail `wp-config.php` anda:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Secara pilihan, anda juga boleh mentakrifkan:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — mengeluarkan SSL Let's Encrypt selepas penciptaan domain
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Digunakan untuk kontak sijil SSL
```

## Arahan Persediaan {#setup-instructions}

### 1. Aktifkan API CyberPanel {#1-enable-the-cyberpanel-api}

1. Log masuk ke *dashboard* CyberPanel anda sebagai pentadbir.
2. Pergi ke **Security** > **SSL** dan sahkan bahawa SSL aktif pada antara muka CyberPanel itu sendiri (diperlukan untuk panggilan API yang selamat).
3. API CyberPanel tersedia pada `https://your-server-ip:8090/api/` secara lalai. Tiada langkah tambahan diperlukan untuk mengaktifkannya — ia aktif secara lalai untuk pengguna admin.

### 2. Tambah Pemalar ke wp-config.php {#2-add-constants-to-wp-configphp}

Tambah pemalar berikut ke fail `wp-config.php` anda sebelum baris `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Untuk mengaktifkan auto-SSL (disyorkan):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Aktifkan Integrasi {#3-enable-the-integration}

1. Dalam pentadbir rangkaian WordPress anda, pergi ke **Ultimate Multisite** > **Settings**.
2. Navigasi ke tab **Domain Mapping**.
3. Gulir ke bawah ke **Host Integrations**.
4. Aktifkan integrasi **CyberPanel**.
5. Klik **Save Changes**.

### 4. Sahkan Sambungan {#4-verify-connectivity}

Gunakan ujian sambungan terbina dalam dalam *settings wizard*:

1. Pergi ke **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Klik **Test Connection**.
3. Mesej kejayaan mengesahkan bahawa *plugin* boleh mencapai API CyberPanel dan mengesahkan pengesahan dengan betul.

## Cara Ia Berfungsi {#how-it-works}

### Pemetaan Domain {#domain-mapping}

Apabila domain dipetakan dalam Ultimate Multisite:

1. Integrasi ini menghantar permintaan `POST` ke `/api/createWebsite` pada hos CyberPanel anda.
2. CyberPanel mencipta *virtual host* baharu untuk domain di bawah pakej yang dikonfigurasi.
3. *Document root* ditetapkan untuk menunjuk ke direktori akar rangkaian WordPress anda.
4. Apabila pemetaan domain dikeluarkan, integrasi ini memanggil `/api/deleteWebsite` untuk membersihkan *virtual host*.

### Auto-SSL {#auto-ssl}

Apabila `WU_CYBERPANEL_AUTO_SSL` adalah `true`:

1. Selepas *virtual host* dicipta, integrasi ini memanggil `/api/issueSSL` untuk domain tersebut.
2. CyberPanel meminta sijil Let's Encrypt menggunakan cabaran ACME HTTP-01.
3. Sijil ini diperbaharui secara automatik oleh CyberPanel sebelum tamat tempoh.

> **Penting:** DNS mesti telah tersebar sepenuhnya ke alamat IP pelayan anda sebelum Let's Encrypt boleh mengesahkan domain. Jika pengeluaran SSL gagal serta-merta selepas pemetaan, tunggu penyebaran DNS dan picu semula SSL dari *dashboard* CyberPanel di bawah **SSL** > **Manage SSL**.

### Subdomain www {#www-subdomain}

Jika **Auto-create www subdomain** diaktifkan dalam tetapan Pemetaan Domain anda, integrasi ini juga mencipta alias *virtual host* untuk `www.<domain>` dan, apabila auto-SSL diaktifkan, mengeluarkan sijil yang meliputi varian apex dan www.

### Penghala E-mel (Email Forwarders) {#email-forwarders}

Apabila *addon* [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) aktif, CyberPanel juga boleh menyediakan penghala e-mel pelanggan. Penghala ini menghalakan mesej daripada alamat domain ke peti masuk lain tanpa mencipta peti mel penuh, yang berguna untuk alias seperti `info@customer-domain.test` atau `support@customer-domain.test`.

Sebelum mengaktifkan penghala untuk pelanggan:

1. Sahkan pemalar CyberPanel di atas telah dikonfigurasi dan ujian sambungan lulus.
2. Aktifkan penyedia e-mel CyberPanel dalam tetapan *addon* Emails.
3. Sahkan domain pelanggan sudah wujud dalam CyberPanel sebelum mencipta penghala.
4. Cipta penghala ujian dan hantar mesej melalui ia sebelum menawarkan ciri ini pada pelan pengeluaran.

Jika penciptaan penghala gagal, semak log aktiviti Ultimate Multisite dahulu, kemudian sahkan dalam CyberPanel bahawa domain sumber wujud dan bahawa pengguna API mempunyai kebenaran pengurusan e-mel.

## Rujukan Konfigurasi {#configuration-reference}

| Pemalar | Diperlukan | Lalai | Penerangan |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Ya | — | URL penuh ke instans CyberPanel anda termasuk port, cth: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Ya | — | Nama pengguna admin CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Ya | — | Kata laluan admin CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Ya | `Default` | Pakej hos CyberPanel untuk ditetapkan kepada *virtual host* baharu |
| `WU_CYBERPANEL_AUTO_SSL` | Tidak | `true` | Mengeluarkan sijil SSL Let's Encrypt selepas penciptaan domain |
| `WU_CYBERPANEL_PHP_VERSION` | Tidak | `PHP 8.2` | Versi PHP untuk *virtual host* baharu (mesti sepadan dengan versi yang dipasang dalam CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Tidak | — | E-mel kontak untuk pendaftaran sijil SSL |

## Nota Penting {#important-notes}

- API CyberPanel menggunakan pengesahan token berasaskan sesi. Integrasi ini mengendalikan perolehan token secara automatik pada setiap panggilan API.
- Akaun admin CyberPanel anda mesti mempunyai kebenaran untuk mencipta dan memadamkan laman web.
- CyberPanel berjalan pada port `8090` secara lalai. Jika pelayan anda menggunakan *firewall*, pastikan port ini boleh diakses daripada pelayan aplikasi WordPress.
- Integrasi ini tidak menguruskan rekod DNS. Anda mesti menunjuk DNS domain ke alamat IP pelayan anda sebelum memetakan domain dalam Ultimate Multisite.
- Jika anda menggunakan OpenLiteSpeed (OLS), *graceful restart* dicetuskan secara automatik selepas perubahan *virtual host*. Tiada campur tangan manual diperlukan.

## Penyelesaian Masalah {#troubleshooting}

### Sambungan API Ditolak (Connection Refused) {#api-connection-refused}

- Sahkan bahawa port `8090` terbuka dalam *firewall* pelayan anda.
- Sahkan bahawa nilai `WU_CYBERPANEL_HOST` merangkumi protokol (`https://`) dan port yang betul.
- Semak bahawa sijil SSL CyberPanel anda sah; sijil tandatangan kendiri (*self-signed certificates*) mungkin menyebabkan kegagalan pengesahan TLS. Tetapkan `WU_CYBERPANEL_VERIFY_SSL` kepada `false` hanya dalam persekitaran rangkaian peribadi yang dipercayai.

### Ralat Pengesahan (Authentication Errors) {#authentication-errors}

- Sahkan bahawa `WU_CYBERPANEL_USERNAME` dan `WU_CYBERPANEL_PASSWORD` anda betul dengan log masuk ke CyberPanel secara langsung.
- CyberPanel mengunci akaun selepas percubaan log masuk yang gagal berulang kali. Semak **Security** > **Brute Force Monitor** dalam CyberPanel jika berlaku penguncian.

### Domain Tidak Dicipta {#domain-not-created}

- Semak log aktiviti Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) untuk mesej ralat API.
- Sahkan bahawa pakej yang ditakrifkan dalam `WU_CYBERPANEL_PACKAGE` wujud dalam CyberPanel (**Packages** > **List Packages**).
- Pastikan domain tersebut belum didaftarkan sebagai laman web dalam CyberPanel — penciptaan laman web berganda akan mengembalikan ralat.

### Sijil SSL Tidak Dikeluarkan {#ssl-certificate-not-issued}

- Sahkan DNS telah tersebar sepenuhnya: `dig +short your-domain.com` sepatutnya mengembalikan alamat IP pelayan anda.
- Let's Encrypt menguatkuasakan had kadar (*rate limits*). Jika anda baru-baru ini mengeluarkan beberapa sijil untuk domain yang sama, tunggu sebelum mencuba semula.
- Semak log SSL CyberPanel di bawah **Logs** > **Error Logs** untuk butiran kegagalan pengeluaran sijil.
- Sebagai pilihan sandaran, anda boleh mengeluarkan SSL secara manual dari CyberPanel: **SSL** > **Manage SSL** > pilih domain > **Issue SSL**.

## Rujukan {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
