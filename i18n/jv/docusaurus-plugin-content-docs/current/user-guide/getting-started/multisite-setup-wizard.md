---
title: Pemandu Pengaturan Multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Panduan Pengaturan Multisite

Ultimate Multisite duwe panduan otomatis sing ngubah instalasi WordPress biasa dadi jaringan WordPress Multisite. Iki ngilangi perlu kanggo ngedit `wp-config.php` utawa njalankan perintah database manual.

:::tip
Yen instalasi WordPress sampeyan wis jalan minangka jaringan Multisite, sampeyan bisa nglewatake langkah iki kabeh. Panduan mung bakal muncul nalika Multisite durung aktif.
:::

## Kapan Panduan Muncul? {#when-does-the-wizard-appear}

Nalika sampeyan aktifake Ultimate Multisite ing instalasi WordPress biasa (sing ora Multisite), plugin iki bakal ngeteksi yen Multisite durung aktif lan otomatis ngarahake sampeyan menyang Multisite Setup Wizard tinimbang panduan pengaturan lumrah.

Sampeyan uga bisa langsung akses kanthi menehi **WP Admin > Ultimate Multisite > Multisite Setup**.

## Prasyarat {#prerequisites}

Sadurunge njalankan panduan, pasthekna:

- Sampeyan duwe **akses administrator** ing instalasi WordPress sampeyan
- File `wp-config.php` server sampeyan **bisa ditulisi (writable)** dening web server
- Sampeyan duwe **backup anyar** saka file lan database sampeyan

:::warning
Panduan iki bakal ngubah file `wp-config.php` sampeyan lan nggawe tabel database anyar. Selalu gawe backup sadurunge lanjut.
:::

## Langkah 1: Selamat Datang (Welcome) {#step-1-welcome}

Layar kapisan njelasake apa iku WordPress Multisite lan apa sing bakal ditindakake dening panduan iki:

- Aktifake fitur Multisite ing konfigurasi WordPress sampeyan
- Gawe tabel database jaringan sing dibutuhake
- Tambah konstanta multisite sing dibutuhake menyang `wp-config.php`
- Aktifake Ultimate Multisite minangka jaringan ing seluruh jaringan

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Klik **Lanjut (Continue)** kanggo lanjut.

## Langkah 2: Konfigurasi Jaringan (Network Configuration) {#step-2-network-configuration}

Langkah iki njaluk sampeyan kanggo ngatur pengaturan jaringan sampeyan.

### Struktur Situs (Site Structure) {#site-structure}

Pilih bagaimana situs jaringan Anda akan diatur:

- **Sub-domain** (Direkomendasikan) — Situs akan mendapatkan subdomain sendiri, contohnya `site1.yourdomain.com`
- **Sub-direktori** — Situs dibuat sebagai jalur, contohnya `yourdomain.com/site1`

:::note
Yen Anda memilih sub-domain, Anda perlu mengatur **wildcard DNS** dan **wildcard SSL certificate** untuk domain Anda. Sebagian besar penyedia hosting WordPress yang dikelola akan menanganinya secara otomatis. Lihat [Ultimate Multisite 101](./ultimate-multisite-101) untuk perbandingan detailnya.
:::

### Judul Jaringan (Network Title) {#network-title}

Masukkan nama untuk jaringan Anda. Ini secara otomatis akan menggunakan judul situs Anda saat ini dengan tambahan "Network". Anda bisa mengubahnya nanti dari pengaturan jaringan.

### Email Admin Jaringan (Network Admin Email) {#network-admin-email}

Alamat email yang digunakan untuk notifikasi administrasi jaringan. Secara default, ini menggunakan alamat email pengguna saat ini.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Setelah mengisi kolom-kolom tersebut, klik **Continue** (Lanjutkan) untuk melanjutkan.

## Langkah 3: Instalasi {#step-3-installation}

Klik tombol **Install** (Instal) untuk memulai. Wizard ini akan melakukan lima langkah otomatis secara berurutan, dan setiap langkah akan menunjukkan progresnya secara *real-time*:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Langkah | Deskripsi |
|------|-------------|
| **Aktifkan Multisite** | Tambahkan konstanta `WP_ALLOW_MULTISITE` ke file `wp-config.php` |
| **Buat Jaringan (Network)** | Buat tabel database multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, dll.) dan isi dengan konfigurasi jaringan Anda |
| **Perbarui Konfigurasi** | Tambahkan konstanta multisite terakhir ke `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, dll.) |
| **Perbaiki Cookie** | Pastikan URL situs sudah benar di metadata jaringan agar tidak ada masalah otentikasi setelah diaktifkan |
| **Aktifkan Plugin Jaringan** | Aktifkan Ultimate Multisite agar berjalan di seluruh jaringan Anda |

Setiap langkah akan menampilkan salah satu status berikut:

- **Pending** — Menunggu untuk diproses
- **Installing...** — Sedang berjalan
- **Success!** — Berhasil diselesaikan
- **Pesan Error** — Terjadi kesalahan (pesan akan menjelaskan masalahnya)

Setelah semua langkah selesai dengan sukses, Anda akan melihat status hijau "Success!" untuk setiap item:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Wizard kemudian akan otomatis lanjut ke layar penyelesaian.

## Langkah 4: Selesai {#step-4-complete}

Setelah instalasi selesai, Anda akan melihat pesan sukses yang mengonfirmasi bahwa WordPress Multisite sudah diaktifkan.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Anda sekarang bisa melanjutkan dengan wizard Ultimate Multisite untuk mengkonfigurasi platform WaaS Anda (detail perusahaan, konten default, payment gateway, dll.).

:::note
Sawise instalasi multisite wis rampung, browser sampeyan bakal diarahkan menyang admin jaringan sing wis diaktifake. Mungkin sampeyan perlu login maneh amarga cookie otentikasi wis diupdate kanggo lingkungan multisite.
:::

## Cadangan Setup Manual {#manual-setup-fallback}

Yen wizard ora bisa nulis ing file `wp-config.php` sampeyan (amarga izin file utawa batasan server), dheweke bakal nuduhake kode persis sing perlu sampeyan tambahi manual:

1. **constants wp-config.php** sing kudu ditambahi dhuwur baris `/* That's all, stop editing! */`
2. **aturan rewrite .htaccess** sing pas kanggo struktur situs sing wis dipilih (subdomain utawa subdirectory)

Sawise nggawe perubahan manual, refresh maneh halaman lan wizard bakal ngerti yen multisite wis aktif.

## Troubleshooting {#troubleshooting}

### Wizard ngomong `wp-config.php` ora bisa ditulis {#the-wizard-says-wp-configphp-is-not-writable}

Proses web server sampeyan perlu izin tulis kanggo file `wp-config.php`. Sampeyan bisa:

- Ngganti izin file sementara dadi `644` utawa `666`
- Nggunakake instruksi cadangan setup manual sing wis diwenehake dening wizard
- Takon marang penyedia hosting sampeyan kanggo bantuan

### Situs ora bisa diakses sawise setup (subdomain) {#sites-are-not-accessible-after-setup-subdomains}

Yen sampeyan milih struktur subdomain, sampeyan perlu ngatur **wildcard DNS** kanggo domain sampeyan. Tambah record DNS:

```
Type: A (utawa CNAME)
Host: *
Value: [IP server sampeyan]
```

Cek karo penyedia hosting sampeyan yen sampeyan ora yakin kepiye carane ngatur iki.

### Masalah otentikasi sawise setup {#authentication-issues-after-setup}

Yen sampeyan wis di-logout utawa ngalami error cookie sawise setup multisite:

1. Bersih (clear) cookie browser sampeyan kanggo situs kasebut
2. Login maneh ing `yourdomain.com/wp-login.php`
3. Yen masalah isih ana, cek yen `wp-config.php` sampeyan ora duwe `COOKIE_DOMAIN` diatur dadi `false` — iki masalah sing wis dingerteni ing instalasi multisite subdomain

### Salah siji langkah gagal nalika instalasi {#a-step-failed-during-installation}

Yen salah siji langkah instalasi nunjukake error:

1. Catat pesan error sing muncul.
2. Balik maneh menyang langkah konfigurasi lan coba maneh.
3. Yen error tetep ana, cek log error PHP servermu kanggo detail luwih akeh.
4. Langkah-langkah sing wis rampung bakal dilewati pas dijalankan maneh (installer kuwi idempotent).
