---
title: Wizard Pengaturan Multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Wizard Pengaturan Multisite

Ultimate Multisite dilengkapi dengan wizard bawaan yang secara otomatis mengubah instalasi WordPress standar menjadi jaringan WordPress Multisite. Fitur ini menghilangkan kebutuhan untuk mengedit `wp-config.php` secara manual atau menjalankan perintah database.

:::tip
Jika instalasi WordPress Anda sudah berjalan sebagai jaringan Multisite, Anda dapat melewati langkah ini sepenuhnya. Wizard hanya muncul ketika Multisite belum diaktifkan.
:::

## Kapan Wizard Muncul?

Ketika Anda mengaktifkan Ultimate Multisite pada instalasi WordPress standar (bukan Multisite), plugin mendeteksi bahwa Multisite belum diaktifkan dan secara otomatis mengarahkan Anda ke Wizard Pengaturan Multisite, bukan ke wizard pengaturan biasa.

Anda juga dapat mengaksesnya langsung di **WP Admin > Ultimate Multisite > Multisite Setup**.

## Prasyarat

Sebelum menjalankan wizard, pastikan:

- Anda memiliki **akses administrator** ke instalasi WordPress Anda
- File `wp-config.php` server Anda **dapat ditulis** oleh web server
- Anda memiliki **backup terbaru** dari file dan database Anda

:::warning
Wizard ini memodifikasi file `wp-config.php` Anda dan membuat tabel database baru. Selalu buat backup sebelum melanjutkan.
:::

## Langkah 1: Selamat Datang

Layar pertama menjelaskan apa itu WordPress Multisite dan apa yang akan dilakukan wizard:

- Mengaktifkan fitur Multisite di konfigurasi WordPress Anda
- Membuat tabel database jaringan yang diperlukan
- Menambahkan konstanta multisite yang dibutuhkan ke `wp-config.php`
- Mengaktifkan Ultimate Multisite di seluruh jaringan

![Wizard Pengaturan Multisite - Langkah selamat datang](/img/installation/multisite-wizard/wizard-welcome.png)

Klik **Continue** untuk melanjutkan.

## Langkah 2: Konfigurasi Jaringan

Langkah ini meminta Anda untuk mengonfigurasi pengaturan jaringan Anda.

### Struktur Situs

Pilih bagaimana situs-situs dalam jaringan Anda akan diorganisir:

- **Sub-domain** (Disarankan) — Setiap situs mendapatkan subdomain sendiri, misalnya `site1.domainanda.com`
- **Sub-direktori** — Situs dibuat sebagai path, misalnya `domainanda.com/site1`

:::note
Jika Anda memilih sub-domain, Anda perlu mengonfigurasi **wildcard DNS** dan **wildcard SSL certificate** untuk domain Anda. Sebagian besar penyedia hosting WordPress terkelola menangani ini secara otomatis. Lihat [Ultimate Multisite 101](./ultimate-multisite-101) untuk perbandingan lengkap.
:::

### Nama Jaringan

Masukkan nama untuk jaringan Anda. Secara default, ini adalah judul situs Anda saat ini dengan tambahan "Network". Anda dapat mengubahnya nanti dari pengaturan jaringan.

### Email Admin Jaringan

Alamat email yang digunakan untuk notifikasi administrasi jaringan. Secara default, ini adalah alamat email pengguna saat ini.

![Wizard Pengaturan Multisite - Konfigurasi Jaringan](/img/installation/multisite-wizard/wizard-network-configuration.png)

Setelah mengisi semua kolom, klik **Continue** untuk melanjutkan.

## Langkah 3: Instalasi

Klik tombol **Install** untuk memulai. Wizard melakukan lima langkah otomatis secara berurutan, masing-masing menampilkan progresnya secara real-time:

![Wizard Pengaturan Multisite - Instalasi menunggu](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Langkah | Deskripsi |
|---------|-----------|
| **Enable Multisite** | Menambahkan konstanta `WP_ALLOW_MULTISITE` ke `wp-config.php` |
| **Create Network** | Membuat tabel database multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, dll.) dan mengisinya dengan konfigurasi jaringan Anda |
| **Update Configuration** | Menambahkan konstanta multisite akhir ke `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, dll.) |
| **Fix Cookies** | Memastikan URL situs sudah benar di metadata jaringan untuk mencegah masalah autentikasi setelah aktivasi |
| **Network Activate Plugin** | Mengaktifkan Ultimate Multisite di seluruh jaringan sehingga berjalan di semua situs |

Setiap langkah menampilkan salah satu status berikut:

- **Pending** — Menunggu untuk diproses
- **Installing...** — Sedang berjalan
- **Success!** — Berhasil diselesaikan
- **Pesan error** — Terjadi kesalahan (pesan akan menjelaskan masalahnya)

Setelah semua langkah selesai dengan sukses, Anda akan melihat status "Success!" berwarna hijau untuk setiap item:

![Wizard Pengaturan Multisite - Instalasi selesai](/img/installation/multisite-wizard/wizard-installation-complete.png)

Wizard kemudian akan secara otomatis melanjutkan ke layar penyelesaian.

## Langkah 4: Selesai

Setelah instalasi selesai, Anda akan melihat pesan sukses yang mengonfirmasi bahwa WordPress Multisite telah diaktifkan.

![Wizard Pengaturan Multisite - Pengaturan Selesai](/img/installation/multisite-wizard/wizard-complete.png)

Anda sekarang dapat melanjutkan dengan wizard pengaturan Ultimate Multisite untuk mengonfigurasi platform WaaS Anda (detail perusahaan, konten default, payment gateway, dll.).

:::note
Setelah instalasi multisite selesai, browser Anda akan diarahkan melalui network admin yang baru diaktifkan. Anda mungkin perlu login kembali karena cookie autentikasi diperbarui untuk lingkungan multisite.
:::

## Pengaturan Manual Sebagai Cadangan

Jika wizard tidak dapat menulis ke file `wp-config.php` Anda (karena izin file atau pembatasan server), wizard akan menampilkan kode yang perlu Anda tambahkan secara manual:

1. **Konstanta wp-config.php** yang perlu ditambahkan di atas baris `/* That's all, stop editing! */`
2. **Aturan rewrite .htaccess** yang sesuai dengan struktur situs yang Anda pilih (subdomain atau subdirektori)

Setelah melakukan perubahan manual, refresh halaman dan wizard akan mendeteksi bahwa multisite sekarang sudah aktif.

## Pemecahan Masalah

### Wizard mengatakan wp-config.php tidak dapat ditulis

Proses web server Anda memerlukan izin tulis ke file `wp-config.php`. Anda dapat:

- Mengubah sementara izin file menjadi `644` atau `666`
- Menggunakan instruksi pengaturan manual yang disediakan oleh wizard
- Meminta bantuan dari penyedia hosting Anda

### Situs tidak dapat diakses setelah pengaturan (subdomain)

Jika Anda memilih struktur subdomain, Anda perlu mengonfigurasi **wildcard DNS** untuk domain Anda. Tambahkan DNS record:

```
Type: A (or CNAME)
Host: *
Value: [IP server Anda]
```

Hubungi penyedia hosting Anda jika Anda tidak yakin cara mengonfigurasi ini.

### Masalah autentikasi setelah pengaturan

Jika Anda keluar atau mengalami error cookie setelah pengaturan multisite:

1. Hapus cookie browser Anda untuk situs tersebut
2. Login kembali di `domainanda.com/wp-login.php`
3. Jika masalah berlanjut, periksa apakah `wp-config.php` Anda tidak memiliki `COOKIE_DOMAIN` yang diatur ke `false` — ini adalah masalah yang diketahui pada instalasi multisite subdomain

### Sebuah langkah gagal selama instalasi

Jika salah satu langkah instalasi menampilkan error:

1. Catat pesan error yang ditampilkan
2. Kembali ke langkah konfigurasi dan coba lagi
3. Jika error berlanjut, periksa log error PHP server Anda untuk detail lebih lanjut
4. Langkah-langkah yang sudah selesai akan dilewati pada percobaan berikutnya (installer bersifat idempoten)
