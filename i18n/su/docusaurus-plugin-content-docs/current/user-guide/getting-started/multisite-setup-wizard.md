---
title: Pituduh Panata Multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Panduan Penyiapan Multisite

Ultimate Multisite ngabarkeun wizard anu aya di dalamnya anu otomatis ngubah instalasi WordPress biasa jadi jaringan WordPress Multisite. Ieu ngahapkeun kabutuhan pikeun ngedit `wp-config.php` atawa ngalaksanakeun perintah database secara manual.

:::tip
Upami instalasi WordPress anjeun geus jalan salaku jaringan Multisite, anjeun bisa leuwihna léngkah ieu. Wizard ngan bakal muncul lamun Multisite teu kungsi diaktifkeun.
:::

## Imah Mana Wizard Mun Mun?

Lamun anjeun ngaktifkeun Ultimate Multisite dina instalasi WordPress biasa (non-Multisite), plugin éta bakal ngadeukeutan yén Multisite teu aktif terus ngarujuk anjeun ka Multisite Setup Wizard tibatan wizard panyiapan biasa.

Anjeun ogé bisa langsung ngaksesna di **WP Admin > Ultimate Multisite > Multisite Setup**.

## Syarat-syarat Mun Diperyakeun (Prerequisites)

Samémang ngalaksanakeun wizard, pastikeun yén:

- Anjeun gaduh **akses administrator** ka instalasi WordPress anjeun
- File `wp-config.php` server anjeun **bisa ditulis (writable)** ku web server
- Anjeun gaduh **backup anyar** tina file jeung database anjeun

:::warning
Wizard ieu ngubah file `wp-config.php` anjeun sarta nyiptake tabel database anyar. Selalu jieun backup samémang neraskeun.
:::

## Léngkah 1: Salam (Welcome)

Layar kahiji jelaskeun naon éta téh WordPress Multisite jeung naon anu bakal dilakukeun ku wizard:

- Ngaktifkeun fitur Multisite dina konfigurasi WordPress anjeun
- Nyiptake tabel database jaringan anu dipikawanoh
- Nambahan konstanta multisite anu dipikahoyong ka `wp-config.php`
- Ngaktifkeun Ultimate Multisite di jaringan sakuliah (network)

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Klik **Lanjut (Continue)** pikeun neraskeun.

## Léngkah 2: Konfigurasi Jaringan (Network Configuration)

Léngkah ieu nanya anjeun pikeun ngatur pengaturan jaringan anjeun.

### Struktur Situs (Site Structure)

Pilih bagaimana situs jaringan Anda akan diorganisasi:

- **Sub-domain** (Direkomendasikan) — Situs akan mendapatkan subdomain sendiri, contohnya `site1.yourdomain.com`
- **Sub-direktori** — Situs dibuat sebagai jalur, contohnya `yourdomain.com/site1`

:::note
Lamun Anda memilih sub-domain, Anda perlu mengatur **wildcard DNS** dan **wildcard SSL certificate** untuk domain Anda. Kebanyakan hosting WordPress yang dikelola akan menanganinya secara otomatis. Lihat [Ultimate Multisite 101](./ultimate-multisite-101) untuk perbandingan detailnya.
:::

### Judul Jaringan (Network Title)

Masukkan nama untuk jaringan Anda. Ini secara otomatis akan menggunakan judul situs Anda saat ini dengan tambahan "Network". Anda bisa mengubahnya nanti dari pengaturan jaringan.

### Email Admin Jaringan (Network Admin Email)

Alamat email yang digunakan untuk notifikasi administrasi jaringan. Ini secara otomatis akan menggunakan alamat email pengguna saat ini.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Setelah mengisi kolom-kolom tersebut, klik **Lanjutkan** (Continue) untuk melanjutkan.

## Langkah 3: Instalasi

Klik tombol **Instal** (Install) untuk memulai. Wizard akan melakukan lima langkah otomatis secara berurutan, dan setiap langkah akan menunjukkan progresnya secara *real-time*:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Langkah | Deskripsi |
|------|-------------|
| **Aktifkan Multisite** | Tambahkan konstanta `WP_ALLOW_MULTISITE` ke file `wp-config.php` |
| **Buat Jaringan (Network)** | Buat tabel database multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, dll.) dan isi dengan konfigurasi jaringan Anda |
| **Perbarui Konfigurasi** | Tambahkan konstanta multisite terakhir ke `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, dll.) |
| **Perbaiki Cookie** | Pastikan URL situs sudah benar di metadata jaringan untuk mencegah masalah otentikasi setelah diaktifkan |
| **Aktifkan Plugin Jaringan** | Aktifkan Ultimate Multisite agar berjalan di seluruh jaringan Anda |

Setiap langkah akan menampilkan salah satu status berikut:

- **Pending** — Menunggu diproses
- **Installing...** — Sedang berjalan
- **Success!** — Berhasil diselesaikan
- **Pesan Error** — Terjadi kesalahan (pesan akan menjelaskan masalahnya)

Setelah semua langkah selesai dengan sukses, Anda akan melihat status hijau "Success!" untuk setiap item:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Wizard kemudian akan otomatis lanjut ke layar penyelesaian.

## Langkah 4: Selesai

Setelah instalasi selesai, Anda akan melihat pesan sukses yang mengonfirmasi bahwa WordPress Multisite sudah aktif.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Anda sekarang bisa melanjutkan dengan wizard Ultimate Multisite untuk mengkonfigurasi platform WaaS Anda (detail perusahaan, konten default, payment gateway, dll.).

:::note
Sanggeunna instalasi multisite tos réngsé, browser anjeun bakal dialihkan ka admin jaringan anu geus diaktifkeun. Anjeun mungkin kudu login deui sabab cookie autentikasi geus diupdate pikeun lingkungan multisite.
:::

## Pilihan Setup Manual Salaku Cadangan (Manual Setup Fallback)

Lamun wizard teu bisa nulis kana file `wp-config.php` anjeun (alatan izin file atawa batasan server), éta bakal nunjukkeun kode persis anu kedah anjeun tambihan sacara manual:

1. **konstanta wp-config.php** anu kudu ditambihan di luhur baris `/* That's all, stop editing! */`
2. **aturan rewrite .htaccess** anu cocog jeung struktur situs anu anjeun pilih (subdomain atawa subdirectory)

Sanggeus ngalakukeun ganti manual éta, refresh halaman terus wizard bakal ngadeukeutan yén multisite geus aktif.

## Troubleshooting

### Wizard nyarios wp-config.php teu bisa ditulis (not writable)

Proses web server anjeun butuh izin nulis ka file `wp-config.php`. Anjeun bisa:

- Ngaganti izin file sacara sementara jadi `644` atawa `666`
- Ngagunakeun instruksi setup manual anu parantos dipasihkeun ku wizard
- Nanya bantuan ka penyedia hosting anjeun

### Situs teu bisa diakses sanggeus setup (subdomain)

Lamun anjeun milih struktur subdomain, anjeun kudu ngatur **wildcard DNS** pikeun domain anjeun. Tambah record DNS:

```
Type: A (atawa CNAME)
Host: *
Value: [IP server anjeun]
```

Cek jeung penyedia hosting anjeun lamun anjeun teu yakin kumaha cara ngatur éta.

### Masalah autentikasi sanggeus setup

Lamun anjeun geus logout atawa ngalaman error cookie sanggeus setup multisite:

1. Bersihkeun cookie browser anjeun pikeun situs éta
2. Login deui di `yourdomain.com/wp-login.php`
3. Lamun masalahna masih aya, cek yén `wp-config.php` anjeun teu ngabogaan `COOKIE_DOMAIN` diatur jadi `false` — ieu mangrupa masalah anu geus kasohor dina instalasi multisite subdomain.

### Aya langkah anu gagal dina instalasi

Upami salah sahiji langkah instalasi nunjukkeun error:

1. Catat pesan error anu muncul.
2. Balik deui ka langkah konfigurasi jeung coba deui.
3. Upami errorna masih aya, cek PHP error log server anjeun pikeun rincian leuwih.
4. Langkah-langkah anu geus réngsé bakal dilewati dina jalannya instalasi salajengna (installer téh idempotent).
